# September 2026 joint review notes

Prepared on October 2, 2026, for review beside August on `codex/product-updates-2026-08-draft`.

The September package contains one release note and seven dedicated product updates. All items are drafts. HubSpot publication requires Aditya's review and instruction to publish.

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

## Boundaries retained in the copy

- Products displays calendar dates. Company manages Shopify mappings. Existing products need product-sync backfill after mapping setup. Inventory rules evaluate whole-day conditions on their configured schedule.
- Direct InventoryTransfer requests apply source and destination inventory adjustments together. They do not create a shipped transfer order, shipment, or receiving event.
- Company inventory metrics describe the loaded and filtered retained history. Live-change detection needs a compatible connector; older connections expose last-read time and manual refresh.
- Company notification monitoring reports stored subscriptions. When all returned records belong to the signed-in user, the page warns of possible limited scope. It does not report successful notification delivery.
- Replenishment shows recorded demand and bounded incoming-work reads. The current card edits stock settings and has no Restock action.
- Shopify native transfer jobs and kit reset jobs need shop configuration and activation. Kit jobs ship paused with an empty shop scope. Pickup-ready synchronization is opt-in and defaults off.
- Cancelling Data Manager processing stops remaining work at checkpoints. It does not undo records already imported.

## App work with deployment gates

The simulation setup wizard is included as merged app UI. The checked app calls an OMS simulation proxy path that does not appear in the reviewed OMS, Maarg utilities, or routing component sources. An implementation team must provide and validate the matching gateway and simulation environment before the full workflow can be announced as operational.

The Company MCP setup guide is included. Inline token issuance depends on an endpoint absent from the checked backend sources, so the copy points to the existing OMS access-token settings rather than promising inline issuance.

Company's fulfillment workspace is merged app work, but its pending-fulfillment, health, diagnosis, and hold endpoints were not found in the September connector releases. Keep that workspace in the review inventory; it is not presented as a working fulfillment-management launch.

## Deliberate exclusions

Job Manager dashboard and BulkOps do not have merged implementation evidence for a September launch. Order Manager return creation, cancellation, reshipment, appeasement, and cloning are not announced from inaccessible or removed actions. The prior product-store onboarding exclusion remains in effect.

Shopify outbound cancellation has a missing upgrade-path prerequisite in the reviewed September releases. The pre-order future-inventory engine and NetSuite purchase-order, inbound-shipment, and future-inventory feed work first appear in October releases. Later carrier postal-routing work is not in the September backend tag. These are excluded from released September backend claims.

## Privacy and visuals

Public prose uses shared product behavior and generic examples. Client-associated PR and changelog links have been replaced with clean, pinned shared source files where needed. Four such source links were also replaced in August; its narrative and feature eligibility were preserved, and its manifest hashes were refreshed.

No screenshot assets are attached. The strongest screenshot candidates are Company inventory event history and transfer detail, Order Manager timeline and item transfers, Products calendar, Order Routing Replenishment, and the Transfers request view. Capture from the reviewed app revision on a safe demonstration environment, record the revision and date, and verify that the image contains no customer or client-identifying data before adding it.

The publish manifest is prepared for review and marked `awaiting-review`. No HubSpot publishing action has been performed.
