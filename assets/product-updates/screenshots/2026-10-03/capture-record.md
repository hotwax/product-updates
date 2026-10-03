# August and September screenshot capture record

Updated October 3, 2026. This is an internal provenance record. Seven replacement captures are approved for privacy and presentation and prepared for publication. They are not yet claimed as deployed to HubSpot; the root publisher must verify the final public images and captions.

The captures use current development apps against demo OMS and its paired demo Maarg backend. All deployed app source commits are unknown. The images illustrate current demo UI, not historical August or September builds, production deployments, Safari, touch behavior, or physical-device testing. Exact replacement capture timestamps were not retained; the capture date is October 3, 2026.

## Approved replacement captures

| File | Source page and view | Audience and reference viewport | Saved pixels | Workflow shown |
| --- | --- | --- | --- | --- |
| `company-populated-inventory-channel-macbook-air.png` | https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync; normal scroll to the populated inventory-channel card | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Existing configured demo channel and publishing context |
| `company-delivered-inventory-events-macbook-air.png` | https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync/history?state=sent | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Filtered history containing 18 delivered demo inventory events |
| `products-populated-calendar-macbook-air.png` | https://products-dev.hotwax.io/product-calendar | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Existing Aeon product-calendar rows with stored October 8 dates |
| `receiving-populated-transfers-ipad.png` | https://receiving-dev.hotwax.io/transfer-orders; search `RCV-OCT01` | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Existing demo replenishment transfers and package tracking |
| `receiving-shipment-box-ipad.png` | https://receiving-dev.hotwax.io/transfer-order-detail/M103573 | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Populated shipment-box product and quantity detail before receipt |
| `cycle-count-populated-plan-ipad.png` | https://inventorycount-dev.hotwax.io/tabs/create-cycle-count | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Unsaved directed-count plan for existing Brooklyn and 15 catalog variants |
| `order-manager-populated-order-macbook-air.png` | https://order-manager-dev.hotwax.io/orders/M103650 | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Full held demo-order detail with synthetic customer contact information and recorded held-order history |

All seven dimensions were checked from the saved PNG files. Capture used native Chrome DevTools full reference viewports at 2×. The observed application halo and layout remain intact. No image resizing, padding, stretching, retouching, square cropping, fixture responses, DOM text replacement, or API interception was used to improve these pictures. Each unique replacement asset passed actual-pixel privacy review. Temporary viewport overrides should be restored after capture.

## Data provenance and limits

- Company uses existing shop `10010`, `hotwax-demo`. The channel shows 14 store locations and two warehouse locations; facility names were not expanded for the image. No companies, subsidiaries, facilities, mappings, or jobs were created or activated for this pass.
- Company's 18 delivered events and delivery summaries are recorded demo observations, not a performance guarantee or proof that every integration path is configured.
- Products shows stored calendar dates. The image does not establish active Shopify calendar mappings, a completed calendar sync, or an inventory-rule outcome. No calendar mappings or scheduled jobs were changed.
- Receiving uses the existing October 1 demo transfers, not records created for this screenshot pass. The QA record at `/private/tmp/product-update-app-capture.rd9q8c/accxui/apps/receiving/docs/qa/2026-10-01-demo-transfers.md` documents the synthetic tracking codes, catalog variants, shipments, packages, and authoritative readbacks. Transfer `M103573` remains shipment-backed stock awaiting receipt; the capture did not submit a receipt or move inventory.
- Receiving list and shipment-box images illustrate transfer orders and receiving context. They do not show transfer creation, completed receiving, direct inventory-transfer requests, or verified NetSuite/Shopify synchronization.
- Cycle Count shows an unsaved local form: `Brooklyn weekly apparel count`, due October 5, directed count, and 15 existing Abominable catalog variants selected through the app. The create button was not pressed; no count, schedule, or inventory change was submitted.

The first six approved captures used existing demo data or unsaved local planning without backend record changes. The seventh image uses separately authorized new demo customer/contact/order records documented below. Existing demo records remain unmodified; no companies, subsidiaries, facilities, products, or integration configuration were created or changed.

### Authorized Order Manager sample

- Created person `M101284`, contact records `M104816`, `M104817`, and `M104818`, and sales order `M103650` through existing REST/entity services.
- The full detail capture shows fictional customer Avery with synthetic email, a 555 phone, and a generated postal address. The address is not verified as unoccupied. The saved image passed privacy review; no real-customer identity is claimed.
- GET-only reconciliation against the actual current Order Manager order-detail master endpoint confirmed `HOLD`, `autoApprove=N`, the created item state, existing `STORE` and `COMPANY` context, `_NA_`, existing product `10227`, quantity two, unit price 48, and total 96.
- Reconciliation found no inventory or fulfillment operational footprints. No fulfillment statuses or milestone history were added for presentation. The image illustrates the recorded held state, not approval, picking, packing, shipping, or completed fulfillment.
- No search-index POST was needed or called: the current order-detail endpoint reads the entity records directly.
- No existing demo records were modified, and no company, facility, product, mapping, integration job, or inventory movement was created for this sample.

## Superseded first-pass assets

Keep these original files recoverable; do not delete them. They are not approved for the new public screenshot pass merely because an earlier privacy review passed.

| Earlier file | Replacement-pass decision |
| --- | --- |
| `company-shopify-inventory-sync.jpg` | Superseded by the populated MacBook Air channel capture |
| `company-organization-hierarchy.jpg` | Omitted; the empty hierarchy is not a suitable company-management showcase |
| `company-shopify-transfer-sync.jpg` | Omitted; the unconfigured sync view does not show a working connected workflow |
| `company-inventory-event-history.jpg` | Superseded by the populated delivered-event MacBook Air capture |
| `order-manager-order-timeline.jpg` | Rejected square crop; superseded by approved full held-order detail; do not reuse even as a secondary image |
| `receiving-create-transfer-order.jpg` | Superseded as the transfer story's primary image by populated Receiving workflow captures; those captures are not creation-form proof |
| `products-product-calendar.jpg` | Superseded by the populated calendar MacBook Air capture |

The earlier `order-manager-order-timeline-macbook-air.png` is also rejected for the replacement pass and must not be reused, including as a secondary image. Keep it recoverable. The approved `order-manager-populated-order-macbook-air.png` replaces the primary Order Manager image. Its recorded held-order history is not a demonstration of later fulfillment milestones. The first-pass August release-note images were an intermediate live update; replacement publication is not complete until the new source revision and public pixels are checked.

## Remaining capture work

Native computer use works on the inspected apps. The earlier extension-panel explanation is not an established blocker; do not attribute the remaining capture gaps to unavailable browser control.

- Company hierarchy: no suitable populated existing parent/child structure; omit the image rather than creating companies or facilities.
- Company transfer sync: no approved populated connected-workflow image; omit the unconfigured showcase.
- Order Routing Replenishment: suitable populated view pending.
- Routing Simulation: native read-only inspection of `/simulate/history/M100126` found a saved demo result with client-identifying variant and facility labels. No public screenshot was captured. This is a privacy gate, not a browser blocker or evidence of historical September deployment.
- Cycle Count: the populated unsaved creation-plan image is prepared and approved. A populated variance-decision/review image remains pending; no old count was altered.
- Transfers: native read-only inspection of `/tabs/inventory-transfers` found no requested transfers. Changing the status filter to `All` and applying it still showed no inventory transfers. No request was created or executed. Existing Receiving transfer orders cannot substitute for this separate direct-adjustment workflow.

Do not create companies, subsidiaries, facilities, mappings, successful-processing history, or stock movements to fill these gaps. Any new data or configuration work needs the exact scope explained and authorized before it begins. Nothing in this record authorizes publishing unreviewed images or changing live application configuration.
