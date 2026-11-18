import crypto from "node:crypto";
import fs from "node:fs";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { stripFrontmatter, stripTitle } from "../publishing/metadata.js";

marked.setOptions({
    gfm: true,
    breaks: false
});

const MERMAID_BLOCK = /```mermaid\s*\n([\s\S]*?)\n```/g;
const LOCAL_IMAGE = /!\[([^\]]*)\]\((assets\/[^\s)]+)(?:\s+"([^"]*)")?\)/g;

function escapeAttribute(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function registeredDiagram(diagram) {
    const hash = crypto.createHash("sha256").update(diagram.trim()).digest("hex");
    const assets = JSON.parse(fs.readFileSync(new URL("../../config/publishing-assets.json", import.meta.url), "utf8"));
    const asset = assets[hash];
    if (!asset || !/^assets\/[\w./-]+\.png$/.test(asset.filePath)) {
        throw new Error(`Mermaid diagram ${hash} has no registered publishing image`);
    }
    if (!fs.existsSync(new URL(`../../${asset.filePath}`, import.meta.url))) {
        throw new Error(`Publishing image is missing: ${asset.filePath}`);
    }
    return asset;
}

function checkedImagePath(filePath) {
    if (!/^assets\/[\w./-]+\.(png|jpe?g|webp)$/.test(filePath) || filePath.split("/").includes("..")) {
        throw new Error(`Invalid publishing image path: ${filePath}`);
    }
    if (!fs.existsSync(new URL(`../../${filePath}`, import.meta.url))) {
        throw new Error(`Publishing image is missing: ${filePath}`);
    }
    return filePath;
}

// Every repo image a post uses, so the publisher can upload them to HubSpot before converting.
export function findPublishingImages(markdownContent) {
    const body = stripTitle(stripFrontmatter(markdownContent));
    const filePaths = [];
    for (const [, diagram] of body.matchAll(MERMAID_BLOCK)) filePaths.push(registeredDiagram(diagram).filePath);
    for (const [, , filePath] of body.matchAll(LOCAL_IMAGE)) filePaths.push(checkedImagePath(filePath));
    return [...new Set(filePaths)];
}

export function markdownToHtml(markdownContent, {
    assetRef = process.env.PUBLISH_ASSET_REF || process.env.GITHUB_SHA || "main",
    imageMap = null,
    requireHubSpotImages = false
} = {}) {
    function imageMarkup(filePath, alt, title) {
        const hosted = imageMap?.[filePath];
        if (hosted) {
            const titleAttribute = title ? ` title="${escapeAttribute(title)}"` : "";
            const img = `<img src="${escapeAttribute(hosted.url)}" alt="${escapeAttribute(alt)}"${titleAttribute} width="${hosted.width}" height="${hosted.height}" loading="lazy" decoding="async" style="max-width: 100%; height: auto;">`;
            return `<a href="${escapeAttribute(hosted.url)}">${img}</a>`;
        }
        if (requireHubSpotImages) {
            throw new Error(`Publishing image was not uploaded to HubSpot: ${filePath}`);
        }
        const url = `https://raw.githubusercontent.com/hotwax/product-updates/${encodeURIComponent(assetRef)}/${filePath}`;
        return `[![${alt}](${url}${title ? ` "${title}"` : ""})](${url})`;
    }

    // Source footers are editorial evidence, not part of the customer-facing post.
    let body = stripTitle(stripFrontmatter(markdownContent)).replace(/^\*Sources:.*\*\s*$/gm, "");
    body = body.replace(MERMAID_BLOCK, (_, diagram) => {
        const asset = registeredDiagram(diagram);
        return `\n${imageMarkup(asset.filePath, asset.altText)}\n`;
    });
    body = body.replace(LOCAL_IMAGE, (_, alt, filePath, title) => imageMarkup(checkedImagePath(filePath), alt, title));
    const rawHtml = marked.parse(body);
    return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            "img",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            a: ["href", "name", "target", "rel"],
            img: ["src", "alt", "title", "width", "height", "loading", "decoding", "style"]
        },
        allowedStyles: {
            img: {
                "max-width": [/^100%$/],
                height: [/^auto$/]
            }
        },
        allowedSchemes: ["http", "https", "mailto"],
        transformTags: {
            a: (tagName, attributes) => {
                const url = attributes.href && URL.canParse(attributes.href) ? new URL(attributes.href) : null;
                if (url && ["http:", "https:"].includes(url.protocol) && !["hotwax.co", "www.hotwax.co"].includes(url.hostname)) {
                    return { tagName, attribs: { ...attributes, target: "_blank", rel: "noopener noreferrer" } };
                }
                return { tagName, attribs: attributes };
            }
        }
    });
}
