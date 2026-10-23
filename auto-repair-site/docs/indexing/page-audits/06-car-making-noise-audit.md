# Car Making Noise audit, October 23, 2026

Decision: HOLD current driving/urgency advice for correction; REVISE the page. Internal grade D62 (54.375/87.5 assessed points;87.5% coverage; U12.5, NA0). Medium confidence overall, high confidence in removing blanket safe-driving timelines. This is not a Google score or indexing diagnosis. Audit only; noise page unchanged.

## Reader need and useful contribution

A driver hears a new noise and wants to know what to report, how to arrange inspection and whether to seek immediate help. The strongest useful angle is recording the conditions when the sound occurs, without diagnosing by sound or advising another week of driving. The existing symptom coverage is useful but repeated across lists, long mechanical explanations and process sections.

Potential YMYL at claim level: brake, suspension and engine driving advice could affect safety. Qualified review of retained consequential advice is required under our internal editorial policy.

## Scorecard

Ratings0-4; each earned value = weight times rating divided by four.

| Category | Ratings | Weights | Earned | Evidence |
|---|---|---|---|---|
| Purpose/usefulness | 4,3 | 10,10 | 17.5 | Clear problem and symptoms; urgency information unreliable |
| Distinctive contribution | 2,2 | 10,10 | 10 | Mostly general component explanations; local experience claims unverified |
| Accuracy/evidence | 1,U | 12.5,12.5 | 3.125 | Fixed driving timelines and conflated combustion terms; business claims unresolved |
| Trust/accountability | 3,2 | 7.5,7.5 | 9.375 | Named organization; reviewer/date, fee credit and shop procedures unverified |
| Clarity/editorial | 3,2 | 7.5,7.5 | 9.375 | Clear headings but dense paragraphs and repeated diagnosis-first framing |
| Supporting information | 4,4 | 2.5,2.5 | 5 | Relevant service links and title/location |

## Prioritized fixes and claim ledger

Sources accessed October23,2026. Unsupported means unverified here, not proven false.

1. P0: Remove “can be driven on briefly,” “within a week,” and same/next-day deadlines as general advice. A noise alone does not establish remaining component life or safe driving. MOOG describes severe ball-joint wear leading to separation and loss of control. Recommend contacting the shop about the actual symptoms, without instructing customers to drive a potentially unsafe vehicle to the shop. High confidence; low effort.
2. P1: Confirm diagnostic-fee policy. FAQ says the fee is applied toward any repair. No owner policy evidence inspected. Do not publish an unconditional credit promise without confirmation. High confidence; low effort, owner-dependent.
3. P1: Remove unsupported local claims: harder than most regions, cold sounds inevitably becoming year-round, December damage surfacing in March/April, spring busiest season. No comparative wear data or booking records inspected. High confidence; low effort.
4. P1: Correct “pre-ignition (detonation).” NGK explicitly treats these as separate events. Better omit the detailed combustion taxonomy from this customer page. Belt-driven accessories also vary by vehicle; do not say one belt failure universally stops alternator, power steering and cooling fan. High confidence; low effort.
5. P2: Rebuild around observations rather than repeated mechanical catalogues. Remove the unfinished sentence “More detail on brake noise patterns and causes.” Verify actual shop tools/procedures and reviewer date before repeating them. High confidence; medium effort.

Other claim limits: not all pads use audible metal indicators; noises can have multiple causes. The existing list must not become a symptom-to-part diagnosis. A road test should not be promised before assessing whether the vehicle is safe to road test. “Diagnostic cost is low” is an unsupported price/value comparison.

## Write Like Trevor pass

Voice reference: skill://user/6a510d523e74819193b6fc8f4d08f662/write-like-trevor/SKILL.md, read in this chat.

Needs rewrite. Keep recognizable sounds, direct address and the admission that a sound is not a diagnosis. Cut “Identifying the right component is the job,” repeated guesswork contrasts, textbook paragraphs, seasonal storytelling presented as shop experience and overly neat inspect/test/confirm/repair sections. Use contractions and let sentence length follow the point. Avoid mechanically repeating “We” or “If your car” at the start of every sentence. Zero em dashes in the source Markdown; numerous spaced hyphen asides remain. None of these editorial patterns proves AI authorship or a Google penalty.

## Proposed wording

Suggested H1: Car Noise Diagnosis in Missoula

Opening:
“A new grinding, clunking or rattling sound can be hard to describe. Start with when you hear it: while braking, turning, going over a bump or starting the car.

Benchmark Automotive Service checks vehicle noises at our Missoula shop. Tell us what changed and whether you've noticed any difference in braking, steering or engine operation.”

Suggested structure:
- When do you hear the noise?
- What to tell us before an inspection
- How the shop checks the problem
- Ask about inspection cost and availability
- Request an appointment

Replacement urgency passage:
“A sound alone can't tell you whether the car is safe to drive. Contact the shop and describe any changes in braking, steering or vehicle behavior before deciding how to bring it in. Follow the instructions for any warning light or message in your owner's manual.”

Replacement fee FAQ, pending owner details:
“Ask about the diagnostic charge when you contact the shop. The work needed to trace a noise can vary. Confirm the cost and whether any diagnostic fee is credited toward repairs before authorizing service.”

Original contribution: a practical observation checklist, including when the noise began, whether vehicle speed changes it, where it seems to come from and any changes in handling. Do not instruct customers to reproduce a dangerous condition or record while driving. No fabricated case study or testimonial.

## Technical findings

Fresh evidence in 06-car-making-noise-technical.json. Live/local return200, production self-canonical, no robots meta or X-Robots-Tag observed. Body text present in initial response and JSON-LD parses. Web extraction tool failed on live URL, so raw live HTTP response and local source were used instead. Actual Google index status, selected canonical, Googlebot logs, performance and fresh mobile rendering unverified. No full schema vocabulary or rich-result eligibility check this turn. FAQ/body safety claims must be corrected together. Existing review badge/date does not establish actual review; do not reuse it as evidence for rewritten copy. No special AEO schema required.

## Sources and boundaries

- https://www.moogparts.com/parts-matter/symptoms-of-bad-ball-joints.html
- https://ngksparkplugs.com/wp-content/uploads/2021/01/2019-Digital-Automotive-Spark-Plug-Catalog_opt_secured.pdf
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/ai-features

Google pages were reopened during the immediately preceding page audit in this same session. Google guidance supports reliable helpful content and ordinary technical eligibility, not our numerical score or voice preferences. Manufacturer sources establish risks/design distinctions; they do not diagnose an individual vehicle.

## Measurement and approval

After separately authorized correction/release, verify exact-URL Search Console status, canonical and crawl date, then observe impressions, clicks and qualified inquiries after recrawl and over four weeks. No baseline invented or indexing request made. Technical review and fee-policy confirmation remain unresolved. Proposed correction awaits user approval; no noise-page edits, commits, push or publication.

## Approved local rewrite applied

User confirmed diagnostic fee credit toward repairs. Preserved that policy in body and FAQs. Applied Write Like Trevor: practical observations, contractions, varied sentence rhythm and no em dashes. Removed blanket driving grace periods, seasonal shop-history claims, combustion taxonomy and universal accessory claims. Guidance no longer establishes safety from sound alone; altered braking/steering or instability calls for safely pulling over and arranging assistance. No dangerous reproduction or phone recording requested.

New H1: Car Noise Diagnosis in Missoula. Old technician review date/badge/schema claims removed for this researched rewrite, without implying fresh technician approval. Three FAQs match visible answers and share frontmatter source.

Validation: production build/TypeScript, service-link audit, diff check; mobile360/390 without horizontal overflow; zero main-text em dashes and FAQ/schema agreement. Preview opened and screenshot saved ../rendering/car-noise-rewrite-mobile.png. Nothing committed, pushed or published.
