import fs from "fs";
import path from "path";

const policy = JSON.parse(fs.readFileSync(path.join("config", "public-content-policy.json"), "utf8"));

function resolveContentFiles() {
    if (process.env.MANIFEST_PATH) {
        const manifest = JSON.parse(fs.readFileSync(process.env.MANIFEST_PATH, "utf8"));
        return manifest.items.map(item => item.filePath);
    }

    const root = process.env.CONTENT_ROOT || "drafts";
    const files = [];

    function walk(directory) {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            const filePath = path.join(directory, entry.name);
            if (entry.isDirectory()) {
                walk(filePath);
            } else if (entry.isFile() && entry.name.endsWith(".md")) {
                files.push(filePath);
            }
        }
    }

    walk(root);
    return files;
}

function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findLineNumber(content, offset) {
    return content.slice(0, offset).split(/\r?\n/).length;
}

const findings = [];
const files = resolveContentFiles();

for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");

    for (const name of policy.blockedClientNames) {
        const pattern = new RegExp(`(^|[^A-Za-z0-9])${escapeRegex(name)}(?=$|[^A-Za-z0-9])`, "gi");
        for (const match of content.matchAll(pattern)) {
            const nameOffset = match.index + match[1].length;
            findings.push({
                filePath,
                line: findLineNumber(content, nameOffset),
                reason: `blocked client name: ${name}`
            });
        }
    }

    for (const repository of policy.blockedRepositories) {
        const pattern = new RegExp(`github\\.com/${escapeRegex(repository)}(?=/|$)`, "gi");
        for (const match of content.matchAll(pattern)) {
            findings.push({
                filePath,
                line: findLineNumber(content, match.index),
                reason: `blocked client repository: ${repository}`
            });
        }
    }

    const allowedRepositories = new Set(
        policy.allowedSourceRepositories.map(repository => repository.toLowerCase())
    );
    const sourceRepositoryPattern = /github\.com\/(hotwax\/[^/\s)#]+)/gi;
    for (const match of content.matchAll(sourceRepositoryPattern)) {
        const repository = match[1];
        if (!allowedRepositories.has(repository.toLowerCase())) {
            findings.push({
                filePath,
                line: findLineNumber(content, match.index),
                reason: `unapproved source repository: ${repository}`
            });
        }
    }
}

if (findings.length > 0) {
    console.error("Public content contains client-identifying references:");
    for (const finding of findings) {
        console.error(`- ${finding.filePath}:${finding.line} ${finding.reason}`);
    }
    process.exit(1);
}

console.log(`Validated ${files.length} public content file${files.length === 1 ? "" : "s"}; no blocked client references found.`);
