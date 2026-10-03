import crypto from "node:crypto";
import fs from "node:fs";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { stripFrontmatter, stripTitle } from "../publishing/metadata.js";

marked.setOptions({
    gfm: true,
    breaks: false
});

export function markdownToHtml(markdownContent, { assetRef = process.env.PUBLISH_ASSET_REF || process.env.GITHUB_SHA || "main" } = {}) {
    // Source footers are editorial evidence, not part of the customer-facing post.
    let body = stripTitle(stripFrontmatter(markdownContent)).replace(/^\*Sources:.*\*\s*$/gm, "");
    body = body.replace(/```mermaid\s*\n([\s\S]*?)\n```/g, (_, diagram) => {
        const hash = crypto.createHash("sha256").update(diagram.trim()).digest("hex");
        const assets = JSON.parse(fs.readFileSync(new URL("../../config/publishing-assets.json", import.meta.url), "utf8"));
        const asset = assets[hash];
        if (!asset || !/^assets\/[\w./-]+\.png$/.test(asset.filePath)) {
            throw new Error(`Mermaid diagram ${hash} has no registered publishing image`);
        }
        if (!fs.existsSync(new URL(`../../${asset.filePath}`, import.meta.url))) {
            throw new Error(`Publishing image is missing: ${asset.filePath}`);
        }
        const url = `https://raw.githubusercontent.com/hotwax/product-updates/${encodeURIComponent(assetRef)}/${asset.filePath}`;
        return `\n[![${asset.altText}](${url})](${url})\n`;
    });
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
            img: ["src", "alt", "title"]
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
