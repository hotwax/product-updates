import { CONFIG } from "../src/config/index.js";
import { getTargetMonth, extractPRRefsWithLinks, extractLinkedIssueNumbers } from "../src/utils/index.js";
import { fetchMonthlyReleases, fetchContext } from "../src/services/github.js";
import { refreshRepoContextCache, runOrganizer } from "../src/agents/organizer.js";
import { runSummarizer } from "../src/agents/summarizer.js";
import { runSynthesizer } from "../src/agents/synthesizer.js";
import { 
    loadPendingPRFAQs, 
    identifyProductUpdateMatches, 
    runProductUpdater
} from "../src/agents/product_updater.js";
import {
    buildProductUpdateArtifact,
    buildReleaseNotesArtifact,
    createPublishManifest,
    savePublishManifest
} from "../src/publishing/manifest.js";
import { loadSyncState, saveSyncState, seedSyncStateForManifest } from "../src/publishing/state.js";
import { normalizeSlugSegment } from "../src/publishing/metadata.js";
import { 
    loadRepoContextCache, 
    saveRawContext, 
    saveClusterMatrix,
    getRawContextFilePath,
    getMonthStorageDir,
    saveReleaseNotes,
    saveProductUpdate
} from "../src/storage/index.js";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function formatMonthLabel(targetMonth) {
    const [year, month] = targetMonth.split("-").map(Number);
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" })
        .format(new Date(Date.UTC(year, month - 1, 1)));
}

function formatSourceLink(item) {
    const repoName = item.repo.split("/").pop();
    const number = item.number || String(item.id || "").split("#").pop();
    return `[${repoName}#${number}](https://github.com/${item.repo}/pull/${number})`;
}

function isLikelyNoise(item) {
    const text = `${item.title || ""} ${item.body || ""}`.toLowerCase();
    return [
        "refactor copydependencies",
        "renamed data files",
        "only formatting",
        "revert \"",
        "june 15"
    ].some(pattern => text.includes(pattern));
}

function getFallbackCategory(item) {
    const text = `${item.repo || ""} ${item.title || ""} ${item.body || ""}`.toLowerCase();
    if (text.includes("shopify") || text.includes("inventory reset") || text.includes("real-time inventory") || text.includes("realtime inventory")) {
        return "Shopify and inventory synchronization";
    }
    if (text.includes("risk") || text.includes("task") || text.includes("park") || text.includes("order funnel") || text.includes("ship group")) {
        return "Order operations";
    }
    if (text.includes("product") || text.includes("facility") || text.includes("customer") || text.includes("solr")) {
        return "Product, facility, and customer data";
    }
    if (text.includes("return") || text.includes("shipment") || text.includes("pick profile") || text.includes("fulfillment") || text.includes("fedex") || text.includes("klaviyo")) {
        return "Fulfillment, returns, and communication";
    }
    if (text.includes("permission") || text.includes("security") || text.includes("data manager") || text.includes("admin") || text.includes("netsuite")) {
        return "Administration and security";
    }
    return "System and platform maintenance";
}

function buildFallbackReleaseNotes(targetMonth, rawItems, error) {
    const monthLabel = formatMonthLabel(targetMonth);
    const groups = new Map();
    for (const item of rawItems) {
        if (isLikelyNoise(item)) continue;
        const category = getFallbackCategory(item);
        if (!groups.has(category)) groups.set(category, []);
        groups.get(category).push(item);
    }

    const preferredOrder = [
        "Order operations",
        "Product, facility, and customer data",
        "Shopify and inventory synchronization",
        "Fulfillment, returns, and communication",
        "Administration and security",
        "System and platform maintenance"
    ];

    const lines = [
        `# ${monthLabel} Release Notes`,
        "",
        `${monthLabel} includes updates across HotWax Commerce order operations, inventory synchronization, Shopify integration, fulfillment, and administration. These notes summarize the source releases and pull requests included in the monthly update.`,
        ""
    ];

    console.warn(`  ⚠️  Falling back to deterministic release notes because AI generation failed: ${error.message}`);

    for (const category of preferredOrder) {
        const items = groups.get(category) || [];
        if (items.length === 0) continue;
        lines.push(`## ${category}`, "");

        const selected = items.slice(0, 12);
        lines.push(`This area includes ${items.length} source update${items.length === 1 ? "" : "s"} for ${targetMonth}. Key changes include:`);
        lines.push("");
        for (const item of selected) {
            lines.push(`- ${item.title}`);
        }
        if (items.length > selected.length) {
            lines.push(`- ${items.length - selected.length} additional maintenance and supporting update${items.length - selected.length === 1 ? "" : "s"}.`);
        }
        lines.push("");
        lines.push(`*Sources: ${selected.map(formatSourceLink).join(", ")}*`);
        lines.push("");
    }

    return lines.join("\n").trim() + "\n";
}

function getClusterSummaryPath(targetMonth, cluster) {
    const summaryDir = path.join(getMonthStorageDir(targetMonth), "cluster-summaries");
    if (!fs.existsSync(summaryDir)) fs.mkdirSync(summaryDir, { recursive: true });
    return path.join(summaryDir, `${normalizeSlugSegment(cluster.name)}.json`);
}

function buildClusterFallbackSummary(cluster, clusterItems, error) {
    const selected = clusterItems.slice(0, 5);
    const titles = selected
        .map(item => `${item.repo.split("/").pop()}#${item.number}: ${item.title}`)
        .join("; ");
    const additional = clusterItems.length > selected.length
        ? `, plus ${clusterItems.length - selected.length} more related change${clusterItems.length - selected.length === 1 ? "" : "s"}`
        : "";
    return `${cluster.name} includes ${titles}${additional}. This section needs editorial review because the cluster summarizer failed: ${error.message}`;
}

(async () => {
    if (!CONFIG.SOURCE_REPOS || !CONFIG.ORG_GIT_API) {
        throw new Error("Missing required environment variables: SOURCE_REPOS and ORG_GIT_API");
    }
    if (!CONFIG.GEMINI_API_KEY && !CONFIG.DRY_RUN) {
        throw new Error("Missing required environment variable: GEMINI_API_KEY");
    }

    const generationMode = process.env.GENERATION_MODE === "replay" ? "replay" : "monthly";
    const targetMonth = getTargetMonth(CONFIG.MONTH, CONFIG.PUBLISHING.automation.timezone);
    console.log(`📅 Target Month: ${targetMonth}`);
    console.log(`🧭 Generation Mode: ${generationMode}`);
    console.log(`🚀 Starting Stage 0: Discovery & Fetching...`);

    const repoMetadata = {};
    const itemMetadata = [];
    const repoCache = loadRepoContextCache();

    const repos = CONFIG.SOURCE_REPOS.split(",").map(r => r.trim());

    const rawContextPath = getRawContextFilePath(targetMonth);
    const skipFetching = fs.existsSync(rawContextPath) && process.env.REFRESH_RAW_CONTEXT !== "true";

    if (skipFetching) {
        console.log(`📡 Raw context found at ${rawContextPath}. Skipping Stage 0 fetching...`);
        // Reconstruct itemMetadata for Phase 1 from raw context
        const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
        for (const item of rawData) {
            itemMetadata.push({
                id: item.id,
                repo: item.repo,
                title: item.title,
                labels: item.labels,
                type: item.type,
                body: item.body || "",
                linkedIssues: item.linkedIssues || [],
                linkedIssueIds: item.linkedIssues?.map(i => i.number) || []
            });
        }
        // Reconstruct repoMetadata from cache
        for (const repoFull of repos) {
            const repoContext = repoCache[repoFull];
            const [owner, repo] = repoFull.split("/");
            repoMetadata[repoFull] = { 
                owner, 
                repo,
                description: repoContext?.description || "No description provided.",
                relations: repoContext?.relations || "No relations identified."
            };
        }
    } else {
        // 0.1 Pre-fetch missing repository context in batch
        await refreshRepoContextCache(repos, repoCache);

        for (const repoFull of repos) {
            const [owner, repo] = repoFull.split("/");
            
            const repoContext = repoCache[repoFull];
            repoMetadata[repoFull] = { 
                owner, 
                repo,
                description: repoContext?.description || "No description provided.",
                relations: repoContext?.relations || "No relations identified."
            };
            
            console.log(`Fetching updates from ${repoFull}...`);

            try {
                const releases = await fetchMonthlyReleases(owner, repo, targetMonth);

                for (const release of releases) {
                    const prRefs = extractPRRefsWithLinks(release.body, owner, repo);
                    
                    for (const prRef of prRefs) {
                        console.log(`  Fetching context for #${prRef.number}...`);
                        const context = await fetchContext(owner, repo, prRef.number);
                        
                        if (context) {
                            const linkedIssueNumbers = context.type === 'PR' ? extractLinkedIssueNumbers(context.body) : [];
                            const linkedIssues = [];
                            for (const issueNum of linkedIssueNumbers) {
                                console.log(`    Fetching linked Issue #${issueNum}...`);
                                const issueDetails = await fetchContext(owner, repo, issueNum);
                                if (issueDetails) linkedIssues.push(issueDetails);
                            }
                            
                            const itemData = {
                                id: `${repoFull}#${prRef.number}`,
                                repo: repoFull,
                                type: context.type,
                                number: prRef.number,
                                title: context.title,
                                labels: context.labels,
                                body: context.body,
                                files: context.files,
                                linkedIssues,
                                releaseTag: release.tag_name
                            };

                            itemMetadata.push({
                                id: itemData.id,
                                repo: itemData.repo,
                                title: itemData.title,
                                labels: itemData.labels,
                                type: itemData.type,
                                body: itemData.body,
                                linkedIssues: itemData.linkedIssues,
                                linkedIssueIds: linkedIssues.map(i => i.number)
                            });

                            saveRawContext(targetMonth, itemData);
                        }
                    }
                }
            } catch (error) {
                console.error(`  Error in ${repoFull}: ${error.message}`);
            }
        }
    }

    // saveRepoMetadata(targetMonth, repoMetadata);
    console.log(`✅ Stage 0 Complete. Fetched ${itemMetadata.length} items from ${repos.length} repositories.`);

    if (itemMetadata.length === 0) {
        console.log(`⚠️  No updates found for ${targetMonth}. Skipping agent phases.`);
        return;
    }

    const manifestItems = [];

    try {
        // --- PHASE 1: ORGANIZER AGENT ---
        console.log(`\n🧠 Starting Phase 1: Organizer Agent...`);
        const matrixResult = await runOrganizer(targetMonth, repoMetadata, itemMetadata);
    
    const repoLogicalNames = matrixResult.repoLogicalNames || {};
    for (const [repoId, logicalName] of Object.entries(repoLogicalNames)) {
        if (repoMetadata[repoId]) repoMetadata[repoId].logicalName = logicalName;
    }

    const matrix = { 
        clusters: matrixResult.clusters || [], 
        noiseItemIds: matrixResult.noiseItemIds || [],
        needClarificationItemIds: matrixResult.needClarificationItemIds || []
    };

    saveClusterMatrix(targetMonth, matrix);
    
    // --- PHASE 2: CLUSTER SUMMARIZER ---
    console.log(`\n✨ Starting Phase 2: Cluster Summarizer Agent...`);
    const clusterSummaries = [];
    
    
    if (!fs.existsSync(rawContextPath)) {
        console.error(`❌ Phase 2 Error: Raw context file not found at ${rawContextPath}`);
        return;
    }

    const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
    const rawDataMap = new Map(rawData.map(d => [d.id, d]));

    console.log(`✨ Summarizing ${matrix.clusters.length} clusters...`);

    for (const cluster of matrix.clusters) {
        console.log(`  Summarizing Cluster: ${cluster.name}...`);
        const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
        if (clusterItems.length === 0) continue;

        const summaryPath = getClusterSummaryPath(targetMonth, cluster);
        let summaryRecord;
        if (CONFIG.REUSE_CLUSTER_SUMMARIES && fs.existsSync(summaryPath)) {
            console.log(`    ↳ Reusing saved cluster summary from ${summaryPath}`);
            summaryRecord = JSON.parse(fs.readFileSync(summaryPath, "utf8"));
        } else {
            let summaryText;
            try {
                summaryText = await runSummarizer(targetMonth, cluster, clusterItems);
            } catch (error) {
                if (!CONFIG.CONTINUE_ON_SUMMARIZER_ERROR) throw error;
                console.warn(`    ⚠️  Cluster summarizer failed for ${cluster.name}: ${error.message}`);
                summaryText = buildClusterFallbackSummary(cluster, clusterItems, error);
            }
            summaryRecord = {
                name: cluster.name,
                summary: summaryText,
                prReferences: clusterItems.map(item => ({
                    repo: item.repo,
                    number: item.number,
                    url: `https://github.com/${item.repo}/pull/${item.number}`
                }))
            };
            fs.writeFileSync(summaryPath, JSON.stringify(summaryRecord, null, 2));
        }

        clusterSummaries.push({
            name: cluster.name,
            summary: summaryRecord.summary,
            prReferences: summaryRecord.prReferences
        });
    }

    // --- PHASE 3: CONFORMITY AGENT ---
    console.log(`\n🖋️  Starting Phase 3: Conformity Agent (Synthesis)...`);
    const finalNotes = await runSynthesizer(targetMonth, clusterSummaries);
        const releaseNotesArtifact = buildReleaseNotesArtifact(targetMonth, finalNotes);
        saveReleaseNotes(targetMonth, releaseNotesArtifact.document);
        manifestItems.push(releaseNotesArtifact.manifestItem);

    // --- PHASE 4: PRODUCT UPDATE GENERATION ---
    console.log(`\n📽️  Starting Phase 4: Product Update Generation...`);
    const pendingFAQs = loadPendingPRFAQs();
        if (pendingFAQs.length > 0) {
            console.log(`  Found ${pendingFAQs.length} pending PR FAQs. Matching with clusters...`);
            const matches = await identifyProductUpdateMatches(targetMonth, matrix.clusters, pendingFAQs);
        
        if (matches.length > 0) {
            console.log(`  Found ${matches.length} matches. Generating product updates...`);

            for (const match of matches) {
                const faq = pendingFAQs[match.faqIndex];
                const clusterIndices = Array.isArray(match.clusterIndices) ? match.clusterIndices : [match.clusterIndex];
                
                for (const clusterIdx of clusterIndices) {
                    const cluster = matrix.clusters[clusterIdx];
                    if (!cluster) continue;

                    console.log(`  Drafting product update for: ${faq.title} (Matched with cluster: ${cluster.name})...`);
                    const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
                    
                    const productUpdate = await runProductUpdater(targetMonth, cluster, clusterItems, faq);
                    const artifact = buildProductUpdateArtifact(targetMonth, faq.title, productUpdate, faq.filename);
                    const safeTitle = normalizeSlugSegment(faq.title).replace(/-/g, "_");

                    saveProductUpdate(targetMonth, safeTitle, artifact.document);
                    manifestItems.push(artifact.manifestItem);
                }
            }
        } else {
            console.log("  No matches found between PR FAQs and this month's clusters.");
        }
        } else {
            console.log("  No pending PR FAQs found.");
        }
    } catch (error) {
        manifestItems.length = 0;
        const fallbackRawData = fs.existsSync(rawContextPath)
            ? fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse)
            : itemMetadata;
        const fallbackNotes = buildFallbackReleaseNotes(targetMonth, fallbackRawData, error);
        const releaseNotesArtifact = buildReleaseNotesArtifact(targetMonth, fallbackNotes);
        saveReleaseNotes(targetMonth, releaseNotesArtifact.document);
        manifestItems.push(releaseNotesArtifact.manifestItem);
    }

    const manifest = createPublishManifest(targetMonth, manifestItems);
    savePublishManifest(targetMonth, manifest);

    const sourceCommit = process.env.GITHUB_SHA || execSync("git rev-parse HEAD").toString().trim();
    const syncState = seedSyncStateForManifest(loadSyncState(), manifest, sourceCommit, {
        mode: generationMode,
        replayReason: process.env.REPLAY_REASON || null
    });
    saveSyncState(syncState);
})();
