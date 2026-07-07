---
title: HotWax speeds up Shopify order sync with separate create and update queues
slug: product-updates/2026-05/hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
contentType: product-update
month: 2026-05
metaDescription: Shopify sends both new orders and updates to existing orders through the same integration surface, but those two jobs have different operational urgency. A new…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
---

# HotWax speeds up Shopify order sync with separate create and update queues

Shopify sends both new orders and updates to existing orders through the same integration surface, but those two jobs have different operational urgency. A new order needs to reach OMS quickly so routing and fulfillment can start. An update to an existing order may still matter, but it should not hold back brand-new demand when update volume spikes.

HotWax now separates Shopify order creation from order update processing. The create queue is responsible for importing new orders into OMS. The update queue can run with creation disabled, so if it sees a Shopify order that does not exist in OMS yet, it skips that order and leaves creation to the create queue. Existing callers keep the default create-and-update behavior, which keeps the change bounded while allowing high-volume stores to split the work.

The sync path also checks whether an order has actually changed before writing it to MDM. HotWax compares the order data that affects OMS, including customer details, payment terms, outstanding amount, fulfillment, refunds, and risk. If Shopify sends a payload that does not materially change the OMS record, the bridge can avoid unnecessary MDM work.

Several related fixes make the separated flow safer in day-to-day order handling. Shop context and product store ID are carried through the sync flow, duplicate shipping contact records are skipped during updates, cancelled unfulfilled Shopify orders are no longer marked completed, and mixed POS or Shipsi carts keep their pre-selected fulfillment facilities instead of being overwritten by defaults.

For retailers, the practical outcome is faster first-time order import during heavy update periods and less integration work for unchanged orders. New orders can keep moving toward routing and fulfillment, while refund, fulfillment, risk, payment, and cancellation updates continue to flow for orders that already exist in OMS.

*Sources: [hotwax-shopify-oms-bridge#186](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/186), [hotwax-shopify-oms-bridge#199](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/199), [hotwax-shopify-oms-bridge#153](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/153), [hotwax-shopify-oms-bridge#149](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/149), [hotwax-shopify-oms-bridge#181](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/181), [hotwax-shopify-oms-bridge#130](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/130), [hotwax-shopify-oms-bridge#155](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/155), [mantle-shopify-connector#326](https://github.com/hotwax/mantle-shopify-connector/pull/326), [mantle-shopify-connector#328](https://github.com/hotwax/mantle-shopify-connector/pull/328), [mantle-shopify-connector#329](https://github.com/hotwax/mantle-shopify-connector/pull/329), [oms#479](https://github.com/hotwax/oms/pull/479)*
