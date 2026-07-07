---
title: Managing Third-Party Fulfillment Services
slug: product-updates/2026-06/managing-third-party-fulfillment-services
contentType: product-update
month: 2026-06
metaDescription: Retailers often use Shopify-native fulfillment services and OMS-routed 3PLs at the same time. If OMS re-routes work Shopify already assigned, the systems can c…
tagNames: [Product Update]
key: product-update:2026-06:managing-third-party-fulfillment-services
sourceFaq: third-party-fulfillment.md
---

### Separating Shopify-assigned and OMS-assigned fulfillment

Retailers often use Shopify-native fulfillment services and OMS-routed 3PLs at the same time. If OMS re-routes work Shopify already assigned, the systems can conflict.

### What changed

HotWax now has a clearer split between Shopify-assigned fulfillment-service work and OMS-assigned 3PL work. Shopify-assigned work can be respected, while OMS-assigned work can still be routed by HotWax.

### How the workflow operates

When Shopify has already assigned a fulfillment service, HotWax can preserve that path. When HotWax owns the routing decision, it can move the Shopify Fulfillment Order to the mapped location and publish fulfillment details after shipment.

### Operational impact

Mixed fulfillment models become safer to operate because Shopify routing, HotWax brokering, 3PL assignment, and fulfillment holds each have a defined responsibility.

*Sources: [hotwax-shopify-oms-bridge#235](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/235), [hotwax-shopify-oms-bridge#238](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/238), [hotwax-shopify-oms-bridge#245](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/245), [hotwax-shopify-oms-bridge#269](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/269), [hotwax-shopify-oms-bridge#274](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/274), [hotwax-shopify-oms-bridge#276](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/276)*
