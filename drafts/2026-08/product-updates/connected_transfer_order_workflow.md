---
title: HotWax Commerce connects transfer-order creation, reservation, fulfillment, and receipt
slug: product-updates/2026-08/connected-transfer-order-workflow
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce connects transfer creation, warehouse inventory commitments, and NetSuite lifecycle imports to keep transfer stock out of online availability.
tagNames: [Product Update]
key: product-update:2026-08:connected-transfer-order-workflow
releaseStatus: published
---

Stock committed to a warehouse transfer should no longer be offered for online sale, even if the warehouse has not shipped it yet. Retailers also need transfer records to stay current when warehouse teams fulfill or receive the stock in NetSuite rather than HotWax.

The August HotWax Commerce releases connect transfer creation, source inventory reservation, and NetSuite transfer updates across those steps.

## Create a transfer where receiving teams already work

Receiving now includes a page for creating a transfer order. Operators can choose the source and destination facilities, select products and quantities, and plan the move from the same app they use to receive stock.

The entry point works with the Transfers app, which continues to show the order as it progresses. Creating a transfer order does not itself move stock between locations.

![Receiving transfer-order creation form with source assignment, destination, shipping method, lifecycle, and planned dates](assets/product-updates/screenshots/2026-10-03/receiving-create-transfer-order.jpg)

*An unsaved transfer-order form in the current development UI with demo data. Creating the order is separate from approving or moving stock.*

## Keep warehouse commitments out of Shopify availability

When a warehouse transfer order is approved, the order management system (OMS) reserves the requested inventory at the source warehouse. The reservation reduces what is available to promise before fulfillment begins.

With inventory event feeds and Shopify publishing enabled, this supports close-to-real-time reductions in the warehouse inventory offered for sale on Shopify as stock is committed to a transfer. Retailers do not have to wait for the transfer to ship before accounting for that commitment online.

Warehouse teams can then create the transfer shipment in Fulfillment with the appropriate transfer-order permission.

## Bring NetSuite transfer events into the same workflow

NetSuite transfer integration now runs through HotWax's master data management layer. It supports transfer lifecycle events that happen outside the OMS, including fulfillment, cancellation, and receipt in NetSuite.

This lets warehouse teams continue working in NetSuite while HotWax records the corresponding transfer activity and inventory changes. The transfer can follow the same operating path without requiring every step to begin in a HotWax app.

*Sources: [receiving#721](https://github.com/hotwax/receiving/pull/721), [receiving#722](https://github.com/hotwax/receiving/pull/722), [OMS warehouse transfer approval](https://github.com/hotwax/oms/blob/v3.1.0/service/co/hotwax/orderledger/order/TransferOrderServices.xml), [fulfillment#1682](https://github.com/hotwax/fulfillment/pull/1682), [NetSuite transfer lifecycle services](https://github.com/hotwax/mantle-netsuite-connector/blob/v3.1.0/service/co/hotwax/netsuite/TransferOrderServices.xml), [NetSuite transfer Data Manager feeds](https://github.com/hotwax/mantle-netsuite-connector/blob/v3.1.0/data/DA_ExtSeed_NetsuiteMDMData.xml), [Shopify available inventory publishing](https://github.com/hotwax/mantle-shopify-connector/blob/v4.1.8/script/co/hotwax/sob/product/createShopifyInventoryAdjustmentSystemMessage.groovy)*
