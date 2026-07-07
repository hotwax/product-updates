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

Cluster Description: Items cited in the current 2026-06 release note section "Agent Composer and Workforce".
Raw Items for this Cluster:
[
  {
    "id": "hotwax/hotwax-maarg-util#102",
    "repo": "hotwax/hotwax-maarg-util",
    "type": "PR",
    "number": "102",
    "title": "docs: document accxUI PWA authentication flow and JWT configuration",
    "labels": [],
    "body": "## What\n\nTwo documentation changes to `runtime/component/maarg-util/docs/`:\n\n### New: `accxui_PWA_Authentication.md`\n\nFull reference for how accxUI PWA apps (company, job-manager, etc.) authenticate against Moqui. Covers:\n\n- The four auth endpoints (`checkLoginOptions`, `login`, `getPermissions`, `logout`) with request/response shapes\n- How the JWT is validated on subsequent calls (automatic via framework, no service code needed)\n- The two token types:\n  - **JWT** (`token`) — stateless, cryptographic, expiry via `jwt.default.expireTime`\n  - **Login key** (`api_key`) — stored in `moqui.security.UserLoginKey` table, SHA-256 hashed, 6-day default expiry\n- Configuration: how `jwt.default.expireTime` is set per environment (MoquiConf.xml default 7200s, JVM arg override for prod 86400s)\n- Data requirement: app-specific permission IDs (e.g. `COMPANY_APP_VIEW`) must exist in `UserGroupPermission`\n\n### Fix: `JWT_Authentication_for_OFBiz_and_Moqui.md`\n\nCorrects an inaccuracy: the existing doc stated the default token expiry is 300 seconds. The actual default in `MoquiConf.xml` is **7200 seconds (2 hours)**. Also adds JVM arg override documentation.\n\n## Why\n\nThe company app was just migrated from OFBiz-based auth to direct Moqui auth. Future app migrations will need this as the reference for how to configure and understand the auth layer.\n\n## Review focus\n\n- Does the `getPermissions` section accurately describe how permission IDs should be seeded?\n- Is the `api_key` / `UserLoginKey` description accurate for your understanding?\n- Any deployment steps I missed for production `jwt.default.expireTime` configuration?",
    "files": [
      "docs/JWT_Authentication_for_OFBiz_and_Moqui.md",
      "docs/accxui_PWA_Authentication.md"
    ],
    "linkedIssues": [],
    "releaseTag": "v3.5.0"
  }
]

Output JUST the summary text.
