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

*Sources: [hotwax-shopify-oms-bridge#106](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/106), [hotwax-shopify-oms-bridge#205](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/205), [hotwax-shopify-oms-bridge#218](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/218), [hotwax-oms#496](https://github.com/hotwax/hotwax-oms/pull/496), [hotwax-oms#456](https://github.com/hotwax/hotwax-oms/pull/456), [mantle-shopify-connector#280](https://github.com/hotwax/mantle-shopify-connector/pull/280)*

## Pre-order

### Purchase order visibility for Preorder management
Preorder now has stronger purchase-order data for inbound inventory planning. Editing a purchase order item quantity recalculates that item's available-to-promise value, imported pre-order sales orders index after pre-order splitting and promise-date assignment, and the Preorder app can load purchase order list, detail, receipt, and estimated delivery date data.

That gives teams a cleaner way to evaluate pre-sell inventory against the purchase orders that will replenish stock, not only inventory on hand today. [Read the full Preorder update](https://www.hotwax.co/product-updates/2026-05/hotwax-adds-purchase-order-visibility-for-preorder-management).

*Sources: [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505), [hotwax-oms#511](https://github.com/hotwax/hotwax-oms/pull/511), [oms#503](https://github.com/hotwax/oms/pull/503)*

## Shopify

### Order create/update queue separation
Shopify order creation now runs separately from order updates, so new orders do not wait behind a backlog of update jobs. Update-only queues can skip brand-new orders and leave creation to the create queue, while existing orders still receive fulfillment, refund, transaction, risk, and payment updates.

Before writing an order to MDM, the bridge now checks whether the order actually changed, including hash-backed comparisons for fields like customer, payment terms, outstanding amount, fulfillment, refunds, and risk. That reduces unnecessary mega-query and MDM work while keeping updates available when a real diff exists. [Read the full Shopify order sync update](https://www.hotwax.co/product-updates/2026-05/hotwax-speeds-up-shopify-order-sync-with-separate-create-and-update-queues).

The order sync path also picked up targeted fixes:

- Resolve shop context once and pass it downstream.
- Carry product store ID through the order sync flow.
- Skip duplicate shipping contact-mech creation during updates.
- Stop marking cancelled, unfulfilled Shopify orders as completed.
- Preserve pre-selected facilities on mixed POS and Shipsi carts instead of replacing them with defaults.

### Product sync history and bulk operations
Product sync work focused on making existing Shopify catalog updates visible and operational in OMS. Product update history is now exposed through REST for sync dashboards, and Shopify product indexing runs after the sync transaction commits so search reflects committed product changes.

The product sync path also picked up targeted fixes:

- Fixed an issue where sometimes the wrong shop Id was saved in the product update history.
- Fixed a product sync failure where category and attribute writes could run before the Product record had a `productId`.
- Fixed a product sync regression where variant products were not queued for search indexing.
- Record a cancelled Shopify bulk operation with a status that lets product update sync continue.

*Sources: [hotwax-shopify-oms-bridge#186](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/186), [hotwax-shopify-oms-bridge#199](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/199), [hotwax-shopify-oms-bridge#153](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/153), [hotwax-shopify-oms-bridge#149](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/149), [hotwax-shopify-oms-bridge#181](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/181), [hotwax-shopify-oms-bridge#130](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/130), [hotwax-shopify-oms-bridge#155](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/155), [mantle-shopify-connector#326](https://github.com/hotwax/mantle-shopify-connector/pull/326), [mantle-shopify-connector#328](https://github.com/hotwax/mantle-shopify-connector/pull/328), [mantle-shopify-connector#329](https://github.com/hotwax/mantle-shopify-connector/pull/329), [hotwax-shopify-oms-bridge#203](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/203), [hotwax-shopify-oms-bridge#211](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/211), [hotwax-shopify-oms-bridge#161](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/161), [oms#533](https://github.com/hotwax/oms/pull/533), [oms#489](https://github.com/hotwax/oms/pull/489), [oms#494](https://github.com/hotwax/oms/pull/494), [oms#479](https://github.com/hotwax/oms/pull/479), [oms#563](https://github.com/hotwax/oms/pull/563), [mantle-shopify-connector#312](https://github.com/hotwax/mantle-shopify-connector/pull/312), [mantle-shopify-connector#303](https://github.com/hotwax/mantle-shopify-connector/pull/303), [mantle-shopify-connector#300](https://github.com/hotwax/mantle-shopify-connector/pull/300), [mantle-shopify-connector#324](https://github.com/hotwax/mantle-shopify-connector/pull/324)*

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

*Sources: [hotwax-unigate#72](https://github.com/hotwax/hotwax-unigate/pull/72), [hotwax-unigate#76](https://github.com/hotwax/hotwax-unigate/pull/76), [hotwax-unigate#50](https://github.com/hotwax/hotwax-unigate/pull/50), [hotwax-unigate#54](https://github.com/hotwax/hotwax-unigate/pull/54), [hotwax-unigate#55](https://github.com/hotwax/hotwax-unigate/pull/55), [hotwax-unigate#38](https://github.com/hotwax/hotwax-unigate/pull/38), [hotwax-unigate#46](https://github.com/hotwax/hotwax-unigate/pull/46), [hotwax-unigate#71](https://github.com/hotwax/hotwax-unigate/pull/71), [hotwax-unigate#35](https://github.com/hotwax/hotwax-unigate/pull/35), [hotwax-unigate#48](https://github.com/hotwax/hotwax-unigate/pull/48), [hotwax-poorti#243](https://github.com/hotwax/hotwax-poorti/pull/243), [hotwax-poorti#253](https://github.com/hotwax/hotwax-poorti/pull/253), [oms#491](https://github.com/hotwax/oms/pull/491), [oms#555](https://github.com/hotwax/oms/pull/555), [oms#559](https://github.com/hotwax/oms/pull/559), [hotwax-oms#452](https://github.com/hotwax/hotwax-oms/pull/452), [hotwax-oms#556](https://github.com/hotwax/hotwax-oms/pull/556), [hotwax-oms#531](https://github.com/hotwax/hotwax-oms/pull/531), [hotwax-oms#565](https://github.com/hotwax/hotwax-oms/pull/565)*

## Email integrations

OMS now creates email events through Unigate, prepares the gateway payload, creates communication records after the Unigate response, and sends order-event email work through explicit field mapping instead of passing the full order object around. Pickup, rejection, and BOPIS completion emails now send after the main order action is saved, so creating the communication record does not hold locks while fulfillment work is still being completed.

*Sources: [hotwax-unigate#67](https://github.com/hotwax/hotwax-unigate/pull/67), [hotwax-unigate#61](https://github.com/hotwax/hotwax-unigate/pull/61), [hotwax-unigate#62](https://github.com/hotwax/hotwax-unigate/pull/62), [hotwax-unigate#64](https://github.com/hotwax/hotwax-unigate/pull/64), [hotwax-unigate#69](https://github.com/hotwax/hotwax-unigate/pull/69), [hotwax-unigate#77](https://github.com/hotwax/hotwax-unigate/pull/77), [hotwax-unigate#58](https://github.com/hotwax/hotwax-unigate/pull/58), [hotwax-unigate#68](https://github.com/hotwax/hotwax-unigate/pull/68), [hotwax-unigate#57](https://github.com/hotwax/hotwax-unigate/pull/57), [oms#509](https://github.com/hotwax/oms/pull/509), [oms#480](https://github.com/hotwax/oms/pull/480), [hotwax-poorti#246](https://github.com/hotwax/hotwax-poorti/pull/246), [oms#555](https://github.com/hotwax/oms/pull/555), [hotwax-oms#522](https://github.com/hotwax/hotwax-oms/pull/522), [hotwax-oms#523](https://github.com/hotwax/hotwax-oms/pull/523), [hotwax-oms#564](https://github.com/hotwax/hotwax-oms/pull/564)*

## New services and permissions

### Store operations
Transfer order lists can now ask for only the fields they render, sort transfer orders, and filter by multiple statuses reducing the payload size significantly. This is expected to improve the performance of the list view in the Transfers app.

Inventory Count moved off deprecated inventory-count APIs inline with planned timelines. The session detail pages also gained device-persisted sorting by uploaded order, alphabetical order, or last updated time, so count teams can work a session in the order that matches their floor process.

*Sources: [transfers#225](https://github.com/hotwax/transfers/pull/225), [transfers#226](https://github.com/hotwax/transfers/pull/226), [transfers#227](https://github.com/hotwax/transfers/pull/227), [transfers#229](https://github.com/hotwax/transfers/pull/229), [transfers#233](https://github.com/hotwax/transfers/pull/233), [transfers#235](https://github.com/hotwax/transfers/pull/235), [transfers#201](https://github.com/hotwax/transfers/pull/201), [transfers#217](https://github.com/hotwax/transfers/pull/217), [oms#554](https://github.com/hotwax/oms/pull/554), [oms#476](https://github.com/hotwax/oms/pull/476), [oms#474](https://github.com/hotwax/oms/pull/474), [receiving#674](https://github.com/hotwax/receiving/pull/674), [fulfillment#1607](https://github.com/hotwax/fulfillment/pull/1607), [transfers#234](https://github.com/hotwax/transfers/pull/234), [transfers#232](https://github.com/hotwax/transfers/pull/232), [bopis#775](https://github.com/hotwax/bopis/pull/775), [inventory-count#1398](https://github.com/hotwax/inventory-count/pull/1398), [inventory-count#1399](https://github.com/hotwax/inventory-count/pull/1399), [hotwax-poorti#247](https://github.com/hotwax/hotwax-poorti/pull/247)*

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

*Sources: [hotwax-maarg-util#97](https://github.com/hotwax/hotwax-maarg-util/pull/97), [hotwax-maarg-util#83](https://github.com/hotwax/hotwax-maarg-util/pull/83), [hotwax-maarg-util#60](https://github.com/hotwax/hotwax-maarg-util/pull/60), [hotwax-maarg-util#73](https://github.com/hotwax/hotwax-maarg-util/pull/73), [hotwax-maarg-util#74](https://github.com/hotwax/hotwax-maarg-util/pull/74), [hotwax-maarg-util#79](https://github.com/hotwax/hotwax-maarg-util/pull/79), [hotwax-maarg-util#84](https://github.com/hotwax/hotwax-maarg-util/pull/84), [hotwax-maarg-util#58](https://github.com/hotwax/hotwax-maarg-util/pull/58), [hotwax-maarg-util#65](https://github.com/hotwax/hotwax-maarg-util/pull/65), [hotwax-maarg-util#66](https://github.com/hotwax/hotwax-maarg-util/pull/66), [hotwax-maarg-util#87](https://github.com/hotwax/hotwax-maarg-util/pull/87), [hotwax-maarg-util#85](https://github.com/hotwax/hotwax-maarg-util/pull/85), [hotwax-maarg-util#82](https://github.com/hotwax/hotwax-maarg-util/pull/82), [job-manager#883](https://github.com/hotwax/job-manager/pull/883), [job-manager#888](https://github.com/hotwax/job-manager/pull/888), [job-manager#897](https://github.com/hotwax/job-manager/pull/897), [hotwax-oms#563](https://github.com/hotwax/hotwax-oms/pull/563), [hotwax-oms#567](https://github.com/hotwax/hotwax-oms/pull/567), [hotwax-oms#522](https://github.com/hotwax/hotwax-oms/pull/522), [hotwax-oms#524](https://github.com/hotwax/hotwax-oms/pull/524), [hotwax-oms#530](https://github.com/hotwax/hotwax-oms/pull/530), [hotwax-ofbiz-oms-usl#22](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/22), [hotwax-ofbiz-oms-usl#24](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/24), [OrderRouting#115](https://github.com/hotwax/OrderRouting/pull/115)*
