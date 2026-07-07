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

Cluster Description: Items cited in the current 2026-06 release note section "Order Funnel as the fulfillment operating dashboard".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#629",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "629",
    "title": "Added: API for listing open, inflight and packed orders",
    "labels": [],
    "body": "Related Issue: #628 \r\n\r\nChangelog: Added",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "628",
        "body": "We need to provide APIs for Open(Brokered), Inflight(with Shipment Approved) and Packed(Packed Shipments)",
        "labels": [],
        "files": [],
        "title": "APIs for Open, Inflight and Packed Orders"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#645",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "645",
    "title": "feat: implement services and rest apis for order funnel dashboard",
    "labels": [],
    "body": "- Closing Issue: https://github.com/hotwax/oms/issues/619\r\n\r\n### Description\r\nThis PR implements REST APIs, Moqui services, and view-entities to support all metrics and analytical numbers on the new Order Funnel Dashboard.\r\n\r\n### Key Changes\r\n1. **Funnel Dashboard APIs & Services:**\r\n   - `/fulfillmentProgress`: Added support for `facilityId` filtering and returns `oldestShipGroupAssignedDatetime`.\r\n   - `/openOrders`: Returns open orders count and oldest open order date.\r\n   - `/unfillable`: Updated to return hourly trend counts (`unfillableHourlyCounts`) for the current day.\r\n   - `/holdTasks`: Exposes active hold task counts (Substitute, Bad Address, Fraud Risk, and Total).\r\n   - `/facilityOrderVolume`, `/facilityFulfillmentVelocity`, `/facilityPartialFulfillments`: Facility-specific analytical services.\r\n2. **View Entities:**\r\n   - Added `OrderHoldTasksSummaryView` view-entity to query and aggregate hold task counts in a single database lookup.\r\n3. **Data Document Config:**\r\n   - Added `ORDER_FACILITY_CHANGE` DataDocument setup in both `data/DocumentData.xml` and `upgrade/UpcomingRelease/UpgradeData.xml`.\r\n\r\n### Files Modified/Added\r\n- `data/DocumentData.xml`\r\n- `entity/OmsViewEntities.xml`\r\n- `service/co/hotwax/oms/order/OrderServices.xml`\r\n- `service/oms.rest.xml`\r\n- `upgrade/UpcomingRelease/UpgradeData.xml`\r\n",
    "files": [
      "data/DocumentData.xml",
      "entity/OmsViewEntities.xml",
      "entity/OrderExtendedEntities.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml",
      "upgrade/UpcomingRelease/UpgradeData.xml",
      "upgrade/UpcomingRelease/UpgradeSql.sql"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#673",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "673",
    "title": "Add: getFacilityRejections service and REST endpoint",
    "labels": [],
    "body": "Closes #672\n\n## Summary\n- Adds `get#FacilityRejections` service in `OrderServices.xml` that queries `OrderFacilityChange` for orders moved to `REJECTED_ITM_PARKING` from a given facility\n- Exposes it at `GET /rest/s1/oms/facilities/{facilityId}/facilityRejections` in `oms.rest.xml`\n- Supports optional `productStoreId`, `changeDatetime_from`, and `changeDatetime_thru` query params\n- Returns deduplicated list of `{orderId, shipGroupSeqId}` maps\n\n## Test plan\n- [ ] `GET /rest/s1/oms/facilities/{facilityId}/facilityRejections` returns 200 with a list of rejected order/shipGroup pairs\n- [ ] `productStoreId` filter limits results to orders belonging to that store\n- [ ] `changeDatetime_from` / `changeDatetime_thru` correctly bound the date range\n- [ ] Order Manager PWA facility rejection page no longer shows 404",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "672",
        "body": "## Problem\n\nThe Order Manager PWA's facility rejection tracking feature calls `GET /rest/s1/oms/facilities/{facilityId}/facilityRejections` to display orders rejected from a facility. This endpoint did not exist, resulting in a 404 error.\n\n## Solution\n\nAdd a `get#FacilityRejections` service and its REST route that:\n- Queries `co.hotwax.facility.OrderFacilityChange` for records where `fromFacilityId` matches the given facility and `facilityId` is `REJECTED_ITM_PARKING`\n- Supports optional filtering by `productStoreId`, `changeDatetime_from`, and `changeDatetime_thru`\n- Returns distinct `orderId` / `shipGroupSeqId` combinations\n\n## REST endpoint\n\n```\nGET /rest/s1/oms/facilities/{facilityId}/facilityRejections\n  ?productStoreId=<optional>\n  &changeDatetime_from=<optional>\n  &changeDatetime_thru=<optional>\n```",
        "labels": [],
        "files": [],
        "title": "Add: getFacilityRejections REST endpoint"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#676",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "676",
    "title": "Refactor sales order list by bucket api",
    "labels": [],
    "body": "",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#630",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "630",
    "title": "Fixed: NPE, conditions and stale notification body",
    "labels": [],
    "body": "Rlated Issue: #622 \r\n\r\nChangelog: Fixed\r\n\r\nThis PR introduces following:\r\n- Improved conditions on orders and shipmnent counts.\r\n- Fix: NPE on shipmentCount in Open Fulfillment Orders Notifications.\r\n- Fix: stale notification body from previous iteration.",
    "files": [
      "service/co/hotwax/oms/order/OrderNotificationServices.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "622",
        "body": "When testing send#OrderNotification service, a NPE was observed when acessing orderCount from context.",
        "labels": [],
        "files": [],
        "title": "Bug: NPE in send#OrderNotification service for Open Shipping Orders Notifications"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#640",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "640",
    "title": "Add new service jobs for order notifications",
    "labels": [],
    "body": "Related Issue: #639 \r\n\r\nThis PR Introduces service job data for fulfillment and bopis order count notifications.",
    "files": [
      "data/AK_ServiceJobData.xml",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "639",
        "body": "We need to define the service job data for order notifications service jobs for following:\n- Ready to pickup orders count\n- Open bopis orders count\n- Open Shipping Orders count",
        "labels": [],
        "files": [],
        "title": "Define fulfillment service job data"
      }
    ],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
