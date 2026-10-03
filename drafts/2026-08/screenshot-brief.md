# August 2026 screenshot brief

Updated October 3, 2026. This is an internal capture plan, not public article content. The device-framed screenshot batch from documentation source commit `cb0e350de4bc7d49f9fb6c0f64e9df0c537204ee` went live across nine posts. Verification at `2026-10-03T18:25:49Z` checked exact CMS bodies and protected metadata, all 16 public pages and their full text, and 15 image placements. August's images are unchanged. September's rejected held-order image was replaced with the approved genuine fulfillment-timeline illustration from documentation source commit `8ca8c6655871655134f53e8df2d60920a5d644bb`. The existing September note and article passed exact CMS body and protected-metadata verification at `2026-10-03T18:49:32.746Z` and `2026-10-03T18:49:34.695Z`, respectively. All 16 public pages subsequently passed HTTP, full-text, image, alt-text, and enlargement checks; native Chrome also verified the replacement, disclosure caption, and 2560 × 1664 full-size image. The other seven screenshot-updated posts retain the earlier source commit. The shared [capture record](../../assets/product-updates/screenshots/2026-10-03/capture-record.md) records publication and provenance.

Aditya authorized current development apps against demo OMS. The deployed app revisions are unknown; these captures do not prove that `main` is deployed or reproduce historical August release builds. Released tags below are editorial baselines only. No companies, subsidiaries, facilities, or mappings may be invented to fill a screenshot gap. Integration jobs must not be activated for a capture.

## Application screenshots

### Company integration control center

- Released build: Company `v2.2.2`
- Published image: `company-populated-inventory-channel-macbook-air.png`
- Source: https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync, scrolled to the populated inventory-channel card
- Audience and framing: administrator; 13-inch MacBook Air with a 13.6-inch display reference, 1280 × 832 CSS pixels, saved at 2560 × 1664 pixels
- Caption scope: configured demo inventory channel and its publishing context, not an unconfigured connection or a completed end-to-end Shopify claim
- Optional future images: populated order-sync, carrier, or NetSuite operations views, only if the existing demo data supports them

### Multi-company management

- Released build: Company `v2.2.2`
- Public screenshot omitted for now: the inspected hierarchy does not provide a suitable populated parent/child showcase
- Keep the earlier `company-organization-hierarchy.jpg` recoverable, but do not publish it as the launch image
- Do not create new companies, subsidiaries, or facilities for this article
- A future image must show a real, populated demo hierarchy and mapped IDs; the generic `External ID` field must not be presented as NetSuite-only

### Connected transfer-order workflow

- Released build: Receiving `v4.2.1`
- Published images: `receiving-populated-transfers-ipad.png` and `receiving-shipment-box-ipad.png`
- Source: Receiving `/transfer-orders`, filtered by `RCV-OCT01`, and `/transfer-order-detail/M103573`
- Audience and framing: store operator; 11-inch iPad (A16) reference, 1180 × 820 CSS pixels, saved at 2360 × 1640 pixels
- Workflow shown: existing transfer orders and receiving context, with a populated transfer list and shipment-box product detail
- Caption scope: transfer review and shipment-backed receiving, not transfer creation, completed receipt, or verified NetSuite synchronization
- Provenance: the existing October 1 demo-transfer QA record confirms synthetic tracking codes and pending-receipt status; no receipts were submitted for these captures

### Cycle Count

- Released build: Cycle Count `v5.2.0`
- Published image: `cycle-count-populated-plan-ipad.png`, a populated unsaved directed-count plan for existing Brooklyn and 15 catalog variants
- Source: https://inventorycount-dev.hotwax.io/tabs/create-cycle-count; 11-inch iPad (A16) reference, 1180 × 820 CSS pixels, saved at 2360 × 1640 pixels
- Caption scope: unsaved local planning only; the create button was not pressed and no count, schedule, or stock adjustment was submitted
- A variance-history image requires an actual recorded decision; do not invent a successful review or stock adjustment
- Do not describe the gap as a browser-control blocker; native computer use is available

### Order Routing inventory monitoring

This August article is deferred and excluded from publication. Do not capture or publish a screenshot for it as part of the August package.

## Diagrams for backend-heavy flows

### Shopify fulfillment-location reconciliation

Use the released Shopify connector `v4.1.8` as the implementation baseline. Create a simple two-direction flow diagram:

1. Shopify changes a fulfillment location, and HotWax moves the OMS allocation.
2. HotWax reallocates fulfillment, and the scheduled synchronizer moves Shopify.
3. The fulfillment-order hash and task lifecycle prevent stale reversals and duplicate exceptions.
4. Aggregate inventory correction runs beside the move, with the absolute publisher as the recovery path.

Do not invent a management screen that does not exist.

### Event-driven Shopify inventory publishing

Use Shopify connector `v4.1.2` and Company `v2.2.2` as the implementation baseline. The existing published diagram shows this pipeline:

Inventory event to ledger decision to Shopify batch to system message to Shopify.

Show Company reading each stage, and show an absolute reset superseding obsolete pending deltas as the recovery path.

The published `company-populated-inventory-channel-macbook-air.png` accompanies the monitoring section. It illustrates the current demo administration view; it does not replace the flow diagram or prove every publishing stage ran during capture.

## Deferred screenshots

Do not capture Job Manager drilldowns, Order Manager returns and holds, or the Order Manager Funnel as August assets. Those posts were deferred because their release gates did not clear by August 31.

## Capture standards

- Follow `.gemini/styleguide.md` and its product screenshot standard.
- Use the intended operator's full reference viewport, not a square crop or incidental browser-window size.
- Capture the actual development UI at 2× with native Chrome DevTools, retaining the original proportions, navigation, useful controls, and populated demo context.
- Preserve application layout and genuine data. The previously described halo is a Codex capture overlay, not application UI; hide only the verified tooling overlay and retake a cursor-free image. Do not retouch, pad, stretch, replace DOM text, or intercept API responses. The separately authorized September customer-summary illustration is a documented, narrow exception, not a general capture policy.
- Record current development/demo provenance and mark the deployed revision unknown when not verified.
- Add short alt text and a caption that describes the visible workflow without claiming historical-device testing, completed processing, or performance guarantees.
- Restore temporary viewport overrides after capture.
- Keep rejected first-pass assets recoverable. Do not claim replacements are live until the root publisher verifies the public images and captions.
