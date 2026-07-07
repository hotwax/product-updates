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

Cluster Description: Items cited in the current 2026-06 release note section "Native pickup and customer communication".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-poorti#259",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "259",
    "title": "Added address validation API service for Fedex in Unigate.",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/poorti/shipping/ShippingServices.xml",
      "template/shipping/unigate/ValidateAddressRequest.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#260",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "260",
    "title": "Return label fedex",
    "labels": [],
    "body": "",
    "files": [
      "data/PdfTemplateData.xml",
      "entity/FulfillmentEntities.xml",
      "screen/pdf/PrintReturnLabel.xml",
      "service/co/hotwax/poorti/FulfillmentServices.xml",
      "service/co/hotwax/poorti/shipping/ShippingServices.xml",
      "service/poorti.rest.xml",
      "template/pdf/ReturnLabel.xsl-fo.ftl",
      "template/pdf/ReturnLabelContent.xsl-fo.ftl",
      "template/shipping/unigate/GetLabelRequest.ftl",
      "template/shipping/unigate/ValidateAddressRequest.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#265",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "265",
    "title": "Added SECA to trigger an email on shipment completion and order completion",
    "labels": [],
    "body": "## Summary\r\n- Added a single seca over ship#Shipment service and handled the cases for order completion, shipment completion and Bopis order shipment.\r\n- Handled the scenario of split shipment in an order.\r\n\r\nRelated PR: github.com/hotwax/oms/pull/620\r\n\r\nCloses: #https://github.com/hotwax/hotwax-oms/issues/583",
    "files": [
      "service/poorti.secas.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-unigate#78",
    "repo": "hotwax/hotwax-unigate",
    "type": "PR",
    "number": "78",
    "title": "Klaviyo setup wizard",
    "labels": [],
    "body": "",
    "files": [
      "MoquiConf.xml",
      "data/CommGatewayConfig.xml",
      "entity/UnigateEntities.xml",
      "service/co/hotwax/communication/klaviyo/KlaviyoServices.xml",
      "service/co/hotwax/unigate/ApiInterfaceServices.xml",
      "service/co/hotwax/unigate/CommunicationServices.xml",
      "service/unigate.rest.xml",
      "src/test/groovy/co/hotwax/unigate/CommGatewayTest.groovy",
      "template/klaviyo/CreateEventTemplate.ftl",
      "template/klaviyo/CreateFlowTemplate.ftl",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v1.5.1"
  },
  {
    "id": "hotwax/hotwax-unigate#83",
    "repo": "hotwax/hotwax-unigate",
    "type": "PR",
    "number": "83",
    "title": "Unigate improvements",
    "labels": [],
    "body": "## Summary\r\n\r\n- Updated the cache expiration time for the FedEx access token.\r\n- Fixed the Gateway Auth input forms to correctly display values from the corresponding entities.\r\n- Fixed the Ometeria email template to correctly pass the default store operational hours.",
    "files": [
      "MoquiConf.xml",
      "screen/Unigate/UnigateTenant/UnigateTenantDetail.xml",
      "template/mayur/SendBOPISEmailTemplate.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v1.5.1"
  },
  {
    "id": "hotwax/hotwax-oms#525",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "525",
    "title": "Used PooledRequestFactory while communicating with shipping gateway, This will create one HttpClient and keep it alive for the whole JVM. Jetty will automatically pool per destination, so UPS/FedEx connections won’t mix.",
    "labels": [],
    "body": "## Summary\r\n- Describe what was done\r\nUsed PooledRequestFactory while communicating with the shipping gateway. This will create one HttpClient and keep it alive for the whole JVM. Jetty will automatically pool per destination, so UPS/FedEx connections won’t mix.\r\n\r\nChangelog: Changed\r\n\r\n## Log Work\r\n- Hours spent:\r\n2\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/maarg-shipping-aggregator/issues/9\r\n",
    "files": [
      "applications/hwmapps/src/main/java/co/hotwax/shipping/aggregator/ShippingAggregatorHelper.java"
    ],
    "linkedIssues": [],
    "releaseTag": "v8.5.0"
  },
  {
    "id": "hotwax/oms#561",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "561",
    "title": "Added support to create Klaviyo email flow from Klaviyo setup screen.…",
    "labels": [],
    "body": "… Enhanced screen to add support of some required fileds.",
    "files": [
      "data/DG_ExtSeed_KlaviyoEmailTemplates.xml",
      "screen/Oms/Unigate/CommunicationGateway.xml",
      "service/co/hotwax/orderledger/order/email/EmailServices.xml",
      "service/co/hotwax/unigate/UnigateServices.xml",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#620",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "620",
    "title": "Improved validations in the send#EmailOnOrderEvent service",
    "labels": [],
    "body": "## Summary\r\n* Removed the redundant `OrderHeader` lookup by moving the master-detail find above the business logic.\r\n* Shifted email type validation through `ProductStoreEmailSetting` lookup above business logic.\r\n* Removed `SystemMessage` and its type lookup, as they are no longer required.\r\n* Added logging for successful email-trigger scenarios.\r\n\r\nCloses https://github.com/hotwax/hotwax-oms/issues/71",
    "files": [
      "service/co/hotwax/orderledger/order/email/EmailServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
