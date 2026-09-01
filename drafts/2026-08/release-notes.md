---
title: August 2026 apps release notes
slug: release-notes/2026-08
contentType: release-note
month: 2026-08
metaDescription: August connects inventory, transfers, integrations, and exception work across HotWax Commerce, with clearer controls and stronger operational visibility.
tagNames: [Release Note]
key: release-notes:2026-08
releaseStatus: draft
---

# August 2026 apps release notes

August connects more of the retail operating day across HotWax Commerce. Retailers can reconcile Shopify fulfillment locations without losing inventory accuracy, publish inventory from a durable event ledger, manage integrations from Company, create transfer orders from Receiving, and investigate inventory movement from new Cycle Count and Order Routing views.

## Shopify order and fulfillment synchronization

### Keep Shopify fulfillment locations and OMS allocations aligned

HotWax Commerce now reconciles fulfillment-location changes in both directions. When Shopify assigns a fulfillment order to a different location, the OMS can move the related allocation. When the OMS reallocates fulfillment, a scheduled outbound process can move the Shopify fulfillment order to the matching location.

The reconciliation flow records a compact fulfillment-order hash so that location-only changes are detected without treating an older webhook as newer truth. It also reuses an existing target ship group when possible, refreshes an open synchronization task instead of creating duplicates, and can sweep for missed fulfillment records that need to be replayed.

Inventory corrections account for moves between physical and aggregate Shopify locations. This keeps the aggregate inventory pool consistent while the next absolute inventory publication remains available as a self-healing backstop. [Read the full fulfillment-location reconciliation update](https://www.hotwax.co/product-updates/2026-08/shopify-fulfillment-location-reconciliation).

### Preserve more Shopify order lifecycle details

The August Shopify connector releases improve native buy online, pick up in store imports, return and exchange handling, estimated ship-date mapping, and custom order searches. Duplicate fulfillment resynchronization is reduced, while exchange lines and cancelled returns retain clearer lifecycle state as changes move between Shopify and the OMS.

## Inventory publishing

### Publish Shopify inventory from a durable event ledger

Inventory changes can now enter a ledger before they are batched for Shopify. Each row identifies the business event, inventory channel, Shopify inventory item, quantity change, and reason. Replay-safe keys prevent the same event from being counted twice, and zero-change events can close without creating an unnecessary outbound message.

The controller recomputes aggregate available-to-promise inventory from committed OMS state and fans the change across the configured inventory channels. A batch publisher then groups pending changes into Shopify messages while retaining the reason for the change and isolating failures to a smaller scope.

Company adds an Inventory Sync workspace for monitoring waiting events, batches, jobs, recent resets, and feed mode. Absolute resets can supersede obsolete pending changes, giving the system a clear path back to authoritative inventory when a delta stream needs correction. [Read the full event-driven inventory publishing update](https://www.hotwax.co/product-updates/2026-08/event-driven-shopify-inventory-publishing).

## Company

### Run integrations from a shared control center

Company now brings Shopify inventory monitoring, batch order sync, app-version controls, carrier setup, Unigate configuration, and NetSuite order-push monitoring into one administration app.

Teams can inspect backlogs and recent runs, schedule or run supported jobs, pause and resume processing, and replay eligible errors from the same surface that holds the connection configuration. The Inventory Sync workspace now shows every job involved in publishing, including one publisher per inventory channel, the system-message sender, the manual discard tool, and the retention purge. Administrators can edit supported job parameters while app-created jobs remain paused until they are reviewed and activated.

Carrier setup includes methods, mappings, billing details, and a readiness checklist so configuration and operating status remain visible together. [Read the full integration control center update](https://www.hotwax.co/product-updates/2026-08/company-integration-control-center).

### Manage company structure and NetSuite subsidiary mappings

Company can now manage internal organizations as a hierarchy, including create, rename, and reparent actions with cycle protection. Facility assignments make it easier to see which operating locations belong to each organization.

An organization external ID can be maintained alongside the company record and used by the current NetSuite order-export flow as its subsidiary ID. This keeps company hierarchy, related facilities, and the current export mapping in one administration workflow. [Read the full multi-company update](https://www.hotwax.co/product-updates/2026-08/multi-company-oms-and-netsuite-subsidiary-mapping).

## Transfers and receiving

### Create and receive transfer orders through one connected workflow

Receiving now includes a transfer-order creation flow for selecting the source, destination, products, and quantities. When a warehouse transfer order is approved, the OMS can move its items to the valid state and reserve inventory from the source warehouse.

Permission and navigation fixes connect the flow to Transfers and Fulfillment. NetSuite transfer-order receipts can be imported through Data Manager and delegated to the same receiving service used by HotWax Commerce, reducing the need for a separate receipt path. [Read the full transfer-order update](https://www.hotwax.co/product-updates/2026-08/connected-transfer-order-workflow).

Receiving also corrects force-scan behavior, transfer-detail redirects, and purchase-order sorting. Products without an inventory record at the receiving facility now show zero on hand without repeatedly requesting the same quantity.

## Cycle Count

### Create counts and trace variance decisions

Cycle Count adds a creation page for both administrator and store views. Teams can define the count at the point of work instead of preparing every request in a separate administration surface.

Pending Review search now accepts a cycle count name or Work Effort ID. A new variance-decision view joins each decision to its count, facility, product, reason, outcome, and actor, providing a reusable record that other inventory surfaces can reference. [Read the full Cycle Count update](https://www.hotwax.co/product-updates/2026-08/cycle-count-creation-and-variance-decisions).

## Order Routing

### Explain available inventory and monitor its update jobs

Inventory views can switch between channel and location scope, show Online ATP and thresholds, and explain how physical inventory becomes the inventory available to a sales channel. The calculation walkthrough covers facility membership, brokering rules, exclusions, safety stock, thresholds, and queued demand before comparing the computed result with the authoritative OMS value.

The new Inventory Updates page brings rule runs, queued and failed Data Manager files, schedules, recent runs, and run-now controls together. Dashboard queue metrics now report an unavailable state when the source cannot be reached instead of presenting a misleading zero. [Read the full inventory monitoring update](https://www.hotwax.co/product-updates/2026-08/order-routing-inventory-monitoring-and-schedules).

## Store fulfillment apps

### Make daily queues more dependable

BOPIS corrects loading behavior on Ready for Pickup and Completed pages, validates pickup-notification responses before showing success, and preserves the selected locale. Order details now show the next cancelled-order synchronization time from the job's actual runtime field. Fulfillment improves picker search, order counts, transfer-shipment permissions, carrier updates, and locale persistence.

Receiving, BOPIS, Fulfillment, Cycle Count, and Transfers continue the move to centralized application permissions and installable progressive web app support where included in their August releases.

## OMS and integration services

### Carry better operational context through the core platform

OMS updates add customer and order context to assigned tasks, expand order audit history, improve task transitions, and correct negative reservation cases. Inventory details retain more movement reasons, including point-of-sale issuance corrections, while fulfillment records can carry estimated ship and delivery dates.

NetSuite connector and OMS updates add transfer-order receipt imports, pending order-push counts, more detailed inventory movement reasons, and estimated ship and delivery dates. NetSuite configuration also uses the current RESTlet URL, and product identification reuses the resolved HotWax product ID throughout the export flow. These changes keep integration status and operating context visible at each boundary.
