# August and September screenshot capture record

Captured October 3, 2026 from the live development apps using demo OMS and its paired demo Maarg backend. These images illustrate the current development UI, not historical release-tag builds. No fixture responses, DOM edits, or backend record changes were used. Unsaved creation forms were not submitted. Independent pixel review approved all seven captures for client-name, personal-data, and credential safety.

| File | Source page | Captured at (UTC) | Scope |
| --- | --- | --- | --- |
| company-shopify-inventory-sync.jpg | https://company-dev.hotwax.io/shopify-connection-details/10000/inventory-sync | 16:32:55 | Inventory queues and demo job configuration |
| company-organization-hierarchy.jpg | https://company-dev.hotwax.io/organization-details/COMPANY | 16:43:25 | Organization identity, External ID, and hierarchy; cropped above facility records |
| company-shopify-transfer-sync.jpg | https://company-dev.hotwax.io/shopify-connection-details/10010/transfer-sync | 16:45:48 | Outstanding changes, webhook and job health, shipment and receipt stages |
| company-inventory-event-history.jpg | https://company-dev.hotwax.io/shopify-connection-details/10010/inventory-sync/history | 16:46:34 | Real demo event history, filters, and sample delivery metrics |
| order-manager-order-timeline.jpg | https://order-manager-dev.hotwax.io/orders/M103469 | 16:47:08 | Existing demo order timeline; cropped to exclude customer and payment details |
| receiving-create-transfer-order.jpg | https://receiving-dev.hotwax.io/create-order | 16:48:36 | Unsaved transfer creation form |
| products-product-calendar.jpg | https://products-dev.hotwax.io/product-calendar | 16:49:16 | Stored demo product and variant lifecycle dates |

Job configuration, mapping counts, and delivery metrics describe the captured demo state. They are not claims that every feature is configured or a performance guarantee. The deployed app commit was not independently verified; release behavior remains supported by the source evidence in each article.

## Remaining capture work

Chrome reported another extension's UI blocking control on the Order Routing, Cycle Count, and Transfers tabs. Aditya was asked to close that extension panel and resume. Replenishment, routing simulation preview, count creation, and inventory-transfer request screenshots remain pending. Isolated main checkouts are prepared as a fallback; no local app server was started.
