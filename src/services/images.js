import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { CONFIG } from "../config/index.js";
import { getFileByPath, uploadFile } from "./hubspot.js";

const REPO_ROOT = fileURLToPath(new URL("../../", import.meta.url));

const DEFAULTS = {
    folderRoot: "/product-updates",
    uploadMaxWidth: 1600,
    displayWidth: 760,
    webpQuality: 80
};

function imageSettings() {
    return { ...DEFAULTS, ...(CONFIG.PUBLISHING.hubspot.images || {}) };
}

// assets/product-updates/screenshots/2026-10-03/name.png -> /product-updates/screenshots/2026-10-03/name.webp
export function hubspotLocationFor(filePath, folderRoot = DEFAULTS.folderRoot) {
    const relative = filePath.replace(/^assets\/product-updates\//, "");
    const directory = path.posix.dirname(relative);
    const fileName = path.posix.basename(relative).replace(/\.(png|jpe?g|webp)$/i, ".webp");
    const folderPath = directory === "." ? folderRoot : `${folderRoot}/${directory}`;
    return { folderPath, fileName, hubspotPath: `${folderPath}/${fileName}` };
}

export async function toWebp(filePath, { uploadMaxWidth, webpQuality } = DEFAULTS) {
    const { data, info } = await sharp(path.join(REPO_ROOT, filePath))
        .resize({ width: uploadMaxWidth, withoutEnlargement: true })
        .webp({ quality: webpQuality })
        .toBuffer({ resolveWithObject: true });
    return { buffer: data, width: info.width, height: info.height };
}

export function displaySize(width, height, displayWidth = DEFAULTS.displayWidth) {
    const shownWidth = Math.min(displayWidth, width);
    return { width: shownWidth, height: Math.round((height * shownWidth) / width) };
}

// Uploads each repo image to HubSpot File Manager once (WebP, capped width) and returns
// { "assets/...png": { url, width, height } } for markdownToHtml. A file already at the
// same HubSpot path is reused, so re-running a month does not create copies. To replace a
// screenshot, give the new file a new name.
export async function uploadPublishingImages(filePaths) {
    const settings = imageSettings();
    const imageMap = {};
    for (const filePath of new Set(filePaths)) {
        const { folderPath, fileName, hubspotPath } = hubspotLocationFor(filePath, settings.folderRoot);
        let file = await getFileByPath(hubspotPath);
        let width = file?.width;
        let height = file?.height;
        if (!file || !width || !height) {
            const image = await toWebp(filePath, settings);
            if (!file) {
                file = await uploadFile({ buffer: image.buffer, fileName, folderPath, contentType: "image/webp" });
            }
            width = image.width;
            height = image.height;
        }
        imageMap[filePath] = { url: file.url, ...displaySize(width, height, settings.displayWidth) };
    }
    return imageMap;
}
