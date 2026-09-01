# August 2026 release gates

Status checked on September 1, 2026. This file is an internal publishing control and is not HubSpot content.

## Final August publication set

The release note and these seven product updates are backed by August application or component releases:

- Shopify fulfillment-location reconciliation
- Event-driven Shopify inventory publishing
- Company integration control center
- Multi-company OMS management and NetSuite subsidiary mapping
- Connected transfer-order workflow
- Cycle Count creation and variance decisions
- Order Routing inventory monitoring and schedules

The month-end sweep confirmed that every pull request cited by these seven posts is merged. Every cited release is published, is not a draft or prerelease, and has an August 2026 publication date.

Two changes that were gated on August 23 are now included:

- `company#364` is part of Company `v2.2.2`. The Company update now covers every job in the Shopify inventory publishing workflow and editable job parameters.
- `mantle-shopify-connector#620` is part of `v4.1.8`. The fulfillment-location update now cites the release that makes the scheduled missed-fulfillment sweep executable without an interactive user.

## Deferred from August

These posts were removed from the August publication manifest because their release gates did not clear by August 31. Their draft text remains recoverable from commit `8983a17d`.

### Job Manager dashboard drilldowns and Shopify Bulk Operations

- `job-manager#1071`, `#1077`, `#1078`, `#1079`, and `#1081` remain open and blocked.
- `job-manager#1073`, `#1075`, `#1076`, and `#1080` closed without merging.
- The latest Job Manager release is still `v3.3.0`, published on August 14.
- Result: defer the complete post until a released implementation can be verified.

### Order Manager returns and hold management

- `order-manager#486`, `#488`, and `#492` merged on August 18.
- The latest Order Manager release is still `v1.2.0`, published on August 14.
- Result: defer the post until a later Order Manager release contains the merged work.

### Order Manager Funnel accuracy, navigation, and accessibility

- `order-manager#501`, `#502`, and `#503` merged on August 24, and `#504` merged on August 25.
- `order-manager#500` closed without merging.
- The latest Order Manager release is still `v1.2.0`, published on August 14.
- Result: defer the post because the original stack is incomplete and none of the merged changes has an application release.

## Excluded changes

- `mantle-shopify-connector#591` remains excluded. The `v4.1.8` release branch does not contain its merge commit, and the release changelog does not list it.
- Product Store onboarding remains outside the August content plan.
- `company#368` remains excluded because its Fulfillment Sync Health view uses fixture data rather than live operational data.
- `company#367` remains excluded because it is stacked on the removed Product Store onboarding work.
- Backend or API pull requests are not presented as user-facing launches unless a released application or documented integration path consumes them.
