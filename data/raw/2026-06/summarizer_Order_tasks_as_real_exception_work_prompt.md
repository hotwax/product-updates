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

Cluster Description: Items cited in the current 2026-06 release note section "Order tasks as real exception work".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#587",
    "repo": "hotwax/oms",
    "type": "Issue",
    "number": "587",
    "title": "Get Tasks API",
    "labels": [],
    "body": "\nGET /orders/tasks\n\nRequest body:\n```\n{\n    customParametersMap:{},\n    pageIndex:0\n    pageSize: 20,\n    orderByField:\"\"\n} \n\n```\nResponse Structure:\n\n```\n{\n  \"tasks\": [\n    {\n      \"workEffortId\": \"string\",\n      \"orderId\": \"string\",\n      \"orderName\": \"string\",\n      \"orderExternalId\": \"string\",\n      \"productStoreId\": \"string\",\n      \"orderTypeId\": \"string\",\n      \"orderDate\": \"string\",\n      \"entryDate\": \"string\",\n      \"grandTotal\": \"string\",\n      \"statusId\": \"string\",\n      \"shipGroupSeqId\": \"string\",\n      \"shipmentMethodTypeId\": \"string\",\n      \"facilityId\": \"string\",\n      \"carrierPartyId\": \"string\",\n      \"workEffortTypeId\": \"string\",\n      \"workEffortPurposeTypeId\": \"string\",\n      \"workEffortName\": \"string\",\n      \"description\": \"string\",\n      \"createdDate\": \"string\",\n      \"createdByUserLogin\": \"string\",\n      \"customer\": {\n        \"partyId\": \"string\",\n        \"firstName\": \"string\",\n        \"lastName\": \"string\"\n      },\n      \"billingEmail\": \"string\",\n      \"billingPhone\": {\n        \"contactMechId\": \"string\",\n        \"countryCode\": \"string\",\n        \"areaCode\": \"string\",\n        \"contactNumber\": \"string\",\n        \"askForName\": \"string\"\n      },\n      \"shippingEmail\": \"string\",\n      \"shippingPhone\": {\n        \"contactMechId\": \"string\",\n        \"countryCode\": \"string\",\n        \"areaCode\": \"string\",\n        \"contactNumber\": \"string\",\n        \"askForName\": \"string\"\n      },\n      \"assignedParties\": [\n        {\n          \"partyId\": \"string\",\n          \"roleTypeId\": \"string\",\n          \"fromDate\": \"string\",\n          \"thruDate\": \"string\",\n          \"assignedByUserId\": \"string\",\n          \"comments\": \"string\",\n          \"firstName\": \"string\",\n          \"lastName\": \"string\",\n          \"groupName\": \"string\"\n        }\n      ]\n    }\n  ]\n}\n```",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#589",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "589",
    "title": "Implemented: Added Get Tasks API (#587).",
    "labels": [],
    "body": "Implemented: Added Get Tasks API (#587).\r\nGET /orders/tasks\r\n\r\nRequest body:\r\n```\r\n{\r\n    customParametersMap:{},\r\n    pageIndex:0\r\n    pageSize: 20,\r\n    orderByField:\"\"\r\n} \r\n\r\n```\r\nResponse Structure:\r\n\r\n```\r\n{\r\n  \"tasks\": [\r\n    {\r\n      \"workEffortId\": \"string\",\r\n      \"orderId\": \"string\",\r\n      \"orderName\": \"string\",\r\n      \"orderExternalId\": \"string\",\r\n      \"productStoreId\": \"string\",\r\n      \"orderTypeId\": \"string\",\r\n      \"orderDate\": \"string\",\r\n      \"entryDate\": \"string\",\r\n      \"grandTotal\": \"string\",\r\n      \"statusId\": \"string\",\r\n      \"shipGroupSeqId\": \"string\",\r\n      \"shipmentMethodTypeId\": \"string\",\r\n      \"facilityId\": \"string\",\r\n      \"carrierPartyId\": \"string\",\r\n      \"workEffortTypeId\": \"string\",\r\n      \"workEffortPurposeTypeId\": \"string\",\r\n      \"workEffortName\": \"string\",\r\n      \"description\": \"string\",\r\n      \"createdDate\": \"string\",\r\n      \"createdByUserLogin\": \"string\",\r\n      \"customer\": {\r\n        \"partyId\": \"string\",\r\n        \"firstName\": \"string\",\r\n        \"lastName\": \"string\"\r\n      },\r\n      \"billingEmail\": \"string\",\r\n      \"billingPhone\": {\r\n        \"contactMechId\": \"string\",\r\n        \"countryCode\": \"string\",\r\n        \"areaCode\": \"string\",\r\n        \"contactNumber\": \"string\",\r\n        \"askForName\": \"string\"\r\n      },\r\n      \"shippingEmail\": \"string\",\r\n      \"shippingPhone\": {\r\n        \"contactMechId\": \"string\",\r\n        \"countryCode\": \"string\",\r\n        \"areaCode\": \"string\",\r\n        \"contactNumber\": \"string\",\r\n        \"askForName\": \"string\"\r\n      },\r\n      \"assignedParties\": [\r\n        {\r\n          \"partyId\": \"string\",\r\n          \"roleTypeId\": \"string\",\r\n          \"fromDate\": \"string\",\r\n          \"thruDate\": \"string\",\r\n          \"assignedByUserId\": \"string\",\r\n          \"comments\": \"string\",\r\n          \"firstName\": \"string\",\r\n          \"lastName\": \"string\",\r\n          \"groupName\": \"string\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}\r\n```",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#593",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "593",
    "title": "Improved: Added api to get task detail. Fixed the StatusFlowTransition Data (#587)",
    "labels": [],
    "body": "Improved: Added api to get task detail. Fixed the StatusFlowTransition Data and create#OrderTask service (#587).",
    "files": [
      "data/SeedData.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#613",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "613",
    "title": "Added a view entity to get order header task which are created at header level not ship group level. Adjusted api resources accordingly (#587).",
    "labels": [],
    "body": "Added a view entity to get order header task which are created at header level not ship group level. Adjusted api resources accordingly (#587).",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#615",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "615",
    "title": "Improved: Included sales channel in View OrderHeaderTask view and added api to fetch order risk assessments (#587).",
    "labels": [],
    "body": "",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#688",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "688",
    "title": "Changed: Refactored find#PartyTasks service",
    "labels": [],
    "body": "Changelog: Changed",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/customer/CustomerPartyServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#697",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "697",
    "title": "Added: change order status endpoint",
    "labels": [],
    "body": "",
    "files": [
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
