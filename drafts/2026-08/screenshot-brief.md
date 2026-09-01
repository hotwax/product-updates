# August 2026 screenshot brief

Status checked on September 1, 2026. No approved screenshot assets are attached to this branch.

The final August package has five user-interface stories that benefit from application screenshots and two backend-heavy stories that are clearer as diagrams. Capture images only from the released versions listed below, using a safe demonstration tenant with no customer personal information.

## Application screenshots

### Company integration control center

- Released build: Company `v2.2.2`
- Primary image: Shopify Inventory Sync with the per-channel publishers, sender, discard tool, and retention purge visible
- Supporting image: connection overview with the Shopify, NetSuite, carrier, Unigate, and app-version workspaces visible
- Optional image: carrier and Unigate readiness checklist or NetSuite order-push backlog and schedule

### Multi-company management

- Released build: Company `v2.2.2`
- Primary image: internal company hierarchy with parent and child organizations
- Supporting image: company detail with facility membership and the external ID helper text
- Avoid: presenting the generic external ID as a NetSuite-only field

### Connected transfer-order workflow

- Released build: Receiving `v4.2.1`
- Primary image: transfer-order creation with source, destination, and product selection
- Supporting image: created transfer detail after approval
- Avoid: a NetSuite screen unless the exact import file and completed receipt have been validated end to end

### Cycle Count

- Released build: Cycle Count `v5.2.0`
- Primary image: create count page in the store operating view
- Supporting image: Pending Review results with a safe count name or Work Effort ID
- Optional image: inventory history showing the related variance reason and outcome

### Order Routing inventory monitoring

- Released build: Order Routing `v2.2.0`
- Primary image: Online ATP calculation walkthrough for one safe product and channel
- Supporting image: Inventory Updates schedules and Data Manager queue states
- Optional image: OMS and Shopify reconciliation view

## Diagrams for backend-heavy flows

### Shopify fulfillment-location reconciliation

Use the released Shopify connector `v4.1.8` as the implementation baseline. Create a simple two-direction flow diagram:

1. Shopify changes a fulfillment location, and HotWax moves the OMS allocation.
2. HotWax reallocates fulfillment, and the scheduled synchronizer moves Shopify.
3. The fulfillment-order hash and task lifecycle prevent stale reversals and duplicate exceptions.
4. Aggregate inventory correction runs beside the move, with the absolute publisher as the recovery path.

Do not invent a management screen that does not exist.

### Event-driven Shopify inventory publishing

Use Shopify connector `v4.1.2` and Company `v2.2.2` as the implementation baseline. Show this pipeline:

Inventory event to ledger decision to Shopify batch to system message to Shopify.

Show Company reading each stage, and show an absolute reset superseding obsolete pending deltas as the recovery path.

## Deferred screenshots

Do not capture Job Manager drilldowns, Order Manager returns and holds, or the Order Manager Funnel as August assets. Those posts were deferred because their release gates did not clear by August 31.

## Capture standards

- Use the exact released app version named above.
- Prefer one clear workflow per image.
- Use descriptive lowercase file names with hyphens.
- Crop browser chrome only when the app version and environment are recorded in the capture notes.
- Use a 16:9 or 3:2 landscape crop for article headers, and retain a full-resolution source.
- Add concise alt text that states what the interface shows and why it matters.
- Record the app, tag, environment, page, and capture date beside each source image.
