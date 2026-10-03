# September 2026 joint review notes

Prepared on October 2, 2026, for review beside August on `codex/product-updates-2026-08-draft`.

The September package contains one release note and eight dedicated product updates. Aditya reviewed PR #15 and instructed publication after the comments are addressed. The new Routing Simulation article labels the guided app setup as a preview and retains its connection-service prerequisites.

## Evidence and eligibility

Per the October 2 instruction, frontend app changes merged to `main` during September qualify whether or not a release tag contains them. Source collection covers September 1 through September 30. The sweep also identifies earlier app changes first included in September releases, including Job Manager import feed controls.

Backend capabilities use published September release content. Cherry-picked changes were checked in the actual tag files where main ancestry alone gave the wrong answer. No draft is evidence of production deployment or completed user acceptance testing.

The existing monthly raw-context collector produced 82 baseline items from its configured repositories. A separate main-merge sweep found 183 PRs across 14 app and shared UI repositories. `source-coverage.md` records that inventory and the editorial decisions. Raw PR bodies, issue snapshots, and local audit scripts are excluded from the branch content.

Both the product-update Gemini guide and the OMS documentation Gemini guide informed the copy. The current published product-update hub, inventory documentation, and transfer-order documentation were checked alongside source.

## Dedicated product updates

- Company Shopify diagnostics: inventory events, delivery timing, batch inspection, transfer synchronization, and mapping investigation
- Order Manager order investigation: timeline, item status, scoped actions, transfer requests, and order attributes
- Product calendar inventory windows: Shopify date mappings, Products visibility, and scheduled inventory date conditions
- Order Routing inventory and replenishment: multi-facility searches, movement context, demand, incoming units, and stock settings
- Inventory transfer requests: request, execute paired facility adjustments, or cancel without changing stock
- Shopify location and kit inventory: physical inventory events, ATP resets, activation, and derived kit quantities
- Shopify native transfer synchronization: approved transfer orders, shipments, receipts, and added items
- Routing Simulation: copied operating data, baseline and variations, comparable runs, item outcomes, and saved-run history, with the guided setup labeled preview

## Boundaries retained in the copy

- Products displays calendar dates. Company manages Shopify mappings. Existing products need product-sync backfill after mapping setup. Inventory rules evaluate whole-day conditions on their configured schedule.
- Direct InventoryTransfer requests apply source and destination inventory adjustments together. They do not create a shipped transfer order, shipment, or receiving event.
- Company inventory metrics describe the loaded and filtered retained history. Live-change detection needs a compatible connector; older connections expose last-read time and manual refresh.
- Company notification monitoring reports stored subscriptions. When all returned records belong to the signed-in user, the page warns of possible limited scope. It does not report successful notification delivery.
- Replenishment shows recorded demand and bounded incoming-work reads. The current card edits stock settings and has no Restock action.
- Shopify native transfer jobs and kit reset jobs need shop configuration and activation. Kit jobs ship paused with an empty shop scope. Pickup-ready synchronization is opt-in and defaults off.
- Cancelling Data Manager processing stops remaining work at checkpoints. It does not undo records already imported.

## App work with deployment gates

The simulation setup wizard is included as merged app UI. The separate `sim-routing` service has a September `v1.0.0` release. The app's matching OMS facade is still in an unmerged draft PR and is absent from the standard September backend releases. The full article describes the configured workflow, marks guided setup as a preview, and does not claim a working end-to-end deployment on every retailer instance.

The Company MCP setup guide is included. Inline token issuance depends on an endpoint absent from the checked backend sources, so the copy points to the existing OMS access-token settings rather than promising inline issuance.

Company's fulfillment workspace is merged app work, but its pending-fulfillment, health, diagnosis, and hold endpoints were not found in the September connector releases. Keep that workspace in the review inventory; it is not presented as a working fulfillment-management launch.

## Deliberate exclusions

Job Manager dashboard and BulkOps do not have merged implementation evidence for a September launch. Order Manager return creation, cancellation, reshipment, appeasement, and cloning are not announced from inaccessible or removed actions. The prior product-store onboarding exclusion remains in effect.

Shopify outbound cancellation has a missing upgrade-path prerequisite in the reviewed September releases. The pre-order future-inventory engine and NetSuite purchase-order, inbound-shipment, and future-inventory feed work first appear in October releases. Later carrier postal-routing work is not in the September backend tag. These are excluded from released September backend claims.

## Privacy and visuals

Public prose uses shared product behavior and generic examples. Client-associated PR and changelog links have been replaced with clean, pinned shared source files where needed. The October review also removed the unfinished August Order Routing monitoring article from publication, preserved it as a deferred draft, and simplified the remaining August narratives. The first device-framed screenshot batch and the subsequent Order Manager replacement are published; their content hashes and CMS state were refreshed by the publisher.

Seven device-framed screenshots from documentation source commit `cb0e350de4bc7d49f9fb6c0f64e9df0c537204ee` went live across nine posts. Verification at `2026-10-03T18:25:49Z` checked exact CMS bodies and protected metadata, all 16 public pages and their full text, and 15 image placements. The six non-Order Manager images are unchanged. After the user rejected the held-order primary, its approved replacement, `order-manager-fulfillment-timeline-macbook-air.png`, was published from documentation source commit `8ca8c6655871655134f53e8df2d60920a5d644bb`. Exact CMS body and protected-metadata verification completed at `2026-10-03T18:49:32.746Z` for the existing September note and `2026-10-03T18:49:34.695Z` for the existing Order Manager article. All 16 public pages subsequently passed HTTP, full-text, image, alt-text, and enlargement checks. The other seven screenshot-updated posts retain the earlier source commit. The replacement uses the administrator's 13-inch MacBook Air with a 13.6-inch display reference: 1280 × 832 CSS pixels, saved at 2560 × 1664 pixels. Current development apps were captured October 3 against demo OMS; deployed app commits remain unknown. The [capture record](../../assets/product-updates/screenshots/2026-10-03/capture-record.md) records the live batch, replacement, and provenance.

Company's published history image shows 18 delivered demo events with the `state=sent` filter. These are recorded demo results, not a performance promise. Products shows stored Aeon calendar rows with October 8 dates; the screenshot does not prove that Shopify calendar mappings or a calendar-sync job are active. No mappings, schedules, or integration jobs were changed or activated for these captures.

The earlier square crops and empty or unconfigured setup images are superseded for publication quality, even where they passed privacy review. They remain recoverable. Omit the empty company hierarchy and unconfigured transfer-sync showcase rather than inventing companies, subsidiaries, or facilities. Held order `M103650` was privacy-safe and briefly live but is now superseded as a weak feature example. Do not reuse it, either rejected earlier timeline image, or any rejected timeline candidate as a secondary image.

The published replacement primary uses existing order `M103648` / `HC2760`. Its visible placement, approval, brokering, shipping, picking, packing, and completion events, including Central Warehouse and Broadway context, are genuine recorded activity. Event content, timestamps, products, quantities, statuses, APIs, and backend records were not changed. As specifically authorized on October 3, native DevTools temporarily substituted only the customer-summary card's display name, email, phone, locale, billing text, and missing-field `Add` button presentation with the synthetic Avery fixture. The underlying order's original customer provenance is unproven and is not visible. The image passed actual-pixel privacy review; its published caption discloses that customer details are a fictional display-only illustration. This is a narrow user-authorized exception to the guide's normal no-DOM-replacement rule, not proof that those customer fields exist on the underlying order or permission to invent operational history. Exact synthetic illustration values are recorded internally in the capture record; no original customer identifying values are retained there.

Native Chrome verification of the public September `#order-manager` section showed the entire replacement image and disclosure caption. Clicking the image loaded the new-commit raw PNG at 2560 × 1664 pixels; the exact new tab was then closed. The internal visual proof is `tmp/public-september-fulfillment-timeline-proof.png`. Reload restored the actual customer display and missing-contact presentation, and device override `0` with DevTools closed was verified.

Retain the earlier authorized held-sample audit: person `M101284`, contact records `M104816` through `M104818`, and sales order `M103650` were created through existing REST/entity services. Read-only reconciliation confirmed the hold, disabled automatic approval, existing store/company context, product and amount values, and no inventory or fulfillment operational footprints. The synthetic postal address is not verified as unoccupied. No search-index POST was needed or called. These records remain recoverable and are not the source of the genuine fulfillment history in `M103648`. No new companies, facilities, products, mappings, jobs, inventory movements, or backend writes were needed for the new display-only illustration.

Remaining gaps are evidence and presentation gates, not browser-control blockers. Native computer use works on the inspected apps. Order Routing's existing saved simulation at `/simulate/history/M100126` contains client-identifying variant and facility labels, so it was not captured for public use. The Transfers `Inventory transfers` view contains no existing requests, including after a read-only status change to `All`; no request was created to fill the image. Replenishment remains pending a suitable populated view. Cycle Count's populated unsaved creation-plan image is published; a variance-decision/review image remains pending. Receiving transfer orders are a different workflow and must not be used to imply a direct inventory-transfer request or working Shopify-native sync.

The reviewed release note and eight product updates were originally published to HubSpot on October 3, 2026. All nine public pages were checked against that reviewed copy, and the live hub showed September as the active month with eight updates and one release. `publication-record.md` records those URLs and post IDs. The device-framed screenshot batch and the subsequent Order Manager fulfillment-timeline replacement were published and verified as recorded above, including the replacement's public image, disclosure caption, and full-size view. Routine authentication, version-parser, and thumbnail implementation notes remain in the source inventory but are not promoted as launch copy.
