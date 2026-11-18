import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { findPublishingImages, markdownToHtml } from "./markdown.js";

test("public body omits document title and editorial source footer", () => {
    const html = markdownToHtml("---\ntitle: Test\n---\n# Test\n\nA useful update.\n\n*Sources: [PR](https://github.com/hotwax/example/pull/1)*");
    assert.match(html, /A useful update/);
    assert.doesNotMatch(html, /Sources:|<h1>|github\.com/);
});

test("external links open safely, internal links stay in the current tab", () => {
    const html = markdownToHtml("[External](https://shopify.dev/docs) [Internal](https://www.hotwax.co/product-updates)");
    assert.match(html, /href="https:\/\/shopify.dev\/docs" target="_blank" rel="noopener noreferrer"/);
    assert.match(html, /href="https:\/\/www.hotwax.co\/product-updates">Internal/);
});

test("registered inventory flow is a commit-pinned image, not a code fence", () => {
    const document = fs.readFileSync(new URL("./fixtures/registered-diagram.md", import.meta.url), "utf8");
    const html = markdownToHtml(document, { assetRef: "test-commit" });
    assert.match(html, /<img src="https:\/\/raw\.githubusercontent\.com\/hotwax\/product-updates\/test-commit\/assets\//);
    assert.doesNotMatch(html, /language-mermaid|flowchart TD|Sources:/);
});

test("unregistered diagrams fail before publication", () => {
    assert.throws(() => markdownToHtml("```mermaid\nflowchart TD\nA-->B\n```"), /no registered publishing image/);
});

test("local publishing images become commit-pinned public images with alt text", () => {
    const html = markdownToHtml("![Inventory publishing flow](assets/product-updates/2026-08/shopify-inventory-publishing-flow.png)", {assetRef:"image-commit"});
    assert.match(html, /<img src="https:\/\/raw\.githubusercontent\.com\/hotwax\/product-updates\/image-commit\/assets\/product-updates\/2026-08\/shopify-inventory-publishing-flow.png" alt="Inventory publishing flow"/);
    assert.match(html, /<a href="https:\/\/raw\.githubusercontent\.com\/hotwax\/product-updates\/image-commit\/assets\/product-updates\/2026-08\/shopify-inventory-publishing-flow.png" target="_blank" rel="noopener noreferrer"><img/);
});

test("missing images and traversal paths stop publication", () => {
    assert.throws(() => markdownToHtml("![Missing](assets/missing.jpg)"), /Publishing image is missing/);
    assert.throws(() => markdownToHtml("![Invalid](assets/../private.jpg)"), /Invalid publishing image path/);
});

test("images uploaded to HubSpot keep size, lazy loading and alt text", () => {
    const filePath = "assets/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.png";
    const url = "https://www.hotwax.co/hubfs/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.webp";
    const html = markdownToHtml(`![Company "inventory" sync](${filePath})`, { imageMap: { [filePath]: { url, width: 760, height: 494 } }, requireHubSpotImages: true });
    assert.equal(html, `<p><a href="${url}"><img src="${url}" alt="Company &quot;inventory&quot; sync" width="760" height="494" loading="lazy" decoding="async" style="max-width:100%;height:auto" /></a></p>\n`);
    assert.doesNotMatch(html, /githubusercontent/);
});

test("registered diagrams use the HubSpot copy too", () => {
    const document = fs.readFileSync(new URL("./fixtures/registered-diagram.md", import.meta.url), "utf8");
    const imageMap = Object.fromEntries(findPublishingImages(document).map((filePath) => [filePath, {
        url: `https://www.hotwax.co/hubfs/${filePath.replace(/^assets\//, "").replace(/\.png$/, ".webp")}`, width: 760, height: 3758
    }]));
    const html = markdownToHtml(document, { imageMap, requireHubSpotImages: true });
    assert.match(html, /<img src="https:\/\/www\.hotwax\.co\/hubfs\/product-updates\/2026-08\/shopify-inventory-publishing-flow\.webp"[^>]* width="760" height="3758" loading="lazy"/);
    assert.doesNotMatch(html, /githubusercontent|language-mermaid/);
});

test("publishing stops if an image was not uploaded to HubSpot", () => {
    assert.throws(
        () => markdownToHtml("![Flow](assets/product-updates/2026-08/shopify-inventory-publishing-flow.png)", { imageMap: {}, requireHubSpotImages: true }),
        /not uploaded to HubSpot/
    );
});

test("findPublishingImages lists every repo image a post uses, once", () => {
    const found = findPublishingImages("![first](assets/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.png)\n\n![again](assets/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.png)");
    assert.equal(found.length, 1);
    assert.ok(found.includes("assets/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.png"));
    assert.equal(found.length, new Set(found).size);
});

test("style attribute only allows the two image sizing rules", () => {
    const html = markdownToHtml('<img src="https://www.hotwax.co/x.webp" alt="x" style="max-width: 100%; height: auto; position: fixed">');
    assert.match(html, /style="max-width:100%;height:auto"/);
    assert.doesNotMatch(html, /position/);
});
