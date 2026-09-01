---
title: HotWax turns Company into an integration control center
slug: product-updates/2026-08/company-integration-control-center
contentType: product-update
month: 2026-08
metaDescription: Company brings Shopify, NetSuite, carrier, Unigate, app-version, and batch-order controls into one HotWax Commerce administration workspace.
tagNames: [Product Update]
key: product-update:2026-08:company-integration-control-center
releaseStatus: released
---

Integration setup and integration operations are usually treated as separate concerns. One screen stores credentials and mappings, while another job, log, or support request reveals whether the connection is actually working. That separation makes routine questions harder than they need to be: Is the job scheduled? How much work is waiting? Which run failed? Can the team replay it safely?

The August Company releases bring more of those answers into the same HotWax Commerce app that holds the connection.

### Operate Shopify order and inventory flows

Batch Order Sync gives teams a guided way to configure order ingestion, monitor recent runs, and investigate the two processing stages behind an import. Supported jobs can be run, paused, resumed, or scheduled from the workspace, and eligible errors can be replayed without reconstructing the original request by hand.

The interface reports the facts available from each error instead of inventing a single friendly explanation for different failure types. Its local cache and background worker keep long operational lists responsive while the OMS remains the source of truth.

Inventory Sync adds the other side of the Shopify connection. It shows waiting inventory events, batches, jobs, recent resets, and publishing history for each shop. Teams can also see whether the supporting data feed is in manual or real-time mode. Together, the order and inventory workspaces make backlog and processing state visible beside the connection they belong to.

The latest August release makes every participating inventory job visible. Company shows one publisher for each inventory channel, the system-message sender, the manual discard tool, and the retention purge that explains how long completed event history remains available. Administrators can edit the parameters a job accepts, while app-created jobs begin paused so their scope and schedule can be reviewed before activation.

### Configure carriers and Unigate together

Company now includes carrier catalog, creation, detail, and shipment-method setup. Administrators can maintain the carrier and its methods, map the values used by connected systems, and review a readiness checklist before the configuration is used in fulfillment.

For retailers using Unigate, the same area carries credentials, method mappings, billing details, and tenant connection information. This makes it easier to distinguish a missing business mapping from a missing connection value when a label or rate request does not behave as expected.

### Monitor NetSuite order push

The NetSuite workspace shows the order-push backlog, recent runs, rule groups, rules, and schedules. Teams can run supported processing immediately or update its schedule while retaining the context of which order feed is being controlled.

The interface also calls out a current integration limitation: a condition value can be stored on a rule even when the underlying feed does not yet evaluate that condition. Making the limitation visible is safer than implying that a configured filter is already changing export behavior.

### Keep app rollout controls close to administration

Company also adds application-version management for development, user acceptance testing, and production environments. Administrators can see which app build is intended for each stage and coordinate a controlled rollout without treating the latest available front end as the only option.

Company is becoming the operating home for integrations, not just a place to enter setup values. The practical shift is that configuration, backlog, schedule, recent execution, and recovery controls can be read as one operational story.

*Sources: [company#279](https://github.com/hotwax/company/pull/279), [company#300](https://github.com/hotwax/company/pull/300), [company#352](https://github.com/hotwax/company/pull/352), [company#358](https://github.com/hotwax/company/pull/358), [company#359](https://github.com/hotwax/company/pull/359), [company#364](https://github.com/hotwax/company/pull/364), [mantle-netsuite-connector#346](https://github.com/hotwax/mantle-netsuite-connector/pull/346), [company v2.2.0](https://github.com/hotwax/company/releases/tag/v2.2.0), [company v2.2.1](https://github.com/hotwax/company/releases/tag/v2.2.1), [company v2.2.2](https://github.com/hotwax/company/releases/tag/v2.2.2), [mantle-netsuite-connector v3.1.2](https://github.com/hotwax/mantle-netsuite-connector/releases/tag/v3.1.2)*
