---
title: HotWax connects transfer orders to Shopify's native transfer workflow
slug: product-updates/2026-09/shopify-native-transfer-sync
contentType: product-update
month: 2026-09
metaDescription: HotWax Commerce connects approved transfer orders with Shopify native transfers, linked shipments and receipts, and updates to transfer line items.
tagNames: [Product Update]
key: product-update:2026-09:shopify-native-transfer-sync
releaseStatus: draft
---

HotWax Commerce now connects approved transfer orders with Shopify's native inventory transfers and shipments. Retailers can carry the same stock movement from the approved order through shipment and receiving, including activity completed in Shopify, while retaining the connection to the corresponding HotWax records.

This workflow starts with an approved transfer order and follows its shipments and receipts in Shopify.

## Create a Shopify transfer for the approved order

When both transfer endpoints map to locations in one Shopify shop, HotWax can create a corresponding native Shopify transfer and leave it ready to ship. The complete order is staged through Data Manager, giving teams a record of the items submitted and any errors that need attention.

An order with incomplete or ambiguous mappings remains visible for correction before it is sent. HotWax does not create a partial transfer from only the items that happen to have valid mappings.

Each Shopify shop has its own staging scope. Retailers operating multiple shops can process their transfers independently while keeping activity for the same transfer in order.

## Keep shipments and receipts connected

HotWax sends transfer shipment, receiving, and cancelled-quantity activity to the existing Shopify transfer. For linked transfers, incoming Shopify shipment and receiving events can also create or update the corresponding HotWax records.

The integration retains the relationship between each event and its order, item, shipment, or receipt. Replayed callbacks reuse that relationship rather than recording another inventory movement, and changes already represented by the native transfer are excluded from generic inventory adjustments for its owning shop.

Receipt handling also covers over-received or mis-shipped products that have no normal shipment link. Those receipts can publish their inventory effect to Shopify without changing the existing treatment of shipment-linked receipts.

## Add items to a transfer already in progress

Transfer plans can change after the first order reaches Shopify. When a new item is added in HotWax, the update workflow adds the missing Shopify transfer line first and confirms its mapping. Later runs can then send that item's shipment and receipt activity alongside the original items.

Existing line identities and shipments stay connected to the same transfer. This addition covers new items; quantity increases on an already mapped line retain their existing handling.

Physical stock-on-hand resets also defer affected product and location pairs while matching transfer actions remain unconfirmed. Unrelated inventory can still publish, while the deferred work remains available for retry.

## Enable the workflow per Shopify shop

The create and update jobs ship as paused templates. Your implementation team confirms product and endpoint mappings, clones the jobs for each Shopify shop, and sets the shop scope before enabling them. Enable the create flow first, confirm its round trip, and then enable updates.

Shopify's transfer lifecycle continues to govern its status as items are added, shipped, and received. The integration records those changes across the two systems so teams can follow the transfer through execution.

*Sources: [Shopify transfer services in v4.2.0](https://github.com/hotwax/mantle-shopify-connector/blob/v4.2.0/service/co/hotwax/shopify/transfer/ShopifyInventoryTransferServices.xml), [Shopify connector v4.3.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.0), [v4.3.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.2).*
