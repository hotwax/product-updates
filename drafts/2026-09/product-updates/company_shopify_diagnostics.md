---
title: HotWax brings Shopify inventory and transfer diagnostics into Company
slug: product-updates/2026-09/company-shopify-diagnostics
contentType: product-update
month: 2026-09
metaDescription: Company connects Shopify inventory events, delivery timing, batch details, transfer sync health, and mapping conflicts in one operating workspace.
tagNames: [Product Update]
key: product-update:2026-09:company-shopify-diagnostics
releaseStatus: draft
---

When Shopify inventory or a transfer stops updating, the next step depends on where the work stopped. HotWax Commerce's Company app gives operations teams more context around the inventory events, delivery batches, and transfer sync jobs behind a Shopify connection. You can move from a summary to the affected records and review the evidence before taking action.

## See inventory changes and delivery timing together

Channel inventory and physical-location inventory use the same history layout. Each event shows the product, SKU or variant, Shopify location, quantity change, source reference, delivery state, and timing. Search and filters let you narrow the history by product, event type, location, delivery state, or date. The filtered view stays in the URL for later review or sharing.

Summary cards measure the events in that view. They show how many changes are waiting for a batch, delivery errors, the median time delivered changes took to reach Shopify, and the oldest change still awaiting delivery. The delivery-time summary includes its sample count and slowest delivery, so you can see what the number represents.

The history loads the newest 500 events first. An earlier date can load older events still retained by the connector. On connections that cannot report event changes, the page identifies the last read time and provides a manual refresh.

Open an event or batch to inspect its source context, combined quantity changes, delivery errors, and saved message. `Resend` retries that saved batch, retaining its original payload and request identity.

## Follow a transfer through its sync stages

The transfer sync workspace brings the connection's jobs, webhook health, outstanding transfers, and shipment and receipt stages together. A transfer detail page shows its source and destination, dates, and links to the corresponding records in Shopify and the Transfers app.

The `Issues` and `Working` sections separate reported blockers from checks that have succeeded. Job details and the latest completed staging result remain available alongside the affected item, helping you decide whether to correct a mapping, review delivery, or investigate a missing transfer line.

## Resolve product mapping conflicts with the product in view

When one OMS product maps to several Shopify variants, the resolution screen shows each variant's name, SKU, barcode, image, and status. You can select the intended variant, confirm the change, and recheck the remaining mapping.

The confirmation explains that retaining one mapping affects syncs for that product in the selected shop. The action removes the other OMS mappings while keeping the Shopify products. Missing Shopify transfer lines have a separate comparison view with affected shipment items and dependent receipts, plus details to share for repair and a recheck action.

*Sources: [Company inventory event history](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/ShopifyInventoryEventHistory.vue), [Company inventory batch details](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/components/shopify/InventoryEventBatchModal.vue), [Company transfer sync details](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/ShopifyTransferSyncDetail.vue), [Company transfer mapping resolution](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/components/shopify/ShopifyTransferMappingConflict.vue)*
