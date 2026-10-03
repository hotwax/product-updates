---
title: September 2026 apps release notes
slug: release-notes/2026-09
contentType: release-note
month: 2026-09
metaDescription: September connects order investigation, product calendar dates, replenishment planning, and Shopify inventory and transfer operations across HotWax Commerce.
tagNames: [Release Note]
key: release-notes:2026-09
releaseStatus: draft
---

# September 2026 apps release notes

September brings inventory decisions closer to the orders, products, and locations they affect in HotWax Commerce. Teams can investigate order history, review replenishment needs, connect product calendar dates to inventory rules, and follow Shopify inventory and transfer activity from the same apps they use to manage it.

## Order Manager

### Follow the order history and act on the right items

Order Detail groups related history records into business transactions, shows time between events, and keeps fulfillment milestones consistent with the ship group cards. Item status, variant details, and quantities by status help operators see what is still open without treating the whole order as one state.

For an eligible open item, an operator can request inventory from another facility while keeping the item's fulfillment location as the destination. Source choices show available stock, recent sales, and distance when location data is present. Requested, completed, and cancelled transfers stay visible beside the item. Selected-item pullback and order attribute editing also keep changes scoped to the work the operator chooses. [Read the full Order Manager update](https://www.hotwax.co/product-updates/2026-09/order-manager-order-investigation).

*Sources: [Order Manager timeline](https://github.com/hotwax/order-manager/blob/v1.3.0/src/utils/orderTimeline/transactions.ts), [Item transfer controls](https://github.com/hotwax/order-manager/blob/v1.3.0/src/components/orders/OrderItemTransfersModal.vue), [Selected-item actions](https://github.com/hotwax/order-manager/blob/v1.3.0/src/composables/useOrderActions.ts)*

### Keep queue counts, product identifiers, and form choices consistent

The Funnel's Unfillable Parking count and its drilldown use the same order population. Configured primary and secondary product identifiers carry through customer order cards, return details, custom swaps, and substitute selection. Totals also distinguish tax already included in the price from additional charges.

Create Order validates blank or nonpositive quantities beside the item and shows progress while submitting the order to Shopify. Order and task date filters restrict future dates and ranges whose start follows their end. Customer detail, amounts, dates, and icon controls use more consistent formatting and labels across the app.

*Sources: [Unfillable queue](https://github.com/hotwax/order-manager/blob/v1.3.0/src/views/UnfillableOrders.vue), [Product identifiers](https://github.com/hotwax/order-manager/blob/v1.3.0/src/views/ReturnDetail.vue), [Included tax](https://github.com/hotwax/order-manager/blob/v1.3.0/src/components/orders/OrderItemsSegment.vue), [Order creation](https://github.com/hotwax/order-manager/blob/v1.3.0/src/views/CreateOrder.vue), [Date filters](https://github.com/hotwax/order-manager/blob/v1.3.0/src/components/common/DateFilterSelect.vue)*

## Company

### Investigate Shopify inventory and transfer synchronization

Shopify inventory history connects each event to its product, location, source, delivery state, and timing. Filters remain in the URL, and summary cards describe the selected events, including waiting work, delivery errors, delivery times, and the oldest undelivered change. Event and batch details expose the saved message and error context; resending retries the saved batch.

Transfer sync brings jobs, webhook health, shipment stages, receipts, and outstanding work into one workspace. Teams can open the affected transfer, distinguish reported issues from successful checks, and investigate mapping conflicts with the Shopify variant information in view. [Read the full Shopify diagnostics update](https://www.hotwax.co/product-updates/2026-09/company-shopify-diagnostics).

*Sources: [Inventory event history](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/ShopifyInventoryEventHistory.vue), [Batch details](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/components/shopify/InventoryEventBatchModal.vue), [Transfer sync detail](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/ShopifyTransferSyncDetail.vue)*

### Review notification subscriptions and connect external assistants

Administrators can inspect stored BOPIS, Fulfillment, and Receiving notification subscriptions, filter by facility or user, and find events with no subscribers. When every returned record belongs to the signed-in user, the page warns that the results may be limited to that user.

Company also adds an OMS Model Context Protocol (MCP) setup guide with a connection URL, instructions for Codex, Claude, and Antigravity, and a read-only verification prompt. The guide points administrators to the existing OMS access-token settings when needed.

*Sources: [Notification subscriptions](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/NotificationSubscriptions.vue), [Assistant connection guide](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/agent/McpSetup.vue)*

### Keep administration choices aligned with saved records

An empty user search can open Create user for permitted administrators with the searched name prefilled, and user details display creator attribution. Shopify mapping edits clear obsolete entries, completed product imports show partial outcomes when successful counts are omitted, and transfer webhook registration defaults to the connected OMS receiver while allowing another callback.

NetSuite inventory variance reason selections also follow the current group membership, including reasons removed from the group.

*Sources: [User creation handoff](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/Users.vue), [Shopify mapping changes](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/composables/useShopify.ts), [Import outcomes](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/utils/shopifyProductSyncWizard.ts), [Transfer webhook defaults](https://github.com/hotwax/company/releases/tag/v2.3.0), [Variance reason membership](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/views/InventoryVariances.vue)*

## Products and product calendar

### Use lifecycle dates in inventory rules

Company maps Shopify product and variant metafields to introduction, launch, support end, and sales end dates. Products adds a read-only calendar view for reviewing those dates by product store and following the mapping setup back to Company.

Order Routing can use days since or days until a selected date in threshold, safety stock, pickup, and shipping rules. These conditions follow the configured rule schedule and whole-day comparisons; a product without the chosen date does not match. [Read the full product calendar update](https://www.hotwax.co/product-updates/2026-09/product-calendar-inventory-windows).

*Sources: [Products calendar](https://github.com/hotwax/products/blob/b6699142b88364a8aa14e0c7ca16e8d442ff0431/src/views/ProductCalendar.vue), [Company calendar mappings](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/components/shopify-product-sync/ProductCalendarMappingsCard.vue), [OMS calendar support](https://github.com/hotwax/oms/releases/tag/v3.3.1), [Shopify date sync](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.2)*

## Order Routing

### Review stock movements, demand, and incoming inventory together

Inventory Find supports multiple facilities and filters for available to promise (ATP), quantity on hand, safety stock, pickup eligibility, and brokering eligibility. Shareable filters and explicit retry states make a saved inventory review easier to repeat.

The Replenishment card adds 30-day ATP history, sales velocity, and incoming units from outstanding orders, expected return receipts, and requested inventory transfers. Operators can review the source movements and edit reorder point, maximum stock, and reorder quantity. Inventory history retains known changes when a resulting balance is unavailable, and adds return and variance context where the supporting integration is configured. [Read the full inventory and replenishment update](https://www.hotwax.co/product-updates/2026-09/order-routing-inventory-replenishment).

*Sources: [Replenishment card](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/ReplenishmentCard.vue), [Replenishment metrics](https://github.com/hotwax/order-routing/blob/v2.4.1/src/composables/useReplenishmentMetrics.ts), [Inventory history](https://github.com/hotwax/order-routing/blob/v2.4.1/src/views/InventoryDetail.vue)*

### Retain the intended filters when editing routing

Product tag and feature pickers search matching values as you type. The facility order limit override is an explicit condition: adding it bypasses the limit, and removing it restores normal limits.

Saved filters retain their chosen comparison operators, including proximity and multi-value include or exclude selections. Switching OMS instances refreshes the product store selector and clears reference data from the previous connection.

*Sources: [Product filter search](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/AddProductFiltersModal.vue), [Facility limit conditions](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/RuleDetails.vue), [Saved filter comparisons](https://github.com/hotwax/order-routing/blob/v2.4.1/src/utils/routingWorkingCopy.ts), [Instance switching](https://github.com/hotwax/order-routing/blob/v2.4.1/src/store/userStore.ts)*

### Prepare simulation work through a guided setup screen

Order Routing adds a guided simulation setup screen for connecting a simulation environment, preparing a data copy, selecting a routing baseline and optional variation, and following a run. Completing this workflow requires the simulation service and matching connection endpoints on the retailer's instance.

*Sources: [Simulation setup steps](https://github.com/hotwax/order-routing/blob/v2.4.1/src/config/simulationSetupSteps.ts), [Simulation connection contract](https://github.com/hotwax/order-routing/blob/v2.4.1/src/services/SimulationSetupService.ts)*

## Transfers

### Manage direct inventory transfer requests

The Transfers app adds an Inventory transfers view for requesting, finding, executing, and cancelling a one-product movement between facilities. Requests can reference an order and item, and creation stays separate from the inventory adjustment.

Execution reduces quantity on hand and ATP at the source and increases both at the destination by the same quantity. Cancellation closes the request without changing stock. This direct adjustment workflow remains separate from transfer orders that need picking, shipping, and receiving. [Read the full inventory transfer request update](https://www.hotwax.co/product-updates/2026-09/inventory-transfer-requests).

*Sources: [Inventory transfers view](https://github.com/hotwax/transfers/blob/c2e3f7efcdcaaa65b562d693654f50da6fee5a20/src/views/InventoryTransfers.vue), [OMS transfer execution](https://github.com/hotwax/oms/blob/v3.2.0/service/co/hotwax/oms/product/InventoryTransferServices.xml)*

## Shopify inventory and transfers

### Publish physical location and kit inventory with more context

Physical Shopify locations can receive inventory events with retained source and retry context. Publishing activates an inventory item at a location when needed, while changes already represented by the originating Shopify shop or its native transfer workflow avoid a second generic adjustment.

Physical location resets publish available-to-promise inventory. Kit resets derive complete kits at each eligible facility before combining channel quantities, so components spread across different stores do not create a kit no single store can fulfill. Dedicated kit jobs require shop configuration and activation. [Read the full location and kit inventory update](https://www.hotwax.co/product-updates/2026-09/shopify-location-and-kit-inventory).

### Connect approved transfer orders to Shopify execution

With both endpoints mapped into one Shopify shop, an approved transfer order can create a native Shopify transfer and carry shipment, receipt, and cancellation activity between the linked records. The workflow stages complete orders, retains event relationships for replay, and can add new transfer lines before sending their later activity.

Create and update jobs require setup and activation for each shop. Transfer actions awaiting confirmation also defer affected product and location pairs in physical stock-on-hand resets. [Read the full native transfer synchronization update](https://www.hotwax.co/product-updates/2026-09/shopify-native-transfer-sync).

*Sources: [Shopify connector v4.2.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.2.0), [v4.2.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.2.2), [v4.3.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.0), [v4.3.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.2)*

## Store pickup and fulfillment

### Identify variants and keep pickup work visible

The BOPIS (Buy Online Pick-Up In Store) app shows existing product features across order items, kit components, and exception confirmations. Ship to Store tabs load their own queues, rejection displays require actual rejected items, and notification enrollment can register a device even before preferences exist.

Retailers can opt in to send Shopify's ready-for-pickup notification after an eligible pickup shipment is packed. This marks pickup readiness rather than the customer's collection. Fulfillment also passes the entered search text when assigning or changing a picker.

*Sources: [Variant information](https://github.com/hotwax/bopis/pull/844), [Ship to Store queues](https://github.com/hotwax/bopis/pull/864), [Notification enrollment](https://github.com/hotwax/bopis/pull/859), [Picker search](https://github.com/hotwax/fulfillment/pull/1699), [Shopify pickup readiness](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.0)*

## Shopify returns, exchanges, and payments

### Keep returned stock and financial adjustments connected

Shopify return imports retain separate return and refund identities, exchange discounts, and the original order context on returned inventory receipts. Configured reason mappings retain associate notes, refunds without returned goods receive an appeasement line, and empty cancelled returns no longer produce a false creation error.

Included tax stays separate from added tax across orders, returns, and exchanges. When a multi-quantity line is split, its included tax is divided across units and the rounding remainder stays with the final unit. Payment synchronization also keeps a later pending or capture transaction from downgrading an authorized payment.

*Sources: [Shopify connector v4.2.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.2.0), [v4.3.0](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.0), [v4.3.2](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.2)*

## Receiving and Cycle Count

### Keep receiving history and count creation easier to review

Receiving history shows configured product identifiers and features beside received and rejected quantities, the receiver, and the time. Cycle Count resolves permitted facilities before selecting a Shopify POS location, accepts uploaded and manually created count files using the current backend contract, and restores side-menu access on administrator mobile pages.

*Sources: [Receiving history](https://github.com/hotwax/receiving/blob/7fd8a25e50dac5477eb2940f263853e8457101d4/src/views/ReceivingHistoryModal.vue), [Cycle Count facility access](https://github.com/hotwax/inventory-count/pull/1461), [Count creation](https://github.com/hotwax/inventory-count/pull/1459), [Mobile navigation](https://github.com/hotwax/inventory-count/pull/1421)*

## Job Manager

### Review whether an import raises downstream data feeds

September's Job Manager release shows Feed on or Feed off for import configurations, adds a matching filter, and lets administrators edit supported import settings. The Data Feed setting makes the choice explicit: an enabled import raises Data Document events for downstream feeds; a disabled import writes rows without those events. The configuration keeps the import service and ID read-only.

*Sources: [Import configuration editor](https://github.com/hotwax/job-manager/blob/v3.4.0/src/views/ImportDetail.vue), [Import feed status](https://github.com/hotwax/job-manager/blob/v3.4.0/src/views/ManualUploads.vue)*

### Find system messages and validate report definitions before saving

Message Type filtering is searchable by ID or description while retaining the selected parent type. Data Document IDs are checked against the 40-character limit before saving, with guidance to shorten the name or edit the ID in Advanced metadata.

Job configuration preserves already serialized map parameters, avoids rewriting an unchanged schedule, and selects the matching connection record for the current Shopify shop.

*Sources: [Message type search](https://github.com/hotwax/job-manager/pull/1108), [Data Document validation](https://github.com/hotwax/job-manager/pull/1111), [Job parameters](https://github.com/hotwax/job-manager/pull/1109), [Schedule changes](https://github.com/hotwax/job-manager/pull/1105), [Shop connection selection](https://github.com/hotwax/job-manager/pull/1107)*

## System and core updates

### Review interrupted Data Manager work

Data Manager administration adds cancellation for queued or running files, partial record counts, failure logs, and controlled deletion. Cancellation takes effect at processing checkpoints; records already imported remain in place. Runner and purge views also make active processing and cleanup easier to inspect.

*Sources: [Maarg utilities v4.3.0](https://github.com/hotwax/hotwax-maarg-util/releases/tag/v4.3.0)*

### Retain operational context across inventory and integrations

Inventory services add creation-time movement history, original return context, and applied Cycle Count decision history. Inventory variances record the authenticated user, and external reset movements carry an effective date. When negative stock is disallowed, inventory adjustments check quantity on hand so units committed to an order can still be removed when they are physically missing.

September NetSuite releases bring connection credentials into the current configuration path, add configured custom-field support, and preserve the source facility of inventory transfers in order feeds. Return-linked exchange orders can export with partial payments, while ordinary partially paid point-of-sale orders retain their existing exclusion. Legacy OMS targeted Shopify imports can delegate to asynchronous Data Manager processing with status and error records.

Shared app components retain device identity across logout, keep instance cookies aligned with token expiry, and recognize app-version paths with release suffixes. Image previews can display the existing thumbnail while the full image loads.

*Sources: [OMS v3.3.0](https://github.com/hotwax/oms/releases/tag/v3.3.0), [Inventory adjustments](https://github.com/hotwax/hotwax-poorti/blob/v3.3.2/service/co/hotwax/poorti/FulfillmentServices.xml), [NetSuite connection setup](https://github.com/hotwax/mantle-netsuite-connector/blob/v3.2.0/screen/NetSuiteConfiguration.xml), [NetSuite order feed source locations](https://github.com/hotwax/mantle-netsuite-connector/blob/v3.2.0/service/co/hotwax/netsuite/OrderServices.xml), [NetSuite v3.3.0](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.3.0), [Legacy OMS v9.2.0](https://github.com/hotwax/hotwax-oms/releases/tag/v9.2.0), [Device identity](https://github.com/hotwax/accxui/pull/173), [Session lifetime](https://github.com/hotwax/accxui/pull/168), [Version paths](https://github.com/hotwax/accxui/pull/175), [Image previews](https://github.com/hotwax/accxui/blob/b588924e4c1fe683c6a19841e88a918df8845af9/common/components/ImageModal.vue)*
