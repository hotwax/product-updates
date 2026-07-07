Generate the final Monthly Release Notes for HotWax Commerce.
Month: 2026-06

Author persona: Product Manager
Reader persona: Enthusiastic Retailer

Style Guide:
# HotWax Product Updates Style Guide

Welcome to HotWax Commerce’s style guide for product updates. This guide helps ensure that our release notes are on-brand, easy to read, and consistent with HotWax’s positioning as an omnichannel OMS for retail.

---

## HotWax’s brand voice: Above all, simple and human

The HotWax voice is how we talk to people. It’s our personality, substance, tone, and style working together.

### Three voice principles

Our voice hinges on crisp simplicity. Bigger ideas and fewer words. Our voice is:

* Warm and relaxed: We’re natural. Less formal, more grounded in real, everyday conversations.
* Crisp and clear: We’re to the point. We write for scanning first, reading second. We make it simple above all.
* Ready to lend a hand: We show customers we’re on their side. We anticipate their real needs and offer great information at just the right time.

### Audience Persona

Our content is written **by Product Managers for Retailers**. 

The reader is a retailer who is enthusiastic about their Order Management System (OMS) and Inventory Management System (IMS). They care about how the system helps them grow, but they aren't interested in the weeds of technical debt or code cleanup (unless it directly impacts their day-to-day experience).

### Style tips

A few key elements of writing HotWax’s voice:

* Get to the point fast. Start with the key takeaway. Put the most important thing in the most noticeable spot. Make choices and next steps obvious. Give people just enough information to make decisions confidently.
* Talk like a person. Choose optimistic, conversational language. Use short everyday words, contractions, and sentence-style capitalization. Shun jargon and acronyms.
* Simpler is better. Everyone likes clarity and getting to the point. Break it up. Short sentences and fragments are easier to scan and read. Prune excess words.

## Brand identity

#### Company name

* Always use HotWax Commerce in full on first mention.
* Subsequent mentions can use HotWax if the context is clear.
* Do not use Hotwax Commerce, lowercase (hotwax commerce), all caps (HOTWAX COMMERCE), or abbreviations (HW Commerce, HW).

### Word choice

HotWax content should be straightforward and useful. Avoid marketing-fluff and prefer concrete claims and examples.

Choose plain words that describe the action directly and avoid using:

“Ensure”
“Seamlessly”, “effortlessly”, “swiftly”, “effortless”, “flawless”, “smooth”, “enhanced”, “streamlined”
“Best‑in‑class”, “cutting‑edge”
“Efficient”
“game-changer”
“Leverage”
“Streamline”
Excessive adjectives like “vital”, “crucial”, “essential”

### Professional Tone and "AI Slop"
Avoid common AI filler words and phrases that sound like marketing fluff.
- Do not use: "unlock", "delve", "comprehensive", "robust", "transformative", "revolutionary".
- **Strictly no exclamation points**. The tone should be professional, utility-focused, and grounded.

### Tone for New Features

When documenting a new feature, focus on the value and the "newness". 

* Avoid words like "fixed", "issues", "bugs", or "refactored" in the context of a new launch. 
* Any bugs found and fixed during development should be synthesized into the feature description as improvements or simply omitted if they don't contribute to the story.
* Maintain a professional tone focused on utility and value.

### Categorization & Specificity

Group updates based on their most specific impact.

* If an update relates to both a general subject (e.g., performance) and a specific feature launch (e.g., "Gift Cards"), it should be grouped with the specific feature.
* Specificity over generality: "Database indexing for Gift Card lookups" belongs in "Gift Cards", not "System Performance".

#### Core principles

* Use one term for one concept everywhere.
  Preferred: “order routing engine”, “routing logic”.
  Avoid: Switching between “allocation engine,” “routing tool”.

* Favor plain, recognizable language over jargon.
  Preferred: “start order sync”
  Avoid: “initiate the order synchronization process”

* Introduce technical terms with context.

  Define acronyms or uncommon industry terms the first time you use them.

  Example: HotWax supports BOPIS (Buy Online Pick Up In Store) workflows.

* Don’t invent new words or overly branded terms.  
    
* Write in US English.
  Preferred: fulfillment
  Avoid: fulfilment (UK spelling)

---

## Acronyms

Acronyms can make content harder to read. Use them carefully.

* Only use acronyms your audience will know. Stick to retail, commerce, or technology standards.
* Always spell out first mention (unless universally known like API, SKU, URL). Write the full term followed by the acronym in parentheses.
* Don’t introduce acronyms used only once.
* Articles (a vs. an): Use depending on pronunciation, not spelling.
* Making acronyms plural: Add a lowercase s with no apostrophe (e.g., three APIs, multiple SKUs).

---

## Capitalization

HotWax style uses sentence-style capitalization. This means you capitalize only the first word and any proper nouns.

### General guidelines

* Capitalize the first word of a sentence, heading, or title.
* Capitalize proper nouns:
  - Company names (Shopify, NetSuite)
  - Products or solutions (HotWax Commerce Order Management System, BOPIS App)
  - UI labels and menu options (Submit, Order Details).
* Use lowercase for everything else.
* Don’t use ALL CAPS for emphasis. Use italics sparingly if needed.

### Sentence-style capitalization in titles and headings

Use sentence-style capitalization for headings: capitalize the first word, lowercase the rest (except proper nouns).

---

## Grammar and tenses

Readers expect HotWax content to be direct and actionable.

* Active vs. Passive: Prefer active voice.
  Active: HotWax routes the order to the right store.
* Verbs & Tenses: Use present tense when describing features.
  Right: “HotWax routes orders to the right store.”
* Person: Use the third person ("retailers," "they," "brands") when discussing industry challenges, and second person ("you," "your") when offering direct guidance.

---

## Numbers

* Spell out zero through nine in running text.
* Use numerals for 10 and above, or for time, measurements, and percentages.
* Always use numerals with units (e.g., 3 hours, 5% growth).

---

## Lists

* Use lists for clarity and scannability.
* Capitalize the first word of each bullet.
* Add a period only if the bullet is a full sentence.
* Numbered lists: Use when steps must be followed in sequence.

---

## Punctuation

* Periods: End full sentences with a period. Do not use periods at the end of bullet points if they are fragments.
* Hyphens: Use for compound terms (e.g., real-time data, store-level inventory).
* Oxford Comma: Always use the final Oxford comma in a series.
* Exclamation Points: **Do not use exclamation points.** Use periods for all sentences to maintain a professional tone.

---

## Emphasis

* Use bold only for key-value pairs (e.g., **Store priority:** Based on layout).
* Use backticks for UI elements in documentation and release notes (e.g., Click `Save`).

---

## Formatting Fundamentals

* Single spaces only: Never leave two spaces between words or after punctuation.
* No leading spaces: Ensure paragraphs and bullets align properly without extra tabs or spaces.
* Recheck after edits: When changing content, ensure no accidental double spaces or missing punctuation were introduced.


Summarized Clusters:
[
  {
    "name": "Order tasks as real exception work",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Order tasks as real exception work. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "587",
        "url": "https://github.com/hotwax/oms/pull/587"
      },
      {
        "repo": "hotwax/oms",
        "number": "589",
        "url": "https://github.com/hotwax/oms/pull/589"
      },
      {
        "repo": "hotwax/oms",
        "number": "593",
        "url": "https://github.com/hotwax/oms/pull/593"
      },
      {
        "repo": "hotwax/oms",
        "number": "613",
        "url": "https://github.com/hotwax/oms/pull/613"
      },
      {
        "repo": "hotwax/oms",
        "number": "615",
        "url": "https://github.com/hotwax/oms/pull/615"
      },
      {
        "repo": "hotwax/oms",
        "number": "688",
        "url": "https://github.com/hotwax/oms/pull/688"
      },
      {
        "repo": "hotwax/oms",
        "number": "697",
        "url": "https://github.com/hotwax/oms/pull/697"
      }
    ]
  },
  {
    "name": "Fraud review powered by Shopify risk",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Fraud review powered by Shopify risk. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "232",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/232"
      },
      {
        "repo": "hotwax/mantle-shopify-connector",
        "number": "365",
        "url": "https://github.com/hotwax/mantle-shopify-connector/pull/365"
      },
      {
        "repo": "hotwax/oms",
        "number": "601",
        "url": "https://github.com/hotwax/oms/pull/601"
      },
      {
        "repo": "hotwax/oms",
        "number": "699",
        "url": "https://github.com/hotwax/oms/pull/699"
      },
      {
        "repo": "hotwax/oms",
        "number": "702",
        "url": "https://github.com/hotwax/oms/pull/702"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "600",
        "url": "https://github.com/hotwax/hotwax-oms/pull/600"
      }
    ]
  },
  {
    "name": "Order Funnel as the fulfillment operating dashboard",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Order Funnel as the fulfillment operating dashboard. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "629",
        "url": "https://github.com/hotwax/oms/pull/629"
      },
      {
        "repo": "hotwax/oms",
        "number": "645",
        "url": "https://github.com/hotwax/oms/pull/645"
      },
      {
        "repo": "hotwax/oms",
        "number": "673",
        "url": "https://github.com/hotwax/oms/pull/673"
      },
      {
        "repo": "hotwax/oms",
        "number": "676",
        "url": "https://github.com/hotwax/oms/pull/676"
      },
      {
        "repo": "hotwax/oms",
        "number": "630",
        "url": "https://github.com/hotwax/oms/pull/630"
      },
      {
        "repo": "hotwax/oms",
        "number": "640",
        "url": "https://github.com/hotwax/oms/pull/640"
      }
    ]
  },
  {
    "name": "Parking, ship groups, and order detail depth",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Parking, ship groups, and order detail depth. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "579",
        "url": "https://github.com/hotwax/oms/pull/579"
      },
      {
        "repo": "hotwax/oms",
        "number": "580",
        "url": "https://github.com/hotwax/oms/pull/580"
      },
      {
        "repo": "hotwax/oms",
        "number": "582",
        "url": "https://github.com/hotwax/oms/pull/582"
      },
      {
        "repo": "hotwax/oms",
        "number": "596",
        "url": "https://github.com/hotwax/oms/pull/596"
      },
      {
        "repo": "hotwax/oms",
        "number": "597",
        "url": "https://github.com/hotwax/oms/pull/597"
      },
      {
        "repo": "hotwax/oms",
        "number": "598",
        "url": "https://github.com/hotwax/oms/pull/598"
      },
      {
        "repo": "hotwax/oms",
        "number": "608",
        "url": "https://github.com/hotwax/oms/pull/608"
      },
      {
        "repo": "hotwax/oms",
        "number": "609",
        "url": "https://github.com/hotwax/oms/pull/609"
      },
      {
        "repo": "hotwax/oms",
        "number": "616",
        "url": "https://github.com/hotwax/oms/pull/616"
      },
      {
        "repo": "hotwax/oms",
        "number": "617",
        "url": "https://github.com/hotwax/oms/pull/617"
      },
      {
        "repo": "hotwax/oms",
        "number": "618",
        "url": "https://github.com/hotwax/oms/pull/618"
      },
      {
        "repo": "hotwax/oms",
        "number": "633",
        "url": "https://github.com/hotwax/oms/pull/633"
      }
    ]
  },
  {
    "name": "Products as the operational product data app",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Products as the operational product data app. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "35",
        "url": "https://github.com/hotwax/oms/pull/35"
      },
      {
        "repo": "hotwax/oms",
        "number": "576",
        "url": "https://github.com/hotwax/oms/pull/576"
      },
      {
        "repo": "hotwax/oms",
        "number": "590",
        "url": "https://github.com/hotwax/oms/pull/590"
      },
      {
        "repo": "hotwax/oms",
        "number": "591",
        "url": "https://github.com/hotwax/oms/pull/591"
      },
      {
        "repo": "hotwax/oms",
        "number": "595",
        "url": "https://github.com/hotwax/oms/pull/595"
      },
      {
        "repo": "hotwax/oms",
        "number": "606",
        "url": "https://github.com/hotwax/oms/pull/606"
      },
      {
        "repo": "hotwax/oms",
        "number": "614",
        "url": "https://github.com/hotwax/oms/pull/614"
      },
      {
        "repo": "hotwax/oms",
        "number": "627",
        "url": "https://github.com/hotwax/oms/pull/627"
      },
      {
        "repo": "hotwax/oms",
        "number": "690",
        "url": "https://github.com/hotwax/oms/pull/690"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "554",
        "url": "https://github.com/hotwax/hotwax-oms/pull/554"
      }
    ]
  },
  {
    "name": "Routing and Sourcing as one workspace",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Routing and Sourcing as one workspace. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "578",
        "url": "https://github.com/hotwax/oms/pull/578"
      },
      {
        "repo": "hotwax/oms",
        "number": "632",
        "url": "https://github.com/hotwax/oms/pull/632"
      },
      {
        "repo": "hotwax/oms",
        "number": "655",
        "url": "https://github.com/hotwax/oms/pull/655"
      },
      {
        "repo": "hotwax/oms",
        "number": "659",
        "url": "https://github.com/hotwax/oms/pull/659"
      },
      {
        "repo": "hotwax/oms",
        "number": "600",
        "url": "https://github.com/hotwax/oms/pull/600"
      },
      {
        "repo": "hotwax/oms",
        "number": "621",
        "url": "https://github.com/hotwax/oms/pull/621"
      },
      {
        "repo": "hotwax/oms",
        "number": "667",
        "url": "https://github.com/hotwax/oms/pull/667"
      },
      {
        "repo": "hotwax/OrderRouting",
        "number": "121",
        "url": "https://github.com/hotwax/OrderRouting/pull/121"
      },
      {
        "repo": "hotwax/oms",
        "number": "536",
        "url": "https://github.com/hotwax/oms/pull/536"
      }
    ]
  },
  {
    "name": "Job Manager V2 as the integration control plane",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Job Manager V2 as the integration control plane. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "115",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/115"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "116",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/116"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "107",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/107"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "109",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/109"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "114",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/114"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "117",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/117"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "120",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/120"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "121",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/121"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "148",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/148"
      },
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "151",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/151"
      },
      {
        "repo": "hotwax/job-manager",
        "number": "908",
        "url": "https://github.com/hotwax/job-manager/pull/908"
      },
      {
        "repo": "hotwax/oms",
        "number": "631",
        "url": "https://github.com/hotwax/oms/pull/631"
      },
      {
        "repo": "hotwax/oms",
        "number": "674",
        "url": "https://github.com/hotwax/oms/pull/674"
      }
    ]
  },
  {
    "name": "DataDocuments as reusable report definitions",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for DataDocuments as reusable report definitions. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "240",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/240"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "279",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/279"
      }
    ]
  },
  {
    "name": "Pick profiles and downstream sync queues",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Pick profiles and downstream sync queues. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "271",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/271"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "274",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/274"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "262",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/262"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "620",
        "url": "https://github.com/hotwax/hotwax-oms/pull/620"
      }
    ]
  },
  {
    "name": "Shopify fulfillment holds and 3PL routing",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Shopify fulfillment holds and 3PL routing. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "235",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/235"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "238",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/238"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "245",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/245"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "269",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/269"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "274",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/274"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "276",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/276"
      }
    ]
  },
  {
    "name": "Shopify location, inventory, and post-shipment events",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Shopify location, inventory, and post-shipment events. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "227",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/227"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "255",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/255"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "271",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/271"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "277",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/277"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "278",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/278"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "281",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/281"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "238",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/238"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "282",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/282"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "283",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/283"
      },
      {
        "repo": "hotwax/mantle-shopify-connector",
        "number": "344",
        "url": "https://github.com/hotwax/mantle-shopify-connector/pull/344"
      },
      {
        "repo": "hotwax/mantle-shopify-connector",
        "number": "356",
        "url": "https://github.com/hotwax/mantle-shopify-connector/pull/356"
      }
    ]
  },
  {
    "name": "Native pickup and customer communication",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Native pickup and customer communication. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "259",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/259"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "260",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/260"
      },
      {
        "repo": "hotwax/hotwax-poorti",
        "number": "265",
        "url": "https://github.com/hotwax/hotwax-poorti/pull/265"
      },
      {
        "repo": "hotwax/hotwax-unigate",
        "number": "78",
        "url": "https://github.com/hotwax/hotwax-unigate/pull/78"
      },
      {
        "repo": "hotwax/hotwax-unigate",
        "number": "83",
        "url": "https://github.com/hotwax/hotwax-unigate/pull/83"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "525",
        "url": "https://github.com/hotwax/hotwax-oms/pull/525"
      },
      {
        "repo": "hotwax/oms",
        "number": "561",
        "url": "https://github.com/hotwax/oms/pull/561"
      },
      {
        "repo": "hotwax/oms",
        "number": "620",
        "url": "https://github.com/hotwax/oms/pull/620"
      }
    ]
  },
  {
    "name": "Agent Composer and Workforce",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Agent Composer and Workforce. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/hotwax-maarg-util",
        "number": "102",
        "url": "https://github.com/hotwax/hotwax-maarg-util/pull/102"
      }
    ]
  },
  {
    "name": "Safer app permissions and admin surfaces",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Safer app permissions and admin surfaces. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/oms",
        "number": "612",
        "url": "https://github.com/hotwax/oms/pull/612"
      },
      {
        "repo": "hotwax/oms",
        "number": "670",
        "url": "https://github.com/hotwax/oms/pull/670"
      },
      {
        "repo": "hotwax/oms",
        "number": "686",
        "url": "https://github.com/hotwax/oms/pull/686"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "588",
        "url": "https://github.com/hotwax/hotwax-oms/pull/588"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "619",
        "url": "https://github.com/hotwax/hotwax-oms/pull/619"
      }
    ]
  },
  {
    "name": "Data loading, setup, and integration reliability",
    "summary": "Draft section already present in drafts/2026-06/release-notes.md for Data loading, setup, and integration reliability. Re-run with Gemini to regenerate this summary from raw pull request data.",
    "prReferences": [
      {
        "repo": "hotwax/mantle-netsuite-connector",
        "number": "245",
        "url": "https://github.com/hotwax/mantle-netsuite-connector/pull/245"
      },
      {
        "repo": "hotwax/mantle-netsuite-connector",
        "number": "247",
        "url": "https://github.com/hotwax/mantle-netsuite-connector/pull/247"
      },
      {
        "repo": "hotwax/mantle-netsuite-connector",
        "number": "249",
        "url": "https://github.com/hotwax/mantle-netsuite-connector/pull/249"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "252",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/252"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "263",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/263"
      },
      {
        "repo": "hotwax/hotwax-shopify-oms-bridge",
        "number": "286",
        "url": "https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/286"
      },
      {
        "repo": "hotwax/oms",
        "number": "635",
        "url": "https://github.com/hotwax/oms/pull/635"
      },
      {
        "repo": "hotwax/oms",
        "number": "637",
        "url": "https://github.com/hotwax/oms/pull/637"
      },
      {
        "repo": "hotwax/oms",
        "number": "652",
        "url": "https://github.com/hotwax/oms/pull/652"
      },
      {
        "repo": "hotwax/oms",
        "number": "683",
        "url": "https://github.com/hotwax/oms/pull/683"
      },
      {
        "repo": "hotwax/oms",
        "number": "706",
        "url": "https://github.com/hotwax/oms/pull/706"
      },
      {
        "repo": "hotwax/hotwax-ofbiz-oms-usl",
        "number": "28",
        "url": "https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/28"
      },
      {
        "repo": "hotwax/hotwax-ofbiz-oms-usl",
        "number": "29",
        "url": "https://github.com/hotwax/hotwax-ofbiz-oms-usl/pull/29"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "603",
        "url": "https://github.com/hotwax/hotwax-oms/pull/603"
      },
      {
        "repo": "hotwax/hotwax-oms",
        "number": "612",
        "url": "https://github.com/hotwax/hotwax-oms/pull/612"
      }
    ]
  }
]

Assemble the final document. Group the clusters under logical "App/Module" headers.
Include a 2-sentence intro summarizing the month.

Structure Guidelines:
- **User-Facing First**: Prioritize new features, UI improvements, and business logic changes at the top.
- **System Updates at the Bottom**: Any "Technical Debt", "Code Cleanup", or backend-only changes (e.g., library migrations or internal logging updates) must be grouped under a final "System & Core Updates" section at the end of the document.
- **Tone Check**: Ensure the tone is professional and utility-focused.
- **No AI Slop**: Do not use words like "enhanced", "streamlined", or "robust".
- **No Exclamation Points**: Use periods only. No exclamation points allowed.
- **Citations**: At the end of each feature/section summary, include the citations provided in the cluster data. Format them as a single line with GitHub pull request links, like: *Sources: [repo#123](url), [repo#456](url)*

Structure:
# [Month Year] Release Notes
[Intro]

## [App Name]
### [Feature Name]
[Summary]
*Sources: [repo#123](url), ...*
...

## System & Core Updates
### [Technical Update Name]
[Summary]
*Sources: [repo#123](url), ...*
