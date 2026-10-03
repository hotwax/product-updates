import fs from "fs";
import path from "path";
import crypto from "crypto";

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

function hashIdentifier(value) {
    return crypto
        .createHash("sha256")
        .update(value.toLowerCase().trim().replace(/\s+/g, " "))
        .digest("hex");
}

function findLineNumber(content, offset) {
    return content.slice(0, offset).split(/\r?\n/).length;
}

const findings = [];
const files = resolveContentFiles();
const blockedClientNameHashes = new Set(policy.blockedClientNameHashes);
const blockedRepositoryHashes = new Set(policy.blockedRepositoryHashes);
const maxClientNameWords = policy.blockedClientNameMaxWords || 1;

for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");

    const words = Array.from(content.matchAll(/[A-Za-z0-9]+/g));
    for (let start = 0; start < words.length; start += 1) {
        for (let wordCount = 1; wordCount <= maxClientNameWords && start + wordCount <= words.length; wordCount += 1) {
            const candidate = words
                .slice(start, start + wordCount)
                .map(match => match[0])
                .join(" ");
            if (blockedClientNameHashes.has(hashIdentifier(candidate))) {
                const nameOffset = words[start].index;
                findings.push({
                    filePath,
                    line: findLineNumber(content, nameOffset),
                    reason: "blocked client name"
                });
            }
        }
    }

    const sourceRepositoryPattern = /github\.com\/(hotwax\/[^/\s)#]+)/gi;
    for (const match of content.matchAll(sourceRepositoryPattern)) {
        const repository = match[1];
        if (blockedRepositoryHashes.has(hashIdentifier(repository))) {
            findings.push({
                filePath,
                line: findLineNumber(content, match.index),
                reason: "blocked client repository"
            });
        }
    }

    const allowedRepositories = new Set(
        policy.allowedSourceRepositories.map(repository => repository.toLowerCase())
    );
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
