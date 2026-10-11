---
title: HotWax keeps the Order Manager Funnel accurate as its scope changes
slug: product-updates/2026-08/order-manager-funnel-accuracy-navigation-and-accessibility
contentType: product-update
month: 2026-08
metaDescription: The Order Manager Funnel protects live scope changes from stale data and improves time, links, and progress indicators for daily operations.
tagNames: [Product Update]
key: product-update:2026-08:order-manager-funnel-accuracy-navigation-and-accessibility
releaseStatus: expected
---

The Order Manager Funnel is a live operating view. Teams change product stores, move between time windows, and open the orders behind a metric while new responses continue to arrive. Accuracy depends as much on how the page handles those changes as it does on the query that produced the first number.

The next HotWax Commerce Order Manager release strengthens that behavior across scope, time, navigation, and accessibility.

### Show the operating time in the user's timezone

The Funnel clock uses the user's configured timezone and continues updating while the page is open. Daylight-saving transitions are covered so the displayed operating time follows the timezone rules instead of applying a fixed offset.

This matters when teams in different regions compare a queue or cutoff window. The page provides a shared reference without implying that the browser's local timezone is always the one used by the operation.

### Give progress indicators meaningful names

Visual progress indicators now carry accessible labels that describe the metric they represent. Screen-reader users do not have to infer a number's purpose from surrounding layout, and automated accessibility checks can identify the component by its business meaning.

These changes do not add another dashboard or redefine the Funnel's metrics. They make the existing operating surface more trustworthy: the selected store stays selected, old data cannot overwrite a new scope, time has a declared meaning, links behave like links, and progress can be understood without relying on color or position.

*Sources: [order-manager#500](https://github.com/hotwax/order-manager/pull/500), [order-manager#501](https://github.com/hotwax/order-manager/pull/501), [order-manager#502](https://github.com/hotwax/order-manager/pull/502), [order-manager#503](https://github.com/hotwax/order-manager/pull/503), [order-manager#504](https://github.com/hotwax/order-manager/pull/504)*
