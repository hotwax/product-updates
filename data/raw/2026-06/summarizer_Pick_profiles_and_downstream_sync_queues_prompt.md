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

Cluster Description: Items cited in the current 2026-06 release note section "Pick profiles and downstream sync queues".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-poorti#271",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "271",
    "title": "Fix: Corrected pick profile enumeration definitions and type IDs",
    "labels": [],
    "body": "Corrected incorrect enumeration type IDs for sort parameters and cleaned up duplicate filter parameter enums in Pick Profile seed data and upgrade files. Also updated the service reference to use the corrected batch size enum.",
    "files": [
      "data/TypeData.xml",
      "service/co/hotwax/poorti/picking/PickProfileServices.xml",
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#274",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "274",
    "title": "Implement pick profile REST APIs for fulfillment order sync",
    "labels": [],
    "body": "This PR adds the backend support for the fulfillment order sync settings UI\r\n\r\n### Changes:\r\n- Added Pick Profile REST endpoints in poorti.rest.xml to get, update, and delete conditions/filters using the master-detail pattern.\r\n- Updated PickProfileEntities.xml to define the nested relationship from PickProfileGroup to PickProfile.\r\n- Added new sort parameter enums (Customer Classification, Order Priority, and Rush Order) in TypeData.xml and UpgradeData.xml.\r\n\r\n---\r\n- Issue: https://github.com/hotwax/oms/issues/643",
    "files": [
      "entity/PickProfileEntities.xml",
      "service/poorti.rest.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#262",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "262",
    "title": "Seed cycle count WorkEffort type",
    "labels": [],
    "body": "## Summary\n- Add `CYCLE_COUNT_RUN` to Poorti baseline `data/TypeData.xml` under the existing `CYCLE_COUNT` enumeration type.\n- This matches the row already present in `upgrade/v1.6.0/UpgradeData.xml` and makes fresh ext-seed loads include the WorkEffort type expected by cycle count services.\n\n## Local verification\n- Confirmed `CYCLE_COUNT_RUN` was absent locally before the fix.\n- Removed any local `CYCLE_COUNT_RUN` row before verification.\n- Ran local Moqui load with `types=ext-seed` using a separate Bitronix transaction log to avoid the running dev server lock.\n- Verified `ENUMERATION` contains `CYCLE_COUNT_RUN / CYCLE_COUNT` after load.\n- Ran `xmllint --noout data/TypeData.xml`.\n- Ran `git diff --check`.\n\nFixes #261",
    "files": [
      "data/PoortiTypeData.xml"
    ],
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
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-oms#620",
    "repo": "hotwax/hotwax-oms",
    "type": "PR",
    "number": "620",
    "title": "Fixed: unknown orderHeader symbol to get product store id to get product store setting to create cycle count for rejected items",
    "labels": [],
    "body": "Changelog: Fixed\r\n",
    "files": [
      "applications/api/src/main/java/co/hotwax/oms/OrderServices.java"
    ],
    "linkedIssues": [],
    "releaseTag": "v8.5.0"
  }
]

Output JUST the summary text.
