---
title: Shopify Native BOPIS Fulfillment Order Integration
slug: product-updates/2026-06/shopify-native-bopis-fulfillment-order-integration
contentType: product-update
month: 2026-06
metaDescription: Shopify native pickup is represented through Fulfillment Orders. Treating pickup as tags, line-item properties, or shipping work makes mixed carts and customer…
tagNames: [Product Update]
key: product-update:2026-06:shopify-native-bopis-fulfillment-order-integration
sourceFaq: shopify-native-bopis-fulfillment-orders.md
---

### Native pickup work from Shopify Fulfillment Orders

Shopify native pickup is represented through Fulfillment Orders. Treating pickup as tags, line-item properties, or shipping work makes mixed carts and customer communication harder to keep aligned.

### What changed

The June app direction treats Shopify Fulfillment Orders as the cleaner foundation for native pickup demand. Pickup, shipping, and local delivery can stay separated while Poorti remains the store execution surface.

### How the workflow operates

HotWax can map pickup fulfillment work into the correct OMS and Poorti workflow, then update Shopify only when the matching lifecycle action succeeds. Communication ownership can remain clear so customers do not receive duplicate or premature messages.

### Operational impact

Retailers using Shopify native pickup get a cleaner operating model from checkout promise through store handover.

*Sources: [hotwax-poorti#259](https://github.com/hotwax/hotwax-poorti/pull/259), [hotwax-poorti#260](https://github.com/hotwax/hotwax-poorti/pull/260), [hotwax-poorti#265](https://github.com/hotwax/hotwax-poorti/pull/265), [hotwax-unigate#78](https://github.com/hotwax/hotwax-unigate/pull/78), [hotwax-unigate#83](https://github.com/hotwax/hotwax-unigate/pull/83), [hotwax-oms#525](https://github.com/hotwax/hotwax-oms/pull/525), [oms#561](https://github.com/hotwax/oms/pull/561), [oms#620](https://github.com/hotwax/oms/pull/620)*
