---
title: HotWax keeps Shopify fulfillment locations and OMS allocations aligned
slug: product-updates/2026-08/shopify-fulfillment-location-reconciliation
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce reconciles Shopify fulfillment-location changes with OMS allocations while protecting inventory accuracy and preventing sync loops.
tagNames: [Product Update]
key: product-update:2026-08:shopify-fulfillment-location-reconciliation
releaseStatus: released
---

Retailers use Shopify fulfillment locations to decide where an order should be fulfilled, but the final allocation can change after the order reaches the order management system. A store may reject an order, a routing rule may select a better facility, or an operator may move fulfillment to protect a service promise. If Shopify and the OMS do not follow that move together, the customer sees the wrong fulfillment location and inventory can be reduced from the wrong pool.

HotWax Commerce now reconciles these changes in both directions.

### Follow location changes from either system

When a Shopify fulfillment-order webhook reports a new location, HotWax can move the related allocation to the matching OMS facility. In the other direction, a scheduled process can find OMS reallocations and move the Shopify fulfillment order to the location selected by HotWax.

The flow reuses an existing ship group at the destination when one already represents the same fulfillment work. This avoids splitting the order into duplicate fulfillment records simply because its location changed.

Each synchronization task also has a clear lifecycle. If a location cannot be resolved or an order cannot be safely moved, HotWax can park the work for investigation. When the same problem is observed again, the system refreshes the open task instead of creating another copy of the same exception. A sweep service can find Shopify fulfillment records that were missed by the normal event path and replay them through reconciliation.

### Tell a new change from an old webhook

A fulfillment order can change location without changing the Shopify order itself. HotWax now records a compact hash of the current fulfillment-order state so its polling process can detect these location-only changes.

The hash also helps establish which system has the newer state. If HotWax has already moved a fulfillment order outbound, a delayed Shopify webhook cannot silently move it back to an older location. Even when the two systems are already aligned, the synchronizer records a baseline so the next comparison has a known starting point.

### Correct the inventory pool behind the move

Location changes matter to inventory as well as fulfillment. Some Shopify locations represent a physical facility, while others represent an aggregate inventory pool shared by a group of facilities.

HotWax corrects aggregate inventory when an allocation moves between a physical facility and an aggregate Shopify location. For a physical-to-physical move across separate aggregate pools, each side can be corrected independently. This keeps the immediate inventory picture closer to the actual allocation.

The correction does not replace the authoritative inventory publisher. The next absolute publication can still reset Shopify to the current OMS value, providing a self-healing backstop if an incremental correction could not be applied.

For operations teams, the outcome is straightforward: fulfillment can move to the right location without leaving the order, exception queue, and sellable inventory telling three different stories.

*Sources: [mantle-shopify-connector#412](https://github.com/hotwax/mantle-shopify-connector/pull/412), [mantle-shopify-connector#482](https://github.com/hotwax/mantle-shopify-connector/pull/482), [mantle-shopify-connector#492](https://github.com/hotwax/mantle-shopify-connector/pull/492), [mantle-shopify-connector#593](https://github.com/hotwax/mantle-shopify-connector/pull/593), [mantle-shopify-connector#596](https://github.com/hotwax/mantle-shopify-connector/pull/596), [mantle-shopify-connector#597](https://github.com/hotwax/mantle-shopify-connector/pull/597), [mantle-shopify-connector v4.1.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.1.0), [mantle-shopify-connector v4.1.7](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.1.7)*
