import fs from "fs";
import { CONFIG } from "../src/config/index.js";
import { fetchMonthlyReleases, fetchContext } from "../src/services/github.js";
import { saveRawContext, getRawContextFilePath } from "../src/storage/index.js";
import { getTargetMonth, extractPRRefsWithLinks, extractLinkedIssueNumbers } from "../src/utils/index.js";

(async () => {
    if (!CONFIG.SOURCE_REPOS || !CONFIG.ORG_GIT_API) {
        throw new Error("Missing required environment variables: SOURCE_REPOS and ORG_GIT_API");
    }

    const targetMonth = getTargetMonth(CONFIG.MONTH, CONFIG.PUBLISHING.automation.timezone);
    const repos = CONFIG.SOURCE_REPOS.split(",").map(repo => repo.trim()).filter(Boolean);
    const rawContextPath = getRawContextFilePath(targetMonth);
    const seen = new Set();
    let itemCount = 0;

    fs.rmSync(rawContextPath, { force: true });

    console.log(`Fetching raw monthly context for ${targetMonth} from ${repos.length} repositories...`);

    for (const repoFull of repos) {
        const [owner, repo] = repoFull.split("/");
        if (!owner || !repo) {
            console.warn(`Skipping invalid repository entry: ${repoFull}`);
            continue;
        }

        console.log(`Fetching releases from ${repoFull}...`);

        try {
            const releases = await fetchMonthlyReleases(owner, repo, targetMonth);
            for (const release of releases) {
                const prRefs = extractPRRefsWithLinks(release.body || "", owner, repo);

                for (const prRef of prRefs) {
                    const itemId = `${repoFull}#${prRef.number}`;
                    if (seen.has(itemId)) continue;
                    seen.add(itemId);

                    console.log(`  Fetching context for ${itemId}...`);
                    const context = await fetchContext(owner, repo, prRef.number);
                    if (!context) continue;

                    const linkedIssueNumbers = context.type === "PR" ? extractLinkedIssueNumbers(context.body) : [];
                    const linkedIssues = [];
                    for (const issueNum of linkedIssueNumbers) {
                        console.log(`    Fetching linked Issue #${issueNum}...`);
                        const issueDetails = await fetchContext(owner, repo, issueNum);
                        if (issueDetails) linkedIssues.push(issueDetails);
                    }

                    saveRawContext(targetMonth, {
                        id: itemId,
                        repo: repoFull,
                        type: context.type,
                        number: prRef.number,
                        title: context.title,
                        labels: context.labels,
                        body: context.body,
                        files: context.files,
                        linkedIssues,
                        releaseTag: release.tag_name
                    });
                    itemCount += 1;
                }
            }
        } catch (error) {
            console.error(`  Error in ${repoFull}: ${error.message}`);
        }
    }

    console.log(`Saved ${itemCount} raw context items to ${rawContextPath}`);
})();
