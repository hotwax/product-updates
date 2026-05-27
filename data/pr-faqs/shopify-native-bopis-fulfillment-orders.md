---
status: pending
title: Shopify Native BOPIS Fulfillment Order Integration
---

# Press Release

## Shopify Native BOPIS Fulfillment Order Integration

Bring Shopify native buy online, pick up in store orders into HotWax OMS and Poorti as first-class pickup work, without treating pickup as a custom shipping workaround.

**Subheading:** For retailers and store teams who want Shopify pickup promises, OMS routing, and in-store execution to stay aligned from checkout through handover.


## Summary

Shopify Native BOPIS Fulfillment Order Integration allows HotWax to use Shopify Fulfillment Orders as the source of truth for native pickup demand. When a customer chooses pickup in Shopify, HotWax can import the pickup fulfillment order, route it to the correct OMS facility, and let store associates continue using the existing Poorti Ready for pickup and Handover workflow.

This creates a cleaner operating model for retailers using Shopify native pickup. Pickup, shipping, and local delivery can remain separated inside mixed carts, customer notifications can stay owned by Shopify where appropriate, and store actions in Poorti can update Shopify only when the matching lifecycle action succeeds.


## Problem

- Shopify native pickup is represented through Fulfillment Orders, but HotWax does not currently treat those fulfillment orders as the source of truth for BOPIS.
- Pickup can be inferred from legacy line item properties, tags, or shipping data, which makes native pickup harder to support consistently.
- Mixed carts can contain pickup, shipping, and local delivery work, but OMS needs those operational flows separated exactly as Shopify created them.
- Store associates can mark pickup orders ready or handed over in Poorti even when Shopify has not accepted the matching native pickup update.
- Customers can receive duplicate or misleading communication if Shopify and HotWax both try to own pickup completion messages.


## Solution

- HotWax imports Shopify Fulfillment Orders during order sync and identifies native pickup through `FulfillmentOrder.deliveryMethod.methodType == PICK_UP`.
- Pickup fulfillment orders become OMS `STOREPICKUP` ship groups, assigned to the Shopify pickup location mapped through `ShopifyShopLocation`.
- Fulfillment order line item quantities determine what the store needs to pick, while shipping and local delivery work stay in their own flows.
- Poorti keeps the existing Ready for pickup and Handover experience, but those actions block unless Shopify accepts the matching native pickup lifecycle update.
- When HotWax creates the final Shopify fulfillment for a native pickup order, it uses `notifyCustomer=true` and does not send a separate HotWax pickup-complete email.


## Getting Started

Retailers should start by enabling Shopify native pickup locations and confirming that each Shopify location is mapped to the correct OMS facility. Once the integration is enabled, HotWax can import native pickup fulfillment orders as `STOREPICKUP` work, while store associates continue preparing and handing over pickup orders in Poorti.

For ship-to-store scenarios, Shopify remains the customer-facing pickup selection and fulfillment-order assignment layer. HotWax continues to own the operational transfer, arrival, and final pickup workflow when inventory must move to the pickup store before the customer can collect the order.


## FAQ

### What makes this different from the existing BOPIS flow?

The existing flow can rely on legacy pickup indicators such as line item properties, tags, or shipping method assumptions. This integration uses Shopify's native Fulfillment Order delivery method, so HotWax follows the same pickup work Shopify created for the customer order.

### How does this help mixed carts?

Shopify can split one customer order into separate fulfillment orders for pickup, shipping, and local delivery. HotWax can use those fulfillment orders to create the right operational work for each flow instead of treating the entire customer order as one fulfillment path.

### What changes for store associates?

Store associates should keep using the existing Poorti pickup workflow. The important change is behind the scenes: Ready for pickup and Handover only complete locally when the matching Shopify pickup update succeeds.

### Who sends pickup customer notifications?

For native Shopify pickup orders, Shopify should own the ready-for-pickup and pickup-complete customer communication. HotWax should set `notifyCustomer=true` when creating the Shopify fulfillment and should not send a separate HotWax pickup-complete email for the same pickup event.

### Does this replace HotWax ship-to-store?

No. Shopify can support pickup selection and fulfillment-order reassignment, but HotWax still owns the operational ship-to-store workflow for inbound transfer creation, arrival tracking, and final store pickup when inventory needs to move to the customer's pickup store.


## Call to Action

- Use Shopify Fulfillment Orders as the foundation for native pickup import, routing, and lifecycle sync.
- Keep Poorti as the store execution surface while making Shopify lifecycle success a requirement for local completion.
- Preserve Shopify as the customer communication owner for native pickup completion to avoid duplicate pickup emails.
