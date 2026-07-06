---
title: June 2026 Release Notes
slug: release-notes/2026-06
contentType: release-note
month: 2026-06
metaDescription: June focused on the operating layer around orders, inventory, Shopify, and store execution. HotWax Commerce added more complete order APIs, stronger risk contr…
tagNames: [Release Note]
key: release-notes:2026-06
---

# June 2026 Release Notes

June focused on the operating layer around orders, inventory, Shopify, and store execution. HotWax Commerce added more complete order APIs, stronger risk controls, better inventory reset behavior, and clearer setup paths for the apps and integrations teams use every day.

## Order management

### Order workspaces, tasks, and parking
Order Manager now has deeper backend support for the workflows that happen after an order is created. New APIs expose ship group details, billing and shipping addresses, task lists, task details, order risk data, and packed or in-flight order queues. Operators can also update shipping information, park a ship group, park a full order, and avoid parking orders once fulfillment has already started.

These changes give order screens a more complete operating model. Teams can inspect the right ship group, understand whether inventory is available, move work into parking when it should wait, and keep terminal item statuses from being changed after cancellation or completion.

*Sources: [oms#579](https://github.com/hotwax/oms/pull/579), [oms#580](https://github.com/hotwax/oms/pull/580), [oms#582](https://github.com/hotwax/oms/pull/582), [oms#587](https://github.com/hotwax/oms/pull/587), [oms#589](https://github.com/hotwax/oms/pull/589), [oms#593](https://github.com/hotwax/oms/pull/593), [oms#597](https://github.com/hotwax/oms/pull/597), [oms#598](https://github.com/hotwax/oms/pull/598), [oms#608](https://github.com/hotwax/oms/pull/608), [oms#609](https://github.com/hotwax/oms/pull/609), [oms#613](https://github.com/hotwax/oms/pull/613), [oms#616](https://github.com/hotwax/oms/pull/616), [oms#617](https://github.com/hotwax/oms/pull/617), [oms#618](https://github.com/hotwax/oms/pull/618), [oms#629](https://github.com/hotwax/oms/pull/629), [oms#633](https://github.com/hotwax/oms/pull/633)*

### Order risk and approval controls
Shopify risk data now flows into OMS and can guide approval decisions. The Shopify bridge captures the risk recommendation, assessments, providers, and risk facts from Shopify, then passes that context to OMS. OMS stores the assessment, exposes risk details for order tasks, and can act on the data during approval.

Risk review is also easier to scan. Risk facts can be sorted so negative signals appear first, and approval now checks that the initial transaction exists before the order moves forward. This gives teams a clearer path for reviewing risky orders before fulfillment work begins.

*Sources: [hotwax-shopify-oms-bridge#232](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/232), [mantle-shopify-connector#365](https://github.com/hotwax/mantle-shopify-connector/pull/365), [oms#601](https://github.com/hotwax/oms/pull/601), [oms#615](https://github.com/hotwax/oms/pull/615), [oms#699](https://github.com/hotwax/oms/pull/699), [oms#702](https://github.com/hotwax/oms/pull/702), [hotwax-oms#600](https://github.com/hotwax/hotwax-oms/pull/600)*

### Order funnel and customer context
The new Order Funnel Dashboard has backend services for fulfillment progress, open orders, unfillable orders, and other order metrics. These APIs support facility filtering and oldest-date indicators so teams can spot where work is waiting.

Customer context also moved forward. OMS added Customer 360 contracts, customer search through Solr, customer detail APIs, customer-linked tasks, and customer document indexing. Together, these updates help teams move from order-level work to customer-level context without stitching together separate records by hand.

*Sources: [oms#594](https://github.com/hotwax/oms/pull/594), [oms#641](https://github.com/hotwax/oms/pull/641), [oms#642](https://github.com/hotwax/oms/pull/642), [oms#645](https://github.com/hotwax/oms/pull/645), [oms#648](https://github.com/hotwax/oms/pull/648), [oms#649](https://github.com/hotwax/oms/pull/649), [oms#688](https://github.com/hotwax/oms/pull/688), [oms#694](https://github.com/hotwax/oms/pull/694)*

## Product, facility, and inventory data

### Product information management APIs
OMS now exposes broader product information management APIs. Teams can create and update products, manage product features and good identifications, read product associations, manage Shopify shop products, and access product-facility records. Inventory views also return zero for missing available-to-promise and quantity-on-hand values instead of leaving those fields null.

This gives apps a cleaner product data contract for catalog management, product identity, facility inventory, and cross-system product records.

*Sources: [oms#35](https://github.com/hotwax/oms/pull/35), [oms#576](https://github.com/hotwax/oms/pull/576), [oms#590](https://github.com/hotwax/oms/pull/590), [oms#591](https://github.com/hotwax/oms/pull/591), [oms#595](https://github.com/hotwax/oms/pull/595), [oms#606](https://github.com/hotwax/oms/pull/606), [oms#614](https://github.com/hotwax/oms/pull/614), [oms#627](https://github.com/hotwax/oms/pull/627), [oms#663](https://github.com/hotwax/oms/pull/663), [oms#690](https://github.com/hotwax/oms/pull/690), [hotwax-oms#554](https://github.com/hotwax/hotwax-oms/pull/554)*

### Facility setup and store inventory foundations
Facility management now has an idempotent create-or-update service that can manage addresses, geo points, and external identifications. Facility contact services were moved into the facility service area, and store setup APIs added support for inventory locations, category stores, Shopify shop deletion, tags, and facility IDs on order creation.

These updates make facility records more useful for onboarding and store operations. They also reduce the need for dedicated one-off endpoints when apps can compute counts or fetch associations from the existing facility model.

*Sources: [oms#578](https://github.com/hotwax/oms/pull/578), [oms#632](https://github.com/hotwax/oms/pull/632), [oms#655](https://github.com/hotwax/oms/pull/655), [oms#659](https://github.com/hotwax/oms/pull/659), [hotwax-shopify-oms-bridge#227](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/227), [mantle-shopify-connector#344](https://github.com/hotwax/mantle-shopify-connector/pull/344)*

### Purchase orders, ATP, and POS inventory
Purchase order services now support adding items, updating purchase orders and purchase order items, and syncing promised dates. ATP rule execution also handles empty facility group lists without rolling back the transaction.

Inventory movement for completed POS orders is cleaner as well. OMS no longer creates inventory variance records for POS order reservation and issuance when item issuance already records the inventory movement.

*Sources: [oms#600](https://github.com/hotwax/oms/pull/600), [oms#621](https://github.com/hotwax/oms/pull/621), [oms#667](https://github.com/hotwax/oms/pull/667), [oms#536](https://github.com/hotwax/oms/pull/536), [oms#664](https://github.com/hotwax/oms/pull/664)*

## Shopify and commerce integrations

### Shopify store setup and location sync
Shopify setup gained a clearer bridge path for onboarding stores. New services can fetch Shopify locations, create OMS facilities from those locations, queue order history sync, and start the initial Shopify inventory reset. Connector endpoints expose these capabilities so setup screens can drive the process directly.

This is important for new stores because the first connection is no longer just a credential step. It can also establish locations, start order history, and prepare inventory data for downstream operations.

*Sources: [hotwax-shopify-oms-bridge#227](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/227), [hotwax-shopify-oms-bridge#255](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/255), [mantle-shopify-connector#344](https://github.com/hotwax/mantle-shopify-connector/pull/344), [hotwax-shopify-oms-bridge#259](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/259)*

### Inventory reset and real-time sync
Shopify inventory reset now works at the inventory-level record grain and records where a reset came from. That origin metadata prevents a reset from being pushed back to the same Shopify store while still allowing other eligible shops to receive updates.

Real-time inventory push also moved to the Shopify shop level. Transfer shipment and receipt events can fan out independently to every eligible Shopify shop instead of relying on one product-store scoped path. This gives multi-shop retailers better control over when inventory updates leave OMS and where they go.

*Sources: [hotwax-shopify-oms-bridge#171](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/171), [hotwax-shopify-oms-bridge#243](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/243), [hotwax-shopify-oms-bridge#271](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/271), [hotwax-shopify-oms-bridge#277](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/277), [hotwax-shopify-oms-bridge#278](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/278), [hotwax-shopify-oms-bridge#281](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/281), [hotwax-poorti#238](https://github.com/hotwax/hotwax-poorti/pull/238), [hotwax-poorti#282](https://github.com/hotwax/hotwax-poorti/pull/282), [hotwax-poorti#283](https://github.com/hotwax/hotwax-poorti/pull/283)*

### Shopify order and product sync reliability
Shopify order import received several reliability updates. The bridge handles fulfillment service objects correctly, removes nested transaction boundaries during order processing, parses phone numbers into country, area, and local number fields, and formats phone numbers for Shopify in E.164 format. Product sync now writes product-store mappings and uses the updated product-store association model.

These changes reduce common failure points in order import, product sync, and downstream Shopify updates.

*Sources: [hotwax-shopify-oms-bridge#238](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/238), [hotwax-shopify-oms-bridge#251](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/251), [hotwax-shopify-oms-bridge#252](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/252), [hotwax-shopify-oms-bridge#263](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/263), [hotwax-shopify-oms-bridge#269](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/269), [hotwax-shopify-oms-bridge#286](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/286), [mantle-shopify-connector#356](https://github.com/hotwax/mantle-shopify-connector/pull/356), [hotwax-oms#586](https://github.com/hotwax/hotwax-oms/pull/586)*

## Fulfillment, returns, and communication

### Returns and shipment completion
OMS and Poorti added more support for returns, shipment completion, and order completion events. Return shipment APIs and the PWA returns work give apps more backend coverage for return workflows. Return completion also handles discounted return item prices correctly.

Shipment and order completion can now trigger customer emails, including split-shipment scenarios. Order notifications also received better service-job data and fixes for stale notification content.

*Sources: [oms#516](https://github.com/hotwax/oms/pull/516), [oms#604](https://github.com/hotwax/oms/pull/604), [oms#620](https://github.com/hotwax/oms/pull/620), [oms#630](https://github.com/hotwax/oms/pull/630), [oms#640](https://github.com/hotwax/oms/pull/640), [hotwax-poorti#142](https://github.com/hotwax/hotwax-poorti/pull/142), [hotwax-poorti#265](https://github.com/hotwax/hotwax-poorti/pull/265), [hotwax-shopify-oms-bridge#268](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/268), [hotwax-shopify-oms-bridge#283](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/283)*

### Fulfillment settings, pick profiles, and dashboards
Poorti added pick profile REST APIs for fulfillment order sync settings. These APIs support reading, updating, and deleting conditions and filters with the same master-detail pattern used elsewhere. New sort parameter data covers customer classification, order priority, and rush orders.

Store performance, picker performance, and crediting dashboards also received data documents. Cycle count seed data now includes the work-effort type needed for fresh installs.

*Sources: [hotwax-poorti#240](https://github.com/hotwax/hotwax-poorti/pull/240), [hotwax-poorti#262](https://github.com/hotwax/hotwax-poorti/pull/262), [hotwax-poorti#271](https://github.com/hotwax/hotwax-poorti/pull/271), [hotwax-poorti#274](https://github.com/hotwax/hotwax-poorti/pull/274), [hotwax-poorti#279](https://github.com/hotwax/hotwax-poorti/pull/279), [hotwax-oms#620](https://github.com/hotwax/hotwax-oms/pull/620)*

### Carrier, address, and Klaviyo setup
Shipping and communication setup received several practical updates. Unigate added address validation support for FedEx, return-label support, a Klaviyo setup wizard, and cleanup around outdated services and view entities. Shipping gateway calls now use a pooled request factory so carrier communication can reuse HTTP clients instead of creating new connections for every call.

These changes support the setup work behind labels, address checks, customer messages, and carrier integrations.

*Sources: [hotwax-poorti#259](https://github.com/hotwax/hotwax-poorti/pull/259), [hotwax-poorti#260](https://github.com/hotwax/hotwax-poorti/pull/260), [hotwax-unigate#78](https://github.com/hotwax/hotwax-unigate/pull/78), [hotwax-unigate#83](https://github.com/hotwax/hotwax-unigate/pull/83), [hotwax-oms#525](https://github.com/hotwax/hotwax-oms/pull/525), [oms#561](https://github.com/hotwax/oms/pull/561)*

## Integration administration

### Maarg utility and Solr foundations
Maarg utility added missing Data Manager REST endpoints, login and logout improvements, app-side onboarding endpoints, SystemMessages ordering, Solr setup services, and endpoints for indexing product, customer, and order documents. OMS also added Solr artifacts and corrected index service names.

This gives admin apps and setup flows more of the backend surface they need for search, data management, onboarding, and diagnostics.

*Sources: [hotwax-maarg-util#115](https://github.com/hotwax/hotwax-maarg-util/pull/115), [hotwax-maarg-util#116](https://github.com/hotwax/hotwax-maarg-util/pull/116), [hotwax-maarg-util#107](https://github.com/hotwax/hotwax-maarg-util/pull/107), [hotwax-maarg-util#109](https://github.com/hotwax/hotwax-maarg-util/pull/109), [hotwax-maarg-util#114](https://github.com/hotwax/hotwax-maarg-util/pull/114), [hotwax-maarg-util#117](https://github.com/hotwax/hotwax-maarg-util/pull/117), [hotwax-maarg-util#120](https://github.com/hotwax/hotwax-maarg-util/pull/120), [hotwax-maarg-util#121](https://github.com/hotwax/hotwax-maarg-util/pull/121), [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148), [hotwax-maarg-util#151](https://github.com/hotwax/hotwax-maarg-util/pull/151), [oms#631](https://github.com/hotwax/oms/pull/631), [oms#674](https://github.com/hotwax/oms/pull/674)*

### NetSuite connection setup
The NetSuite connector now has a setup screen for machine-to-machine REST API credentials. Teams can verify and delete credentials from the UI, and the connector uses shared phone-number utilities from Maarg utility for consistent phone parsing.

This reduces setup friction for NetSuite integrations and keeps phone handling aligned across Shopify, NetSuite, and OMS integration paths.

*Sources: [mantle-netsuite-connector#245](https://github.com/hotwax/mantle-netsuite-connector/pull/245), [mantle-netsuite-connector#247](https://github.com/hotwax/mantle-netsuite-connector/pull/247), [mantle-netsuite-connector#249](https://github.com/hotwax/mantle-netsuite-connector/pull/249), [hotwax-maarg-util#157](https://github.com/hotwax/hotwax-maarg-util/pull/157)*

## System and security foundations

### App permissions and safer admin surfaces
OMS added seed data for Order Manager permissions, app-view permissions across HotWax apps, and the COMMERCE_SUPER Administrator group. MDM permissions were moved out of visible Users app categories to reduce permission-screen noise.

The generic OMS entity-data endpoint was also removed and replaced with a bounded return-reasons endpoint. Shopify access tokens and shared secrets were removed from OMS Shopify configuration screens.

*Sources: [oms#612](https://github.com/hotwax/oms/pull/612), [oms#670](https://github.com/hotwax/oms/pull/670), [oms#686](https://github.com/hotwax/oms/pull/686), [hotwax-oms#588](https://github.com/hotwax/hotwax-oms/pull/588), [hotwax-oms#619](https://github.com/hotwax/hotwax-oms/pull/619)*

### Data loading and platform maintenance
Several platform updates make fresh installs and upgrades more predictable. Data files were renamed to load in dependency order, duplicate demo user data was consolidated, missing enum data was corrected, and status-flow transition attributes were fixed so seed loads do not roll back dependent files.

Core maintenance also included Gradle task cleanup, data migration services, product index handling for missing variant flags, and small fixes across Order Routing, OFBiz OMS utilities, and connector data.

*Sources: [oms#637](https://github.com/hotwax/oms/pull/637), [oms#635](https://github.com/hotwax/oms/pull/635), [oms#652](https://github.com/hotwax/oms/pull/652), [oms#677](https://github.com/hotwax/oms/pull/677), [oms#678](https://github.com/hotwax/oms/pull/678), [oms#683](https://github.com/hotwax/oms/pull/683), [oms#706](https://github.com/hotwax/oms/pull/706), [hotwax-ofbiz-oms-usl#28](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/28), [hotwax-ofbiz-oms-usl#29](https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/29), [OrderRouting#121](https://github.com/hotwax/OrderRouting/pull/121), [OrderRouting#122](https://github.com/hotwax/OrderRouting/pull/122), [hotwax-oms#612](https://github.com/hotwax/hotwax-oms/pull/612)*
