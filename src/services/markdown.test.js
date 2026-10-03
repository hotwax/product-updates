import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { markdownToHtml } from "./markdown.js";

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
    const document = fs.readFileSync(new URL("../../drafts/2026-08/product-updates/event_driven_shopify_inventory_publishing.md", import.meta.url), "utf8");
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
