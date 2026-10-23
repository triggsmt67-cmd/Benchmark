# 03 of 23 - Electrical Diagnostics Google AI Search audit

**Decision: revise; hold the current safety/technical passages from a new release until corrected or reviewed by a qualified technician. Keep the URL and distinct service purpose. Internal grade D / 68, confidence medium.**

Score: 62.5 / 92.5 assessed points = 68/100. Coverage 92.5%, unverified weight 7.5, NA 0. This is our editorial assessment, not Google's quality score or an explanation of indexing.

Checked October 23, 2026 with google-ai-search-audit. Live URL: https://www.benchmarkmissoula.com/services/electrical-diagnostics. Inspected fresh live/local GETs, local production rendering, source Markdown/frontmatter/template, related service scope and primary manufacturer references. Electrical copy remains unchanged; proposed replacements below are for review.

## Reader purpose and value

Serve a driver with a repeatedly flat battery, intermittent accessories, wiring trouble or a communication/charging fault. Answer: is this the service I need, what information should I provide, and how will the shop approach the concern?

There is a real purpose distinct from engine performance and general inspection. Retain it. The symptom list and emphasis on testing before replacing parts are useful. Do not merge it into the homepage or noindex it because another search engine ranks it differently.

The content gives considerable diagnostic detail but fewer practical customer instructions. Some passages read like a generic technician explanation and several assert model-independent conclusions. A stronger version would use symptoms, the applicable diagnostic process, realistic uncertainty and owner-confirmed service details. An authentic job example could help if available; never invent one or treat it as a prerequisite for every service page.

Risk: potential YMYL, specifically warning-light/safety advice and detailed electrical testing descriptions. The requirement for qualified review applies to those consequential claims. Ordinary contact/service selection information does not need an expert byline merely for SEO.

## Scorecard

0-4 rating; earned = weight x rating / 4. U means unverified, not failure.

| Category | Criterion 1 rating/weight | Criterion 2 rating/weight | Earned/assessed | Evidence |
|---|---|---|---|---|
| Reader purpose/usefulness | 4/10 | 3/10 | 17.5/20 | Clear battery/wiring/accessory intent; practical preparation and limits could be clearer. |
| Distinctive contribution | 3/10 | 3/10 | 15/20 | Useful symptom/process differentiation, but firsthand frequency/equipment claims lack inspected job evidence. |
| Accuracy/evidence | 1/12.5 | 2/12.5 | 9.375/25 | Universal sleep-current rule lacks vehicle applicability; warning-light claims and absolute process promises need narrowing. |
| Trust/accountability | U/7.5 | 3/7.5 | 5.625/7.5 | Shop identified; actual ASE reviewer identity, credential scope and review of this material not independently verified. |
| Clarity/editorial quality | 3/7.5 | 3/7.5 | 11.25/15 | Structured headings and plain symptoms; technical abbreviations, categorical claims and editorial page-routing prose can be simpler. |
| Supporting information | 3/2.5 | 3/2.5 | 3.75/5 | Title/canonical/FAQ match purpose; more direct customer links would help. |
| Total | | | 62.5/92.5 = 68 | Safety/technical release gate overrides numerical grade. |

## Prioritized changes

### P1 - Replace universal parasitic-current thresholds

The page treats 20-50 mA as a normal range for vehicles generally and any reading over 50 mA as a failure to sleep. That omits model, equipment, operating state, sleep/wake behavior and test conditions.

Primary evidence: Subaru's March 2023 TechTIPS, pages 6-8, discusses non-disturbing clamp measurement and its own STIS procedure with a 70 mA threshold, waiting/monitoring and intermittent wake behavior. That is a manufacturer-specific example, not a new universal cutoff. International's IK0800025 bulletin also contains equipment-specific exceptions, but applies to its trucks and must not be presented as a passenger-car specification.

Fix: remove a universal number. Explain that acceptable current and settling time depend on manufacturer information and the vehicle. Have a qualified technician verify any retained model-specific detail. Do not simply replace 50 with 70.

Suggested replacement:

> Acceptable key-off current and the time needed for modules to settle vary by vehicle and operating conditions. Measurements need to be compared with the manufacturer’s information for that vehicle. A single current reading does not identify the failed component.

### P1 - Rewrite the warning-light FAQ without a blanket safety conclusion

The current FAQ groups ABS and airbag warnings into one statement that an entire safety system is offline while the vehicle otherwise behaves normally. The meaning and recommended response depend on the exact warning, vehicle and fault; the generic page cannot assess safe operation.

Ford's warning-lamp manual distinguishes an airbag malfunction from an ABS warning, and adds conditions when discussing braking function. It also states the original vehicle manual is the primary source. This evidence supports narrowing the page; it does not diagnose the reader's vehicle or imply every manufacturer follows Ford's exact behavior.

Suggested replacement answer:

> A warning light should be checked even if you haven’t noticed a change in how the car feels. The action to take depends on the exact warning and the vehicle. Follow the instructions in your owner’s manual; a generic web page cannot establish whether it is safe to continue driving. Tell the shop which light or message appeared and any changes you’ve noticed.

When applied, update the shared FAQ source so rendered answers and FAQPage markup stay identical. Current schema matching does not establish factual accuracy.

### P1/P2 - Confirm the actual shop process and remove unnecessary procedural absolutes

The page describes one in-series meter method and full-output alternator testing as the shop's general process. Subaru's technical publication discusses an alternative clamp method and cautions that test conditions can affect results. Neither source establishes what Benchmark actually does.

Fix: describe the purpose of the tests and use vehicle-appropriate manufacturer procedures. Ask Dan/David to confirm the actual tools, services and handling of intermittent complaints. Avoid making a public service page into an incomplete testing instruction. Do not assert a single method is always used, that a cause is always found, or that every part order follows an identical sequence.

Retain the useful testing-before-parts principle as an approach, with honest limits where needed. The page's frequency claims about common failures also need actual shop evidence or less categorical wording.

### P2 - Add practical preparation and simplify service selection

Give a customer useful details they can provide without testing anything: vehicle year/make/model, which accessory or warning is affected, how long the vehicle sat, when the symptom occurs and whether accessories were recently installed. Subaru's customer-interview section supports the value of understanding conditions; this is not a diagnosis.

Link a no-start concern to /services/car-wont-start and engine-running symptoms to /services/engine-and-performance. Preserve overlap rather than requiring customers to diagnose their own category. Remove the self-link on parasitic draw; it does not help navigation. Frontmatter lists related pages, but this service template does not render a RelatedServices block; add useful links directly or implement a purposeful shared block later.

### P2 - Verify reviewer and experience claims

The page displays a July 27 review date and ASE Master Technician review attribution. The About page repeats that claim; repetition is not independent verification. Confirm who reviewed this exact material, whether their credential is current and relevant, and the actual review date. Do not invent names, review history, case results or a new review date for freshness.

## Proposed customer-focused opening

Electrical problems can show up as a battery that repeatedly goes flat, accessories that work only sometimes, or faults in wiring and module communication. Tell us what happens and when you notice it so we can discuss the appropriate diagnostic visit.

Suggested practical block:

- Your vehicle’s year, make and model.
- The warning light or accessory involved.
- Whether the concern happens while driving, starting or after the vehicle has been parked.
- Any recent repair, battery replacement or aftermarket accessory installation.

This draft adds no diagnostic guarantee, fixed testing time or vehicle-safety assurance. Detailed process wording remains subject to shop confirmation. Title/description already describe the service adequately; a new slug or keyword-heavy title is not needed.

## Technical checks

| Check | Status/evidence |
|---|---|
| HTTP | Fresh live and local GET: 200 HTML at expected route. |
| Canonical/noindex | One HTTPS www self-canonical; no observed robots noindex or X-Robots-Tag. |
| Main/metadata | One main landmark, one H1, descriptive existing title. No additional title rewrite justified by technical evidence. |
| Discovery | In earlier live sitemap baseline. Homepage electrical-card destination and Services navigation were repaired locally, still unpublished. |
| Rendering | Initial text/FAQs present; local mobile 390px rendering has no horizontal overflow. Earlier 360/390 script-off checks also cover this route's shared template. |
| Schema | Service/WebPage/FAQPage/BreadcrumbList graph present; prior local sitewide structural checks passed. The problematic safety answer is faithfully reproduced, so its content must be corrected as well as markup. |
| Google index status | Current status unverified. Handoff records a successful October 23 Google live test and summary exclusion; not proof of today's index state or the exclusion cause. |
| Performance/hosting | No new field-performance test or verified Googlebot/firewall log access. |
| Scope comparison | Electrical, no-start and engine performance have distinguishable intent. Search retrieval showed an older engine-page version; use current raw responses/repository rather than that cached extract for edits. |

Evidence: 03-electrical-technical.json. Source edits were not made to electrical-diagnostics.md during this audit.

## Claim ledger and review gate

| Claim | Status | Required action |
|---|---|---|
| Universal sleep-current cutoff | Unsupported generalization, manufacturer procedure differs | Remove universal threshold; manufacturer-specific instructions only if necessary and applicable. |
| Entire ABS/airbag system disabled, otherwise normal vehicle | Overbroad and consequential | Replace with warning-specific, manual-dependent advice and obtain qualified technical review for retained safety claims. |
| Particular test procedure/tools used by Benchmark | Attributed to site, not owner-confirmed here | Shop confirms process/scope; avoid expanding it. |
| Most frequent failure patterns | No actual shop data inspected | Qualify or supply documented evidence; no invented case study. |
| Reviewer identity/credential/date | Unverified | Confirm actual review; no fabricated authority badge or fresh date. |
| Structural indexability | Sampled checks pass | Not proof of Google's selected canonical or indexing decision. |

Purpose pass; main-content usefulness revise; consequential accuracy/safety gate hold for the current passages; reviewer verification pending; publication approval pending. This gate is an internal editorial policy, not a claimed Google manual action. A narrower replacement that removes the unsupported conclusions can be prepared for review without waiting to invent evidence.

## Measurement and primary sources

After an approved rewrite, check FAQ body/schema agreement, service links, metadata and mobile/script-off rendering. After a separately authorized release, refresh Google inspection and request indexing once where appropriate. Track this exact URL's index status, impressions and qualified inquiries alongside changed dates for four weeks. No indexing or ranking guarantee. No indexing request or automation made here.

Primary sources, accessed October 23:

- https://www.benchmarkmissoula.com/services/electrical-diagnostics
- https://static.nhtsa.gov/odi/tsbs/2023/MC-10235292-0001.pdf - Subaru March 2023 TechTIPS, pages 4-8; manufacturer-specific professional guidance, not a current universal vehicle specification.
- https://static.nhtsa.gov/odi/tsbs/2018/MC-10130766-9999.pdf - International IK0800025, revised February 2, 2018; truck/equipment applicability limitation.
- https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G1448512&Uid=G1448459&buildtype=webIt&countryCode=USA&div=f&languageCode=en&userMarket=USA&vFilteringEnabled=False&variantid=2458 - Ford warning-lamp guidance; vehicle-specific scope.
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content - source for reliability/reader focus, not our numerical score or the reason for this page's indexing status.

The next page in the 23-page queue is Lolo, after this audit's proposed corrections are reviewed. Twenty individual audits remain pending.

## Approved rewrite applied locally, October 23

The user authorized the technical rewrite and fresh web verification. Replaced universal current thresholds and broad warning-light conclusions with vehicle-specific explanations. The page now helps customers record when a fault occurs, what stopped working, parking duration and recent changes. No invented shop case study, equipment claim or failure-frequency claim was added.

Primary-source verification used Subaru bulletin 07-236-25 (2025), Ford warning-lamp instructions and Fluke electrical troubleshooting guidance. Each source is linked in the page with applicability limits:

- https://static.nhtsa.gov/odi/tsbs/2025/MC-11024858-0001.pdf
- https://www.fluke.com/en-us/learn/blog/automotive/electrical-automotive-troubleshooting
- Ford owner-manual URL listed above.

Tone review: original NEEDS REWRITE; revised copy uses concrete customer observations, direct language and no em dashes. Removed stock promotional phrasing, unsupported technical certainty and generic closing copy. This is an editorial review, not a claim about automated AI detection.

Removed the automatic ASE-review badge and reviewedBy/lastReviewed schema for this page because source research does not establish technician approval of the rewritten copy. No new review date was invented. Other pages retain their existing behavior. FAQ markup uses the same answers as the visible page.

Validation passed: lint (one existing unrelated warning), TypeScript, service-link audit, production build, indexing-response checks and all 40 schema-route checks. Browser checks at 360, 390 and 1440 pixels found no horizontal overflow or em dashes in main text. Main content remained visible with JavaScript disabled. Evidence: ../rendering/electrical-rewrite-checks.json and electrical-rewritten-body-mobile.png.

D68 remains the pre-rewrite internal baseline, not a new score or an explanation of Google indexing. Nothing committed, pushed or published.
