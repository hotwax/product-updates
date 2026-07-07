---
title: Respecting Shopify Fulfillment Holds
slug: product-updates/2026-06/respecting-shopify-fulfillment-holds
contentType: product-update
month: 2026-06
metaDescription: Shopify or third-party apps may place an order on hold for fraud, address, marketplace, or cooling-period reasons. If OMS ignores that signal, risky work can r…
tagNames: [Product Update]
key: product-update:2026-06:respecting-shopify-fulfillment-holds
sourceFaq: shopify-fulfillment-holds.md
---

### Honoring Shopify holds before fulfillment release

Shopify or third-party apps may place an order on hold for fraud, address, marketplace, or cooling-period reasons. If OMS ignores that signal, risky work can reach routing or a 3PL too early.

### What changed

Shopify fulfillment holds are now part of the HotWax order-processing story. Held work can pause OMS fulfillment processing until Shopify releases it, while other order work follows the appropriate routing path.

### How the workflow operates

The bridge imports hold context and keeps Shopify fulfillment-order behavior aligned with OMS order handling. When a hold applies, the order path can pause instead of being brokered as standard releasable work.

### Operational impact

Retailers can keep Shopify-native risk and marketplace controls in place while still using HotWax as the operational system for routing and fulfillment.

*Sources: [hotwax-shopify-oms-bridge#235](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/235), [hotwax-shopify-oms-bridge#238](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/238), [hotwax-shopify-oms-bridge#245](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/245), [hotwax-shopify-oms-bridge#269](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/269), [hotwax-shopify-oms-bridge#274](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/274), [hotwax-shopify-oms-bridge#276](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/276)*
