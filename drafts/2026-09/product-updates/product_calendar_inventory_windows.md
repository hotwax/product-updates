---
title: HotWax Commerce connects product calendar dates to inventory selling windows
slug: product-updates/2026-09/product-calendar-inventory-windows
contentType: product-update
month: 2026-09
metaDescription: Map Shopify lifecycle dates in Company, review them in Products, and use scheduled date conditions in HotWax Commerce inventory rules.
tagNames: [Product Update]
key: product-update:2026-09:product-calendar-inventory-windows
releaseStatus: published
---

HotWax Commerce connects product launch dates with the inventory rules that decide how much stock retailers offer for shipping and store pickup. Teams can map lifecycle dates from Shopify, review those dates in Products, and use them in Order Routing without maintaining a separate list of products for each launch window.

For retailers with frequent launches, the same SKU can need different inventory treatment before release, during its first weeks on sale, and near the end of its selling period. A date condition lets a configured rule follow that schedule as the calendar moves forward.

## Connect Shopify dates to the product calendar

The Company app's Shopify Product Sync page includes a `Product calendar mappings` card for four dates: introduction, launch, support discontinuation, and sales discontinuation. Each mapping connects a HotWax calendar field with the Shopify metafield that supplies its date.

The picker lists date and date-time fields from Shopify products and variants. Teams can find the field that holds the date and check that choice against Shopify before saving. Existing mappings can be removed when a shop's catalog setup changes.

Product sync writes the mapped values to the calendar for the shop's product store. A variant's date takes precedence when present; otherwise, that variant inherits the product's date for the same field. This happens independently for each date, so a variant can have its own launch date while keeping the product's sales end date.

## Review dates before applying inventory rules

The Products app's `Product calendar` page shows the dates for the selected product store, with product names and IDs, search, and refresh. Teams can check which products have dates populated and follow `Manage Shopify mappings` to Company when a mapping needs attention.

The calendar provides visibility into the dates that rules use. Shopify remains the source for mapped values, and a product sync is needed to populate existing products after mappings are configured.

![Products calendar with stored demo introduction and launch dates for products and variants](assets/product-updates/screenshots/2026-10-03/products-populated-calendar-macbook-air-clean.png)

*Stored demo introduction and launch dates. Current development UI, captured October 3, 2026; the image shows saved dates, not an active Shopify calendar sync. Select the image to enlarge it.*

## Define inventory windows around those dates

Order Routing adds `Products by date` conditions to threshold, safety stock, store pickup, and shipping rules. Choose a lifecycle date, `Days since` or `Days till`, a comparison, and a number of days.

For example, a retailer can apply a safety stock rule during the first 14 days after launch, or use a different shipping rule as a sales end date approaches. These conditions work alongside the rule's existing product and facility settings.

The rules evaluate on their configured schedule. Date comparisons use whole days, and products without the selected date do not match. Teams can review the calendar and the rule schedule together before relying on a launch window.

*Sources: [Company calendar mappings](https://github.com/hotwax/company/blob/0d5defb98e5c6b2a0eb95c8d688a5b9e9dd26db6/src/components/shopify-product-sync/ProductCalendarMappingsCard.vue), [Products calendar view](https://github.com/hotwax/products/blob/b6699142b88364a8aa14e0c7ca16e8d442ff0431/src/views/ProductCalendar.vue), [Order Routing date conditions](https://github.com/hotwax/order-routing/pull/567), [Shopify calendar sync](https://github.com/hotwax/mantle-shopify-connector/releases/tag/v4.3.2), [OMS calendar and inventory rules](https://github.com/hotwax/oms/releases/tag/v3.3.1)*
