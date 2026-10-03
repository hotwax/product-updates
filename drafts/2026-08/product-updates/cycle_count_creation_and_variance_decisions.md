---
title: HotWax Commerce connects Cycle Count creation with traceable variance decisions
slug: product-updates/2026-08/cycle-count-creation-and-variance-decisions
contentType: product-update
month: 2026-08
metaDescription: Cycle Count adds count creation for store and admin teams, better review search, and a reusable history of inventory variance decisions.
tagNames: [Product Update]
key: product-update:2026-08:cycle-count-creation-and-variance-decisions
releaseStatus: published
---

Cycle counting is more than entering a number. A team needs to define the work, assign it to the right facility, find it again during review, and preserve what happened when a counted quantity disagrees with the inventory on record.

The August HotWax Commerce Cycle Count release connects more of that lifecycle inside the app and adds a reusable record for the decisions that follow a variance.

## Create a count from the operating app

Cycle Count now includes a creation page in both the administrator and store views. Teams can start a new count from the application where the work will be performed instead of preparing every request through a separate generic administration screen.

The page gives each role the entry point appropriate to its scope. An administrator can prepare work across the locations they manage, while a store user stays within the store operating context.

This is an important distinction from an ad hoc inventory adjustment. The result is a named piece of count work that can move through assignment, counting, and review with its identity intact.

## Find the exact count waiting for review

The `Pending Review` search accepts either the count name or its work effort ID. Reviewers can use a count reference from a support conversation or another system to find the work without scanning the whole queue.

## Preserve the business decision behind a variance

A new variance-decision view connects each decision with its count, facility, product, reason, outcome, and the person who made it. Other inventory views can use that record to explain a stock change without losing its original count context.

Order Routing can use this record when it presents inventory history. A movement that originated in a Cycle Count can therefore be explained with the business decision that accepted, rejected, or otherwise resolved the variance.

This is the difference between seeing that inventory changed and understanding why it was allowed to change. The count remains the unit of work, the variance remains the observed difference, and the decision remains a traceable operational action.

Together, count creation, exact review search, and variance history make the Cycle Count app useful across the full task: start the work, locate the work, and explain its inventory result later.

*Sources: [inventory-count#1428](https://github.com/hotwax/inventory-count/pull/1428), [inventory-count#1447](https://github.com/hotwax/inventory-count/pull/1447), [hotwax-poorti#291](https://github.com/hotwax/hotwax-poorti/pull/291), [inventory-count v5.2.0](https://github.com/hotwax/inventory-count/releases/tag/v5.2.0), [hotwax-poorti v3.1.2](https://github.com/hotwax/hotwax-poorti/releases/tag/v3.1.2)*
