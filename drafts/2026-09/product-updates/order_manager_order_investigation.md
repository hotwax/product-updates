---
title: HotWax Commerce connects order history, item actions, and inventory transfers in Order Manager
slug: product-updates/2026-09/order-manager-order-investigation
contentType: product-update
month: 2026-09
metaDescription: Order Manager connects a readable order timeline with item status, scoped actions, inventory transfer requests, and staged order attribute changes.
tagNames: [Product Update]
key: product-update:2026-09:order-manager-order-investigation
releaseStatus: ready
---

An order can be waiting for stock, partly fulfilled, moved between locations, or already canceled in Shopify. HotWax Commerce's Order Manager brings those details into a clearer `Order Detail` page, with an order history you can follow and inventory transfer controls beside the items that need them.

## Follow the order's actual history

The timeline groups related records into business transactions. A Shopify cancellation that also moves an item into parking reads as one cancellation. Repeated rejections and releases can fold into an expandable row, while the underlying steps remain available for review.

Day headings and the time between events help you see where an order spent its time. The timeline uses the recorded dates for returns and fulfillment milestones, and the ship group cards use the same milestone data. An action refreshes the history so you can see the next step without reopening the order. If history cannot load, the page offers `Retry`.

Item and ship group status also carry more meaning. Individual items show their own status, grouped product rows show quantities by status, and completed or canceled ship groups reflect their items even when milestone dates are missing. Variant details help distinguish sizes or colors without opening another view.

## Bring stock to the location fulfilling the order

You can request an inventory transfer for an eligible open item at a physical facility. Order Manager keeps that item's fulfillment location as the destination and lets you compare source warehouses and stores by available inventory, recent sales activity, and distance when location data is available.

The request covers the item's open quantity. Before saving, you can review the source and destination, their current stock, the quantities after the transfer, and an optional comment. Requests for several selected items open in sequence, so each item has its own source decision.

A transfer chip on the item shows whether stock is still requested, has been transferred, or was canceled. Open the chip to review transfer details and earlier requests. Authorized users can confirm completion or cancel an open transfer. An existing open request also prevents another request for the same item.

## Keep changes scoped to the items you select

Pulling back selected items affects those items rather than the entire ship group. Checkboxes make the selection explicit, and the Items footer keeps eligible actions together. A collapsed ship group shows how many additional items are hidden and opens to reveal them.

Order attributes can now be added, edited, or removed from the `Attributes` card. Changes stay in a draft until `Save`. The app checks for duplicate attribute names and lets you retry any changes that could not be saved.

*Sources: [Order Manager inventory transfer controls](https://github.com/hotwax/order-manager/blob/v1.3.0/src/components/orders/OrderItemTransfersModal.vue), [Order Manager transfer requests](https://github.com/hotwax/order-manager/blob/v1.3.0/src/services/inventoryTransfers.ts), [Order Manager timeline transactions](https://github.com/hotwax/order-manager/blob/v1.3.0/src/utils/orderTimeline/transactions.ts), [Order Manager order attributes](https://github.com/hotwax/order-manager/blob/v1.3.0/src/components/orders/ManageOrderAttributesModal.vue), [Order Manager selected-item actions](https://github.com/hotwax/order-manager/blob/v1.3.0/src/composables/useOrderActions.ts)*
