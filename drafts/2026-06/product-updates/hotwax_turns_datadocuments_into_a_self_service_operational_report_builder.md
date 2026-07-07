---
title: HotWax turns DataDocuments into a self-service operational report builder
slug: product-updates/2026-06/hotwax-turns-datadocuments-into-a-self-service-operational-report-builder
contentType: product-update
month: 2026-06
metaDescription: Operational reports often start as support requests or one-off SQL because the data lives across orders, items, jobs, messages, products, and facilities. That…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-turns-datadocuments-into-a-self-service-operational-report-builder
sourceFaq: data-document-report-builder.md
---

### Reusable definitions for operational reports

Operational reports often start as support requests or one-off SQL because the data lives across orders, items, jobs, messages, products, and facilities. That slows teams down when they need a repeatable view of exceptions or integration activity.

### What changed

DataDocuments now act as reusable report definitions for Job Manager. A definition can describe the root entity, related records, selected fields, conditions, preview behavior, export behavior, and delivery use cases.

### How the workflow operates

The same definition can power a preview, CSV export, scheduled report, or future feed. Implementation teams define the shape once, and operators can reuse that shape without needing direct database access.

### Operational impact

Reporting becomes a product capability instead of a custom engineering loop. Teams can standardize recurring operational questions and reduce the time needed to create customer-specific reports.

*Sources: [hotwax-poorti#240](https://github.com/hotwax/hotwax-poorti/pull/240), [hotwax-poorti#279](https://github.com/hotwax/hotwax-poorti/pull/279), [hotwax-maarg-util#115](https://github.com/hotwax/hotwax-maarg-util/pull/115), [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148)*
