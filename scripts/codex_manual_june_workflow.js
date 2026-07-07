import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { CONFIG } from "../src/config/index.js";
import {
    buildProductUpdateArtifact,
    buildReleaseNotesArtifact,
    createPublishManifest,
    savePublishManifest
} from "../src/publishing/manifest.js";
import { normalizeMarkdownBody, normalizeSlugSegment, stripFrontmatter } from "../src/publishing/metadata.js";
import { loadSyncState, saveSyncState, seedSyncStateForManifest } from "../src/publishing/state.js";

const targetMonth = process.env.MONTH || "2026-06";
const rawDir = path.join("data", "raw", targetMonth);
const draftDir = path.join("drafts", targetMonth);
const releaseNotesPath = path.join(draftDir, "release-notes.md");

function readJsonl(filePath) {
    return fs.readFileSync(filePath, "utf8").trim().split("\n").filter(Boolean).map(line => JSON.parse(line));
}

function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const data = {};
    if (!match) return { data, body: content.trim() };
    for (const line of match[1].split(/\r?\n/)) {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex === -1) continue;
        data[line.slice(0, separatorIndex).trim()] = line.slice(separatorIndex + 1).trim();
    }
    return { data, body: content.slice(match[0].length).trim() };
}

function formatSourceLink(item) {
    const repoName = item.repo.split("/").pop();
    return `[${repoName}#${item.number}](https://github.com/${item.repo}/pull/${item.number})`;
}

function extractReleaseSections(markdown) {
    const body = stripFrontmatter(markdown);
    const sectionRegex = /^###\s+(.+)$/gm;
    const matches = [...body.matchAll(sectionRegex)];
    return matches.map((match, index) => {
        const title = match[1].trim();
        const start = match.index + match[0].length;
        const end = index + 1 < matches.length ? matches[index + 1].index : body.length;
        const sectionBody = body.slice(start, end).trim();
        const itemIds = [...sectionBody.matchAll(/\[[^\]]+#\d+\]\(https:\/\/github\.com\/hotwax\/([^/]+)\/pull\/(\d+)\)/g)]
            .map(ref => `hotwax/${ref[1]}#${ref[2]}`);
        const summary = sectionBody
            .replace(/\*Sources:[\s\S]*?\*$/m, "")
            .trim();
        return {
            name: title,
            reason: summary.split(/\n{2,}/)[0]?.replace(/\s+/g, " ").trim() || title,
            summary,
            itemIds
        };
    });
}

function buildOrganizerResponse(clusters, rawItems, previousMatrix) {
    const rawIds = new Set(rawItems.map(item => item.id));
    const clustered = new Set();
    const normalizedClusters = clusters.map(cluster => {
        const itemIds = [...new Set(cluster.itemIds.filter(id => rawIds.has(id) && !clustered.has(id)))];
        itemIds.forEach(id => clustered.add(id));
        return {
            name: cluster.name,
            reason: cluster.reason,
            itemIds
        };
    });

    const oldNoise = new Set(previousMatrix.noiseItemIds || []);
    const oldClarification = new Set(previousMatrix.needClarificationItemIds || []);
    const noiseItemIds = [];
    const needClarificationItemIds = [];

    for (const item of rawItems) {
        if (clustered.has(item.id)) continue;
        if (oldClarification.has(item.id)) {
            needClarificationItemIds.push(item.id);
        } else {
            noiseItemIds.push(item.id);
        }
    }

    return {
        repoLogicalNames: {
            "hotwax/receiving": "Receiving",
            "hotwax/bopis": "Store Pickup",
            "hotwax/job-manager": "Job Manager",
            "hotwax/hotwax-maarg-util": "Maarg Utilities",
            "hotwax/mantle-shopify-connector": "Shopify Connector",
            "hotwax/oms": "Moqui OMS",
            "hotwax/hotwax-shopify-oms-bridge": "Shopify OMS Bridge",
            "hotwax/hotwax-oms": "OFBiz OMS",
            "hotwax/hotwax-poorti": "Poorti",
            "hotwax/hotwax-ofbiz-oms-usl": "OFBiz OMS USL",
            "hotwax/mantle-netsuite-connector": "NetSuite Connector",
            "hotwax/hotwax-unigate": "Unigate",
            "hotwax/OrderRouting": "Order Routing"
        },
        clusters: normalizedClusters,
        noiseItemIds,
        needClarificationItemIds
    };
}

function loadPendingFaqs() {
    const dir = path.join("data", "pr-faqs");
    return fs.readdirSync(dir)
        .filter(file => file.endsWith(".md"))
        .sort()
        .map(file => {
            const filePath = path.join(dir, file);
            const parsed = parseFrontmatter(fs.readFileSync(filePath, "utf8"));
            return { file, filePath, ...parsed };
        })
        .filter(faq => faq.data.status === "pending");
}

function sectionByName(sections, name) {
    const section = sections.find(candidate => candidate.name === name);
    if (!section) throw new Error(`Missing release section ${name}`);
    return section;
}

function buildProductUpdateBody({ heading, problem, changed, operations, impact, sources }) {
    return [
        `### ${heading}`,
        "",
        problem,
        "",
        "### What changed",
        "",
        changed,
        "",
        "### How the workflow operates",
        "",
        operations,
        "",
        "### Operational impact",
        "",
        impact,
        "",
        `*Sources: ${sources}*`,
        ""
    ].join("\n");
}

function buildProductUpdates(sections, rawMap) {
    const sourceLinks = section => section.itemIds
        .filter(id => rawMap.has(id))
        .map(id => formatSourceLink(rawMap.get(id)))
        .join(", ");

    const definitions = [
        {
            faq: "agent-composer-oms-agents.md",
            title: "HotWax introduces Agent Composer for building governed OMS agents",
            clusters: ["Agent Composer and Workforce"],
            body: buildProductUpdateBody({
                heading: "Governed agents for OMS work",
                problem: "Retail teams often know which OMS questions they want answered, but turning those ideas into safe automation usually requires a custom project. Agent Composer changes that model by letting teams define an agent, select approved OMS capabilities, preview behavior, and decide which actions require human approval.",
                changed: "The June work adds the app and service foundation for composing agents from HotWax capabilities. Users can write or improve instructions, select model behavior, attach tools, activate an agent, and run the agent in Workforce with tool-call visibility.",
                operations: "The agent is not given open system access. It works through approved capabilities, and sensitive actions can be routed through approval before they run. Workforce keeps the conversation, tool calls, approval state, and outcome visible in one operating surface.",
                impact: "Teams can move investigation and repetitive support work closer to the people who understand the workflow, while still keeping OMS mutations governed and traceable.",
                sources: sourceLinks(sectionByName(sections, "Agent Composer and Workforce"))
            })
        },
        {
            faq: "data-document-report-builder.md",
            title: "HotWax turns DataDocuments into a self-service operational report builder",
            clusters: ["DataDocuments as reusable report definitions"],
            body: buildProductUpdateBody({
                heading: "Reusable definitions for operational reports",
                problem: "Operational reports often start as support requests or one-off SQL because the data lives across orders, items, jobs, messages, products, and facilities. That slows teams down when they need a repeatable view of exceptions or integration activity.",
                changed: "DataDocuments now act as reusable report definitions for Job Manager. A definition can describe the root entity, related records, selected fields, conditions, preview behavior, export behavior, and delivery use cases.",
                operations: "The same definition can power a preview, CSV export, scheduled report, or future feed. Implementation teams define the shape once, and operators can reuse that shape without needing direct database access.",
                impact: "Reporting becomes a product capability instead of a custom engineering loop. Teams can standardize recurring operational questions and reduce the time needed to create customer-specific reports.",
                sources: sourceLinks(sectionByName(sections, "DataDocuments as reusable report definitions"))
            })
        },
        {
            faq: "job-manager-v2-overall.md",
            title: "HotWax launches Job Manager V2, a Maarg-first control plane for integration operations",
            clusters: ["Job Manager V2 as the integration control plane"],
            body: buildProductUpdateBody({
                heading: "A focused control plane for integration work",
                problem: "Integration operations depend on scheduled jobs, files, system messages, search indexes, and configuration records. When those tools are scattered across generic admin screens, support teams spend too much time translating framework details into operational action.",
                changed: "Job Manager V2 is now centered on the integration surfaces teams actually use: job monitoring, Data Manager resources, system messages, Solr setup and indexing, admin onboarding, and job response handling.",
                operations: "The app can show integration jobs and supporting records in a Maarg-first workspace. Operators can inspect what ran, which messages moved, which files or documents are involved, and which search or setup action needs attention.",
                impact: "The result is a clearer operating room for orders, inventory, products, fulfillment, and integration payloads, with fewer reasons to fall back to broad framework administration.",
                sources: sourceLinks(sectionByName(sections, "Job Manager V2 as the integration control plane"))
            })
        },
        {
            faq: "order-funnel.md",
            title: "HotWax gives fulfillment teams a real-time order funnel for seeing where orders are moving, blocked, and waiting to sync",
            clusters: ["Order Funnel as the fulfillment operating dashboard"],
            body: buildProductUpdateBody({
                heading: "Fulfillment health as an operating dashboard",
                problem: "Fulfillment teams need to know where work is building up: open orders, brokering, picking, packing, rejected work, unfillable orders, and held tasks. A report is not enough if the operator still has to search for the queue behind the number.",
                changed: "Order Funnel brings product-store and facility-level fulfillment metrics into Order Manager. The supporting services return facility filters, oldest-order indicators, open order counts, unfillable metrics, progress totals, and rejected-order views.",
                operations: "The dashboard connects each metric to the work queue or facility context behind it. Teams can move from a daily health check to the exact facility, queue, or exception category that needs review.",
                impact: "Fulfillment leadership gets a faster way to spot stuck work, and operators get a more direct path from metric to action.",
                sources: sourceLinks(sectionByName(sections, "Order Funnel as the fulfillment operating dashboard"))
            })
        },
        {
            faq: "order-tasks.md",
            title: "HotWax turns stuck orders into assigned, actionable work instead of one-status-at-a-time holds",
            clusters: ["Order tasks as real exception work"],
            body: buildProductUpdateBody({
                heading: "Exception work with ownership and history",
                problem: "A single order status cannot explain every reason an order is stuck. Fraud review, bad address review, substitution work, and shipment exceptions may all need different owners and different resolution paths.",
                changed: "Order Tasks link stuck orders to WorkEffort-backed task records. Tasks can carry purpose, status, comments, customer context, assignee, source reference, ship group, and resolution history.",
                operations: "Order Manager can show task queues, task detail, order-level task visibility, and direct navigation from the task back to the full order. The order can remain visible and reserve inventory while unresolved work prevents unsafe downstream release.",
                impact: "Customer service and operations teams get accountable work instead of vague holds, and the OMS keeps a clearer record of why an order waited and how it was resolved.",
                sources: sourceLinks(sectionByName(sections, "Order tasks as real exception work"))
            })
        },
        {
            faq: "pick-profiles-downstream-sync-queuing.md",
            title: "HotWax turns pick profiles into business-controlled downstream sync queues",
            clusters: ["Pick profiles and downstream sync queues"],
            body: buildProductUpdateBody({
                heading: "Pick profiles as release policies",
                problem: "Downstream fulfillment systems do not always need every eligible order at once. Retailers may need to hold back work by facility, priority, customer segment, delivery promise, order age, or downstream capacity.",
                changed: "Poorti adds fulfillment order sync configuration APIs for pick-profile driven queues, including conditions, filters, customer classification, order priority, rush-order sorting, and batch behavior.",
                operations: "A pick profile can define which work enters a downstream queue and in which order. The configuration becomes auditable and reusable instead of being hidden inside a scheduled job or integration script.",
                impact: "Operations teams gain a business-controlled release valve for WMS, 3PL, and fulfillment sync, reducing backpressure without requiring code changes for each queue policy.",
                sources: sourceLinks(sectionByName(sections, "Pick profiles and downstream sync queues"))
            })
        },
        {
            faq: "product-substitution-logic.md",
            title: "HotWax adds product substitution logic for rescuing sold-out orders before they become cancellations",
            clusters: ["Routing and Sourcing as one workspace"],
            body: buildProductUpdateBody({
                heading: "Using substitute inventory during routing",
                problem: "A sold-out SKU can make an order look unfillable even when a retailer has an approved substitute in stock. Without structured substitution, teams rely on manual judgment or cancel the item.",
                changed: "Routing can now account for substitute inventory when the requested product is unavailable but an eligible substitute exists at a candidate facility. The substitution work fits into the broader Routing and Sourcing workspace.",
                operations: "Product associations define the substitute relationship. Routing and sourcing logic can evaluate substitute availability alongside facility, ATP, and product-inventory context, then expose the decision path for operational review.",
                impact: "Retailers get a structured path to save orders that would otherwise become cancellations, while keeping the substitution rule visible and auditable.",
                sources: sourceLinks(sectionByName(sections, "Routing and Sourcing as one workspace"))
            })
        },
        {
            faq: "products-app-overall.md",
            title: "HotWax launches Products, a dedicated app for operational product data management",
            clusters: ["Products as the operational product data app"],
            body: buildProductUpdateBody({
                heading: "Product data for operations, not only merchandising",
                problem: "OMS product data includes identifiers, variants, facility relationships, dimensions, store mappings, and fulfillment attributes. Those records affect routing and integrations, but they are often managed outside a focused product-operations workspace.",
                changed: "The Products app now has APIs for product records, variants, features, good identifications, product associations, Shopify shop products, product facilities, product-facility configuration, and inventory-facing product views.",
                operations: "Teams can use Products to inspect and manage the product data that order routing, fulfillment, storefront sync, and integration jobs depend on. The app can work from operational product records instead of relying on legacy screens.",
                impact: "Product operations, implementation, and support teams get one clearer place to correct data that can otherwise block fulfillment or create integration exceptions.",
                sources: sourceLinks(sectionByName(sections, "Products as the operational product data app"))
            })
        },
        {
            faq: "shopify-fulfillment-holds.md",
            title: "Respecting Shopify Fulfillment Holds",
            clusters: ["Shopify fulfillment holds and 3PL routing"],
            body: buildProductUpdateBody({
                heading: "Honoring Shopify holds before fulfillment release",
                problem: "Shopify or third-party apps may place an order on hold for fraud, address, marketplace, or cooling-period reasons. If OMS ignores that signal, risky work can reach routing or a 3PL too early.",
                changed: "Shopify fulfillment holds are now part of the HotWax order-processing story. Held work can pause OMS fulfillment processing until Shopify releases it, while other order work follows the appropriate routing path.",
                operations: "The bridge imports hold context and keeps Shopify fulfillment-order behavior aligned with OMS order handling. When a hold applies, the order path can pause instead of being brokered as standard releasable work.",
                impact: "Retailers can keep Shopify-native risk and marketplace controls in place while still using HotWax as the operational system for routing and fulfillment.",
                sources: sourceLinks(sectionByName(sections, "Shopify fulfillment holds and 3PL routing"))
            })
        },
        {
            faq: "shopify-native-bopis-fulfillment-orders.md",
            title: "Shopify Native BOPIS Fulfillment Order Integration",
            clusters: ["Native pickup and customer communication"],
            body: buildProductUpdateBody({
                heading: "Native pickup work from Shopify Fulfillment Orders",
                problem: "Shopify native pickup is represented through Fulfillment Orders. Treating pickup as tags, line-item properties, or shipping work makes mixed carts and customer communication harder to keep aligned.",
                changed: "The June app direction treats Shopify Fulfillment Orders as the cleaner foundation for native pickup demand. Pickup, shipping, and local delivery can stay separated while Poorti remains the store execution surface.",
                operations: "HotWax can map pickup fulfillment work into the correct OMS and Poorti workflow, then update Shopify only when the matching lifecycle action succeeds. Communication ownership can remain clear so customers do not receive duplicate or premature messages.",
                impact: "Retailers using Shopify native pickup get a cleaner operating model from checkout promise through store handover.",
                sources: sourceLinks(sectionByName(sections, "Native pickup and customer communication"))
            })
        },
        {
            faq: "shopify-risk-assessment-integration.md",
            title: "HotWax now uses Shopify risk signals to hold, review, and release suspicious orders before fulfillment",
            clusters: ["Fraud review powered by Shopify risk"],
            body: buildProductUpdateBody({
                heading: "Shopify risk as an OMS fulfillment control",
                problem: "Shopify risk assessments are useful only if they affect the fulfillment decision before warehouse or 3PL release. Notes alone do not stop a suspicious order from moving.",
                changed: "The Shopify bridge now captures risk recommendation, provider assessments, levels, and facts, then forwards them to OMS. OMS stores the risk rollup and evaluates it during approval.",
                operations: "Accepted or no-risk orders can continue. Pending risk can defer approval. Investigate or cancel recommendations can create review work or auto-cancel depending on product-store configuration.",
                impact: "Operations teams can review suspicious orders in Order Manager while healthy orders keep moving through normal fulfillment.",
                sources: sourceLinks(sectionByName(sections, "Fraud review powered by Shopify risk"))
            })
        },
        {
            faq: "third-party-fulfillment.md",
            title: "Managing Third-Party Fulfillment Services",
            clusters: ["Shopify fulfillment holds and 3PL routing"],
            body: buildProductUpdateBody({
                heading: "Separating Shopify-assigned and OMS-assigned fulfillment",
                problem: "Retailers often use Shopify-native fulfillment services and OMS-routed 3PLs at the same time. If OMS re-routes work Shopify already assigned, the systems can conflict.",
                changed: "HotWax now has a clearer split between Shopify-assigned fulfillment-service work and OMS-assigned 3PL work. Shopify-assigned work can be respected, while OMS-assigned work can still be routed by HotWax.",
                operations: "When Shopify has already assigned a fulfillment service, HotWax can preserve that path. When HotWax owns the routing decision, it can move the Shopify Fulfillment Order to the mapped location and publish fulfillment details after shipment.",
                impact: "Mixed fulfillment models become safer to operate because Shopify routing, HotWax brokering, 3PL assignment, and fulfillment holds each have a defined responsibility.",
                sources: sourceLinks(sectionByName(sections, "Shopify fulfillment holds and 3PL routing"))
            })
        },
        {
            faq: "unified-routing-sourcing-workspace.md",
            title: "HotWax brings ATP, routing, facility groups, and product inventory into one sourcing workspace",
            clusters: ["Routing and Sourcing as one workspace"],
            body: buildProductUpdateBody({
                heading: "One workspace for sourcing decisions",
                problem: "Routing decisions depend on ATP rules, facility groups, inventory channels, product-facility settings, and brokering rules. When those controls live in separate apps, teams can change one part without seeing the full fulfillment impact.",
                changed: "Routing, ATP, facility groups, inventory channels, product inventory, and brokering controls are moving into one workspace. The supporting APIs expose richer facility, product-facility, and inventory context.",
                operations: "Teams can inspect which inventory can be promised, which facilities participate, which rules protect inventory, and which routing decision should receive the order. Substitute inventory can also be considered when the requested SKU is unavailable.",
                impact: "Sourcing changes become easier to reason about because the controls and their fulfillment consequences live in one operating model.",
                sources: sourceLinks(sectionByName(sections, "Routing and Sourcing as one workspace"))
            })
        }
    ];

    return definitions;
}

const rawItems = readJsonl(path.join(rawDir, "raw_context.jsonl"));
const rawMap = new Map(rawItems.map(item => [item.id, item]));
const previousMatrix = fs.existsSync(path.join(rawDir, "cluster_matrix.json"))
    ? JSON.parse(fs.readFileSync(path.join(rawDir, "cluster_matrix.json"), "utf8"))
    : { noiseItemIds: [], needClarificationItemIds: [] };
const releaseDocument = fs.readFileSync(releaseNotesPath, "utf8");
const releaseBody = normalizeMarkdownBody(releaseDocument);
const sections = extractReleaseSections(releaseDocument);
const organizer = buildOrganizerResponse(sections, rawItems, previousMatrix);

fs.writeFileSync(path.join(rawDir, "organizer_response.md"), `\`\`\`json\n${JSON.stringify(organizer, null, 2)}\n\`\`\`\n`);
fs.writeFileSync(path.join(rawDir, "cluster_matrix.json"), JSON.stringify({
    clusters: organizer.clusters,
    noiseItemIds: organizer.noiseItemIds,
    needClarificationItemIds: organizer.needClarificationItemIds
}, null, 2) + "\n");

const summaryDir = path.join(rawDir, "cluster-summaries");
fs.rmSync(summaryDir, { recursive: true, force: true });
fs.mkdirSync(summaryDir, { recursive: true });
for (const section of sections) {
    const itemIds = section.itemIds.filter(id => rawMap.has(id));
    const summaryRecord = {
        name: section.name,
        summary: section.summary,
        prReferences: itemIds.map(id => {
            const item = rawMap.get(id);
            return {
                repo: item.repo,
                number: item.number,
                url: `https://github.com/${item.repo}/pull/${item.number}`
            };
        })
    };
    fs.writeFileSync(
        path.join(summaryDir, `${normalizeSlugSegment(section.name)}.json`),
        JSON.stringify(summaryRecord, null, 2) + "\n"
    );
}

const pendingFaqs = loadPendingFaqs();
const productDefinitions = buildProductUpdates(sections, rawMap);
const matches = productDefinitions.map(definition => ({
    faqIndex: pendingFaqs.findIndex(faq => faq.file === definition.faq),
    clusterIndices: definition.clusters.map(name => sections.findIndex(section => section.name === name))
})).filter(match => match.faqIndex !== -1 && match.clusterIndices.every(index => index !== -1));
fs.writeFileSync(path.join(rawDir, "product_updater_matcher_response.md"), `\`\`\`json\n${JSON.stringify(matches, null, 2)}\n\`\`\`\n`);

const manifestItems = [];
const releaseArtifact = buildReleaseNotesArtifact(targetMonth, releaseBody);
fs.writeFileSync(releaseNotesPath, releaseArtifact.document);
manifestItems.push(releaseArtifact.manifestItem);

const productUpdateDir = path.join(draftDir, "product-updates");
fs.rmSync(productUpdateDir, { recursive: true, force: true });
fs.mkdirSync(productUpdateDir, { recursive: true });
for (const definition of productDefinitions) {
    const artifact = buildProductUpdateArtifact(targetMonth, definition.title, definition.body, definition.faq);
    fs.writeFileSync(artifact.manifestItem.filePath, artifact.document);
    manifestItems.push(artifact.manifestItem);
}

const manifest = createPublishManifest(targetMonth, manifestItems);
savePublishManifest(targetMonth, manifest);

const sourceCommit = execSync("git rev-parse HEAD").toString().trim();
const syncState = seedSyncStateForManifest(loadSyncState(), manifest, sourceCommit, {
    mode: "monthly",
    replayReason: null
});
saveSyncState(syncState);

console.log(`Codex manual workflow complete for ${targetMonth}`);
console.log(`Clusters: ${organizer.clusters.length}`);
console.log(`Noise items: ${organizer.noiseItemIds.length}`);
console.log(`Clarification items: ${organizer.needClarificationItemIds.length}`);
console.log(`Product updates: ${productDefinitions.length}`);
