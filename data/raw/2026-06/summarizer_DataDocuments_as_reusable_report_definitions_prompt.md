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

Cluster Description: Items cited in the current 2026-06 release note section "DataDocuments as reusable report definitions".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-poorti#240",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "240",
    "title": "Added: Data Documents for stores and pickers performance stats",
    "labels": [],
    "body": "Related Issue: https://github.com/hotwax/hotwax-poorti/issues/252\r\n\r\nChangelog: Added",
    "files": [
      "data/PoortiDataDocumentData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  },
  {
    "id": "hotwax/hotwax-poorti#279",
    "repo": "hotwax/hotwax-poorti",
    "type": "PR",
    "number": "279",
    "title": "Added: Store Performance and crediting dashboards data documents in upgrade data",
    "labels": [],
    "body": "",
    "files": [
      "upgrade/UpcomingRelease/UpgradeData.xml"
    ],
    "linkedIssues": [],
    "releaseTag": "v2.4.0"
  }
]

Output JUST the summary text.
