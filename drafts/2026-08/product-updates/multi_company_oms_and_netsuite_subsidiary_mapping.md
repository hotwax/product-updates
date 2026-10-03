---
title: HotWax Commerce brings NetSuite subsidiary mapping into Company
slug: product-updates/2026-08/multi-company-oms-and-netsuite-subsidiary-mapping
contentType: product-update
month: 2026-08
metaDescription: HotWax Commerce helps retailers manage operating companies and maintain subsidiary IDs for configured NetSuite order exports in Company.
tagNames: [Product Update]
key: product-update:2026-08:multi-company-oms-and-netsuite-subsidiary-mapping
releaseStatus: published
---

Retailers running a multi-subsidiary NetSuite account need orders to reach the right legal entity. Stores and warehouses may belong to different operating companies, and that ownership can determine the subsidiary used when an order is exported.

HotWax Commerce brings company management and subsidiary mapping into the Company app. Administrators can maintain the operating companies behind their NetSuite setup and the subsidiary IDs used by their configured order exports.

## Represent the companies behind the NetSuite account

Company shows operating companies in a parent-and-subsidiary hierarchy. Administrators can create a company, rename it, or move it beneath a different parent as the retail business changes.

Each company's detail page also lists its stores and warehouses. This gives teams a way to check which company owns a location before reviewing its NetSuite mapping.

## Maintain each company's subsidiary ID

For NetSuite deployments that derive an order's subsidiary from the facility's owning company, administrators can maintain that company's NetSuite subsidiary ID in the `External ID` field. They can add, correct, or clear the value without recreating the company.

Company keeps this mapping beside the company record, so teams have one place to review the subsidiary ID behind their order exports. A hierarchy change does not automatically change facility ownership or rewrite earlier transactions.

For multi-subsidiary retailers, the result is a clearer connection between the companies that run the retail network and the NetSuite subsidiaries that receive its orders.

*Sources: [Company organization list](https://github.com/hotwax/company/blob/v2.2.0/src/views/Organizations.vue), [Company organization details](https://github.com/hotwax/company/blob/v2.2.0/src/views/OrganizationDetails.vue), [Company hierarchy and mapping actions](https://github.com/hotwax/company/blob/v2.2.0/src/composables/useOrganizations.ts), [company v2.2.0](https://github.com/hotwax/company/releases/tag/v2.2.0)*
