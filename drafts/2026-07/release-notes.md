---
title: July 2026 apps release notes
slug: release-notes/2026-07
contentType: release-note
month: 2026-07
metaDescription: July brings more of the retail operating day into focused HotWax Commerce apps. Teams can administer the OMS from Company, compose governed agents, test routin…
tagNames: [Release Note]
key: release-notes:2026-07
---

# July 2026 apps release notes

July brings more of the retail operating day into focused HotWax Commerce apps. Teams can administer the OMS from Company, compose governed agents, test routing ideas, work order exceptions with better context, monitor integrations, and protect store inventory from duplicate receiving actions.

## Company

### Set up the operating network in one administration app

Company now brings Shopify connections and location imports, facilities, users, security groups, and application access into one administration workspace. When importing Shopify locations, administrators can review existing OMS mappings and choose whether each new facility is a retail store or warehouse before creating it.

The same workspace can create payment and shipment method types with their Shopify mappings. This keeps channel configuration beside the connection it belongs to instead of spreading setup across unrelated screens.

### Preview a guided product store setup

Company includes a preview of guided product store onboarding. The flow organizes product store, Shopify, order, inventory, and product readiness into a resumable setup path while keeping the existing configuration screens available. Steps that depend on newer backend services remain visibly unavailable until those services are deployed.

## Agent Composer and Workforce

### Build agents from governed OMS capabilities

Agent Composer is the Company workspace for defining an agent's purpose, instructions, model, reasoning level, and approved tools. Teams can preview a draft before activation and decide which tool calls can run directly and which must wait for a person.

Workforce is where active agents hold conversations. It shows assistant messages, tool calls, pending decisions, and the outcome of each approval or denial. The first release focuses on user-started conversations and explicit tool grants, giving teams a controlled starting point for order investigation, job monitoring, fulfillment research, and other repeatable OMS work.

## Order Manager

### Work hold queues without losing the order context

Operators can create a hold task from the order detail page, choose a workflow purpose, clear queue filters, and review risk work inside the same Holds area as other exceptions. Queue pages now show real loading and failure states instead of leaving an empty surface when data is still loading or a request fails.

### Carry delivery estimates and exchange lineage with the order

The OMS calculates estimated ship and delivery dates for fulfillment-required shipment groups when an upstream channel does not provide them. Order reads can also follow item associations in reverse, allowing an exchange item to point back to the original order item without relying on naming patterns.

## Job Manager

### Make message and job history easier to investigate

Job Manager separates draft jobs from paused and unscheduled work. Message History can filter inbound and outbound traffic, job runs appear newest first, list filters survive navigation through URL parameters, and history pages show an explicit loading state while records are retrieved.

### Release jobs left behind by an instance restart

Job monitoring identifies runs that started before the current system startup and provides a release action for work that can no longer complete. Administrators can clear the stale run and restore the job to an operable state instead of leaving it blocked indefinitely.

## Order Routing

### Compare routing changes before live fulfillment

Routing Simulation adds a controlled place to compare the current routing setup with proposed variations. Teams can test changes to safety stock, facility participation, capacity, distance, and rule sequence, then review how routed, queued, and unfillable outcomes change before making a live configuration decision.

Simulation uses an isolated data context and does not publish a variation back to production. Applying an approved routing change remains a separate action outside the first release.

### See routing performance beside inventory and pickup scope

The Order Routing dashboard adds routing performance and facility-order views. Inventory detail pages show a clearer history, while pickup selectors report matched product and facility counts as teams change tags, product filters, and facility groups.

## Store operations
### Move between apps and build cleaner transfers

Fast Travel is available in Transfers, Products, and Job Manager, so operators can use the shared application search without returning to Launchpad. Transfers also limits manual product selection to variants, preventing parent products from being added as inventory-moving items.

## Shopify and fulfillment services

### Preserve return and exchange state across Shopify sync

July connector releases add explicit handling for cancelled Shopify returns and separate exchange shipment groups by fulfillment status. This keeps return history and exchange fulfillment state aligned when Shopify changes the lifecycle after the original order has already entered the OMS.

### Accept manual tracking without sending the wrong completion message

The quick-ship service accepts manually entered tracking details when a label or carrier integration is not supplying them. Ship-to-store fulfillment also avoids the standard order-completion email from this path, leaving pickup communication to the intended store workflow.

## System and core updates

### Match each app release to its configured version

The shared application platform and the July app releases add version-aware loading across Job Manager, Receiving, Fulfillment, BOPIS, Cycle Count, and Transfers. Recent app releases can remain available on one host while the OMS selects the compatible build for each environment, allowing UAT and production to move on different schedules. The selected version also appears in the app URL, giving support teams an exact build reference when investigating an issue. [Read the full version-aware app delivery update](https://www.hotwax.co/product-updates/2026-07/hotwax-introduces-version-aware-app-delivery-for-controlled-oms-rollouts).
