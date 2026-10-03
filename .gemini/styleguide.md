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

---

## Product screenshot standard

Screenshots should show how the intended operator uses the app, on the device they would use. Select the audience before capture; do not use the browser's incidental window size or a square crop as the primary image.

### Device profiles and framing

| Audience | Default device | Reference page viewport | Orientation |
| --- | --- | --- | --- |
| Store operators | 11-inch iPad (A16) | 1180 × 820 CSS pixels | Landscape |
| Administrators and central operations | 13-inch MacBook Air with a 13.6-inch display | 1280 × 832 CSS pixels | Landscape |

These profiles preserve the display proportions of Apple's [11-inch iPad](https://www.apple.com/ipad-11/specs/) (2360 × 1640 native pixels) and [13-inch MacBook Air](https://www.apple.com/macbook-air/specs/) (2560 × 1664 native pixels). They are repeatable page-viewport references, not claims of physical-device testing. Browser chrome, display scaling, and actual models can change the available page area.

- Use the actual device model and content viewport when known. An older 13-inch MacBook Air with a 2560 × 1600 display uses a 16:10 reference, such as 1280 × 800; a 4:3 iPad uses a matching reference, such as 1024 × 768. Record the selected model and dimensions instead of treating every iPad or laptop as the same ratio.
- Receiving, store Cycle Count, BOPIS, and store Fulfillment use the iPad profile. Company, Order Manager, Products, Order Routing, Job Manager, and central administration views use the MacBook Air profile. Choose by workflow when an app has both store and administrator views.
- Set the capture viewport before navigating or reviewing layout. Capture the full viewport with the app heading, navigation, relevant controls, and operational context visible. Reflow and review the UI at that size; do not resize, stretch, pad, or crop a finished screenshot to imitate a device.
- Use a focused detail crop only as a supplementary image after a full device-framed screenshot. Do not turn the primary screenshot into a square panel crop or use a full-page scroll capture as a device-sized image.
- Restore temporary viewport overrides after capture. Do not imply Safari, touch, or physical-device validation when only a desktop browser at the reference viewport was used.

### Data quality and safety

- Choose meaningful, populated records from the authorized real demo backend. Show readable product names, useful quantities, completed activity, or configured workflows that illustrate the feature being discussed.
- A timeline showcase should contain several meaningful recorded steps, such as approval, routing, picking, packing, and shipping. A held order with only creation or hold history does not demonstrate a fulfillment timeline, even when its customer details are complete.
- For company hierarchy and subsidiary mapping, prefer an actual populated parent/child structure with mapped IDs. For integration operations, prefer a configured demo connection with recorded runs, queue activity, or events. Do not publish an empty hierarchy or a page dominated by `Not configured` as the launch's showcase image.
- A healthy empty queue can be useful when completed runs and configuration explain it. An empty setup form is suitable only when the feature being shown is that creation form; its caption must not imply a completed workflow.
- Never intercept APIs, use fixture responses, or invent successful processing to improve a picture. Keep timeline events, timestamps, products, quantities, prices, statuses, companies, and facilities unchanged. Do not activate integration jobs, change mappings, submit orders, or move stock solely for screenshots. If meaningful demo setup requires data changes, explain the exact changes and obtain authorization first.
- Prefer complete synthetic demo customer records. Only with explicit authorization may a screenshot use temporary, display-only fictional customer profile replacements on an otherwise genuine demo order. Limit changes to the customer name, contact details, locale, and address presentation; do not modify app state, APIs, or saved records. Disclose the illustration in the public caption, record the exact substitutions internally, and reload the page after capture to restore the actual display. Such an image is not evidence that the displayed customer profile is stored or that contact editing was validated.
- Use realistic fictional customer names, emails, and addresses on verified demo orders. Prefer complete records with readable products and meaningful fulfillment history; do not showcase anonymous placeholders, `Demo Rehearsal`, or mostly missing contact details. Reserved email domains such as `example.com` can provide realistic, non-deliverable addresses without using a real person's information. Keep a provenance record showing that the identity is synthetic.
- Keep sample data within the demo instance's existing business structure: use its real companies, facilities, products, and supported workflows. Approval to create sample customers or orders does not authorize inventing companies, subsidiaries, facilities, mappings, or fulfillment history for a screenshot. If no suitable hierarchy exists, omit that image and record the gap.
- No client names, client-associated facility or product names, real customer contact details, credentials, tokens, or sensitive payloads may appear. Select another clean record or omit the image if full framing exposes them. Privacy cropping must not replace the primary device-framed capture; arrange a safe demo record instead.
- Review both privacy and presentation quality from the actual saved pixels before publication. A privacy-safe screenshot can still be unsuitable when its data, layout, or state looks unfinished.

### Publication checks

- Record the source page, backend environment, capture date, audience, device profile, CSS viewport, saved pixel dimensions, app revision when verified, and the workflow shown. Mark an unverified deployed revision as unknown rather than equating `main` with a deployed build.
- Explain what the image shows with short alt text and a useful caption. Identify development/demo UI when applicable. Demo counts and delivery times are not performance guarantees.
- Preserve the original aspect ratio, provide a full-size image link, and verify the public page's image and caption after publication. Internal screenshot briefs and placement notes must not appear in the public body.
