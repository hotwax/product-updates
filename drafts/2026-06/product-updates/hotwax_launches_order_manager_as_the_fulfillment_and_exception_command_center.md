---
title: HotWax launches Order Manager as the fulfillment and exception command center
slug: product-updates/2026-06/hotwax-launches-order-manager-as-the-fulfillment-and-exception-command-center
contentType: product-update
month: 2026-06
metaDescription: A fulfillment team should not have to start the day by stitching together open-order queues, facility dashboards, fraud holds, and messages from customer servi…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-launches-order-manager-as-the-fulfillment-and-exception-command-center
---

### Fulfillment work needs one operating surface

A fulfillment team should not have to start the day by stitching together open-order queues, facility dashboards, fraud holds, and messages from customer service. The important question is more direct: what is moving, what is blocked, and who needs to act before the customer promise is affected?

Order Manager is HotWax's command center for that work. It brings fulfillment health, exception ownership, and controlled resolution into one operating workspace, so teams can see the day’s work, follow the exception behind a number, and keep clean orders moving while the right person resolves the ones that need attention.

### Start with the order funnel, not a report

Order Funnel is the home page for the daily fulfillment picture. For the selected product store, it shows today’s order and ship-group volume, assignment progress, picked, packed, and shipped work, open-order backlog, unfillable orders, rejected work, and hold tasks. Metrics lead to the underlying queues rather than leaving an operator to interpret a report and then search for the work.

Teams can then narrow from the product store to an individual facility. Facility views show fill rate, allocated and packed orders, pending fulfillment, oldest assigned work, and open or in-progress orders. Where fulfillment sync is configured, the same view shows the pending count, queue rules, batch size, schedule, and active or paused state. That makes the dashboard a practical starting point for the day: identify the constraint, open the queue behind it, and act.

### Turn holds into accountable exception work

An order can be blocked for more than one reason at the same time. A bad address, a fraud review, a substitution decision, and a shipment exception should not collapse into one opaque status with no clear owner.

Order Tasks give each exception its own record with a purpose, status, assignee, description, order and customer context, and, where appropriate, ship-group context and a resolution comment. Teams can work from Hold, Bad Address, Swap, and Fraud queues, assign the work, resolve it from the task card, or open the full order.

This turns a hold from a vague stop signal into accountable work: the team can see what is wrong, who owns the next step, and what was recorded when the task was resolved.

### Use Shopify risk as a fulfillment decision

Shopify risk data is only useful if it changes what happens before an order reaches a warehouse or 3PL. Order Manager connects that signal to the exception workflow. The Shopify bridge brings recommendations, provider assessments, risk levels, and facts into OMS, where order approval can evaluate them.

Clean and no-risk orders can continue through the normal fulfillment flow. Pending assessments defer approval until Shopify completes its evaluation. Investigate and cancel recommendations follow the configured review or cancellation path. A Fraud task shows the customer, payment, items, recommendation, provider assessments, levels, and facts; the reviewer can resolve the task, cancel the order, or open the full order.

### Resolve unfillable demand before it becomes a cancellation

An unfillable item is not always an order that has to be cancelled. The original SKU may be out of stock while a configured substitute is available at the assigned facility.

Order Manager turns that opportunity into a visible Swap task. The user can review the original item, suggested replacements, facility inventory, pricing, and customer context; choose a different product when the configured substitute is not right; cancel only the affected item; cancel the order; or park the ship group. Completing the action also completes the task.

### Release only work that is safe to send downstream

Resolving an exception is not the same thing as releasing an order into fulfillment. Pick Profiles provide a controlled release step. A profile group is scoped to a facility and can run on a schedule; its active profiles apply configured filters, sorts, and batch limits to approved ship groups.

The ready-to-pick query excludes virtual facilities, ship groups whose fulfillment has already started, and ship groups with an unresolved `RESOLVE_ONHOLD_ORDER` task. The selected work becomes fulfillment waves and picklists. In Order Manager, the Funnel shows the related fulfillment-sync queue, sort rules, batch size, schedule, and pause state for the selected facility.

### Preserve Shopify-assigned fulfillment

Not every line item should arrive as unassigned demand. A Shopify app may already have assigned a fulfillment service for work handled by a third-party provider.

For product stores configured to use those assignments, the Shopify order import maps the service name to the corresponding HotWax facility. Assigned and unassigned items can remain in separate ship groups, preserving the third-party allocation without flattening the order into a single fulfillment path.

### Keep the order and customer context close

Ship-group detail shows shipping information and negative-reservation context, with actions to update shipping information or park the affected ship group. The same controls can park the full order, with safeguards that stop the action after fulfillment has started.

Customer 360 gives service teams a separate customer workspace with search, orders, returns, communications, relationships, and open tasks. That keeps the customer context close without forcing every workflow through an order-only view.

Together, these capabilities give operations and customer-service teams a shared place to run fulfillment work: see the constraint, open the affected queue, resolve the exception with the relevant context, and release only eligible work.
