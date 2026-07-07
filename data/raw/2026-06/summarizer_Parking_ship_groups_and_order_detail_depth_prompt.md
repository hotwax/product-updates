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

Cluster Description: Items cited in the current 2026-06 release note section "Parking, ship groups, and order detail depth".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#579",
    "repo": "hotwax/oms",
    "type": "Issue",
    "number": "579",
    "title": "Get Order Ship Group API",
    "labels": [],
    "body": "Add an API endpoint to fetch Order ship group with the necessary details. Use the productAssocTypeId=PRODUCT_SUBSTITUTE to fetch product substitutes.\n\nendpoint: GET /orders/{orderId}/shipGroups/{shipGroupSeqId}\nResponse:\n```\n{\n  \"shipGroup\": {\n    \"orderId\": \"string\",\n    \"orderName\": \"string\",\n    \"orderExternalId\": \"string\",\n    \"orderDate\": \"string\",\n    \"orderStatusId\": \"string\",\n    \"productStoreId\": \"string\",\n    \"entryDate\": \"string\",\n    \"grandTotal\": \"string\",\n    \"currencyUom\": \"string\",\n    \"salesChannel\": \"string\",\n    \"shipGroupSeqId\": \"string\",\n    \"carrierPartyId\": \"string\",\n    \"shipmentMethodTypeId\": \"string\",\n    \"shippingInstructions\": \"string\",\n    \"customer\": {\n      \"partyId\": \"string\",\n      \"firstName\": \"string\",\n      \"lastName\": \"string\"\n    },\n    \"items\": [\n      {\n        \"orderId\": \"string\",\n        \"orderItemSeqId\": \"string\",\n        \"shipGroupSeqId\": \"string\",\n        \"itemStatusId\": \"string\",\n        \"facilityId\": \"string\",\n        \"productId\": \"string\",\n        \"quantity\": \"string\",\n        \"unitPrice\": \"string\",\n        \"substituteProducts\": [\n          {\n            \"productId\": \"string\",\n            \"sequenceNum\": \"string\",\n            \"productTypeId\": \"string\",\n            \"productName\": \"string\",\n            \"internalName\": \"string\",\n            \"price\": 0,\n            \"currencyUomId\": \"string\"\n          }\n        ]\n      }\n    ],\n    \"billingEmail\": \"string\",\n    \"billingPhone\": {\n      \"contactMechId\": \"string\",\n      \"countryCode\": \"string\",\n      \"areaCode\": \"string\",\n      \"contactNumber\": \"string\",\n      \"askForName\": \"string\"\n    },\n    \"shippingEmail\": \"string\",\n    \"shippingPhone\": {\n      \"contactMechId\": \"string\",\n      \"countryCode\": \"string\",\n      \"areaCode\": \"string\",\n      \"contactNumber\": \"string\",\n      \"askForName\": \"string\"\n    }\n  }\n}\n```",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#580",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "580",
    "title": "Added API to fetch the order ship group detail (#579)",
    "labels": [],
    "body": "Added API to fetch the order ship group detail.\r\n\r\nSample output - \r\nGET /orders/1/shipGroups/00001\r\n\r\n```\r\n{\r\n  \"shipGroup\": {\r\n    \"orderId\": \"1\",\r\n    \"orderName\": \"HCDEV#3420\",\r\n    \"orderExternalId\": \"6688695255204\",\r\n    \"orderDate\": 1744065981000,\r\n    \"orderStatusId\": \"ORDER_CANCELLED\",\r\n    \"productStoreId\": \"STORE\",\r\n    \"entryDate\": 1744078133917,\r\n    \"grandTotal\": 0,\r\n    \"currencyUom\": \"USD\",\r\n    \"salesChannel\": null,\r\n    \"shipGroupSeqId\": \"00001\",\r\n    \"facilityId\": \"_NA_\",\r\n    \"carrierPartyId\": \"_NA_\",\r\n    \"shipmentMethodTypeId\": \"STANDARD\",\r\n    \"shippingInstructions\": null,\r\n    \"items\": [\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00101\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00102\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00103\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00104\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00105\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00106\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00107\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00108\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00109\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00110\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00111\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00112\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00113\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      }\r\n    ],\r\n    \"customer\": {\r\n      \"partyId\": \"10000\",\r\n      \"firstName\": \"Orange\",\r\n      \"lastName\": \"Cath\"\r\n    },\r\n    \"billingEmail\": null,\r\n    \"billingPhone\": null,\r\n    \"shippingEmail\": \"shubham.namdeo@hotwax.co\",\r\n    \"shippingPhone\": {\r\n      \"areaCode\": null,\r\n      \"askForName\": null,\r\n      \"contactMechId\": \"10069\",\r\n      \"contactNumber\": \"9098840126\",\r\n      \"lastUpdatedStamp\": 1744078152441,\r\n      \"countryCode\": \"91\"\r\n    }\r\n  }\r\n}\r\n```",
    "files": [
      "service/co/hotwax/orderledger/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#582",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "582",
    "title": "Improved: Included billing/shipping address in Get Order Ship Group API (#579)",
    "labels": [],
    "body": "Improved: Included billing/shipping address in Get Order Ship Group API.\r\n\r\nSample Response:\r\n```\r\n{\r\n  \"shipGroup\": {\r\n    \"orderId\": \"1\",\r\n    \"orderName\": \"HCDEV#3420\",\r\n    \"orderExternalId\": \"6688695255204\",\r\n    \"orderDate\": 1744065981000,\r\n    \"orderStatusId\": \"ORDER_CANCELLED\",\r\n    \"productStoreId\": \"STORE\",\r\n    \"entryDate\": 1744078133917,\r\n    \"grandTotal\": 0,\r\n    \"currencyUom\": \"USD\",\r\n    \"salesChannel\": null,\r\n    \"shipGroupSeqId\": \"00001\",\r\n    \"facilityId\": \"_NA_\",\r\n    \"carrierPartyId\": \"_NA_\",\r\n    \"shipmentMethodTypeId\": \"STANDARD\",\r\n    \"shippingInstructions\": null,\r\n    \"items\": [\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00101\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00102\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00103\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00104\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00105\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00106\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00107\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00108\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00109\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00110\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00111\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00112\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00113\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      }\r\n    ],\r\n    \"customer\": {\r\n      \"partyId\": \"10000\",\r\n      \"firstName\": \"Orange\",\r\n      \"lastName\": \"Cath\"\r\n    },\r\n    \"billingAddress\": {},\r\n    \"billingEmail\": null,\r\n    \"billingPhone\": null,\r\n    \"shippingAddress\": {\r\n      \"countryGeoName\": \"United States\",\r\n      \"countryGeoCodeAlpha2\": \"US\",\r\n      \"countryGeoCodeAlpha3\": \"USA\",\r\n      \"countryGeoCodeNumeric\": \"840\",\r\n      \"stateGeoName\": \"New York\",\r\n      \"stateGeoCodeAlpha2\": \"NY\",\r\n      \"stateGeoCodeAlpha3\": \"NY\",\r\n      \"stateGeoCodeNumeric\": null,\r\n      \"contactMechId\": \"10002\",\r\n      \"toName\": \"Catharine Chao\",\r\n      \"attnName\": null,\r\n      \"address1\": \"37-18 Northern Blvd\",\r\n      \"address2\": \"142-Long Isle Township\",\r\n      \"houseNumber\": null,\r\n      \"houseNumberExt\": null,\r\n      \"directions\": null,\r\n      \"city\": \"New York\",\r\n      \"cityGeoId\": null,\r\n      \"postalCode\": \"11101\",\r\n      \"postalCodeExt\": null,\r\n      \"countryGeoId\": \"USA\",\r\n      \"stateProvinceGeoId\": \"NY\",\r\n      \"countyGeoId\": null,\r\n      \"municipalityGeoId\": null,\r\n      \"postalCodeGeoId\": null,\r\n      \"geoPointId\": \"10000\",\r\n      \"encodedAddressKey\": null,\r\n      \"latitude\": 40.7519244,\r\n      \"longitude\": -73.9254192\r\n    },\r\n    \"shippingEmail\": \"shubham.namdeo@hotwax.co\",\r\n    \"shippingPhone\": {\r\n      \"areaCode\": null,\r\n      \"askForName\": null,\r\n      \"contactMechId\": \"10069\",\r\n      \"contactNumber\": \"9098840126\",\r\n      \"lastUpdatedStamp\": 1744078152441,\r\n      \"countryCode\": \"91\"\r\n    }\r\n  }\r\n}\r\n```",
    "files": [
      "service/co/hotwax/orderledger/order/OrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#596",
    "repo": "hotwax/oms",
    "type": "Issue",
    "number": "596",
    "title": "Add API to update shipping information of ship group",
    "labels": [],
    "body": "",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#597",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "597",
    "title": "Improved: Included item's nagative reservation detail in Get Ship Group API (#587)",
    "labels": [],
    "body": "Improved: Included item's nagative reservation detail in Get Ship Group API. This will help app side to decide if the item is available or not.",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/orderledger/order/OrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#598",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "598",
    "title": "Implemented: Added API to update shipping information of ship group (#596)",
    "labels": [],
    "body": "Implemented: Added API to update shipping information of ship group (#596)",
    "files": [
      "service/co/hotwax/oms/contact/ContactMechServices.xml",
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#608",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "608",
    "title": "Implemented: Added an API to park the order item ship group (#609).",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#609",
    "repo": "hotwax/oms",
    "type": "Issue",
    "number": "609",
    "title": "Add API to part and order item ship group.",
    "labels": [],
    "body": "## `park#Order` Service\n\n**Service:** `co.hotwax.oms.order.OrderServices.park#Order`\n**REST API:** `POST /orders/{orderId}/shipGroups/{shipGroupSeqId}/park`\n\n---\n\n### Overview\nAdds the ability to park all approved items of an order ship group to a virtual parking facility. This is useful when an order needs to be held back from fulfillment temporarily without rejecting it.\n\n---\n\n### What it does\n1. **Validates** the target `facilityId` is a virtual facility — returns an error if not.\n2. **Finds all `ITEM_APPROVED` items** in the given ship group.\n3. **Cancels inventory reservations** for each item — but only if the current ship group is assigned to a physical (non-virtual) facility, releasing ATP back to that facility.\n4. **Moves each item** to the parking facility via `process#OrderItemAllocation`, which:\n   - Finds an existing ship group at the parking facility or creates a new one (copying fields from the original)\n   - Updates `OrderItem.shipGroupSeqId` to the new ship group\n   - Skips inventory reservation since the target is a virtual facility\n   - Creates an `OrderFacilityChange` record for traceability\n\n---\n\n### Parameters\n| Parameter | Required | Default | Description |\n|---|---|---|---|\n| `orderId` | Yes | — | The order to park |\n| `shipGroupSeqId` | Yes | — | The ship group to park |\n| `facilityId` | Yes | — | Virtual parking facility ID |\n| `changeReasonEnumId` | No | `ORDER_PARKING` | Reason code on the `OrderFacilityChange` record |\n| `comments` | No | — | Optional notes |\n\n---\n\n### Key design decisions\n- **Original ship group is not modified** — a new ship group at the parking facility is created (or reused if one already exists), and items are moved to it.\n- **Reservation cancellation is conditional** — if the order is already at a virtual facility (e.g., previously parked or pre-order), there is no reservation to cancel and this step is skipped.\n- **No inventory variance or facility exclusion** — unlike rejection, parking does not penalize the source facility or record a stock discrepancy.",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#616",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "616",
    "title": "Added api to Park order, and updated the park#Order service logic accordingly",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#617",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "617",
    "title": "Added checks to not allow parking an order if the fulfillment is already started.",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#618",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "618",
    "title": "Improved: Added active shipment check when parking the complete order.",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#633",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "633",
    "title": "Prevent status updates for cancelled and completed order items",
    "labels": [],
    "body": "## Summary\r\n\r\nUpdated the item status update logic to prevent any status changes for order items that are already in a terminal state (`ITEM_CANCELLED` or `ITEM_COMPLETED`).\r\n\r\n## Problem\r\n\r\nPreviously, cancelled items could still be updated to certain statuses based on the incoming status value. This created inconsistent behavior and allowed status transitions for items that should no longer be modified.\r\n\r\n## Changes\r\n\r\nSimplified the validation logic to always skip status updates when an order item is already:\r\n\r\n* `ITEM_CANCELLED`\r\n* `ITEM_COMPLETED`\r\n\r\n### Before\r\n\r\nCancelled items could still be processed for specific status transitions.\r\n\r\n### After\r\n\r\nAny update request for cancelled or completed items is ignored, and processing exits with a skip message.\r\n\r\n## Expected Outcome\r\n\r\n* Prevents invalid status transitions for terminal order item states.\r\n* Ensures cancelled and completed items remain immutable.\r\n* Simplifies status validation logic and improves maintainability.\r\n\r\nCloses: #636 \r\n",
    "files": [
      "service/co/hotwax/oms/order/OrderServices.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "636",
        "body": "The item status update service allows certain status transitions for order items that are already in the ITEM_CANCELLED state.\n\nCurrent Behavior\n\nThe validation logic prevents updates for:\n\nITEM_COMPLETED items\nITEM_CANCELLED items only when the incoming status is not ITEM_APPROVED or ITEM_COMPLETED\n\nAs a result, cancelled items can still be updated to specific statuses, causing invalid state transitions.",
        "labels": [],
        "files": [],
        "title": "Cancelled order items can still receive status updates"
      }
    ],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
