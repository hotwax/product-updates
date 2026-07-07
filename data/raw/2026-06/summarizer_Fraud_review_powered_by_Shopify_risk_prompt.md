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

Cluster Description: Items cited in the current 2026-06 release note section "Fraud review powered by Shopify risk".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#232",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "232",
    "title": "Ingest Shopify order risk and forward to OMS",
    "labels": [],
    "body": "## What\n\nExtends the Shopify order integration to capture order risk / fraud and hand it to the OMS, which acts on it at approval. Companion to **hotwax/oms#601** (the OMS-side entities, services, and approval logic).\n\n## Changes\n\n- **GraphQL** (`OrderFeedServices.xml`): adds `risk { recommendation, assessments { riskLevel, provider { title }, facts { description, sentiment } } }` to the order sync query.\n- **`create#ShopifyOrder`** (`ShopifyOrderServices.xml`): after the OMS order is created, makes a **single** call to `co.hotwax.oms.order.OrderRiskServices.store#OrderHeaderRisk` with the raw Shopify risk shape.\n- **`docs/order_risk_implementation.md`**: the full cross-repo implementation spec (model, decision matrix, approval flow, store-vs-shop discussion, open decisions).\n\n## Separation of concerns\nThe bridge **only maps the raw Shopify shape** into one OMS service call — it does no enum lookups, no persistence, and no approval logic. All of that is owned by the OMS (hotwax/oms#601), keeping risk actions a native OMS function.\n\n## Note for reviewers\nThe full design rationale (why summary recommendation lives on `OrderHeader`, why risk uses approval + WorkEffort task rather than `ORDER_HOLD`, the Mantle/OFBiz native-model exploration that led here) is in the spec doc. Requires hotwax/oms#601 to be present for the `store#OrderHeaderRisk` service to resolve.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "files": [
      "docs/order_risk_implementation.md",
      "entity/OrderSyncEntities.xml",
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy",
      "script/co/hotwax/sob/order/syncShopifyOrder.groovy",
      "service/co/hotwax/sob/order/OrderFeedServices.xml",
      "service/co/hotwax/sob/order/ShopifyOrderServices.xml",
      "service/shopify_sync.secas.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/mantle-shopify-connector#365",
    "repo": "hotwax/mantle-shopify-connector",
    "type": "PR",
    "number": "365",
    "title": "Added: risk object Order Mega Query",
    "labels": [],
    "body": "Changelog: Added",
    "files": [
      "data/ShopifyTemplateData.xml",
      "template/graphQL/OrderUnifiedMegaQuery.ftl",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/oms#601",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "601",
    "title": "Order risk detection & risk-driven order approval",
    "labels": [],
    "body": "## What\n\nImplements Shopify order risk / fraud handling in the OMS, per the spec in `hotwax-shopify-oms-bridge` → `docs/order_risk_implementation.md` (companion PR ingests the data).\n\n## Changes\n\n**Entities** (`entity/OrderRiskEntities.xml`)\n- `OrderHeaderRiskAssessment` (pkg `co.hotwax.order`) — one row per Shopify assessment: `source` (defaults `SHOPIFY` when provider null), `riskLevelEnumId`, `externalId`, `assessmentDate`.\n- `OrderHeaderRiskAssessmentFact` — per-fact `description` + `sentimentEnumId` (sentiment is per-fact in Shopify).\n- `extend-entity OrderHeader` → `riskRecommendationEnumId` (the rolled-up summary action) + `riskLevelEnumId` (worst level, for queries).\n\n**Seed** (`data/OrderRiskSeedData.xml`)\n- Enum types `ORDER_RISK_LEVEL`, `ORDER_RISK_RECOMMENDATION`, `RISK_FACT_SENTIMENT` (+ values, `enumCode` mirrors Shopify).\n- `AUTO_ACPT_RISK_REC` product-store setting (`PROD_STR_STNG`); `REVIEW_RISK_ORDER` WorkEffort type.\n\n**Services** (`service/co/hotwax/oms/order/OrderRiskServices.xml`)\n- `store#OrderHeaderRisk` — bridge entry; maps Shopify strings → enumIds, sets header summary, writes assessment + fact rows. All enum mapping lives here.\n- `evaluate#OrderRiskOnApproval` — reads `OrderHeader.riskRecommendationEnumId` + the store flag. `CANCEL` + autoAccept → cancel; `CANCEL` (manual) / `INVESTIGATE` → CS review task; `ACCEPT`/`NONE`/null → approve silently.\n- `create#OrderRiskReviewTask` — WorkEffort task linked to the order (mirrors the bad-address task); order stays **approved**.\n\n**Approval hook** (`service/.../OrderServices.xml`)\n- `approve#Order` calls `evaluate#OrderRiskOnApproval` right before approval; only the auto-cancel path stops approval. Cancellation records a clear `changeReason` in status history.\n\n## Design notes / decisions to confirm\n- **Null recommendation is optimistic** — risk never blocks approval unless it explicitly says so.\n- `autoAcceptRiskRecommendation` is at **product-store** level (consumed by native `approve#Order`); see spec §7 for the store-vs-shop discussion.\n- `INVESTIGATE` always raises a task (even under auto-accept).\n- Open items in spec §10 (entity shape, optional `riskLevelEnumId` denormalization, CommunicationEvent).\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "files": [
      "build.gradle",
      "data/OrderRiskSeedData.xml",
      "entity/OrderRiskEntities.xml",
      "service/co/hotwax/oms/order/OrderRiskServices.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "src/test/groovy/MoquiSuite.groovy",
      "src/test/groovy/co/hotwax/oms/order/OrderRiskServicesSpec.groovy",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#699",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "699",
    "title": "Added: rest endpoint for approve sales order",
    "labels": [],
    "body": "",
    "files": [
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#702",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "702",
    "title": "Changed: Store first risk fact description sorted by negative first in order tasks",
    "labels": [],
    "body": "Changelog: Changed\r\n\r\nRelated Issue: #701 ",
    "files": [
      "service/co/hotwax/oms/order/OrderRiskServices.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "701",
        "body": "Currently we're storing all the descriptions from all facts from risk object in an order, but the **description** field on the **WorkEffort** allows 255 charachters only.",
        "labels": [],
        "files": [],
        "title": "Store first risk fact in task workEffort of a risked order."
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-oms#600",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "600",
    "title": "Added support to approve sales order only if the initial transaction has been successfully created in OMS",
    "labels": [],
    "body": "Changelog: Changed\r\n\r\n## Summary\r\n- Added support to apporve sales order only if the initial transaction has been successfully created in OMS\r\n\r\n## Log Work\r\n- Hours spent:2\r\n\r\n## Issue Link\r\n- Closes #400 \r\n",
    "files": [
      "applications/hwmapps/data/omssetup/ProductStoreData.xml",
      "applications/hwmapps/src/main/java/co/hotwax/customerservice/order/CsrOrderServices.java",
      "upgrade/UpcomingRelease/UpgradeData.xml",
      "upgrade/UpcomingRelease/UpgradeSteps.md"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "400",
        "body": "### Description\nOrders whose payment details failed to be fetched (or are still missing/null) are currently being picked up and sent in the order brokering feed to WMS.\n\nThis should **not** happen — only orders with successfully fetched and valid payment information should be eligible for brokering.\n\n### Current Behavior\n- Order proceeds to brokering feed → WMS even when `payment_details` is missing / null / fetch failed\n- Causes invalid / incomplete orders to be sent downstream\n\n### Expected Behavior\n- Orders missing payment details (or with failed payment fetch) must be **excluded** from the WMS brokering feed\n- Only orders with confirmed/complete payment data should be brokered\n\n### Acceptance Criteria\n- [ ] No order without fetched payment details appears in the WMS brokering feed\n- [ ] Existing filter/validation logic is updated (or new guard added) before feed generation\n- [ ] Add log entry when an order is skipped due to missing payment data (with order ID)\n\n### Severity\nMedium-High (affects downstream WMS processing & inventory accuracy)\n\n### Steps to Reproduce\n1. Create/test an order where payment fetch fails or returns no data\n2. Trigger brokering feed generation\n3. Observe order still appears in feed sent to WMS",
        "labels": [],
        "files": [],
        "title": "Orders with missing/unfetched payment details are incorrectly included in WMS brokering feed"
      }
    ],
    "releaseTag": "v8.5.0"
  }
]

Output JUST the summary text.
