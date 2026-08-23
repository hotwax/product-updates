---
title: HotWax explains Online ATP and brings inventory update jobs into Order Routing
slug: product-updates/2026-08/order-routing-inventory-monitoring-and-schedules
contentType: product-update
month: 2026-08
metaDescription: Order Routing explains how Online ATP is computed and adds schedules, queue state, Data Manager files, and run controls for inventory updates.
tagNames: [Product Update]
key: product-update:2026-08:order-routing-inventory-monitoring-and-schedules
releaseStatus: released
---

When an online inventory number looks wrong, the useful question is not only what the number is. Teams need to know which facilities contributed to it, which rules reduced it, whether queued demand was included, and whether the resulting update has reached the sales channel.

The August HotWax Commerce Order Routing release connects that calculation with the jobs that publish its result.

### Move between channel and location views

Inventory pages can switch between sales-channel and physical-location scope. The selected scope is carried in the URL, making an investigation shareable and allowing the browser history to behave like a normal navigation tool.

In channel view, each product shows its Online available-to-promise quantity, or Online ATP, and the threshold applied to the channel. A calculation walkthrough then explains how the system reached the value.

The walkthrough begins with physical ATP and follows facility membership into the channel. It shows the effect of brokering participation, excluded facilities, safety stock, inventory thresholds, and demand waiting in the virtual queue. The final comparison places the computed result beside the authoritative Online ATP stored by the OMS.

This makes the page an investigation surface, not a second inventory calculator. It can show where a result came from while retaining the OMS value as the operational record.

### Compare the OMS with Shopify

A reconciliation view places OMS Online ATP beside live Shopify inventory for the selected scope. Teams can see whether the current values agree and review the recent job history involved in publishing them.

The history calculation also stops presenting a missing prior balance as a real movement from zero. If the system cannot establish the previous value, the interface does not manufacture a false change simply to complete the row.

### Operate inventory update schedules

The Inventory Updates page brings rule runs, Data Manager files, schedules, and recent execution into one workspace. It distinguishes queued, processing, and failed files and identifies when a Data Manager record belongs to an OMS-wide process rather than only the currently selected channel.

Supported schedules can be paused, resumed, edited, or run immediately. This lets a team move from an unexpected inventory result to the responsible processing job without leaving Order Routing to search through a general scheduler.

Dashboard queue metrics now use a backend-aware adapter and show Unavailable when the source cannot be reached. A failed request no longer appears as a healthy queue with zero work.

The combined release gives inventory teams a continuous path: explain the number, compare it with the channel, inspect the publishing queue, and act on the schedule that moves it.

*Sources: [order-routing#504](https://github.com/hotwax/order-routing/pull/504), [order-routing#547](https://github.com/hotwax/order-routing/pull/547), [order-routing#549](https://github.com/hotwax/order-routing/pull/549), [order-routing v2.2.0](https://github.com/hotwax/order-routing/releases/tag/v2.2.0)*
