import assert from "node:assert/strict";
import test, { afterEach, beforeEach } from "node:test";
import { CONFIG } from "../config/index.js";
import { displaySize, hubspotLocationFor, toWebp, uploadPublishingImages } from "./images.js";

// CONFIG reads the token once at import, so set it on CONFIG (not process.env) and restore it,
// otherwise these tests only pass on a machine that already has a real token.
const realFetch = globalThis.fetch;
const realToken = CONFIG.HUBSPOT_PRIVATE_APP_TOKEN;
beforeEach(() => { CONFIG.HUBSPOT_PRIVATE_APP_TOKEN = "test"; });
afterEach(() => {
    globalThis.fetch = realFetch;
    CONFIG.HUBSPOT_PRIVATE_APP_TOKEN = realToken;
});

const SCREENSHOT = "assets/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.png";

test("repo path maps to the matching HubSpot folder and a .webp name", () => {
    assert.deepEqual(hubspotLocationFor(SCREENSHOT), {
        folderPath: "/product-updates/screenshots/2026-10-03",
        fileName: "company-populated-inventory-channel-macbook-air-clean.webp",
        hubspotPath: "/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.webp"
    });
    assert.equal(hubspotLocationFor("assets/product-updates/2026-08/shopify-inventory-publishing-flow.png").hubspotPath, "/product-updates/2026-08/shopify-inventory-publishing-flow.webp");
});

test("display size is 760 wide (never wider than the image), height keeps the ratio", () => {
    assert.deepEqual(displaySize(1600, 1040), { width: 760, height: 494 });
    assert.deepEqual(displaySize(500, 300), { width: 500, height: 300 });
});

test("screenshots become WebP no wider than 1600 px and much smaller", async () => {
    const image = await toWebp(SCREENSHOT);
    assert.equal(image.width, 1600);
    assert.equal(image.height, 1040);
    assert.ok(image.buffer.length < 120_000, `webp is ${image.buffer.length} bytes`);
});

function fakeFetch(existing) {
    const calls = [];
    globalThis.fetch = async (url, init = {}) => {
        calls.push({ url: String(url), method: init.method || "GET" });
        if (String(url).includes("/files/v3/files/stat/")) {
            return existing
                ? new Response(JSON.stringify({ file: existing }), { status: 200 })
                : new Response(JSON.stringify({ message: "No file or folder exists at path" }), { status: 404 });
        }
        const form = init.body;
        return new Response(JSON.stringify({
            url: `https://www.hotwax.co/hubfs${form.get("folderPath")}/${form.get("file").name}`,
            options: JSON.parse(form.get("options"))
        }), { status: 201 });
    };
    return calls;
}

test("a file already in HubSpot is reused, nothing is uploaded", async () => {
    const calls = fakeFetch({ url: "https://www.hotwax.co/hubfs/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.webp", width: 1600, height: 1040 });
    const map = await uploadPublishingImages([SCREENSHOT, SCREENSHOT]);
    assert.deepEqual(map[SCREENSHOT], { url: "https://www.hotwax.co/hubfs/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.webp", width: 760, height: 494 });
    assert.equal(calls.filter((c) => c.method === "POST").length, 0);
});

test("a new image is uploaded once as WebP to the matching folder", async () => {
    const calls = fakeFetch(null);
    const map = await uploadPublishingImages([SCREENSHOT]);
    assert.equal(map[SCREENSHOT].url, "https://www.hotwax.co/hubfs/product-updates/screenshots/2026-10-03/company-populated-inventory-channel-macbook-air-clean.webp");
    assert.deepEqual([map[SCREENSHOT].width, map[SCREENSHOT].height], [760, 494]);
    const posts = calls.filter((c) => c.method === "POST");
    assert.equal(posts.length, 1);
    assert.equal(posts[0].url, "https://api.hubapi.com/files/v3/files");
});
