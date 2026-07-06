---
title: May 2026 API and Platform Release Notes
slug: release-notes/2026-05
contentType: release-note
month: 2026-05
metaDescription: May is the API and platform release behind the larger app work that follows in June. The month focused on the service contracts, integration payloads, gateway…
tagNames: [Release Note]
key: release-notes:2026-05
---

# May 2026 API and Platform Release Notes

May is the API and platform release behind the larger app work that follows in June. The month focused on the service contracts, integration payloads, gateway configuration, data models, and operational APIs that let HotWax Commerce connect customer promises, store execution, carrier services, Shopify, NetSuite, and ERP reconciliation.

## Returns, exchanges, and financial reconciliation

### Return and exchange API foundations
May added a deeper return and exchange foundation across OMS, Shopify, AfterShip, and NetSuite. Return imports now carry more of the context operations and accounting teams need: in-progress and completed return states, exchange orders, appeasements that should not restock inventory, return grand totals, references, return adjustments, presentment currency, and refund-agreement fallbacks.

These contracts matter because warranty and store-credit workflows cross several systems. A return can start in Shopify or AfterShip as an open return, become an OMS return request, close later with a refund, create an appeasement when no inventory is coming back, or turn into an exchange order with new payment activity. May's bridge work added the lifecycle records needed to keep those steps connected: Shopify return IDs, refund IDs, return history, in-progress and completed processed dates, return status, customer identity, return channel, line-level reason data, restock behavior, and destination facility.

The financial side became more explicit too. Refund imports now carry shipping refunds, tax refunds, all Shopify order adjustments, refund transactions, exchange credit, exchange payment, presentment amount, presentment currency, and payment created dates into OMS records. When Shopify only provides a return agreement instead of a refund agreement, the bridge falls back to the linked return agreement so AfterShip and native return flows do not collapse into the generic admin channel. When an admin refund does not restock any items, OMS classifies it as an appeasement instead of a customer return.

That gives each team a shared record of what happened. Customer service can see whether a return is still requested or already completed, operations can tell whether inventory should be received, skipped, or held out of sellable stock, and accounting can connect refunds, credit memos, exchange credits, and replacement orders back to the right customer and invoice. Refund and cancellation processing also became less fragile because OMS no longer lets a Solr fulfillment-status sync error block the transaction from continuing.

*Sources: [hotwax-shopify-oms-bridge#106](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/106), [hotwax-shopify-oms-bridge#179](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/179), [hotwax-shopify-oms-bridge#205](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/205), [hotwax-shopify-oms-bridge#218](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/218), [hotwax-shopify-oms-bridge#125](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/125), [hotwax-shopify-oms-bridge#151](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/151), [hotwax-shopify-oms-bridge#177](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/177), [hotwax-shopify-oms-bridge#208](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/208), [hotwax-shopify-oms-bridge#168](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/168), [hotwax-shopify-oms-bridge#181](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/181), [hotwax-shopify-oms-bridge#130](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/130), [hotwax-shopify-oms-bridge#155](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/155), [oms#525](https://github.com/hotwax/oms/pull/525)*

### Customer, tax, and NetSuite reconciliation
Return reconciliation also needed stronger financial identity. OMS return handling now keeps the actual returning customer attached to RMA and refund activity so credit memos can be applied to the right invoice instead of drifting to a generic customer record. NetSuite synchronization received updates for return references, NetSuite sync status, return grand totals, response handling, and customer-facing financial traceability.

May also clarified tax-sensitive flows such as POS returns, warranty exchanges, store-credit invoices, replacement sales orders, and mixed POS or Shipsi carts. The API work preserves more of the payment terms, created dates, presentment currency, and Shopify exchange-rate data needed to reconcile those orders downstream.

*Sources: [hotwax-oms#496](https://github.com/hotwax/hotwax-oms/pull/496), [hotwax-oms#542](https://github.com/hotwax/hotwax-oms/pull/542), [hotwax-oms#508](https://github.com/hotwax/hotwax-oms/pull/508), [hotwax-oms#521](https://github.com/hotwax/hotwax-oms/pull/521), [hotwax-oms#456](https://github.com/hotwax/hotwax-oms/pull/456), [hotwax-poorti#231](https://github.com/hotwax/hotwax-poorti/pull/231), [mantle-netsuite-connector#213](https://github.com/hotwax/mantle-netsuite-connector/pull/213)*

### Warranty inventory and floor-damage tracking
Warranty returns are also inventory events. NetSuite transfer and inventory synchronization gained better floor-damage handling, inventory transfer history, retry behavior, custom-field support, valid-date filters, and corrected transfer receipt line identifiers.

This keeps warranty inventory movement connected to the customer claim. A warranty claim can move inventory into a floor-damage sublocation, carry the claim number into searchable fields, and leave a cleaner audit path from customer service to receiving and accounting.

*Sources: [mantle-netsuite-connector#238](https://github.com/hotwax/mantle-netsuite-connector/pull/238), [mantle-netsuite-connector#239](https://github.com/hotwax/mantle-netsuite-connector/pull/239), [mantle-netsuite-connector#242](https://github.com/hotwax/mantle-netsuite-connector/pull/242), [mantle-netsuite-connector#234](https://github.com/hotwax/mantle-netsuite-connector/pull/234), [mantle-netsuite-connector#237](https://github.com/hotwax/mantle-netsuite-connector/pull/237), [mantle-netsuite-connector#231](https://github.com/hotwax/mantle-netsuite-connector/pull/231)*

## Transfer orders and store execution

### Transfer order APIs and app work that landed in May
Transfer orders became a more complete operating workflow in May. The Transfers app moved through a major AccxUI refactor covering routing, authentication redirects, list behavior, detail loading, bulk receiving, item actions, and transfer-flow tests.

This stays in the May release because it is genuine May work, not a June Apps-release dependency. The app changes were paired with service work that gives transfer screens more precise filtering, sorting, field selection, lookup behavior, and responsive list/detail loading.

*Sources: [transfers#225](https://github.com/hotwax/transfers/pull/225), [transfers#226](https://github.com/hotwax/transfers/pull/226), [transfers#227](https://github.com/hotwax/transfers/pull/227), [transfers#229](https://github.com/hotwax/transfers/pull/229), [transfers#233](https://github.com/hotwax/transfers/pull/233), [transfers#235](https://github.com/hotwax/transfers/pull/235), [transfers#201](https://github.com/hotwax/transfers/pull/201), [transfers#217](https://github.com/hotwax/transfers/pull/217), [oms#554](https://github.com/hotwax/oms/pull/554), [oms#476](https://github.com/hotwax/oms/pull/476), [oms#474](https://github.com/hotwax/oms/pull/474)*

### Shared transfer order contracts across apps
The transfer order model also became more consistent across Receiving, Fulfillment, BOPIS, Inventory Count, and Transfers. Those apps now use updated transfer-order and product-store APIs where older resources were removed or deprecated.

This is API release work because it aligns the shared contract across app surfaces. It prevents one app from showing stale or broken transfer records while another app has already moved to the newer OMS transfer model.

*Sources: [receiving#674](https://github.com/hotwax/receiving/pull/674), [fulfillment#1607](https://github.com/hotwax/fulfillment/pull/1607), [transfers#234](https://github.com/hotwax/transfers/pull/234), [transfers#232](https://github.com/hotwax/transfers/pull/232), [bopis#775](https://github.com/hotwax/bopis/pull/775), [inventory-count#1398](https://github.com/hotwax/inventory-count/pull/1398), [inventory-count#1399](https://github.com/hotwax/inventory-count/pull/1399)*

## Availability and order capture

### Purchase orders and available-to-promise inventory
Order promising depends on the inventory OMS expects to receive, not only the inventory on hand today. May added purchase order services and views, plus recalculation behavior for available-to-promise inventory when purchase order item quantities change.

That gives the later sourcing and routing app work a stronger API base. Inbound quantities can change before stock is physically received, and ATP needs those changes to be visible to the promise and routing model.

*Sources: [oms#503](https://github.com/hotwax/oms/pull/503), [hotwax-oms#505](https://github.com/hotwax/hotwax-oms/pull/505)*

### Shopify order and product synchronization
Shopify synchronization became more explicit about create and update behavior. The bridge can run update-only queues, resolve shop context once, pass product store IDs through downstream services, and filter orders before writing them to MDM. Product synchronization also gained better product update history, shop-product checks, transaction-commit indexing, and Shopify product or variant change handling.

These are the integration contracts that later app surfaces depend on. Availability, routing, fulfillment, and product operations all need current order and product data before they can show useful work queues.

*Sources: [hotwax-shopify-oms-bridge#186](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/186), [hotwax-shopify-oms-bridge#199](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/199), [hotwax-shopify-oms-bridge#153](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/153), [hotwax-shopify-oms-bridge#149](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/149), [mantle-shopify-connector#326](https://github.com/hotwax/mantle-shopify-connector/pull/326), [oms#533](https://github.com/hotwax/oms/pull/533), [oms#489](https://github.com/hotwax/oms/pull/489), [oms#494](https://github.com/hotwax/oms/pull/494), [oms#479](https://github.com/hotwax/oms/pull/479), [oms#563](https://github.com/hotwax/oms/pull/563), [hotwax-shopify-oms-bridge#203](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/203), [hotwax-shopify-oms-bridge#211](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/211)*

## Gateways, labels, and customer communication

### Shipping gateway setup and carrier APIs
Shipping labels, tracking links, and carrier payloads are operationally visible failures when they break. May's Unigate work moved carrier setup toward a clearer gateway model with shared carrier request helpers, consistent carrier error responses, shipping gateway configuration, FedEx token and request updates, and support for C807 and DrivIn carrier services.

OMS and Poorti also added carrier configuration support for active label-request flows. Together, these API and configuration changes give teams a cleaner place to manage the details that affect label generation and tracking.

*Sources: [hotwax-unigate#72](https://github.com/hotwax/hotwax-unigate/pull/72), [hotwax-unigate#76](https://github.com/hotwax/hotwax-unigate/pull/76), [hotwax-unigate#50](https://github.com/hotwax/hotwax-unigate/pull/50), [hotwax-unigate#54](https://github.com/hotwax/hotwax-unigate/pull/54), [hotwax-unigate#55](https://github.com/hotwax/hotwax-unigate/pull/55), [hotwax-unigate#38](https://github.com/hotwax/hotwax-unigate/pull/38), [hotwax-unigate#46](https://github.com/hotwax/hotwax-unigate/pull/46), [hotwax-unigate#71](https://github.com/hotwax/hotwax-unigate/pull/71), [hotwax-unigate#35](https://github.com/hotwax/hotwax-unigate/pull/35), [hotwax-unigate#48](https://github.com/hotwax/hotwax-unigate/pull/48), [hotwax-poorti#243](https://github.com/hotwax/hotwax-poorti/pull/243), [hotwax-poorti#253](https://github.com/hotwax/hotwax-poorti/pull/253), [oms#491](https://github.com/hotwax/oms/pull/491), [oms#555](https://github.com/hotwax/oms/pull/555), [oms#559](https://github.com/hotwax/oms/pull/559), [hotwax-oms#452](https://github.com/hotwax/hotwax-oms/pull/452), [hotwax-oms#556](https://github.com/hotwax/hotwax-oms/pull/556)*

### Communication gateways and email events
Customer communication moved onto the same gateway pattern. Unigate added a communication gateway model, tenant setup UI, gateway authentication endpoints, migration services from system message remotes, updated send-email API definitions, and tests. OMS and Poorti now create communication events through Unigate and run email-triggering SECAs asynchronously.

For operators, the important change is that email behavior becomes configurable infrastructure rather than scattered workflow logic. Klaviyo payloads also gained additional fields so customer messages can include more order and fulfillment context.

*Sources: [hotwax-unigate#67](https://github.com/hotwax/hotwax-unigate/pull/67), [hotwax-unigate#61](https://github.com/hotwax/hotwax-unigate/pull/61), [hotwax-unigate#62](https://github.com/hotwax/hotwax-unigate/pull/62), [hotwax-unigate#64](https://github.com/hotwax/hotwax-unigate/pull/64), [hotwax-unigate#69](https://github.com/hotwax/hotwax-unigate/pull/69), [hotwax-unigate#77](https://github.com/hotwax/hotwax-unigate/pull/77), [hotwax-unigate#58](https://github.com/hotwax/hotwax-unigate/pull/58), [hotwax-unigate#68](https://github.com/hotwax/hotwax-unigate/pull/68), [oms#509](https://github.com/hotwax/oms/pull/509), [oms#480](https://github.com/hotwax/oms/pull/480), [hotwax-poorti#246](https://github.com/hotwax/hotwax-poorti/pull/246), [hotwax-unigate#57](https://github.com/hotwax/hotwax-unigate/pull/57)*

## Integration control and administration

### Shopify connector configuration and bulk operations
The Shopify connector added database-managed GraphQL templates, custom GraphQL DSL directives, a generic Shopify GraphQL REST endpoint, bulk product synchronization services, webhook management APIs, and better handling for canceled Shopify bulk operations.

This belongs in May because it is the connector and API control layer, not the later June app narrative. It makes Shopify behavior easier to configure and operate without treating every Shopify change as custom code.

*Sources: [mantle-shopify-connector#334](https://github.com/hotwax/mantle-shopify-connector/pull/334), [mantle-shopify-connector#337](https://github.com/hotwax/mantle-shopify-connector/pull/337), [mantle-shopify-connector#312](https://github.com/hotwax/mantle-shopify-connector/pull/312), [mantle-shopify-connector#303](https://github.com/hotwax/mantle-shopify-connector/pull/303), [mantle-shopify-connector#314](https://github.com/hotwax/mantle-shopify-connector/pull/314), [mantle-shopify-connector#300](https://github.com/hotwax/mantle-shopify-connector/pull/300)*

### Maarg and Job Manager operational APIs
The admin side of OMS also moved forward in May. Maarg added REST and service coverage for NiFi, system information, user permissions, service job audit history, Data Manager logs, data documents, data feeds, entity definitions, currency UOM defaults, Solr facets, system-message updates, and component lists. Job Manager added new-app redirection controls, system information support, and conditional menu behavior for the new app version.

This is the API layer for later integration operations. It gives administrators and implementation teams broader service coverage for jobs, diagnostics, data movement, and app migration without making the May release compete with the June Apps-release story.

*Sources: [hotwax-maarg-util#97](https://github.com/hotwax/hotwax-maarg-util/pull/97), [hotwax-maarg-util#83](https://github.com/hotwax/hotwax-maarg-util/pull/83), [hotwax-maarg-util#60](https://github.com/hotwax/hotwax-maarg-util/pull/60), [hotwax-maarg-util#73](https://github.com/hotwax/hotwax-maarg-util/pull/73), [hotwax-maarg-util#74](https://github.com/hotwax/hotwax-maarg-util/pull/74), [hotwax-maarg-util#79](https://github.com/hotwax/hotwax-maarg-util/pull/79), [hotwax-maarg-util#84](https://github.com/hotwax/hotwax-maarg-util/pull/84), [hotwax-maarg-util#58](https://github.com/hotwax/hotwax-maarg-util/pull/58), [hotwax-maarg-util#65](https://github.com/hotwax/hotwax-maarg-util/pull/65), [hotwax-maarg-util#66](https://github.com/hotwax/hotwax-maarg-util/pull/66), [hotwax-maarg-util#87](https://github.com/hotwax/hotwax-maarg-util/pull/87), [hotwax-maarg-util#85](https://github.com/hotwax/hotwax-maarg-util/pull/85), [hotwax-maarg-util#82](https://github.com/hotwax/hotwax-maarg-util/pull/82), [job-manager#883](https://github.com/hotwax/job-manager/pull/883), [job-manager#888](https://github.com/hotwax/job-manager/pull/888), [job-manager#897](https://github.com/hotwax/job-manager/pull/897)*

## System and data foundations

### Platform data and security maintenance
Several May updates keep the platform safer and easier to operate without changing a single user workflow on their own. OMS added supplier-agent role data, cycle-count and transfer-order cancellation permissions, product-store email relationship adjustments, and an order-header status field type update. Apache Tika dependencies were also updated to address security vulnerabilities.

Legacy OFBiz utility services now return default inventory field values where null responses previously dropped fields, expose service job information with parameters, and include a small Order Routing SQL template fix.

*Sources: [hotwax-oms#563](https://github.com/hotwax/hotwax-oms/pull/563), [hotwax-oms#567](https://github.com/hotwax/hotwax-oms/pull/567), [hotwax-oms#522](https://github.com/hotwax/hotwax-oms/pull/522), [hotwax-oms#524](https://github.com/hotwax/hotwax-oms/pull/524), [hotwax-oms#530](https://github.com/hotwax/hotwax-oms/pull/530), [hotwax-ofbiz-oms-usl#22](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/22), [hotwax-ofbiz-oms-usl#24](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/24), [OrderRouting#115](https://github.com/hotwax/OrderRouting/pull/115)*
