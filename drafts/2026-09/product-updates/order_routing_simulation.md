---
title: HotWax Commerce previews a guided Routing Simulation workflow
slug: product-updates/2026-09/order-routing-simulation
contentType: product-update
month: 2026-09
metaDescription: A preview of guided Routing Simulation setup connects data-copy preparation, saved policy variations, and order-level results for routing review.
tagNames: [Product Update]
key: product-update:2026-09:order-routing-simulation
releaseStatus: published
---

Changing a routing rule can move work from warehouses to stores, protect more stock for walk-in customers, or leave more orders waiting. A single order rarely shows the whole trade-off. HotWax Commerce's Routing Simulation gives teams a place to compare proposed policies against the same copied orders and inventory before deciding what to change in live fulfillment.

September's Order Routing app adds a preview of guided setup and result review around the simulation service. The preview requires matching connection services on the retailer's instance; the app update alone does not provide a connected simulation environment. The workflow below describes how that configured environment supports a routing decision.

## Prepare a separate copy of the operating network

Simulation uses a separate environment rather than live fulfillment. The preview organizes preparation into eight steps: test the connection, select or create a copy, open it, fill it, confirm readiness, choose a baseline group, optionally create a variation, and submit a run.

The copy brings together facilities, routing configuration, products, inventory, and queued-order data from the configured source. A new copy starts empty. The background fill shows task status and copied-row counts, helping teams follow preparation and inspect a failed task. An existing ready copy can be reused without another fill.

Readiness and routing validation answer different questions. The copy must finish preparation, and the selected group must have references that resolve inside that copy. If a rule points to a missing facility group or another unresolved reference, the preview asks the team to repair the copy or choose another group.

## Keep the baseline separate from the proposed policy

The baseline is the routing group copied from the source environment. A variation starts as a named clone. Cloning does not change the policy by itself; the team edits the variation to express the decision it wants to test.

Teams can compare inventory filters, facility-group choices, assignment behavior, rule order, or actions for items a rule cannot assign. The variation editor shows additions, removals, changed values, and reordered settings against the baseline. Teams can reset a section or the whole working variation when an experiment needs another direction.

Saved variations remain in the simulation environment. Unsaved changes must be resolved before a run, keeping the result tied to the policy that was actually saved. A team can run the baseline alone or submit the baseline and a selected variation together. Running a variation does not replace the live routing group's configuration.

## Compare alternatives from the same starting point

Routing consumes stock and uses facility capacity as it assigns orders. Without restoring those values, the first policy tested would leave a different starting point for the next one.

The simulation service restores the copied inventory and facility order counts before each routing run. Each alternative therefore begins from the copy's original values, including when a team runs another simulation against the same copy. Changes made by the simulation stay in that environment rather than becoming live reservations or fulfillment work.

This makes a comparison useful for a specific snapshot. It is not a forecast of future receipts, store sales, or customer demand. If the team needs to evaluate a newer operating situation, it needs a new source-data copy.

## Read the outcome, then inspect the orders behind it

Results show how many order items the routing attempted, assigned to facilities, or left queued. Completed comparisons show the change in assigned and queued items relative to the baseline. These are item counts, not a promise that every order ships complete.

Routing outcomes break those counts down by routing. Item outcomes add the order, item, product, facility, routed quantity, and recorded final reason. Teams can move from a better total to the actual assignments behind it, then examine whether the proposed policy sends work to the intended locations. A queued item remains part of the outcome even when no facility takes it.

A failed run keeps its recorded results for investigation, but the app marks them as potentially incomplete. A completed run that attempts no orders also calls for a check of the copied queue and routing filters, not a conclusion that the proposed policy works.

## Keep the review separate from the live change

Saved-run history lets teams reopen results and filter by status. A known saved-run ID also provides a way to check what happened after the browser loses contact. Saved runs keep their outcome rows inside the selected copy. Backend tools can export those results for further analysis; this is a file created on the simulation service, not an app download.

Test Drive and Routing Simulation answer different questions. Test Drive follows selected orders through a routing group. Routing Simulation compares policy alternatives across copied queued work. Neither a favorable comparison nor a saved variation automatically applies a policy to production; teams review the trade-offs and make the live change separately.

The guided workflow remains a preview until the separate simulation service, source-data connection, and matching order management connection services are deployed and configured. With that connection in place, teams can review both assignment totals and the locations taking the work before choosing a live policy.

*Sources: [Guided setup steps](https://github.com/hotwax/order-routing/blob/v2.4.1/src/config/simulationSetupSteps.ts), [Setup and readiness controls](https://github.com/hotwax/order-routing/blob/v2.4.1/src/views/SimulationSetupWizard.vue), [Saved variations and comparison runs](https://github.com/hotwax/order-routing/blob/v2.4.1/src/store/simulationStore.ts), [Variation differences](https://github.com/hotwax/order-routing/blob/v2.4.1/src/utils/variationConfigDiff.ts), [Simulation results](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/simulation/SimulationResults.vue), [Saved-run history](https://github.com/hotwax/order-routing/blob/v2.4.1/src/components/simulation/PastSimulationsList.vue), [Data-copy preparation](https://github.com/hotwax/sim-routing/blob/v1.0.0/service/co/hotwax/order/routing/simulation/SimDatastoreFillServices.xml), [Simulation service](https://github.com/hotwax/sim-routing/blob/v1.0.0/service/co/hotwax/order/routing/simulation/SimRunServices.xml), [Restore before each run](https://github.com/hotwax/sim-routing/blob/v1.0.0/service/simrouting.secas.xml), [Result export](https://github.com/hotwax/sim-routing/blob/v1.0.0/src/main/groovy/co/hotwax/order/routing/simulation/BrokeringSimulationExporter.groovy)*
