---
title: HotWax expands returns processing with AfterShip and native Shopify return flows
slug: product-updates/2026-05/hotwax-expands-returns-processing-with-aftership-and-native-shopify-return-flows
contentType: product-update
month: 2026-05
metaDescription: Returns often begin before the final refund exists. A customer may open a return in Shopify, start the return through AfterShip, exchange an item, receive an a…
tagNames: [Product Update]
key: product-update:2026-05:hotwax-expands-returns-processing-with-aftership-and-native-shopify-return-flows
---

# HotWax expands returns processing with AfterShip and native Shopify return flows

Returns often begin before the final refund exists. A customer may open a return in Shopify, start the return through AfterShip, exchange an item, receive an appeasement, or complete a refund after inventory has already moved. When those paths only show up after settlement, customer service teams lose the context they need while the return is still active.

HotWax now brings native Shopify and AfterShip returns into OMS while they are still in progress, then keeps the completed return connected to refund, exchange, and downstream accounting activity. The return record carries the Shopify return and refund identifiers, return status, processed dates, channel, customer, reason, restock behavior, destination facility, and linked agreement data that explain how the return entered the system and where it is in the lifecycle.

That additional context changes how similar-looking refund outcomes are handled. A return can remain an open customer return until it closes with a refund. A refund with no restocked inventory can be classified as an appeasement instead of a customer return. HotWax can  determine the originating app and return channel from the ReturnAgreement instead of defaulting the non POS returns to the generic admin or eCommerce channel.

Refund reconciliation also has more complete financial data. HotWax processes each Shopify order adjustment, preserves presentment currency, applies Shopify exchange-rate data in the correct direction, and stores payment-created dates during order, transaction, and refund processing. Those details reduce partial refund records, inflated multi-currency amounts, and missing payment timing when teams review refunds, credit memos, exchange credits, replacement orders, and invoices.

The return lifecycle now extends beyond Shopify import. NetSuite return sync records RMA, item receipt, credit memo, customer refund, invoice, return total, and response history. OMS shows the NetSuite sync status on the return screen, and Poorti can store the return reference on shipment receipts. Customer service, operations, and accounting teams can follow the return from request through receipt, refund, exchange, and ERP sync without reconstructing the story from disconnected records.

Together, these changes make returns a lifecycle that OMS can manage while it is happening, not only a refund record imported after the fact. Teams can separate customer returns from appeasements, keep exchange and replacement activity attached to the original request, and track ERP sync progress without leaving the return context.

*Sources: [hotwax-shopify-oms-bridge#106](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/106), [hotwax-shopify-oms-bridge#179](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/179), [hotwax-shopify-oms-bridge#205](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/205), [hotwax-shopify-oms-bridge#218](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/218), [hotwax-shopify-oms-bridge#168](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/168), [hotwax-oms#496](https://github.com/hotwax/hotwax-oms/pull/496), [hotwax-oms#456](https://github.com/hotwax/hotwax-oms/pull/456), [hotwax-poorti#231](https://github.com/hotwax/hotwax-poorti/pull/231), [mantle-shopify-connector#280](https://github.com/hotwax/mantle-shopify-connector/pull/280), [mantle-netsuite-connector#213](https://github.com/hotwax/mantle-netsuite-connector/pull/213), [mantle-netsuite-connector#238](https://github.com/hotwax/mantle-netsuite-connector/pull/238), [mantle-netsuite-connector#239](https://github.com/hotwax/mantle-netsuite-connector/pull/239), [mantle-netsuite-connector#242](https://github.com/hotwax/mantle-netsuite-connector/pull/242)*
