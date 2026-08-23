# August 2026 screenshot brief

This is an internal capture plan. Product screenshots should come from the released app version using a safe demonstration tenant with no customer personal information.

## Use application screenshots

### Company integration control center

- Primary image: Company connection overview with the integration workspaces visible
- Supporting image: Shopify Inventory Sync showing waiting events, batches, jobs, and recent reset activity
- Optional image: carrier and Unigate readiness checklist or NetSuite order-push backlog and schedule
- Avoid: combining unrelated pages into one dense collage

### Multi-company management

- Primary image: internal company hierarchy with parent and child organizations
- Supporting image: company detail with facility membership and the external ID helper text
- Avoid: presenting the generic external ID as a NetSuite-only field

### Connected transfer-order workflow

- Primary image: Receiving transfer-order creation with source, destination, and product selection
- Supporting image: created transfer detail after approval
- Avoid: a NetSuite screen unless the exact import file and completed receipt have been validated end to end

### Cycle Count

- Primary image: create count page in the store operating view
- Supporting image: Pending Review results with a safe count name or Work Effort ID
- Optional image: inventory history showing the related variance reason and outcome

### Order Routing inventory monitoring

- Primary image: Online ATP calculation walkthrough for one safe product and channel
- Supporting image: Inventory Updates schedules and Data Manager queue states
- Optional image: OMS and Shopify reconciliation view

## Use diagrams for backend-heavy flows

### Shopify fulfillment-location reconciliation

Create a simple two-direction flow diagram:

1. Shopify fulfillment location changes and HotWax moves the OMS allocation.
2. HotWax reallocates fulfillment and the scheduled synchronizer moves Shopify.
3. The fulfillment-order hash and task lifecycle prevent stale reversals and duplicate exceptions.
4. Aggregate inventory correction runs beside the move, with the absolute publisher as the recovery path.

Do not invent a management screen that does not exist.

### Event-driven Shopify inventory publishing

Create a compact pipeline diagram:

Inventory event to ledger decision to Shopify batch to system message to Shopify, with the Company monitor reading each stage. Show absolute reset as a recovery path that supersedes obsolete pending deltas.

## Capture only after release gates clear

### Job Manager

- Dashboard count opening the exact filtered list
- Job detail with a pinned run selected from the URL
- Shopify Bulk Operation with Shopify state and related HotWax state visible together

### Order Manager returns and holds

- Returns list and one return detail with safe product data
- General Holds page filtered to a non-dedicated purpose
- Do not use a screenshot where a customer's name, address, email, or phone number is visible

### Order Manager Funnel

- Selected product store and timezone-aware clock
- Metric or order link with a real destination
- Verify accessible progress names with browser accessibility tools; do not treat a screenshot as accessibility proof

## Capture standards

- Use the exact released app version named in the release gate.
- Prefer one clear workflow per image.
- Crop browser chrome only when the app version and environment have been recorded elsewhere in the capture notes.
- Use a 16:9 or 3:2 landscape crop for article headers and retain a full-resolution source.
- Add concise alt text that states what the interface shows and why it matters.
- Record the app, tag, environment, page, and capture date beside each source image.
