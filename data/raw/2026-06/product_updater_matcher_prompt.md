You are a Product Strategist at HotWax Commerce. 
Your task is to identify which "Press Release FAQs" (proposed features) match the "Logical Clusters" (actual implementations) from this month's release.

Pending Press Release FAQs:
[FAQ 0] Title: HotWax introduces Agent Composer for building governed OMS agents
Description: # Agent Composer Framework and OMS Agents - PR FAQ

## Press Release

### HotWax introduces Agent Composer for building governed OMS agents

**Subheading:** Retail operations teams can now create AI agents that understand OMS workflows, use approved HotWax capabilities as tools, and complete work with human approval where it matters.

## Summary

HotWax Commerce today announced Agent Composer and Workforce for HotWax OMS, a new agent framework that lets operations teams create, test, activate, a...

[FAQ 1] Title: HotWax turns DataDocuments into a self-service operational report builder
Description: # Job Manager DataDocument Report Builder - PR FAQ

## Press Release

### HotWax turns DataDocuments into a self-service operational report builder

HotWax Commerce today announced a new Data Document report builder in Job Manager, giving implementation and operations teams a low-code way to create reusable OMS reports, preview live results, export CSV files, schedule recurring email exports, and review export history.

The same foundation also points to a larger direction for HotWax OMS: DataDo...

[FAQ 2] Title: HotWax launches Job Manager V2, a Maarg-first control plane for integration operations
Description: # Job Manager V2 - PR FAQ

## Press Release

### HotWax launches Job Manager V2, a Maarg-first control plane for integration operations

HotWax Commerce today announced Job Manager V2, a redesigned operational control plane for the jobs, files, system messages, reports, and search indexes that keep HotWax OMS integrations running.

Job Manager V2 strips away broad framework administration and presents an interface for the scheduled jobs, message flows, file imports, DataDocuments, and health too...

[FAQ 3] Title: HotWax gives fulfillment teams a real-time order funnel for seeing where orders are moving, blocked, and waiting to sync
Description: # Order Funnel

## Press Release

### Heading

HotWax gives fulfillment teams a real-time order funnel for seeing where orders are moving, blocked, and waiting to sync.

**Subheading:** Order Funnel brings product-store, facility, exception, and fulfillment-sync metrics into one Order Manager dashboard so operators can move from daily health checks to the exact queue that needs attention.

## Summary

HotWax Order Funnel is the operational home page for Order Manager. It gives retailers a live v...

[FAQ 4] Title: HotWax turns stuck orders into assigned, actionable work instead of one-status-at-a-time holds
Description: # Order Tasks

## Press Release

### Heading

HotWax turns stuck orders into assigned, actionable work instead of one-status-at-a-time holds.

**Subheading:** Order Tasks link orders to WorkEfforts so multiple hold reasons can be owned, worked, resolved, and audited while the order still brokers, reserves inventory, and stays out of the 3PL until it is safe to release.

## Summary

HotWax Order Tasks give retailers a more powerful way to manage order exceptions. Instead of treating a hold as a s...

[FAQ 5] Title: HotWax turns pick profiles into business-controlled downstream sync queues
Description: # Pick Profiles for Downstream Sync Queuing

## Source Notes

- Pick profile data model: `hotwax-poorti/entity/PickProfileEntities.xml`
- Pick profile execution: `hotwax-poorti/service/co/hotwax/poorti/picking/PickProfileServices.xml`
- Ready-to-pick selection: `hotwax-poorti/sql/ReadyToPickOrders.sql.ftl`
- Fulfillment wave creation: `hotwax-poorti/service/co/hotwax/poorti/FulfillmentServices.xml`
- Sync queue context: Shopify bridge `SystemMessage` jobs, fulfillment feed jobs, sync history, an...

[FAQ 6] Title: HotWax adds product substitution logic for rescuing sold-out orders before they become cancellations
Description: # Product Substitution Logic - PR FAQ

## Press Release

### HotWax adds product substitution logic for rescuing sold-out orders before they become cancellations

HotWax Commerce today announced product substitution logic for HotWax OMS, giving retailers a structured way to replace sold-out products with approved alternatives during order routing and customer-service resolution.

Retailers often have products that can safely replace one another: the same item in updated packaging, a newer SKU re...

[FAQ 7] Title: HotWax launches Products, a dedicated app for operational product data management
Description: # Products App Overall

## Source Notes

- Frontend app: `hotwax/products`
- Supporting product APIs: OMS product endpoints and the PIM product-data component
- Requirements context: retailer product-data requirements for bundles, SKU aliases, fulfillment metadata, trade metadata, financial attributes, product-store scoping, and product data quality

## Press Release

### HotWax launches Products, a dedicated app for operational product data management

HotWax Commerce today announced Products, ...

[FAQ 8] Title: HotWax lets retailers simulate ship-from-store routing changes before they touch live fulfillment
Description: # Routing Simulation - PR FAQ

## Press Release

### HotWax lets retailers simulate ship-from-store routing changes before they touch live fulfillment

HotWax Commerce today announced Routing Simulation, a new order routing simulation capability for HotWax OMS that lets retailers test ship-from-store and warehouse routing strategies against production-shaped OMS data before releasing changes to live fulfillment.

With Routing Simulation, operations and implementation teams can ask practical what...

[FAQ 9] Title: Respecting Shopify Fulfillment Holds
Description: # Respecting Shopify Fulfillment Holds
## HotWax Commerce automatically pauses order brokering and fulfillment when a fulfillment hold is applied in Shopify.

Many retailers use third-party apps for fraud analysis, address validation, or "cooling off" periods, which can apply a temporary fulfillment hold on an order in Shopify. If an Order Management System ignores these holds and imports the order for immediate processing, it could lead to the fulfillment of fraudulent orders or orders with inv...

[FAQ 10] Title: Shopify Native BOPIS Fulfillment Order Integration
Description: # Press Release

## Shopify Native BOPIS Fulfillment Order Integration

Bring Shopify native buy online, pick up in store orders into HotWax OMS and Poorti as first-class pickup work, without treating pickup as a custom shipping workaround.

**Subheading:** For retailers and store teams who want Shopify pickup promises, OMS routing, and in-store execution to stay aligned from checkout through handover.


## Summary

Shopify Native BOPIS Fulfillment Order Integration allows HotWax to use Shopify ...

[FAQ 11] Title: Real-Time Post-Shipment Event Tracking
Description: # Real-Time Post-Shipment Event Tracking
## HotWax Commerce offers a flexible, tiered architecture to sync granular post-shipment delivery events back to Shopify, ensuring accurate tracking updates for every retailer's unique ecosystem.

Once an order is fulfilled and handed off to a carrier, the customer's anxiety about delivery begins. Traditionally, OMS and ERP systems only send the initial tracking number and carrier name back to Shopify. This forces customers to leave the retailer's ecosyst...

[FAQ 12] Title: HotWax now uses Shopify risk signals to hold, review, and release suspicious orders before fulfillment
Description: # Shopify Risk Assessment Integration

## Press Release

### Heading

HotWax now uses Shopify risk signals to hold, review, and release suspicious orders before fulfillment.

**Subheading:** Shopify risk assessments flow through the Shopify bridge into OMS approval logic, giving operations teams a controlled Fraud queue instead of letting risky orders reach the 3PL.

## Summary

HotWax now has the integration foundation for Shopify risk and fraud review. The Shopify OMS bridge captures Shopify's...

[FAQ 13] Title: Managing Third-Party Fulfillment Services
Description: # Managing Third-Party Fulfillment Services
## How HotWax Commerce harmonizes orders routed by Shopify and orders brokered by the OMS while respecting fulfillment holds.

Retailers often use a mix of fulfillment strategies: in-house warehouses and third-party logistics (3PLs). Friction arises when an OMS attempts to route orders that Shopify has already committed to a specific 3PL, or when marketplace integrations import orders with mandatory "cooling periods" (fulfillment holds) that should not...

[FAQ 14] Title: HotWax brings ATP, routing, facility groups, and product inventory into one sourcing workspace
Description: # Unified Routing and Sourcing Workspace - PR FAQ

## Press Release

### HotWax brings ATP, routing, facility groups, and product inventory into one sourcing workspace

HotWax Commerce today announced a unified Routing and Sourcing workspace for HotWax OMS, bringing Available to Promise rules, order routing, facility group management, inventory channels, and product inventory management into one operational app.

Retailers use HotWax to decide where an order should be fulfilled. That decision is...

Logical Clusters from GitHub:
[Cluster 0] Name: Order tasks as real exception work
Context: Items cited in the current 2026-06 release note section "Order tasks as real exception work".

[Cluster 1] Name: Fraud review powered by Shopify risk
Context: Items cited in the current 2026-06 release note section "Fraud review powered by Shopify risk".

[Cluster 2] Name: Order Funnel as the fulfillment operating dashboard
Context: Items cited in the current 2026-06 release note section "Order Funnel as the fulfillment operating dashboard".

[Cluster 3] Name: Parking, ship groups, and order detail depth
Context: Items cited in the current 2026-06 release note section "Parking, ship groups, and order detail depth".

[Cluster 4] Name: Products as the operational product data app
Context: Items cited in the current 2026-06 release note section "Products as the operational product data app".

[Cluster 5] Name: Routing and Sourcing as one workspace
Context: Items cited in the current 2026-06 release note section "Routing and Sourcing as one workspace".

[Cluster 6] Name: Job Manager V2 as the integration control plane
Context: Items cited in the current 2026-06 release note section "Job Manager V2 as the integration control plane".

[Cluster 7] Name: DataDocuments as reusable report definitions
Context: Items cited in the current 2026-06 release note section "DataDocuments as reusable report definitions".

[Cluster 8] Name: Pick profiles and downstream sync queues
Context: Items cited in the current 2026-06 release note section "Pick profiles and downstream sync queues".

[Cluster 9] Name: Shopify fulfillment holds and 3PL routing
Context: Items cited in the current 2026-06 release note section "Shopify fulfillment holds and 3PL routing".

[Cluster 10] Name: Shopify location, inventory, and post-shipment events
Context: Items cited in the current 2026-06 release note section "Shopify location, inventory, and post-shipment events".

[Cluster 11] Name: Native pickup and customer communication
Context: Items cited in the current 2026-06 release note section "Native pickup and customer communication".

[Cluster 12] Name: Agent Composer and Workforce
Context: Items cited in the current 2026-06 release note section "Agent Composer and Workforce".

[Cluster 13] Name: Safer app permissions and admin surfaces
Context: Items cited in the current 2026-06 release note section "Safer app permissions and admin surfaces".

[Cluster 14] Name: Data loading, setup, and integration reliability
Context: Items cited in the current 2026-06 release note section "Data loading, setup, and integration reliability".

Identify matches where a Cluster represents the implementation of a Feature described in an FAQ.
A single cluster might match an FAQ, or an FAQ might be split across multiple clusters (though rare).

Output ONLY a JSON array of match objects:
[
  { "faqIndex": 0, "clusterIndices": [0] },
  ...
]
If no matches are found, output an empty array [].
