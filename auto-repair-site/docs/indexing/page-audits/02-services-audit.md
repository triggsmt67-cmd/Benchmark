# 02 of 23 - Services directory Google AI Search audit

**Decision: revise selectively, retain URL and directory. Internal content grade C / 72. Confidence medium.**

Score 63.125 / 87.5 assessed points = 72/100. Coverage 87.5%, unverified weight 12.5, not applicable 0. This is our editorial rubric, not Google's rating or an indexing diagnosis.

Checked October 23, 2026 using google-ai-search-audit, its previously read foundation/rubric and freshly reopened Google sources. Page: https://www.benchmarkmissoula.com/services. Compared current live page with the local candidate and exercised the local mobile interface. Services recommendations below have not been applied in this turn. Earlier local category/no-JavaScript/schema repairs remain in place and unpublished.

## Purpose and useful contribution

This is a service-selection hub. It should help a driver find a repair, maintenance service, inspection or symptom page and contact the shop. A directory of meaningful service destinations supplies useful functionality without needing a long original article, case study or extra FAQ.

Its strongest asset is its grouped set of descriptive links. Preserve those and the separation between existing-owner inspections and pre-purchase inspections. Avoid rewriting the entire directory or changing URLs on the theory that Google wants more words.

The main weakness is choice/navigation quality: an empty category, a popularity label not established by the inspected data, a guide prominently featured among service requests, and a large mobile toolbar that overlaps the fixed header. A lengthy diagnostic passage also repeats the homepage rather than helping select a service.

Risk: ordinary commercial navigation with some potential safety claims inside the repeated diagnostic passage. Qualified review is needed for the specific damage/timing claims, not for every navigation label. The page's actual service availability and credentials remain business-confirmation questions; repository existence alone does not prove the shop offers every listed procedure.

## Scorecard

Rating 0-4; points = weight x rating / 4. U excludes an unverified criterion from assessed weight, not a zero.

| Category | Criterion 1 rating/weight | Criterion 2 rating/weight | Earned/assessed | Evidence |
|---|---|---|---|---|
| Reader purpose/usefulness | 4/10 | 3/10 | 17.5/20 | Clear service-selection purpose and descriptive links; empty category interrupts completion. |
| Distinctive contribution | 3/10 | 3/10 | 15/20 | Real navigational utility and distinct intents; shared diagnostic passage contributes less to this hub. |
| Accuracy/evidence | U/12.5 | 2/12.5 | 6.25/12.5 | Actual service/equipment claims not independently verified; popularity label and time-to-damage claims need support or narrower wording. |
| Trust/accountability | 3/7.5 | 2/7.5 | 9.375/15 | Business/contact clear; featured-guide data does not establish demand/popularity. |
| Clarity/editorial quality | 3/7.5 | 3/7.5 | 11.25/15 | Scannable categories; hero and long repeated passage could explain service selection more directly. |
| Supporting information | 3/2.5 | 3/2.5 | 3.75/5 | Descriptive cards and paths; missing social image and mobile toolbar behavior require repair. |
| Total | | | 63.125/87.5 = 72 | No grade-to-indexing threshold is inferred. |

## Confirmed findings and priority

### P1 - Comfort & Climate filter returns an empty result

Reproduced on local mobile with blank search: selecting this category leaves zero service links and displays the empty-result message. AC & Heating is present under Repairs, but its content only supplies the Repair category. The category control exists without a corresponding membership mapping.

Fix: map AC & Heating to both Repairs and Comfort & Climate while preserving its intended section, or remove the empty filter. Derive offered filter choices from real content to avoid future empty categories. Check combined category/search and clear/reset behavior. High confidence; small effort. This is a user-facing mismatch, not evidence Google cannot discover the unfiltered links.

### P1/P2 - Mobile sticky toolbar overlaps the header

At 390x844, header rectangle is y=0..117. After scrolling, toolbar sticks at y=0 with height 291px, underneath the higher-z-index header. Screenshot confirms the search input is hidden behind the header. No document-wide horizontal overflow is required for this defect.

Fix: keep the toolbar in normal flow on phones, or use an offset that respects the actual header. A compact mobile category selector is optional; don't redesign the directory unnecessarily. High confidence; small effort. Evidence: rendering/services-mobile-toolbar-audit.png.

### P2 - Prominence/popularity label needs an honest basis

The highlighted group combines a guide selected by featured=true with a service selected by isMostRequested=true. The inspected code contains no inquiry-volume evidence establishing both as the most requested offerings. The guide is educational content rather than a requested repair.

Fix: use a neutral label such as Start Here or Featured Services, select relevant service destinations explicitly, and leave guides in the education section. If the owner supplies actual demand evidence, an accurate popularity label is possible. This is unsupported in inspected evidence, not a finding that the shop's requests are fabricated.

### P2 - Social preview image is a real 404

Both live and local /images/og-services.jpg return 404, and the Services Open Graph metadata references it. Fix by using an existing suitable shop asset with accurate dimensions/alt text, or supplying a real new image. Don't create an invented job image. This affects social-preview reliability; it is not a proven Google indexing barrier.

### P2 - Make the introduction help people choose, and trim repeated material

The current hero mainly offers general reassurance. The directory needs a concise explanation of service, maintenance, inspection and symptom entry points. The shared DiagnosticConfidenceStrip is also rendered on the homepage, including concrete time-to-damage statements and equipment/process assertions not verified in this audit.

Fix: replace that long hub passage with a short explanation and a contextual link to the existing diagnostic-process page. Avoid a blanket diagnosis of duplicate-content penalties. Do not add more material solely to increase length. Keep detailed safety/technical review in the appropriate service/advice audit.

## Already repaired locally - not live yet

- Engine & Performance exists in the schema/content registry but was absent from the live directory's rendered link list. Local category correction restores it: live response has 15 unique service links, local has all 16 current service slugs.
- Local directory cards and main text start visible. Native mobile menu and no-JavaScript filter explanation are present; inert controls are hidden while links remain available.
- Shared geographic entity/schema property repairs passed the earlier sitewide local audit. They are not proof of Google's rich-result eligibility or index inclusion.

## Proposed copy - not applied

**Title:** Auto Repair & Diagnostic Services in Missoula | Benchmark Automotive Service

**H1:** Auto Repair & Diagnostics in Missoula

**Opening:**
Find the service or vehicle concern closest to what you need. Browse repairs, maintenance and inspections, or start with a symptom such as a no-start, overheating or a new noise. If you’re unsure which page fits, call (406) 317-1405 and describe the concern.

**Neutral highlighted-group label:** Start Here

Possible links using existing pages: Electrical Diagnostics; General Maintenance; Vehicle Inspection. These are proposed navigation choices, not claimed popularity rankings. Retain distinct pre-purchase and existing-owner inspection links in the main directory.

**Short replacement for the repeated diagnostic passage:**
Not sure which service fits? The service pages explain the concerns each visit addresses. You can also read about our diagnostic approach or contact the shop to discuss what you’ve noticed.

Link diagnostic approach to /services/our-diagnostic-approach and contact to /contact. Keep the education group separate. Do not add driving-safety assurances, procedure guarantees or new service claims to this hub.

## Technical status

| Check | Status | Evidence/boundary |
|---|---|---|
| HTTP | Pass | Fresh live and local GETs: 200, correct final /services URL. |
| Canonical | Pass for supplied canonical | One HTTPS www self-canonical on both. Google-selected canonical not inspected. |
| Robots/noindex/snippet | Pass on sampled surfaces | Earlier sitewide live baseline and local response checks found no exclusion; hosting/firewall verified-Googlebot treatment remains open. |
| Current Google indexing | Unverified | Supplied handoff reports inconsistent summary/individual records and historical successful crawls. Not refreshed in this turn. |
| Sitemap/discovery | Pass | Earlier 37-route live baseline includes Services; navigation/footer links available. |
| Initial links/content | Pass locally with live navigation issue noted | 16 unique service destinations locally vs 15 live; all unfiltered links available without JS locally. |
| Mobile | Issues | Empty filter, header/toolbar overlap reproduced. Earlier no-overflow checks don't establish every control is usable. |
| Metadata | Issue / editorial revision | OG asset 404. More specific title/H1 suggested; not an indexing guarantee. |
| Schema | Local structural pass, facts unverified | WebSite/AutoRepair/ItemList/BreadcrumbList. Local item list contains 16 service entries; guide cards need not be called Services in schema. Business facts still owner review. |
| Performance | Unverified | No Lighthouse/field performance result claimed. |
| Content duplication | Shared passage confirmed; effect unknown | Same imported component appears on homepage/hub. No penalty or canonical consolidation is inferred. |

## Compact evidence ledger

| Claim/finding | Source/status | Next action |
|---|---|---|
| Shop service offerings | Current site/content registry, attributed | Owner-confirm detailed procedures/scope as individual pages are audited. |
| After-hours drop-off and receipt policy | Existing site plus prior user confirmation | Preserve existing scope; avoid unprovided key-box/parking instructions. |
| Popularity of highlighted cards | featured/isMostRequested flags only, unsupported as demand measurement | Use neutral label or obtain demand evidence. |
| Damage within a specific distance/time | Repeated diagnostic component, not independently reviewed | Remove specificity from hub or obtain relevant technician review. |
| Equipment/process assertions | Existing shop claims, attributed, not independently verified | Do not strengthen them or invent examples. |
| Empty category | Browser interaction plus category source, verified | Correct mapping/filter availability. |
| OG image missing | Direct live/local GET, verified | Replace broken metadata URL with a real asset. |

## Sources, gates and measurement

Official Google guidance consulted October 23: helpful-content guidance favors descriptive headings and reader value; AI-features guidance requires normal Search eligibility and does not guarantee indexing. These do not prescribe our labels, exact copy, numerical score or category taxonomy.

Internal editorial judgment: revise the selection experience, retain the URL and meaningful destinations, and avoid a full rewrite. Potential safety claims require review or removal where used; the proposed hub copy adds no safety advice. Publication approval remains pending. No consolidation, removal, noindex or new page is recommended on this evidence.

After an approved local implementation, rerun empty-category/filter/reset checks, mobile scrolling and link/schema consistency. After a separately authorized release, capture the current Google inspection, run a live test and request indexing once where appropriate. Track directory-to-service visits, qualified inquiries and Google impressions/index status for four weeks. Do not rewrite repeatedly if indexing remains unchanged; do not treat Bing/ChatGPT observations as measured Google evidence.

- https://www.benchmarkmissoula.com/services
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/ai-features
- Source: src/app/(commercial)/services/page.tsx; src/components/widgets/services-directory.tsx; src/components/widgets/diagnostic-confidence-strip.tsx; src/content/services/ac-heating.md; src/content/guides/how-to-choose-a-mechanic.md
- Visual evidence: ../rendering/services-mobile-toolbar-audit.png and services-climate-empty-audit.png

Next individual page after the Services revision/review: /services/electrical-diagnostics. Remaining 21 page-specific audits are pending.

## Approved implementation update

Trevor authorized the recommendations. Applied locally: revised title/H1/opening; valid existing 1200x900 shop image in Open Graph metadata; explicit service-only Start Here links; AC membership in Repairs and Comfort & Climate; filter choices derived from actual memberships; normal-flow toolbar; concise diagnostic-process link instead of the repeated long passage. URLs and service destinations remain.

All six non-All categories returned relevant cards; AC-specific combined search and category passed; no-match/reset restored All and cleared input. At 360/390 widths with scripts on/off: no overflow, no sticky toolbar, all 16 service destinations available without JavaScript, inert controls hidden without scripts. Local preview image returns 200 and Services ItemList still has 16 entries. Lint, TypeScript, link audit, production build and response regressions pass. Original C72 retained as baseline, not a post-change ranking claim. No commit/push/publication.

Evidence: ../rendering/services-revision-checks.json; services-climate-fixed-360.png; services-climate-fixed-390.png.
