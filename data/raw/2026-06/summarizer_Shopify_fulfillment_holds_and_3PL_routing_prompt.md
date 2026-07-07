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

Cluster Description: Items cited in the current 2026-06 release note section "Shopify fulfillment holds and 3PL routing".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#235",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "235",
    "title": "LOOP Exchange orders to be processed as POS cash sale orders in OMS",
    "labels": [],
    "body": "## Summary\r\nFixed an issue where completed LOOP Exchange orders were not being included in the NetSuite Sales Order export file.\r\n\r\n## Root Cause\r\nLOOP Exchange orders are created without a shipping address and should be treated as cash sale POS orders. However, OMS was not classifying `LOOP_EXCH` orders as cash sale orders, causing them to follow the standard brokering flow.\r\n\r\nAs a result:\r\n\r\n* `orderFacilityId` was not assigned on the ship group.\r\n* Inventory was not deducted from the fulfillment location as expected.\r\n* Orders were excluded from the NetSuite export because `order_item_ship_group.order_facility_id` remained null.\r\n\r\n## Changes\r\n\r\nUpdated the cash sale order determination logic in `prepareTransformedShopifyOrderPayload.groovy` to treat `LOOP_EXCH` orders the same as `POS_SALES_CHANNEL` orders when no shipping address is present.\r\n\r\n### Before\r\n\r\n```groovy\r\nboolean isCashSaleOrder = isShippingAddressEmpty && \"POS_SALES_CHANNEL\".equals(channelId)\r\n```\r\n\r\n### After\r\n\r\n```groovy\r\nboolean isCashSaleOrder = isShippingAddressEmpty &&\r\n    (\"POS_SALES_CHANNEL\".equals(channelId) || \"LOOP_EXCH\".equals(channelId))\r\n```\r\n\r\n## Expected Outcome\r\n\r\n* LOOP Exchange orders are created as completed POS cash sale orders.\r\n* Fulfillment location is assigned correctly.\r\n* `orderFacilityId` is populated on the ship group.\r\n* Inventory is deducted from the fulfillment location.\r\n* Eligible LOOP Exchange orders are included in the NetSuite Sales Order export file.\r\n\r\n\r\n## Log Work\r\n- Hours spent: 2\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/582\r\n",
    "files": [
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#238",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "238",
    "title": "Handle fulfillmentService object response correctly",
    "labels": [],
    "body": "## Summary\r\n- Updated Shopify order transformation logic to correctly handle cases where fulfillmentService is received as an object instead of a string.\r\n\r\n## Log Work\r\n- Hours spent:1\r\n\r\n## Issue Link\r\n- Closes #237 \r\n",
    "files": [
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "237",
        "body": "The order import flow expects fulfillmentService to be a string when resolving SHOP_FULL_SRVC_ALLOC mappings. However, Shopify payloads return it as an object containing service details.",
        "labels": [],
        "files": [],
        "title": "Fix fulfillment service mapping by using serviceName."
      }
    ],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#245",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "245",
    "title": "Backport default carrier setting removal",
    "labels": [],
    "body": "Refs #244\n\n## Business summary\nRemoves the Shopify bridge dependency on the retired `DEFAULT_CARRIER` ProductStoreSetting so order transformation no longer requires unsupported product-store configuration.\n\n## What changed\n- Removed the `DEFAULT_CARRIER` ProductStoreSetting lookup from Shopify order payload transformation.\n- Uses `_NA_` as the direct fallback carrier when no mapped carrier is found.\n- Updated configuration dependency documentation.\n\n## Migration and release notes\n- No bridge setting migration is required.\n- Ensure desired carrier mappings exist in `ShopifyShopCarrierShipment`; otherwise unmapped orders use `_NA_`.\n- The companion OMS PR deletes existing `DEFAULT_CARRIER` setting data.\n\n## Validation\n- `git diff --check HEAD~1 HEAD`\n- Targeted scan confirmed `DEFAULT_CARRIER` is absent from active bridge source/docs.",
    "files": [
      "README.md",
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#269",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "269",
    "title": "Remove nested transaction boundaries from Shopify order processing",
    "labels": [],
    "body": "## Summary\r\nThis PR removes unnecessary nested transaction boundaries from the Shopify order synchronization flow to prevent connection pool exhaustion, transaction deadlocks, and cascading `XAER_RMFAIL` errors during order imports.\r\n\r\n## Problem\r\n\r\nThe Shopify order import process executes under a parent transaction while several downstream services are invoked using `requireNewTransaction(true)` and `transaction=\"force-new\"`.\r\n\r\nThis results in:\r\n\r\n* Multiple XA connections being held simultaneously by a single thread.\r\n* Transaction suspension and connection retention during nested service execution.\r\n* Connection pool exhaustion under load.\r\n* `XAER_RMFAIL` and rollback-only transaction errors.\r\n* Subsequent order imports failing even when the underlying data is valid.\r\n\r\n## Changes\r\n\r\n* Removed nested `requireNewTransaction(true)` calls from the Shopify order sync flow.\r\n* Updated service invocations to reuse the active transaction wherever possible.\r\n* Ensured all order creation sub-processes participate in a single transaction boundary.\r\n* Improved transaction consistency across order, fulfillment, refund, return, and payment processing flows.\r\n\r\n## Expected Behavior\r\n\r\n* Each Shopify order is processed within a single transaction scope.\r\n* If any step fails, the entire order import is rolled back cleanly.\r\n* No additional connections are acquired through unnecessary transaction suspension.\r\n* Reduced risk of connection pool exhaustion and deadlocks.\r\n\r\n## Testing\r\n\r\n* Imported Shopify orders with reduced XA connection pool sizes to reproduce previous failures.\r\n* Validated successful order creation after removing nested transaction boundaries.\r\n* Tested multi-order import scenarios to verify stable transaction behavior.\r\n* Confirmed rollback behavior when exceptions occur during order processing.\r\n\r\n## Impact\r\n\r\n* Improves transaction reliability and system stability during Shopify order imports.\r\n* Reduces database connection usage per order.\r\n* Prevents partial order creation and inconsistent data states.\r\n* Eliminates a major source of connection pool deadlocks in the order synchronization flow.\r\n\r\n\r\n## Log Work\r\n- Hours spent: 10\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/601\r\n#https://github.com/hotwax/oms/issues/669\r\n",
    "files": [
      "script/co/hotwax/sob/order/createHistoricalShopifyOrder.groovy",
      "script/co/hotwax/sob/order/syncShopifyOrder.groovy",
      "service/co/hotwax/sob/order/ShopifyOrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#274",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "274",
    "title": "Removed use of SHOP_READ_WRITE_ACCESS for checking access scopeof Sho…",
    "labels": [],
    "body": "…pify. We use SHOP_RW_ACCESS for same purpose.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "files": [
      "screen/ShopifyOmsBridge/ShopifyOrderIntegrationSetup.xml",
      "service/co/hotwax/sob/fulfillment/FulfillmentFeedServices.xml",
      "service/co/hotwax/sob/product/InventoryServices.xml",
      "service/co/hotwax/sob/setup/ShopifyOrderIntegrationSetupServices.xml",
      "service/co/hotwax/sob/transfer/ShopifyTransferOrderServices.xml",
      "upgrade/UpcomingRelease/UpgradeSQL.sql"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#276",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "276",
    "title": "Removed use of SHOP_READ_WRITE_ACCESS for checking access scopeof Sho…",
    "labels": [],
    "body": "…pify. We use SHOP_RW_ACCESS for same purpose.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "files": [
      "service/co/hotwax/sob/product/InventoryServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  }
]

Output JUST the summary text.
