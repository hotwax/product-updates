---
title: HotWax adds multi-company management and NetSuite subsidiary mapping
slug: product-updates/2026-08/multi-company-oms-and-netsuite-subsidiary-mapping
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce manages internal company hierarchies and maps company external IDs to NetSuite subsidiaries in the current order export flow.
tagNames: [Product Update]
key: product-update:2026-08:multi-company-oms-and-netsuite-subsidiary-mapping
releaseStatus: released
---

Retail operating networks are rarely represented by one legal entity. A retailer may run stores through multiple subsidiaries, assign facilities to different operating companies, and export orders into a NetSuite account that expects the correct subsidiary, customer, and department on every transaction.

HotWax Commerce now gives that structure an explicit home in Company and connects it to the current NetSuite order-export flow.

### Manage the organization as a hierarchy

Company lists the internal organizations maintained in the OMS and shows how they relate to one another. Administrators can create a company, rename it, or move it beneath a different parent without going back to a generic party-management screen.

Hierarchy validation prevents a company from being placed beneath itself or one of its descendants. The app can also report malformed relationships that already exist, giving teams a way to find organization data that cannot be drawn as a valid tree.

Facility visibility brings the operating model into the same view. Teams can see which stores and warehouses belong to an organization rather than inferring ownership from a separate configuration export.

### Maintain the identifier used by NetSuite

Each company can carry an external ID. In the current NetSuite order-export flow, that value is used as the subsidiary ID sent with the order.

This is intentionally a precise mapping, not a claim that every use of an OMS party external ID is now NetSuite-specific. The field remains a general party attribute. Company explains the behavior so an administrator understands the consequence of changing or clearing it, while a typed integration identifier remains the safer long-term model for retailers with several external systems.

For multi-company retailers, the product-wide change establishes a clear foundation: the OMS can represent the company hierarchy, show its related facilities, and give the current NetSuite order-export flow an explicit subsidiary value to use.

*Sources: [company#290](https://github.com/hotwax/company/pull/290), [company#323](https://github.com/hotwax/company/pull/323), [company v2.2.0](https://github.com/hotwax/company/releases/tag/v2.2.0)*
