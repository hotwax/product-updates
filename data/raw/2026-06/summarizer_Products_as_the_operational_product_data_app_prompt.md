You are a Product Manager at HotWax Commerce drafting a release note for a Retailer.
The reader is enthusiastic about their system and cares about system improvements and new features.

Summarize this cluster of updates into a cohesive release note entry.
For new features or enhancements, follow the structure: Problem, Solution, Impact.
For standalone bug fixes on existing features, use the pattern: "Fixed a bug if [Condition], [Symptom]."

Style Guide Snippet:
- Simpler is better.
- Active voice.
- Be granular but concise (3-4 sentences for features, 1 sentence for bug fixes).
- **Tone**: Maintain a professional, utility-focused tone. 
- **No AI Slop**: Avoid words like "enhanced", "streamlined", "seamless", or "robust".
- **No Exclamation Points**: Strictly use periods for all sentences.
- **No dev-time bugs**: Any "fixes" or "issues" found during development of a new feature should be synthesized as part of the feature's polished experience. Avoid words like "fixed", "issue", or "bug" for new features.
- **True Bug Fixes**: For standalone bug fixes, always start with "Fixed a bug..." and focus on the user-visible symptom rather than the technical reason (e.g., avoid mentioning array indexes or code crashes).

Cluster Description: Items cited in the current 2026-06 release note section "Products as the operational product data app".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#35",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "35",
    "title": "Various fixes in update#ProductAndVariants flow.",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/product/ProductServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#576",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "576",
    "title": "Added product information management APIs.",
    "labels": [],
    "body": "Added product information management APIs.\r\n1) Create Product- POST /products\r\n2) Get Product Detail- GET /products/{productId}\r\n3) Update Product Detail - PUT /products/{productId}\r\n4) Get Product Associations - GET /products/{productId}/assocs\r\n5) Create/Update Product Associations - POST /products/{productId}/assocs\r\n6) Get Shopify Shop Products - GET /products/{productId}/shopifyShopProducts\r\n6) Create/Update Shopify Shop Products - POST /products/{productId}/shopifyShopProducts",
    "files": [
      "entity/ProductExtendedEntities.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#590",
    "repo": "hotwax/oms",
    "type": "Issue",
    "number": "590",
    "title": "Implement PIM APIs",
    "labels": [],
    "body": "",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#591",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "591",
    "title": "Added product features CRUD APIs (#590).",
    "labels": [],
    "body": "Added product features and good identifications CRUD APIs.\r\n\r\nGET products/productFeatures\r\nPOST products/productFeatures\r\nPUT products/productFeatures/{productFeatureId}\r\nDELETE products/productFeatures/{productFeatureId}\r\nGET products/{productId}/identifications\r\nPOST products/{productId}/identifications\r\nPUT products/{productId}/identifications/goodIdentificationTypeId\r\nDELETE products/{productId}/identifications/goodIdentificationTypeId\r\n\r\n",
    "files": [
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#595",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "595",
    "title": "Implemented: endpoints to perform CRUD on product facility, service to get product facility records and added a view entity for inventory item and detail",
    "labels": [],
    "body": "",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/common/CommonServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#606",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "606",
    "title": "Added API to fetch product facilities.",
    "labels": [],
    "body": "",
    "files": [
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#614",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "614",
    "title": "Implemented: support to add endpoint around products and its related entities",
    "labels": [],
    "body": "Need to upgrade endpoints to move them to entity-auto if possible, and also need to reorganize the resources on correct paths.\r\nOnce the endpoints are moved to entity-auto the services defined in this PR will not be needed.",
    "files": [
      "service/co/hotwax/oms/common/CommonServices.xml",
      "service/co/hotwax/oms/product/ProductServices.xml",
      "service/co/hotwax/pim/AssociationServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#627",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "627",
    "title": "Add quantityOnHand + COALESCE-0 to ProductFacilityInventoryItemView (moqui-gql#35)",
    "labels": [],
    "body": "Supports **hotwax/moqui-gql#35** (view-backed `inventoryLevels` GraphQL connection).\n\nExtends `ProductFacilityInventoryItemView` (ProductFacility LEFT-joined to the current InventoryItem via `ProductFacility.inventoryItemId`):\n- Adds a `quantityOnHand` alias (COALESCE-0 on `II.quantityOnHandTotal`).\n- COALESCEs `availableToPromise` to 0 (was a plain nullable alias).\n\nSo a configured product+facility with no/depleted inventory reports `0`, never null. `computedInventoryCount` unchanged.\n\n**Consumer-safety audited:** the only two consumers of this view (both in `oms`) never read the `availableToPromise` alias (used for row-existence + sibling fields); no client-component consumers in the maarg/gorjana checkouts. COALESCE-0 is behavior-preserving.",
    "files": [
      "entity/OmsViewEntities.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#690",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "690",
    "title": "Changed: Refactored the Get Product Associations service",
    "labels": [],
    "body": "Changelog: Changed",
    "files": [
      "service/co/hotwax/pim/AssociationServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-oms#554",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "554",
    "title": "Fix-544: Excluded SERVICE Product Type from find products query on the Find Product Page.",
    "labels": [
      "bug"
    ],
    "body": "Changelog: Fixed\r\n\r\n#### Resolves issue\r\n- https://github.com/hotwax/hotwax-oms/issues/544\r\n\r\n## Summary\r\nOn the `Find Product` page, enabling `Include Parent` caused `SERVICE` products to appear in search results, even though they are not parent or variant products.\r\n\r\nExample:\r\n- `productId`: `JOB_ADD_BACKORD_VRT`\r\n- `productTypeId`: `SERVICE`\r\n\r\n## Cause\r\nWhen `Include Parent` is checked, the filter changes from `ff_isVariant=true` to `ff_isVariant=*`, which includes all products with an `isVariant` value.\r\n\r\nThis caused `SERVICE` products to appear along with variant and parent products.\r\n\r\n## Fix\r\nAdded a page-level filter on the merchandising `Find Product` screen:\r\n\r\n- `ff_negate_productTypeId = SERVICE`\r\n\r\nThis keeps existing `Include Parent` behavior unchanged while excluding `SERVICE` products.\r\n\r\n## Verification Steps\r\n1. Open the `Find Product` page.\r\n2. Search with `Include Parent` unchecked and confirm only variant products appear.\r\n3. Enable `Include Parent` and confirm parent products appear.\r\n4. Confirm `SERVICE` products (like `JOB_*`) do not appear.\r\n5. Search directly for a known `SERVICE` product and confirm it is excluded.\r\n\r\n## Log Work\r\n- Hours spent: 2",
    "files": [
      "applications/hwmapps/groovyScripts/commerce/merchandising/FindProducts.groovy",
      "applications/hwmapps/template/commerce/product/FindProduct.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v8.5.0"
  }
]

Output JUST the summary text.
