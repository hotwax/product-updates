---
title: HotWax brings purchase order management into the pre-order app
slug: product-updates/2026-05/hotwax-adds-purchase-order-visibility-for-pre-order-management
contentType: product-update
month: 2026-05
metaDescription: Pre-order work has always depended on purchase orders, but purchase order management still lived in the older OMS screens. That split forced users to leave the…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-adds-purchase-order-visibility-for-preorder-management
---

# HotWax brings purchase order management into the pre-order app

Pre-order work has always depended on purchase orders, but purchase order management still lived in the older OMS screens. That split forced users to leave the pre-order app to review inbound inventory, check expected dates, and confirm receipts even though those purchase orders directly affect the pre-orders they are managing.

HotWax now moves the purchase order management flow into the pre-order app. Users can load purchase order lists, open individual purchase orders, review estimated delivery dates, and see receipts tied back to purchase order items without switching to the legacy purchase order screens.

That matters because the pre-order app is already the workspace where teams manage pre-sell demand. Product detail pages group pre-orders by variant, giving users a SKU-level view of demand across all matching order items. From that same flow, users can filter by order date, promised date, loyalty status, or missing promise dates; select quantities by variant; release the oldest matching pre-orders; send selected quantities to a warehouse; cancel selected quantities; and update promise dates in bulk or one order item at a time.

The analysis model works at three useful levels:

- Parent product grouping shows total pre-sell demand for a style or item family, so teams can start from the products with the most open demand.
- Variant grouping shows one SKU across all matching order items, so teams can compare demand by sellable variant before deciding how many units to release, allocate, or cancel.
- Order-item rows remain the direct one-to-one record for action, so each release, warehouse allocation, cancellation, or promise-date edit still targets the exact order item that needs to change.

Bringing purchase orders into that workspace puts inbound supply next to the decisions it supports. The app can show an active or available purchase order with its expected delivery date, ordered quantity, available quantity, corresponding pre-order count, total purchase order items, and total purchase order ATP. Product audit views can compare that supply against Shopify listing status and promise-date data, so teams can see whether a product is ready to keep selling, needs a promise-date adjustment, or no longer has inbound supply to support pre-selling.

Two existing-flow fixes keep that app surface aligned with OMS behavior. When a purchase order item quantity changes, HotWax recalculates available-to-promise for that item, so users do not review stale inbound availability. Imported pre-order sales orders now create their order index after item splitting and promise-date assignment, so approved pre-orders appear in indexed order views without manual reindexing.

For merchandising and operations teams, the pre-order app becomes the single home for the operational work around pre-orders and the inbound purchase orders that support them. Users can review demand, manage release decisions, update promise data, and check purchase order supply without jumping back to the legacy purchase order screens.

*Sources: [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505), [hotwax-oms#511](https://github.com/hotwax/hotwax-oms/pull/511), [oms#503](https://github.com/hotwax/oms/pull/503)*
