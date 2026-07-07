---
title: HotWax adds product substitution logic for rescuing sold-out orders before they become cancellations
slug: product-updates/2026-06/hotwax-adds-product-substitution-logic-for-rescuing-sold-out-orders-before-they-become-cancellations
contentType: product-update
month: 2026-06
metaDescription: A sold-out SKU can make an order look unfillable even when a retailer has an approved substitute in stock. Without structured substitution, teams rely on manua…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-adds-product-substitution-logic-for-rescuing-sold-out-orders-before-they-become-cancellations
sourceFaq: product-substitution-logic.md
---

### Using substitute inventory during routing

A sold-out SKU can make an order look unfillable even when a retailer has an approved substitute in stock. Without structured substitution, teams rely on manual judgment or cancel the item.

### What changed

Routing can now account for substitute inventory when the requested product is unavailable but an eligible substitute exists at a candidate facility. The substitution work fits into the broader Routing and Sourcing workspace.

### How the workflow operates

Product associations define the substitute relationship. Routing and sourcing logic can evaluate substitute availability alongside facility, ATP, and product-inventory context, then expose the decision path for operational review.

### Operational impact

Retailers get a structured path to save orders that would otherwise become cancellations, while keeping the substitution rule visible and auditable.

*Sources: [oms#578](https://github.com/hotwax/oms/pull/578), [oms#632](https://github.com/hotwax/oms/pull/632), [oms#655](https://github.com/hotwax/oms/pull/655), [oms#659](https://github.com/hotwax/oms/pull/659), [oms#600](https://github.com/hotwax/oms/pull/600), [oms#621](https://github.com/hotwax/oms/pull/621), [oms#667](https://github.com/hotwax/oms/pull/667), [OrderRouting#121](https://github.com/hotwax/OrderRouting/pull/121), [oms#536](https://github.com/hotwax/oms/pull/536)*
