---
title: HotWax turns pick profiles into business-controlled downstream sync queues
slug: product-updates/2026-06/hotwax-turns-pick-profiles-into-business-controlled-downstream-sync-queues
contentType: product-update
month: 2026-06
metaDescription: Downstream fulfillment systems do not always need every eligible order at once. Retailers may need to hold back work by facility, priority, customer segment, d…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-turns-pick-profiles-into-business-controlled-downstream-sync-queues
sourceFaq: pick-profiles-downstream-sync-queuing.md
---

### Pick profiles as release policies

Downstream fulfillment systems do not always need every eligible order at once. Retailers may need to hold back work by facility, priority, customer segment, delivery promise, order age, or downstream capacity.

### What changed

Poorti adds fulfillment order sync configuration APIs for pick-profile driven queues, including conditions, filters, customer classification, order priority, rush-order sorting, and batch behavior.

### How the workflow operates

A pick profile can define which work enters a downstream queue and in which order. The configuration becomes auditable and reusable instead of being hidden inside a scheduled job or integration script.

### Operational impact

Operations teams gain a business-controlled release valve for WMS, 3PL, and fulfillment sync, reducing backpressure without requiring code changes for each queue policy.

*Sources: [hotwax-poorti#271](https://github.com/hotwax/hotwax-poorti/pull/271), [hotwax-poorti#274](https://github.com/hotwax/hotwax-poorti/pull/274), [hotwax-poorti#262](https://github.com/hotwax/hotwax-poorti/pull/262), [hotwax-oms#620](https://github.com/hotwax/hotwax-oms/pull/620)*
