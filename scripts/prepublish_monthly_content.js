import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import {
    buildMetaDescription,
    computeContentHash,
    createPublishedDocument,
    parseFrontmatter
} from "../src/publishing/metadata.js";
import { loadSyncState, saveSyncState, seedSyncStateForManifest } from "../src/publishing/state.js";

function resolveManifestPath() {
    if (process.env.MANIFEST_PATH) {
        return process.env.MANIFEST_PATH;
    }

    if (process.env.MONTH) {
        return path.join("drafts", process.env.MONTH, "publish-manifest.json");
    }

    throw new Error("MANIFEST_PATH or MONTH must be provided");
}

function stripSourcesSections(markdown) {
    return markdown
        .replace(/\n{1,3}\*Sources:[\s\S]*?\*\s*(?=\n{2,}|$)/g, "")
        .replace(/\n{1,3}#{2,6}\s+Sources\s*\n[\s\S]*?(?=\n#{1,6}\s+|$)/gi, "\n");
}

const manifestPath = resolveManifestPath();
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const refreshedItems = [];
let strippedCount = 0;

for (const item of manifest.items) {
    const originalDocument = fs.readFileSync(item.filePath, "utf8");
    const { data, body } = parseFrontmatter(originalDocument);
    const strippedBody = stripSourcesSections(body).trim();
    if (strippedBody !== body.trim()) {
        strippedCount += 1;
    }

    const refreshed = {
        ...item,
        title: data.title || item.title,
        slug: data.slug || item.slug,
        contentType: data.contentType || item.contentType,
        metaDescription: buildMetaDescription(strippedBody),
        tagNames: item.tagNames
    };

    refreshed.contentHash = computeContentHash({
        title: refreshed.title,
        slug: refreshed.slug,
        contentType: refreshed.contentType,
        month: manifest.month,
        metaDescription: refreshed.metaDescription,
        tagNames: refreshed.tagNames,
        sourceFaq: refreshed.sourceFaq,
        body: strippedBody
    });

    fs.writeFileSync(item.filePath, createPublishedDocument({
        ...refreshed,
        month: manifest.month,
        body: strippedBody
    }));

    refreshedItems.push(refreshed);
}

manifest.generatedAt = new Date().toISOString();
manifest.requestedAt = new Date().toISOString();
manifest.items = refreshedItems;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

const sourceCommit = process.env.GITHUB_SHA || execSync("git rev-parse HEAD").toString().trim();
const syncState = seedSyncStateForManifest(loadSyncState(), manifest, sourceCommit, {
    mode: manifest.mode,
    replayReason: manifest.replayReason
});
saveSyncState(syncState);

console.log(`Prepared ${manifest.items.length} item${manifest.items.length === 1 ? "" : "s"} for ${manifest.month}; stripped Sources sections from ${strippedCount}.`);
