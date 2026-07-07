You are a Product Manager at HotWax Commerce drafting a release note for a Retailer.
The reader is enthusiastic about their system and cares about system improvements and new features.

Summarize this cluster of updates into a cohesive release note entry.
For new features or enhancements, follow the structure: Problem, Solution, Impact.
For standalone bug fixes on existing features, use the pattern: "Fixed a bug if [Condition], [Symptom]."

Style Guide Snippet:
- Simpler is better.
- Active voice.
- Be granular but concise (3-4 sentences for features, 1 sentence for bug fixes).
- **Tone**: Maintain a professional, utility-focused tone. 
- **No AI Slop**: Avoid words like "enhanced", "streamlined", "seamless", or "robust".
- **No Exclamation Points**: Strictly use periods for all sentences.
- **No dev-time bugs**: Any "fixes" or "issues" found during development of a new feature should be synthesized as part of the feature's polished experience. Avoid words like "fixed", "issue", or "bug" for new features.
- **True Bug Fixes**: For standalone bug fixes, always start with "Fixed a bug..." and focus on the user-visible symptom rather than the technical reason (e.g., avoid mentioning array indexes or code crashes).

Cluster Description: Items cited in the current 2026-06 release note section "Shopify location, inventory, and post-shipment events".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#227",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "227",
    "title": "feat: Shopify Location Sync — get#ShopifyLocations and store#ShopifyFacility",
    "labels": [],
    "body": "## Summary\n\nAdds two services to \\`ShopifyFacilityServices.xml\\` for the Shopify Location Sync feature.\n\n**\\`get#ShopifyLocations\\`**\n- Fetches all active Shopify locations via GraphQL using \\`GraphqlFacade\\` DSL\n- Returns raw \\`locations\\` connection (\\`edges[].node\\`) — PWA navigates the structure and strips GIDs client-side\n- Resolves \\`systemMessageRemoteId\\` from \\`shopId\\` directly (no helper service)\n\n**\\`store#ShopifyFacility\\`**\n- Creates or updates an OMS Facility for a **single** Shopify location\n- Idempotent on \\`shopifyLocationId\\` (dedup via \\`Facility.externalId\\`)\n- \\`facilityTypeId\\` is always caller-provided — never auto-inferred\n- Resolves Shopify alpha-2 country/province codes to OFBiz geoIds via \\`moqui.basic.Geo\\` + \\`GeoAssoc\\`\n- Delegates persistence to \\`store#Facility\\` in OMS (PR #578), then creates/updates \\`ShopifyShopLocation\\`\n- Bulk imports: POST a JSON array and Moqui calls this service once per item natively\n\n## Depends on\n\n- hotwax/oms#578 (\\`store#Facility\\` platform service)\n- hotwax/mantle-shopify-connector#344 (REST endpoints)\n\n## Part of\n\nhotwax/company#130",
    "files": [
      "service/co/hotwax/sob/facility/ShopifyFacilityServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#255",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "255",
    "title": "Add Shopify store setup bridge services",
    "labels": [],
    "body": "## Business summary\nRetailer store setup needs one backend bridge path that can start the first Shopify data pulls after a shop is connected. This PR consolidates the Shopify bridge onboarding work into one branch: order history queueing plus initial Shopify inventory reset into OMS.\n\nCloses #254.\nCloses #256.\n\n## Inventory reset architecture\n- `reset#ShopifyProductFacilityInventory` is the Shopify-facing reset service.\n- It accepts Shopify `shopId`, `shopifyLocationId`, `shopifyProductId`, and the external inventory level (`externalATP` or `externalQOH`).\n- The bridge resolves Shopify location/product mappings to OMS `facilityId` and `productId`.\n- The bridge calls `co.hotwax.poorti.FulfillmentServices.reset#ProductFacilityInventory` with OMS ids and inventory levels only.\n- Poorti owns inventory item selection, diff calculation, `ExternalInventoryReset` logging, and `InventoryItemDetail` creation.\n\n## Store setup flows\n- `sync#ShopifyInventoryReset(shopId)` queues the Shopify bulk inventory query.\n- `consume#ShopifyInventoryResetDataFile` transforms the Shopify JSONL result into Data Manager rows.\n- `import#ShopifyInventoryReset` routes mapped inventory rows through the Shopify bridge reset service.\n- `sync#ShopifyOrderHistoryForShop` lets setup queue order history from the shop id without exposing lower-level message remote details.\n\n## Data and diagnostics\n- Adds `RESET_SHOPIFY_INVENTORY` Data Manager/SystemMessage/ServiceJob seed and upgrade data.\n- Adds `VAR_SHOPIFY_RESET` as the dedicated `IID_REASON` for inventory resets received from Shopify.\n- Keeps external ATP/QOH visible in reset outputs for debugging.\n- Logs Shopify ids, resolved OMS ids, external levels, computed diffs, and `resetItemId` after each bridge reset.\n\n## Dependencies\n- Depends on hotwax-poorti #238 for `reset#ProductFacilityInventory` and the simplified `create#ExternalInventoryReset` event-log contract.\n\n## Validation\n- XML parsed with `xmllint` for conflicted/edited service and data files during consolidation.\n",
    "files": [
      "data/SOBInventoryResetData.xml",
      "docs/shopify_order_history_sync.md",
      "service/co/hotwax/sob/order/ShopifyOrderSyncHistoryServices.xml",
      "service/co/hotwax/sob/product/InventoryServices.xml",
      "template/graphQL/BulkQueryShopifyInventoryReset.ftl",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "254",
        "body": "Business summary:\nRetailer onboarding should be able to pull the current Shopify on-hand inventory into OMS after products and locations are mapped. Today the bridge can push OMS inventory to Shopify, but there is no inverse initial import path that reads Shopify inventory levels and resets OMS facility inventory.\n\nAcceptance criteria:\n- Add a Shopify bulk inventory query for inventory items and inventory levels.\n- Transform the JSONL result into Data Manager rows.\n- Map Shopify inventory item IDs to ShopifyShopProduct and Shopify location IDs to ShopifyShopLocation.\n- Reset OMS inventory through the Poorti reset#InventoryItem service from hotwax-poorti#267.\n- Seed the DataManagerConfig, SystemMessageType, and paused ServiceJob needed by onboarding/dev setup.",
        "labels": [],
        "files": [],
        "title": "Import initial Shopify inventory into OMS during onboarding"
      },
      {
        "type": "Issue",
        "number": "256",
        "body": "## Business summary\nRetailer onboarding needs to load recent/open Shopify orders after a store is connected, but the UI should only know the Shopify shop. Today the existing history sync service expects lower-level message remote details, so setup cannot queue the first order pull as a guided onboarding action.\n\n## Scope\n- Add a shop-level REST endpoint for queuing Shopify order history.\n- Reuse the existing BulkOrderHistoryQuery service and cursor/window behavior.\n- Return the queued message and resolved date window so onboarding can report what it started.\n\n## Validation target\n- Authenticated POST /rest/s1/sob/shopify/orderHistory reaches the bridge route and returns service-level validation errors for invalid setup instead of 404/auth failures.\n\nDepends on #255.",
        "labels": [],
        "files": [],
        "title": "Queue Shopify order history from product-store onboarding"
      }
    ],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#271",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "271",
    "title": "Refactor Shopify inventory reset to per-level records and a single import service",
    "labels": [],
    "body": "Closes #270.\n\nSimplifies the Shopify → OMS inventory reset flow: process one inventory **level** per Data Manager record instead of one **item** with nested levels, collapse the two-service import path into one, and lean on the Data Manager's per-record transaction isolation instead of hand-rolled `force-new`.\n\nFull findings, considerations, and decisions are in #270.\n\n## Changes\n\n- **Query** (`BulkQueryShopifyInventoryReset.ftl`): filter `inventoryItems(query: \"tracked:true\")` so untracked items never enter the pipeline. `groupObjects: true` unchanged.\n- **Transform** (`ShopifyHelper.transformShopifyJsonl`): add a `groupByParent` flag (default `true`).\n  - `true` → existing nest-under-parent behavior; the virtualProduct flow is byte-identical (still passes 4 args).\n  - `false` → emit one record per `__parentId` (level) line, skip parent lines. The inventory consume passes `false`.\n- **Consume** (`consume#ShopifyInventoryResetDataFile`):\n  - Remove `transaction=\"force-new\"` and `ignore-error=\"true\"` from `upload#DataManagerFile` — the transform + MDM-log creation now run in the consume's own transaction (commit together; on failure the SystemMessage retries).\n  - Remove the dead `transaction-timeout=\"7200\"` (the framework already invokes consume with `transaction-timeout=\"1800\"`, which overrides it).\n  - Drop the `additionalParameters` build (no `SystemMessageTypeParameter` seeded) and hardcode `configId=\"RESET_SHOPIFY_INVENTORY\"`.\n- **Import** (`import#ShopifyInventoryReset`): rewritten to process one level — resolve product from `shopifyInventoryItemId` (via `__parentId`), facility from `location.id`, read `on_hand`, call poorti `reset#ProductFacilityInventory`. No loop, no `force-new`, no `additionalParameters`. `shopId` still arrives as a named param via DataManagerParameter.\n- **Deleted** `reset#ShopifyProductFacilityInventory` — its only caller was `import#` (no REST route); its resolve-and-reset body is now inline.\n\n## Functional equivalence\n\nIdentical resets for every tracked, mappable (product, location) pair (same `facilityId`, `productId`, `externalQOH`, `reasonEnumId=VAR_SHOPIFY_RESET`, same `InventoryItemDetail` diff). Intentional behavior changes: untracked items excluded; zero-level items silently skipped (not errored); error-file granularity is per-level not per-item; upload failures surface and retry instead of being swallowed.\n\n## Dependencies\n\n- `VAR_SHOPIFY_RESET` enum upgrade-data fix (#264 / #265) must land first — the reset reason FK depends on it.\n\n## Validation\n\n- [x] `xmllint` parses the changed service file\n- [x] No remaining references to the deleted `reset#ShopifyProductFacilityInventory`\n- [x] moqui quality audit clean on the changed services (virtualProduct flow untouched)\n- [ ] Build the component (Groovy helper + service changes) — not yet compiled\n- [ ] Run a real bulk-query result end-to-end (sync → consume → MDM → import) on a connected shop\n- [ ] Confirm error-file capture for an unmapped location / missing on_hand row",
    "files": [
      "service/co/hotwax/sob/product/InventoryServices.xml",
      "src/main/groovy/co/hotwax/sob/shopify/ShopifyHelper.groovy",
      "template/graphQL/BulkQueryShopifyInventoryReset.ftl"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "270",
        "body": "## Background\n\nThe Shopify → OMS inventory reset flow introduced in #255 works, but a review of its design surfaced several over-complications and a couple of latent defects. This issue captures the findings, the design considerations, and the decisions taken to simplify it.\n\nThe flow: `sync#ShopifyInventoryReset` queues a bulk query → Shopify returns JSONL → `consume#ShopifyInventoryResetDataFile` transforms it and uploads to Data Manager (MDM) → MDM calls `import#ShopifyInventoryReset` per record → poorti `reset#ProductFacilityInventory` writes the `InventoryItemDetail`.\n\n## Findings\n\n1. **Stateful parent-child merge.** The transform reassembled the bulk JSONL into one nested record per inventory item (item + nested `InventoryLevel[]`), which `import#` then looped over.\n2. **Double resolution across two services.** `import#` resolved facility + product per level, then discarded them and passed raw Shopify ids to `reset#ShopifyProductFacilityInventory`, which re-resolved the same location and product. `reset#` had exactly one caller (`import#`) and no REST route.\n3. **`transaction=\"force-new\"` per level was load-bearing for the wrong reason.** It was there to give per-level partial-success isolation — but the Data Manager already runs every record in its own transaction (`MaargDataLoaderImpl` calls the import service with `requireNewTransaction(true)` + `ignorePreviousError(true)` and captures per-record errors). The only thing per-level force-new added was isolation *within* an item.\n4. **`additionalParameters` carried nothing.** It is built from `SystemMessageTypeParameter`, of which none are seeded for `BulkQueryShopifyInventoryReset`, so it was always an empty map. It was embedded in every record (no consumer) and read only for a `resetDateResourceId`/`mdmConfigId` that always fell back to defaults.\n5. **Dead `transaction-timeout=\"7200\"`.** The framework invokes the consume service via `consume#ReceivedSystemMessage` with `transaction=\"force-new\" transaction-timeout=\"1800\"`, which overrides the service-def timeout. The 7200 never applied; the effective ceiling is 1800s.\n6. **`ignore-error=\"true\"` on the MDM upload = silent data loss.** A failed `upload#DataManagerFile` was swallowed, the SystemMessage was marked consumed, and the transformed file was deleted — losing the data with no error trail.\n7. **Untracked items were not filtered**, so they entered the pipeline (mostly as error-file noise, since they carry no meaningful on-hand).\n\n## Considerations\n\n- **Can shopId come from Shopify?** No. The OMS key is `ShopifyShop.shopId` (internal), not the Shopify shop GID (`shopifyShopId`); a bulk query can't carry a shop id at the root, and `inventoryItem` nodes don't expose it. The consume already holds the OMS shopId (`SystemMessageRemote.internalId`), so it stays out of the file and is injected as a DataManagerParameter.\n- **`groupObjects` true vs false.** Kept `true` so a SKU's records stay grouped for thread assignment in MDM chunking. It doesn't affect per-level processing (we key each level off `__parentId`).\n- **Flatten to a JSON array (Path A) vs teach MDM to read JSONL (Path B).** Chose A — MDM only reads a JSON array (`.json` → `JsonHandler`), and Path B would touch the shared loader. The transform still converts JSONL → JSON array; it just stops merging.\n- **Merge `import#`/`reset#` or keep two?** Merge. With per-level records there is no loop, the DM provides per-record isolation, and `reset#` had no external reuse. Keeping two would be indirection plus the double resolution.\n- **Per-level partial success.** Kept — it falls out of the DM's per-record isolation for free (one record = one level = one reset; a bad mapping or poorti failure sends just that level to the error file).\n- **Suspend/resume the transaction around the file I/O?** Decided against for now; the framework's 1800s ceiling is acceptable for the expected file sizes.\n- **Split the file per inventory item (via DM `groupBy`)?** Not for this flow — it would unbalance chunks and serialize a SKU's levels for no benefit, since per-level resets are independent.\n- **Zero-level-item diagnostic.** The per-row INFO log already covers every processed level; items with no levels simply produce no record. Accepted (a tracked-but-unstocked item is better surfaced via reconciliation, not the reset path).\n\n## Decisions\n\n1. Filter `inventoryItems(query: \"tracked:true\")` at the bulk query.\n2. Flat, per-level transform: add a `groupByParent` flag (default `true`) to the shared `transformShopifyJsonl`. `true` keeps the existing nest-under-parent behavior (virtualProduct flow unchanged); `false` emits one record per `__parentId` (level) line. The inventory consume passes `false`.\n3. Collapse `import#ShopifyInventoryReset` + `reset#ShopifyProductFacilityInventory` into one one-record-one-reset service; delete `reset#ShopifyProductFacilityInventory`. Product resolved by `shopifyInventoryItemId` (from `__parentId`); `externalQOH` only.\n4. Drop `additionalParameters` from the inventory flow (consume build, transform embed, import param). Kept in the shared helper signature + group-by-parent branch for the virtualProduct flow.\n5. Remove `transaction=\"force-new\"` and `ignore-error=\"true\"` from the `upload#DataManagerFile` call so the transform + MDM-log creation run in the consume's own transaction (commit together; on failure the message retries).\n6. Remove the dead `transaction-timeout=\"7200\"` from the consume service.\n\n## Functional equivalence\n\nThe resets performed are identical for every tracked, mappable (product, location) pair — same `facilityId`, `productId`, `externalQOH`, `reasonEnumId=VAR_SHOPIFY_RESET`, same `InventoryItemDetail` diff. Intentional behavior changes: untracked items excluded; zero-level items silently skipped (not errored); error-file granularity is per-level (not per-item); upload failures surface and retry (not swallowed).\n\n## Dependency\n\nBuilds on the `VAR_SHOPIFY_RESET` enum upgrade-data fix (#264 / #265).",
        "labels": [],
        "files": [],
        "title": "Refactor Shopify inventory reset: per-level records, single import service, simpler transaction handling"
      }
    ],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#277",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "277",
    "title": "Prevent Shopify inventory reset echo-back via origin remote",
    "labels": [],
    "body": "## Summary\n\nPrevents a Shopify inventory **reset** from being echoed back to the same Shopify store it was imported from, by recording the **origin `SystemMessageRemote`** on each reset and skipping that remote on the outbound push — instead of relying on `SHOPIFY_INV_SYNC` being disabled while the reset runs.\n\n**Business context:** During the initial inventory reset (cold-start seed), Shopify inventory is pulled into the OMS. The resulting deltas must not be pushed straight back to the same Shopify store (echo-back / sync loop), but should still reach any *other* Shopify store mapped to the same facility/product. Today this is handled coarsely — operators must keep `SHOPIFY_INV_SYNC` disabled until the reset completes, which is fragile and easy to get wrong. This change makes echo-back prevention precise and automatic, per remote.\n\n**What changed (`service/co/hotwax/sob/product/InventoryServices.xml` only):**\n- **Capture origin on import:** `consume#ShopifyInventoryResetDataFile` forwards the inbound Shopify remote id (`systemMessageRemote.systemMessageRemoteId`) through the Data Manager `parameters` into `import#ShopifyInventoryReset` (new optional `systemMessageRemoteId` in-param), which passes it as `originSystemMessageRemoteId` into the OMS reset (`reset#ProductFacilityInventory`). The value is persisted on the `ExternalInventoryReset` row (see the dependent Poorti PR).\n- **Skip origin on outbound:** `post#ShopifyExternalInventoryReset` reads `originSystemMessageRemoteId` off the reset row and passes it as `excludeSystemMessageRemoteId` down through `post#ShopifyInventoryAdjustment` → `post#ShopifyInventoryAdjustments`. The per-shop loop skips the shop whose write-access remote equals `excludeSystemMessageRemoteId`, logging that it skipped the origin remote to avoid echoing the change back to Shopify.\n- **Other shops unaffected:** non-origin shops still receive the delta, subject to the existing per-store `SHOPIFY_INV_SYNC` gate (left intact).\n- **Docs:** the stale \"run reset before enabling `SHOPIFY_INV_SYNC`\" sequencing contract in the `sync#ShopifyInventoryReset` description is replaced with the per-remote echo-back explanation.\n\n**Notes / safety:**\n- The `PostShopifyExternalInventoryReset` SECA is **unchanged** (it still passes only `resetItemId`; origin is read from the persisted row).\n- `excludeSystemMessageRemoteId` is optional; the non-reset adjustment paths (recorded inventory via `PostShopifyRecordedInventoryProduct`, physical-inventory variance) pass nothing, so the new skip is a no-op for them — existing inventory-adjustment behavior is preserved.\n- No transfer shipment/receipt or fulfillment-sync behavior is touched. No `ShopifyShop.realTimeInventoryPush` setting is introduced (intentionally out of scope for this PR).\n\n## Log Work\n- Hours spent:\n\n## Issue Link\n- Closes #\n- (No separate tracked issue; part of the June-15 Shopify inventory reset work.)\n\n## Dependency\n**Depends on hotwax-poorti PR #282** — https://github.com/hotwax/hotwax-poorti/pull/282 — which adds the `originSystemMessageRemoteId` field on `ExternalInventoryReset` and threads it through `reset#ProductFacilityInventory` / `create#ExternalInventoryReset`. Merge/deploy the Poorti change **first**; this bridge change reads and writes that field at runtime.\n\n## Release note\nShopify inventory resets no longer echo their delta back to the store they were imported from. Each reset records its origin Shopify remote and the outbound sync skips that remote, so a reset can run safely **without** first disabling real-time inventory sync. Deltas still propagate to any other connected Shopify store.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "files": [
      "service/co/hotwax/sob/product/InventoryServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#278",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "278",
    "title": "Gate realtime inventory push on ShopifyShop.realTimeInventoryPush",
    "labels": [],
    "body": "## What\nMigrates the realtime inventory push and fulfillment paths off the product-store `SHOPIFY_INV_SYNC` setting to the shop-level `ShopifyShop.realTimeInventoryPush` flag.\n\n- **`post#ShopifyInventoryAdjustments`** — checks `realTimeInventoryPush` per shop, read directly off `ShopifyShopLocationView` (`alias-all`), replacing the `productStoreId`-scoped `SHOPIFY_INV_SYNC` `ProductStoreSetting` lookup.\n- **`post#ShopifyFulfillment`** — removes the `SHOPIFY_INV_SYNC` guard (fulfillment is no longer gated by the inventory toggle) and its now-dead `orderHeader` fetch.\n- **`ShopifyShopDetail` screen** — adds an editable \"Inventory Sync\" toggle backed by a new `update#ShopifyShop` transition.\n\n## Why\nPR 1 of moving the realtime Shopify inventory toggle to a shop-level field so an inventory event fans out per eligible Shopify shop (the product-event path already iterates all shops mapped to the facility).\n\n## Depends on\n- hotwax/ofbiz-oms-udm#390 (adds `ShopifyShop.realTimeInventoryPush` to the entity definition) — **merge that first**; the bridge reads the field.\n\n## Deferred (PR 2 — transfer fan-out)\n- Transfer shipment/receipt (`post#`/`receive#ShopifyTransferShipment`) still gate on `SHOPIFY_INV_SYNC` and currently hard-require exactly one shop; converting them to per-shop fan-out + per-shop shipment-id state and removing the `SHOPIFY_INV_SYNC` enum/seed are scoped to PR 2.\n- The reset-sequencing comment in `InventoryServices.xml` (`post#ShopifyInventoryReset`) is intentionally left for the in-flight inventory-reset echo-back work, which edits the same `post#ShopifyInventoryAdjustments` suppression lines — **expect a small merge reconciliation** there.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "files": [
      "screen/ShopifyOmsBridge/ShopifyShops/ShopifyShopDetail.xml",
      "service/co/hotwax/sob/fulfillment/FulfillmentFeedServices.xml",
      "service/co/hotwax/sob/product/InventoryServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#281",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "281",
    "title": "Transfer multi-shop fanout + shared realtime inventory push eligibility helper",
    "labels": [],
    "body": "## What\n\nFans OMS transfer **shipment** and **receipt** events out to **every eligible Shopify shop independently**, replacing the single-shop, product-store-scoped transfer path. Builds on `feat/realtime-inventory-push` (the `ShopifyShop.realTimeInventoryPush` field), whose commit explicitly deferred the transfer migration + `SHOPIFY_INV_SYNC` removal to this PR.\n\n## Changes\n\n- **Shared eligibility helper** `find#EligibleRealtimeInventoryPushShops` (`ShopifyHelperServices`): keyed on the impacted facility — `realTimeInventoryPush == 'Y'`, facility + product mapped, write-capable (`SHOP_RW_ACCESS`) `SystemMessageRemote`. Ineligible shops are **skipped with a log, never errored**. Used by both the product-adjustment and transfer paths.\n- **`post#`/`receive#ShopifyTransferShipment` rewritten to fan out per shop.** Impacted facility comes from the event — post = origin/issuance facility, receive = the receipt `facilityId` — **no `orderHeader.productStoreId` lookup**. Receipt posts the transfer on demand per shop when the ship event never did.\n- **New entity `ShopifyTransferShipment`** (PK `shopId` + `shopifyInventoryShipmentId`) replaces the unqualified `SHPFY_INV_SHIPMENTS` `ShipmentAttribute` blob. Idempotency: posts by `(shipmentId, shopId, batchIndex)`; corrections by `(receiptId, shopId)` with `syncStatusId` `SHIPMENT_CREATED → RECEIVED` so an interrupted correction stays observable.\n- **Per-shop best-effort isolation**: each shop body is wrapped in `try/catch` + `finally { ec.message.clearErrors() }` (mirrors the existing `ShopifyOrderIntegrationSetupServices` idiom) so one shop's Shopify error neither aborts the fan-out nor rolls back the run. No force-new transaction; a proper per-shop retry queue is left as a `TODO`.\n- `post#ShopifyInventoryAdjustments` rewired onto the helper (behavior preserved) + same per-shop isolation.\n- **Removed** the now-unused product-store `SHOPIFY_INV_SYNC` enum/seed/upgrade data + defensive `UpgradeSQL` delete.\n\n## Non-goals (unchanged)\n\nInventory-reset echo-back prevention and fulfillment-to-Shopify sync are out of scope; the `create#ShopifyTransferOrder` test service is left as-is.\n\n## Verification\n\n- `xmllint` well-formedness on all changed files; `try`/`catch`/`finally` balanced; no remaining `SHOPIFY_INV_SYNC`/`SHPFY_INV_SHIPMENTS` references in service code.\n- 15-agent adversarial review (5 lenses × verify): 3 confirmed findings fixed (per-shop exception isolation, rollback-only cascade via `clearErrors`, correction `syncStatusId` observability), then a focused re-verify — **PASS**.\n- Not runtime-tested against a live Moqui instance (static + multi-agent review only).\n\n## Follow-up risks\n\n1. Hard-failure isolation has a ceiling without force-new tx — a nested call that marks the JTA tx rollback-only still can't be recovered; that's what the TODO per-shop retry queue should replace.\n2. `post#` eligibility is origin-only (issuance); a destination-only shop is handled by the receive correction path instead.\n3. Requires `oms`'s `feat/realtime-inventory-push` (the `realTimeInventoryPush` field) deployed alongside.\n4. `transferShipmentTypeId`/`syncStatusId` are plain id strings (matching existing history-entity convention), not seeded enums.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "files": [
      "entity/TransferEntities.xml",
      "service/co/hotwax/sob/product/InventoryServices.xml",
      "service/co/hotwax/sob/shopify/ShopifyHelperServices.xml",
      "service/co/hotwax/sob/transfer/ShopifyTransferOrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-poorti#238",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "238",
    "title": "Persist external inventory reset metadata correctly",
    "labels": [],
    "body": "## Business summary\nThis PR makes external inventory resets auditable while keeping inventory mutation routed through `InventoryItemDetail`. The reset flow now has a clear split: one service resolves product/facility inventory and computes the delta, while `create#ExternalInventoryReset` records the reset event and submits the supplied diff to inventory detail.\n\n## Service architecture\n- `reset#ProductFacilityInventory` is the orchestration service. It accepts product/facility identifiers plus the expected external inventory level, resolves the OMS `facilityId`, `productId`, and `inventoryItemId`, reads the current inventory totals, computes `quantityOnHandDiff` and `availableToPromiseDiff`, then calls `create#ExternalInventoryReset` with those resolved facts.\n- `create#ExternalInventoryReset` is the event logging service. It requires `facilityId`, `productId`, and `inventoryItemId`, relies on entity foreign keys for validity, persists the provided reset facts, and creates an `InventoryItemDetail` using the provided diff values.\n- `ExternalInventoryReset` now stores both the external/current inventory facts and the computed diffs: `availableToPromiseDiff` and `quantityOnHandDiff`.\n\n## Scope\n- Add `availableToPromiseDiff` and `quantityOnHandDiff` to `ExternalInventoryReset`.\n- Keep diff computation in `reset#ProductFacilityInventory`.\n- Keep `create#ExternalInventoryReset` simple: no id resolution, no inventory comparison, no reason validation, no external quantity gating, and no zero-diff suppression.\n- Link the generated `InventoryItemDetail` back to the reset event with `resetItemId`.\n\nCloses #237\n",
    "files": [
      "entity/FulfillmentEntities.xml",
      "service/co/hotwax/poorti/FulfillmentServices.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "237",
        "body": "## Summary\nPersist external inventory reset details in the shared external reset flow so imported NetSuite resets store the right audit data on `InventoryItemDetail`.\n\n## Scope\n- allow `create#ExternalInventoryReset` to accept `reason` and `description`\n- default `reason` to `VAR_EXT_RESET`\n- require exactly one of `externalATP` or `externalQOH`\n- copy `ExternalInventoryReset.resetItemId` to `InventoryItemDetail.resetItemId`\n- write `InventoryItemDetail.description` from the incoming description value\n- validate the reason against `IID_REASON`\n\n## Notes\n- this does not add `InventoryItemVariance` handling\n- the service remains facility level and uses the facility inventory item record",
        "labels": [],
        "files": [],
        "title": "Persist external inventory reset metadata for NetSuite imports"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#282",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "282",
    "title": "Record origin SystemMessageRemote on ExternalInventoryReset (reset echo-back prevention)",
    "labels": [],
    "body": "## Summary\n\nAdds **origin metadata** to the external inventory reset flow so a reset records *which* remote produced it. This lets downstream inventory sync avoid echoing a reset back to the same remote it came from.\n\n**Business context:** When external inventory (e.g. a Shopify store) is reset into the OMS, the resulting delta must not be pushed back to the same store it originated from (\"echo-back\"), while still being free to propagate to other connected stores. Today that is handled coarsely — by requiring the real-time inventory sync flag (`SHOPIFY_INV_SYNC`) to be **disabled** while the reset runs. This change gives the reset native origin metadata so echo-back can be prevented **precisely, per-remote**, independent of any real-time inventory sync setting.\n\n**Changes (schema + service):**\n- `ExternalInventoryReset` gains an optional `originSystemMessageRemoteId` field, plus a `one-nofk` relationship (`originSystemMessageRemote`) to `moqui.service.message.SystemMessageRemote`. `one-nofk` is used deliberately: the OFBiz-grouped `ExternalInventoryReset` and the framework `moqui.service.message` entity may live in different datasource groups, so a hard FK is not appropriate.\n- `reset#ProductFacilityInventory` and `create#ExternalInventoryReset` accept the optional `originSystemMessageRemoteId` and persist it onto the reset row.\n- No REST change required: `externalInventoryResets` is exposed via entity auto-CRUD, so the new column is automatically available.\n\n**Compatibility:** The new parameter is optional — existing / non-Shopify reset callers are unaffected (the column persists as `null`). `ExternalInventoryReset` is new in this release, so no migration step is needed; the nullable column is created with the entity definition.\n\n## Log Work\n- Hours spent:\n\n## Base branch\nTargets `main`. The `JUNE-15` line has already merged into `main` (PR #263) and the branch was deleted, so this builds on `main`. Only the two files in this PR are changed; no other `main` history is affected.\n\n## Issue Link\n- Closes #\n- (No separate tracked issue; part of the June-15 Shopify inventory reset work.)\n\n## Dependency\nThe companion PR in **`hotwax-shopify-oms-bridge`** (populates `originSystemMessageRemoteId` for Shopify resets and skips the origin remote on the outbound push) **depends on this PR's `originSystemMessageRemoteId` field**. This Poorti PR should merge **first**.\n\n## Release note\nExternal inventory resets now record the originating system message remote. Imported reset deltas are no longer echoed back to their source remote during inventory sync, removing the need to disable real-time inventory sync while a reset runs.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "files": [
      "entity/FulfillmentEntities.xml",
      "service/co/hotwax/poorti/FulfillmentServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#283",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "283",
    "title": "Rename ExternalInventoryReset.resetDateResourceId to resetDataResourceId (typo fix)",
    "labels": [],
    "body": "## Summary\n\nFixes a misspelled field/parameter name on the external inventory reset flow: **`resetDateResourceId` → `resetDataResourceId`**.\n\nThe value identifies the reset **data resource** (e.g. `SHOPIFY_INV_RESET` / the import id), not a date — so `Date` was a typo for `Data`. Renamed consistently:\n- `ExternalInventoryReset.resetDateResourceId` entity field → `resetDataResourceId`\n- `reset#ProductFacilityInventory` and `create#ExternalInventoryReset` in-parameters, and the values threaded between them\n\nNo migration is required: `ExternalInventoryReset` is new in this release, so the column is created fresh with the corrected name.\n\n## Log Work\n- Hours spent:\n\n## Issue Link\n- Closes #\n- (Follow-up to review feedback on PR #282.)\n\n## Dependency / deploy note\n⚠️ **Coordinated rename — deploy together.** The companion bridge PR renames the same parameter where it calls `reset#ProductFacilityInventory`. Because `resetDataResourceId` is a **required** parameter, the two sides must be merged/deployed **together**; deploying only one side would break the reset call (the old `resetDateResourceId` key would no longer bind to the renamed required param).\n\nAlso note this touches the same lines as the echo-back PR #282; whichever merges second will need a trivial conflict resolution.\n\n## Release note\nCorrected the misspelled `resetDateResourceId` field/parameter to `resetDataResourceId` on the external inventory reset flow. Behavior is otherwise unchanged.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "files": [
      "entity/FulfillmentEntities.xml",
      "service/co/hotwax/poorti/FulfillmentServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/mantle-shopify-connector#344",
    "repo": "hotwax/mantle-shopify-connector",
    "type": "PR",
    "number": "344",
    "title": "feat: add GET and POST shopify/shops/{shopId}/shopify-locations endpoints",
    "labels": [],
    "body": "## Summary\n\nAdds two REST endpoints to `shopify.rest.xml` for the Shopify Location Sync feature.\n\n```\nGET  shopify/shops/{shopId}/shopify-locations   → get#LocationsFromShopify\nPOST shopify/shops/{shopId}/shopify-locations   → store#ShopifyFacility\n```\n\nPOST accepts a single JSON object (create one facility) or a JSON array (Moqui calls the service once per item — no custom loop needed).\n\nRelated #313\n\n## Depends on\n\n- hotwax/hotwax-shopify-oms-bridge#227 (service implementations)\n\n## Part of\n\nhotwax/company#130 (master issue)",
    "files": [
      "service/shopify.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/mantle-shopify-connector#356",
    "repo": "hotwax/mantle-shopify-connector",
    "type": "PR",
    "number": "356",
    "title": "Deprecate store#BulkOperationResultFile and stream file downloads",
    "labels": [],
    "body": "### Description\r\nCurrently, the `store#BulkOperationResultFile` service has a hardcoded 40 MB memory cap and loads the entire file into JVM memory. This causes exception errors when download files exceed 40 MB (which happens during full catalog syncs).\r\n\r\nTo fix this:\r\n* Changed the download logic to stream the file directly to disk in chunks via `FileUtils.copyURLToFile`.\r\n* Used Moqui's Resource Facade to get the URL: `ec.resource.getLocationReference(downloadUrl).getUrl()`.\r\n* Marked the service as deprecated.\r\n\r\n- Fixes #354",
    "files": [
      "service/co/hotwax/shopify/graphQL/ShopifyBulkImportServices.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "354",
        "body": "Currently, the `store#BulkOperationResultFile` service in `ShopifyBulkImportServices.xml` has a hardcoded limit of 40 MB (`maxResponseSize(4* 1024 * 1024 *10)`).\n\n### The Issue\nIf a bulk operation result file from Shopify exceeds 40 MB (which happens during a full catalog sync or when many products are updated), the download fails with an exception.\n\nSimply increasing this memory cap is not ideal because it loads the entire file into JVM memory as a byte array, which could lead to high memory consumption or `OutOfMemoryError` (OOM).\n\n### Suggested Fix\nUse `FileUtils.copyURLToFile()` to stream the file download directly from the URL to the disk. This removes the 40 MB limit entirely and downloads the file in small chunks, keeping the memory usage low.\n\n**File reference:**\n[ShopifyBulkImportServices.xml](https://github.com/hotwax/mantle-shopify-connector/blob/main/service/co/hotwax/shopify/graphQL/ShopifyBulkImportServices.xml#L160-L175)",
        "labels": [],
        "files": [],
        "title": "Exception thrown when bulk operation result file exceeds 40 MB limit"
      }
    ],
    "releaseTag": "v3.5.0"
  }
]

Output JUST the summary text.
