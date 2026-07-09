---
title: HotWax speeds up Shopify order sync with separate create and update queues
slug: product-updates/2026-05/hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
contentType: product-update
month: 2026-05
metaDescription: The unified Shopify order sync was designed to make setup simple. Before the recent migration to Shopify GraphQL, retailers had separate jobs for new orders, c…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
---

# HotWax speeds up Shopify order sync with separate create and update queues

The unified Shopify order sync was designed to make setup simple. Before the recent migration to Shopify GraphQL, retailers had separate jobs for new orders, cancellations, returns, blind refunds, and updates. The newer sync path intentionally brought creation and all updates into one job pointed at recently updated Shopify orders, giving retailers broad coverage without asking them to manage a long list of scheduled jobs.

That one-job model is still the easiest operating mode for many stores, but it creates a throughput tradeoff for high-volume retailers. A brand-new order needs to reach OMS quickly so routing and fulfillment can start. An update to an existing order still matters, but it should not make new demand wait behind a large backlog of refund, fulfillment, payment, risk, or cancellation updates.

HotWax now supports splitting Shopify order creation from order update processing. The create queue is responsible for importing new orders into OMS. The update queue can run with creation disabled, so if it sees a Shopify order that does not exist in OMS yet, it skips that order and leaves creation to the create queue. Existing callers keep the default create-and-update behavior, while high-volume stores can accept a two-job setup when faster first-time order import matters more than keeping all Shopify order sync work in one job.

The sync path also checks whether an order has actually changed before writing it to MDM. HotWax compares the order data that affects OMS, including customer details, payment terms, outstanding amount, fulfillment, refunds, and risk. If Shopify sends a payload that does not materially change the OMS record, the bridge can avoid unnecessary MDM work.

For retailers, the practical outcome is faster first-time order import during heavy update periods and less integration work for unchanged orders. New orders can keep moving toward routing and fulfillment, while refund, fulfillment, risk, payment, and cancellation updates continue to flow for orders that already exist in OMS.
