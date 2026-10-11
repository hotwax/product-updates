---
title: HotWax introduces version-aware app delivery for controlled OMS rollouts
slug: product-updates/2026-07/hotwax-introduces-version-aware-app-delivery-for-controlled-oms-rollouts
contentType: product-update
month: 2026-07
metaDescription: HotWax Commerce now lets recent web app releases remain available while the order management system (OMS) selects the compatible build for each app environment…
tagNames: [Product Update]
key: product-update:2026-07:hotwax-introduces-version-aware-app-delivery-for-controlled-oms-rollouts
---

### Separate app deployment from rollout timing

HotWax Commerce now lets recent web app releases remain available while the order management system (OMS) selects the compatible build for each app environment. This separates making a release available from deciding when a retailer's user acceptance testing (UAT) or production environment adopts it.

An application release and an OMS backend change do not always belong on the same deployment schedule. A retailer may be testing a new workflow in UAT, keeping production unchanged during peak season, or waiting for supporting services before moving an app forward. When one hosted app address can serve only the newest build, publishing a release can turn those separate decisions into one upgrade.

### Keep recent releases available behind one app address

The shared HotWax web app platform can publish the current app together with a configurable number of recent minor release lines. For each retained line, the workflow keeps the latest patch release and builds it under its own version path, such as `/v3.1.1/` or `/v3.2.0/`.

This means a new deployment does not have to replace every previous build immediately. The default app and retained versioned builds can coexist on the same hosting address, giving rollout teams a defined set of releases to coordinate with their OMS deployments.

### Let the OMS select the compatible build

When a user opens an app, the unversioned entry build asks the OMS which release is configured for that app and environment. If the OMS returns a version, the app moves the user to that versioned path before login. The user does not need to choose a build or maintain a special bookmark.

The version check also keeps the address canonical. If a link contains a different retained version, the app changes only the version segment while preserving the requested page, query parameters, and URL fragment. When no version is configured, or the version lookup is unavailable, the app continues from its default unversioned build.

### Coordinate application and backend changes with less risk

Version-aware delivery gives implementation teams a practical boundary between releasing code and adopting it. A candidate app release can be tested against a UAT backend while production stays on a retained build. Production can move after its supporting services and configuration are ready, without requiring every environment to advance at the same time.

The visible version path also gives support teams better evidence. A copied link or issue report identifies the exact application build in use, reducing ambiguity when two environments are intentionally running different releases.

This is especially useful during high-volume periods. Retailers can hold an application environment on a known release while new builds remain available for testing, then schedule the move when the operational window is right.

### Start with six operations apps

The first July rollout adds version-aware loading to Job Manager, Receiving, Fulfillment, the Buy Online Pick-Up In Store (BOPIS) App, Cycle Count, and Transfers. Each app release includes the version configuration, routing, and build behavior needed to use the shared delivery model.

This first release is deterministic: one configured web app version is selected for each app environment. It does not split traffic between versions, apply feature flags, or control native mobile builds. A selected release must also remain among the versions deployed to that app host.

The result is a more deliberate rollout model. HotWax can make a web app release available without requiring every retailer and environment to adopt it at the same moment.
