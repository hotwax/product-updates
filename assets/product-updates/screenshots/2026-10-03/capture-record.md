# August and September screenshot capture record

Updated October 3, 2026. This is an internal provenance record. The seven-image device-framed batch from documentation source commit `cb0e350de4bc7d49f9fb6c0f64e9df0c537204ee` went live across nine posts. Verification at `2026-10-03T18:25:49Z` checked exact CMS bodies and protected metadata, all 16 public pages and their full text, and 15 image placements. The six non-Order Manager assets remain unchanged. After the held-order primary was rejected as a weak feature example, its approved fulfillment-timeline replacement from documentation source commit `8ca8c6655871655134f53e8df2d60920a5d644bb` was published to the existing September release note and Order Manager article. Exact CMS body and protected-metadata verification completed at `2026-10-03T18:49:32.746Z` for the note and `2026-10-03T18:49:34.695Z` for the article. All 16 public pages subsequently passed HTTP, full-text, image, alt-text, and enlargement checks. The other seven screenshot-updated posts retain the earlier source commit.

The captures use current development apps against demo OMS and its paired demo Maarg backend. All deployed app source commits are unknown. The images illustrate current demo UI, not historical August or September builds, production deployments, Safari, touch behavior, or physical-device testing. Exact replacement capture timestamps were not retained; the capture date is October 3, 2026.

## Previously published capture set

A subsequent October 3 visual review identified the pointer and blue halo as Codex capture artifacts. Native browser inspection identified the injected `codex-agent-overlay-root`; the halo is not an application feature. The seven PNGs below are superseded for presentation and must not be reused in a new publication pass. Their earlier publication and verification history is retained, and the original files remain recoverable. The cursor-free retakes passed saved-pixel review; their public replacement remains pending verification.

| File | Source page and view | Audience and reference viewport | Saved pixels | Workflow shown | Publication state |
| --- | --- | --- | --- | --- | --- |
| `company-populated-inventory-channel-macbook-air.png` | https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync; normal scroll to the populated inventory-channel card | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Existing configured demo channel and publishing context | Live in verified batch |
| `company-delivered-inventory-events-macbook-air.png` | https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync/history?state=sent | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Filtered history containing 18 delivered demo inventory events | Live in verified batch |
| `products-populated-calendar-macbook-air.png` | https://products-dev.hotwax.io/product-calendar | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Existing Aeon product-calendar rows with stored October 8 dates | Live in verified batch |
| `receiving-populated-transfers-ipad.png` | https://receiving-dev.hotwax.io/transfer-orders; search `RCV-OCT01` | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Existing demo replenishment transfers and package tracking | Live in verified batch |
| `receiving-shipment-box-ipad.png` | https://receiving-dev.hotwax.io/transfer-order-detail/M103573 | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Populated shipment-box product and quantity detail before receipt | Live in verified batch |
| `cycle-count-populated-plan-ipad.png` | https://inventorycount-dev.hotwax.io/tabs/create-cycle-count | Store operator; 11-inch iPad (A16); 1180 × 820 CSS pixels | 2360 × 1640 | Unsaved directed-count plan for existing Brooklyn and 15 catalog variants | Live in verified batch |
| `order-manager-fulfillment-timeline-macbook-air.png` | https://order-manager-dev.hotwax.io/orders/M103648; order reference `HC#2760` | Administrator; 13-inch MacBook Air with a 13.6-inch display; 1280 × 832 CSS pixels | 2560 × 1664 | Genuine recorded fulfillment timeline with a fictional display-only customer-summary illustration | Published; CMS, public image, disclosure caption, and full-size view verified |

All seven previously published dimensions were checked from the saved PNG files. Capture used native Chrome DevTools full reference viewports at 2×. These frames retain the Codex pointer/halo overlay, which the earlier record incorrectly described as an application halo. No image resizing, padding, stretching, retouching, square cropping, fixture API responses, or API interception was used. The six unchanged captures also used no DOM text replacement. The seventh illustration has the narrow customer-summary presentation substitution documented below; do not describe it as an untouched customer record. Each image passed the earlier actual-pixel privacy review, but the capture overlay makes it unsuitable for the replacement presentation pass. After the Order Manager capture, a reload restored the actual customer display and missing-contact presentation; device override `0` and closed DevTools were verified.

### Cursor-free replacement pass: captures approved, publication pending

The nine affected public Markdown sources reference corresponding `-clean.png` filenames. All seven new PNGs were captured on October 3 using native Chrome DevTools from the same genuine demo workflows and reference viewports. The verified `codex-agent-overlay-root` alone was temporarily hidden before capture. The images were not retouched, inpainted, cropped, resized, padded, or pixel-replaced. No operational data or activity was changed. The existing Order Manager timeline retains the same disclosed, specifically authorized customer-summary illustration.

Root and an independent reviewer inspected all seven final saved PNGs. None contains a pointer, cursor halo, client identifiers, private contacts, secrets, or API payloads. The four administrator images are 2560 × 1664 pixels; the three store-operator images are 2360 × 1640 pixels. The calendar frame includes the existing Aeon and Antonia dates, the Receiving detail has the first box selected with zero received, and Cycle Count remains an unsaved 15-variant directed plan. Reload restored the Order Manager customer presentation. Reload also discarded the Cycle Count form, confirming an empty count name and zero selected items; device override was disabled and DevTools closed. The original seven PNGs remain unchanged and recoverable.

Public replacement, exact CMS bodies and protected metadata, unchanged disclosure captions, public image pixels, and enlargement links still require verification before recording publication completion.

## Data provenance and limits

- Company uses existing shop `10010`, `hotwax-demo`. The channel shows 14 store locations and two warehouse locations; facility names were not expanded for the image. No companies, subsidiaries, facilities, mappings, or jobs were created or activated for this pass.
- Company's 18 delivered events and delivery summaries are recorded demo observations, not a performance guarantee or proof that every integration path is configured.
- Products shows stored calendar dates. The image does not establish active Shopify calendar mappings, a completed calendar sync, or an inventory-rule outcome. No calendar mappings or scheduled jobs were changed.
- Receiving uses the existing October 1 demo transfers, not records created for this screenshot pass. The QA record at `/private/tmp/product-update-app-capture.rd9q8c/accxui/apps/receiving/docs/qa/2026-10-01-demo-transfers.md` documents the synthetic tracking codes, catalog variants, shipments, packages, and authoritative readbacks. Transfer `M103573` remains shipment-backed stock awaiting receipt; the capture did not submit a receipt or move inventory.
- Receiving list and shipment-box images illustrate transfer orders and receiving context. They do not show transfer creation, completed receiving, direct inventory-transfer requests, or verified NetSuite/Shopify synchronization.
- Cycle Count shows an unsaved local form: `Brooklyn weekly apparel count`, due October 5, directed count, and 15 existing Abominable catalog variants selected through the app. The create button was not pressed; no count, schedule, or inventory change was submitted.

The first six captures used existing demo data or unsaved local planning without backend record changes. The current seventh illustration uses an existing order's real operational history with a separately authorized display-only customer fixture. No new backend records or operational activity were created for it. Retain the audit of the earlier held sample below; that sample is superseded for presentation, not erased or relabeled as the source of another order's history.

### Genuine Order Manager timeline with a customer illustration

- Source: existing order `M103648`, reference `HC#2760`, in the current development Order Manager against demo OMS.
- The saved image shows genuine recorded placement, approval, brokering, shipping, picking, packing, and completion events, including Central Warehouse and Broadway context. Event text, timestamps, products, quantities, statuses, API responses, and backend records were not changed.
- On October 3, Aditya specifically authorized temporary presentation of fictional customer details. Native DevTools changed only the customer-summary card's visible display name, email, phone, locale, billing text, and missing-field `Add` button presentation to the synthetic Avery fixture. The card's illustrated completeness must not be presented as a readback of the underlying customer record.
- The original customer's provenance is unproven and original identifying fields are not visible in the approved PNG. No claim is made that the underlying customer is fictional. The fixture's generated postal address is not verified as unoccupied.
- The approved PNG is a display-only illustration, not a fixture API response or backend mutation. Its published caption discloses that customer details are fictional and illustrative while the visible operational milestones remain real.
- This is a specifically authorized exception to the style guide's normal no-DOM-replacement rule. It does not authorize invented events, dates, processing states, products, quantities, fulfillment milestones, companies, facilities, mappings, jobs, or stock movements.
- No backend write, new company/facility, configuration change, job activation, or fulfillment action was needed for this illustration. Privacy and presentation approval, CMS publication, and public verification are complete.

The following synthetic values were used only for the authorized visible customer-summary illustration. They are not the original customer's identifying information or backend readbacks.

| Display field | Synthetic illustration value |
| --- | --- |
| Name | Avery Bennett |
| Email | `avery.bennett@example.com` |
| Phone | `1-801-555-0162` |
| Locale | `en-US` |
| Billing addressee | Avery Bennett |
| Billing address | 2084 Willow Meadow Lane, Apt 306; Salt Lake City, UT 84102; United States |

Native Chrome verification of the public September `#order-manager` section showed the complete replacement image and disclosure caption. Clicking the image loaded the new-commit raw PNG at 2560 × 1664 pixels; the exact newly opened tab was then closed. The internal visual proof is `tmp/public-september-fulfillment-timeline-proof.png`. The original customer display was restored by reload, and device override `0` was verified.

### Earlier authorized held sample, now superseded

- Created person `M101284`, contact records `M104816`, `M104817`, and `M104818`, and sales order `M103650` through existing REST/entity services.
- The earlier full detail capture, `order-manager-populated-order-macbook-air.png`, showed fictional customer Avery with synthetic email, a 555 phone, and a generated postal address. The address is not verified as unoccupied. It passed privacy review and went live in the verified batch, but the latest user review rejects it as a weak feature example.
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
| `order-manager-order-timeline.jpg` | Rejected square crop; do not reuse even as a secondary image |
| `order-manager-populated-order-macbook-air.png` | Previously live held sample, now rejected as a weak feature example; retain recoverably and replace with the genuine timeline illustration |
| `receiving-create-transfer-order.jpg` | Superseded as the transfer story's primary image by populated Receiving workflow captures; those captures are not creation-form proof |
| `products-product-calendar.jpg` | Superseded by the populated calendar MacBook Air capture |

The earlier `order-manager-order-timeline-macbook-air.png` and all other rejected timeline candidates must not be published or reused, including as secondary images. Keep rejected assets unmodified and recoverable. The six non-Order Manager device-framed images remain live. The approved `order-manager-fulfillment-timeline-macbook-air.png` has replaced the rejected held primary in both existing September posts; its source revision, public pixels, full-size image, and fictional-display disclosure caption are verified.

## Remaining capture work

Native computer use works on the inspected apps. The earlier extension-panel explanation is not an established blocker; do not attribute the remaining capture gaps to unavailable browser control.

- Company hierarchy: no suitable populated existing parent/child structure; omit the image rather than creating companies or facilities.
- Company transfer sync: no approved populated connected-workflow image; omit the unconfigured showcase.
- Order Routing Replenishment: suitable populated view pending.
- Routing Simulation: native read-only inspection of `/simulate/history/M100126` found a saved demo result with client-identifying variant and facility labels. No public screenshot was captured. This is a privacy gate, not a browser blocker or evidence of historical September deployment.
- Cycle Count: the populated unsaved creation-plan image is published and approved. A populated variance-decision/review image remains pending; no old count was altered.
- Transfers: native read-only inspection of `/tabs/inventory-transfers` found no requested transfers. Changing the status filter to `All` and applying it still showed no inventory transfers. No request was created or executed. Existing Receiving transfer orders cannot substitute for this separate direct-adjustment workflow.

Do not create companies, subsidiaries, facilities, mappings, successful-processing history, or stock movements to fill these gaps. Any new data or configuration work needs the exact scope explained and authorized before it begins. Nothing in this record authorizes publishing unreviewed images or changing live application configuration.
