---
title: HotWax turns stuck orders into assigned, actionable work instead of one-status-at-a-time holds
slug: product-updates/2026-06/hotwax-turns-stuck-orders-into-assigned-actionable-work-instead-of-one-status-at-a-time-holds
contentType: product-update
month: 2026-06
metaDescription: A single order status cannot explain every reason an order is stuck. Fraud review, bad address review, substitution work, and shipment exceptions may all need…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-turns-stuck-orders-into-assigned-actionable-work-instead-of-one-status-at-a-time-holds
sourceFaq: order-tasks.md
---

### Exception work with ownership and history

A single order status cannot explain every reason an order is stuck. Fraud review, bad address review, substitution work, and shipment exceptions may all need different owners and different resolution paths.

### What changed

Order Tasks link stuck orders to WorkEffort-backed task records. Tasks can carry purpose, status, comments, customer context, assignee, source reference, ship group, and resolution history.

### How the workflow operates

Order Manager can show task queues, task detail, order-level task visibility, and direct navigation from the task back to the full order. The order can remain visible and reserve inventory while unresolved work prevents unsafe downstream release.

### Operational impact

Customer service and operations teams get accountable work instead of vague holds, and the OMS keeps a clearer record of why an order waited and how it was resolved.

*Sources: [oms#587](https://github.com/hotwax/oms/pull/587), [oms#589](https://github.com/hotwax/oms/pull/589), [oms#593](https://github.com/hotwax/oms/pull/593), [oms#613](https://github.com/hotwax/oms/pull/613), [oms#615](https://github.com/hotwax/oms/pull/615), [oms#688](https://github.com/hotwax/oms/pull/688), [oms#697](https://github.com/hotwax/oms/pull/697)*
