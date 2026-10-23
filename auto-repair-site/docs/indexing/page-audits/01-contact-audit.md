# 01 of 23 - Contact page Google AI Search audit

**Decision: revise lightly. Internal content grade: C / 78. Confidence: medium.**

Assessed 68.125 of 87.5 available assessed points, normalized to 78/100. Coverage 87.5%; unverified weight 12.5; not-applicable weight 0. This is our editorial rubric, not a Google quality score, penalty finding, indexing likelihood or rank forecast.

Date: October 23, 2026. Skill: google-ai-search-audit. Runtime source: Desktop/Benchmark/auto-repair-site. URL: https://www.benchmarkmissoula.com/contact. Audited the current live content and the local candidate with earlier technical fixes; new copy below is a proposal, not applied.

## Finding

This page has a legitimate independent purpose: help someone contact this specific shop and request service. It already supplies the business identity, practical contact details and a usable request structure. No evidence establishes that it is too short, needs a case study, or needs a lengthy FAQ to deserve indexing. Do not convert it into another general auto-repair landing page.

Its principal editorial weakness is the distinction between requesting a visit and confirming a booking. Clarify that workflow, make drop-off instructions actionable without inventing logistics, and give readers clear contact choices. Those changes improve user expectations; none is a proven explanation for Google's selective indexing.

The handoff records an inconsistent Google reporting baseline: Discovered classification and N/A crawl date, but historical successful Googlebot fetches and a successful October 23 inspection test. That is supplied evidence, not a new Search Console inspection. Current Google index status and selected canonical are unverified in this audit. User-reported Bing/ChatGPT visibility is not an independently measured baseline and does not resolve Google's processing.

## Reader need, purpose and risk

Audience: Missoula-area drivers ready to contact the shop, ask about a vehicle concern or request an appointment. Primary question: how do I reach Benchmark, where is it, and what happens after I send this form?

Distinctive value: this shop's contact channels, location, opening policy and request workflow. A functioning contact tool is meaningful original utility; it does not need to mimic an editorial feature.

Risk: ordinary commercial contact information, with potential safety risk if we add driving/repair advice. No safety recommendation is needed here. Privacy policy review is a separate matter; do not invent consent, response-time guarantees, repair availability or emergency service.

## Reproducible scorecard

Each criterion rating is 0-4; points = weight x rating / 4. U is unverified, not zero.

| Category | Criterion 1 rating / weight | Criterion 2 rating / weight | Earned / assessed | Evidence |
|---|---|---|---|---|
| Reader purpose/usefulness | 4 / 10 | 3 / 10 | 17.5 / 20 | Contact intent clear; request and confirmed appointment need sharper distinction. |
| Distinctive contribution | 3 / 10 | 3 / 10 | 15 / 20 | Specific shop contact details and a vehicle-request tool; practical drop-off/arrival guidance can be clearer. |
| Accuracy/evidence | U / 12.5 | 3 / 12.5 | 9.375 / 12.5 | Owner confirmed request-only and existing after-hours policy during this turn; NAP, precise key-box location, hours and delivery remain independently unverified. |
| Trust/accountability | 3 / 7.5 | 3 / 7.5 | 11.25 / 15 | Real accountable business named with contact/About/Privacy access. Explain form use near submission rather than requiring footer exploration. |
| Clarity/editorial quality | 3 / 7.5 | 3 / 7.5 | 11.25 / 15 | Scannable layout; broad scheduling language and unbounded speed language could set unclear expectations. |
| Supporting information | 3 / 2.5 | 3 / 2.5 | 3.75 / 5 | Accurate-purpose headings and entity details; title can be more descriptive, directions can be easier to reach. |
| Total | | | 68.125 / 87.5 = 78 | Coverage 87.5%; ordinary business-fact verification remains open. |

## Technical status - separate from grade

Fresh raw GET checks for live and local are saved in 01-contact-technical.json.

| Check | Status | Evidence and boundary |
|---|---|---|
| HTTP/fetch | Pass | Both /contact responses 200 text/html at expected URL. |
| Robots/noindex/snippet | Pass for inspected surfaces | Live robots allows /; no X-Robots-Tag or robots noindex on either response; no observed snippet suppression. Hosting/firewall treatment of verified Googlebot remains unverified. |
| Canonical | Pass for supplied canonical | Exactly one www HTTPS self-canonical. Google's selected canonical unverified. |
| Actual index status | Unverified currently | Handoff's supplied record is not refreshed by this audit. |
| Initial main content | Pass | Contact content and links occur in initial HTML; earlier production-mode script-off rendering confirmed availability. |
| Landmarks | Issue | Two main elements on live and local: root layout wraps a second main in Contact. Change inner main to section or div. This is a semantic/accessibility correction, not a demonstrated indexing block. |
| Discovery | Pass | /contact is in the live sitemap and linked through site navigation/footer/CTAs. |
| Mobile | Local pass, release pending | Previous production-mode 360/390 checks confirm wrapped email, tel link and native menu locally. These changes are not live yet. |
| Metadata | Revise, low priority | Existing title is broad. Use a concise service-request/contact title; do not present metadata rewriting as an indexing fix. |
| Schema | Local structural checks pass | ContactPage/business graph passed earlier sitewide vocabulary audit. Business-fact verification and Google validation remain separate. Shared schema corrections are not live yet. |
| Media/map | Secondary/unverified fully | Map iframe has title/lazy loading. Handoff map-resource failures were secondary; not evidence that main content is inaccessible. No genuine shop photo is required solely to lengthen Contact. |
| Form delivery | Unverified | Server action inspected; no real submission made, no email sent. A rendered form does not prove delivery. |
| Performance | Unverified | No new Lighthouse/CrUX or field data run. Do not turn successful HTTP/render checks into a performance claim. |

## Ranked corrections

1. **P1: make request status explicit.** Replace booking-like CTA wording with a request label and a short explanation that the shop confirms availability. High confidence, small effort; owner confirmed request-only behavior. This is a user-expectation repair, not a proven indexing cause.
2. **P2: make practical contact details immediately useful.** Keep earlier email wrapping/tel/menu fixes. Provide a directions action using a verified shop destination. Retain the existing after-hours policy and next-business-day receipt confirmation; invite a call for drop-off instructions. Key-box location, vehicle parking and security instructions remain unspecified and must not be invented. High confidence; exact operational detail still needs owner input.
3. **P2: improve form context and the next step.** Explain what information helps and link Privacy adjacent to the form. Replace the open-ended speed assurance with the actual review/confirmation sequence. No guaranteed response time. High confidence, small effort.
4. **P2: repair nested main and clarify metadata.** Use one main landmark; propose the metadata below. Moderate user/navigation benefit; no known direct indexing effect. High confidence in the observed defect, small effort.
5. **P3: measure the revised page after a deliberate release.** Preserve URL and canonical. Compare index inspection, branded/contact impressions and qualified requests over time. Do not repeatedly request indexing or rewrite weekly merely because status is unchanged.

## Proposed copy - ready for review, not implemented

**Title:** Contact & Service Requests in Missoula | Benchmark Automotive Service

**Meta description:** Contact Benchmark Automotive Service in Missoula to request auto repair or diagnostics. Call the shop, view hours, or send your vehicle details online.

**H1:** Contact Benchmark Automotive Service

**Opening:**
Request automotive service at our Missoula shop. Call (406) 317-1405 or tell us about your vehicle below. Sending the form requests an appointment; we’ll contact you to confirm availability.

**Form introduction:**
Tell us what you drive and what you’ve noticed. Include any warning lights, noises, or conditions that help explain the concern.

**Button:** Request an Appointment

**Beside the form:**
We’ll use these details to respond to your service request. Read our Privacy Policy.

**After-hours block:**
After-hours drop-off is available. Call for instructions before leaving your vehicle. We’ll confirm receipt the next business day.

**Next-step sequence:**
1. We review your vehicle details and request.
2. We contact you to discuss the concern and confirm availability.
3. We confirm the appointment details with you.

Use existing business facts only after final confirmation; exact box/parking instructions are intentionally not supplied here. The draft does not assert a fixed response time, instant booking, 24/7 help or a vehicle diagnosis.

## Claim ledger and readiness gates

| Claim | Evidence/status | Remaining check |
|---|---|---|
| Name/address/phone/email | Attributed to current Contact/About and existing config; fetched Oct 23 | Owner/Business Profile consistency check before release; Maps short link could not be inspected by web tool. |
| Form requests an appointment | Direct user confirmation this turn | Real delivery test separately, without assuming confirmation emails or instant booking. |
| After-hours availability/receipt timing | Existing Contact content plus user confirmation | Exact key-box, parking and security instructions not specified. |
| Weekday hours/Saturday policy | Current site statement; consistent across Contact/footer/schema weekday data | Owner confirmation of current schedule, not independently established. |
| Prompt response | No precise response window verified | Remove speed implication, describe sequence. |
| Credentials/reviews | Not required to assess this contact workflow; linked About assertions not independently validated | Do not add credential badges, ratings or invented team profiles as a contact-page requirement. |
| Bing/ChatGPT ranking | User report | Optional later query/date/location tracking; no inference about Google. |

Gates: purpose pass; evidence partial/unverified for routine facts; accountability pass for identified business but details unverified; main content revise lightly; safety not applicable to proposed contact copy; cross-surface consistency requires proposed metadata/copy review; human approval pending. Nothing in this audit establishes fabricated evidence or a critical contact-page blocker requiring a wholesale hold.

## Google guidance vs our recommendations

Official guidance: Google supports useful, reliable information appropriate to the page purpose. AI-feature eligibility uses foundational Search requirements and still does not guarantee indexing. The people-first guide discourages writing to an assumed preferred word count. None of these sources establishes Contact's non-indexing cause.

Internal recommendation: make this utility page easier to use and more precise rather than padding it. The numerical score and proposed work sequence are our editorial policy.

Hypothesis to test: clearer workflow and practical details improve user satisfaction and qualified requests. Indexing may or may not change. Existing cross-engine visibility is reason to preserve useful content, not proof of identical selection criteria.

Source freshness: official pages reopened October 23. The skill foundation's statement about dedicated generative-AI reporting differs from the AI-features page's current description of reporting within Web performance. Do not assume a dedicated report exists in this property; inspect the actual interface before recommending that measurement.

## Measurement and next page

Before release, record current Search Console inspection and performance for this exact URL, plus request/call baseline if available. After an authorized release, verify live responses, mobile layout and real delivery; run the Google live test and make one indexing request if appropriate. Review indexing/impressions/clicks and qualified inquiries weekly for four weeks, without claiming causation or guaranteed improvement. No automation, submission or release was created.

Next individual audit: /services, then /services/electrical-diagnostics, then /service-areas/lolo. The remaining 22 URLs have no page-specific verdict from this audit.

## Sources

- Live Contact, checked Oct 23: https://www.benchmarkmissoula.com/contact
- Related About: https://www.benchmarkmissoula.com/about
- Existing Privacy context: https://www.benchmarkmissoula.com/privacy (no legal compliance conclusion made)
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Supplied handoff: /Users/trevorriggs/Downloads/benchmark-indexing-codex-handoff.txt
- Local rendering evidence: ../rendering/mobile-fixes-results.json; local schema result: ../schema-audit.json
- Relevant implementation: src/app/contact/page.tsx, src/app/layout.tsx, src/components/forms/contact-form.tsx, src/app/actions/contact.ts, src/lib/siteConfig.ts

## Approved implementation update

Trevor authorized these changes after reviewing the audit. Applied locally: proposed title/description/H1 and introduction; request-appointment button; form Privacy link and practical introduction; confirmed after-hours wording; revised next-step and success follow-up wording; one main landmark and sequential headings. Shared form server action/delivery behavior was not changed or submitted.

Validation: lint (one existing warning), TypeScript and production build pass; updated response regressions pass. Production-mode browser checks at 360/390 with JavaScript on/off confirm one main, request wording, button, Privacy link and no overflow. Evidence: ../rendering/contact-revision-checks.json and contact-revised-mobile.png. No commit, push or publication. The original content score is retained as the baseline; no post-change ranking or indexing result is claimed.
