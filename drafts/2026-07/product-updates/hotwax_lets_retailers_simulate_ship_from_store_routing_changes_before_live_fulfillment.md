---
title: HotWax lets retailers simulate ship-from-store routing changes before live fulfillment
slug: product-updates/2026-07/hotwax-lets-retailers-simulate-ship-from-store-routing-changes-before-live-fulfillment
contentType: product-update
month: 2026-07
metaDescription: Ship-from-store routing policy affects customer promises, store workload, inventory exposure, and transportation distance. A small change to safety stock, faci…
tagNames: [Product Update]
key: product-update:2026-07:hotwax-lets-retailers-simulate-ship-from-store-routing-changes-before-live-fulfillment
sourceFaq: routing-simulation.md
---

### Routing changes need a proving ground

Ship-from-store routing policy affects customer promises, store workload, inventory exposure, and transportation distance. A small change to safety stock, facility participation, capacity, or rule order can move a large amount of work across the network.

HotWax Commerce introduces Routing Simulation so teams can study that impact before changing live fulfillment. Instead of reasoning from one order or waiting for production results, a team can compare the current routing setup with controlled policy variations.

### Compare a baseline with practical variations

A simulation can start with the current routing group and add variants for the decisions a retailer is considering. Teams can test lower safety stock, different facility groups, store order limits, distance rules, assignment behavior, inventory sorting, and rule sequence.

Each variation remains in the simulation environment. The first release does not apply a winning variation to live routing configuration, so the review and production change remain separate decisions.

### Review network impact and order-level reasons

Results show how many order items were attempted, brokered, queued, or left unfillable. Teams can compare facility workload and final outcomes across variants, then inspect the order and rule context behind a result.

This makes it possible to distinguish a healthy improvement from a policy that routes more orders by concentrating too much work in a small number of stores. It also gives implementation and operations teams a shared record for discussing why one variation is safer than another.

### Keep simulation isolated from live fulfillment

Routing Simulation uses an isolated data context built from production-shaped source data. Proposed variations, simulated inventory consumption, facility capacity, results, and exports stay in the simulation environment. The run does not change live orders, reservations, inventory, facility counts, or routing configuration.

The isolated model also supports saved scenarios and repeated analysis. A team can retain a promotion or expansion scenario, revise its variants, and compare a new run without rebuilding the decision from scratch.

### Use Test Drive and Routing Simulation for different questions

Test Drive remains the right tool for explaining how the current rules treat one order. Routing Simulation answers a broader policy question: how would a proposed change affect a bounded set of orders and facilities?

Together, the two workflows move routing analysis from diagnosis to decision support. Teams can explain an individual outcome, compare network-level alternatives, and make the live configuration change only after the operational trade-offs are understood.
