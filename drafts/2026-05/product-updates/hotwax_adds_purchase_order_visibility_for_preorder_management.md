---
title: HotWax adds purchase order visibility for Preorder management
slug: product-updates/2026-05/hotwax-adds-purchase-order-visibility-for-preorder-management
contentType: product-update
month: 2026-05
metaDescription: Preorder depends on the purchase orders that will replenish inventory, not only the inventory currently on hand. May added the PO-backed data Preorder needs to…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-adds-purchase-order-visibility-for-preorder-management
---

# HotWax adds purchase order visibility for Preorder management

Preorder depends on the purchase orders that will replenish inventory, not only the inventory currently on hand. May added the PO-backed data Preorder needs to show inbound supply, receipts, and updated available-to-promise quantities.

The update covers both correctness and app enablement. When a purchase order item quantity changes, HotWax recalculates that item's available-to-promise value so pre-sell decisions do not use the old quantity. Imported pre-order sales orders also create their order index after pre-order item splitting and promise-date assignment, so approved pre-orders appear in indexed order views without manual reindexing.

## What changed

- `GET /purchaseOrders` adds purchase order list access with filters for status, item status, facility, product store, keyword, and pagination.
- `GET /purchaseOrders/{orderId}` adds single purchase order access for detail views.
- Purchase order item ship-group data now includes `estimatedDeliveryDate` so Preorder can show inbound timing.
- `GET /purchaseOrders/{orderId}/receipts` adds receipt lookup from the `PurchaseOrderItemShipmentReceipt` view, tying receipts back to purchase order items.
- Purchase order item ATP recalculates when the purchase order quantity changes.
- Imported pre-order sales orders are indexed after pre-order splitting and promise-date assignment.

## Customer impact

Merchandising and operations teams can review the purchase orders that support pre-sell inventory, see when inbound inventory is expected, and avoid promising against stale purchase order quantities. The Preorder app gets the list, detail, receipt, and inbound-date data it needs without requiring users to fall back to older purchase order screens.

*Sources: [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505), [hotwax-oms#511](https://github.com/hotwax/hotwax-oms/pull/511), [oms#503](https://github.com/hotwax/oms/pull/503)*
