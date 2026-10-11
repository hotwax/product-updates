---
title: HotWax turns Job Manager metrics into investigation paths
slug: product-updates/2026-08/job-manager-dashboard-drilldowns-and-shopify-bulk-operations
contentType: product-update
month: 2026-08
metaDescription: Job Manager turns dashboard metrics into exact drilldowns and compares Shopify Bulk Operations with their related HotWax processing state.
tagNames: [Product Update]
key: product-update:2026-08:job-manager-dashboard-drilldowns-and-shopify-bulk-operations
releaseStatus: expected
---

An operations dashboard should shorten an investigation. A count of failed imports or slow jobs is useful only when a user can move from that count to the exact records behind it without rebuilding the same time and status filters by hand.

The next HotWax Commerce Job Manager release turns its dashboard into a set of investigation paths and adds a dedicated view for Shopify Bulk Operations.

### Open the records behind each metric

Dashboard counts and status chips carry their scope into the destination page. A failed-import count opens Message History with the matching creation window, while queued, running, slow, stuck, and failed job indicators open the runs that produced the metric.

Relative time labels make it easier to tell whether an import failed minutes ago or has been waiting since a previous operating day. When a metric cannot be loaded, the dashboard keeps the failure visible rather than replacing it with a zero.

Job details accept the selected tab and run identifier from the URL. The run that brought an operator to the page stays pinned while its history loads, preventing a newer background response from silently changing the subject of the investigation.

Filters, job parameters, categorization, and paused creation state remain part of the same workflow. Newly created jobs begin paused so their parameters and schedule can be reviewed before they execute.

### Compare Shopify and HotWax bulk-operation state

Shopify Bulk Operations run outside the normal request-response cycle. Shopify may report that an operation has completed while the related result file is still waiting for HotWax processing, or HotWax may record an error after Shopify finished successfully.

The new Bulk Operations page reads the Shopify operation through a GraphQL passthrough and enriches it with the related HotWax system message when one is available. It shows the Shopify status, HotWax message status, object and file counts, result file, submitted query, and the job or run that initiated the work.

Putting both states on one page makes divergence visible. An operator can distinguish a Shopify operation that is still running from a completed Shopify export whose HotWax import has not finished.

If the supporting backend cannot filter HotWax messages by the remote operation ID, the page degrades to Shopify-only information instead of failing the entire view. The missing enrichment remains visible as a capability limitation.

### Keep large histories responsive

The release candidate also divides heavy views into lazy-loaded routes, virtualizes long card lists, cancels stale run-history requests, and loads full error payloads only when a user asks for them. Bulk-operation enrichment uses bounded concurrency so a long list does not fire every remote request at once.

The result is a dashboard that leads to evidence and a bulk-operation view that explains which system still owns the next step.

*Sources: [job-manager#1071](https://github.com/hotwax/job-manager/pull/1071), [job-manager#1073](https://github.com/hotwax/job-manager/pull/1073), [job-manager#1075](https://github.com/hotwax/job-manager/pull/1075), [job-manager#1076](https://github.com/hotwax/job-manager/pull/1076), [job-manager#1077](https://github.com/hotwax/job-manager/pull/1077), [job-manager#1078](https://github.com/hotwax/job-manager/pull/1078), [job-manager#1079](https://github.com/hotwax/job-manager/pull/1079), [job-manager#1080](https://github.com/hotwax/job-manager/pull/1080), [job-manager#1081](https://github.com/hotwax/job-manager/pull/1081)*
