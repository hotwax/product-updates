---
title: HotWax expands returns processing with AfterShip and native Shopify return flows
slug: product-updates/2026-05/hotwax-expands-returns-processing-with-aftership-and-native-shopify-return-flows
contentType: product-update
month: 2026-05
metaDescription: Returns now reach OMS earlier in the customer-service lifecycle. HotWax can import native Shopify and AfterShip returns while they are still in progress, keep…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-expands-returns-processing-with-aftership-and-native-shopify-return-flows
---

# HotWax expands returns processing with AfterShip and native Shopify return flows

Returns now reach OMS earlier in the customer-service lifecycle. HotWax can import native Shopify and AfterShip returns while they are still in progress, keep completed returns tied to their refund activity, and preserve the return channel that created the request.

That matters because returns are not one operational shape. A customer may start a return in Shopify, use AfterShip to initiate the request, receive an admin refund without restocking inventory, or exchange an item for a replacement order with new payment activity. The May returns work lets OMS classify those paths instead of reducing them all to a generic settled refund.

## What changed

- Shopify and AfterShip return records can enter OMS as in-progress or completed returns.
- Return records carry Shopify return IDs, refund IDs, return status, processed dates, return channel, customer identity, reason data, restock behavior, destination facility, and linked agreements.
- Refunds without restocked items can be classified as appeasements instead of customer returns.
- When Shopify provides a ReturnAgreement instead of a RefundAgreement, HotWax keeps the originating app and return channel instead of defaulting to the admin channel.
- Refund reconciliation now processes every Shopify order adjustment, preserves presentment currency, applies Shopify exchange-rate data correctly, and stores payment-created dates.
- NetSuite return sync records RMA, item receipt, credit memo, customer refund, invoice, return total, and response history.

## Customer impact

Customer service teams can see where a return came from, what state it is in, and whether the return is tied to a refund, appeasement, exchange, replacement order, or NetSuite sync step. Accounting and operations teams get fewer partial refund records, fewer incorrect multi-currency payment amounts, and more complete return history for downstream review.

*Sources: [hotwax-shopify-oms-bridge#106](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/106), [hotwax-shopify-oms-bridge#179](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/179), [hotwax-shopify-oms-bridge#205](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/205), [hotwax-shopify-oms-bridge#218](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/218), [hotwax-shopify-oms-bridge#168](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/168), [hotwax-oms#496](https://github.com/hotwax/hotwax-oms/pull/496), [hotwax-oms#456](https://github.com/hotwax/hotwax-oms/pull/456), [hotwax-poorti#231](https://github.com/hotwax/hotwax-poorti/pull/231), [mantle-shopify-connector#280](https://github.com/hotwax/mantle-shopify-connector/pull/280), [mantle-netsuite-connector#213](https://github.com/hotwax/mantle-netsuite-connector/pull/213), [mantle-netsuite-connector#238](https://github.com/hotwax/mantle-netsuite-connector/pull/238), [mantle-netsuite-connector#239](https://github.com/hotwax/mantle-netsuite-connector/pull/239), [mantle-netsuite-connector#242](https://github.com/hotwax/mantle-netsuite-connector/pull/242)*
