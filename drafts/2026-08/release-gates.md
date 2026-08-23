# August 2026 release gates

Status checked on August 23, 2026. This file is an internal publishing control and is not HubSpot content.

## Publishable from released evidence

The following drafts are backed by an August application or component release. Their source links and exact claims still need the normal editorial read-through, but they do not depend on an open pull request.

- Shopify fulfillment-location reconciliation
- Event-driven Shopify inventory publishing, excluding the Data Manager batch path from `mantle-shopify-connector#591`
- Company integration control center, excluding the expanded job controls from `company#364`
- Multi-company OMS management and NetSuite subsidiary mapping
- Connected transfer-order workflow
- Cycle Count creation and variance decisions
- Order Routing inventory monitoring and schedules

## Release-gated content

### Job Manager dashboard drilldowns and Shopify Bulk Operations

- Required pull requests: `job-manager#1071` and the dependent Bulk Operations stack beginning with `job-manager#1073`
- Current evidence: both pull requests are open and mergeable, but GitHub reports them as blocked
- Publish gate: all required changes merged into `main`, included in a Job Manager release tag, and the released app verified against the intended backend
- Screenshot gate: capture only from the released build, with a dashboard metric opening its exact drilldown and a Bulk Operation showing both Shopify and HotWax state

### Order Manager returns and hold management

- Required pull requests: `order-manager#486`, `order-manager#488`, and `order-manager#492`
- Current evidence: the changes are merged, but the latest Order Manager release remains `v1.2.0` from August 14, before `#486` merged on August 18
- Publish gate: a new Order Manager release tag contains the merged work and the Returns and Holds routes are verified in that released build
- Screenshot gate: capture the Returns list and a Holds view that demonstrates a non-dedicated purpose without exposing customer data

### Order Manager Funnel accuracy, navigation, and accessibility

- Required pull requests: the linear stack `order-manager#500` through `order-manager#504`
- Current evidence: the first and last pull requests are open and mergeable; GitHub reports the stack as unstable pending its required checks or reviews
- Publish gate: the complete stack merged into `main`, included in an Order Manager release tag, and verified while switching product stores rapidly enough to exercise stale-response protection
- Screenshot gate: capture the selected store, timezone-aware clock, and an order link from the released build; accessibility behavior should be verified separately because it cannot be proven by a screenshot

## Merged after the latest release

These changes can become short additions to an existing update after a containing release is published. They are excluded from current public claims.

- `mantle-shopify-connector#591`: moves absolute inventory publication through Data Manager. It merged after connector `v4.1.7` was published.
- `company#364`: adds deeper inventory-sync job visibility and controls. It merged after Company `v2.2.1` was published.

## Explicit exclusions

- Product Store onboarding is removed from the August content plan.
- `company#368` is excluded because its Fulfillment Sync Health view is backed by fixture data rather than live operational data.
- `company#367` is excluded while it remains open and stacked on the removed Product Store onboarding branch.
- Backend or API pull requests are not presented as user-facing releases unless a released application or documented integration path consumes them.
