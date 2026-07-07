---
title: HotWax speeds up Shopify order sync with separate create and update queues
slug: product-updates/2026-05/hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
contentType: product-update
month: 2026-05
metaDescription: Shopify order creation and order updates now have separate sync paths. New orders no longer need to wait behind a backlog of update jobs, while update-only pro…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues
---

# HotWax speeds up Shopify order sync with separate create and update queues

Shopify order creation and order updates now have separate sync paths. New orders no longer need to wait behind a backlog of update jobs, while update-only processing remains available for orders that already exist in OMS.

The change is intentionally narrow. The same Shopify order sync service still handles order data, but update queues can be configured with a create-disabled mode. If an update-only queue sees an order that does not exist in OMS yet, it skips creation and leaves the create queue responsible for importing the new order.

## What changed

- `sync#ShopifyOrder` now supports a `createOrders` flag.
- Shopify connector MDM order configurations are split by create versus update work.
- Update-only queues skip brand-new orders instead of creating duplicate OMS orders.
- Historical bootstrap and existing order update behavior remain available.
- The bridge checks whether order data changed before writing to MDM, including fields such as customer, payment terms, outstanding amount, fulfillment, refunds, and risk.
- Targeted fixes keep shop context, product store ID, shipping contact data, cancellation status, and pre-selected facilities intact through the sync flow.

## Customer impact

Retailers get faster first-time order import during heavy update periods, and operations teams avoid unnecessary MDM work when Shopify sends order payloads that do not materially change OMS data. The result is a sync model that protects real-time order creation without giving up refund, fulfillment, risk, and payment updates on existing orders.

*Sources: [hotwax-shopify-oms-bridge#186](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/186), [hotwax-shopify-oms-bridge#199](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/199), [hotwax-shopify-oms-bridge#153](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/153), [hotwax-shopify-oms-bridge#149](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/149), [hotwax-shopify-oms-bridge#181](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/181), [hotwax-shopify-oms-bridge#130](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/130), [hotwax-shopify-oms-bridge#155](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/155), [mantle-shopify-connector#326](https://github.com/hotwax/mantle-shopify-connector/pull/326), [mantle-shopify-connector#328](https://github.com/hotwax/mantle-shopify-connector/pull/328), [mantle-shopify-connector#329](https://github.com/hotwax/mantle-shopify-connector/pull/329), [oms#479](https://github.com/hotwax/oms/pull/479)*
