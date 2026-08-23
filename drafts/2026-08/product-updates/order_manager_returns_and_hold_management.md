---
title: HotWax brings returns and every non-dedicated hold into Order Manager
slug: product-updates/2026-08/order-manager-returns-and-hold-management
contentType: product-update
month: 2026-08
metaDescription: Order Manager adds return queues and details while making every hold outside dedicated Bad Address, Swap, and Fraud queues visible and actionable.
tagNames: [Product Update]
key: product-update:2026-08:order-manager-returns-and-hold-management
releaseStatus: expected
---

Order exceptions rarely fit into one status. A return has its own products, quantities, fulfillment records, and customer context. A hold may represent fraud, a bad address, a product swap, a Shopify synchronization error, or another workflow purpose that deserves an owner and a next action.

The next HotWax Commerce Order Manager release gives returns a dedicated workspace and makes the general hold queue a reliable home for every purpose that does not already have its own queue.

### Work returns as their own operational queue

The Returns page lists return work with filters and incremental loading for large result sets. Operators can open a return to review its items, quantities, customer details, fulfillment context, and the order it belongs to.

Keeping this information inside Order Manager reduces the need to reconstruct a return from generic order and shipment records. Return rows also carry clearer product and variant context, so the team can identify the merchandise involved without treating a raw product SKU as the primary label.

The page uses a local IndexedDB cache to keep repeat navigation responsive while refreshing operational state from the OMS. Request guards prevent an older response from replacing the result of a newer filter or page change.

### Define the general hold queue by what it is not

Bad Address, Swap, and Fraud already have dedicated queues. The general Holds page now acts as their complement: if an active hold does not belong to one of those dedicated purposes, it appears in Holds.

This includes less common but important purposes such as a Shopify synchronization error. A new workflow purpose no longer disappears simply because the front end does not have a dedicated tab for it.

Purpose filters and deep links let a team narrow the queue while keeping the selected scope in the URL.

Order and customer context travels with the task. Operators can see why the order is held, who the customer is, what fulfillment work exists, and which action belongs in the current workflow before releasing or escalating it.