You are a Lead Architect for HotWax Commerce. Analyze these repos and PRs to create logical clusters for a release note.

Step 1: Identify Repository Logical Names
Repository Context (Descriptions & Relations): 
{
  "hotwax/OrderRouting": {
    "owner": "hotwax",
    "repo": "OrderRouting",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/bopis": {
    "owner": "hotwax",
    "repo": "bopis",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-maarg-util": {
    "owner": "hotwax",
    "repo": "hotwax-maarg-util",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-ofbiz-oms-usl": {
    "owner": "hotwax",
    "repo": "hotwax-ofbiz-oms-usl",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-oms": {
    "owner": "hotwax",
    "repo": "hotwax-oms",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-poorti": {
    "owner": "hotwax",
    "repo": "hotwax-poorti",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-shopify-oms-bridge": {
    "owner": "hotwax",
    "repo": "hotwax-shopify-oms-bridge",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/hotwax-unigate": {
    "owner": "hotwax",
    "repo": "hotwax-unigate",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/job-manager": {
    "owner": "hotwax",
    "repo": "job-manager",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/mantle-netsuite-connector": {
    "owner": "hotwax",
    "repo": "mantle-netsuite-connector",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/mantle-shopify-connector": {
    "owner": "hotwax",
    "repo": "mantle-shopify-connector",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/oms": {
    "owner": "hotwax",
    "repo": "oms",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  },
  "hotwax/receiving": {
    "owner": "hotwax",
    "repo": "receiving",
    "description": "See repository context cache.",
    "relations": "See repository context cache."
  }
}

Step 2: Organize PRs into Clusters
- Group items related across repos into cohesive features.
- Filter out "Noise" (version bumps, chores).
- Clusters should represent a wholistic feature but should not mix two features within the same business processes into the same release note. For example, if an app has multiple distinct features, each feature should be in a separate cluster.
- Sometimes pull requests will feel like different features but are actaully part of one connected feature. When creating clusters, think about user roles and what they would consider a feature. For example, a feature may be rolled out related to sales orders that had some changes in the order import process and then approval flow based on that in different repositories. You need to inteligently stitch together that these are part of a journey and turn it into one release note.
- **CRITICAL MERGING RULE**: Do NOT create separate sections for technical sub-steps.
- **Specificity Rule**: While grouping by theme, ensure that general utility updates are pulled into the specific feature they support. For example, a "PDF Generation" fix that was made specifically for "Digital Invoicing" should be clustered with "Digital Invoicing".
- **Naming Rule**: Give clusters descriptive, utility-focused names. Use ONLY simple nouns (e.g., "Inventory Synchronization").
- **CRITICAL ACCOUNTABILITY RULE**: You MUST account for EVERY SINGLE item ID provided in the "Item Metadata" section below. EVERY ID must appear in exactly one of these three fields: "clusters", "noiseItemIds", or "needClarificationItemIds". DO NOT omit any IDs.
- If you feel like an github pr or issue is not descriptive enough to logically cluster it but isn't noise, then throw them into "needClarificationItemIds".
- **STRICT PROHIBITION**: DO NOT use words like "Enhanced", "Streamlined", "Improvements", "Enhancements", "Updates", "Fixes", "Handling", or "Logic" in cluster names.


Item Metadata (Full Context):
Analyze the title, body, and linked issues of each item to understand its business impact and relationship to other items.
[
  {
    "id": "hotwax/receiving#676",
    "repo": "hotwax/receiving",
    "title": "Update sorting: Latest POs first and sort items by primaryId",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\nhttps://github.com/hotwax/receiving/issues/666\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\nThis Pull Request introduces two main enhancements to improve the sorting logic and usability in the Receiving App:\r\n- **Purchase Orders List Sorting:** Updated the default sorting so that the most recent Purchase Orders always appear at the top based on their import/creation date (`orderDate desc`).\r\n- **Product List Sorting:** Added a sorting mechanism inside the Purchase Order details view. The product list is now alphabetically sorted by the `primaryId` of the products, falling back to the product name if the primary ID is not available.\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\nN/A\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/receiving#contribution-guideline)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/bopis#790",
    "repo": "hotwax/bopis",
    "title": "Changed communicationEventTypeId for new unigate changes for tag v4.11.0",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/job-manager#908",
    "repo": "hotwax/job-manager",
    "title": "Improved: resp data check when fetching jobs for moqui",
    "labels": [],
    "type": "PR",
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/job-manager#contribution-guideline)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#115",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "feat: expose missing DataManager REST endpoints in admin.rest.xml",
    "labels": [
      "enhancement"
    ],
    "type": "Issue",
    "body": "## Problem\n\nThe Company PWA MDM Management feature requires full CRUD on `DataManagerConfig` and\nthe ability to delete `DataManagerLog` entries. Three REST endpoints are currently missing\nfrom `admin.rest.xml` in the `maarg-util` component.\n\n## Changes Required\n\nIn the existing `<resource name=\"dataManager\">` block in `admin.rest.xml`:\n\n```xml\n<!-- 1. Create config — top-level POST on <resource name=\"dataManager\"> -->\n<method type=\"post\">\n    <entity name=\"co.hotwax.datamanager.DataManagerConfig\" operation=\"create\"/>\n</method>\n\n<!-- 2. Update config — inside the existing <id name=\"configId\"> block -->\n<method type=\"put\">\n    <entity name=\"co.hotwax.datamanager.DataManagerConfig\" operation=\"update\"/>\n</method>\n\n<!-- 3. Delete log — inside the existing <id name=\"logId\"> block under <resource name=\"logs\"> -->\n<method type=\"delete\">\n    <service name=\"co.hotwax.util.UtilityServices.remove#DataManagerLog\"/>\n</method>\n```\n\nThe `remove#DataManagerLog` service already exists in `UtilityServices.xml` — this is just exposing it via REST.\n\n## Why Needed\n\n- `POST /dataManager` — required for Add Config in Company PWA\n- `PUT /dataManager/{configId}` — required for Edit Config in Company PWA\n- `DELETE /dataManager/logs/{logId}` — required for log cleanup\n\n## Prerequisite for\n\nhotwax/company MDM Management feature",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#110",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#111",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added gradle task to setup, start and stop solr",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#88",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added support to generate and append release notes in RELEASES.md",
    "labels": [
      "enhancement"
    ],
    "type": "PR",
    "body": "- Added support in the checkMyAddonsVersions Gradle task to generate/update RELEASES.md and release.json when upgradeMajor=true and component tags are updated.\r\n\r\n\r\n- Related ticket : https://github.com/hotwax/hotwax-maarg-docker-config/issues/75",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#114",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Solr integration",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#116",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "feat: add create, update config and delete log REST endpoints (#115)",
    "labels": [],
    "type": "PR",
    "body": "## What this adds\n\nThree new REST endpoints on the existing \\`admin/dataManager\\` resource in \\`admin.rest.xml\\`:\n\n| Method | Endpoint | Action |\n|--------|----------|--------|\n| POST | \\`/admin/dataManager\\` | Create a new \\`DataManagerConfig\\` record |\n| PUT | \\`/admin/dataManager/:configId\\` | Update an existing \\`DataManagerConfig\\` record |\n| DELETE | \\`/admin/dataManager\\` | Delete a \\`DataManagerLog\\` (calls \\`remove#DataManagerLog\\` — cascades to parameters, content files, and content records) |\n\n## Context / why this PR exists\n\nWe originally built these endpoints to support a config management UI in the Company PWA (create/edit configs). That PWA work was subsequently reverted — job-manager already has a more complete MDM import workflow.\n\n**Assigning to @Banibrata-Manna** to evaluate whether these endpoints are useful for job-manager:\n\n- `POST` create config + `PUT` update config — could support an admin UI for managing \\`DataManagerConfig\\` records directly from job-manager (currently configs are only added via seed data)\n- `DELETE` log — could enable a \"delete log\" action on the File History / File Detail pages in job-manager (currently only cancel is supported)\n\nPlease review and decide whether to merge as-is, adapt for job-manager use, or close.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#102",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "docs: document accxUI PWA authentication flow and JWT configuration",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nTwo documentation changes to `runtime/component/maarg-util/docs/`:\n\n### New: `accxui_PWA_Authentication.md`\n\nFull reference for how accxUI PWA apps (company, job-manager, etc.) authenticate against Moqui. Covers:\n\n- The four auth endpoints (`checkLoginOptions`, `login`, `getPermissions`, `logout`) with request/response shapes\n- How the JWT is validated on subsequent calls (automatic via framework, no service code needed)\n- The two token types:\n  - **JWT** (`token`) — stateless, cryptographic, expiry via `jwt.default.expireTime`\n  - **Login key** (`api_key`) — stored in `moqui.security.UserLoginKey` table, SHA-256 hashed, 6-day default expiry\n- Configuration: how `jwt.default.expireTime` is set per environment (MoquiConf.xml default 7200s, JVM arg override for prod 86400s)\n- Data requirement: app-specific permission IDs (e.g. `COMPANY_APP_VIEW`) must exist in `UserGroupPermission`\n\n### Fix: `JWT_Authentication_for_OFBiz_and_Moqui.md`\n\nCorrects an inaccuracy: the existing doc stated the default token expiry is 300 seconds. The actual default in `MoquiConf.xml` is **7200 seconds (2 hours)**. Also adds JVM arg override documentation.\n\n## Why\n\nThe company app was just migrated from OFBiz-based auth to direct Moqui auth. Future app migrations will need this as the reference for how to configure and understand the auth layer.\n\n## Review focus\n\n- Does the `getPermissions` section accurately describe how permission IDs should be seeded?\n- Is the `api_key` / `UserLoginKey` description accurate for your understanding?\n- Any deployment steps I missed for production `jwt.default.expireTime` configuration?",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#109",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "feat: login#User accepts both uppercase and lowercase credentials",
    "labels": [],
    "type": "PR",
    "body": "## What\n\n`login#User` now accepts `USERNAME`/`PASSWORD` (OFBiz/accxUI convention) alongside `username`/`password` (Moqui native).\n\n## Why\n\nDuring the OFBiz→Moqui migration, browser-cached JavaScript may send uppercase credentials while new code sends lowercase. Making Moqui accept both eliminates the dependency on which version the browser happens to have cached.\n\n## Changes\n\n`service/co/hotwax/auth/AuthServices.xml`:\n- Added `USERNAME` and `PASSWORD` as in-parameters\n- Updated the null check: `!(token || (username && password) || (USERNAME && PASSWORD))`\n- Groovy script: `def actualUsername = username ?: USERNAME`\n\n## Backward compatible\n\n- Lowercase credentials (Moqui native) → work as before\n- Uppercase credentials (OFBiz/browser cache) → now also work",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#101",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "[codex] Include CreatedStamp patch in omsSetup",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nAdds `CreatedStamp.patch` to the `omsSetup` patch list.\n\n## Why this is needed\n\nAnil, this is needed because some OMS DataDocuments now expect `createdStamp` on OFBiz/Moqui entities. The patch already exists in `maarg-util`, but `omsSetup` was not applying it, so local setups could load the DataDocument definitions successfully and then fail at runtime when `oms/dataDocumentView` tried to build a view using `createdStamp`.\n\nIncluding the patch in setup keeps local Moqui environments aligned with the DataDocument definitions used by the apps.\n\n## Validation\n\n- Confirmed `patches/CreatedStamp.patch` exists in this repo.\n- Ran `git diff --check`.\n- In the full local Moqui checkout, verified `./gradlew tasks --all` lists `runtime:component:maarg-util:omsSetup` successfully with OpenJDK 11.\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#107",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "feat: add logout#User service — POST /rest/s1/admin/logout",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nAdds `logout#User` service to `AuthServices.xml` and a `logout` REST resource to `admin.rest.xml`.\n\n**Endpoint:** `POST /rest/s1/admin/logout`\n\n## Service logic\n\n```xml\n<service verb=\"logout\" noun=\"User\">\n    <actions>\n        <!-- OFBiz side: Moqui does not manage UserLogin.hasLoggedOut -->\n        <entity-find-one entity-name=\"org.apache.ofbiz.security.login.UserLogin\" value-field=\"userLogin\">\n            <field-map field-name=\"userLoginId\" from=\"ec.user.username\"/>\n        </entity-find-one>\n        <if condition=\"userLogin\">\n            <set field=\"userLogin.hasLoggedOut\" value=\"Y\"/>\n            <entity-update value-field=\"userLogin\"/>\n        </if>\n        <!-- Moqui side: sets UserAccount.hasLoggedOut=Y and invalidates HTTP session -->\n        <script>ec.user.logoutUser()</script>\n    </actions>\n</service>\n```\n\n## Why two entities\n\nBoth `org.apache.ofbiz.security.login.UserLogin` and `moqui.security.UserAccount` have a `hasLoggedOut` field.\n\n- `ec.user.logoutUser()` (framework) handles `UserAccount.hasLoggedOut` internally and invalidates the session — verified in `UserFacadeImpl.groovy:753`\n- `UserLogin.hasLoggedOut` must be set explicitly since Moqui does not manage OFBiz entities automatically\n\n## Note for PWA\n\nThe accxUI `useAuth().logout()` currently sends `GET`. This endpoint is `POST`. The PWA call will need to be updated to send `POST /rest/s1/admin/logout`.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#117",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Solr integartion implementation",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#118",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#119",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Updated solr related services and method name to make it more specifi…",
    "labels": [],
    "type": "PR",
    "body": "…c to Solr",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#120",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added: rest endpoint for indexing products from app",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#121",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Added REST endpoint to index customer and order document in Solr.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#148",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Expose entity-auto endpoints for app-side onboarding orchestration",
    "labels": [],
    "type": "PR",
    "body": "## Why\n\nKeep Product Store onboarding support in maarg-util limited to the backend capabilities the Company app cannot own directly. The Company app now orchestrates setup through existing/generic app-side flows where appropriate, while user/security setup remains outside Company and service-job parameters use the existing ServiceJob update path used by Job Manager.\n\n## What's added\n\n| Area | Change | Reason |\n|---|---|---|\n| JWT token creation | `admin/jwtTokens` -> `co.hotwax.auth.AuthServices.create#JwtToken` | Token signing is backend-only and must validate the delegated subject server-side. |\n| Organization bootstrap support | `organizations` POST, `organizations/{partyId}/roles`, and `systemProperties` POST/PUT | Lets Company create/link the Product Store organization without bespoke bootstrap services. |\n| JWT permission seed | `JWT_TOKEN_CREATE` permission data | Gives the backend token endpoint a narrow permission gate. |\n\n## Review updates\n\n- Removed `userSecurityGroups`; Company no longer manages security-group assignment or discovers integration subjects through security groups.\n- Removed `serviceJobs/{jobName}/parameters`; Company now updates job parameters through `admin/serviceJobs/{jobName}` with `serviceJobParameters`, matching Job Manager.\n- Removed the unused ProductStoreRole and FacilityParty write endpoints that only supported the dropped Company-side access-package flow.\n\n## Validation\n\n- `xmllint --noout service/admin.rest.xml service/co/hotwax/auth/AuthServices.xml data/JwtTokenSecurityData.xml`\n- Company app branch updated to stop calling the removed endpoints; `pnpm build` passes there.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#152",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "docs: Solr getting-started guide for developers",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nAdds **`docs/solr-getting-started.md`** — an onboarding guide for the Solr search\nintegration, aimed at a developer who just joined a Maarg/OMS project and needs to\nget Solr running locally fast.\n\nDocs-only change. No code touched.\n\n## Why\n\n`docs/solr-integration.md` is an excellent deep reference, but new developers need a\nlayer above it: *why* Solr is here, *how* it fits together, and a copy-paste runbook.\nThis fills that gap and links down into the reference for specifics.\n\n## Contents\n\n1. **Why Maarg needs Solr** — the OMS search problem; when you can skip it.\n2. **How Maarg uses Solr** — architecture diagram, the SolrJ client model, lazy\n   startup, the write path (SECAs for orders + the `OmsProduct` DataFeed for\n   products), the read path, and schema-as-code.\n3. **Cores, collections & shards** — terminology and the shipped collections; why\n   orders and products share the single `enterpriseSearch` collection; instance\n   prefixing on a shared workspace cluster.\n4. **Settings → Search** — a tour of the admin screen.\n5. **Runbook** — `setupSolr -PdownloadSolr=true` → `startSolr` → screen init\n   (Upload Configsets · Create Collections · Add Missing Fields) → verify.\n6. **Configuration & auth** — the `solr.*` properties and how `jwtKey.txt` ↔\n   `security.json` `k` stay in sync.\n7. **Where to go next** — pointers into the reference doc, screen, gradle tasks,\n   and the document builders.\n\nAll facts were verified against the current sources (collections from `schema.json`,\nthe `setupSolr`/`startSolr`/`stopSolr` tasks in `build.gradle`, and the `solr.*`\nproperties in `MoquiConf.xml`).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#151",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Add orderByField parameter to SystemMessages service",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Added `orderByField` parameter to `get#SystemMessages` service to support backend-driven sorting.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#158",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Improvement: Corrected the index document service name in docs",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Corrected the index document service name in docs",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#160",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Fixed: mark UserLogin as logged out with disabled auth service call",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Fixed",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#161",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-maarg-util#157",
    "repo": "hotwax/hotwax-maarg-util",
    "title": "Migrate Google phone number library dependency to maarg-util",
    "labels": [],
    "type": "PR",
    "body": "- Added com.googlecode.libphonenumber:libphonenumber:8.12.57 to build.gradle\r\n- Created a shared co.hotwax.util.PhoneUtils utility class with optimized phone parsing, validation, and formatting methods\r\n- Declared generic parse#PhoneNumber and validate#PhoneNumber service definitions in UtilityServices.xml\r\n\r\nTicket: https://github.com/hotwax/hotwax-maarg-util/issues/154",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#342",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#344",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "feat: add GET and POST shopify/shops/{shopId}/shopify-locations endpoints",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nAdds two REST endpoints to `shopify.rest.xml` for the Shopify Location Sync feature.\n\n```\nGET  shopify/shops/{shopId}/shopify-locations   → get#LocationsFromShopify\nPOST shopify/shops/{shopId}/shopify-locations   → store#ShopifyFacility\n```\n\nPOST accepts a single JSON object (create one facility) or a JSON array (Moqui calls the service once per item — no custom loop needed).\n\nRelated #313\n\n## Depends on\n\n- hotwax/hotwax-shopify-oms-bridge#227 (service implementations)\n\n## Part of\n\nhotwax/company#130 (master issue)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#356",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Deprecate store#BulkOperationResultFile and stream file downloads",
    "labels": [],
    "type": "PR",
    "body": "### Description\r\nCurrently, the `store#BulkOperationResultFile` service has a hardcoded 40 MB memory cap and loads the entire file into JVM memory. This causes exception errors when download files exceed 40 MB (which happens during full catalog syncs).\r\n\r\nTo fix this:\r\n* Changed the download logic to stream the file directly to disk in chunks via `FileUtils.copyURLToFile`.\r\n* Used Moqui's Resource Facade to get the URL: `ec.resource.getLocationReference(downloadUrl).getUrl()`.\r\n* Marked the service as deprecated.\r\n\r\n- Fixes #354",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "354",
        "body": "Currently, the `store#BulkOperationResultFile` service in `ShopifyBulkImportServices.xml` has a hardcoded limit of 40 MB (`maxResponseSize(4* 1024 * 1024 *10)`).\n\n### The Issue\nIf a bulk operation result file from Shopify exceeds 40 MB (which happens during a full catalog sync or when many products are updated), the download fails with an exception.\n\nSimply increasing this memory cap is not ideal because it loads the entire file into JVM memory as a byte array, which could lead to high memory consumption or `OutOfMemoryError` (OOM).\n\n### Suggested Fix\nUse `FileUtils.copyURLToFile()` to stream the file download directly from the URL to the disk. This removes the 40 MB limit entirely and downloads the file in small chunks, keeping the memory usage low.\n\n**File reference:**\n[ShopifyBulkImportServices.xml](https://github.com/hotwax/mantle-shopify-connector/blob/main/service/co/hotwax/shopify/graphQL/ShopifyBulkImportServices.xml#L160-L175)",
        "labels": [],
        "files": [],
        "title": "Exception thrown when bulk operation result file exceeds 40 MB limit"
      }
    ],
    "linkedIssueIds": [
      "354"
    ]
  },
  {
    "id": "hotwax/mantle-shopify-connector#361",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#365",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Added: risk object Order Mega Query",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#366",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Changed: Reconciled the OrderUnifiedMegaQuery template with Mega Query from Db Resource Templete Data",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-shopify-connector#367",
    "repo": "hotwax/mantle-shopify-connector",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#579",
    "repo": "hotwax/oms",
    "title": "Get Order Ship Group API",
    "labels": [],
    "type": "Issue",
    "body": "Add an API endpoint to fetch Order ship group with the necessary details. Use the productAssocTypeId=PRODUCT_SUBSTITUTE to fetch product substitutes.\n\nendpoint: GET /orders/{orderId}/shipGroups/{shipGroupSeqId}\nResponse:\n```\n{\n  \"shipGroup\": {\n    \"orderId\": \"string\",\n    \"orderName\": \"string\",\n    \"orderExternalId\": \"string\",\n    \"orderDate\": \"string\",\n    \"orderStatusId\": \"string\",\n    \"productStoreId\": \"string\",\n    \"entryDate\": \"string\",\n    \"grandTotal\": \"string\",\n    \"currencyUom\": \"string\",\n    \"salesChannel\": \"string\",\n    \"shipGroupSeqId\": \"string\",\n    \"carrierPartyId\": \"string\",\n    \"shipmentMethodTypeId\": \"string\",\n    \"shippingInstructions\": \"string\",\n    \"customer\": {\n      \"partyId\": \"string\",\n      \"firstName\": \"string\",\n      \"lastName\": \"string\"\n    },\n    \"items\": [\n      {\n        \"orderId\": \"string\",\n        \"orderItemSeqId\": \"string\",\n        \"shipGroupSeqId\": \"string\",\n        \"itemStatusId\": \"string\",\n        \"facilityId\": \"string\",\n        \"productId\": \"string\",\n        \"quantity\": \"string\",\n        \"unitPrice\": \"string\",\n        \"substituteProducts\": [\n          {\n            \"productId\": \"string\",\n            \"sequenceNum\": \"string\",\n            \"productTypeId\": \"string\",\n            \"productName\": \"string\",\n            \"internalName\": \"string\",\n            \"price\": 0,\n            \"currencyUomId\": \"string\"\n          }\n        ]\n      }\n    ],\n    \"billingEmail\": \"string\",\n    \"billingPhone\": {\n      \"contactMechId\": \"string\",\n      \"countryCode\": \"string\",\n      \"areaCode\": \"string\",\n      \"contactNumber\": \"string\",\n      \"askForName\": \"string\"\n    },\n    \"shippingEmail\": \"string\",\n    \"shippingPhone\": {\n      \"contactMechId\": \"string\",\n      \"countryCode\": \"string\",\n      \"areaCode\": \"string\",\n      \"contactNumber\": \"string\",\n      \"askForName\": \"string\"\n    }\n  }\n}\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#587",
    "repo": "hotwax/oms",
    "title": "Get Tasks API",
    "labels": [],
    "type": "Issue",
    "body": "\nGET /orders/tasks\n\nRequest body:\n```\n{\n    customParametersMap:{},\n    pageIndex:0\n    pageSize: 20,\n    orderByField:\"\"\n} \n\n```\nResponse Structure:\n\n```\n{\n  \"tasks\": [\n    {\n      \"workEffortId\": \"string\",\n      \"orderId\": \"string\",\n      \"orderName\": \"string\",\n      \"orderExternalId\": \"string\",\n      \"productStoreId\": \"string\",\n      \"orderTypeId\": \"string\",\n      \"orderDate\": \"string\",\n      \"entryDate\": \"string\",\n      \"grandTotal\": \"string\",\n      \"statusId\": \"string\",\n      \"shipGroupSeqId\": \"string\",\n      \"shipmentMethodTypeId\": \"string\",\n      \"facilityId\": \"string\",\n      \"carrierPartyId\": \"string\",\n      \"workEffortTypeId\": \"string\",\n      \"workEffortPurposeTypeId\": \"string\",\n      \"workEffortName\": \"string\",\n      \"description\": \"string\",\n      \"createdDate\": \"string\",\n      \"createdByUserLogin\": \"string\",\n      \"customer\": {\n        \"partyId\": \"string\",\n        \"firstName\": \"string\",\n        \"lastName\": \"string\"\n      },\n      \"billingEmail\": \"string\",\n      \"billingPhone\": {\n        \"contactMechId\": \"string\",\n        \"countryCode\": \"string\",\n        \"areaCode\": \"string\",\n        \"contactNumber\": \"string\",\n        \"askForName\": \"string\"\n      },\n      \"shippingEmail\": \"string\",\n      \"shippingPhone\": {\n        \"contactMechId\": \"string\",\n        \"countryCode\": \"string\",\n        \"areaCode\": \"string\",\n        \"contactNumber\": \"string\",\n        \"askForName\": \"string\"\n      },\n      \"assignedParties\": [\n        {\n          \"partyId\": \"string\",\n          \"roleTypeId\": \"string\",\n          \"fromDate\": \"string\",\n          \"thruDate\": \"string\",\n          \"assignedByUserId\": \"string\",\n          \"comments\": \"string\",\n          \"firstName\": \"string\",\n          \"lastName\": \"string\",\n          \"groupName\": \"string\"\n        }\n      ]\n    }\n  ]\n}\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#590",
    "repo": "hotwax/oms",
    "title": "Implement PIM APIs",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#596",
    "repo": "hotwax/oms",
    "title": "Add API to update shipping information of ship group",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#609",
    "repo": "hotwax/oms",
    "title": "Add API to part and order item ship group.",
    "labels": [],
    "type": "Issue",
    "body": "## `park#Order` Service\n\n**Service:** `co.hotwax.oms.order.OrderServices.park#Order`\n**REST API:** `POST /orders/{orderId}/shipGroups/{shipGroupSeqId}/park`\n\n---\n\n### Overview\nAdds the ability to park all approved items of an order ship group to a virtual parking facility. This is useful when an order needs to be held back from fulfillment temporarily without rejecting it.\n\n---\n\n### What it does\n1. **Validates** the target `facilityId` is a virtual facility — returns an error if not.\n2. **Finds all `ITEM_APPROVED` items** in the given ship group.\n3. **Cancels inventory reservations** for each item — but only if the current ship group is assigned to a physical (non-virtual) facility, releasing ATP back to that facility.\n4. **Moves each item** to the parking facility via `process#OrderItemAllocation`, which:\n   - Finds an existing ship group at the parking facility or creates a new one (copying fields from the original)\n   - Updates `OrderItem.shipGroupSeqId` to the new ship group\n   - Skips inventory reservation since the target is a virtual facility\n   - Creates an `OrderFacilityChange` record for traceability\n\n---\n\n### Parameters\n| Parameter | Required | Default | Description |\n|---|---|---|---|\n| `orderId` | Yes | — | The order to park |\n| `shipGroupSeqId` | Yes | — | The ship group to park |\n| `facilityId` | Yes | — | Virtual parking facility ID |\n| `changeReasonEnumId` | No | `ORDER_PARKING` | Reason code on the `OrderFacilityChange` record |\n| `comments` | No | — | Optional notes |\n\n---\n\n### Key design decisions\n- **Original ship group is not modified** — a new ship group at the parking facility is created (or reused if one already exists), and items are moved to it.\n- **Reservation cancellation is conditional** — if the order is already at a virtual facility (e.g., previously parked or pre-order), there is no reservation to cancel and this step is skipped.\n- **No inventory variance or facility exclusion** — unlike rejection, parking does not penalize the source facility or record a stock discrepancy.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#35",
    "repo": "hotwax/oms",
    "title": "Various fixes in update#ProductAndVariants flow.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#641",
    "repo": "hotwax/oms",
    "title": "Implement Customer search from Solr",
    "labels": [],
    "type": "Issue",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#646",
    "repo": "hotwax/oms",
    "title": "Create Customer Brand association via ProductStoreRole",
    "labels": [],
    "type": "Issue",
    "body": "Create a ProductStoreRole (roleTypeId = CUSTOMER) during sales order creation/update to maintain the customer–brand (product store) association.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#566",
    "repo": "hotwax/oms",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#576",
    "repo": "hotwax/oms",
    "title": "Added product information management APIs.",
    "labels": [],
    "type": "PR",
    "body": "Added product information management APIs.\r\n1) Create Product- POST /products\r\n2) Get Product Detail- GET /products/{productId}\r\n3) Update Product Detail - PUT /products/{productId}\r\n4) Get Product Associations - GET /products/{productId}/assocs\r\n5) Create/Update Product Associations - POST /products/{productId}/assocs\r\n6) Get Shopify Shop Products - GET /products/{productId}/shopifyShopProducts\r\n6) Create/Update Shopify Shop Products - POST /products/{productId}/shopifyShopProducts",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#516",
    "repo": "hotwax/oms",
    "title": "Added: Sales Returns Shipment View, Service APIs for Return Shipments",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added\r\n\r\nRelated Issue: #515 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "515",
        "body": "We need to migrate the services used by Receiving PWA for Return Shipments.\nCore APIs\n- LIst Return Shipments\n- Get Single Return Shipment\n- Receive and Complete return shipment.",
        "labels": [],
        "files": [],
        "title": "Return Shipment API Migration for Reciving PWA"
      }
    ],
    "linkedIssueIds": [
      "515"
    ]
  },
  {
    "id": "hotwax/oms#580",
    "repo": "hotwax/oms",
    "title": "Added API to fetch the order ship group detail (#579)",
    "labels": [],
    "type": "PR",
    "body": "Added API to fetch the order ship group detail.\r\n\r\nSample output - \r\nGET /orders/1/shipGroups/00001\r\n\r\n```\r\n{\r\n  \"shipGroup\": {\r\n    \"orderId\": \"1\",\r\n    \"orderName\": \"HCDEV#3420\",\r\n    \"orderExternalId\": \"6688695255204\",\r\n    \"orderDate\": 1744065981000,\r\n    \"orderStatusId\": \"ORDER_CANCELLED\",\r\n    \"productStoreId\": \"STORE\",\r\n    \"entryDate\": 1744078133917,\r\n    \"grandTotal\": 0,\r\n    \"currencyUom\": \"USD\",\r\n    \"salesChannel\": null,\r\n    \"shipGroupSeqId\": \"00001\",\r\n    \"facilityId\": \"_NA_\",\r\n    \"carrierPartyId\": \"_NA_\",\r\n    \"shipmentMethodTypeId\": \"STANDARD\",\r\n    \"shippingInstructions\": null,\r\n    \"items\": [\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00101\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00102\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00103\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00104\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00105\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00106\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00107\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00108\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00109\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00110\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00111\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00112\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00113\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      }\r\n    ],\r\n    \"customer\": {\r\n      \"partyId\": \"10000\",\r\n      \"firstName\": \"Orange\",\r\n      \"lastName\": \"Cath\"\r\n    },\r\n    \"billingEmail\": null,\r\n    \"billingPhone\": null,\r\n    \"shippingEmail\": \"shubham.namdeo@hotwax.co\",\r\n    \"shippingPhone\": {\r\n      \"areaCode\": null,\r\n      \"askForName\": null,\r\n      \"contactMechId\": \"10069\",\r\n      \"contactNumber\": \"9098840126\",\r\n      \"lastUpdatedStamp\": 1744078152441,\r\n      \"countryCode\": \"91\"\r\n    }\r\n  }\r\n}\r\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#582",
    "repo": "hotwax/oms",
    "title": "Improved: Included billing/shipping address in Get Order Ship Group API (#579)",
    "labels": [],
    "type": "PR",
    "body": "Improved: Included billing/shipping address in Get Order Ship Group API.\r\n\r\nSample Response:\r\n```\r\n{\r\n  \"shipGroup\": {\r\n    \"orderId\": \"1\",\r\n    \"orderName\": \"HCDEV#3420\",\r\n    \"orderExternalId\": \"6688695255204\",\r\n    \"orderDate\": 1744065981000,\r\n    \"orderStatusId\": \"ORDER_CANCELLED\",\r\n    \"productStoreId\": \"STORE\",\r\n    \"entryDate\": 1744078133917,\r\n    \"grandTotal\": 0,\r\n    \"currencyUom\": \"USD\",\r\n    \"salesChannel\": null,\r\n    \"shipGroupSeqId\": \"00001\",\r\n    \"facilityId\": \"_NA_\",\r\n    \"carrierPartyId\": \"_NA_\",\r\n    \"shipmentMethodTypeId\": \"STANDARD\",\r\n    \"shippingInstructions\": null,\r\n    \"items\": [\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00101\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00102\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00103\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00104\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00105\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00106\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00107\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00108\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00109\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00110\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00111\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00112\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"orderId\": \"1\",\r\n        \"_entity\": \"org.apache.ofbiz.order.order.OrderItem\",\r\n        \"orderItemSeqId\": \"00113\",\r\n        \"unitPrice\": 22,\r\n        \"quantity\": 1,\r\n        \"productId\": \"10000\",\r\n        \"shipGroupSeqId\": \"00001\",\r\n        \"itemStatusId\": \"ITEM_CANCELLED\",\r\n        \"statusId\": \"ITEM_CANCELLED\",\r\n        \"substituteProducts\": [\r\n          {\r\n            \"productId\": \"10001\",\r\n            \"sequenceNum\": 1,\r\n            \"productTypeId\": \"FINISHED_GOOD\",\r\n            \"productName\": \"XS / Blue\",\r\n            \"internalName\": \"44342249423012\",\r\n            \"price\": 69,\r\n            \"currencyUomId\": \"USD\"\r\n          }\r\n        ]\r\n      }\r\n    ],\r\n    \"customer\": {\r\n      \"partyId\": \"10000\",\r\n      \"firstName\": \"Orange\",\r\n      \"lastName\": \"Cath\"\r\n    },\r\n    \"billingAddress\": {},\r\n    \"billingEmail\": null,\r\n    \"billingPhone\": null,\r\n    \"shippingAddress\": {\r\n      \"countryGeoName\": \"United States\",\r\n      \"countryGeoCodeAlpha2\": \"US\",\r\n      \"countryGeoCodeAlpha3\": \"USA\",\r\n      \"countryGeoCodeNumeric\": \"840\",\r\n      \"stateGeoName\": \"New York\",\r\n      \"stateGeoCodeAlpha2\": \"NY\",\r\n      \"stateGeoCodeAlpha3\": \"NY\",\r\n      \"stateGeoCodeNumeric\": null,\r\n      \"contactMechId\": \"10002\",\r\n      \"toName\": \"Catharine Chao\",\r\n      \"attnName\": null,\r\n      \"address1\": \"37-18 Northern Blvd\",\r\n      \"address2\": \"142-Long Isle Township\",\r\n      \"houseNumber\": null,\r\n      \"houseNumberExt\": null,\r\n      \"directions\": null,\r\n      \"city\": \"New York\",\r\n      \"cityGeoId\": null,\r\n      \"postalCode\": \"11101\",\r\n      \"postalCodeExt\": null,\r\n      \"countryGeoId\": \"USA\",\r\n      \"stateProvinceGeoId\": \"NY\",\r\n      \"countyGeoId\": null,\r\n      \"municipalityGeoId\": null,\r\n      \"postalCodeGeoId\": null,\r\n      \"geoPointId\": \"10000\",\r\n      \"encodedAddressKey\": null,\r\n      \"latitude\": 40.7519244,\r\n      \"longitude\": -73.9254192\r\n    },\r\n    \"shippingEmail\": \"shubham.namdeo@hotwax.co\",\r\n    \"shippingPhone\": {\r\n      \"areaCode\": null,\r\n      \"askForName\": null,\r\n      \"contactMechId\": \"10069\",\r\n      \"contactNumber\": \"9098840126\",\r\n      \"lastUpdatedStamp\": 1744078152441,\r\n      \"countryCode\": \"91\"\r\n    }\r\n  }\r\n}\r\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#581",
    "repo": "hotwax/oms",
    "title": "Expand style guide with patterns from all OMS repos",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nThe current style guide was built from `hotwax/oms` reviews only. This PR\nexpands it using review feedback from Deepak Dixit across 9 additional repos\nover the last 2 years.\n\n**5 new sections added:**\n\n| Section | What it covers |\n|---|---|\n| Groovy & Java Code Style | `co.hotwax.<domain>` package naming, lower camelCase variables, `ContextJavaUtil.jacksonMapper`, `libphonenumber` for phone parsing, `nowTimestamp`, streaming writers for large exports, NPE checks |\n| Component Dependencies | Do not re-declare transitive dependencies in `component.xml` |\n| Data Files & Seed Data | No `DbResource` for queries, new seed data must also go in `UpgradeData.xml`, generic FTL for Shopify GraphQL, `ext-seed` category, `UpgradeSteps.md` for SQL migrations |\n| Scheduled Jobs & Logging | Use framework-provided `lastRunTime` from job context, add structured `logInfo` in jobs |\n| User & Security | Use `UserAccount` not `UserLogin`, never expose `UserAccount` directly via REST |\n\n**Additions to existing sections:**\n\n- **Service Contracts** — no `payload` Map wrapping, no accepting an in-param the service constrains to one value, no redundant derived params, no custom status-flow when Moqui entity-auto already handles it\n- **REST API Shape** — no `V2` suffix in resource or service names; use `old`-suffix + nested `<resource name=\"old\">` for backward compat\n- **Entity & Data Model** — `View` not `Detail` suffix in view entity names, add `createdDate` to new entities, use `one-not` relationship for purgeable records, no ViewEntity nested inside ViewEntity, store diff only (not both absolute + diff)\n- **Query & Performance** — move validation before entity queries, use `filter-map-list` with `date-filter`, use Groovy spread/sum, streaming writers for exports\n\nAll new rules cite the source PR comment in the source index.\n\n## Review checklist\n\n- [ ] Rules are accurate and match the cited source comments\n- [ ] Wording is clear enough for an AI agent to apply without ambiguity\n- [ ] No existing rules were changed unintentionally\n- [ ] Any rules that are oms-specific and should not be in a shared guide are flagged",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#583",
    "repo": "hotwax/oms",
    "title": "Fixed: Used entity-find instead of entity-find-one to fetch order roles record without full pk (#579)",
    "labels": [],
    "type": "PR",
    "body": "Fixed: Used entity-find instead of entity-find-one to fetch order roles record without full pk (#579)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#589",
    "repo": "hotwax/oms",
    "title": "Implemented: Added Get Tasks API (#587).",
    "labels": [],
    "type": "PR",
    "body": "Implemented: Added Get Tasks API (#587).\r\nGET /orders/tasks\r\n\r\nRequest body:\r\n```\r\n{\r\n    customParametersMap:{},\r\n    pageIndex:0\r\n    pageSize: 20,\r\n    orderByField:\"\"\r\n} \r\n\r\n```\r\nResponse Structure:\r\n\r\n```\r\n{\r\n  \"tasks\": [\r\n    {\r\n      \"workEffortId\": \"string\",\r\n      \"orderId\": \"string\",\r\n      \"orderName\": \"string\",\r\n      \"orderExternalId\": \"string\",\r\n      \"productStoreId\": \"string\",\r\n      \"orderTypeId\": \"string\",\r\n      \"orderDate\": \"string\",\r\n      \"entryDate\": \"string\",\r\n      \"grandTotal\": \"string\",\r\n      \"statusId\": \"string\",\r\n      \"shipGroupSeqId\": \"string\",\r\n      \"shipmentMethodTypeId\": \"string\",\r\n      \"facilityId\": \"string\",\r\n      \"carrierPartyId\": \"string\",\r\n      \"workEffortTypeId\": \"string\",\r\n      \"workEffortPurposeTypeId\": \"string\",\r\n      \"workEffortName\": \"string\",\r\n      \"description\": \"string\",\r\n      \"createdDate\": \"string\",\r\n      \"createdByUserLogin\": \"string\",\r\n      \"customer\": {\r\n        \"partyId\": \"string\",\r\n        \"firstName\": \"string\",\r\n        \"lastName\": \"string\"\r\n      },\r\n      \"billingEmail\": \"string\",\r\n      \"billingPhone\": {\r\n        \"contactMechId\": \"string\",\r\n        \"countryCode\": \"string\",\r\n        \"areaCode\": \"string\",\r\n        \"contactNumber\": \"string\",\r\n        \"askForName\": \"string\"\r\n      },\r\n      \"shippingEmail\": \"string\",\r\n      \"shippingPhone\": {\r\n        \"contactMechId\": \"string\",\r\n        \"countryCode\": \"string\",\r\n        \"areaCode\": \"string\",\r\n        \"contactNumber\": \"string\",\r\n        \"askForName\": \"string\"\r\n      },\r\n      \"assignedParties\": [\r\n        {\r\n          \"partyId\": \"string\",\r\n          \"roleTypeId\": \"string\",\r\n          \"fromDate\": \"string\",\r\n          \"thruDate\": \"string\",\r\n          \"assignedByUserId\": \"string\",\r\n          \"comments\": \"string\",\r\n          \"firstName\": \"string\",\r\n          \"lastName\": \"string\",\r\n          \"groupName\": \"string\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}\r\n```",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#593",
    "repo": "hotwax/oms",
    "title": "Improved: Added api to get task detail. Fixed the StatusFlowTransition Data (#587)",
    "labels": [],
    "type": "PR",
    "body": "Improved: Added api to get task detail. Fixed the StatusFlowTransition Data and create#OrderTask service (#587).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#591",
    "repo": "hotwax/oms",
    "title": "Added product features CRUD APIs (#590).",
    "labels": [],
    "type": "PR",
    "body": "Added product features and good identifications CRUD APIs.\r\n\r\nGET products/productFeatures\r\nPOST products/productFeatures\r\nPUT products/productFeatures/{productFeatureId}\r\nDELETE products/productFeatures/{productFeatureId}\r\nGET products/{productId}/identifications\r\nPOST products/{productId}/identifications\r\nPUT products/{productId}/identifications/goodIdentificationTypeId\r\nDELETE products/{productId}/identifications/goodIdentificationTypeId\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#606",
    "repo": "hotwax/oms",
    "title": "Added API to fetch product facilities.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#597",
    "repo": "hotwax/oms",
    "title": "Improved: Included item's nagative reservation detail in Get Ship Group API (#587)",
    "labels": [],
    "type": "PR",
    "body": "Improved: Included item's nagative reservation detail in Get Ship Group API. This will help app side to decide if the item is available or not.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#598",
    "repo": "hotwax/oms",
    "title": "Implemented: Added API to update shipping information of ship group (#596)",
    "labels": [],
    "type": "PR",
    "body": "Implemented: Added API to update shipping information of ship group (#596)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#601",
    "repo": "hotwax/oms",
    "title": "Order risk detection & risk-driven order approval",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nImplements Shopify order risk / fraud handling in the OMS, per the spec in `hotwax-shopify-oms-bridge` → `docs/order_risk_implementation.md` (companion PR ingests the data).\n\n## Changes\n\n**Entities** (`entity/OrderRiskEntities.xml`)\n- `OrderHeaderRiskAssessment` (pkg `co.hotwax.order`) — one row per Shopify assessment: `source` (defaults `SHOPIFY` when provider null), `riskLevelEnumId`, `externalId`, `assessmentDate`.\n- `OrderHeaderRiskAssessmentFact` — per-fact `description` + `sentimentEnumId` (sentiment is per-fact in Shopify).\n- `extend-entity OrderHeader` → `riskRecommendationEnumId` (the rolled-up summary action) + `riskLevelEnumId` (worst level, for queries).\n\n**Seed** (`data/OrderRiskSeedData.xml`)\n- Enum types `ORDER_RISK_LEVEL`, `ORDER_RISK_RECOMMENDATION`, `RISK_FACT_SENTIMENT` (+ values, `enumCode` mirrors Shopify).\n- `AUTO_ACPT_RISK_REC` product-store setting (`PROD_STR_STNG`); `REVIEW_RISK_ORDER` WorkEffort type.\n\n**Services** (`service/co/hotwax/oms/order/OrderRiskServices.xml`)\n- `store#OrderHeaderRisk` — bridge entry; maps Shopify strings → enumIds, sets header summary, writes assessment + fact rows. All enum mapping lives here.\n- `evaluate#OrderRiskOnApproval` — reads `OrderHeader.riskRecommendationEnumId` + the store flag. `CANCEL` + autoAccept → cancel; `CANCEL` (manual) / `INVESTIGATE` → CS review task; `ACCEPT`/`NONE`/null → approve silently.\n- `create#OrderRiskReviewTask` — WorkEffort task linked to the order (mirrors the bad-address task); order stays **approved**.\n\n**Approval hook** (`service/.../OrderServices.xml`)\n- `approve#Order` calls `evaluate#OrderRiskOnApproval` right before approval; only the auto-cancel path stops approval. Cancellation records a clear `changeReason` in status history.\n\n## Design notes / decisions to confirm\n- **Null recommendation is optimistic** — risk never blocks approval unless it explicitly says so.\n- `autoAcceptRiskRecommendation` is at **product-store** level (consumed by native `approve#Order`); see spec §7 for the store-vs-shop discussion.\n- `INVESTIGATE` always raises a task (even under auto-accept).\n- Open items in spec §10 (entity shape, optional `riskLevelEnumId` denormalization, CommunicationEvent).\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#584",
    "repo": "hotwax/oms",
    "title": "Add order header default master details",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Extends the `OrderHeader` default master with order communication events, returns, and work efforts.\n- Adds nested role party details so order roles can carry person or party group names in the same order master read.\n- Adds nested work-effort party assignment details and communication event details for the default master payload.\n\n## Notes for review\n- Communication events are included on the assumption that orders usually have 4-10 communication events, so keeping them in the default order master should remain bounded for normal order detail reads.\n\n## Validation\n- `xmllint --noout entity/OrderExtendedEntities.xml`\n- `git diff --check`\n\n## Verification gap\n- The local Moqui audit helper referenced by the installed verification skill was not present at `/Users/adityapatel/.codex/scripts/moqui_quality_audit.py`, so I could not run that audit.\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#607",
    "repo": "hotwax/oms",
    "title": "Added support to reserve inventory if the item is swapped in ship group is not on virtual facility. Also added support to create OPP.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#608",
    "repo": "hotwax/oms",
    "title": "Implemented: Added an API to park the order item ship group (#609).",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#595",
    "repo": "hotwax/oms",
    "title": "Implemented: endpoints to perform CRUD on product facility, service to get product facility records and added a view entity for inventory item and detail",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#613",
    "repo": "hotwax/oms",
    "title": "Added a view entity to get order header task which are created at header level not ship group level. Adjusted api resources accordingly (#587).",
    "labels": [],
    "type": "PR",
    "body": "Added a view entity to get order header task which are created at header level not ship group level. Adjusted api resources accordingly (#587).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#615",
    "repo": "hotwax/oms",
    "title": "Improved: Included sales channel in View OrderHeaderTask view and added api to fetch order risk assessments (#587).",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#616",
    "repo": "hotwax/oms",
    "title": "Added api to Park order, and updated the park#Order service logic accordingly",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#617",
    "repo": "hotwax/oms",
    "title": "Added checks to not allow parking an order if the fulfillment is already started.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#618",
    "repo": "hotwax/oms",
    "title": "Improved: Added active shipment check when parking the complete order.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#600",
    "repo": "hotwax/oms",
    "title": "Added: Service to add items to Purchase Orders",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Added\r\n\r\nRelated Issue: #599",
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
    "linkedIssueIds": [
      "599"
    ]
  },
  {
    "id": "hotwax/oms#594",
    "repo": "hotwax/oms",
    "title": "Add Customer 360 OMS backend contracts",
    "labels": [],
    "type": "PR",
    "body": "## Summary\nAdds the backend contracts needed for the Customer 360 MVP in OMS. This is scoped to person customers and keeps large history lists out of the customer profile response.\n\n## What changed\n- Adds `GET /oms/customers/{partyId}` using a bounded `Party.customerDetail` master.\n- Adds raw `PartyRelationshipType` and `PartyRelationship` REST coverage for relationship management.\n- Adds `GET /oms/customers/{partyId}/tasks` for customer-linked order hold tasks.\n- Adds `POST /oms/workEffortPartyAssignments` so tasks can be linked to customers, assignees, and reporters.\n- Extends order detail data with communication events, return items, work efforts, and party/person context.\n- Adds order-hold type/status seed data in `data/OrderHoldTypeData.xml`.\n\n## Scope notes\n- Customer profile is for `Person` customers only; `PartyGroup` is intentionally not included.\n- Orders, tasks, returns, and communications are separate APIs/lists, not nested in the customer profile master.\n- Relationship labels/descriptions should come from the app seed store, so this PR does not add `PartyRelationship.customerDetail` enrichment.\n- Demo hold rows and unrelated Order Manager/Products data-document seeds are excluded.\n\n## Validation\n- Parsed changed XML files with `xmllint --noout`.\n- `git diff --check origin/main..HEAD` passed.\n- Gradle compile was not runnable from this standalone checkout because there is no `./gradlew` or system `gradle` available.\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#621",
    "repo": "hotwax/oms",
    "title": "Added Services to update Purchase Order and Item and track updates to sync or clear pre order promised dates",
    "labels": [],
    "type": "PR",
    "body": "This PR Introduces the services to update Purchase Order status and item status, sync promise dates with edd on Purchase Order Item.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#627",
    "repo": "hotwax/oms",
    "title": "Add quantityOnHand + COALESCE-0 to ProductFacilityInventoryItemView (moqui-gql#35)",
    "labels": [],
    "type": "PR",
    "body": "Supports **hotwax/moqui-gql#35** (view-backed `inventoryLevels` GraphQL connection).\n\nExtends `ProductFacilityInventoryItemView` (ProductFacility LEFT-joined to the current InventoryItem via `ProductFacility.inventoryItemId`):\n- Adds a `quantityOnHand` alias (COALESCE-0 on `II.quantityOnHandTotal`).\n- COALESCEs `availableToPromise` to 0 (was a plain nullable alias).\n\nSo a configured product+facility with no/depleted inventory reports `0`, never null. `computedInventoryCount` unchanged.\n\n**Consumer-safety audited:** the only two consumers of this view (both in `oms`) never read the `availableToPromise` alias (used for row-existence + sibling fields); no client-component consumers in the maarg/gorjana checkouts. COALESCE-0 is behavior-preserving.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#578",
    "repo": "hotwax/oms",
    "title": "feat: store#Facility — create or update facility with address, geo, and identifications",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nAdds `store#Facility` to the OMS platform — a single idempotent service for creating or updating a Facility with address, geo point, and external identifications.\n\n**Behaviour**\n- Deduplicates on `externalId` — creates a new Facility or updates the existing one\n- `GeoPoint` — creates on first call; updates in place if coordinates change\n- Postal address — follows the ContactMech immutability rule: expires the existing `FacilityContactMech` association and creates a new `ContactMech` + `PostalAddress` + association. Never calls `update#PostalAddress`\n- `FacilityIdentification` — creates records that don't already exist (effective-dated, no duplicates)\n\n**Design intent**\nCaller is responsible for transforming source-system data to OMS model shape before calling (e.g. Shopify alpha-2 country codes must be resolved to OFBiz geoIds by the calling service). This keeps the platform service generic.\n\n## Depends on\n\nNothing — pure OMS platform.\n\n## Required by\n\n- hotwax/hotwax-shopify-oms-bridge#227 (`store#ShopifyFacility` delegates here)\n\n## Part of\n\nhotwax/company#130 (master issue)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#620",
    "repo": "hotwax/oms",
    "title": "Improved validations in the send#EmailOnOrderEvent service",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n* Removed the redundant `OrderHeader` lookup by moving the master-detail find above the business logic.\r\n* Shifted email type validation through `ProductStoreEmailSetting` lookup above business logic.\r\n* Removed `SystemMessage` and its type lookup, as they are no longer required.\r\n* Added logging for successful email-trigger scenarios.\r\n\r\nCloses https://github.com/hotwax/hotwax-oms/issues/71",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#625",
    "repo": "hotwax/oms",
    "title": "Fixed unigate setup screen",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Fixed an issue where the createEvent and deleteEmailSetting transitions did not return productStoreId, resulting in an inconsistent user experience. Added a default response to ensure the required context is always returned.\r\n- Corrected the primary key fields used in the edit forms and delete url for ShippingCarrierConfig and ShippingCarrierBillingConfig records on the Unigate Setup screen.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#631",
    "repo": "hotwax/oms",
    "title": "Added solr artifact related to oms",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#637",
    "repo": "hotwax/oms",
    "title": "Consolidate hotwax.user as demo data; fix UserAccount password inconsistency",
    "labels": [],
    "type": "PR",
    "body": "### Problem\n`hotwax.user` is demo/test data, but it was defined in **two** places with conflicting `moqui.security.UserAccount` records:\n\n| File | Type | Password | Hash | passwordHashType |\n|---|---|---|---|---|\n| `oms/data/HCUserData.xml` | `ext-user` | `moqui` | SHA-1 | `SHA` |\n| `hotwax-ofbiz-oms-usl/data/UserData.xml` | `demo` | `hotwax@786` | SHA-256 | *(none → default SHA-256)* |\n\nBoth use create-or-update on the same `userId=HOTWAX_USER`. The usl record loads last and overwrites `currentPassword` with the SHA-256 hash of `hotwax@786`, **but does not set `passwordHashType`** — leaving the stale `SHA` (SHA-1) from this file. Login then fails: Moqui SHA-1-hashes the entered password and compares it to a SHA-256 stored value, which can never match.\n\n### Change\nMake this file the single source of truth for the demo user:\n1. Retype `ext-user` → **`demo`** — `hotwax.user` is demo/test data, not install data. (It already doesn't load under `loadProduction`; this just classifies it correctly so only the demo loader picks it up.)\n2. Set **one consistent `UserAccount`**: password `hotwax@786`, default SHA-256 hash, `passwordBase64=\"N\"`. Dropped the stale `passwordHashType=\"SHA\"` and the misleading `passwordHint`.\n\n```diff\n-<entity-facade-xml type=\"ext-user\">\n+<entity-facade-xml type=\"demo\">\n     <moqui.security.UserAccount userId=\"HOTWAX_USER\" username=\"hotwax.user\" userFullName=\"Hotwax User\"\n-        currentPassword=\"16ac58bbfa332c1c55bd98b53e60720bfa90d394\" passwordHashType=\"SHA\"\n-        passwordHint=\"framework name, lowercase\" currencyUomId=\"USD\" .../>\n+        currentPassword=\"6c393d0e69cbbb603f71c0672a25dcf5b195897ef94372818e3358e56047bd44\" passwordBase64=\"N\"\n+        currencyUomId=\"USD\" .../>\n```\n\n### Paired change\nThe duplicate `UserAccount` definition is removed from `hotwax-ofbiz-oms-usl` in a separate PR (delete `data/UserData.xml`). **Merge both together** so the user is defined in exactly one place. Either merge order is safe — both records resolve to the same SHA-256/`hotwax@786` once this PR lands.\n\n### Verification\nFresh `./gradlew load` then login as `hotwax.user` / `hotwax@786` (basic-auth probe: correct password → past the 401 gate; wrong → 401). No manual `PASSWORD_HASH_TYPE` patch needed afterward.\n\n### Scope\nSingle file, data-only (`data/HCUserData.xml`). No schema/service/logic changes.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#635",
    "repo": "hotwax/oms",
    "title": "Fix StatusFlowTransition attribute in SeedData.xml (statusIdTo → toStatusId)",
    "labels": [],
    "type": "PR",
    "body": "### What & why\nThe 8 `StatusFlowTransition` records in `data/SeedData.xml` (the `Default` flow for `TASK_*` work-effort statuses, added in 39628e6) used the attribute `statusIdTo`, which is **not a field** on `moqui.basic.StatusFlowTransition` — the field is `toStatusId` (`framework/entity/BasicEntities.xml`, PK). The unmapped attribute left the required PK `toStatusId` null, so the load threw *\"Required field To Status ID is missing\"* and **rolled back the whole file in its single transaction**, dropping the `LocalFeedFile` `SystemMessageType` (line 9) that ~138 downstream child types depend on — cascading into ~26 skipped data files.\n\nFixes #634.\n\n### The fix\nRenamed `statusIdTo` → `toStatusId` on the 8 affected records. No values changed; the referenced statuses (`TASK_CREATED`, `TASK_IN_PROGRESS`, `TASK_ON_HOLD`, `TASK_COMPLETED`, `TASK_CANCELLED`) are all defined as `StatusItem` records immediately above (lines 104–108), so the records are valid once the attribute name is correct.\n\n```diff\n- <moqui.basic.StatusFlowTransition statusFlowId=\"Default\" statusId=\"TASK_CREATED\" statusIdTo=\"TASK_IN_PROGRESS\" transitionName=\"In Progress\"/>\n+ <moqui.basic.StatusFlowTransition statusFlowId=\"Default\" statusId=\"TASK_CREATED\" toStatusId=\"TASK_IN_PROGRESS\" transitionName=\"In Progress\"/>\n```\n(× 8 records)\n\n### Verification\nFull `./gradlew load` (types=all) on an empty DB, before vs after:\n\n| | Before | After |\n|---|---|---|\n| `StatusFlowTransition` load error | present | **gone** |\n| Skipped data files | 13 (26 skip events) | **2** |\n| Records loaded | 11,197 | **11,508** |\n| `LocalFeedFile` parent-FK cascade | ~26 files | **resolved** |\n\nThe 2 remaining skips are pre-existing, unrelated **demo data** (`poorti/PoortiCarrierConfigDemoData.xml` `type=demo`, `mantle-shopify-connector/ShopifyConfigDemoData.xml` `type=ext-demo`) — out of scope for this PR.\n\n### Scope\n- Single file: `data/SeedData.xml`\n- Data-only change; no schema, service, or logic changes.",
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
    "linkedIssueIds": [
      "634"
    ]
  },
  {
    "id": "hotwax/oms#633",
    "repo": "hotwax/oms",
    "title": "Prevent status updates for cancelled and completed order items",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n\r\nUpdated the item status update logic to prevent any status changes for order items that are already in a terminal state (`ITEM_CANCELLED` or `ITEM_COMPLETED`).\r\n\r\n## Problem\r\n\r\nPreviously, cancelled items could still be updated to certain statuses based on the incoming status value. This created inconsistent behavior and allowed status transitions for items that should no longer be modified.\r\n\r\n## Changes\r\n\r\nSimplified the validation logic to always skip status updates when an order item is already:\r\n\r\n* `ITEM_CANCELLED`\r\n* `ITEM_COMPLETED`\r\n\r\n### Before\r\n\r\nCancelled items could still be processed for specific status transitions.\r\n\r\n### After\r\n\r\nAny update request for cancelled or completed items is ignored, and processing exits with a skip message.\r\n\r\n## Expected Outcome\r\n\r\n* Prevents invalid status transitions for terminal order item states.\r\n* Ensures cancelled and completed items remain immutable.\r\n* Simplifies status validation logic and improves maintainability.\r\n\r\nCloses: #636 \r\n",
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
    "linkedIssueIds": [
      "636"
    ]
  },
  {
    "id": "hotwax/oms#629",
    "repo": "hotwax/oms",
    "title": "Added: API for listing open, inflight and packed orders",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #628 \r\n\r\nChangelog: Added",
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
    "linkedIssueIds": [
      "628"
    ]
  },
  {
    "id": "hotwax/oms#614",
    "repo": "hotwax/oms",
    "title": "Implemented: support to add endpoint around products and its related entities",
    "labels": [],
    "type": "PR",
    "body": "Need to upgrade endpoints to move them to entity-auto if possible, and also need to reorganize the resources on correct paths.\r\nOnce the endpoints are moved to entity-auto the services defined in this PR will not be needed.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#642",
    "repo": "hotwax/oms",
    "title": "Implemented: Added service for customer Solr document indexing (#641).",
    "labels": [],
    "type": "PR",
    "body": "Implemented: Added service for customer Solr document indexing (#641).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#626",
    "repo": "hotwax/oms",
    "title": "Improved: Added apis to add item, manage item attributes, move item to parking, update shipping method and park order api enhancements",
    "labels": [],
    "type": "PR",
    "body": "Improved: Updated OrderHeaderWorkEffort if ship group is changed while parking an order.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#644",
    "repo": "hotwax/oms",
    "title": "Improved: Added support to create product store role while creating sales order (#646).",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#648",
    "repo": "hotwax/oms",
    "title": "Customer detail apis",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#645",
    "repo": "hotwax/oms",
    "title": "feat: implement services and rest apis for order funnel dashboard",
    "labels": [],
    "type": "PR",
    "body": "- Closing Issue: https://github.com/hotwax/oms/issues/619\r\n\r\n### Description\r\nThis PR implements REST APIs, Moqui services, and view-entities to support all metrics and analytical numbers on the new Order Funnel Dashboard.\r\n\r\n### Key Changes\r\n1. **Funnel Dashboard APIs & Services:**\r\n   - `/fulfillmentProgress`: Added support for `facilityId` filtering and returns `oldestShipGroupAssignedDatetime`.\r\n   - `/openOrders`: Returns open orders count and oldest open order date.\r\n   - `/unfillable`: Updated to return hourly trend counts (`unfillableHourlyCounts`) for the current day.\r\n   - `/holdTasks`: Exposes active hold task counts (Substitute, Bad Address, Fraud Risk, and Total).\r\n   - `/facilityOrderVolume`, `/facilityFulfillmentVelocity`, `/facilityPartialFulfillments`: Facility-specific analytical services.\r\n2. **View Entities:**\r\n   - Added `OrderHoldTasksSummaryView` view-entity to query and aggregate hold task counts in a single database lookup.\r\n3. **Data Document Config:**\r\n   - Added `ORDER_FACILITY_CHANGE` DataDocument setup in both `data/DocumentData.xml` and `upgrade/UpcomingRelease/UpgradeData.xml`.\r\n\r\n### Files Modified/Added\r\n- `data/DocumentData.xml`\r\n- `entity/OmsViewEntities.xml`\r\n- `service/co/hotwax/oms/order/OrderServices.xml`\r\n- `service/oms.rest.xml`\r\n- `upgrade/UpcomingRelease/UpgradeData.xml`\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#649",
    "repo": "hotwax/oms",
    "title": "#641 customer solr search",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#652",
    "repo": "hotwax/oms",
    "title": "Added migration service to generic level from adoc-maarg component",
    "labels": [],
    "type": "PR",
    "body": "Added migration service to generic level from adoc-maarg component",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#654",
    "repo": "hotwax/oms",
    "title": "Disabled authorization check for Order Index service call in SECA",
    "labels": [],
    "type": "PR",
    "body": "- Close: https://github.com/hotwax/oms/issues/653\r\n\r\nWhen the `IndexOrder` SECA rule runs on transaction commit (`tx-commit`), the user login information is not passed. This causes authentication errors when calling the `create#OrderIndex` service.\r\n\r\nAdded `disable-authz=\"true\"` to the service call in the SECA rule to allow the order indexing to run without authentication.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#655",
    "repo": "hotwax/oms",
    "title": "Added: support for tags and facilityId as in-param on order create, added endpoints for category store, shopifyShop delete and inventory location",
    "labels": [],
    "type": "PR",
    "body": "…dded endpoints for category store, shopifyShop delete and inventory location",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#659",
    "repo": "hotwax/oms",
    "title": "Remove product store facility count REST endpoint",
    "labels": [],
    "type": "PR",
    "body": "## Business summary\r\nRemoves deprecated dedicated product store facility-count REST endpoint so the company frontend can stop calling a dedicated count API and compute facility counts from existing facilities associations.\\n\\n## Changes\\n- Removes \"productStores/{productStoreId}/facilities/counts\" from `service/oms.rest.xml`.\\n- Leaves \"productStores/{productStoreId}/facilities\" and related facility/facility-group endpoints intact.\\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#657",
    "repo": "hotwax/oms",
    "title": "Gdpr customer delete",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#661",
    "repo": "hotwax/oms",
    "title": "Gdpr customer delete",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\n> [!WARNING]\n> You have reached your daily quota limit. Please wait up to 24 hours and I will start processing your requests again!",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#660",
    "repo": "hotwax/oms",
    "title": "Party role and identification resource",
    "labels": [],
    "type": "PR",
    "body": "(Bot-generated summary)\n> [!WARNING]\n> You have reached your daily quota limit. Please wait up to 24 hours and I will start processing your requests again!",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#663",
    "repo": "hotwax/oms",
    "title": "Fixed: Date conditions on product catalog, category, features assoc entities",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#567",
    "repo": "hotwax/oms",
    "title": "Added migration service to generic level from adoc-maarg component",
    "labels": [],
    "type": "PR",
    "body": "This service was migrated from adoc-maarg component.\r\n\r\nhttps://github.com/hotwax/adoc-maarg/pull/5",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#556",
    "repo": "hotwax/oms",
    "title": "Added support to create PCM record for variant products",
    "labels": [],
    "type": "PR",
    "body": "closes: https://github.com/hotwax/hotwax-oms/issues/559\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#668",
    "repo": "hotwax/oms",
    "title": "Improved: Inclued released date if item is manually released. Also enhanced logic use unique ship groups via order item table.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#667",
    "repo": "hotwax/oms",
    "title": "Purchase order service enhancements",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#670",
    "repo": "hotwax/oms",
    "title": "Add: OFBiz security permission seed data for Order Manager app",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\n- Adds `OmsSecurityPermData.xml` (`ext-seed`) seeding all 19 `SecurityPermission` records referenced by the order-manager PWA (`permissions.ts`), plus the `HC_ORDERMGR_ADMIN` security group with full access assigned\n- Updates `HCUserData.xml` to assign `hotwax.user` to `HC_ORDERMGR_ADMIN` so demo/dev installs have working PWA permissions out of the box\n\n## Background\n\nThe order-manager PWA loads permissions via `GET /admin/user/permissions`, which inner-joins OFBiz security tables (`SecurityPermission` → `SecurityGroupPermission` → `UserLoginSecurityGroup`). On a fresh install these tables were empty — no seed data defined the ORDERMGR_* or ORD_SALES_ORDER_* permission records — so `hotwax.user` had zero PWA permissions and the entire app nav was hidden.\n\n## Test plan\n\n- [ ] Fresh Moqui install: verify `SecurityPermission` table contains all 19 ORDERMGR/ORD_SALES_ORDER/RELATNSHIP_CUSTOMER permission rows after startup\n- [ ] `GET /admin/user/permissions` for `hotwax.user` returns permissions count > 0\n- [ ] Order Manager PWA — nav items visible after login as `hotwax.user`\n- [ ] Order list loads without 400 errors",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#674",
    "repo": "hotwax/oms",
    "title": "Improvement: Corrected the index document service name",
    "labels": [],
    "type": "PR",
    "body": "Improvement: Corrected the index document service name",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#612",
    "repo": "hotwax/oms",
    "title": "[codex] Remove generic entity data endpoint",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- remove the generic POST `/oms/entityData` REST resource\n- delete `CommonServices.get#EntityData`, which allowed callers to choose arbitrary entity names\n- add bounded `GET /oms/returnReasons` for the known return-reason lookup case\n\n## Why\n`entityData` is a generic read endpoint over arbitrary Moqui entities. Keeping it exposed creates a broad data-access risk and makes it easy for apps or agents to bypass purpose-built APIs.\n\n## Validation\n- `xmllint --noout service/oms.rest.xml service/co/hotwax/oms/common/CommonServices.xml`\n- `git diff --check`\n- `rg -n -S \"entityData|EntityData|get#EntityData|CommonServices\\.get#EntityData|selectedEntity\" service/oms.rest.xml service/co/hotwax/oms/common/CommonServices.xml` returned no matches\n\n## Local follow-up\nI also removed local caller references from the active app/tool checkouts so coding agents do not keep copying the banned endpoint pattern.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#677",
    "repo": "hotwax/oms",
    "title": "Improved: upgrade data as the Enum type data is missing causing data load fail",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#678",
    "repo": "hotwax/oms",
    "title": "Revert \"Improved: upgrade data as the Enum type data is missing causing data load fail\"",
    "labels": [],
    "type": "PR",
    "body": "Reverts hotwax/oms#677",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#604",
    "repo": "hotwax/oms",
    "title": "Feat/pwa returns",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#679",
    "repo": "hotwax/oms",
    "title": "Changed: Removed Review Risk Order WorkEffortType data as it is committed to udm component",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#632",
    "repo": "hotwax/oms",
    "title": "refactor: move facility contact-mech services into FacilityServices.xml",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\n- Moves `create/update × FacilityAddress/FacilityPhone/FacilityEmail` and `get#FacilityContactMechs` (7 services) from `ContactMechServices.xml` into `FacilityServices.xml`\n- `ContactMechServices.xml` now contains only the two generic primitives it owns: `create#PostalAddress` and `create#TelecomNumber`\n- All facility-scoped operations now live in a single file alongside `store#Facility` (merged in #578) and `update#FacilityIdentification`\n\n## Changed files\n\n| File | Change |\n|------|--------|\n| `service/co/hotwax/oms/facility/FacilityServices.xml` | Receives 7 moved services; `store#Facility` internal calls updated |\n| `service/co/hotwax/oms/contact/ContactMechServices.xml` | 7 facility services removed; only 2 generic primitives remain |\n| `service/oms.rest.xml` | 7 REST endpoint service-name attributes updated |\n| `service/co/hotwax/orderledger/order/ShipToStoreServices.xml` | 2 `get#FacilityContactMechs` call-sites updated |\n\n## Test plan\n\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityAddress` — creates address for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityAddress` — expires old address, creates new one\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityPhone` — creates phone for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityPhone` — updates phone\n- [ ] `POST /rest/s1/oms/facilityContactMechs/facilityEmail` — creates email for a facility\n- [ ] `PUT /rest/s1/oms/facilityContactMechs/facilityEmail` — updates email\n- [ ] `GET /rest/s1/oms/facilityContactMechs` — returns contact mechs for a facility\n- [ ] Ship-to-store flow — verify `get#FacilityContactMechs` still resolves correctly\n- [ ] No behaviour change — pure reorganisation",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#676",
    "repo": "hotwax/oms",
    "title": "Refactor sales order list by bucket api",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#680",
    "repo": "hotwax/oms",
    "title": "Changed: removed order hold workeffort type and purpose data in udm component",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#682",
    "repo": "hotwax/oms",
    "title": "Sync june15",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#683",
    "repo": "hotwax/oms",
    "title": "In Moqui, data files within a component's data/ directory are loaded …",
    "labels": [],
    "type": "PR",
    "body": "…alphabetically. To ensure that dependent data (such as user records) is loaded after its prerequisites (such as security groups and permissions) are defined, we need to prefix the data files with an alphabetical sequence (e.g., AA_, AB_, AC_).",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#685",
    "repo": "hotwax/oms",
    "title": "Add order hold status and flow and Order Item Assoc enum to UpgradeData.xml",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#686",
    "repo": "hotwax/oms",
    "title": "feat: app-view permissions + COMMERCE_SUPER Administrator group",
    "labels": [],
    "type": "PR",
    "body": "## What\nAdds the HotWax OMS PWA **app-view permissions** + a **`COMMERCE_SUPER` (\"Administrator\")** security group to the platform security seed, and makes the demo user an Administrator.\n\n**`data/AC_OmsSecurityPermData.xml`** (ext-seed):\n- 16 `*_APP_VIEW` app gates (COMPANY, FULFILLMENT, PICKING, RECEIVING, INVCOUNT, ATP, ORDER_ROUTING, BOPIS, TRANSFERS, THRESHOLD, PREORDER, IMPORT, JOB_MANAGER, FACILITIES, FULFILLMENT_LEGACY, USERS)\n- company/store setup, fulfillment/picking/receiving/inventory, users/security, data-management permissions\n- `COMMERCE_SUPER` group + 68 grants (incl. the existing `ORDERMGR_*` family)\n\n**`data/AJ_HCUserData.xml`** (demo):\n- `hotwax.user` assigned to `COMMERCE_SUPER` (was `HC_ORDERMGR_ADMIN`)\n\n## Why\nThe PWA apps (company, fulfillment, etc.) gate on `*_APP_VIEW` permissions that the new OMS seed didn't define, so admins couldn't open the apps. Permission IDs + descriptions are taken from the canonical legacy hwmapps commerce security data; `ORDER_ROUTING_APP_VIEW` description corrected (legacy had a copy-paste typo).\n\n## Verified\nClean staged `loadProduction` (4 stages) — `COMMERCE_SUPER` created with 68 grants, `hotwax.user` solely `COMMERCE_SUPER`, `COMPANY_APP_VIEW` effective; company app gate passes without the front-end bypass.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#688",
    "repo": "hotwax/oms",
    "title": "Changed: Refactored find#PartyTasks service",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Changed",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#689",
    "repo": "hotwax/oms",
    "title": "Improved: Commented out ReserveInventoryOnAddSalesOrderItem seca rule.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#690",
    "repo": "hotwax/oms",
    "title": "Changed: Refactored the Get Product Associations service",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Changed",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#691",
    "repo": "hotwax/oms",
    "title": "Changed: Moved the work effort status data to udm component",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#693",
    "repo": "hotwax/oms",
    "title": "Revert \"Improved: Added support to create product store role while creating sales order (#646).\"",
    "labels": [],
    "type": "PR",
    "body": "Reverts hotwax/oms#644",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#694",
    "repo": "hotwax/oms",
    "title": "Removed productStoreId from customer solr document as Customer ProductStoreRole creation functionality is removed.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#673",
    "repo": "hotwax/oms",
    "title": "Add: getFacilityRejections service and REST endpoint",
    "labels": [],
    "type": "PR",
    "body": "Closes #672\n\n## Summary\n- Adds `get#FacilityRejections` service in `OrderServices.xml` that queries `OrderFacilityChange` for orders moved to `REJECTED_ITM_PARKING` from a given facility\n- Exposes it at `GET /rest/s1/oms/facilities/{facilityId}/facilityRejections` in `oms.rest.xml`\n- Supports optional `productStoreId`, `changeDatetime_from`, and `changeDatetime_thru` query params\n- Returns deduplicated list of `{orderId, shipGroupSeqId}` maps\n\n## Test plan\n- [ ] `GET /rest/s1/oms/facilities/{facilityId}/facilityRejections` returns 200 with a list of rejected order/shipGroup pairs\n- [ ] `productStoreId` filter limits results to orders belonging to that store\n- [ ] `changeDatetime_from` / `changeDatetime_thru` correctly bound the date range\n- [ ] Order Manager PWA facility rejection page no longer shows 404",
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
    "linkedIssueIds": [
      "672"
    ]
  },
  {
    "id": "hotwax/oms#638",
    "repo": "hotwax/oms",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#699",
    "repo": "hotwax/oms",
    "title": "Added: rest endpoint for approve sales order",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#692",
    "repo": "hotwax/oms",
    "title": "Fix complimentary item cancellation SECA",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\n- Business impact: packed-order item cancellation can return a backend `400` even when Order Manager sends a valid item cancellation payload, which blocks reliable cancellation and causes confusing operator feedback.\n- Technical root cause: the `CancellComplimentaryItem` SECA added for complimentary item cancellation runs when no complimentary association exists, then calls `cancel#SalesOrderItem` with undefined `toOrderItemSeqId` and no `shipGroupSeqId`.\n- Solution: only process complimentary cancellation when `OrderItemAssoc` records exist, iterate those associations, and pass the associated target item and ship group to the canonical `cancel#SalesOrderItem` service.\n\n## Evidence\n\n- Original frontend issue: https://github.com/hotwax/order-manager/issues/204\n- Reporter Jam: https://jam.dev/c/9b6897c3-c83d-4498-834c-cac09f8ff43f\n- The Jam console shows Order Manager sent `items: [{ orderItemSeqId: \"01\", shipGroupSeqId: \"00004\", reason: \"NO_VARIANCE_LOG\", comment: \"\" }]` to `oms/orders/M104032/items/cancel`, but OMS returned a missing `Order Item Seq ID` / `Ship Group Seq ID` validation error.\n- Local OMS request-shape check confirmed that the direct `items` map payload is valid. The missing-field error happens when the backend invokes `cancel#SalesOrderItem` without those fields.\n- Git blame points the complimentary cancellation SECA to Deepak's June 12 commit: https://github.com/hotwax/oms/commit/ad1b829d83ef89bd337e2eb141edf46ad2bb4397\n\n## Why this layer\n\n- Order Manager already sends the required item identifiers to the batch cancel endpoint.\n- The backend SECA is the layer that can make a second `cancel#SalesOrderItem` call after the valid request is accepted.\n- Fixing the SECA prevents the backend from producing a missing-field validation error for orders that do not have complimentary item associations.\n\n## Verification\n\n- `xmllint --noout service/oms.secas.xml` passed.\n- `git diff --check` passed.\n- Moqui audit helper from the local skill instructions was not available at `../../scripts/moqui_quality_audit.py` in this checkout layout, so that audit could not be run.\n- No standalone component test task is exposed in this OMS component checkout; this should be retested on an OMS runtime by replaying the cancellation flow from the linked Jam.\n\n## Review request\n\n@dixitdeepak please review and approve if this matches the intended complimentary-item cancellation behavior from the original SECA change.\n\n@ravilodhi adding you for review as requested.\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#630",
    "repo": "hotwax/oms",
    "title": "Fixed: NPE, conditions and stale notification body",
    "labels": [],
    "type": "PR",
    "body": "Rlated Issue: #622 \r\n\r\nChangelog: Fixed\r\n\r\nThis PR introduces following:\r\n- Improved conditions on orders and shipmnent counts.\r\n- Fix: NPE on shipmentCount in Open Fulfillment Orders Notifications.\r\n- Fix: stale notification body from previous iteration.",
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
    "linkedIssueIds": [
      "622"
    ]
  },
  {
    "id": "hotwax/oms#640",
    "repo": "hotwax/oms",
    "title": "Add new service jobs for order notifications",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: #639 \r\n\r\nThis PR Introduces service job data for fulfillment and bopis order count notifications.",
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
    "linkedIssueIds": [
      "639"
    ]
  },
  {
    "id": "hotwax/oms#702",
    "repo": "hotwax/oms",
    "title": "Changed: Store first risk fact description sorted by negative first in order tasks",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Changed\r\n\r\nRelated Issue: #701 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "701",
        "body": "Currently we're storing all the descriptions from all facts from risk object in an order, but the **description** field on the **WorkEffort** allows 255 charachters only.",
        "labels": [],
        "files": [],
        "title": "Store first risk fact in task workEffort of a risked order."
      }
    ],
    "linkedIssueIds": [
      "701"
    ]
  },
  {
    "id": "hotwax/oms#664",
    "repo": "hotwax/oms",
    "title": "Remove InventoryItemVariance creation from POSOrderReservationAndIssuance flow",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n\r\n* Removed `InventoryItemVariance` creation from `create#POSOrderReservationAndIssuance`.\r\n* Removed creation of the associated `PhysicalInventory` record that was only used for variance creation.\r\n* Preserved existing item issuance behavior for POS completed orders.\r\n* Updated `InventoryItemDetail` creation to directly use issued quantity values for ATP and QOH adjustments.\r\n\r\n## Why\r\n\r\nPOS order completion already records inventory movement through `ItemIssuance`. Creating additional `InventoryItemVariance` records in the same flow results in duplicate inventory adjustment tracking and can lead to unintended variance-related side effects.\r\n\r\n## Testing\r\n\r\n## Issue Link\r\nCloses #https://github.com/hotwax/oms/issues/662\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#697",
    "repo": "hotwax/oms",
    "title": "Added: change order status endpoint",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#706",
    "repo": "hotwax/oms",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#536",
    "repo": "hotwax/oms",
    "title": "Fix- Rollback in ATP rule-group execution when facility group lists are empty.",
    "labels": [
      "bug"
    ],
    "type": "PR",
    "body": "#### Resolves issue\r\n\r\n- https://github.com/hotwax/hotwax-oms/issues/506\r\n\r\n## Summary\r\n\r\nThe reported `co.hotwax.atp.AtpServices.get#Products` failure was not the root cause. The transaction was already marked rollback-only earlier during ATP rule-template execution.\r\n\r\n`ProductFacilityRuleTemplate.drl.ftl` was querying `FacilityGroupMember` using `IN` conditions for `includedFacilityGroupIds` and `excludedFacilityGroupIds` even when one of these lists was empty. This caused the transaction to fail before product retrieval was reached.\r\n\r\n## Solution\r\n\r\nAdded checks in the rule template so `FacilityGroupMember` queries run only when the respective included/excluded facility group ID list contains values.\r\n\r\n## Impact\r\n\r\n- Prevents transaction rollback caused by empty facility-group member queries\r\n- Allows ATP rule-group execution to proceed to product retrieval\r\n- Avoids unnecessary job failure for partially configured facility-group conditions\r\n\r\n## Verification Steps\r\n\r\n1. Run ATP rule-group job where only included facility groups are configured and excluded is empty and vice versa.\r\n2. Verify the job does not fail with `Transaction marked for rollback, not running service co.hotwax.atp.AtpServices.get#Products`.\r\n3. Verify product retrieval completes successfully.\r\n4. Test a rule group with both included and excluded facility groups populated to confirm no regression.\r\n\r\n## Testing\r\n\r\n1. Run ATP rule-group job where either only included facility groups are configured and excluded is empty or vice versa.\r\n2. Verify the job does not fail with `Transaction marked for rollback, not running service co.hotwax.atp.AtpServices.get#Products` and product retrieval completes successfully.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/oms#561",
    "repo": "hotwax/oms",
    "title": "Added support to create Klaviyo email flow from Klaviyo setup screen.…",
    "labels": [],
    "type": "PR",
    "body": "… Enhanced screen to add support of some required fileds.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#220",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#232",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Ingest Shopify order risk and forward to OMS",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nExtends the Shopify order integration to capture order risk / fraud and hand it to the OMS, which acts on it at approval. Companion to **hotwax/oms#601** (the OMS-side entities, services, and approval logic).\n\n## Changes\n\n- **GraphQL** (`OrderFeedServices.xml`): adds `risk { recommendation, assessments { riskLevel, provider { title }, facts { description, sentiment } } }` to the order sync query.\n- **`create#ShopifyOrder`** (`ShopifyOrderServices.xml`): after the OMS order is created, makes a **single** call to `co.hotwax.oms.order.OrderRiskServices.store#OrderHeaderRisk` with the raw Shopify risk shape.\n- **`docs/order_risk_implementation.md`**: the full cross-repo implementation spec (model, decision matrix, approval flow, store-vs-shop discussion, open decisions).\n\n## Separation of concerns\nThe bridge **only maps the raw Shopify shape** into one OMS service call — it does no enum lookups, no persistence, and no approval logic. All of that is owned by the OMS (hotwax/oms#601), keeping risk actions a native OMS function.\n\n## Note for reviewers\nThe full design rationale (why summary recommendation lives on `OrderHeader`, why risk uses approval + WorkEffort task rather than `ORDER_HOLD`, the Mantle/OFBiz native-model exploration that led here) is in the spec doc. Requires hotwax/oms#601 to be present for the `store#OrderHeaderRisk` service to resolve.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#235",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "LOOP Exchange orders to be processed as POS cash sale orders in OMS",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\nFixed an issue where completed LOOP Exchange orders were not being included in the NetSuite Sales Order export file.\r\n\r\n## Root Cause\r\nLOOP Exchange orders are created without a shipping address and should be treated as cash sale POS orders. However, OMS was not classifying `LOOP_EXCH` orders as cash sale orders, causing them to follow the standard brokering flow.\r\n\r\nAs a result:\r\n\r\n* `orderFacilityId` was not assigned on the ship group.\r\n* Inventory was not deducted from the fulfillment location as expected.\r\n* Orders were excluded from the NetSuite export because `order_item_ship_group.order_facility_id` remained null.\r\n\r\n## Changes\r\n\r\nUpdated the cash sale order determination logic in `prepareTransformedShopifyOrderPayload.groovy` to treat `LOOP_EXCH` orders the same as `POS_SALES_CHANNEL` orders when no shipping address is present.\r\n\r\n### Before\r\n\r\n```groovy\r\nboolean isCashSaleOrder = isShippingAddressEmpty && \"POS_SALES_CHANNEL\".equals(channelId)\r\n```\r\n\r\n### After\r\n\r\n```groovy\r\nboolean isCashSaleOrder = isShippingAddressEmpty &&\r\n    (\"POS_SALES_CHANNEL\".equals(channelId) || \"LOOP_EXCH\".equals(channelId))\r\n```\r\n\r\n## Expected Outcome\r\n\r\n* LOOP Exchange orders are created as completed POS cash sale orders.\r\n* Fulfillment location is assigned correctly.\r\n* `orderFacilityId` is populated on the ship group.\r\n* Inventory is deducted from the fulfillment location.\r\n* Eligible LOOP Exchange orders are included in the NetSuite Sales Order export file.\r\n\r\n\r\n## Log Work\r\n- Hours spent: 2\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/582\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#243",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Add Shopify inventory delta sync services to JUNE-15",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Retarget Chinmay's existing `shopify-inventory-delta-sync` branch to the AS Beauty `JUNE-15` branch.\n- Keeps the same implementation branch as the existing main-targeted PR #171.\n- No Codex-authored source changes or copied branches are involved in this PR.\n\n## Notes\nThis is intended as the AS Beauty demo PR for the Shopify inventory event SECAs and supporting services already present on Chinmay's branch.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#249",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Improved: Added support to create product store role in while updating sales order (#646)",
    "labels": [],
    "type": "PR",
    "body": "\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#251",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Update product sync for product store association changes",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\nUpdated the product sync workflow in the bridge to support the new product-to-store association logic introduced in UDM.\r\n\r\n### Changes\r\n- Sets `primaryProductStoreId` on both virtual and variant `Product` entities during sync.\r\n- Creates a `ProductStoreProduct` mapping record to associate the synced product with the product store.\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/250\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#252",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Extract Country and Area Codes from Phone Numbers",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n\r\n* Added phone number parsing using Google's libphonenumber in `prepareTransformedShopifyOrderPayload.groovy`\r\n* Introduced a reusable `parsePhoneNumber` helper to extract `countryCode`, `areaCode`, and `contactNumber`\r\n* Updated order-level, billing, and shipping phone mappings to use parsed phone number data\r\n* Added fallback behavior to preserve existing functionality by storing the raw phone number when parsing fails\r\n* Used address country codes as the default parsing region when available, with a fallback to `US`\r\n\r\n## Log Work\r\n- Hours spent: 3\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/595\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#259",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Fix misleading comments/docs: newOrderSync.launchDate is not auto-created",
    "labels": [],
    "type": "PR",
    "body": "## Summary\nSeveral pre-existing comments and docs falsely claimed the `SystemProperty` `newOrderSync.launchDate` is auto-created on first run. It is not — no code path creates it:\n\n- [`syncShopifyOrder.groovy`](script/co/hotwax/sob/order/syncShopifyOrder.groovy) looks up the property and does `ec.message.addError(...)` + `return` when it's missing.\n- `sync#ShopifyOrderHistory` never writes it. The only writer is the order sync setup/onboarding UI (`store#…SystemProperty`).\n\nThis corrects the comments/docs to state the property **must be configured** (not auto-created).\n\n## Changes (comment/doc-only — no behavior change)\n- `script/co/hotwax/sob/order/syncShopifyOrder.groovy` — line 21 comment\n- `data/SOBOrderSyncData.xml` — seed comment\n- `upgrade/v2.0.0/UpgradeData.xml` — upgrade comment\n- `docs/shopify_order_history_sync.md` — 3 references (Launch Date section, Services table, SystemProperty table)\n\n## Verification\n- `git grep -ni \"auto-create\\|auto-created\"` over the touched files now shows only negations (\"must be configured … not auto-created\").\n- Confirmed against `JUNE-15` that no service creates the property; the cursor property `orderSyncHistory.lastSyncDate` (genuinely auto-updated) was intentionally left untouched.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#227",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "feat: Shopify Location Sync — get#ShopifyLocations and store#ShopifyFacility",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nAdds two services to \\`ShopifyFacilityServices.xml\\` for the Shopify Location Sync feature.\n\n**\\`get#ShopifyLocations\\`**\n- Fetches all active Shopify locations via GraphQL using \\`GraphqlFacade\\` DSL\n- Returns raw \\`locations\\` connection (\\`edges[].node\\`) — PWA navigates the structure and strips GIDs client-side\n- Resolves \\`systemMessageRemoteId\\` from \\`shopId\\` directly (no helper service)\n\n**\\`store#ShopifyFacility\\`**\n- Creates or updates an OMS Facility for a **single** Shopify location\n- Idempotent on \\`shopifyLocationId\\` (dedup via \\`Facility.externalId\\`)\n- \\`facilityTypeId\\` is always caller-provided — never auto-inferred\n- Resolves Shopify alpha-2 country/province codes to OFBiz geoIds via \\`moqui.basic.Geo\\` + \\`GeoAssoc\\`\n- Delegates persistence to \\`store#Facility\\` in OMS (PR #578), then creates/updates \\`ShopifyShopLocation\\`\n- Bulk imports: POST a JSON array and Moqui calls this service once per item natively\n\n## Depends on\n\n- hotwax/oms#578 (\\`store#Facility\\` platform service)\n- hotwax/mantle-shopify-connector#344 (REST endpoints)\n\n## Part of\n\nhotwax/company#130",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#255",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Add Shopify store setup bridge services",
    "labels": [],
    "type": "PR",
    "body": "## Business summary\nRetailer store setup needs one backend bridge path that can start the first Shopify data pulls after a shop is connected. This PR consolidates the Shopify bridge onboarding work into one branch: order history queueing plus initial Shopify inventory reset into OMS.\n\nCloses #254.\nCloses #256.\n\n## Inventory reset architecture\n- `reset#ShopifyProductFacilityInventory` is the Shopify-facing reset service.\n- It accepts Shopify `shopId`, `shopifyLocationId`, `shopifyProductId`, and the external inventory level (`externalATP` or `externalQOH`).\n- The bridge resolves Shopify location/product mappings to OMS `facilityId` and `productId`.\n- The bridge calls `co.hotwax.poorti.FulfillmentServices.reset#ProductFacilityInventory` with OMS ids and inventory levels only.\n- Poorti owns inventory item selection, diff calculation, `ExternalInventoryReset` logging, and `InventoryItemDetail` creation.\n\n## Store setup flows\n- `sync#ShopifyInventoryReset(shopId)` queues the Shopify bulk inventory query.\n- `consume#ShopifyInventoryResetDataFile` transforms the Shopify JSONL result into Data Manager rows.\n- `import#ShopifyInventoryReset` routes mapped inventory rows through the Shopify bridge reset service.\n- `sync#ShopifyOrderHistoryForShop` lets setup queue order history from the shop id without exposing lower-level message remote details.\n\n## Data and diagnostics\n- Adds `RESET_SHOPIFY_INVENTORY` Data Manager/SystemMessage/ServiceJob seed and upgrade data.\n- Adds `VAR_SHOPIFY_RESET` as the dedicated `IID_REASON` for inventory resets received from Shopify.\n- Keeps external ATP/QOH visible in reset outputs for debugging.\n- Logs Shopify ids, resolved OMS ids, external levels, computed diffs, and `resetItemId` after each bridge reset.\n\n## Dependencies\n- Depends on hotwax-poorti #238 for `reset#ProductFacilityInventory` and the simplified `create#ExternalInventoryReset` event-log contract.\n\n## Validation\n- XML parsed with `xmllint` for conflicted/edited service and data files during consolidation.\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "254",
        "body": "Business summary:\nRetailer onboarding should be able to pull the current Shopify on-hand inventory into OMS after products and locations are mapped. Today the bridge can push OMS inventory to Shopify, but there is no inverse initial import path that reads Shopify inventory levels and resets OMS facility inventory.\n\nAcceptance criteria:\n- Add a Shopify bulk inventory query for inventory items and inventory levels.\n- Transform the JSONL result into Data Manager rows.\n- Map Shopify inventory item IDs to ShopifyShopProduct and Shopify location IDs to ShopifyShopLocation.\n- Reset OMS inventory through the Poorti reset#InventoryItem service from hotwax-poorti#267.\n- Seed the DataManagerConfig, SystemMessageType, and paused ServiceJob needed by onboarding/dev setup.",
        "labels": [],
        "files": [],
        "title": "Import initial Shopify inventory into OMS during onboarding"
      },
      {
        "type": "Issue",
        "number": "256",
        "body": "## Business summary\nRetailer onboarding needs to load recent/open Shopify orders after a store is connected, but the UI should only know the Shopify shop. Today the existing history sync service expects lower-level message remote details, so setup cannot queue the first order pull as a guided onboarding action.\n\n## Scope\n- Add a shop-level REST endpoint for queuing Shopify order history.\n- Reuse the existing BulkOrderHistoryQuery service and cursor/window behavior.\n- Return the queued message and resolved date window so onboarding can report what it started.\n\n## Validation target\n- Authenticated POST /rest/s1/sob/shopify/orderHistory reaches the bridge route and returns service-level validation errors for invalid setup instead of 404/auth failures.\n\nDepends on #255.",
        "labels": [],
        "files": [],
        "title": "Queue Shopify order history from product-store onboarding"
      }
    ],
    "linkedIssueIds": [
      "254",
      "256"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#238",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Handle fulfillmentService object response correctly",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Updated Shopify order transformation logic to correctly handle cases where fulfillmentService is received as an object instead of a string.\r\n\r\n## Log Work\r\n- Hours spent:1\r\n\r\n## Issue Link\r\n- Closes #237 \r\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "237",
        "body": "The order import flow expects fulfillmentService to be a string when resolving SHOP_FULL_SRVC_ALLOC mappings. However, Shopify payloads return it as an object containing service details.",
        "labels": [],
        "files": [],
        "title": "Fix fulfillment service mapping by using serviceName."
      }
    ],
    "linkedIssueIds": [
      "237"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#268",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Updated the locaiton resolution logic to set default facility end",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- The default facility was getting set even if there is a facility on the ReturnHeader.\r\n\r\n## Log Work\r\n- Hours spent: 1h\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#271",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Refactor Shopify inventory reset to per-level records and a single import service",
    "labels": [],
    "type": "PR",
    "body": "Closes #270.\n\nSimplifies the Shopify → OMS inventory reset flow: process one inventory **level** per Data Manager record instead of one **item** with nested levels, collapse the two-service import path into one, and lean on the Data Manager's per-record transaction isolation instead of hand-rolled `force-new`.\n\nFull findings, considerations, and decisions are in #270.\n\n## Changes\n\n- **Query** (`BulkQueryShopifyInventoryReset.ftl`): filter `inventoryItems(query: \"tracked:true\")` so untracked items never enter the pipeline. `groupObjects: true` unchanged.\n- **Transform** (`ShopifyHelper.transformShopifyJsonl`): add a `groupByParent` flag (default `true`).\n  - `true` → existing nest-under-parent behavior; the virtualProduct flow is byte-identical (still passes 4 args).\n  - `false` → emit one record per `__parentId` (level) line, skip parent lines. The inventory consume passes `false`.\n- **Consume** (`consume#ShopifyInventoryResetDataFile`):\n  - Remove `transaction=\"force-new\"` and `ignore-error=\"true\"` from `upload#DataManagerFile` — the transform + MDM-log creation now run in the consume's own transaction (commit together; on failure the SystemMessage retries).\n  - Remove the dead `transaction-timeout=\"7200\"` (the framework already invokes consume with `transaction-timeout=\"1800\"`, which overrides it).\n  - Drop the `additionalParameters` build (no `SystemMessageTypeParameter` seeded) and hardcode `configId=\"RESET_SHOPIFY_INVENTORY\"`.\n- **Import** (`import#ShopifyInventoryReset`): rewritten to process one level — resolve product from `shopifyInventoryItemId` (via `__parentId`), facility from `location.id`, read `on_hand`, call poorti `reset#ProductFacilityInventory`. No loop, no `force-new`, no `additionalParameters`. `shopId` still arrives as a named param via DataManagerParameter.\n- **Deleted** `reset#ShopifyProductFacilityInventory` — its only caller was `import#` (no REST route); its resolve-and-reset body is now inline.\n\n## Functional equivalence\n\nIdentical resets for every tracked, mappable (product, location) pair (same `facilityId`, `productId`, `externalQOH`, `reasonEnumId=VAR_SHOPIFY_RESET`, same `InventoryItemDetail` diff). Intentional behavior changes: untracked items excluded; zero-level items silently skipped (not errored); error-file granularity is per-level not per-item; upload failures surface and retry instead of being swallowed.\n\n## Dependencies\n\n- `VAR_SHOPIFY_RESET` enum upgrade-data fix (#264 / #265) must land first — the reset reason FK depends on it.\n\n## Validation\n\n- [x] `xmllint` parses the changed service file\n- [x] No remaining references to the deleted `reset#ShopifyProductFacilityInventory`\n- [x] moqui quality audit clean on the changed services (virtualProduct flow untouched)\n- [ ] Build the component (Groovy helper + service changes) — not yet compiled\n- [ ] Run a real bulk-query result end-to-end (sync → consume → MDM → import) on a connected shop\n- [ ] Confirm error-file capture for an unmapped location / missing on_hand row",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "270",
        "body": "## Background\n\nThe Shopify → OMS inventory reset flow introduced in #255 works, but a review of its design surfaced several over-complications and a couple of latent defects. This issue captures the findings, the design considerations, and the decisions taken to simplify it.\n\nThe flow: `sync#ShopifyInventoryReset` queues a bulk query → Shopify returns JSONL → `consume#ShopifyInventoryResetDataFile` transforms it and uploads to Data Manager (MDM) → MDM calls `import#ShopifyInventoryReset` per record → poorti `reset#ProductFacilityInventory` writes the `InventoryItemDetail`.\n\n## Findings\n\n1. **Stateful parent-child merge.** The transform reassembled the bulk JSONL into one nested record per inventory item (item + nested `InventoryLevel[]`), which `import#` then looped over.\n2. **Double resolution across two services.** `import#` resolved facility + product per level, then discarded them and passed raw Shopify ids to `reset#ShopifyProductFacilityInventory`, which re-resolved the same location and product. `reset#` had exactly one caller (`import#`) and no REST route.\n3. **`transaction=\"force-new\"` per level was load-bearing for the wrong reason.** It was there to give per-level partial-success isolation — but the Data Manager already runs every record in its own transaction (`MaargDataLoaderImpl` calls the import service with `requireNewTransaction(true)` + `ignorePreviousError(true)` and captures per-record errors). The only thing per-level force-new added was isolation *within* an item.\n4. **`additionalParameters` carried nothing.** It is built from `SystemMessageTypeParameter`, of which none are seeded for `BulkQueryShopifyInventoryReset`, so it was always an empty map. It was embedded in every record (no consumer) and read only for a `resetDateResourceId`/`mdmConfigId` that always fell back to defaults.\n5. **Dead `transaction-timeout=\"7200\"`.** The framework invokes the consume service via `consume#ReceivedSystemMessage` with `transaction=\"force-new\" transaction-timeout=\"1800\"`, which overrides the service-def timeout. The 7200 never applied; the effective ceiling is 1800s.\n6. **`ignore-error=\"true\"` on the MDM upload = silent data loss.** A failed `upload#DataManagerFile` was swallowed, the SystemMessage was marked consumed, and the transformed file was deleted — losing the data with no error trail.\n7. **Untracked items were not filtered**, so they entered the pipeline (mostly as error-file noise, since they carry no meaningful on-hand).\n\n## Considerations\n\n- **Can shopId come from Shopify?** No. The OMS key is `ShopifyShop.shopId` (internal), not the Shopify shop GID (`shopifyShopId`); a bulk query can't carry a shop id at the root, and `inventoryItem` nodes don't expose it. The consume already holds the OMS shopId (`SystemMessageRemote.internalId`), so it stays out of the file and is injected as a DataManagerParameter.\n- **`groupObjects` true vs false.** Kept `true` so a SKU's records stay grouped for thread assignment in MDM chunking. It doesn't affect per-level processing (we key each level off `__parentId`).\n- **Flatten to a JSON array (Path A) vs teach MDM to read JSONL (Path B).** Chose A — MDM only reads a JSON array (`.json` → `JsonHandler`), and Path B would touch the shared loader. The transform still converts JSONL → JSON array; it just stops merging.\n- **Merge `import#`/`reset#` or keep two?** Merge. With per-level records there is no loop, the DM provides per-record isolation, and `reset#` had no external reuse. Keeping two would be indirection plus the double resolution.\n- **Per-level partial success.** Kept — it falls out of the DM's per-record isolation for free (one record = one level = one reset; a bad mapping or poorti failure sends just that level to the error file).\n- **Suspend/resume the transaction around the file I/O?** Decided against for now; the framework's 1800s ceiling is acceptable for the expected file sizes.\n- **Split the file per inventory item (via DM `groupBy`)?** Not for this flow — it would unbalance chunks and serialize a SKU's levels for no benefit, since per-level resets are independent.\n- **Zero-level-item diagnostic.** The per-row INFO log already covers every processed level; items with no levels simply produce no record. Accepted (a tracked-but-unstocked item is better surfaced via reconciliation, not the reset path).\n\n## Decisions\n\n1. Filter `inventoryItems(query: \"tracked:true\")` at the bulk query.\n2. Flat, per-level transform: add a `groupByParent` flag (default `true`) to the shared `transformShopifyJsonl`. `true` keeps the existing nest-under-parent behavior (virtualProduct flow unchanged); `false` emits one record per `__parentId` (level) line. The inventory consume passes `false`.\n3. Collapse `import#ShopifyInventoryReset` + `reset#ShopifyProductFacilityInventory` into one one-record-one-reset service; delete `reset#ShopifyProductFacilityInventory`. Product resolved by `shopifyInventoryItemId` (from `__parentId`); `externalQOH` only.\n4. Drop `additionalParameters` from the inventory flow (consume build, transform embed, import param). Kept in the shared helper signature + group-by-parent branch for the virtualProduct flow.\n5. Remove `transaction=\"force-new\"` and `ignore-error=\"true\"` from the `upload#DataManagerFile` call so the transform + MDM-log creation run in the consume's own transaction (commit together; on failure the message retries).\n6. Remove the dead `transaction-timeout=\"7200\"` from the consume service.\n\n## Functional equivalence\n\nThe resets performed are identical for every tracked, mappable (product, location) pair — same `facilityId`, `productId`, `externalQOH`, `reasonEnumId=VAR_SHOPIFY_RESET`, same `InventoryItemDetail` diff. Intentional behavior changes: untracked items excluded; zero-level items silently skipped (not errored); error-file granularity is per-level (not per-item); upload failures surface and retry (not swallowed).\n\n## Dependency\n\nBuilds on the `VAR_SHOPIFY_RESET` enum upgrade-data fix (#264 / #265).",
        "labels": [],
        "files": [],
        "title": "Refactor Shopify inventory reset: per-level records, single import service, simpler transaction handling"
      }
    ],
    "linkedIssueIds": [
      "270"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#269",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Remove nested transaction boundaries from Shopify order processing",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\nThis PR removes unnecessary nested transaction boundaries from the Shopify order synchronization flow to prevent connection pool exhaustion, transaction deadlocks, and cascading `XAER_RMFAIL` errors during order imports.\r\n\r\n## Problem\r\n\r\nThe Shopify order import process executes under a parent transaction while several downstream services are invoked using `requireNewTransaction(true)` and `transaction=\"force-new\"`.\r\n\r\nThis results in:\r\n\r\n* Multiple XA connections being held simultaneously by a single thread.\r\n* Transaction suspension and connection retention during nested service execution.\r\n* Connection pool exhaustion under load.\r\n* `XAER_RMFAIL` and rollback-only transaction errors.\r\n* Subsequent order imports failing even when the underlying data is valid.\r\n\r\n## Changes\r\n\r\n* Removed nested `requireNewTransaction(true)` calls from the Shopify order sync flow.\r\n* Updated service invocations to reuse the active transaction wherever possible.\r\n* Ensured all order creation sub-processes participate in a single transaction boundary.\r\n* Improved transaction consistency across order, fulfillment, refund, return, and payment processing flows.\r\n\r\n## Expected Behavior\r\n\r\n* Each Shopify order is processed within a single transaction scope.\r\n* If any step fails, the entire order import is rolled back cleanly.\r\n* No additional connections are acquired through unnecessary transaction suspension.\r\n* Reduced risk of connection pool exhaustion and deadlocks.\r\n\r\n## Testing\r\n\r\n* Imported Shopify orders with reduced XA connection pool sizes to reproduce previous failures.\r\n* Validated successful order creation after removing nested transaction boundaries.\r\n* Tested multi-order import scenarios to verify stable transaction behavior.\r\n* Confirmed rollback behavior when exceptions occur during order processing.\r\n\r\n## Impact\r\n\r\n* Improves transaction reliability and system stability during Shopify order imports.\r\n* Reduces database connection usage per order.\r\n* Prevents partial order creation and inconsistent data states.\r\n* Eliminates a major source of connection pool deadlocks in the order synchronization flow.\r\n\r\n\r\n## Log Work\r\n- Hours spent: 10\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-oms/issues/601\r\n#https://github.com/hotwax/oms/issues/669\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#274",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Removed use of SHOP_READ_WRITE_ACCESS for checking access scopeof Sho…",
    "labels": [],
    "type": "PR",
    "body": "…pify. We use SHOP_RW_ACCESS for same purpose.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#276",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Removed use of SHOP_READ_WRITE_ACCESS for checking access scopeof Sho…",
    "labels": [],
    "type": "PR",
    "body": "…pify. We use SHOP_RW_ACCESS for same purpose.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#275",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Revert \"Improved: Added support to create product store role in while updating sales order (#646)\"",
    "labels": [],
    "type": "PR",
    "body": "Reverts hotwax/hotwax-shopify-oms-bridge#249",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#277",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Prevent Shopify inventory reset echo-back via origin remote",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nPrevents a Shopify inventory **reset** from being echoed back to the same Shopify store it was imported from, by recording the **origin `SystemMessageRemote`** on each reset and skipping that remote on the outbound push — instead of relying on `SHOPIFY_INV_SYNC` being disabled while the reset runs.\n\n**Business context:** During the initial inventory reset (cold-start seed), Shopify inventory is pulled into the OMS. The resulting deltas must not be pushed straight back to the same Shopify store (echo-back / sync loop), but should still reach any *other* Shopify store mapped to the same facility/product. Today this is handled coarsely — operators must keep `SHOPIFY_INV_SYNC` disabled until the reset completes, which is fragile and easy to get wrong. This change makes echo-back prevention precise and automatic, per remote.\n\n**What changed (`service/co/hotwax/sob/product/InventoryServices.xml` only):**\n- **Capture origin on import:** `consume#ShopifyInventoryResetDataFile` forwards the inbound Shopify remote id (`systemMessageRemote.systemMessageRemoteId`) through the Data Manager `parameters` into `import#ShopifyInventoryReset` (new optional `systemMessageRemoteId` in-param), which passes it as `originSystemMessageRemoteId` into the OMS reset (`reset#ProductFacilityInventory`). The value is persisted on the `ExternalInventoryReset` row (see the dependent Poorti PR).\n- **Skip origin on outbound:** `post#ShopifyExternalInventoryReset` reads `originSystemMessageRemoteId` off the reset row and passes it as `excludeSystemMessageRemoteId` down through `post#ShopifyInventoryAdjustment` → `post#ShopifyInventoryAdjustments`. The per-shop loop skips the shop whose write-access remote equals `excludeSystemMessageRemoteId`, logging that it skipped the origin remote to avoid echoing the change back to Shopify.\n- **Other shops unaffected:** non-origin shops still receive the delta, subject to the existing per-store `SHOPIFY_INV_SYNC` gate (left intact).\n- **Docs:** the stale \"run reset before enabling `SHOPIFY_INV_SYNC`\" sequencing contract in the `sync#ShopifyInventoryReset` description is replaced with the per-remote echo-back explanation.\n\n**Notes / safety:**\n- The `PostShopifyExternalInventoryReset` SECA is **unchanged** (it still passes only `resetItemId`; origin is read from the persisted row).\n- `excludeSystemMessageRemoteId` is optional; the non-reset adjustment paths (recorded inventory via `PostShopifyRecordedInventoryProduct`, physical-inventory variance) pass nothing, so the new skip is a no-op for them — existing inventory-adjustment behavior is preserved.\n- No transfer shipment/receipt or fulfillment-sync behavior is touched. No `ShopifyShop.realTimeInventoryPush` setting is introduced (intentionally out of scope for this PR).\n\n## Log Work\n- Hours spent:\n\n## Issue Link\n- Closes #\n- (No separate tracked issue; part of the June-15 Shopify inventory reset work.)\n\n## Dependency\n**Depends on hotwax-poorti PR #282** — https://github.com/hotwax/hotwax-poorti/pull/282 — which adds the `originSystemMessageRemoteId` field on `ExternalInventoryReset` and threads it through `reset#ProductFacilityInventory` / `create#ExternalInventoryReset`. Merge/deploy the Poorti change **first**; this bridge change reads and writes that field at runtime.\n\n## Release note\nShopify inventory resets no longer echo their delta back to the store they were imported from. Each reset records its origin Shopify remote and the outbound sync skips that remote, so a reset can run safely **without** first disabling real-time inventory sync. Deltas still propagate to any other connected Shopify store.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#278",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Gate realtime inventory push on ShopifyShop.realTimeInventoryPush",
    "labels": [],
    "type": "PR",
    "body": "## What\nMigrates the realtime inventory push and fulfillment paths off the product-store `SHOPIFY_INV_SYNC` setting to the shop-level `ShopifyShop.realTimeInventoryPush` flag.\n\n- **`post#ShopifyInventoryAdjustments`** — checks `realTimeInventoryPush` per shop, read directly off `ShopifyShopLocationView` (`alias-all`), replacing the `productStoreId`-scoped `SHOPIFY_INV_SYNC` `ProductStoreSetting` lookup.\n- **`post#ShopifyFulfillment`** — removes the `SHOPIFY_INV_SYNC` guard (fulfillment is no longer gated by the inventory toggle) and its now-dead `orderHeader` fetch.\n- **`ShopifyShopDetail` screen** — adds an editable \"Inventory Sync\" toggle backed by a new `update#ShopifyShop` transition.\n\n## Why\nPR 1 of moving the realtime Shopify inventory toggle to a shop-level field so an inventory event fans out per eligible Shopify shop (the product-event path already iterates all shops mapped to the facility).\n\n## Depends on\n- hotwax/ofbiz-oms-udm#390 (adds `ShopifyShop.realTimeInventoryPush` to the entity definition) — **merge that first**; the bridge reads the field.\n\n## Deferred (PR 2 — transfer fan-out)\n- Transfer shipment/receipt (`post#`/`receive#ShopifyTransferShipment`) still gate on `SHOPIFY_INV_SYNC` and currently hard-require exactly one shop; converting them to per-shop fan-out + per-shop shipment-id state and removing the `SHOPIFY_INV_SYNC` enum/seed are scoped to PR 2.\n- The reset-sequencing comment in `InventoryServices.xml` (`post#ShopifyInventoryReset`) is intentionally left for the in-flight inventory-reset echo-back work, which edits the same `post#ShopifyInventoryAdjustments` suppression lines — **expect a small merge reconciliation** there.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#279",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Remove SHOPIFY_INV_SYNC product-store setting seed/upgrade data",
    "labels": [],
    "type": "PR",
    "body": "## What\nRemoves the `SHOPIFY_INV_SYNC` product-store setting seed/upgrade data committed for this release:\n- `data/SOBOrderSyncData.xml` — drop the `SHOPIFY_INV_SYNC` `Enumeration` + the `STORE` `ProductStoreSetting` default.\n- `upgrade/UpcomingRelease/UpgradeData.xml` — drop the `Enumeration`.\n- `upgrade/UpcomingRelease/UpgradeSteps.md` — **deleted** (its only content was the `SHOPIFY_INV_SYNC` `ProductStoreSetting` step).\n\n## Why\nThe product-store-scoped `SHOPIFY_INV_SYNC` toggle is being replaced by the shop-level `ShopifyShop.realTimeInventoryPush` flag (hotwax/ofbiz-oms-udm#390 + #278).\n\n## Sequencing / impact\n- Consuming services tolerate the missing setting (absent ⇒ treated as off), so behavior stays off-by-default — no errors.\n- Recommend merging **after** #278 (which migrates the realtime-push + fulfillment paths off the setting).\n- Transfer shipment/receipt still read `SHOPIFY_INV_SYNC` until the transfer fan-out PR (PR 2); after this removal they default off and can't be re-enabled via the old setting until PR 2 migrates them to `realTimeInventoryPush`. Existing DBs keep their rows — this only affects fresh seed/upgrade.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#280",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Rename resetDateResourceId to resetDataResourceId (typo fix)",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nRenames `resetDateResourceId` → `resetDataResourceId` in the Shopify inventory reset import (`InventoryServices.xml`), matching the corrected field/parameter name in the companion hotwax-poorti PR. The value is a data-resource id (e.g. `SHOPIFY_INV_RESET`), not a date.\n\nRenamed at all three sites: the `import#ShopifyInventoryReset` in-param, the `<set>` that defaults it, and the key passed to poorti's `reset#ProductFacilityInventory`.\n\n## Log Work\n- Hours spent:\n\n## Issue Link\n- Closes #\n- (Follow-up to review feedback on PR #277.)\n\n## Dependency / deploy note\n⚠️ **Deploy together with hotwax-poorti #283** — https://github.com/hotwax/hotwax-poorti/pull/283 — which renames the `reset#ProductFacilityInventory` / `create#ExternalInventoryReset` parameter and the `ExternalInventoryReset` field. Since `resetDataResourceId` is a **required** parameter on the poorti service, deploying only one side would break the reset call. Merge/deploy both in lockstep.\n\nAlso touches the same lines as the echo-back PR #277; whichever merges second will need a trivial conflict resolution.\n\n## Release note\nAligned the Shopify inventory reset import with the corrected `resetDataResourceId` name. Behavior is otherwise unchanged.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#245",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Backport default carrier setting removal",
    "labels": [],
    "type": "PR",
    "body": "Refs #244\n\n## Business summary\nRemoves the Shopify bridge dependency on the retired `DEFAULT_CARRIER` ProductStoreSetting so order transformation no longer requires unsupported product-store configuration.\n\n## What changed\n- Removed the `DEFAULT_CARRIER` ProductStoreSetting lookup from Shopify order payload transformation.\n- Uses `_NA_` as the direct fallback carrier when no mapped carrier is found.\n- Updated configuration dependency documentation.\n\n## Migration and release notes\n- No bridge setting migration is required.\n- Ensure desired carrier mappings exist in `ShopifyShopCarrierShipment`; otherwise unmapped orders use `_NA_`.\n- The companion OMS PR deletes existing `DEFAULT_CARRIER` setting data.\n\n## Validation\n- `git diff --check HEAD~1 HEAD`\n- Targeted scan confirmed `DEFAULT_CARRIER` is absent from active bridge source/docs.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#281",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Transfer multi-shop fanout + shared realtime inventory push eligibility helper",
    "labels": [],
    "type": "PR",
    "body": "## What\n\nFans OMS transfer **shipment** and **receipt** events out to **every eligible Shopify shop independently**, replacing the single-shop, product-store-scoped transfer path. Builds on `feat/realtime-inventory-push` (the `ShopifyShop.realTimeInventoryPush` field), whose commit explicitly deferred the transfer migration + `SHOPIFY_INV_SYNC` removal to this PR.\n\n## Changes\n\n- **Shared eligibility helper** `find#EligibleRealtimeInventoryPushShops` (`ShopifyHelperServices`): keyed on the impacted facility — `realTimeInventoryPush == 'Y'`, facility + product mapped, write-capable (`SHOP_RW_ACCESS`) `SystemMessageRemote`. Ineligible shops are **skipped with a log, never errored**. Used by both the product-adjustment and transfer paths.\n- **`post#`/`receive#ShopifyTransferShipment` rewritten to fan out per shop.** Impacted facility comes from the event — post = origin/issuance facility, receive = the receipt `facilityId` — **no `orderHeader.productStoreId` lookup**. Receipt posts the transfer on demand per shop when the ship event never did.\n- **New entity `ShopifyTransferShipment`** (PK `shopId` + `shopifyInventoryShipmentId`) replaces the unqualified `SHPFY_INV_SHIPMENTS` `ShipmentAttribute` blob. Idempotency: posts by `(shipmentId, shopId, batchIndex)`; corrections by `(receiptId, shopId)` with `syncStatusId` `SHIPMENT_CREATED → RECEIVED` so an interrupted correction stays observable.\n- **Per-shop best-effort isolation**: each shop body is wrapped in `try/catch` + `finally { ec.message.clearErrors() }` (mirrors the existing `ShopifyOrderIntegrationSetupServices` idiom) so one shop's Shopify error neither aborts the fan-out nor rolls back the run. No force-new transaction; a proper per-shop retry queue is left as a `TODO`.\n- `post#ShopifyInventoryAdjustments` rewired onto the helper (behavior preserved) + same per-shop isolation.\n- **Removed** the now-unused product-store `SHOPIFY_INV_SYNC` enum/seed/upgrade data + defensive `UpgradeSQL` delete.\n\n## Non-goals (unchanged)\n\nInventory-reset echo-back prevention and fulfillment-to-Shopify sync are out of scope; the `create#ShopifyTransferOrder` test service is left as-is.\n\n## Verification\n\n- `xmllint` well-formedness on all changed files; `try`/`catch`/`finally` balanced; no remaining `SHOPIFY_INV_SYNC`/`SHPFY_INV_SHIPMENTS` references in service code.\n- 15-agent adversarial review (5 lenses × verify): 3 confirmed findings fixed (per-shop exception isolation, rollback-only cascade via `clearErrors`, correction `syncStatusId` observability), then a focused re-verify — **PASS**.\n- Not runtime-tested against a live Moqui instance (static + multi-agent review only).\n\n## Follow-up risks\n\n1. Hard-failure isolation has a ceiling without force-new tx — a nested call that marks the JTA tx rollback-only still can't be recovered; that's what the TODO per-shop retry queue should replace.\n2. `post#` eligibility is origin-only (issuance); a destination-only shop is handled by the receive correction path instead.\n3. Requires `oms`'s `feat/realtime-inventory-push` (the `realTimeInventoryPush` field) deployed alongside.\n4. `transferShipmentTypeId`/`syncStatusId` are plain id strings (matching existing history-entity convention), not seeded enums.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#262",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#171",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Add Shopify inventory delta sync services",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- add Shopify inventory delta sync service updates for TO, inventory reset/cycle count, and fulfillment flows\r\n- add live-test plans, mapping notes, gap analysis, and evidence docs\r\n\r\nCloses #170\r\nClosed #183 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "170",
        "body": "Track the Shopify inventory delta sync service changes and live-test documentation for transfer orders, cycle count, external reset, and fulfillment flows.\n\nBranches:\n- hotwax-shopify-oms-bridge: shopify-inventory-delta-sync\n- oms-test: shopify-inventory-delta-sync-tests",
        "labels": [],
        "files": [],
        "title": "Shopify inventory delta sync services"
      },
      {
        "type": "Issue",
        "number": "183",
        "body": "When a transfer order is misshipped, over-received, or under-received, we need to evaluate whether these scenarios are supported within Shopify’s inventory transfer capabilities. This includes understanding how Shopify represents such discrepancies and whether corresponding inventory adjustments or events can be recorded through its APIs.\n\nBased on this analysis, we should ensure that all relevant inventory changes resulting from these scenarios are accurately synchronized with Shopify. ",
        "labels": [],
        "files": [],
        "title": "Handling Misshipped, Over-Received, and Under-Received Transfer Orders with Shopify Inventory Sync"
      }
    ],
    "linkedIssueIds": [
      "170",
      "183"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#282",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#263",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Consume shared PhoneUtils from maarg-util and clean up local dependency",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Removed com.googlecode.libphonenumber:libphonenumber from build.gradle\r\n- Declared dependency on maarg-util in component.xml\r\n- Replaced direct libphonenumber usage in prepareTransformedShopifyOrderPayload.groovy with PhoneUtils.parsePhoneNumber helper call\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-maarg-util/issues/154\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#286",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Changed phone utility location from PhoneUtils to MaargUtil",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Change phone utility location from PhoneUtils to MaargUtil\r\n\r\n## Log Work\r\n- Hours spent:1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/285\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#283",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Fixed: updating return item price during return completion",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- During return completion, the return item's price includes the discounts, and discount rows were being created in `ReturnAdjustment` too.\r\n\r\n## Log Work\r\n- Hours spent: 1h\r\n\r\n## Issue\r\n#284 ",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "284",
        "body": "- When an in-progress return is completed, the return price includes the discount amount, and discount rows are being created in the `ReturnAdjustment` also, causing double deduction of dicsounts.",
        "labels": [],
        "files": [],
        "title": "Fix return price update during return completion"
      }
    ],
    "linkedIssueIds": [
      "284"
    ]
  },
  {
    "id": "hotwax/hotwax-shopify-oms-bridge#287",
    "repo": "hotwax/hotwax-shopify-oms-bridge",
    "title": "Fix typo in InventoryItemDetail service call",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\nThis PR fixes a typo in `ShopifyOrderServices.xml`.\r\n\r\nThe service call to `InventoryItemDetail` was using `availableToPromise` instead of `availableToPromiseDiff`. Since the entity only has `availableToPromiseDiff`, the field was changed to the correct name.\r\n\r\n## Log Work\r\n- Hours spent: 0.5\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#574",
    "repo": "hotwax/hotwax-oms",
    "title": "Improvement: Implemented support for displaying payment-related order terms on the View Order page. Also implemented functionality to create and remove order terms directly from the View Order page.",
    "labels": [],
    "type": "PR",
    "body": "Implemented support for displaying payment-related order terms on the View Order page. Also implemented functionality to create and remove order terms directly from the View Order page.\r\n\r\nChangelog: Changed\r\n\r\n## Log Work\r\n- Hours spent: 2\r\n\r\n## Issue Link\r\n- Closes # https://github.com/hotwax/oms/issues/506\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#584",
    "repo": "hotwax/hotwax-oms",
    "title": "added the parameter of document type in tax services",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent: 1h\r\n\r\n## Issue Link\r\n- Closes https://hotwax-team.atlassian.net/browse/GOR-272\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#525",
    "repo": "hotwax/hotwax-oms",
    "title": "Used PooledRequestFactory while communicating with shipping gateway, This will create one HttpClient and keep it alive for the whole JVM. Jetty will automatically pool per destination, so UPS/FedEx connections won’t mix.",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\nUsed PooledRequestFactory while communicating with the shipping gateway. This will create one HttpClient and keep it alive for the whole JVM. Jetty will automatically pool per destination, so UPS/FedEx connections won’t mix.\r\n\r\nChangelog: Changed\r\n\r\n## Log Work\r\n- Hours spent:\r\n2\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/maarg-shipping-aggregator/issues/9\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#598",
    "repo": "hotwax/hotwax-oms",
    "title": "Added Permission to users to update order shipment method from fulfil…",
    "labels": [],
    "type": "PR",
    "body": "…lment app\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#599",
    "repo": "hotwax/hotwax-oms",
    "title": "Removed areacode from company phone number as we are appending it on …",
    "labels": [],
    "type": "PR",
    "body": "…template\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#603",
    "repo": "hotwax/hotwax-oms",
    "title": "Change parentTypeId field type to id-ne in EnumerationType",
    "labels": [],
    "type": "PR",
    "body": "This PR fixes a data truncation error when loading enumeration data. \n\nIn applications/hwmapps/entitydef/entitymodel.xml, the type of parentTypeId in EnumerationType was defined as id (VARCHAR(20)). Since enumTypeId is defined as id-ne (VARCHAR(40)), references with longer IDs (like RESOLVE_ONHOLD_ORDER) caused a database truncation error. \n\nWe updated parentTypeId to id-ne to match the referenced field type.\n\nFixes #602",
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
    "linkedIssueIds": [
      "602"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#612",
    "repo": "hotwax/hotwax-oms",
    "title": "Updated create product index service to handle the case when isVarian…",
    "labels": [],
    "type": "PR",
    "body": "…t and isVirtual is empty. Considered empty value as N.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#613",
    "repo": "hotwax/hotwax-oms",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#588",
    "repo": "hotwax/hotwax-oms",
    "title": "[codex] Hide MDM permissions from Users app categories",
    "labels": [],
    "type": "PR",
    "body": "## Business summary\nThis PR reduces permission-screen noise for the Users app demo by hiding MDM import/export permissions from the visible permission category list. Users should no longer see the large block of MDM-specific permissions when editing role permissions.\n\nCloses #587\n\n## What changed\n- Moved the MDM-related `SecurityGroupPermission` category memberships from `SGC_ADMIN` to `SGC_HIDDEN` in `CommerceSecurityGroupsData.xml`.\n- Preserved actual permission grants for groups such as `COMMERCE_SUPER` and `MERCHANDISE_MGR`.\n\n## Notes\nThe legacy OFBiz MDM pages still enforce MDM permissions. This PR only changes category visibility in the Users app; it does not remove access checks or widen access.\n\n## Validation\n- Parsed `applications/hwmapps/data/commerce/CommerceSecurityGroupsData.xml` with Python XML parser.\n- Verified all 90 SGC-categorized `MDM_*` rows now resolve to `SGC_HIDDEN`.\n- Ran `git diff --check`.\n\n## Verification gap\nThe local `moqui_quality_audit.py` helper referenced by the Moqui security workflow was not present in this checkout or nearby GitHub checkouts, so that audit could not be run.\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "587",
        "body": "## Business summary\nThe Users app permission screen is overloaded by MDM import/export permissions that are not useful for the demo flow. These permissions should be hidden from the visible permission category list while preserving existing permission grants and OFBiz enforcement.\n\n## Requirements\n- Move MDM-related permission category memberships from Admin to Hidden.\n- Preserve actual security group grants for existing users and groups.\n- Avoid widening access to MDM pages or services.\n\n## Validation\n- XML seed data parses successfully.\n- All SGC-categorized MDM permissions resolve to SGC_HIDDEN.\n- No whitespace errors in the diff.",
        "labels": [],
        "files": [],
        "title": "Hide MDM permissions from Users app categories"
      }
    ],
    "linkedIssueIds": [
      "587"
    ]
  },
  {
    "id": "hotwax/hotwax-oms#592",
    "repo": "hotwax/hotwax-oms",
    "title": "Backport OMS product-store setting retirement",
    "labels": [],
    "type": "PR",
    "body": "Refs #590\n\n## Business summary\nRetires obsolete product-store settings from OMS seed/runtime logic and moves fulfillment action control to permissions so product-store setup only contains supported business behavior.\n\n## What changed\n- Removed active enum/seed rows for retired ProductStoreSettings.\n- Added `FF_SHIP_NOW` permission and default grants.\n- Added `upgrade/v8.4.0/UpgradeSQL.sql` to delete existing obsolete ProductStoreSetting and Enumeration rows.\n- Added `upgrade/v8.4.0/UpgradeSteps.md` with operator migration instructions.\n- Made Shopify cancellation rejections always suppress rejection-style customer notification behavior.\n- Removed runtime dependencies on `DEFAULT_CARRIER`, `PCKGING_BOX_ALGO`, and `PKG_SLIP`.\n\n## Migration and release notes\n- Load `UpgradeData.xml`, then run `UpgradeSQL.sql`.\n- Review security groups: grant `FF_SHIP_NOW` for Ship Now access and `SF_UNLOCK_ORDER` for Unpack access.\n- Do not remove the `INV_CNT_VIEW_QOH` permission; only the ProductStoreSetting is retired.\n- Shopify cancellation rejections no longer need `DIS_REJ_NOTI_ON_CNCL`; rejection-style notification suppression is now default behavior.\n\n## Validation\n- `git diff --check HEAD~1 HEAD`\n- `xmllint --noout` on changed OMS XML files\n- Targeted scan confirmed retired settings are absent from active OMS application files, except migration SQL and retained `INV_CNT_VIEW_QOH` permission records.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#620",
    "repo": "hotwax/hotwax-oms",
    "title": "Fixed: unknown orderHeader symbol to get product store id to get product store setting to create cycle count for rejected items",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Fixed\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#586",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix: Format phone numbers in E.164 format before sending to Shopify",
    "labels": [
      "bug"
    ],
    "type": "PR",
    "body": "# Summary\r\n\r\n## Issue Link\r\n* #580 \r\n\r\n## Root Cause\r\n\r\nPhone numbers were being sent to Shopify as a concatenated string of country code, area code, and contact number without a leading `+`. This caused validation failures for certain international phone numbers.\r\n\r\n## Problem\r\n\r\nShopify returned `422 phone is invalid` errors when the phone number did not meet Shopify's expected international format requirements.\r\n\r\n## Solution\r\n\r\nUpdated phone number construction to prepend `+` to the country code, ensuring phone numbers are sent in E.164 format.\r\n\r\n**Before**\r\n\r\n```text\r\n50685491141\r\n```\r\n\r\n**After**\r\n\r\n```text\r\n+50685491141\r\n```\r\n\r\n## Impact\r\n\r\n* Improves compatibility with Shopify phone number validation.\r\n* Prevents `422 phone is invalid` errors caused by improperly formatted international phone numbers.\r\n* Ensures phone numbers are consistently sent in a standard international format.\r\n\r\n## Testing\r\n\r\n* Verified order updates succeed with phone numbers formatted in E.164 format.\r\n* Verified no regression for existing US phone numbers.\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#554",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix-544: Excluded SERVICE Product Type from find products query on the Find Product Page.",
    "labels": [
      "bug"
    ],
    "type": "PR",
    "body": "Changelog: Fixed\r\n\r\n#### Resolves issue\r\n- https://github.com/hotwax/hotwax-oms/issues/544\r\n\r\n## Summary\r\nOn the `Find Product` page, enabling `Include Parent` caused `SERVICE` products to appear in search results, even though they are not parent or variant products.\r\n\r\nExample:\r\n- `productId`: `JOB_ADD_BACKORD_VRT`\r\n- `productTypeId`: `SERVICE`\r\n\r\n## Cause\r\nWhen `Include Parent` is checked, the filter changes from `ff_isVariant=true` to `ff_isVariant=*`, which includes all products with an `isVariant` value.\r\n\r\nThis caused `SERVICE` products to appear along with variant and parent products.\r\n\r\n## Fix\r\nAdded a page-level filter on the merchandising `Find Product` screen:\r\n\r\n- `ff_negate_productTypeId = SERVICE`\r\n\r\nThis keeps existing `Include Parent` behavior unchanged while excluding `SERVICE` products.\r\n\r\n## Verification Steps\r\n1. Open the `Find Product` page.\r\n2. Search with `Include Parent` unchecked and confirm only variant products appear.\r\n3. Enable `Include Parent` and confirm parent products appear.\r\n4. Confirm `SERVICE` products (like `JOB_*`) do not appear.\r\n5. Search directly for a known `SERVICE` product and confirm it is excluded.\r\n\r\n## Log Work\r\n- Hours spent: 2",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#619",
    "repo": "hotwax/hotwax-oms",
    "title": "Fix:684- Removed for Shopify access tokens and secrets in view and edit shopify shop configuration screens.",
    "labels": [
      "enhancement"
    ],
    "type": "PR",
    "body": "\r\nChangelog: Fixed\r\n\r\n## Issue Link\r\n- Closes https://github.com/hotwax/oms/issues/684\r\n\r\n## Summary\r\nRemoved Shopify access token and shared secret from the Shopify Shop configuration screens in OMS to prevent sensitive credentials from being exposed in the UI.\r\n\r\n### Changes\r\n* `ShopifyShopConfig.ftl` (view): Removed the `Access Token` and `Shared Secret` columns from the Shopify configuration list table. The `Client ID`, `Access Scope`, and all other non-sensitive fields remain visible.\r\n* `EditShopifyShopConfig.ftl` (edit): Removed the `accessToken`, `sharedSecret`, and `oldSharedSecret` input fields from the edit form. The `Access Scope` dropdown and `Client ID` field remain editable.\r\n* `CreateShopifyShop.ftl` (create): No changes — credential fields are required during initial shop setup and remain as-is.\r\n\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-oms#600",
    "repo": "hotwax/hotwax-oms",
    "title": "Added support to approve sales order only if the initial transaction has been successfully created in OMS",
    "labels": [],
    "type": "PR",
    "body": "Changelog: Changed\r\n\r\n## Summary\r\n- Added support to apporve sales order only if the initial transaction has been successfully created in OMS\r\n\r\n## Log Work\r\n- Hours spent:2\r\n\r\n## Issue Link\r\n- Closes #400 \r\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "400",
        "body": "### Description\nOrders whose payment details failed to be fetched (or are still missing/null) are currently being picked up and sent in the order brokering feed to WMS.\n\nThis should **not** happen — only orders with successfully fetched and valid payment information should be eligible for brokering.\n\n### Current Behavior\n- Order proceeds to brokering feed → WMS even when `payment_details` is missing / null / fetch failed\n- Causes invalid / incomplete orders to be sent downstream\n\n### Expected Behavior\n- Orders missing payment details (or with failed payment fetch) must be **excluded** from the WMS brokering feed\n- Only orders with confirmed/complete payment data should be brokered\n\n### Acceptance Criteria\n- [ ] No order without fetched payment details appears in the WMS brokering feed\n- [ ] Existing filter/validation logic is updated (or new guard added) before feed generation\n- [ ] Add log entry when an order is skipped due to missing payment data (with order ID)\n\n### Severity\nMedium-High (affects downstream WMS processing & inventory accuracy)\n\n### Steps to Reproduce\n1. Create/test an order where payment fetch fails or returns no data\n2. Trigger brokering feed generation\n3. Observe order still appears in feed sent to WMS",
        "labels": [],
        "files": [],
        "title": "Orders with missing/unfetched payment details are incorrectly included in WMS brokering feed"
      }
    ],
    "linkedIssueIds": [
      "400"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#265",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added SECA to trigger an email on shipment completion and order completion",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Added a single seca over ship#Shipment service and handled the cases for order completion, shipment completion and Bopis order shipment.\r\n- Handled the scenario of split shipment in an order.\r\n\r\nRelated PR: github.com/hotwax/oms/pull/620\r\n\r\nCloses: #https://github.com/hotwax/hotwax-oms/issues/583",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#268",
    "repo": "hotwax/hotwax-poorti",
    "title": "Improved: upgrade data for workeffort status type",
    "labels": [],
    "type": "PR",
    "body": "Updated the data as in the service for task create we have check on WORK_EFFORT_STATUS",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#240",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: Data Documents for stores and pickers performance stats",
    "labels": [],
    "type": "PR",
    "body": "Related Issue: https://github.com/hotwax/hotwax-poorti/issues/252\r\n\r\nChangelog: Added",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#238",
    "repo": "hotwax/hotwax-poorti",
    "title": "Persist external inventory reset metadata correctly",
    "labels": [],
    "type": "PR",
    "body": "## Business summary\nThis PR makes external inventory resets auditable while keeping inventory mutation routed through `InventoryItemDetail`. The reset flow now has a clear split: one service resolves product/facility inventory and computes the delta, while `create#ExternalInventoryReset` records the reset event and submits the supplied diff to inventory detail.\n\n## Service architecture\n- `reset#ProductFacilityInventory` is the orchestration service. It accepts product/facility identifiers plus the expected external inventory level, resolves the OMS `facilityId`, `productId`, and `inventoryItemId`, reads the current inventory totals, computes `quantityOnHandDiff` and `availableToPromiseDiff`, then calls `create#ExternalInventoryReset` with those resolved facts.\n- `create#ExternalInventoryReset` is the event logging service. It requires `facilityId`, `productId`, and `inventoryItemId`, relies on entity foreign keys for validity, persists the provided reset facts, and creates an `InventoryItemDetail` using the provided diff values.\n- `ExternalInventoryReset` now stores both the external/current inventory facts and the computed diffs: `availableToPromiseDiff` and `quantityOnHandDiff`.\n\n## Scope\n- Add `availableToPromiseDiff` and `quantityOnHandDiff` to `ExternalInventoryReset`.\n- Keep diff computation in `reset#ProductFacilityInventory`.\n- Keep `create#ExternalInventoryReset` simple: no id resolution, no inventory comparison, no reason validation, no external quantity gating, and no zero-diff suppression.\n- Link the generated `InventoryItemDetail` back to the reset event with `resetItemId`.\n\nCloses #237\n",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "237",
        "body": "## Summary\nPersist external inventory reset details in the shared external reset flow so imported NetSuite resets store the right audit data on `InventoryItemDetail`.\n\n## Scope\n- allow `create#ExternalInventoryReset` to accept `reason` and `description`\n- default `reason` to `VAR_EXT_RESET`\n- require exactly one of `externalATP` or `externalQOH`\n- copy `ExternalInventoryReset.resetItemId` to `InventoryItemDetail.resetItemId`\n- write `InventoryItemDetail.description` from the incoming description value\n- validate the reason against `IID_REASON`\n\n## Notes\n- this does not add `InventoryItemVariance` handling\n- the service remains facility level and uses the facility inventory item record",
        "labels": [],
        "files": [],
        "title": "Persist external inventory reset metadata for NetSuite imports"
      }
    ],
    "linkedIssueIds": [
      "237"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#142",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added the missing data for ApiCommunicationEventOrder",
    "labels": [],
    "type": "PR",
    "body": "This PR contains missing data used in order-to-invoice screen in the fulfillment app.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#271",
    "repo": "hotwax/hotwax-poorti",
    "title": "Fix: Corrected pick profile enumeration definitions and type IDs",
    "labels": [],
    "type": "PR",
    "body": "Corrected incorrect enumeration type IDs for sort parameters and cleaned up duplicate filter parameter enums in Pick Profile seed data and upgrade files. Also updated the service reference to use the corrected batch size enum.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#274",
    "repo": "hotwax/hotwax-poorti",
    "title": "Implement pick profile REST APIs for fulfillment order sync",
    "labels": [],
    "type": "PR",
    "body": "This PR adds the backend support for the fulfillment order sync settings UI\r\n\r\n### Changes:\r\n- Added Pick Profile REST endpoints in poorti.rest.xml to get, update, and delete conditions/filters using the master-detail pattern.\r\n- Updated PickProfileEntities.xml to define the nested relationship from PickProfileGroup to PickProfile.\r\n- Added new sort parameter enums (Customer Classification, Order Priority, and Rush Order) in TypeData.xml and UpgradeData.xml.\r\n\r\n---\r\n- Issue: https://github.com/hotwax/oms/issues/643",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#279",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added: Store Performance and crediting dashboards data documents in upgrade data",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#263",
    "repo": "hotwax/hotwax-poorti",
    "title": "June 15",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#259",
    "repo": "hotwax/hotwax-poorti",
    "title": "Added address validation API service for Fedex in Unigate.",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#260",
    "repo": "hotwax/hotwax-poorti",
    "title": "Return label fedex",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#262",
    "repo": "hotwax/hotwax-poorti",
    "title": "Seed cycle count WorkEffort type",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n- Add `CYCLE_COUNT_RUN` to Poorti baseline `data/TypeData.xml` under the existing `CYCLE_COUNT` enumeration type.\n- This matches the row already present in `upgrade/v1.6.0/UpgradeData.xml` and makes fresh ext-seed loads include the WorkEffort type expected by cycle count services.\n\n## Local verification\n- Confirmed `CYCLE_COUNT_RUN` was absent locally before the fix.\n- Removed any local `CYCLE_COUNT_RUN` row before verification.\n- Ran local Moqui load with `types=ext-seed` using a separate Bitronix transaction log to avoid the running dev server lock.\n- Verified `ENUMERATION` contains `CYCLE_COUNT_RUN / CYCLE_COUNT` after load.\n- Ran `xmllint --noout data/TypeData.xml`.\n- Ran `git diff --check`.\n\nFixes #261",
    "linkedIssues": [
      {
        "type": "Issue",
        "number": "261",
        "body": "## Problem\nCycle count services create and query WorkEffort records with `workEffortTypeId = CYCLE_COUNT_RUN`, but `CYCLE_COUNT_RUN` is not present in the baseline Poorti `data/TypeData.xml` seed file.\n\nIt currently exists only in `upgrade/v1.6.0/UpgradeData.xml`:\n\n```xml\n<moqui.basic.Enumeration enumId=\"CYCLE_COUNT_RUN\" description=\"Cycle Count\" enumTypeId=\"CYCLE_COUNT\"/>\n```\n\nA normal seed/ext-seed load from current component data can therefore leave a local/dev database without this enum while the service code expects it.\n\n## Evidence\n- `data/TypeData.xml` defines `CYCLE_COUNT` and `REJ_ITEM_COUNT`, then defines cycle count purpose/status data, but does not include `CYCLE_COUNT_RUN`.\n- `service/co/hotwax/cycleCount/InventoryCountServices.xml` uses `workEffortTypeId: 'CYCLE_COUNT_RUN'` when creating cycle count WorkEffort records and filters by the same value.\n- Local DB check after load showed `CYCLE_COUNT_RUN` missing from `moqui.basic.Enumeration`.\n\n## Suggested fix\nAdd `CYCLE_COUNT_RUN` to `data/TypeData.xml` under the existing `CYCLE_COUNT` enumeration type, matching the upgrade data row.\n\n## Acceptance criteria\n- Fresh seed/ext-seed load includes `CYCLE_COUNT_RUN` in `moqui.basic.Enumeration`.\n- Cycle count WorkEffort create/query paths have the enum value required by the WorkEffort enum FK.",
        "labels": [],
        "files": [],
        "title": "Seed CYCLE_COUNT_RUN in cycle count TypeData"
      }
    ],
    "linkedIssueIds": [
      "261"
    ]
  },
  {
    "id": "hotwax/hotwax-poorti#280",
    "repo": "hotwax/hotwax-poorti",
    "title": "Removed: Order Facility Change Data Document since it has already been committed to oms component",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#282",
    "repo": "hotwax/hotwax-poorti",
    "title": "Record origin SystemMessageRemote on ExternalInventoryReset (reset echo-back prevention)",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nAdds **origin metadata** to the external inventory reset flow so a reset records *which* remote produced it. This lets downstream inventory sync avoid echoing a reset back to the same remote it came from.\n\n**Business context:** When external inventory (e.g. a Shopify store) is reset into the OMS, the resulting delta must not be pushed back to the same store it originated from (\"echo-back\"), while still being free to propagate to other connected stores. Today that is handled coarsely — by requiring the real-time inventory sync flag (`SHOPIFY_INV_SYNC`) to be **disabled** while the reset runs. This change gives the reset native origin metadata so echo-back can be prevented **precisely, per-remote**, independent of any real-time inventory sync setting.\n\n**Changes (schema + service):**\n- `ExternalInventoryReset` gains an optional `originSystemMessageRemoteId` field, plus a `one-nofk` relationship (`originSystemMessageRemote`) to `moqui.service.message.SystemMessageRemote`. `one-nofk` is used deliberately: the OFBiz-grouped `ExternalInventoryReset` and the framework `moqui.service.message` entity may live in different datasource groups, so a hard FK is not appropriate.\n- `reset#ProductFacilityInventory` and `create#ExternalInventoryReset` accept the optional `originSystemMessageRemoteId` and persist it onto the reset row.\n- No REST change required: `externalInventoryResets` is exposed via entity auto-CRUD, so the new column is automatically available.\n\n**Compatibility:** The new parameter is optional — existing / non-Shopify reset callers are unaffected (the column persists as `null`). `ExternalInventoryReset` is new in this release, so no migration step is needed; the nullable column is created with the entity definition.\n\n## Log Work\n- Hours spent:\n\n## Base branch\nTargets `main`. The `JUNE-15` line has already merged into `main` (PR #263) and the branch was deleted, so this builds on `main`. Only the two files in this PR are changed; no other `main` history is affected.\n\n## Issue Link\n- Closes #\n- (No separate tracked issue; part of the June-15 Shopify inventory reset work.)\n\n## Dependency\nThe companion PR in **`hotwax-shopify-oms-bridge`** (populates `originSystemMessageRemoteId` for Shopify resets and skips the origin remote on the outbound push) **depends on this PR's `originSystemMessageRemoteId` field**. This Poorti PR should merge **first**.\n\n## Release note\nExternal inventory resets now record the originating system message remote. Imported reset deltas are no longer echoed back to their source remote during inventory sync, removing the need to disable real-time inventory sync while a reset runs.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#283",
    "repo": "hotwax/hotwax-poorti",
    "title": "Rename ExternalInventoryReset.resetDateResourceId to resetDataResourceId (typo fix)",
    "labels": [],
    "type": "PR",
    "body": "## Summary\n\nFixes a misspelled field/parameter name on the external inventory reset flow: **`resetDateResourceId` → `resetDataResourceId`**.\n\nThe value identifies the reset **data resource** (e.g. `SHOPIFY_INV_RESET` / the import id), not a date — so `Date` was a typo for `Data`. Renamed consistently:\n- `ExternalInventoryReset.resetDateResourceId` entity field → `resetDataResourceId`\n- `reset#ProductFacilityInventory` and `create#ExternalInventoryReset` in-parameters, and the values threaded between them\n\nNo migration is required: `ExternalInventoryReset` is new in this release, so the column is created fresh with the corrected name.\n\n## Log Work\n- Hours spent:\n\n## Issue Link\n- Closes #\n- (Follow-up to review feedback on PR #282.)\n\n## Dependency / deploy note\n⚠️ **Coordinated rename — deploy together.** The companion bridge PR renames the same parameter where it calls `reset#ProductFacilityInventory`. Because `resetDataResourceId` is a **required** parameter, the two sides must be merged/deployed **together**; deploying only one side would break the reset call (the old `resetDateResourceId` key would no longer bind to the renamed required param).\n\nAlso note this touches the same lines as the echo-back PR #282; whichever merges second will need a trivial conflict resolution.\n\n## Release note\nCorrected the misspelled `resetDateResourceId` field/parameter to `resetDataResourceId` on the external inventory reset flow. Behavior is otherwise unchanged.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-poorti#287",
    "repo": "hotwax/hotwax-poorti",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#27",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#28",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "title": "Remove duplicate hotwax.user demo data (consolidated into oms)",
    "labels": [],
    "type": "PR",
    "body": "### Problem\n`data/UserData.xml` only re-declared the `moqui.security.UserAccount` for `hotwax.user` (`HOTWAX_USER`) plus its `ADMIN` / `ADMIN_ADV` group memberships — a **duplicate** of the comprehensive definition in `oms/data/HCUserData.xml` (which also defines the Party, Person, ContactMech, and OFBiz UserLogin).\n\nThe two records conflicted: this file set `currentPassword` to the SHA-256 hash of `hotwax@786` **without** `passwordHashType`, while `HCUserData.xml` set `passwordHashType=\"SHA\"` (SHA-1). On load the merged `UserAccount` ended up with a SHA-256 hash but `passwordHashType=SHA`, so login failed (SHA-1 of the entered password never matches a SHA-256 stored value).\n\n### Change\nDelete `data/UserData.xml`. `hotwax.user` is now defined in exactly one place — `oms/data/HCUserData.xml` — which the paired oms PR retypes to `demo` and gives a single consistent `UserAccount` (password `hotwax@786`, default SHA-256).\n\n### Paired change\nhotwax/oms PR: *\"Consolidate hotwax.user as demo data; fix UserAccount password inconsistency\"*. **Merge both together** so the user is defined in exactly one place.\n\n### Scope\nSingle file deletion, data-only. The full `hotwax.user` setup (party/contact/login/account + group memberships) remains in `oms/data/HCUserData.xml`.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-ofbiz-oms-usl#29",
    "repo": "hotwax/hotwax-ofbiz-oms-usl",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#243",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.\r\n\r\n## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#245",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Feat: Implemented netsuite configuration screen to setup M2M connection for RestApi. Also added support to verify credentails and delete it from UI. (244-implement-netsuite-configuration-screen)",
    "labels": [],
    "type": "PR",
    "body": "…\r\n\r\n## Summary\r\n- Implemented NetSuite configuration screen to set up M2M connection for RestApi. Also added support to verify and delete credentials in the UI. (244-implement-netsuite-configuration-screen)\r\n\r\n## Log Work\r\n- Hours spent: 4h\r\n\r\n## Issue Link\r\n- [Closes #](https://github.com/hotwax/mantle-netsuite-connector/issues/244)\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#246",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Fix the productCategoryId in the \"GEN_TO_ITEM_FD\" product data",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#248",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Describe what was done\r\n\r\n## Log Work\r\n- Hours spent:\r\n\r\n## Issue Link\r\n- Closes #\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#247",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Use shared PhoneUtils for phone validation and formatting",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Removed local com.googlecode.libphonenumber:libphonenumber dependency from build.gradle\r\n- Added dependency on maarg-util in component.xml\r\n- Deleted the local co.hotwax.ns.util.PhoneValidationUtil utility class\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-maarg-util/issues/154\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/mantle-netsuite-connector#249",
    "repo": "hotwax/mantle-netsuite-connector",
    "title": "Changed phone utility location from PhoneUtils to MaargUtil",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n- Change phone utility location from PhoneUtils to MaargUtil\r\n\r\n## Log Work\r\n- Hours spent: 1\r\n\r\n## Issue Link\r\n- Closes #https://github.com/hotwax/hotwax-shopify-oms-bridge/issues/285\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-unigate#78",
    "repo": "hotwax/hotwax-unigate",
    "title": "Klaviyo setup wizard",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-unigate#88",
    "repo": "hotwax/hotwax-unigate",
    "title": "Upgrade to Java 21",
    "labels": [],
    "type": "PR",
    "body": "- Refactor copyDependencies gradle task using modern tasks.register() API, which \r\n         - From: Legacy doLast task syntax with deprecated `project(':framework').jar.archivePath`\r\n         - To: Modern `tasks.register()` API with flatMap for accessing artifact files.\r\n- Migrate servlet imports from javax.servlet to jakarta.servlet\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-unigate#89",
    "repo": "hotwax/hotwax-unigate",
    "title": "Revert \"Upgrade to Java 21\"",
    "labels": [],
    "type": "PR",
    "body": "Reverts hotwax/hotwax-unigate#88\r\n\r\n",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-unigate#84",
    "repo": "hotwax/hotwax-unigate",
    "title": "Removed outdated services and view entities",
    "labels": [],
    "type": "PR",
    "body": "Removed createShippingGatewayAuth and createCommGatewayAuth services as they were replaced by entity autos.\r\nRemoved unused view entities, ShippingGatewayAuthConfig and CommGatewayAuthConfig ",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/hotwax-unigate#83",
    "repo": "hotwax/hotwax-unigate",
    "title": "Unigate improvements",
    "labels": [],
    "type": "PR",
    "body": "## Summary\r\n\r\n- Updated the cache expiration time for the FedEx access token.\r\n- Fixed the Gateway Auth input forms to correctly display values from the corresponding entities.\r\n- Fixed the Ometeria email template to correctly pass the default store operational hours.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/OrderRouting#119",
    "repo": "hotwax/OrderRouting",
    "title": "Refactor copyDependencies task to use Gradle Copy task API",
    "labels": [],
    "type": "PR",
    "body": "Replace the legacy copyDependencies task implementation with a typed\r\n\r\nCopy task registered through the Gradle task configuration API. Changes:\r\n- Convert copyDependencies from a doLast/copy block to a Copy task.\r\n- Register the task using tasks.register() for improved Gradle compatibility.\r\n- Replace usage of the deprecated framework jar archivePath with the jar task archiveFile output.\r\n- Preserve existing behavior of copying runtime dependencies while excluding framework runtime dependencies and the framework jar.\r\n\r\nThis aligns the build script with modern Gradle APIs and improves compatibility with newer Gradle versions.",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/OrderRouting#120",
    "repo": "hotwax/OrderRouting",
    "title": "Only formatting, no functional change",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/OrderRouting#121",
    "repo": "hotwax/OrderRouting",
    "title": "Updated inventory sql to check if proudct does not has invenoty at lo…",
    "labels": [],
    "type": "PR",
    "body": "…cation but thier substibute proudct has inventory, item will be brokered to the desired location",
    "linkedIssues": [],
    "linkedIssueIds": []
  },
  {
    "id": "hotwax/OrderRouting#122",
    "repo": "hotwax/OrderRouting",
    "title": "Renamed data files to load with sequence of readers",
    "labels": [],
    "type": "PR",
    "body": "",
    "linkedIssues": [],
    "linkedIssueIds": []
  }
]

Output ONLY a JSON object in this format:
{
  "repoLogicalNames": { "owner/repo": "Logical Name" },
  "clusters": [ { "name": "Cluster Name", "reason": "...", "itemIds": ["id", ...] } ],
  "noiseItemIds": ["id", ...],
  "needClarificationItemIds": ["id", ...]
}
