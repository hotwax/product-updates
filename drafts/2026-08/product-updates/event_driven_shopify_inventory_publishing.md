---
title: HotWax adds a durable event ledger for Shopify inventory publishing
slug: product-updates/2026-08/event-driven-shopify-inventory-publishing
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce records inventory events in a durable ledger, batches Shopify updates safely, and exposes the publishing flow in Company.
tagNames: [Product Update]
key: product-update:2026-08:event-driven-shopify-inventory-publishing
releaseStatus: released
---

An inventory update looks simple at the end of the journey: send Shopify the quantity that can still be sold. The path to that number is less simple. Receipts, returns, transfers, reservations, point-of-sale orders, facility assignments, and channel rules can all change availability. A dependable publisher needs to know what happened, avoid counting the same event twice, and recover when an outbound batch fails.

HotWax Commerce now gives that path a durable inventory event ledger.

### Record the business event before publishing it

Each ledger row identifies the event type, source reference, inventory channel, and Shopify inventory item. The reason for the change remains attached as data, so a receipt, transfer receipt, return restock, or reservation can be distinguished without creating a separate publishing path for every event.

Replay-safe keys prevent the same source event from being counted twice. The controller reloads committed OMS state, calculates aggregate available-to-promise inventory before and after the event, and writes the resulting change for each affected inventory channel. If the calculation produces no change, the row can close as a no-op instead of creating an unnecessary Shopify message.

Effective-dated configuration changes can enter through the same controller when they become active. This is important when a product, facility, or channel relationship changes later than the record that scheduled it.

### Batch small changes without losing their meaning

A separate publisher converts pending ledger rows into idempotent Shopify system messages. By default, it groups changes by inventory channel, inventory item, and event type. This limits the effect of a failed batch while retaining the reason that Shopify expects for an inventory adjustment.

The outbound payload is frozen when the batch decision is made. A retry therefore sends the same decision instead of quietly recalculating a different result. The publisher continues draining a channel until its queue is empty, and old completed ledger entries can be removed after the retention period.

Absolute inventory resets remain part of the design. When HotWax needs to reassert the authoritative quantity, a reset can cancel obsolete pending deltas without rewriting batches that have already been committed. That gives the inventory stream a clear recovery path after a disruption or configuration change.

### Monitor the flow from Company

The Inventory Sync workspace in Company shows waiting events, batches, jobs, recent reset runs, and event history for each Shopify connection. Teams can see whether inventory is waiting to be batched, in flight, failed, or already settled instead of treating the publisher as a black box.

Company also exposes whether the supporting data feeds run in manual or real-time mode. Because this setting applies across the OMS, the interface presents it as an operational control rather than a preference for one individual user.

The result is a publishing flow that can answer three practical questions: what changed inventory, whether that change has been sent, and what the system will do next if publishing fails.

*Sources: [mantle-shopify-connector#477](https://github.com/hotwax/mantle-shopify-connector/pull/477), [mantle-shopify-connector#558](https://github.com/hotwax/mantle-shopify-connector/pull/558), [mantle-shopify-connector#559](https://github.com/hotwax/mantle-shopify-connector/pull/559), [mantle-shopify-connector#560](https://github.com/hotwax/mantle-shopify-connector/pull/560), [mantle-shopify-connector#561](https://github.com/hotwax/mantle-shopify-connector/pull/561), [company#352](https://github.com/hotwax/company/pull/352), [mantle-shopify-connector v4.1.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.1.2), [company v2.2.1](https://github.com/hotwax/company/releases/tag/v2.2.1)*
