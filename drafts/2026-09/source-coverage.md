# September 2026 source coverage

Collected on October 2, 2026. App eligibility is merged to main from September 1 through September 30. This inventory includes feature work, supporting corrections, release/version changes, and development-only maintenance; eligibility does not turn every maintenance PR into a product announcement.

The monthly automation raw collector supplies a release-based baseline. The app sweep supplements that baseline and includes changes not yet tagged. Public claims were checked against substantive implementation files; backend release claims were checked in tagged content.

## App and shared UI inventory

| Repository | Main merges | PR numbers |
|---|---:|---|
| hotwax/accxui | 31 | 89, 127, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 159, 161, 162, 163, 168, 169, 170, 171, 172, 173, 174, 175, 178, 181, 183, 184, 186, 188 |
| hotwax/bopis | 11 | 772, 844, 852, 859, 860, 861, 864, 866, 899, 900, 901 |
| hotwax/company | 52 | 291, 339, 343, 344, 348, 374, 382, 390, 393, 394, 395, 399, 402, 409, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 436, 438, 440, 450, 451, 454, 457, 459, 460, 463, 464, 465, 467, 468, 469, 470 |
| hotwax/dxp-components | 0 | None |
| hotwax/facilities | 0 | None |
| hotwax/fulfillment | 3 | 1695, 1699, 1700 |
| hotwax/inventory-count | 8 | 1421, 1457, 1459, 1461, 1462, 1464, 1467, 1468 |
| hotwax/job-manager | 9 | 1099, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1113 |
| hotwax/order-manager | 38 | 513, 514, 515, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 543, 551, 553, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 574, 576 |
| hotwax/order-routing | 23 | 503, 533, 551, 557, 558, 559, 560, 561, 562, 564, 565, 566, 567, 568, 569, 570, 572, 573, 574, 575, 576, 578, 579 |
| hotwax/preorder | 0 | None |
| hotwax/products | 3 | 75, 76, 79 |
| hotwax/receiving | 2 | 737, 738 |
| hotwax/transfers | 3 | 272, 273, 275 |

Total: 183 main-merge PRs across 14 repositories.

## Backend release inventory

| Repository | Published September releases |
|---|---:|
| hotwax/hotwax-maarg-util | 14 |
| hotwax/hotwax-oms | 11 |
| hotwax/hotwax-poorti | 13 |
| hotwax/hotwax-shopify-oms-bridge | 5 |
| hotwax/hotwax-unigate | 1 |
| hotwax/mantle-netsuite-connector | 11 |
| hotwax/mantle-shopify-connector | 34 |
| hotwax/oms | 21 |
| hotwax/OrderRouting | 3 |
| hotwax/preorder-maarg | 0 |

Release counts include parallel hotfix and minor-release trains. Inclusion in the public copy depends on the actual tagged implementation, not a release count or main merge date alone.

## Editorial disposition

Company diagnostics uses PRs 382, 395, 419, 425, 427, 428, 429, 438, 463, and 465. Calendar work uses Company 440, Products 76, and Order Routing 567. Company notification, assistant guide, user administration, mapping, import-result, callback, and reason-membership work is summarized in the release notes. Company 409 remains gated; product-store onboarding 348 remains excluded by the earlier editorial decision.

Order Manager investigation uses PRs 514, 522, 531, 534, 558, 561, 562, 564, 565, 566, 567, 568, and 570. Supporting identifier, tax, quantity, date, accessibility, localization, and queue-count work appears in the release notes. Removed or unreachable order actions are not marketed as capabilities.

Order Routing inventory and replenishment uses PRs 533, 559, 560, 561, 562, 568, 569, 570, 572, and 573. The calendar, filter persistence, instance switching, and picker changes are summarized separately. Simulation 557 and 574 are included as UI with an explicit backend deployment gate.

Job Manager main PRs 1105, 1107, 1108, 1109, and 1111 support the schedule, connection, message filtering, parameter, and document-validation notes. August 1100 is identified as a September-release carryover for import feed controls. The open dashboard and unmerged BulkOps work is excluded.

Transfers 272 supplies direct inventory-transfer requests. Receiving 737 supplies product context in receipt history. BOPIS 844, 859, 860, 861, 864, and 900 supply variant visibility, queue, exception, and notification work. BOPIS 772 has zero changed files and is not treated as a new capability.

Cycle Count 1421, 1459, 1461, and 1464 supply count creation, facility access, and mobile navigation. Fulfillment 1699 supplies picker search. Shared UI 168, 173, 175, and 178 supply session, device identity, version-path, and image-preview behavior.

Remaining app entries are supporting corrections, visual consistency, dependency/version changes, development environment setup, or shared infrastructure. They were retained in the inventory and are not promoted as separate feature launches. Nested feature-branch evidence is examined where carried by a main parent; it does not inflate the main-merge counts.
