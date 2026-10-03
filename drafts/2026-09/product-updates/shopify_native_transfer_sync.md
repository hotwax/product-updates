---
title: HotWax Commerce connects transfer orders to Shopify's native transfer workflow
slug: product-updates/2026-09/shopify-native-transfer-sync
contentType: product-update
month: 2026-09
metaDescription: HotWax Commerce connects approved transfer orders, including NetSuite imports, with Shopify native transfers and two-way shipping and receiving updates.
tagNames: [Product Update]
key: product-update:2026-09:shopify-native-transfer-sync
releaseStatus: ready
---

Moving stock between locations can involve a transfer planned in NetSuite, fulfillment managed in the order management system, and store teams working in Shopify. HotWax Commerce now connects approved transfer orders with Shopify's native inventory transfers so supported shipping and receiving actions can flow between the two systems.

This is the transfer order workflow for shipping and receiving stock. Direct inventory transfer requests, which move inventory balances between facilities without a shipment, remain a separate workflow.

## Create a Shopify transfer for the approved order

When the origin and destination map to locations in exactly one Shopify shop, HotWax creates the matching Shopify transfer and leaves it ready to ship. Data Manager retains the complete order submitted and any errors that need attention.

An order with incomplete or ambiguous mappings remains visible for correction before it is sent. HotWax does not create a partial transfer from only the items that happen to have valid mappings.

Transfer creation runs from HotWax to Shopify only. A transfer created independently in Shopify does not create a transfer order in HotWax.

## Know which changes sync in each direction

The integration is bidirectional for shipping and receiving on linked transfers. That does not mean every transfer field syncs both ways.

| Change | Direction | What syncs |
| --- | --- | --- |
| Transfer creation and approval | HotWax to Shopify only | An approved HotWax order creates a Shopify transfer ready to ship. Shopify does not approve or create the HotWax order. |
| New product lines | Both directions | HotWax adds missing products to the linked Shopify transfer. Shopify additions can create HotWax order items before fulfillment or receiving starts. |
| Existing-line reductions and removals | Both directions | HotWax sends reductions in open quantity. Shopify changes can update the HotWax order before fulfillment or receiving starts. Allocated or shipped quantity is not erased. |
| Existing-line increases | Shopify to HotWax only | Shopify quantity increases can update HotWax before fulfillment or receiving starts. Increases made to an already mapped line in HotWax are not sent to Shopify by this update flow. |
| Shipping and shipment-backed receiving | Both directions | HotWax sends shipped quantities and receipts to Shopify. Shopify shipment and receipt events create or update the linked HotWax records. |
| Draft shipment edits and deletion | Shopify to HotWax only | Shopify line edits and deletion can update or cancel the HotWax shipment before inventory has been issued or received. |
| Tracking changes | Shopify to HotWax only | Shopify tracking-number changes update HotWax. Carrier names and tracking URLs are not applied as shipment fields. |
| Whole-transfer cancellation | Both directions | Cancellation syncs while the transfer has not started fulfillment or receiving. A later cancellation is reported for review. |

## Keep shipping and receiving connected

Teams can ship and receive a linked transfer in HotWax or Shopify. Receipts need the corresponding shipment and line mappings. A missing mapping or conflicting quantity remains visible for correction rather than creating a second stock movement.

Repeated notifications reuse the existing order, shipment, and receipt links. Transfer movements already represented in Shopify are not sent again as separate inventory adjustments for that shop. Stock-on-hand resets also defer affected products and locations while shipment or receipt actions remain unconfirmed; unrelated inventory can still publish.

## Add items to a transfer already in progress

Transfer plans can change after the first order reaches Shopify. When a new item is added in HotWax, the update workflow adds the missing Shopify transfer line first and confirms its mapping. Later runs can then send that item's shipment and receipt activity alongside the original items.

Existing lines and shipments stay connected to the same transfer. The new-item flow preserves those records instead of replacing the transfer.

## Carry NetSuite transfer orders through the same workflow

NetSuite transfer orders are compatible with this integration through HotWax. After import and approval in HotWax, a NetSuite-origin order can create the Shopify transfer and use the same shipment and receipt sync described above. The transfer keeps its NetSuite order and item relationships.

Retailers do not need a separate Shopify transfer flow for NetSuite-origin orders. They do need the configured NetSuite integration, product mappings, and both locations mapped to the same Shopify shop. The sync directions and quantity limits still apply, including the limit on increases to an existing line.

## Enable the workflow per Shopify shop

The create and update jobs ship as paused templates. Your implementation team confirms product and location mappings and whole-number quantities, clones the jobs for each Shopify shop, and sets the shop scope before enabling them. Enable creation first, confirm the transfer appears in Shopify, and then enable updates.

Each shop runs independently. Shopify's transfer lifecycle continues to govern its status as items are added, shipped, and received.

*Sources: [Shopify transfer creation services](https://github.com/hotwax/mantle-shopify-connector/blob/v4.3.2/service/co/hotwax/shopify/transfer/ShopifyInventoryTransferServices.xml), [Outbound transfer updates](https://github.com/hotwax/mantle-shopify-connector/blob/v4.3.2/script/co/hotwax/shopify/transfer/stageShopifyInventoryTransferUpdates.groovy), [Incoming transfer events](https://github.com/hotwax/mantle-shopify-connector/blob/v4.3.2/script/co/hotwax/shopify/transfer/webhookApplyTransferEvent.groovy), [Incoming shipment events](https://github.com/hotwax/mantle-shopify-connector/blob/v4.3.2/script/co/hotwax/shopify/transfer/webhookApplyShipmentEvent.groovy), [NetSuite transfer order services](https://github.com/hotwax/mantle-netsuite-connector/blob/v3.2.0/service/co/hotwax/netsuite/TransferOrderServices.xml).*
