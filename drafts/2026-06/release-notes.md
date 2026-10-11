---
title: June 2026 Apps Release Notes
slug: release-notes/2026-06
contentType: release-note
month: 2026-06
metaDescription: June turns the API foundation delivered in May into four focused operating apps. Order Manager becomes the command center for fulfillment health and exception…
tagNames: [Release Note]
key: release-notes:2026-06
---

# June 2026 Apps Release Notes

June turns the API foundation delivered in May into four focused operating apps. Order Manager becomes the command center for fulfillment health and exception work, Products becomes the home for operational product data, Routing brings sourcing and brokering controls together, and Job Manager becomes the control plane for integration operations.

## Order Manager

Order Manager gives fulfillment and customer-service teams one place to see the day's work, investigate exceptions, and act on the order.

### Start with the fulfillment Funnel

The Funnel shows today's order and ship-group progress for a selected product store, including open, assigned, picked, packed, shipped, rejected, and unfillable work. Facility views add fill rate, allocated and packed orders, pending fulfillment, the oldest assigned order, and fulfillment-sync settings such as queue rules, batch size, schedule, and pause state. Metrics link to the corresponding work queues.

### Give exception work an owner

Order Tasks turn holds, bad addresses, substitutions, fraud reviews, and shipment issues into separate records with a purpose, status, assignee, order and customer context, and a resolution comment. Purpose-built queues let teams work the exception directly, while the same task remains available from the full order.

Shopify risk assessments now participate in order approval. The bridge imports the recommendation, provider assessments, levels, and facts; Order Manager presents the resulting Fraud work with customer, payment, item, and risk context so a reviewer can resolve the task or cancel the order.

### Resolve substitutions and control release

Swap tasks show the unavailable item, configured substitutes, facility inventory, and pricing. An operator can accept a suggested substitute, search for a different product, cancel only the affected item, cancel the order, or park the ship group.

Pick Profiles control which approved ship groups become fulfillment work. Profiles can filter and sort eligible work, apply batch limits, and run on a schedule. The ready-to-pick query excludes ship groups with an unresolved hold task and ship groups whose fulfillment has already started, then creates picklists for the work that remains eligible.

### Preserve Shopify-assigned fulfillment

For stores configured to use Shopify's fulfillment assignments, the order import maps a line item's Shopify fulfillment service to the corresponding HotWax facility. Assigned and unassigned items can remain in separate ship groups, preserving third-party fulfillment assignments instead of flattening the order into one allocation path.

### Work with the full order and customer context

Ship-group detail now includes shipping information and negative-reservation context, with actions to update shipping information or park the affected ship group. Safeguards prevent parking after fulfillment has started. Customer 360 adds customer search and a dedicated customer workspace for orders, returns, communications, relationships, and open tasks.

## Products and sourcing

### Introducing Products, a dedicated app for operational product data
Products launches with a searchable workbench and a product-detail workspace organized around operational use. Teams can filter by product type, store, and tag; navigate product families and variants; maintain configured identifiers, components, substitutes, tags, categories, prices, and Shopify product mappings; and manage shipping dimensions, weight, units, and box settings. A 3D dimension preview makes incorrect package proportions easier to spot.

Duplicate-identifier and missing-value views turn catalog cleanup into a visible queue. Product change history and recent import history provide context when a record changes or an import fails.

### Routing and Sourcing come together in one workspace
Available to Promise and Routing answer two parts of the same question: which inventory can be promised, and which eligible facility should receive the order. June brings sourcing rules, facility groups, product-facility inventory, and brokering rules into the Order Routing app.

Teams can maintain threshold, safety-stock, shipping, pickup, and inventory-channel rules; create and manage facility groups; inspect ATP, QOH, minimum stock, pickup eligibility, brokering eligibility, and inventory history for a product at a facility; and build brokering rules over the same network model.

## Job Manager and integration operations

### Job Manager V2 becomes the control plane for integration operations
Job Manager V2 is organized around four operating pillars:

- The dashboard surfaces paused or unscheduled jobs, stuck, failed, and slow runs, ingestion failures, System Message errors, queue depth, average processing time, actionable errors, and recent activity.
- Data Manager and File History make file ingestion searchable and auditable, with status, priority, configuration, error, and processing-time context.
- System Messages show inbound and outbound payloads, status journeys, parent and child messages, operation sequences, files, and errors.
- DataDocuments let teams build reusable entity-based reports, validate and preview them, export CSV files, schedule email exports, and review export history.

## Shopify store setup

### Faster Shopify store setup
Onboarding a new Shopify location used to mean a handful of manual setup steps before it could actually take orders. HotWax can now fetch Shopify locations, create the matching OMS facility, queue order-history sync, and kick off an initial inventory reset in one flow, without that reset echoing back to Shopify as if it were a real inventory change.
