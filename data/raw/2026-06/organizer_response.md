```json
{
  "repoLogicalNames": {
    "hotwax/receiving": "Receiving",
    "hotwax/bopis": "Store Pickup",
    "hotwax/job-manager": "Job Manager",
    "hotwax/hotwax-maarg-util": "Maarg Utilities",
    "hotwax/mantle-shopify-connector": "Shopify Connector",
    "hotwax/oms": "Moqui OMS",
    "hotwax/hotwax-shopify-oms-bridge": "Shopify OMS Bridge",
    "hotwax/hotwax-oms": "OFBiz OMS",
    "hotwax/hotwax-poorti": "Poorti",
    "hotwax/hotwax-ofbiz-oms-usl": "OFBiz OMS USL",
    "hotwax/mantle-netsuite-connector": "NetSuite Connector",
    "hotwax/hotwax-unigate": "Unigate",
    "hotwax/OrderRouting": "Order Routing"
  },
  "clusters": [
    {
      "name": "Order tasks as real exception work",
      "reason": "Order Tasks turn stuck orders into assigned work instead of flattening every blocker into one order status. Bad address review, substitution review, fraud review, shipment exceptions, and general hold work can each become a WorkEffort-backed task with ownership, purpose, status, comments, and resolution history.",
      "itemIds": [
        "hotwax/oms#587",
        "hotwax/oms#589",
        "hotwax/oms#593",
        "hotwax/oms#613",
        "hotwax/oms#615",
        "hotwax/oms#688",
        "hotwax/oms#697"
      ]
    },
    {
      "name": "Fraud review powered by Shopify risk",
      "reason": "Shopify risk assessment is now an OMS workflow instead of disconnected fraud context. The Shopify bridge captures risk recommendation, provider assessments, risk levels, and risk facts, then forwards that payload to OMS. OMS stores the risk rollup, evaluates risk during approval, and creates review work when an order should not move straight to fulfillment.",
      "itemIds": [
        "hotwax/hotwax-shopify-oms-bridge#232",
        "hotwax/mantle-shopify-connector#365",
        "hotwax/oms#601",
        "hotwax/oms#699",
        "hotwax/oms#702",
        "hotwax/hotwax-oms#600"
      ]
    },
    {
      "name": "Order Funnel as the fulfillment operating dashboard",
      "reason": "Order Funnel gives fulfillment teams one place to see where orders are moving, blocked, and waiting to sync. The dashboard brings together product-store metrics, brokering progress, picked and packed progress, rejected work, open orders, unfillable orders, hold tasks, and facility-level performance.",
      "itemIds": [
        "hotwax/oms#629",
        "hotwax/oms#645",
        "hotwax/oms#673",
        "hotwax/oms#676",
        "hotwax/oms#630",
        "hotwax/oms#640"
      ]
    },
    {
      "name": "Parking, ship groups, and order detail depth",
      "reason": "Order Manager also gained deeper order-level contracts. Ship group APIs now return the details an operator needs, including addresses and negative reservation context. Shipping information can be updated, ship groups can be parked, full orders can be parked, and safeguards prevent parking after fulfillment has already started.",
      "itemIds": [
        "hotwax/oms#579",
        "hotwax/oms#580",
        "hotwax/oms#582",
        "hotwax/oms#596",
        "hotwax/oms#597",
        "hotwax/oms#598",
        "hotwax/oms#608",
        "hotwax/oms#609",
        "hotwax/oms#616",
        "hotwax/oms#617",
        "hotwax/oms#618",
        "hotwax/oms#633"
      ]
    },
    {
      "name": "Customer 360 for service and order context",
      "reason": "Order Manager also gained the backend contracts for a new Customer 360 view. The customer profile is intentionally bounded: the primary customer record loads separately from orders, returns, communications, relationships, and open tasks, so the page can show a complete service picture without forcing every history list into one oversized response.",
      "itemIds": [
        "hotwax/oms#594",
        "hotwax/oms#648",
        "hotwax/oms#660",
        "hotwax/oms#641",
        "hotwax/oms#642",
        "hotwax/oms#649"
      ]
    },
    {
      "name": "Products as the operational product data app",
      "reason": "The Products app now has a stronger backend foundation for managing the product data operations teams actually work with. The June release adds APIs for products, variants, features, good identifications, product associations, Shopify shop products, product facilities, product-facility configuration, and inventory-facing product views.",
      "itemIds": [
        "hotwax/oms#35",
        "hotwax/oms#576",
        "hotwax/oms#590",
        "hotwax/oms#591",
        "hotwax/oms#595",
        "hotwax/oms#606",
        "hotwax/oms#614",
        "hotwax/oms#627",
        "hotwax/oms#690",
        "hotwax/hotwax-oms#554"
      ]
    },
    {
      "name": "Routing and Sourcing as one workspace",
      "reason": "Routing, ATP, facility groups, inventory channels, product inventory, and brokering controls are moving into one operating model. The Unified Routing and Sourcing workspace gives teams a single place to understand which inventory can be promised, which facilities participate, which rules protect inventory, and which routing decision should receive the order.",
      "itemIds": [
        "hotwax/oms#578",
        "hotwax/oms#632",
        "hotwax/oms#655",
        "hotwax/oms#659",
        "hotwax/oms#600",
        "hotwax/oms#621",
        "hotwax/oms#667",
        "hotwax/OrderRouting#121",
        "hotwax/oms#536"
      ]
    },
    {
      "name": "Job Manager V2 as the integration control plane",
      "reason": "Job Manager V2 is becoming the Maarg-first control plane for integration operations. Instead of exposing broad framework administration, the app is focused on the jobs, files, system messages, DataDocuments, search indexes, and health tools that keep OMS integrations moving.",
      "itemIds": [
        "hotwax/hotwax-maarg-util#115",
        "hotwax/hotwax-maarg-util#116",
        "hotwax/hotwax-maarg-util#107",
        "hotwax/hotwax-maarg-util#109",
        "hotwax/hotwax-maarg-util#114",
        "hotwax/hotwax-maarg-util#117",
        "hotwax/hotwax-maarg-util#120",
        "hotwax/hotwax-maarg-util#121",
        "hotwax/hotwax-maarg-util#148",
        "hotwax/hotwax-maarg-util#151",
        "hotwax/job-manager#908",
        "hotwax/oms#631",
        "hotwax/oms#674"
      ]
    },
    {
      "name": "DataDocuments as reusable report definitions",
      "reason": "The DataDocument report builder gives implementation and operations teams a low-code way to create reusable OMS reports. A DataDocument can define the root entity, related entities, selected fields, aliases, measures, conditions, preview behavior, export behavior, and scheduled delivery.",
      "itemIds": [
        "hotwax/hotwax-poorti#240",
        "hotwax/hotwax-poorti#279"
      ]
    },
    {
      "name": "Pick profiles and downstream sync queues",
      "reason": "Pick profiles now become business-controlled queues for downstream fulfillment sync. Poorti adds REST APIs for fulfillment order sync settings, including conditions, filters, customer classification, order priority, rush-order sorting, and batch behavior.",
      "itemIds": [
        "hotwax/hotwax-poorti#271",
        "hotwax/hotwax-poorti#274",
        "hotwax/hotwax-poorti#262",
        "hotwax/hotwax-oms#620"
      ]
    },
    {
      "name": "Shopify fulfillment holds and 3PL routing",
      "reason": "HotWax now has a clearer app and integration story for Shopify fulfillment holds and third-party fulfillment services. Shopify-assigned fulfillment service work can be respected instead of re-brokered, OMS-assigned 3PL work can still be routed by HotWax, and Shopify fulfillment holds can pause order processing until Shopify releases the work.",
      "itemIds": [
        "hotwax/hotwax-shopify-oms-bridge#235",
        "hotwax/hotwax-shopify-oms-bridge#238",
        "hotwax/hotwax-shopify-oms-bridge#245",
        "hotwax/hotwax-shopify-oms-bridge#269",
        "hotwax/hotwax-shopify-oms-bridge#274",
        "hotwax/hotwax-shopify-oms-bridge#276"
      ]
    },
    {
      "name": "Shopify location, inventory, and post-shipment events",
      "reason": "Shopify store setup now has a clearer operational path. HotWax can fetch Shopify locations, create OMS facilities from those locations, queue order history sync, start initial inventory reset, and prevent reset inventory from being echoed back to the same Shopify store.",
      "itemIds": [
        "hotwax/hotwax-shopify-oms-bridge#227",
        "hotwax/hotwax-shopify-oms-bridge#255",
        "hotwax/hotwax-shopify-oms-bridge#271",
        "hotwax/hotwax-shopify-oms-bridge#277",
        "hotwax/hotwax-shopify-oms-bridge#278",
        "hotwax/hotwax-shopify-oms-bridge#281",
        "hotwax/hotwax-poorti#238",
        "hotwax/hotwax-poorti#282",
        "hotwax/hotwax-poorti#283",
        "hotwax/mantle-shopify-connector#344",
        "hotwax/mantle-shopify-connector#356"
      ]
    },
    {
      "name": "Native pickup and customer communication",
      "reason": "Shopify native BOPIS fulfillment orders give HotWax a cleaner foundation for pickup demand. The app direction is to use Shopify Fulfillment Orders as the source of truth for pickup work, keep pickup, shipping, and local delivery separated, and let Poorti continue as the store execution surface for ready-for-pickup and handover.",
      "itemIds": [
        "hotwax/hotwax-poorti#259",
        "hotwax/hotwax-poorti#260",
        "hotwax/hotwax-poorti#265",
        "hotwax/hotwax-unigate#78",
        "hotwax/hotwax-unigate#83",
        "hotwax/hotwax-oms#525",
        "hotwax/oms#561",
        "hotwax/oms#620"
      ]
    },
    {
      "name": "Agent Composer and Workforce",
      "reason": "Agent Composer introduces a new way to build governed OMS agents from approved HotWax capabilities. Users can define an agent, improve its instructions, select a model, choose tools, decide which actions require approval, preview behavior, and activate the agent for use in Workforce.",
      "itemIds": [
        "hotwax/hotwax-maarg-util#102"
      ]
    },
    {
      "name": "Safer app permissions and admin surfaces",
      "reason": "June also strengthens the permission and admin base for the new apps. OMS adds Order Manager permission seed data, app-view permissions, the COMMERCE_SUPER Administrator group, and cleaner Users app permission categories. Broad generic entity access was removed in favor of bounded endpoints, and Shopify secrets are no longer shown on OMS Shopify configuration screens.",
      "itemIds": [
        "hotwax/oms#612",
        "hotwax/oms#670",
        "hotwax/oms#686",
        "hotwax/hotwax-oms#588",
        "hotwax/hotwax-oms#619"
      ]
    },
    {
      "name": "Data loading, setup, and integration reliability",
      "reason": "A release this large also needs platform cleanup. June includes data-file load ordering, duplicate demo user cleanup, status-flow transition fixes, enum data corrections, product index handling, shared phone utilities, NetSuite credential setup, and removal of fragile transaction boundaries in Shopify order processing.",
      "itemIds": [
        "hotwax/mantle-netsuite-connector#245",
        "hotwax/mantle-netsuite-connector#247",
        "hotwax/mantle-netsuite-connector#249",
        "hotwax/hotwax-shopify-oms-bridge#252",
        "hotwax/hotwax-shopify-oms-bridge#263",
        "hotwax/hotwax-shopify-oms-bridge#286",
        "hotwax/oms#635",
        "hotwax/oms#637",
        "hotwax/oms#652",
        "hotwax/oms#683",
        "hotwax/oms#706",
        "hotwax/hotwax-ofbiz-oms-usl#28",
        "hotwax/hotwax-ofbiz-oms-usl#29",
        "hotwax/hotwax-oms#603",
        "hotwax/hotwax-oms#612"
      ]
    }
  ],
  "noiseItemIds": [
    "hotwax/receiving#676",
    "hotwax/hotwax-maarg-util#110",
    "hotwax/hotwax-maarg-util#111",
    "hotwax/hotwax-maarg-util#88",
    "hotwax/hotwax-maarg-util#101",
    "hotwax/hotwax-maarg-util#118",
    "hotwax/hotwax-maarg-util#119",
    "hotwax/hotwax-maarg-util#152",
    "hotwax/hotwax-maarg-util#158",
    "hotwax/hotwax-maarg-util#160",
    "hotwax/hotwax-maarg-util#161",
    "hotwax/hotwax-maarg-util#157",
    "hotwax/mantle-shopify-connector#342",
    "hotwax/mantle-shopify-connector#361",
    "hotwax/mantle-shopify-connector#366",
    "hotwax/mantle-shopify-connector#367",
    "hotwax/oms#566",
    "hotwax/oms#516",
    "hotwax/oms#581",
    "hotwax/oms#583",
    "hotwax/oms#584",
    "hotwax/oms#625",
    "hotwax/oms#626",
    "hotwax/oms#644",
    "hotwax/oms#654",
    "hotwax/oms#657",
    "hotwax/oms#661",
    "hotwax/oms#663",
    "hotwax/oms#567",
    "hotwax/oms#556",
    "hotwax/oms#668",
    "hotwax/oms#677",
    "hotwax/oms#678",
    "hotwax/oms#604",
    "hotwax/oms#679",
    "hotwax/oms#680",
    "hotwax/oms#682",
    "hotwax/oms#685",
    "hotwax/oms#691",
    "hotwax/oms#693",
    "hotwax/oms#694",
    "hotwax/oms#638",
    "hotwax/oms#692",
    "hotwax/oms#664",
    "hotwax/hotwax-shopify-oms-bridge#220",
    "hotwax/hotwax-shopify-oms-bridge#243",
    "hotwax/hotwax-shopify-oms-bridge#249",
    "hotwax/hotwax-shopify-oms-bridge#259",
    "hotwax/hotwax-shopify-oms-bridge#268",
    "hotwax/hotwax-shopify-oms-bridge#275",
    "hotwax/hotwax-shopify-oms-bridge#279",
    "hotwax/hotwax-shopify-oms-bridge#280",
    "hotwax/hotwax-shopify-oms-bridge#262",
    "hotwax/hotwax-shopify-oms-bridge#171",
    "hotwax/hotwax-shopify-oms-bridge#282",
    "hotwax/hotwax-shopify-oms-bridge#283",
    "hotwax/hotwax-shopify-oms-bridge#287",
    "hotwax/hotwax-oms#574",
    "hotwax/hotwax-oms#584",
    "hotwax/hotwax-oms#598",
    "hotwax/hotwax-oms#599",
    "hotwax/hotwax-oms#613",
    "hotwax/hotwax-oms#592",
    "hotwax/hotwax-oms#586",
    "hotwax/hotwax-poorti#268",
    "hotwax/hotwax-poorti#142",
    "hotwax/hotwax-poorti#263",
    "hotwax/hotwax-poorti#280",
    "hotwax/hotwax-poorti#287",
    "hotwax/hotwax-ofbiz-oms-usl#27",
    "hotwax/mantle-netsuite-connector#243",
    "hotwax/mantle-netsuite-connector#246",
    "hotwax/mantle-netsuite-connector#248",
    "hotwax/hotwax-unigate#88",
    "hotwax/hotwax-unigate#89",
    "hotwax/hotwax-unigate#84",
    "hotwax/OrderRouting#119",
    "hotwax/OrderRouting#120",
    "hotwax/OrderRouting#122"
  ],
  "needClarificationItemIds": [
    "hotwax/bopis#790",
    "hotwax/oms#646",
    "hotwax/oms#607",
    "hotwax/oms#689",
    "hotwax/hotwax-shopify-oms-bridge#251"
  ]
}
```
