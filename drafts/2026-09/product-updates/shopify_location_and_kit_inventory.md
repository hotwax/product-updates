---
title: HotWax expands Shopify inventory publishing to physical locations and kits
slug: product-updates/2026-09/shopify-location-and-kit-inventory
contentType: product-update
month: 2026-09
metaDescription: Shopify physical-location events, available-to-promise resets, and facility-level kit calculations keep availability tied to stock retailers can fulfill.
tagNames: [Product Update]
key: product-update:2026-09:shopify-location-and-kit-inventory
releaseStatus: draft
---

HotWax Commerce now gives retailers more ways to keep Shopify availability aligned with the stock they can sell. September adds inventory events for physical Shopify locations, resets based on available inventory at each facility, and dedicated inventory publishing for kits assembled from component products.

These additions cover two everyday questions: how a store's latest inventory change reaches Shopify, and how much inventory Shopify should show after a full recalculation.

## Keep physical locations up to date

Receiving inventory, completing a store sale, counting stock, and applying an inventory reset can now feed changes to the corresponding physical Shopify location. HotWax records the inventory event before publishing it, so pending adjustments retain their source and can be retried.

The physical location path also recognizes changes already handled by the originating Shopify shop or its native transfer workflow. This avoids sending those same inventory effects back as another adjustment.

When an outgoing product and location pair is not confirmed active in Shopify, event publishing can activate the inventory level before sending its adjustment. Confirmed pairs continue through the adjustment path without repeating activation.

## Publish the quantity available to sell

A physical location's stock on hand can include units already committed to orders. The new physical location reset publishes available-to-promise inventory, the quantity available for sale, instead of relying on raw stock on hand.

The calculation uses the facility's available inventory, respects product sales eligibility, and retains the existing pre-order and backorder holds. Retailers can run this reset across their mapped physical facilities for one Shopify shop, with an optional facility group scope.

Inventory channel resets also run through Data Manager. Teams can review batch outcomes, timings, and rejected products rather than reconstructing a publishing run from rotating logs. A failed batch remains separate from the remaining batches in the feed.

## Calculate kits where they can be assembled

Kits have no independent stock to publish. HotWax derives each kit's quantity from its component availability at a physical facility, using the limiting component and the quantity required for one kit.

For an inventory channel, HotWax calculates complete kits at each eligible facility before adding those quantities together. A component in one store and its matching component in another store do not become a sellable kit that neither store can fulfill.

Dedicated reset jobs publish these derived quantities to inventory channels or physical Shopify locations. Products without an effective component definition are skipped, while invalid definitions remain visible as failed records.

## Set the publishing schedule for each shop

Real-time inventory publishing remains a shop-level opt-in, and product and location mappings must be configured. The kit reset jobs ship paused with an empty shop scope. Your implementation team configures the shop, confirms the required kit calculation support, and enables the schedule appropriate for that catalog.

*Sources: [Shopify connector v4.2.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.2.0), [v4.2.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.2.2), [v4.3.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.0).*
