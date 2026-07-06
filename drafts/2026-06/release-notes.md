---
title: June 2026 Apps Release Notes
slug: release-notes/2026-06
contentType: release-note
month: 2026-06
metaDescription: June is the Apps release built on top of the API foundation from May. The month brings the operating surfaces for order exceptions, sourcing, product data, int…
tagNames: [Release Note]
key: release-notes:2026-06
---

# June 2026 Apps Release Notes

June is the Apps release built on top of the API foundation from May. The month brings the operating surfaces for order exceptions, sourcing, product data, integration jobs, fulfillment sync, and governed OMS agents into clearer, more focused workspaces.

The release is large because it is not one screen or one workflow. It is a coordinated step toward modern HotWax apps: Order Manager becomes a command center for fulfillment health and exception work, Products becomes the home for operational product data, Routing and Sourcing brings ATP and brokering controls together, Job Manager becomes the control plane for integration operations, and Agent Composer introduces a governed way to turn OMS services into AI-assisted work.

## Order Manager

### Order tasks as real exception work
Order Tasks turn stuck orders into assigned work instead of flattening every blocker into one order status. Bad address review, substitution review, fraud review, shipment exceptions, and general hold work can each become a WorkEffort-backed task with ownership, purpose, status, comments, and resolution history.

The app story is important: Order Manager now has the backend coverage for task queues, task details, task status changes, order-level task visibility, and direct navigation from task cards to the full order. This lets teams keep an order visible to OMS, reserve inventory when appropriate, and still hold it back from unsafe downstream release until the right task is resolved.

*Sources: [press-release-faq#135](https://github.com/hotwax/press-release-faq/pull/135), [oms#587](https://github.com/hotwax/oms/pull/587), [oms#589](https://github.com/hotwax/oms/pull/589), [oms#593](https://github.com/hotwax/oms/pull/593), [oms#613](https://github.com/hotwax/oms/pull/613), [oms#615](https://github.com/hotwax/oms/pull/615), [oms#688](https://github.com/hotwax/oms/pull/688), [oms#697](https://github.com/hotwax/oms/pull/697)*

### Fraud review powered by Shopify risk
Shopify risk assessment is now an OMS workflow instead of disconnected fraud context. The Shopify bridge captures risk recommendation, provider assessments, risk levels, and risk facts, then forwards that payload to OMS. OMS stores the risk rollup, evaluates risk during approval, and creates review work when an order should not move straight to fulfillment.

Order Manager becomes the daily surface for that control. Fraud task cards and order detail risk context let operations teams review suspicious orders while healthy orders keep moving. Pending risk can defer approval, investigate recommendations can create review work, and cancel recommendations can either create review work or auto-cancel depending on product-store configuration.

*Sources: [press-release-faq#133](https://github.com/hotwax/press-release-faq/pull/133), [hotwax-shopify-oms-bridge#232](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/232), [mantle-shopify-connector#365](https://github.com/hotwax/mantle-shopify-connector/pull/365), [oms#601](https://github.com/hotwax/oms/pull/601), [oms#615](https://github.com/hotwax/oms/pull/615), [oms#699](https://github.com/hotwax/oms/pull/699), [oms#702](https://github.com/hotwax/oms/pull/702), [hotwax-oms#600](https://github.com/hotwax/hotwax-oms/pull/600)*

### Order Funnel as the fulfillment operating dashboard
Order Funnel gives fulfillment teams one place to see where orders are moving, blocked, and waiting to sync. The dashboard brings together product-store metrics, brokering progress, picked and packed progress, rejected work, open orders, unfillable orders, hold tasks, and facility-level performance.

The release also adds the backend services needed to make those numbers operational. Facility filtering, oldest-date indicators, open order counts, unfillable metrics, fulfillment progress, and facility rejection APIs let the dashboard become a launch point into the exact queue that needs attention, not just a report that has to be interpreted somewhere else.

*Sources: [press-release-faq#150](https://github.com/hotwax/press-release-faq/pull/150), [oms#629](https://github.com/hotwax/oms/pull/629), [oms#645](https://github.com/hotwax/oms/pull/645), [oms#673](https://github.com/hotwax/oms/pull/673), [oms#676](https://github.com/hotwax/oms/pull/676), [oms#630](https://github.com/hotwax/oms/pull/630), [oms#640](https://github.com/hotwax/oms/pull/640)*

### Parking, ship groups, and order detail depth
Order Manager also gained deeper order-level contracts. Ship group APIs now return the details an operator needs, including addresses and negative reservation context. Shipping information can be updated, ship groups can be parked, full orders can be parked, and safeguards prevent parking after fulfillment has already started.

These controls matter because exception work often happens after an order has already entered a fulfillment path. The app can now pause work in a more precise way, preserve order detail context, and avoid broad status changes when only a specific ship group or fulfillment path needs attention.

*Sources: [oms#579](https://github.com/hotwax/oms/pull/579), [oms#580](https://github.com/hotwax/oms/pull/580), [oms#582](https://github.com/hotwax/oms/pull/582), [oms#596](https://github.com/hotwax/oms/pull/596), [oms#597](https://github.com/hotwax/oms/pull/597), [oms#598](https://github.com/hotwax/oms/pull/598), [oms#608](https://github.com/hotwax/oms/pull/608), [oms#609](https://github.com/hotwax/oms/pull/609), [oms#616](https://github.com/hotwax/oms/pull/616), [oms#617](https://github.com/hotwax/oms/pull/617), [oms#618](https://github.com/hotwax/oms/pull/618), [oms#633](https://github.com/hotwax/oms/pull/633)*

## Products and sourcing

### Products as the operational product data app
The Products app now has a stronger backend foundation for managing the product data operations teams actually work with. The June release adds APIs for products, variants, features, good identifications, product associations, Shopify shop products, product facilities, product-facility configuration, and inventory-facing product views.

This makes Products more than a catalog viewer. It becomes the place where teams can manage dimensions, identifiers, store mappings, facility inventory relationships, and product setup details that affect routing, fulfillment, and integrations.

*Sources: [press-release-faq#137](https://github.com/hotwax/press-release-faq/pull/137), [oms#35](https://github.com/hotwax/oms/pull/35), [oms#576](https://github.com/hotwax/oms/pull/576), [oms#590](https://github.com/hotwax/oms/pull/590), [oms#591](https://github.com/hotwax/oms/pull/591), [oms#595](https://github.com/hotwax/oms/pull/595), [oms#606](https://github.com/hotwax/oms/pull/606), [oms#614](https://github.com/hotwax/oms/pull/614), [oms#627](https://github.com/hotwax/oms/pull/627), [oms#690](https://github.com/hotwax/oms/pull/690), [hotwax-oms#554](https://github.com/hotwax/hotwax-oms/pull/554)*

### Routing and Sourcing as one workspace
Routing, ATP, facility groups, inventory channels, product inventory, and brokering controls are moving into one operating model. The Unified Routing and Sourcing workspace gives teams a single place to understand which inventory can be promised, which facilities participate, which rules protect inventory, and which routing decision should receive the order.

The implementation foundation supports that app direction. Facility group and facility services are more complete, product-facility and inventory views are richer, and routing can account for substitute inventory when a location does not have the requested product but does have an eligible substitute.

*Sources: [press-release-faq#149](https://github.com/hotwax/press-release-faq/pull/149), [press-release-faq#145](https://github.com/hotwax/press-release-faq/pull/145), [press-release-faq#146](https://github.com/hotwax/press-release-faq/pull/146), [oms#578](https://github.com/hotwax/oms/pull/578), [oms#632](https://github.com/hotwax/oms/pull/632), [oms#655](https://github.com/hotwax/oms/pull/655), [oms#659](https://github.com/hotwax/oms/pull/659), [oms#600](https://github.com/hotwax/oms/pull/600), [oms#621](https://github.com/hotwax/oms/pull/621), [oms#667](https://github.com/hotwax/oms/pull/667), [OrderRouting#121](https://github.com/hotwax/OrderRouting/pull/121), [oms#536](https://github.com/hotwax/oms/pull/536)*

## Job Manager and integration operations

### Job Manager V2 as the integration control plane
Job Manager V2 is becoming the Maarg-first control plane for integration operations. Instead of exposing broad framework administration, the app is focused on the jobs, files, system messages, DataDocuments, search indexes, and health tools that keep OMS integrations moving.

June adds more of the backend surface for that direction: Data Manager endpoints, system-message ordering, Solr setup and indexing services, admin onboarding endpoints, login/logout support, and job response handling. This turns Job Manager into the operating room for the scheduled and event-driven work behind orders, products, inventory, and fulfillment updates.

*Sources: [press-release-faq#143](https://github.com/hotwax/press-release-faq/pull/143), [hotwax-maarg-util#115](https://github.com/hotwax/hotwax-maarg-util/pull/115), [hotwax-maarg-util#116](https://github.com/hotwax/hotwax-maarg-util/pull/116), [hotwax-maarg-util#107](https://github.com/hotwax/hotwax-maarg-util/pull/107), [hotwax-maarg-util#109](https://github.com/hotwax/hotwax-maarg-util/pull/109), [hotwax-maarg-util#114](https://github.com/hotwax/hotwax-maarg-util/pull/114), [hotwax-maarg-util#117](https://github.com/hotwax/hotwax-maarg-util/pull/117), [hotwax-maarg-util#120](https://github.com/hotwax/hotwax-maarg-util/pull/120), [hotwax-maarg-util#121](https://github.com/hotwax/hotwax-maarg-util/pull/121), [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148), [hotwax-maarg-util#151](https://github.com/hotwax/hotwax-maarg-util/pull/151), [job-manager#908](https://github.com/hotwax/job-manager/pull/908), [oms#631](https://github.com/hotwax/oms/pull/631), [oms#674](https://github.com/hotwax/oms/pull/674)*

### DataDocuments as reusable report definitions
The DataDocument report builder gives implementation and operations teams a low-code way to create reusable OMS reports. A DataDocument can define the root entity, related entities, selected fields, aliases, measures, conditions, preview behavior, export behavior, and scheduled delivery.

That matters because the same definition can support a live preview, a CSV export, a scheduled email, an exception report, or a future data feed. June adds the foundation for treating operational reports as reusable product assets instead of one-off SQL or support requests.

*Sources: [press-release-faq#141](https://github.com/hotwax/press-release-faq/pull/141), [hotwax-poorti#240](https://github.com/hotwax/hotwax-poorti/pull/240), [hotwax-poorti#279](https://github.com/hotwax/hotwax-poorti/pull/279), [hotwax-maarg-util#115](https://github.com/hotwax/hotwax-maarg-util/pull/115), [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148)*

## Fulfillment and Shopify-connected operations

### Pick profiles and downstream sync queues
Pick profiles now become business-controlled queues for downstream fulfillment sync. Poorti adds REST APIs for fulfillment order sync settings, including conditions, filters, customer classification, order priority, rush-order sorting, and batch behavior.

This turns fulfillment sync from a hidden integration detail into a configuration surface. Operations teams can control how work is selected and released to downstream systems, while implementation teams keep the queue behavior auditable and reusable.

*Sources: [press-release-faq#139](https://github.com/hotwax/press-release-faq/pull/139), [hotwax-poorti#271](https://github.com/hotwax/hotwax-poorti/pull/271), [hotwax-poorti#274](https://github.com/hotwax/hotwax-poorti/pull/274), [hotwax-poorti#262](https://github.com/hotwax/hotwax-poorti/pull/262), [hotwax-oms#620](https://github.com/hotwax/hotwax-oms/pull/620)*

### Shopify fulfillment holds and 3PL routing
HotWax now has a clearer app and integration story for Shopify fulfillment holds and third-party fulfillment services. Shopify-assigned fulfillment service work can be respected instead of re-brokered, OMS-assigned 3PL work can still be routed by HotWax, and Shopify fulfillment holds can pause order processing until Shopify releases the work.

This protects mixed fulfillment models. Retailers can use Shopify-native routing, HotWax brokering, marketplace cooling periods, fraud holds, and 3PL assignments without forcing every line item through the same operational path.

*Sources: [press-release-faq#153](https://github.com/hotwax/press-release-faq/pull/153), [press-release-faq#154](https://github.com/hotwax/press-release-faq/pull/154), [hotwax-shopify-oms-bridge#235](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/235), [hotwax-shopify-oms-bridge#238](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/238), [hotwax-shopify-oms-bridge#245](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/245), [hotwax-shopify-oms-bridge#269](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/269), [hotwax-shopify-oms-bridge#274](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/274), [hotwax-shopify-oms-bridge#276](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/276)*

### Shopify location, inventory, and post-shipment events
Shopify store setup now has a clearer operational path. HotWax can fetch Shopify locations, create OMS facilities from those locations, queue order history sync, start initial inventory reset, and prevent reset inventory from being echoed back to the same Shopify store.

The release also sets up a stronger post-shipment story. Standard tracking sync remains available, while richer carrier or tracking-aggregator events can be normalized and sent back to Shopify as fulfillment events. That keeps the Shopify order status page closer to the true delivery lifecycle.

*Sources: [press-release-faq#155](https://github.com/hotwax/press-release-faq/pull/155), [hotwax-shopify-oms-bridge#227](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/227), [hotwax-shopify-oms-bridge#255](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/255), [hotwax-shopify-oms-bridge#271](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/271), [hotwax-shopify-oms-bridge#277](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/277), [hotwax-shopify-oms-bridge#278](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/278), [hotwax-shopify-oms-bridge#281](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/281), [hotwax-poorti#238](https://github.com/hotwax/hotwax-poorti/pull/238), [hotwax-poorti#282](https://github.com/hotwax/hotwax-poorti/pull/282), [hotwax-poorti#283](https://github.com/hotwax/hotwax-poorti/pull/283), [mantle-shopify-connector#344](https://github.com/hotwax/mantle-shopify-connector/pull/344), [mantle-shopify-connector#356](https://github.com/hotwax/mantle-shopify-connector/pull/356)*

### Native pickup and customer communication
Shopify native BOPIS fulfillment orders give HotWax a cleaner foundation for pickup demand. The app direction is to use Shopify Fulfillment Orders as the source of truth for pickup work, keep pickup, shipping, and local delivery separated, and let Poorti continue as the store execution surface for ready-for-pickup and handover.

Communication flows also gained more structure. Shipment completion, order completion, FedEx address validation, return labels, Klaviyo setup, and pooled shipping gateway calls all support the app experience around fulfillment and customer updates.

*Sources: Shopify Native BOPIS Fulfillment Order Integration PR FAQ draft, [hotwax-poorti#259](https://github.com/hotwax/hotwax-poorti/pull/259), [hotwax-poorti#260](https://github.com/hotwax/hotwax-poorti/pull/260), [hotwax-poorti#265](https://github.com/hotwax/hotwax-poorti/pull/265), [hotwax-unigate#78](https://github.com/hotwax/hotwax-unigate/pull/78), [hotwax-unigate#83](https://github.com/hotwax/hotwax-unigate/pull/83), [hotwax-oms#525](https://github.com/hotwax/hotwax-oms/pull/525), [oms#561](https://github.com/hotwax/oms/pull/561), [oms#620](https://github.com/hotwax/oms/pull/620)*

## Agent and admin foundations

### Agent Composer and Workforce
Agent Composer introduces a new way to build governed OMS agents from approved HotWax capabilities. Users can define an agent, improve its instructions, select a model, choose tools, decide which actions require approval, preview behavior, and activate the agent for use in Workforce.

The bigger app direction is that agents are not a sidecar chatbot. They become governed OMS workers that can inspect order, inventory, fulfillment, routing, product, and integration context through approved tools, while sensitive actions remain visible and approval-driven.

*Sources: [press-release-faq#148](https://github.com/hotwax/press-release-faq/pull/148), [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148), [hotwax-maarg-util#102](https://github.com/hotwax/hotwax-maarg-util/pull/102), [hotwax-maarg-util#109](https://github.com/hotwax/hotwax-maarg-util/pull/109), [hotwax-maarg-util#107](https://github.com/hotwax/hotwax-maarg-util/pull/107)*

### Safer app permissions and admin surfaces
June also strengthens the permission and admin base for the new apps. OMS adds Order Manager permission seed data, app-view permissions, the COMMERCE_SUPER Administrator group, and cleaner Users app permission categories. Broad generic entity access was removed in favor of bounded endpoints, and Shopify secrets are no longer shown on OMS Shopify configuration screens.

This is the quiet work that makes the Apps release usable in customer environments. The new surfaces need the right permissions, safer data access, and seed data that works on fresh installs.

*Sources: [oms#612](https://github.com/hotwax/oms/pull/612), [oms#670](https://github.com/hotwax/oms/pull/670), [oms#686](https://github.com/hotwax/oms/pull/686), [hotwax-oms#588](https://github.com/hotwax/hotwax-oms/pull/588), [hotwax-oms#619](https://github.com/hotwax/hotwax-oms/pull/619)*

## Platform readiness

### Data loading, setup, and integration reliability
A release this large also needs platform cleanup. June includes data-file load ordering, duplicate demo user cleanup, status-flow transition fixes, enum data corrections, product index handling, shared phone utilities, NetSuite credential setup, and removal of fragile transaction boundaries in Shopify order processing.

These updates are not the headline app features, but they make the app rollout more reliable. Fresh installs load more predictably, integrations have fewer hidden setup traps, and shared utilities reduce drift across Shopify, NetSuite, OMS, and Maarg.

*Sources: [mantle-netsuite-connector#245](https://github.com/hotwax/mantle-netsuite-connector/pull/245), [mantle-netsuite-connector#247](https://github.com/hotwax/mantle-netsuite-connector/pull/247), [mantle-netsuite-connector#249](https://github.com/hotwax/mantle-netsuite-connector/pull/249), [hotwax-shopify-oms-bridge#252](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/252), [hotwax-shopify-oms-bridge#263](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/263), [hotwax-shopify-oms-bridge#286](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/286), [oms#635](https://github.com/hotwax/oms/pull/635), [oms#637](https://github.com/hotwax/oms/pull/637), [oms#652](https://github.com/hotwax/oms/pull/652), [oms#683](https://github.com/hotwax/oms/pull/683), [oms#706](https://github.com/hotwax/oms/pull/706), [hotwax-ofbiz-oms-usl#28](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/28), [hotwax-ofbiz-oms-usl#29](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/29), [hotwax-oms#603](https://github.com/hotwax/hotwax-oms/pull/603), [hotwax-oms#612](https://github.com/hotwax/hotwax-oms/pull/612)*
