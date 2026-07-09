---
title: May 2026 Product Update
slug: release-notes/2026-05
contentType: release-note
month: 2026-05
metaDescription: This update covers integration and service changes across five operating areas: AfterShip and native Shopify returns, PO-backed pre-order data, Shopify order a…
tagNames: [Release Note]
key: release-notes:2026-05
---

# May 2026 Product Update

This update covers integration and service changes across five operating areas: AfterShip and native Shopify returns, PO-backed pre-order data, Shopify order and product synchronization, carrier labels and email communication, and app migration services. These changes target specific failure modes: stale PO ATP after quantity edits, new Shopify orders waiting behind update jobs, duplicate MDM writes when an order has not changed, carrier label errors hidden in carrier-specific code paths, and audit screens missing actor or log context.

## Returns integration overhaul and supported flows

The release includes a new AfterShip returns integration and broader native Shopify return handling. AfterShip and Shopify return records can now enter OMS before final settlement, remain identified as in-progress or completed returns, and keep the channel, customer, reason, restock, destination facility, refund, and agreement context service teams need to understand the request.

Return and refund reconciliation also became more precise. HotWax now distinguishes in-progress returns, completed returns, appeasements, exchanges, replacement orders, multi-currency refund amounts, and NetSuite return sync steps instead of flattening them into one generic post-refund record. [Read the full returns update](https://www.hotwax.co/product-updates/2026-05/hotwax-expands-returns-processing-with-aftership-and-native-shopify-return-flows).

## Pre-order

### Purchase order management in the Preorder app
Purchase order management moved out of the legacy purchase order screens and into the Preorder app, where users already manage pre-order availability. The app can now load purchase order lists, open purchase order details, show estimated delivery dates, and review receipts tied back to purchase order items.

That puts inbound supply next to the app's existing demand tools: grouped product and order search, variant-level release decisions, warehouse allocation, cancellations, and promise-date edits. PO ATP recalculates after quantity edits, and imported pre-order sales orders index after splitting and promise-date assignment. [Read the full Preorder update](https://www.hotwax.co/product-updates/2026-05/hotwax-adds-purchase-order-visibility-for-preorder-management).

## Shopify

### Order create/update queue separation
Shopify order creation now runs separately from order updates, so new orders do not wait behind a backlog of update jobs. Update-only queues can skip brand-new orders and leave creation to the create queue, while existing orders still receive fulfillment, refund, transaction, risk, and payment updates.

Before writing an order to MDM, the bridge now checks whether the order actually changed, including hash-backed comparisons for fields like customer, payment terms, outstanding amount, fulfillment, refunds, and risk. That reduces unnecessary mega-query and MDM work while keeping updates available when a real diff exists. [Read the full Shopify order sync update](https://www.hotwax.co/product-updates/2026-05/hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues).

The order sync path also picked up targeted fixes:

- Resolve shop context once and pass it downstream.
- Carry product store ID through the order sync flow.
- Skip duplicate shipping contact-mech creation during updates.
- Preserve pre-selected facilities on mixed POS and Shipsi carts instead of replacing them with defaults.

### Product sync history and bulk operations
Product sync work focused on making existing Shopify catalog updates visible and operational in OMS. Product update history is now exposed through REST for sync dashboards, and Shopify product indexing runs after the sync transaction commits so search reflects committed product changes.

The product sync path also picked up targeted fixes:

- Fixed an issue where sometimes the wrong shop Id was saved in the product update history.
- Fixed a product sync failure where category and attribute writes could run before the Product record had a `productId`.
- Fixed a product sync regression where variant products were not queued for search indexing.
- Record a cancelled Shopify bulk operation with a status that lets product update sync continue.

## Carrier integrations

Carrier setup now has a single setup service for store and facility carrier accounts. One setup call validates the product store, carrier, facility, and gateway auth ID; creates the Unigate credential record when that auth ID is new; and creates the OMS carrier configuration and billing configuration records. The same gateway auth ID can be reused across facilities, so teams do not create another credential record when multiple locations use the same carrier account. The setup also blocks duplicate carrier accounts for the same product store, carrier, and facility.

Once a carrier account is configured, the same account selection now follows every shipping action that uses it. Rate shopping, label generation, label voiding, and address validation all read from the same carrier account record across OMS, Poorti, and Unigate, instead of each flow reconstructing which carrier credentials to use.

Rate shopping now supports a multi-option response from shipping gateways. When a carrier returns multiple services, HotWax can keep each option's service, cost, delivery estimate, and carrier rate ID together, then carry the selected rate into the label request. That lets fulfillment teams compare carrier options before buying the label and keeps the final label tied to the rate that was selected.

Carrier setup, labels, and rates also picked up targeted improvements:

- Route label, rate, void-label, and address-validation calls through the configured shipping gateway service.
- Return carrier errors in the same shape across C807, Canada Post, FedEx, Purolator, Shiphawk, and DrivIn for faster troubleshooting.
- Include the company address on label requests so carrier labels receive shipper address and contact data from the same payload.
- Add C807 label/artifact support and DrivIn post-order and delete-order services.
- Pass shipment method type into carrier label requests so ship-to-store orders can suppress COD where required.

## Email integrations

OMS now creates email events through Unigate, prepares the gateway payload, creates communication records after the Unigate response, and sends order-event email work through explicit field mapping instead of passing the full order object around. Pickup, rejection, and BOPIS completion emails now send after the main order action is saved, so creating the communication record does not hold locks while fulfillment work is still being completed.

## New services and permissions

### Store operations
Transfer order lists can now ask for only the fields they render, sort transfer orders, and filter by multiple statuses reducing the payload size significantly. This is expected to improve the performance of the list view in the Transfers app.

Inventory Count moved off deprecated inventory-count APIs inline with planned timelines. The session detail pages also gained device-persisted sorting by uploaded order, alphabetical order, or last updated time, so count teams can work a session in the order that matches their floor process.

### API release log
Admin and migration work was mostly API and permission coverage. The highlights for teams that need the implementation detail:

Environment and app migration:

- System information and component-list APIs now return deployed instance details, release, commit, component versions, branches, and tags.
- Job Manager can show a new-app redirect only after checking the instance version.

Permissions:

- Logged-in user permission lookup now supports pagination.
- Supplier-agent role data, cycle-count permissions, and transfer-order cancellation permissions were added.

Setup and integration configuration:

- Product Store setup can fetch default currency options during creation.
- Shared system-property lookup is available for integration services.
- NiFi integration services can call NiFi REST APIs from Maarg.
- Data Document, Data Feed, and entity-definition management APIs are available for setup tools.

Operational logs and jobs:

- Data Manager logs now link to queued integration messages and service job runs.
- Audit log APIs and changed-by user lookup are available for service job edit history.
- Data Manager log search can sort by last updated time.
- Service job list and update APIs include service and job parameters.

Search and maintenance:

- Search APIs can return facets and response headers for admin search views.
- Inventory utility responses now return default values for empty inventory fields.
- Product-store email setup no longer fails when saving Unigate-backed email settings.
- The order status field length was aligned across OMS services so longer status flow IDs can be saved.
- Apache Tika dependencies were updated for security maintenance.
- An Order Routing SQL template separator was fixed.
