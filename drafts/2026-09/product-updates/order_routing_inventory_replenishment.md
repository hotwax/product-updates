---
title: HotWax brings inventory history and replenishment planning into Order Routing
slug: product-updates/2026-09/order-routing-inventory-replenishment
contentType: product-update
month: 2026-09
metaDescription: Order Routing connects multi-facility inventory searches, movement history, demand, incoming stock, and editable replenishment settings.
tagNames: [Product Update]
key: product-update:2026-09:order-routing-inventory-replenishment
releaseStatus: draft
---

Finding a stock problem is only the first step. Retail teams also need to understand the movements behind the balance, what is already on the way, and whether the location's stock settings match demand. HotWax Commerce's Order Routing app brings these questions into Inventory Find and Inventory Detail.

## Find the inventory that needs attention

Inventory Find starts with the product's facility inventory records and adds product names, images, and your chosen identifiers. You can select several facilities, narrow the product scope, and filter by positive or negative available to promise (ATP), quantity on hand, safety stock, pickup eligibility, or brokering eligibility.

Filters and sorting stay in the URL, so you can bookmark a view or send a colleague the same inventory scope. Product searches page through matching styles, and variant selection loads the available pages before offering `Select all`. A failed search or inventory request displays an error and a retry path instead of reading as an empty result.

For a single facility, you can also add configuration to selected products that do not yet have it. Configuration checks use the underlying facility records rather than just the current filtered page.

## Read the balance behind each movement

Inventory history shows the resulting stock balance beside the movement's change when the backend supplies the prior balance. This makes a receipt or sale easier to interpret: you can see both the quantity that moved and the balance it left behind. If that balance is unavailable, the row keeps the known change without inventing a total.

Return movements can show the original order and the customer's return reason, alongside the separate inventory reason. This context is available on instances with the Shopify returns integration. Expanding an inventory adjustment also opens its variance details, helping you follow the reason for a stock change.

## Review demand and incoming stock before changing settings

The Replenishment card adds a 30-day ATP history, sales velocity, and incoming units to Inventory Detail. Sales velocity uses recorded sales-related stock movements and separates in-store sales, in-store ship-to-home orders, and online orders.

Incoming units include outstanding purchase and transfer orders, expected return receipts, and requested inventory transfers. The transfer details show source locations and link to the Transfers app, so you can inspect the work already planned before requesting more stock.

From the same card, you can edit the location's reorder point, maximum stock, and reorder quantity. `Save changes` writes the values you changed, with validation for the stock settings. The chart places the configured stock levels beside the recorded ATP trend, giving the settings context as you review them.

*Sources: [Order Routing inventory scope and filters](https://github.com/hotwax/order-routing/blob/v2.4.1/src/utils/inventoryScope.ts), [Order Routing replenishment card](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/ReplenishmentCard.vue), [Order Routing replenishment metrics](https://github.com/hotwax/order-routing/blob/v2.4.1/src/composables/useReplenishmentMetrics.ts), [Order Routing movement calculations](https://github.com/hotwax/order-routing/blob/v2.4.1/src/utils/replenishmentMetrics.ts), [Order Routing inventory history](https://github.com/hotwax/order-routing/blob/v2.4.1/src/views/InventoryDetail.vue)*
