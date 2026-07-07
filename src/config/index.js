import fs from "fs";
import path from "path";
import "dotenv/config";

function loadJsonConfig(relativePath) {
    const filePath = path.resolve(relativePath);
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const publishingConfig = loadJsonConfig(path.join("config", "publishing.json"));

function parseModelList(value, fallback) {
    if (!value) return fallback;
    const models = value.split(",").map(model => model.trim()).filter(Boolean);
    return models.length ? models : fallback;
}

const gemini3Models = parseModelList(
    process.env.GEMINI_MODELS,
    ["gemini-3.5-flash"]
);
const gemma4Models = parseModelList(
    process.env.GEMMA_MODELS,
    ["gemma-4-26b-a4b-it", "gemma-4-31b-it"]
);

export const CONFIG = {
    SOURCE_REPOS: process.env.SOURCE_REPOS,
    MONTH: process.env.MONTH, // Format: YYYY-MM (e.g., 2026-01)
    ORG_GIT_API: process.env.ORG_GIT_API,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    HUBSPOT_PRIVATE_APP_TOKEN: process.env.HUBSPOT_PRIVATE_APP_TOKEN,
    GEMINI_CALL_TIMEOUT_MS: Number(process.env.GEMINI_CALL_TIMEOUT_MS || 90000),
    GEMINI_LONG_CALL_TIMEOUT_MS: Number(process.env.GEMINI_LONG_CALL_TIMEOUT_MS || 360000),
    GEMINI_SUMMARIZER_RETRIES: Number(process.env.GEMINI_SUMMARIZER_RETRIES || 1),
    GEMINI_SUMMARIZER_MAX_OUTPUT_TOKENS: Number(process.env.GEMINI_SUMMARIZER_MAX_OUTPUT_TOKENS || 300),
    REUSE_ORGANIZER_RESPONSE: process.env.REUSE_ORGANIZER_RESPONSE === 'true',
    REUSE_CLUSTER_SUMMARIES: process.env.REUSE_CLUSTER_SUMMARIES === 'true',
    CONTINUE_ON_SUMMARIZER_ERROR: process.env.CONTINUE_ON_SUMMARIZER_ERROR !== 'false',
    PRODUCTION: process.env.PRODUCTION === 'true',
    DRY_RUN: process.env.DRY_RUN === 'true' || process.env.PRODUCTION !== 'true',
    REPO_CONTEXT_PATH: path.join("data", process.env.PRODUCTION === 'true' ? "repo-context.md" : "test/repo-context.md"),
    STORAGE_DIR: path.join("data", "raw"),
    PR_FAQS_DIR: path.join("data", "pr-faqs"),
    PUBLISHING_CONFIG_PATH: path.join("config", "publishing.json"),
    SYNC_STATE_PATH: path.join("state", "hubspot-sync-state.json"),
    DEFAULT_MODELS: gemini3Models,
    MODEL_CONFIG: {
        ORGANIZER: parseModelList(process.env.GEMINI_ORGANIZER_MODELS, gemini3Models),
        SUMMARIZER: parseModelList(process.env.GEMINI_SUMMARIZER_MODELS, gemma4Models),
        SYNTHESIZER: parseModelList(process.env.GEMINI_SYNTHESIZER_MODELS, gemini3Models),
        PRODUCT_UPDATER: parseModelList(process.env.GEMINI_PRODUCT_UPDATER_MODELS, gemini3Models)
    },
    PRICING: {
        // Cost per 1M tokens (USD) - Approximate for Gemma 3
        "gemma-3-27b-it": { input: 0.27, output: 0.27 },
        "gemma-3-4b-it": { input: 0.10, output: 0.10 },
        "gemma-3-1b-it": { input: 0.05, output: 0.05 },
        "gemini-1.5-flash": { input: 0.075, output: 0.30 },
        "gemini-1.5-pro": { input: 1.25, output: 5.00 }
    },
    PUBLISHING: publishingConfig
};
