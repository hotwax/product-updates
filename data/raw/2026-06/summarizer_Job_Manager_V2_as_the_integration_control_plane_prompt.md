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

Cluster Description: Items cited in the current 2026-06 release note section "Job Manager V2 as the integration control plane".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-maarg-util#115",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "Issue",
    "number": "115",
    "title": "feat: expose missing DataManager REST endpoints in admin.rest.xml",
    "labels": [
      "enhancement"
    ],
    "body": "## Problem\n\nThe Company PWA MDM Management feature requires full CRUD on `DataManagerConfig` and\nthe ability to delete `DataManagerLog` entries. Three REST endpoints are currently missing\nfrom `admin.rest.xml` in the `maarg-util` component.\n\n## Changes Required\n\nIn the existing `<resource name=\"dataManager\">` block in `admin.rest.xml`:\n\n```xml\n<!-- 1. Create config — top-level POST on <resource name=\"dataManager\"> -->\n<method type=\"post\">\n    <entity name=\"co.hotwax.datamanager.DataManagerConfig\" operation=\"create\"/>\n</method>\n\n<!-- 2. Update config — inside the existing <id name=\"configId\"> block -->\n<method type=\"put\">\n    <entity name=\"co.hotwax.datamanager.DataManagerConfig\" operation=\"update\"/>\n</method>\n\n<!-- 3. Delete log — inside the existing <id name=\"logId\"> block under <resource name=\"logs\"> -->\n<method type=\"delete\">\n    <service name=\"co.hotwax.util.UtilityServices.remove#DataManagerLog\"/>\n</method>\n```\n\nThe `remove#DataManagerLog` service already exists in `UtilityServices.xml` — this is just exposing it via REST.\n\n## Why Needed\n\n- `POST /dataManager` — required for Add Config in Company PWA\n- `PUT /dataManager/{configId}` — required for Edit Config in Company PWA\n- `DELETE /dataManager/logs/{logId}` — required for log cleanup\n\n## Prerequisite for\n\nhotwax/company MDM Management feature",
    "files": [],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#116",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "116",
    "title": "feat: add create, update config and delete log REST endpoints (#115)",
    "labels": [],
    "body": "## What this adds\n\nThree new REST endpoints on the existing \\`admin/dataManager\\` resource in \\`admin.rest.xml\\`:\n\n| Method | Endpoint | Action |\n|--------|----------|--------|\n| POST | \\`/admin/dataManager\\` | Create a new \\`DataManagerConfig\\` record |\n| PUT | \\`/admin/dataManager/:configId\\` | Update an existing \\`DataManagerConfig\\` record |\n| DELETE | \\`/admin/dataManager\\` | Delete a \\`DataManagerLog\\` (calls \\`remove#DataManagerLog\\` — cascades to parameters, content files, and content records) |\n\n## Context / why this PR exists\n\nWe originally built these endpoints to support a config management UI in the Company PWA (create/edit configs). That PWA work was subsequently reverted — job-manager already has a more complete MDM import workflow.\n\n**Assigning to @Banibrata-Manna** to evaluate whether these endpoints are useful for job-manager:\n\n- `POST` create config + `PUT` update config — could support an admin UI for managing \\`DataManagerConfig\\` records directly from job-manager (currently configs are only added via seed data)\n- `DELETE` log — could enable a \"delete log\" action on the File History / File Detail pages in job-manager (currently only cancel is supported)\n\nPlease review and decide whether to merge as-is, adapt for job-manager use, or close.",
    "files": [
      "docs/JWT_Authentication_for_OFBiz_and_Moqui.md",
      "docs/accxui_PWA_Authentication.md",
      "service/admin.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#107",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "107",
    "title": "feat: add logout#User service — POST /rest/s1/admin/logout",
    "labels": [],
    "body": "## What\n\nAdds `logout#User` service to `AuthServices.xml` and a `logout` REST resource to `admin.rest.xml`.\n\n**Endpoint:** `POST /rest/s1/admin/logout`\n\n## Service logic\n\n```xml\n<service verb=\"logout\" noun=\"User\">\n    <actions>\n        <!-- OFBiz side: Moqui does not manage UserLogin.hasLoggedOut -->\n        <entity-find-one entity-name=\"org.apache.ofbiz.security.login.UserLogin\" value-field=\"userLogin\">\n            <field-map field-name=\"userLoginId\" from=\"ec.user.username\"/>\n        </entity-find-one>\n        <if condition=\"userLogin\">\n            <set field=\"userLogin.hasLoggedOut\" value=\"Y\"/>\n            <entity-update value-field=\"userLogin\"/>\n        </if>\n        <!-- Moqui side: sets UserAccount.hasLoggedOut=Y and invalidates HTTP session -->\n        <script>ec.user.logoutUser()</script>\n    </actions>\n</service>\n```\n\n## Why two entities\n\nBoth `org.apache.ofbiz.security.login.UserLogin` and `moqui.security.UserAccount` have a `hasLoggedOut` field.\n\n- `ec.user.logoutUser()` (framework) handles `UserAccount.hasLoggedOut` internally and invalidates the session — verified in `UserFacadeImpl.groovy:753`\n- `UserLogin.hasLoggedOut` must be set explicitly since Moqui does not manage OFBiz entities automatically\n\n## Note for PWA\n\nThe accxUI `useAuth().logout()` currently sends `GET`. This endpoint is `POST`. The PWA call will need to be updated to send `POST /rest/s1/admin/logout`.",
    "files": [
      "MoquiConf.xml",
      "service/admin.rest.xml",
      "service/co/hotwax/auth/AuthServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#109",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "109",
    "title": "feat: login#User accepts both uppercase and lowercase credentials",
    "labels": [],
    "body": "## What\n\n`login#User` now accepts `USERNAME`/`PASSWORD` (OFBiz/accxUI convention) alongside `username`/`password` (Moqui native).\n\n## Why\n\nDuring the OFBiz→Moqui migration, browser-cached JavaScript may send uppercase credentials while new code sends lowercase. Making Moqui accept both eliminates the dependency on which version the browser happens to have cached.\n\n## Changes\n\n`service/co/hotwax/auth/AuthServices.xml`:\n- Added `USERNAME` and `PASSWORD` as in-parameters\n- Updated the null check: `!(token || (username && password) || (USERNAME && PASSWORD))`\n- Groovy script: `def actualUsername = username ?: USERNAME`\n\n## Backward compatible\n\n- Lowercase credentials (Moqui native) → work as before\n- Uppercase credentials (OFBiz/browser cache) → now also work",
    "files": [
      "docs/JWT_Authentication_for_OFBiz_and_Moqui.md",
      "docs/accxui_PWA_Authentication.md"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#114",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "114",
    "title": "Solr integration",
    "labels": [],
    "body": "",
    "files": [
      "MoquiConf.xml",
      "README.md",
      "build.gradle",
      "data/SolrFieldTypes.json",
      "docs/solr-integration.md",
      "service/admin.rest.xml",
      "service/co/hotwax/solr/SolrSchemaServices.xml",
      "service/co/hotwax/solr/SolrServices.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_rest_managed.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_schema_analysis_stopwords_english.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_schema_analysis_synonyms_english.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/currency.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/data-config.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/elevate.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/hashtagtypes.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_ca.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_fr.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_ga.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_it.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/hyphenations_ga.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stemdict_nl.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stoptags_ja.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ar.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_bg.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ca.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ckb.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_cz.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_da.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_de.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_el.txt"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#117",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "117",
    "title": "Solr integartion implementation",
    "labels": [],
    "body": "",
    "files": [
      "MoquiConf.xml",
      "build.gradle",
      "screen/Settings.xml",
      "screen/Settings/Search.xml",
      "service/admin.rest.xml",
      "service/co/hotwax/solr/SolrSchemaServices.xml",
      "service/co/hotwax/solr/SolrServices.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_rest_managed.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_schema_analysis_stopwords_english.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/_schema_analysis_synonyms_english.json",
      "solr/8.11.2/configsets/enterpriseSearch/conf/currency.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/data-config.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/elevate.xml",
      "solr/8.11.2/configsets/enterpriseSearch/conf/hashtagtypes.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_ca.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_fr.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_ga.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/contractions_it.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/hyphenations_ga.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stemdict_nl.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stoptags_ja.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ar.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_bg.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ca.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_ckb.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_cz.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_da.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_de.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_el.txt",
      "solr/8.11.2/configsets/enterpriseSearch/conf/lang/stopwords_en.txt"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#120",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "120",
    "title": "Added: rest endpoint for indexing products from app",
    "labels": [],
    "body": "",
    "files": [
      "service/admin.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#121",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "121",
    "title": "Added REST endpoint to index customer and order document in Solr.",
    "labels": [],
    "body": "",
    "files": [
      "service/admin.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#148",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "148",
    "title": "Expose entity-auto endpoints for app-side onboarding orchestration",
    "labels": [],
    "body": "## Why\n\nKeep Product Store onboarding support in maarg-util limited to the backend capabilities the Company app cannot own directly. The Company app now orchestrates setup through existing/generic app-side flows where appropriate, while user/security setup remains outside Company and service-job parameters use the existing ServiceJob update path used by Job Manager.\n\n## What's added\n\n| Area | Change | Reason |\n|---|---|---|\n| JWT token creation | `admin/jwtTokens` -> `co.hotwax.auth.AuthServices.create#JwtToken` | Token signing is backend-only and must validate the delegated subject server-side. |\n| Organization bootstrap support | `organizations` POST, `organizations/{partyId}/roles`, and `systemProperties` POST/PUT | Lets Company create/link the Product Store organization without bespoke bootstrap services. |\n| JWT permission seed | `JWT_TOKEN_CREATE` permission data | Gives the backend token endpoint a narrow permission gate. |\n\n## Review updates\n\n- Removed `userSecurityGroups`; Company no longer manages security-group assignment or discovers integration subjects through security groups.\n- Removed `serviceJobs/{jobName}/parameters`; Company now updates job parameters through `admin/serviceJobs/{jobName}` with `serviceJobParameters`, matching Job Manager.\n- Removed the unused ProductStoreRole and FacilityParty write endpoints that only supported the dropped Company-side access-package flow.\n\n## Validation\n\n- `xmllint --noout service/admin.rest.xml service/co/hotwax/auth/AuthServices.xml data/JwtTokenSecurityData.xml`\n- Company app branch updated to stop calling the removed endpoints; `pnpm build` passes there.",
    "files": [
      "service/admin.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/hotwax-maarg-util#151",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "151",
    "title": "Add orderByField parameter to SystemMessages service",
    "labels": [],
    "body": "## Summary\n- Added `orderByField` parameter to `get#SystemMessages` service to support backend-driven sorting.",
    "files": [
      "service/admin.rest.xml",
      "service/co/hotwax/solr/SolrServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  },
  {
    "id": "hotwax/job-manager#908",
    "repo": "hotwax/job-manager",
    "type": "PR",
    "number": "908",
    "title": "Improved: resp data check when fetching jobs for moqui",
    "labels": [],
    "body": "### Related Issues\r\n<!--  Put related issue number which this PR is closing. For example #123 -->\r\n\r\n#\r\n\r\n### Short Description and Why It's Useful\r\n<!-- Describe in a few words what is this Pull Request changing and why it's useful -->\r\n\r\n\r\n### Screenshots of Visual Changes before/after (If There Are Any)\r\n<!-- If you made any changes in the UI layer, please provide before/after screenshots -->\r\n\r\n\r\n### Contribution and Currently Important Rules Acceptance\r\n<!-- Please get familiar with following info -->\r\n\r\n- [x] I read and followed [contribution rules](https://github.com/hotwax/job-manager#contribution-guideline)",
    "files": [
      "src/store/modules/maargJob/actions.ts"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.35.2"
  },
  {
    "id": "hotwax/oms#631",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "631",
    "title": "Added solr artifact related to oms",
    "labels": [],
    "body": "",
    "files": [
      "service/co/hotwax/oms/search/SearchServices.xml",
      "solr/8.11.2/schema.json"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#674",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "674",
    "title": "Improvement: Corrected the index document service name",
    "labels": [],
    "body": "Improvement: Corrected the index document service name",
    "files": [
      "service/co/hotwax/oms/search/SearchServices.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
