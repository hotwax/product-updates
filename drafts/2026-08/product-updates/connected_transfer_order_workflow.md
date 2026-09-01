---
title: HotWax connects transfer-order creation, reservation, fulfillment, and receipt
slug: product-updates/2026-08/connected-transfer-order-workflow
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce connects transfer-order creation in Receiving with OMS reservation, fulfillment permissions, and NetSuite receipt imports.
tagNames: [Product Update]
key: product-update:2026-08:connected-transfer-order-workflow
releaseStatus: released
---

An inventory transfer crosses several operational boundaries. Someone decides what should move, the source warehouse reserves and ships it, the destination receives it, and connected financial systems need the same transfer to reach the correct state. When each step uses a different entry point, even a simple replenishment move can become a collection of manual handoffs.

The August HotWax Commerce releases connect those steps into a clearer transfer-order workflow.

### Create a transfer where receiving teams already work

Receiving now includes a page for creating a transfer order. An operator can choose the source and destination facilities, select products and quantities, and create the inventory movement without leaving the store and warehouse application set.

The entry point works with the Transfers app rather than replacing it. Navigation fixes return an operator to the correct transfer detail after creation, while the existing transfer workspace continues to show the order as it progresses.

### Reserve the source inventory on approval

Creating the document is only the first step. When a warehouse transfer order is approved, the OMS moves its items into the valid state and reserves the requested inventory from the source warehouse.

This makes the inventory commitment part of the transfer lifecycle. The source does not have to wait for a separate allocation action before fulfillment can begin, and other availability calculations can see that the quantity has already been promised to the transfer.

Fulfillment also corrects the permission needed to create a shipment for a transfer order. The change removes a role-level break between the order being valid in the OMS and the warehouse being able to act on it.

### Receive NetSuite transfer activity through the same service

The NetSuite connector can import transfer-order receipt files through Data Manager. It resolves the related transfer and product identifiers, then delegates the receipt to the same HotWax Commerce transfer-receiving service used by the application flow.

Using one receiving service matters because it keeps inventory and item status behavior consistent. The connector is not maintaining a second interpretation of what it means to receive a transfer simply because the event arrived through an integration.

Scheduled polling can pick up files from the configured secure file transfer location. Processing is serialized where needed, and terminal transfer items or receipt-only requests are guarded so a replay does not push a completed item back into an active state.

The connector change shipped with its service path and scheduling support, but the source pull request did not record a completed sample-payload integration test. Retailers should still validate their NetSuite file contract and facility identifiers during rollout.

The complete operating path is now easier to follow: create the transfer, reserve its source inventory, fulfill it with the right permissions, and receive it through one shared inventory service whether the receipt begins in HotWax or NetSuite.

*Sources: [receiving#721](https://github.com/hotwax/receiving/pull/721), [receiving#722](https://github.com/hotwax/receiving/pull/722), [oms#896](https://github.com/hotwax/oms/pull/896), [fulfillment#1682](https://github.com/hotwax/fulfillment/pull/1682), [mantle-netsuite-connector#343](https://github.com/hotwax/mantle-netsuite-connector/pull/343), [hotwax-poorti#293](https://github.com/hotwax/hotwax-poorti/pull/293), [hotwax-poorti#303](https://github.com/hotwax/hotwax-poorti/pull/303), [receiving v4.2.0](https://github.com/hotwax/receiving/releases/tag/v4.2.0), [oms v3.1.0](https://github.com/hotwax/oms/releases/tag/v3.1.0), [fulfillment v4.2.1](https://github.com/hotwax/fulfillment/releases/tag/v4.2.1), [hotwax-poorti v3.1.0](https://github.com/hotwax/hotwax-poorti/releases/tag/v3.1.0), [mantle-netsuite-connector v3.1.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.1.0)*
