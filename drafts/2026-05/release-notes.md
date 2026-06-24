---
title: May 2026 Release Notes
slug: release-notes/2026-05
contentType: release-note
month: 2026-05
metaDescription: May focused on stabilizing order, return, transfer, and integration workflows across HotWax Commerce. The updates improve Shopify order and product synchroniza…
tagNames: [Release Note]
key: release-notes:2026-05
---

# May 2026 Release Notes

May focused on stabilizing order, return, transfer, and integration workflows across HotWax Commerce. The updates improve Shopify order and product synchronization, strengthen transfer order handling, expand Unigate shipping and communication gateway setup, and add more reliable operational APIs for administrators and integration jobs.

## HotWax Commerce Order Management System

### Transfer order search and list performance
Transfer order services now support more precise filtering, sorting, and field selection. These changes make transfer order list pages faster and give apps a cleaner way to fetch only the fields they need for order lookup and review screens.

*Sources: [oms#554](https://github.com/hotwax/oms/pull/554), [oms#476](https://github.com/hotwax/oms/pull/476), [oms#474](https://github.com/hotwax/oms/pull/474)*

### Purchase order and ATP updates
OMS added services and views for purchase orders and improved how available-to-promise inventory is recalculated when purchase order item quantities change. This helps inventory availability stay aligned when inbound quantities are adjusted.

*Sources: [oms#503](https://github.com/hotwax/oms/pull/503), [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505)*

### Product update history and Shopify product indexing
Product synchronization received several fixes around product update history, Shopify shop-product checks, and transaction-commit indexing. These updates reduce product indexing gaps and make product change history more reliable when Shopify product or variant data changes.

*Sources: [oms#533](https://github.com/hotwax/oms/pull/533), [oms#489](https://github.com/hotwax/oms/pull/489), [oms#494](https://github.com/hotwax/oms/pull/494), [oms#479](https://github.com/hotwax/oms/pull/479), [oms#563](https://github.com/hotwax/oms/pull/563), [hotwax-shopify-oms-bridge#203](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/203), [hotwax-shopify-oms-bridge#211](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/211)*

### Return and refund handling
Refund processing is more resilient when Solr errors occur, and return flows now handle presentment currency, return grand totals, return references, rejection settings, and NetSuite sync status more consistently. These changes improve return visibility and reduce failures during cancellation, refund, and return synchronization workflows.

*Sources: [oms#525](https://github.com/hotwax/oms/pull/525), [hotwax-oms#508](https://github.com/hotwax/hotwax-oms/pull/508), [hotwax-oms#521](https://github.com/hotwax/hotwax-oms/pull/521), [hotwax-oms#456](https://github.com/hotwax/hotwax-oms/pull/456), [hotwax-poorti#231](https://github.com/hotwax/hotwax-poorti/pull/231), [mantle-netsuite-connector#213](https://github.com/hotwax/mantle-netsuite-connector/pull/213)*

### Shipping and communication gateway setup
OMS now includes screens and setup services for Unigate communication and shipping gateways. Configuration modals were updated so gateway fields can be edited, product-store email settings retain the correct remote reference, and carrier configuration can be managed through setup data and MDM services.

*Sources: [oms#491](https://github.com/hotwax/oms/pull/491), [oms#555](https://github.com/hotwax/oms/pull/555), [oms#559](https://github.com/hotwax/oms/pull/559), [hotwax-oms#452](https://github.com/hotwax/hotwax-oms/pull/452), [hotwax-oms#556](https://github.com/hotwax/hotwax-oms/pull/556)*

### Data integrity, security, and platform maintenance
OMS added supplier-agent role data, cycle-count and transfer-order cancellation security permissions, product-store email relationship adjustments, and a status field type update for order headers. The platform also updated Apache Tika dependencies to address security vulnerabilities.

*Sources: [hotwax-oms#563](https://github.com/hotwax/hotwax-oms/pull/563), [hotwax-oms#567](https://github.com/hotwax/hotwax-oms/pull/567), [hotwax-oms#522](https://github.com/hotwax/hotwax-oms/pull/522), [hotwax-oms#524](https://github.com/hotwax/hotwax-oms/pull/524), [hotwax-oms#530](https://github.com/hotwax/hotwax-oms/pull/530)*

## Shopify and Integration Updates

### Shopify order synchronization controls
Shopify order synchronization now separates create and update behavior more clearly. The order sync flow can run update-only queues, resolve shop context once, pass product store IDs through downstream services, and filter orders before they are written to MDM. This helps reduce duplicate work and makes order processing behavior more predictable.

*Sources: [hotwax-shopify-oms-bridge#186](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/186), [hotwax-shopify-oms-bridge#199](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/199), [hotwax-shopify-oms-bridge#153](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/153), [hotwax-shopify-oms-bridge#149](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/149), [mantle-shopify-connector#326](https://github.com/hotwax/mantle-shopify-connector/pull/326)*

### Shopify returns, exchanges, and refunds
Shopify return import now supports in-progress and completed returns, non-restock appeasements, refund-agreement fallback behavior, return adjustment capture, and exchange-order fulfillment fixes. These updates make Shopify return and exchange data more complete in HotWax and reduce edge-case failures during refund processing.

*Sources: [hotwax-shopify-oms-bridge#106](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/106), [hotwax-shopify-oms-bridge#179](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/179), [hotwax-shopify-oms-bridge#205](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/205), [hotwax-shopify-oms-bridge#218](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/218), [hotwax-shopify-oms-bridge#125](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/125), [hotwax-shopify-oms-bridge#151](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/151), [hotwax-shopify-oms-bridge#177](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/177)*

### Shopify order payload and payment accuracy
Order import and update handling now records payment terms, created dates on payment preferences, presentment currency details, Shopify exchange-rate calculations, and all Shopify order adjustments during return import. Mixed-cart POS and Shipsi flows also preserve the intended facility assignment.

*Sources: [hotwax-shopify-oms-bridge#208](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/208), [hotwax-shopify-oms-bridge#168](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/168), [hotwax-shopify-oms-bridge#181](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/181), [hotwax-shopify-oms-bridge#130](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/130), [hotwax-shopify-oms-bridge#155](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/155), [hotwax-oms#496](https://github.com/hotwax/hotwax-oms/pull/496), [hotwax-oms#542](https://github.com/hotwax/hotwax-oms/pull/542)*

### Shopify GraphQL and bulk operations
The Shopify connector added support for database-managed GraphQL templates, custom GraphQL DSL directives, a generic Shopify GraphQL REST endpoint, bulk product synchronization services, webhook management REST APIs, and better handling for canceled Shopify bulk operations. These changes make connector configuration and bulk sync jobs easier to operate and extend.

*Sources: [mantle-shopify-connector#334](https://github.com/hotwax/mantle-shopify-connector/pull/334), [mantle-shopify-connector#337](https://github.com/hotwax/mantle-shopify-connector/pull/337), [mantle-shopify-connector#312](https://github.com/hotwax/mantle-shopify-connector/pull/312), [mantle-shopify-connector#303](https://github.com/hotwax/mantle-shopify-connector/pull/303), [mantle-shopify-connector#314](https://github.com/hotwax/mantle-shopify-connector/pull/314), [mantle-shopify-connector#300](https://github.com/hotwax/mantle-shopify-connector/pull/300)*

### NetSuite transfer and inventory synchronization
NetSuite integration added inventory transfer history and retry handling for floor-damage scenarios, improved custom field and response handling, added valid-date filters to avoid duplicate sync records, and corrected transfer receipt line identifiers. These updates improve the reliability of transfer, inventory, and return syncs with NetSuite.

*Sources: [mantle-netsuite-connector#238](https://github.com/hotwax/mantle-netsuite-connector/pull/238), [mantle-netsuite-connector#239](https://github.com/hotwax/mantle-netsuite-connector/pull/239), [mantle-netsuite-connector#242](https://github.com/hotwax/mantle-netsuite-connector/pull/242), [mantle-netsuite-connector#234](https://github.com/hotwax/mantle-netsuite-connector/pull/234), [mantle-netsuite-connector#237](https://github.com/hotwax/mantle-netsuite-connector/pull/237), [mantle-netsuite-connector#231](https://github.com/hotwax/mantle-netsuite-connector/pull/231)*

## HotWax Apps

### Transfers app workflow refresh
The Transfers app received a major AccxUI refactor with improved routing, authentication redirects, list-page behavior, detail-page loading, bulk receive handling, item actions, and transfer-flow test coverage. Transfer order list screens now remove redundant grouping controls, reduce flicker, and redirect users back to requested pages after login.

*Sources: [transfers#225](https://github.com/hotwax/transfers/pull/225), [transfers#226](https://github.com/hotwax/transfers/pull/226), [transfers#227](https://github.com/hotwax/transfers/pull/227), [transfers#229](https://github.com/hotwax/transfers/pull/229), [transfers#233](https://github.com/hotwax/transfers/pull/233), [transfers#235](https://github.com/hotwax/transfers/pull/235), [transfers#201](https://github.com/hotwax/transfers/pull/201), [transfers#217](https://github.com/hotwax/transfers/pull/217)*

### Transfer order API migration across apps
Receiving, Fulfillment, and Transfers now use updated transfer-order and product-store APIs where older endpoints were deprecated. This keeps transfer order details visible across app list pages and prevents failures caused by removed inventory or product-store resources.

*Sources: [receiving#674](https://github.com/hotwax/receiving/pull/674), [fulfillment#1607](https://github.com/hotwax/fulfillment/pull/1607), [transfers#234](https://github.com/hotwax/transfers/pull/234), [transfers#232](https://github.com/hotwax/transfers/pull/232), [bopis#775](https://github.com/hotwax/bopis/pull/775), [inventory-count#1398](https://github.com/hotwax/inventory-count/pull/1398)*

### Inventory count review controls
Inventory Count added session detail sort options and migrated deprecated inventory endpoints. This improves review workflows for count sessions while keeping the app aligned with current OMS APIs.

*Sources: [inventory-count#1399](https://github.com/hotwax/inventory-count/pull/1399), [inventory-count#1398](https://github.com/hotwax/inventory-count/pull/1398)*

### Job Manager app migration support
Job Manager added support for redirecting users to the new app version, fetching system information, and conditionally showing the new-app redirection menu only when the target version is available. This gives administrators a safer migration path between app versions.

*Sources: [job-manager#883](https://github.com/hotwax/job-manager/pull/883), [job-manager#888](https://github.com/hotwax/job-manager/pull/888), [job-manager#897](https://github.com/hotwax/job-manager/pull/897)*

## Unigate, Shipping, and Communication

### Communication gateway management
Unigate added a communication gateway model, tenant-detail setup UI, REST endpoints for gateway authentication, migration services from system message remotes, updated send-email API definitions, and a complete test suite. Email workflow event creation now follows the new gateway-auth schema.

*Sources: [hotwax-unigate#67](https://github.com/hotwax/hotwax-unigate/pull/67), [hotwax-unigate#61](https://github.com/hotwax/hotwax-unigate/pull/61), [hotwax-unigate#62](https://github.com/hotwax/hotwax-unigate/pull/62), [hotwax-unigate#64](https://github.com/hotwax/hotwax-unigate/pull/64), [hotwax-unigate#69](https://github.com/hotwax/hotwax-unigate/pull/69), [hotwax-unigate#77](https://github.com/hotwax/hotwax-unigate/pull/77), [hotwax-unigate#58](https://github.com/hotwax/hotwax-unigate/pull/58), [hotwax-unigate#68](https://github.com/hotwax/hotwax-unigate/pull/68)*

### Shipping gateway and carrier integrations
Unigate shipping services now use a shared carrier request helper, more consistent carrier error responses, refactored shipping gateway configuration, FedEx token and request updates, and new C807 and DrivIn carrier service support. Poorti and OMS also added carrier configuration changes for active label request flows.

*Sources: [hotwax-unigate#72](https://github.com/hotwax/hotwax-unigate/pull/72), [hotwax-unigate#76](https://github.com/hotwax/hotwax-unigate/pull/76), [hotwax-unigate#50](https://github.com/hotwax/hotwax-unigate/pull/50), [hotwax-unigate#54](https://github.com/hotwax/hotwax-unigate/pull/54), [hotwax-unigate#55](https://github.com/hotwax/hotwax-unigate/pull/55), [hotwax-unigate#38](https://github.com/hotwax/hotwax-unigate/pull/38), [hotwax-unigate#46](https://github.com/hotwax/hotwax-unigate/pull/46), [hotwax-unigate#71](https://github.com/hotwax/hotwax-unigate/pull/71), [hotwax-unigate#35](https://github.com/hotwax/hotwax-unigate/pull/35), [hotwax-unigate#48](https://github.com/hotwax/hotwax-unigate/pull/48), [hotwax-poorti#243](https://github.com/hotwax/hotwax-poorti/pull/243), [hotwax-poorti#253](https://github.com/hotwax/hotwax-poorti/pull/253)*

### Email and communication events
OMS and Poorti updated email event handling so communication events are created through Unigate and email-triggering SECAs execute asynchronously. Klaviyo templates also support additional fields in email payloads.

*Sources: [oms#509](https://github.com/hotwax/oms/pull/509), [oms#480](https://github.com/hotwax/oms/pull/480), [hotwax-poorti#246](https://github.com/hotwax/hotwax-poorti/pull/246), [hotwax-unigate#57](https://github.com/hotwax/hotwax-unigate/pull/57)*

## Administration and APIs

### Maarg operational APIs
Maarg added REST and service coverage for NiFi, system information, user permissions, service job audit history, Data Manager logs, data documents, data feeds, entity definitions, currency UOM defaults, Solr facets, system-message updates, and component lists. These APIs improve the admin tooling available for monitoring jobs and managing integration data.

*Sources: [hotwax-maarg-util#97](https://github.com/hotwax/hotwax-maarg-util/pull/97), [hotwax-maarg-util#83](https://github.com/hotwax/hotwax-maarg-util/pull/83), [hotwax-maarg-util#60](https://github.com/hotwax/hotwax-maarg-util/pull/60), [hotwax-maarg-util#73](https://github.com/hotwax/hotwax-maarg-util/pull/73), [hotwax-maarg-util#74](https://github.com/hotwax/hotwax-maarg-util/pull/74), [hotwax-maarg-util#79](https://github.com/hotwax/hotwax-maarg-util/pull/79), [hotwax-maarg-util#84](https://github.com/hotwax/hotwax-maarg-util/pull/84), [hotwax-maarg-util#58](https://github.com/hotwax/hotwax-maarg-util/pull/58), [hotwax-maarg-util#65](https://github.com/hotwax/hotwax-maarg-util/pull/65), [hotwax-maarg-util#66](https://github.com/hotwax/hotwax-maarg-util/pull/66), [hotwax-maarg-util#87](https://github.com/hotwax/hotwax-maarg-util/pull/87), [hotwax-maarg-util#85](https://github.com/hotwax/hotwax-maarg-util/pull/85), [hotwax-maarg-util#82](https://github.com/hotwax/hotwax-maarg-util/pull/82)*

### Legacy service compatibility
OFBiz OMS utility services now return default inventory field values where null responses previously dropped fields, and expose service job information with service and job input parameters. Order Routing also includes a small SQL template fix for separator-tag handling.

*Sources: [hotwax-ofbiz-oms-usl#22](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/22), [hotwax-ofbiz-oms-usl#24](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/24), [OrderRouting#115](https://github.com/hotwax/OrderRouting/pull/115)*
