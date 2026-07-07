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

Cluster Description: Items cited in the current 2026-06 release note section "Routing and Sourcing as one workspace".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#578",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "578",
    "title": "feat: store#Facility — create or update facility with address, geo, and identifications",
    "labels": [],
    "body": "## Summary\n\nAdds `store#Facility` to the OMS platform — a single idempotent service for creating or updating a Facility with address, geo point, and external identifications.\n\n**Behaviour**\n- Deduplicates on `externalId` — creates a new Facility or updates the existing one\n- `GeoPoint` — creates on first call; updates in place if coordinates change\n- Postal address — follows the ContactMech immutability rule: expires the existing `FacilityContactMech` association and creates a new `ContactMech` + `PostalAddress` + association. Never calls `update#PostalAddress`\n- `FacilityIdentification` — creates records that don't already exist (effective-dated, no duplicates)\n\n**Design intent**\nCaller is responsible for transforming source-system data to OMS model shape before calling (e.g. Shopify alpha-2 country codes must be resolved to OFBiz geoIds by the calling service). This keeps the platform service generic.\n\n## Depends on\n\nNothing — pure OMS platform.\n\n## Required by\n\n- hotwax/hotwax-shopify-oms-bridge#227 (`store#ShopifyFacility` delegates here)\n\n## Part of\n\nhotwax/company#130 (master issue)",
    "files": [
      "service/co/hotwax/oms/facility/FacilityServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#632",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "632",
    "title": "refactor: move facility contact-mech services into FacilityServices.xml",
    "labels": [],
    "body": "## Summary\n\n- Moves `create/update × FacilityAddress/FacilityPhone/FacilityEmail` and `get#FacilityContactMechs` (7 services) from `ContactMechServices.xml` into `FacilityServices.xml`\n- `ContactMechServices.xml` now contains only the two generic primitives it owns: `create#PostalAddress` and `create#TelecomNumber`\n- All facility-scoped operations now live in a single file alongside `store#Facility` (merged in #578) and `update#FacilityIdentification`\n\n## Changed files\n\n| File | Change |\n|------|--------|\n| `service/co/hotwax/oms/facility/FacilityServices.xml` | Receives 7 moved services; `store#Facility` internal calls updated |\n| `service/co/hotwax/oms/contact/ContactMechServices.xml` | 7 facility services removed; only 2 generic primitives remain |\n| `service/oms.rest.xml` | 7 REST endpoint service-name attributes updated |\n| `service/co/hotwax/orderledger/order/ShipToStoreServices.xml` | 2 `get#FacilityContactMechs` call-sites updated |\n\n## Test plan\n\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityAddress` — creates address for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityAddress` — expires old address, creates new one\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityPhone` — creates phone for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityPhone` — updates phone\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityEmail` — creates email for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityEmail` — updates email\n- [ ] `GET /rest/s1/oms/facilityContactMechs` — returns contact mechs for a facility\n- [ ] Ship-to-store flow — verify `get#FacilityContactMechs` still resolves correctly\n- [ ] No behaviour change — pure reorganisation",
    "files": [
      "service/co/hotwax/oms/contact/ContactMechServices.xml",
      "service/co/hotwax/oms/facility/FacilityServices.xml",
      "service/co/hotwax/orderledger/order/ShipToStoreServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#655",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "655",
    "title": "Added: support for tags and facilityId as in-param on order create, added endpoints for category store, shopifyShop delete and inventory location",
    "labels": [],
    "body": "…dded endpoints for category store, shopifyShop delete and inventory location",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#659",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "659",
    "title": "Remove product store facility count REST endpoint",
    "labels": [],
    "body": "## Business summary\r\nRemoves deprecated dedicated product store facility-count REST endpoint so the company frontend can stop calling a dedicated count API and compute facility counts from existing facilities associations.\\n\\n## Changes\\n- Removes \"productStores/{productStoreId}/facilities/counts\" from `service/oms.rest.xml`.\\n- Leaves \"productStores/{productStoreId}/facilities\" and related facility/facility-group endpoints intact.\\n",
    "files": [
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#600",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "600",
    "title": "Added: Service to add items to Purchase Orders",
    "labels": [],
    "body": "Changelog: Added\r\n\r\nRelated Issue: #599",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/orderledger/order/PurchaseOrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "599",
        "body": "Need following APIs for Purchase Orders on Pre Order PWA\n- API to add item.\n- APIs to get linked sales orders and suggestions.",
        "labels": [],
        "files": [],
        "title": "Purchase Orders API for Pre Order PWA"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#621",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "621",
    "title": "Added Services to update Purchase Order and Item and track updates to sync or clear pre order promised dates",
    "labels": [],
    "body": "This PR Introduces the services to update Purchase Order status and item status, sync promise dates with edd on Purchase Order Item.",
    "files": [
      "service/co/hotwax/orderledger/order/PurchaseOrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#667",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "667",
    "title": "Purchase order service enhancements",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/orderledger/order/PurchaseOrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/OrderRouting#121",
    "repo": "hotwax/OrderRouting",
    "type": "PR",
    "number": "121",
    "title": "Updated inventory sql to check if proudct does not has invenoty at lo…",
    "labels": [],
    "body": "…cation but thier substibute proudct has inventory, item will be brokered to the desired location",
    "files": [
      "sql/InventorySourceSelector.sql.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v1.15.0"
  },
  {
    "id": "hotwax/oms#536",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "536",
    "title": "Fix- Rollback in ATP rule-group execution when facility group lists are empty.",
    "labels": [
      "bug"
    ],
    "body": "#### Resolves issue\r\n\r\n- https://github.com/hotwax/hotwax-oms/issues/506\r\n\r\n## Summary\r\n\r\nThe reported `co.hotwax.atp.AtpServices.get#Products` failure was not the root cause. The transaction was already marked rollback-only earlier during ATP rule-template execution.\r\n\r\n`ProductFacilityRuleTemplate.drl.ftl` was querying `FacilityGroupMember` using `IN` conditions for `includedFacilityGroupIds` and `excludedFacilityGroupIds` even when one of these lists was empty. This caused the transaction to fail before product retrieval was reached.\r\n\r\n## Solution\r\n\r\nAdded checks in the rule template so `FacilityGroupMember` queries run only when the respective included/excluded facility group ID list contains values.\r\n\r\n## Impact\r\n\r\n- Prevents transaction rollback caused by empty facility-group member queries\r\n- Allows ATP rule-group execution to proceed to product retrieval\r\n- Avoids unnecessary job failure for partially configured facility-group conditions\r\n\r\n## Verification Steps\r\n\r\n1. Run ATP rule-group job where only included facility groups are configured and excluded is empty and vice versa.\r\n2. Verify the job does not fail with `Transaction marked for rollback, not running service co.hotwax.atp.AtpServices.get#Products`.\r\n3. Verify product retrieval completes successfully.\r\n4. Test a rule group with both included and excluded facility groups populated to confirm no regression.\r\n\r\n## Testing\r\n\r\n1. Run ATP rule-group job where either only included facility groups are configured and excluded is empty or vice versa.\r\n2. Verify the job does not fail with `Transaction marked for rollback, not running service co.hotwax.atp.AtpServices.get#Products` and product retrieval completes successfully.",
    "files": [
      "drl/ProductFacilityRuleTemplate.drl.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
