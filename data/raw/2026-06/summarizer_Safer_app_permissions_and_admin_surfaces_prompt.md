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

Cluster Description: Items cited in the current 2026-06 release note section "Safer app permissions and admin surfaces".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/oms#612",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "612",
    "title": "[codex] Remove generic entity data endpoint",
    "labels": [],
    "body": "## Summary\n- remove the generic POST `/oms/entityData` REST resource\n- delete `CommonServices.get#EntityData`, which allowed callers to choose arbitrary entity names\n- add bounded `GET /oms/returnReasons` for the known return-reason lookup case\n\n## Why\n`entityData` is a generic read endpoint over arbitrary Moqui entities. Keeping it exposed creates a broad data-access risk and makes it easy for apps or agents to bypass purpose-built APIs.\n\n## Validation\n- `xmllint --noout service/oms.rest.xml service/co/hotwax/oms/common/CommonServices.xml`\n- `git diff --check`\n- `rg -n -S \"entityData|EntityData|get#EntityData|CommonServices\\.get#EntityData|selectedEntity\" service/oms.rest.xml service/co/hotwax/oms/common/CommonServices.xml` returned no matches\n\n## Local follow-up\nI also removed local caller references from the active app/tool checkouts so coding agents do not keep copying the banned endpoint pattern.",
    "files": [
      "service/co/hotwax/oms/common/CommonServices.xml",
      "service/oms.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#670",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "670",
    "title": "Add: OFBiz security permission seed data for Order Manager app",
    "labels": [],
    "body": "## Summary\n\n- Adds `OmsSecurityPermData.xml` (`ext-seed`) seeding all 19 `SecurityPermission` records referenced by the order-manager PWA (`permissions.ts`), plus the `HC_ORDERMGR_ADMIN` security group with full access assigned\n- Updates `HCUserData.xml` to assign `hotwax.user` to `HC_ORDERMGR_ADMIN` so demo/dev installs have working PWA permissions out of the box\n\n## Background\n\nThe order-manager PWA loads permissions via `GET /admin/user/permissions`, which inner-joins OFBiz security tables (`SecurityPermission` → `SecurityGroupPermission` → `UserLoginSecurityGroup`). On a fresh install these tables were empty — no seed data defined the ORDERMGR_* or ORD_SALES_ORDER_* permission records — so `hotwax.user` had zero PWA permissions and the entire app nav was hidden.\n\n## Test plan\n\n- [ ] Fresh Moqui install: verify `SecurityPermission` table contains all 19 ORDERMGR/ORD_SALES_ORDER/RELATNSHIP_CUSTOMER permission rows after startup\n- [ ] `GET /admin/user/permissions` for `hotwax.user` returns permissions count > 0\n- [ ] Order Manager PWA — nav items visible after login as `hotwax.user`\n- [ ] Order list loads without 400 errors",
    "files": [
      "data/HCUserData.xml",
      "data/OmsSecurityPermData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/oms#686",
    "repo": "hotwax/oms",
    "type": "PR",
    "number": "686",
    "title": "feat: app-view permissions + COMMERCE_SUPER Administrator group",
    "labels": [],
    "body": "## What\nAdds the HotWax OMS PWA **app-view permissions** + a **`COMMERCE_SUPER` (\"Administrator\")** security group to the platform security seed, and makes the demo user an Administrator.\n\n**`data/AC_OmsSecurityPermData.xml`** (ext-seed):\n- 16 `*_APP_VIEW` app gates (COMPANY, FULFILLMENT, PICKING, RECEIVING, INVCOUNT, ATP, ORDER_ROUTING, BOPIS, TRANSFERS, THRESHOLD, PREORDER, IMPORT, JOB_MANAGER, FACILITIES, FULFILLMENT_LEGACY, USERS)\n- company/store setup, fulfillment/picking/receiving/inventory, users/security, data-management permissions\n- `COMMERCE_SUPER` group + 68 grants (incl. the existing `ORDERMGR_*` family)\n\n**`data/AJ_HCUserData.xml`** (demo):\n- `hotwax.user` assigned to `COMMERCE_SUPER` (was `HC_ORDERMGR_ADMIN`)\n\n## Why\nThe PWA apps (company, fulfillment, etc.) gate on `*_APP_VIEW` permissions that the new OMS seed didn't define, so admins couldn't open the apps. Permission IDs + descriptions are taken from the canonical legacy hwmapps commerce security data; `ORDER_ROUTING_APP_VIEW` description corrected (legacy had a copy-paste typo).\n\n## Verified\nClean staged `loadProduction` (4 stages) — `COMMERCE_SUPER` created with 68 grants, `hotwax.user` solely `COMMERCE_SUPER`, `COMPANY_APP_VIEW` effective; company app gate passes without the front-end bypass.",
    "files": [
      "data/AC_OmsSecurityPermData.xml",
      "data/AJ_HCUserData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-oms#588",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "588",
    "title": "[codex] Hide MDM permissions from Users app categories",
    "labels": [],
    "body": "## Business summary\nThis PR reduces permission-screen noise for the Users app demo by hiding MDM import/export permissions from the visible permission category list. Users should no longer see the large block of MDM-specific permissions when editing role permissions.\n\nCloses #587\n\n## What changed\n- Moved the MDM-related `SecurityGroupPermission` category memberships from `SGC_ADMIN` to `SGC_HIDDEN` in `CommerceSecurityGroupsData.xml`.\n- Preserved actual permission grants for groups such as `COMMERCE_SUPER` and `MERCHANDISE_MGR`.\n\n## Notes\nThe legacy OFBiz MDM pages still enforce MDM permissions. This PR only changes category visibility in the Users app; it does not remove access checks or widen access.\n\n## Validation\n- Parsed `applications/hwmapps/data/commerce/CommerceSecurityGroupsData.xml` with Python XML parser.\n- Verified all 90 SGC-categorized `MDM_*` rows now resolve to `SGC_HIDDEN`.\n- Ran `git diff --check`.\n\n## Verification gap\nThe local `moqui_quality_audit.py` helper referenced by the Moqui security workflow was not present in this checkout or nearby GitHub checkouts, so that audit could not be run.\n",
    "files": [
      "applications/hwmapps/data/commerce/CommerceSecurityGroupsData.xml",
      "upgrade/UpcomingRelease/UpgradeSQL.sql"
    ],
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
    "releaseTag": "v8.5.0"
  },
  {
    "id": "hotwax/hotwax-oms#619",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "619",
    "title": "Fix:684- Removed for Shopify access tokens and secrets in view and edit shopify shop configuration screens.",
    "labels": [
      "enhancement"
    ],
    "body": "\r\nChangelog: Fixed\r\n\r\n## Issue Link\r\n- Closes https://github.com/hotwax/oms/issues/684\r\n\r\n## Summary\r\nRemoved Shopify access token and shared secret from the Shopify Shop configuration screens in OMS to prevent sensitive credentials from being exposed in the UI.\r\n\r\n### Changes\r\n* `ShopifyShopConfig.ftl` (view): Removed the `Access Token` and `Shared Secret` columns from the Shopify configuration list table. The `Client ID`, `Access Scope`, and all other non-sensitive fields remain visible.\r\n* `EditShopifyShopConfig.ftl` (edit): Removed the `accessToken`, `sharedSecret`, and `oldSharedSecret` input fields from the edit form. The `Access Scope` dropdown and `Client ID` field remain editable.\r\n* `CreateShopifyShop.ftl` (create): No changes — credential fields are required during initial shop setup and remain as-is.\r\n\r\n\r\n",
    "files": [
      "applications/shopify-connector/template/EditShopifyShopConfig.ftl",
      "applications/shopify-connector/template/ShopifyShopConfig.ftl"
    ],
    "linkedIssues": [],
    "releaseTag": "v8.5.0"
  }
]

Output JUST the summary text.
