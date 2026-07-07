---
title: HotWax adds purchase order visibility for Preorder management
slug: product-updates/2026-05/hotwax-adds-purchase-order-visibility-for-preorder-management
contentType: product-update
month: 2026-05
metaDescription: Preorder depends on inventory that has not arrived yet. If purchase order quantities, inbound dates, or receipt history are hard to see, teams can approve pre-…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-adds-purchase-order-visibility-for-preorder-management
---

# HotWax adds purchase order visibility for Preorder management

Preorder depends on inventory that has not arrived yet. If purchase order quantities, inbound dates, or receipt history are hard to see, teams can approve pre-sell demand against stale supply assumptions or fall back to older purchase order screens outside the Preorder workflow.

HotWax now gives the Preorder app the purchase order data it needs to evaluate inbound supply directly. The app can load purchase order lists, open individual purchase orders, show estimated delivery dates on purchase order item ship-group data, and retrieve receipts tied back to purchase order items. That lets teams review the PO record, expected timing, and received quantity from the same operating context where they manage pre-sell availability.

The update also closes two correctness gaps in the existing flow. When a purchase order item quantity changes, HotWax recalculates the available-to-promise value for that item, so pre-sell eligibility does not keep using the old quantity. Imported pre-order sales orders now create their order index after item splitting and promise-date assignment, so approved pre-orders appear in indexed order views without manual reindexing.

The new Preorder-facing purchase order resources include list access with status, item status, facility, product store, keyword, and pagination filters; detail access for a single purchase order; estimated delivery dates on purchase order item ship groups; and receipt lookup through the `PurchaseOrderItemShipmentReceipt` view.

For merchandising and operations teams, the result is a cleaner pre-sell decision path. They can see which purchase orders support future availability, when that inventory is expected, and whether receipts have started, while ATP stays aligned with the latest PO quantity edits.

*Sources: [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505), [hotwax-oms#511](https://github.com/hotwax/hotwax-oms/pull/511), [oms#503](https://github.com/hotwax/oms/pull/503)*
