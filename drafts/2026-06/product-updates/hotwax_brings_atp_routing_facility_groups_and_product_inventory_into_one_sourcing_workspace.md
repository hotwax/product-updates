---
title: HotWax brings ATP, routing, facility groups, and product inventory into one sourcing workspace
slug: product-updates/2026-06/hotwax-brings-atp-routing-facility-groups-and-product-inventory-into-one-sourcing-workspace
contentType: product-update
month: 2026-06
metaDescription: Routing decisions depend on ATP rules, facility groups, inventory channels, product-facility settings, and brokering rules. When those controls live in separat…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-brings-atp-routing-facility-groups-and-product-inventory-into-one-sourcing-workspace
sourceFaq: unified-routing-sourcing-workspace.md
---

### One workspace for sourcing decisions

Routing decisions depend on ATP rules, facility groups, inventory channels, product-facility settings, and brokering rules. When those controls live in separate apps, teams can change one part without seeing the full fulfillment impact.

### What changed

Routing, ATP, facility groups, inventory channels, product inventory, and brokering controls are moving into one workspace. The supporting APIs expose richer facility, product-facility, and inventory context.

### How the workflow operates

Teams can inspect which inventory can be promised, which facilities participate, which rules protect inventory, and which routing decision should receive the order. Substitute inventory can also be considered when the requested SKU is unavailable.

### Operational impact

Sourcing changes become easier to reason about because the controls and their fulfillment consequences live in one operating model.

*Sources: [oms#578](https://github.com/hotwax/oms/pull/578), [oms#632](https://github.com/hotwax/oms/pull/632), [oms#655](https://github.com/hotwax/oms/pull/655), [oms#659](https://github.com/hotwax/oms/pull/659), [oms#600](https://github.com/hotwax/oms/pull/600), [oms#621](https://github.com/hotwax/oms/pull/621), [oms#667](https://github.com/hotwax/oms/pull/667), [OrderRouting#121](https://github.com/hotwax/OrderRouting/pull/121), [oms#536](https://github.com/hotwax/oms/pull/536)*
