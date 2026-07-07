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

Cluster Description: Items cited in the current 2026-06 release note section "Data loading, setup, and integration reliability".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/mantle-netsuite-connector#245",
    "repo": "hotwax/mantle-netsuite-connector",
    "type": "PR",
    "number": "245",
    "title": "Feat: Implemented netsuite configuration screen to setup M2M connection for RestApi. Also added support to verify credentails and delete it from UI. (244-implement-netsuite-configuration-screen)",
    "labels": [],
    "body": "…\r\n\r\n## Summary\r\n- Implemented NetSuite configuration screen to set up M2M connection for RestApi. Also added support to verify and delete credentials in the UI. (244-implement-netsuite-configuration-screen)\r\n\r\n## Log Work\r\n- Hours spent: 4h\r\n\r\n## Issue Link\r\n- [Closes #](https://github.com/hotwax/mantle-netsuite-connector/issues/244)\r\n",
    "files": [
      "MoquiConf.xml",
      "screen/NetSuiteConfiguration.xml",
      "service/co/hotwax/netsuite/NetSuiteConfigurationServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.6.0"
  },
  {
    "id": "hotwax/mantle-netsuite-connector#247",
    "repo": "hotwax/mantle-netsuite-connector",
    "type": "PR",
    "number": "247",
    "title": "Use shared PhoneUtils for phone validation and formatting",
    "labels": [],
    "body": "## Summary\r\n- Removed local com.googlecode.libphonenumber:libphonenumber dependency from build.gradle\r\n- Added dependency on maarg-util in component.xml\r\n- Deleted the local co.hotwax.ns.util.PhoneValidationUtil utility class\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-maarg-util/issues/154\r\n",
    "files": [
      "build.gradle",
      "component.xml",
      "service/co/hotwax/netsuite/OrderServices.xml",
      "src/main/java/co/hotwax/ns/util/PhoneValidationUtil.java"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.6.0"
  },
  {
    "id": "hotwax/mantle-netsuite-connector#249",
    "repo": "hotwax/mantle-netsuite-connector",
    "type": "PR",
    "number": "249",
    "title": "Changed phone utility location from PhoneUtils to MaargUtil",
    "labels": [],
    "body": "## Summary\r\n- Change phone utility location from PhoneUtils to MaargUtil\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/285\r\n",
    "files": [
      "service/co/hotwax/netsuite/OrderServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.6.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#252",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "252",
    "title": "Extract Country and Area Codes from Phone Numbers",
    "labels": [],
    "body": "## Summary\r\n\r\n* Added phone number parsing using Google's libphonenumber in `prepareTransformedShopifyOrderPayload.groovy`\r\n* Introduced a reusable `parsePhoneNumber` helper to extract `countryCode`, `areaCode`, and `contactNumber`\r\n* Updated order-level, billing, and shipping phone mappings to use parsed phone number data\r\n* Added fallback behavior to preserve existing functionality by storing the raw phone number when parsing fails\r\n* Used address country codes as the default parsing region when available, with a fallback to `US`\r\n\r\n## Log Work\r\n- Hours spent: 3\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/595\r\n",
    "files": [
      "build.gradle",
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#263",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "263",
    "title": "Consume shared PhoneUtils from maarg-util and clean up local dependency",
    "labels": [],
    "body": "## Summary\r\n- Removed com.googlecode.libphonenumber:libphonenumber from build.gradle\r\n- Declared dependency on maarg-util in component.xml\r\n- Replaced direct libphonenumber usage in prepareTransformedShopifyOrderPayload.groovy with PhoneUtils.parsePhoneNumber helper call\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-maarg-util/issues/154\r\n",
    "files": [
      "build.gradle",
      "component.xml",
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#286",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "type": "PR",
    "number": "286",
    "title": "Changed phone utility location from PhoneUtils to MaargUtil",
    "labels": [],
    "body": "## Summary\r\n- Change phone utility location from PhoneUtils to MaargUtil\r\n\r\n## Log Work\r\n- Hours spent:1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/285\r\n",
    "files": [
      "script/co/hotwax/sob/order/prepareTransformedShopifyOrderPayload.groovy"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.5.0"
  },
  {
    "id": "hotwax/oms#635",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "635",
    "title": "Fix StatusFlowTransition attribute in SeedData.xml (statusIdTo → toStatusId)",
    "labels": [],
    "body": "### What & why\nThe 8 `StatusFlowTransition` records in `data/SeedData.xml` (the `Default` flow for `TASK_*` work-effort statuses, added in 39628e6) used the attribute `statusIdTo`, which is **not a field** on `moqui.basic.StatusFlowTransition` — the field is `toStatusId` (`framework/entity/BasicEntities.xml`, PK). The unmapped attribute left the required PK `toStatusId` null, so the load threw *\"Required field To Status ID is missing\"* and **rolled back the whole file in its single transaction**, dropping the `LocalFeedFile` `SystemMessageType` (line 9) that ~138 downstream child types depend on — cascading into ~26 skipped data files.\n\nFixes #634.\n\n### The fix\nRenamed `statusIdTo` → `toStatusId` on the 8 affected records. No values changed; the referenced statuses (`TASK_CREATED`, `TASK_IN_PROGRESS`, `TASK_ON_HOLD`, `TASK_COMPLETED`, `TASK_CANCELLED`) are all defined as `StatusItem` records immediately above (lines 104–108), so the records are valid once the attribute name is correct.\n\n```diff\n- <moqui.basic.StatusFlowTransition statusFlowId=\"Default\" statusId=\"TASK_CREATED\" statusIdTo=\"TASK_IN_PROGRESS\" transitionName=\"In Progress\"/>\n+ <moqui.basic.StatusFlowTransition statusFlowId=\"Default\" statusId=\"TASK_CREATED\" toStatusId=\"TASK_IN_PROGRESS\" transitionName=\"In Progress\"/>\n```\n(× 8 records)\n\n### Verification\nFull `./gradlew load` (types=all) on an empty DB, before vs after:\n\n| | Before | After |\n|---|---|---|\n| `StatusFlowTransition` load error | present | **gone** |\n| Skipped data files | 13 (26 skip events) | **2** |\n| Records loaded | 11,197 | **11,508** |\n| `LocalFeedFile` parent-FK cascade | ~26 files | **resolved** |\n\nThe 2 remaining skips are pre-existing, unrelated **demo data** (`poorti/PoortiCarrierConfigDemoData.xml` `type=demo`, `mantle-shopify-connector/ShopifyConfigDemoData.xml` `type=ext-demo`) — out of scope for this PR.\n\n### Scope\n- Single file: `data/SeedData.xml`\n- Data-only change; no schema, service, or logic changes.",
    "files": [
      "data/SeedData.xml"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "634",
        "body": "### Summary\nThe 8 `StatusFlowTransition` records in `data/SeedData.xml` use the attribute name **`statusIdTo`**, which is not a field on the `StatusFlowTransition` entity. The correct field is **`toStatusId`**. Because the attribute doesn't map to any field, the required primary-key field `toStatusId` is never set, and the load fails with:\n\n```\norg.moqui.service.ServiceException: Required field To Status ID is missing, cannot create Status Flow Transition\n```\n\n### Impact\nMoqui loads each data file in a **single transaction**, so this one error **rolls back the entire `SeedData.xml` file** — not just the 8 bad records. Critically, that includes the foundational record on line 9:\n\n```xml\n<moqui.service.message.SystemMessageType systemMessageTypeId=\"LocalFeedFile\" description=\"Local Feed File\"/>\n```\n\n`LocalFeedFile` is the parent `SystemMessageType` referenced (via `parentTypeId`) by ~138 child `SystemMessageType` records across downstream components (`shopify-oms-bridge`, `mantle-shopify-connector`, `poorti`, `ofbiz-oms-usl`). With `LocalFeedFile` missing, all of those children fail their parent foreign-key check (`record specified does not exist [23506]`).\n\n**Observed on a full `./gradlew load`:** this single bad attribute cascaded into **~26 skipped data files**. Once the attribute is corrected, the cascade collapses to just 2 unrelated demo-data files.\n\n### Root cause / reference\n- **Entity definition:** `moqui.basic.StatusFlowTransition` in `moqui-framework` → `framework/entity/BasicEntities.xml`. The \"to\" status PK field is named `toStatusId`:\n  ```xml\n  <entity entity-name=\"StatusFlowTransition\" package=\"moqui.basic\" use=\"configuration\" cache=\"true\">\n      <field name=\"statusFlowId\" type=\"id\" is-pk=\"true\"/>\n      <field name=\"statusId\"     type=\"id\" is-pk=\"true\"/>\n      <field name=\"toStatusId\"   type=\"id\" is-pk=\"true\"/>\n      ...\n  </entity>\n  ```\n  There is no `statusIdTo` field on the entity.\n- **Where introduced:** commit 39628e6 (2026-06-01, \"Added order task related services\") added the `Default` status flow for the `TASK_*` work-effort statuses using the wrong attribute name.\n- **Corroborating evidence:** across the entire codebase, the correct `toStatusId=` is used **373 times**; `statusIdTo=` appears only in these **8 records** in this file.\n\n### Steps to reproduce\n1. Fresh `./gradlew load` (types=all) on an empty DB.\n2. Observe `Required field To Status ID is missing` on `data/SeedData.xml`, followed by `record specified does not exist [23506]` skips for `SystemMessageType` records in downstream components.\n\n### Expected\n`SeedData.xml` loads fully; `LocalFeedFile` and the 8 `StatusFlowTransition` records are created; no downstream `SystemMessageType` parent-FK cascade.",
        "labels": [],
        "files": [],
        "title": "SeedData.xml fails to load — StatusFlowTransition records use non-existent attribute statusIdTo (should be toStatusId)"
      }
    ],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#637",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "637",
    "title": "Consolidate hotwax.user as demo data; fix UserAccount password inconsistency",
    "labels": [],
    "body": "### Problem\n`hotwax.user` is demo/test data, but it was defined in **two** places with conflicting `moqui.security.UserAccount` records:\n\n| File | Type | Password | Hash | passwordHashType |\n|---|---|---|---|---|\n| `oms/data/HCUserData.xml` | `ext-user` | `moqui` | SHA-1 | `SHA` |\n| `hotwax-ofbiz-oms-usl/data/UserData.xml` | `demo` | `hotwax@786` | SHA-256 | *(none → default SHA-256)* |\n\nBoth use create-or-update on the same `userId=HOTWAX_USER`. The usl record loads last and overwrites `currentPassword` with the SHA-256 hash of `hotwax@786`, **but does not set `passwordHashType`** — leaving the stale `SHA` (SHA-1) from this file. Login then fails: Moqui SHA-1-hashes the entered password and compares it to a SHA-256 stored value, which can never match.\n\n### Change\nMake this file the single source of truth for the demo user:\n1. Retype `ext-user` → **`demo`** — `hotwax.user` is demo/test data, not install data. (It already doesn't load under `loadProduction`; this just classifies it correctly so only the demo loader picks it up.)\n2. Set **one consistent `UserAccount`**: password `hotwax@786`, default SHA-256 hash, `passwordBase64=\"N\"`. Dropped the stale `passwordHashType=\"SHA\"` and the misleading `passwordHint`.\n\n```diff\n-<entity-facade-xml type=\"ext-user\">\n+<entity-facade-xml type=\"demo\">\n     <moqui.security.UserAccount userId=\"HOTWAX_USER\" username=\"hotwax.user\" userFullName=\"Hotwax User\"\n-        currentPassword=\"16ac58bbfa332c1c55bd98b53e60720bfa90d394\" passwordHashType=\"SHA\"\n-        passwordHint=\"framework name, lowercase\" currencyUomId=\"USD\" .../>\n+        currentPassword=\"6c393d0e69cbbb603f71c0672a25dcf5b195897ef94372818e3358e56047bd44\" passwordBase64=\"N\"\n+        currencyUomId=\"USD\" .../>\n```\n\n### Paired change\nThe duplicate `UserAccount` definition is removed from `hotwax-ofbiz-oms-usl` in a separate PR (delete `data/UserData.xml`). **Merge both together** so the user is defined in exactly one place. Either merge order is safe — both records resolve to the same SHA-256/`hotwax@786` once this PR lands.\n\n### Verification\nFresh `./gradlew load` then login as `hotwax.user` / `hotwax@786` (basic-auth probe: correct password → past the 401 gate; wrong → 401). No manual `PASSWORD_HASH_TYPE` patch needed afterward.\n\n### Scope\nSingle file, data-only (`data/HCUserData.xml`). No schema/service/logic changes.",
    "files": [
      "data/HCUserData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#652",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "652",
    "title": "Added migration service to generic level from adoc-maarg component",
    "labels": [],
    "body": "Added migration service to generic level from adoc-maarg component",
    "files": [
      "entity/OmsViewEntities.xml",
      "service/co/hotwax/oms/MigrationServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#683",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "683",
    "title": "In Moqui, data files within a component's data/ directory are loaded …",
    "labels": [],
    "body": "…alphabetically. To ensure that dependent data (such as user records) is loaded after its prerequisites (such as security groups and permissions) are defined, we need to prefix the data files with an alphabetical sequence (e.g., AA_, AB_, AC_).",
    "files": [
      "data/AA_SeedData.xml",
      "data/AB_SetupData.xml",
      "data/AC_OmsSecurityPermData.xml",
      "data/AD_TransferOrderSeedData.xml",
      "data/AE_AtpSeedData.xml",
      "data/AF_DocumentData.xml",
      "data/AG_OmsCommunicationGatewayData.xml",
      "data/AH_OmsShippingGatewayData.xml",
      "data/AI_WebhookDataFeed.xml",
      "data/AJ_HCUserData.xml",
      "data/AK_ServiceJobData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#706",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "706",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "body": "",
    "files": [
      "data/AA_Seed_OrderHoldTypeData.xml",
      "data/BA_SeedInitial_AF_DocumentData.xml",
      "data/DA_ExtSeed_AA_SeedData.xml",
      "data/DB_ExtSeed_AB_SetupData.xml",
      "data/DC_ExtSeed_AC_OmsSecurityPermData.xml",
      "data/DD_ExtSeed_AD_TransferOrderSeedData.xml",
      "data/DE_ExtSeed_AE_AtpSeedData.xml",
      "data/DF_ExtSeed_OrderRiskSeedData.xml",
      "data/EA_Ext_AG_OmsCommunicationGatewayData.xml",
      "data/EB_Ext_AH_OmsShippingGatewayData.xml",
      "data/EC_Ext_AK_ServiceJobData.xml",
      "data/JA_Demo_AJ_HCUserData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#28",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "type": "PR",
    "number": "28",
    "title": "Remove duplicate hotwax.user demo data (consolidated into oms)",
    "labels": [],
    "body": "### Problem\n`data/UserData.xml` only re-declared the `moqui.security.UserAccount` for `hotwax.user` (`HOTWAX_USER`) plus its `ADMIN` / `ADMIN_ADV` group memberships — a **duplicate** of the comprehensive definition in `oms/data/HCUserData.xml` (which also defines the Party, Person, ContactMech, and OFBiz UserLogin).\n\nThe two records conflicted: this file set `currentPassword` to the SHA-256 hash of `hotwax@786` **without** `passwordHashType`, while `HCUserData.xml` set `passwordHashType=\"SHA\"` (SHA-1). On load the merged `UserAccount` ended up with a SHA-256 hash but `passwordHashType=SHA`, so login failed (SHA-1 of the entered password never matches a SHA-256 stored value).\n\n### Change\nDelete `data/UserData.xml`. `hotwax.user` is now defined in exactly one place — `oms/data/HCUserData.xml` — which the paired oms PR retypes to `demo` and gives a single consistent `UserAccount` (password `hotwax@786`, default SHA-256).\n\n### Paired change\nhotwax/oms PR: *\"Consolidate hotwax.user as demo data; fix UserAccount password inconsistency\"*. **Merge both together** so the user is defined in exactly one place.\n\n### Scope\nSingle file deletion, data-only. The full `hotwax.user` setup (party/contact/login/account + group memberships) remains in `oms/data/HCUserData.xml`.",
    "files": [
      "data/UserData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.10.0"
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#29",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "type": "PR",
    "number": "29",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "body": "",
    "files": [
      "data/DA_ExtSeed_OmsEnumerationData.xml",
      "data/DB_ExtSeed_OmsSeedData.xml",
      "data/EA_Ext_ServiceJobData.xml",
      "data/EB_Ext_SystemMessageTypeDataExt.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.10.0"
  },
  {
    "id": "hotwax/hotwax-oms#603",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "603",
    "title": "Change parentTypeId field type to id-ne in EnumerationType",
    "labels": [],
    "body": "This PR fixes a data truncation error when loading enumeration data. \n\nIn applications/hwmapps/entitydef/entitymodel.xml, the type of parentTypeId in EnumerationType was defined as id (VARCHAR(20)). Since enumTypeId is defined as id-ne (VARCHAR(40)), references with longer IDs (like RESOLVE_ONHOLD_ORDER) caused a database truncation error. \n\nWe updated parentTypeId to id-ne to match the referenced field type.\n\nFixes #602",
    "files": [
      "applications/hwmapps/entitydef/entitymodel.xml",
      "upgrade/UpcomingRelease/UpgradeSql.sql"
    ],
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "602",
        "body": "While loading data, we get a data truncation error for the PARENT_TYPE_ID column in the EnumerationType table.\n\nError:\ncom.mysql.cj.jdbc.exceptions.MysqlDataTruncation: Data truncation: Data too long for column 'PARENT_TYPE_ID' at row 1\n\nThis happens because parentTypeId is defined with type=\"id\" (VARCHAR(20)) in applications/hwmapps/entitydef/entitymodel.xml, while enumTypeId is type=\"id-ne\" (VARCHAR(40)). When parentTypeId contains a value longer than 20 characters (like RESOLVE_ONHOLD_ORDER), it fails.\n\nWe should change the type of parentTypeId to id-ne to match the enumTypeId field type.",
        "labels": [],
        "files": [],
        "title": "Change field type of EnumerationType.parentTypeId to id-ne to prevent data truncation"
      }
    ],
    "releaseTag": "v8.5.0"
  },
  {
    "id": "hotwax/hotwax-oms#612",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "612",
    "title": "Updated create product index service to handle the case when isVarian…",
    "labels": [],
    "body": "…t and isVirtual is empty. Considered empty value as N.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "files": [
      "applications/hwmapps/src/main/java/co/hotwax/search/SearchServices.java"
    ],
    "linkedIssues": [],
    "releaseTag": "v8.5.0"
  }
]

Output JUST the summary text.
