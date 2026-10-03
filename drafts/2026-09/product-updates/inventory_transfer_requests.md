---
title: HotWax Commerce adds inventory transfer requests with explicit execution and cancellation
slug: product-updates/2026-09/inventory-transfer-requests
contentType: product-update
month: 2026-09
metaDescription: Request a one-product movement between facilities, review its order context, and execute paired inventory adjustments or cancel without changing stock.
tagNames: [Product Update]
key: product-update:2026-09:inventory-transfer-requests
releaseStatus: published
---

HotWax Commerce adds an `Inventory transfers` view to the Transfers app so operations teams can manage stock movements recorded directly between facilities. Create a request for a product and quantity, review the source and destination, and decide when to execute or cancel it. The request stays visible through `Requested`, `Complete`, and `Cancelled` statuses.

## Request a specific stock movement

Create an inventory transfer by selecting the source and destination facilities, entering the product ID, and specifying the quantity. Each request covers one product. You can link the request to the order and item it supports, and add a comment explaining the movement.

The form requires a positive quantity and different source and destination facilities before submission. Creating the request records the planned movement; execution is the separate action that changes inventory. This gives your team a chance to review the request before applying it to the facility balances.

## Find the requests that need attention

The view opens with requested transfers, keeping pending decisions together. Each row shows the product, quantity, source, destination, related order when present, creation time, and status.

Use filters to narrow the list by transfer ID, product ID, source, destination, or status. For an order-specific review, look up the order and narrow the results to the relevant item. You can also switch the status filter to review completed or canceled transfers. These views help you distinguish movements still waiting for action from those already concluded.

## Execute or cancel with a clear inventory outcome

Select `Execute` on a requested transfer and confirm the action to reduce inventory at the source and increase it at the destination by the same quantity. HotWax updates both quantity on hand and available-to-promise inventory, records the two adjustments against the transfer, and marks it `Complete`.

If the movement is no longer needed, select `Cancel` and confirm. The request becomes `Cancelled` without changing inventory. `Execute` and `Cancel` are available only for requested transfers, and the app limits creation and management actions to users with the required permission.

## Choose the workflow that matches the movement

Inventory transfers record the inventory adjustment directly. Execution applies both sides of the movement together; it does not create a shipment or record a separate physical receipt.

For replenishment that needs picking, shipping, receiving, or discrepancy review, continue using transfer orders and the existing Fulfillment and Receiving workflows. The separate `Inventory transfers` tab keeps these direct adjustments distinguishable from shipped transfer orders, so your team can choose the process that matches the work.

*Sources: [Inventory transfers view](https://github.com/hotwax/transfers/blob/c2e3f7efcdcaaa65b562d693654f50da6fee5a20/src/views/InventoryTransfers.vue), [Request creation](https://github.com/hotwax/transfers/blob/c2e3f7efcdcaaa65b562d693654f50da6fee5a20/src/components/InventoryTransferModal.vue), [Inventory execution and cancellation in OMS v3.2.0](https://github.com/hotwax/oms/blob/v3.2.0/service/co/hotwax/oms/product/InventoryTransferServices.xml), [Transfer-order workflow](https://docs.hotwax.co/documents/store-operations/inventory/transfer-order-management)*
