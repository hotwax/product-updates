import { GoogleGenAI } from "@google/genai";
import { delay } from "../utils/index.js";
import { CONFIG } from "../config/index.js";

const genAI = new GoogleGenAI({ apiKey: CONFIG.GEMINI_API_KEY });
const LONG_PROMPT_CHARS = 50000;

function getCallTimeoutMs(prompt) {
    return prompt.length > LONG_PROMPT_CHARS
        ? CONFIG.GEMINI_LONG_CALL_TIMEOUT_MS
        : CONFIG.GEMINI_CALL_TIMEOUT_MS;
}

function extractResponseText(response) {
    if (typeof response.text === "string") return response.text;
    if (typeof response.text === "function") return response.text();
    const parts = response.candidates?.[0]?.content?.parts || [];
    return parts.map(part => part.text || "").join("").trim();
}

function calculateCost(modelName, usage) {
    if (!usage) return 0;
    const modelKey = modelName.replace("models/", "");
    const pricing = CONFIG.PRICING[modelKey];
    if (!pricing) return null;
    
    const inputTokens = usage.promptTokenCount || 0;
    const outputTokens = usage.candidatesTokenCount || (usage.totalTokenCount ? usage.totalTokenCount - inputTokens : 0);
    
    const inputCost = (inputTokens / 1_000_000) * pricing.input;
    const outputCost = (outputTokens / 1_000_000) * pricing.output;
    return inputCost + outputCost;
}

export async function analyzeWithGemini(prompt, models = CONFIG.DEFAULT_MODELS, retries = 5, options = {}) {
    // Proactive delay before call to manage RPM
    await delay(5000);

    const startTime = Date.now();
    const timeoutMs = getCallTimeoutMs(prompt);

    for (let attempt = 1; attempt <= retries; attempt++) {
        let allRateLimited = true;
        for (const modelName of models) {
            try {
                const fullModelName = modelName.replace(/^models\//, "");
                console.log(`Trying Gemini model: ${fullModelName} (Attempt ${attempt}/${retries}, timeout ${Math.round(timeoutMs / 1000)}s)`);
                
                const response = await genAI.models.generateContent({
                    model: fullModelName,
                    contents: prompt,
                    config: {
                        ...(options.maxOutputTokens ? { maxOutputTokens: options.maxOutputTokens } : {}),
                        httpOptions: {
                            timeout: timeoutMs,
                        },
                    },
                });

                const duration = ((Date.now() - startTime) / 1000).toFixed(2);
                const usage = response.usageMetadata || response.usage_metadata;
                if (usage) {
                    const inputTokens = usage.promptTokenCount || 0;
                    const outputTokens = usage.candidatesTokenCount || (usage.totalTokenCount ? usage.totalTokenCount - inputTokens : 0);
                    const cost = calculateCost(fullModelName, usage);
                    const costText = cost === null ? "unknown" : `$${cost.toFixed(6)}`;
                    console.log(`[COST] ${fullModelName} | Tokens: ${inputTokens} in, ${outputTokens} out | Est. Cost: ${costText} | Duration: ${duration}s`);
                } else {
                    console.log(`[DEBUG] ${fullModelName} call completed in ${duration}s`);
                }

                const text = extractResponseText(response);
                if (!text) {
                    throw new Error(`Model ${fullModelName} returned no text`);
                }
                return text;
            } catch (e) {
                const message = String(e.message || e);
                const isRateLimit = message.includes("429")
                    || message.includes("RESOURCE_EXHAUSTED")
                    || message.includes("AbortError")
                    || message.includes("aborted")
                    || message.includes("timeout")
                    || message.includes("503")
                    || message.includes("Too Many Requests")
                    || message.includes("Service Unavailable")
                    || message.includes("high demand")
                    || message.includes("overloaded");
                if (!isRateLimit) {
                    allRateLimited = false;
                    console.warn(`    ⚠️  ${modelName} failed with non-rate-limit error: ${message}`);
                } else {
                    console.warn(`    ⏳ ${modelName} hit rate limit.`);
                }
            }
        }
        
        if (allRateLimited && attempt < retries) {
            const waitTime = Math.pow(2, attempt) * 20000;
            console.warn(`    🚨 All models rate limited. Waiting ${waitTime/1000}s before attempt ${attempt + 1}...`);
            await delay(waitTime);
        } else if (!allRateLimited) {
            await delay(2000);
        }
    }
    const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);
    throw new Error(`All Gemini models failed after ${retries} retries (${totalDuration}s total)`);
}
