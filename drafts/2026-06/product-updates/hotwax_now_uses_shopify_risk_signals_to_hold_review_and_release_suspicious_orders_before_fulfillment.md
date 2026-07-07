---
title: HotWax now uses Shopify risk signals to hold, review, and release suspicious orders before fulfillment
slug: product-updates/2026-06/hotwax-now-uses-shopify-risk-signals-to-hold-review-and-release-suspicious-orders-before-fulfillment
contentType: product-update
month: 2026-06
metaDescription: Shopify risk assessments are useful only if they affect the fulfillment decision before warehouse or 3PL release. Notes alone do not stop a suspicious order fr…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-now-uses-shopify-risk-signals-to-hold-review-and-release-suspicious-orders-before-fulfillment
sourceFaq: shopify-risk-assessment-integration.md
---

### Shopify risk as an OMS fulfillment control

Shopify risk assessments are useful only if they affect the fulfillment decision before warehouse or 3PL release. Notes alone do not stop a suspicious order from moving.

### What changed

The Shopify bridge now captures risk recommendation, provider assessments, levels, and facts, then forwards them to OMS. OMS stores the risk rollup and evaluates it during approval.

### How the workflow operates

Accepted or no-risk orders can continue. Pending risk can defer approval. Investigate or cancel recommendations can create review work or auto-cancel depending on product-store configuration.

### Operational impact

Operations teams can review suspicious orders in Order Manager while healthy orders keep moving through normal fulfillment.

*Sources: [hotwax-shopify-oms-bridge#232](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/232), [mantle-shopify-connector#365](https://github.com/hotwax/mantle-shopify-connector/pull/365), [oms#601](https://github.com/hotwax/oms/pull/601), [oms#615](https://github.com/hotwax/oms/pull/615), [oms#699](https://github.com/hotwax/oms/pull/699), [oms#702](https://github.com/hotwax/oms/pull/702), [hotwax-oms#600](https://github.com/hotwax/hotwax-oms/pull/600)*
