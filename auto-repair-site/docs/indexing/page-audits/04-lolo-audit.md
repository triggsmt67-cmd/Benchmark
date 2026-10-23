# Lolo page audit, October 23, 2026

Decision: REVISE. Internal grade D65 (56.875/87.5 assessed points; 87.5% coverage; U12.5, NA0). Medium confidence. This is an editorial score, not a Google score or confirmed explanation for exclusion. Audited live page and local version; no website copy changed during this audit.

## Reader need and contribution

A Lolo resident needs to know whether Benchmark serves them, where the shop actually is, what it handles and how to arrange a visit. The page correctly identifies Missoula as the shop location. Its strongest potential contribution is practical visit planning for someone coming from Lolo. Repeating diagnostic slogans and attaching Highway 93 to general symptoms adds little.

Ordinary commercial service-area information overall. Individual statements about driving with brake/steering symptoms can have safety implications. Do not add advice that a particular vehicle is safe to drive, or promise savings from diagnosis.

## Scorecard

Each criterion rated 0-4. Earned = weight times rating divided by four.

| Category | Ratings | Weights | Earned | Evidence |
|---|---|---|---|---|
| Purpose/usefulness | 4,3 | 10,10 | 17.5 | Audience/location clear; practical details buried beneath repeated sales sections |
| Distinctive contribution | 2,2 | 10,10 | 10 | Lolo/Highway 93 context; little verified information specific to making this trip |
| Accuracy/evidence | U,2 | 12.5,12.5 | 6.25 | Customer volume/motives and local failure patterns unverified; broad cost and wear language |
| Trust/accountability | 3,2 | 7.5,7.5 | 9.375 | Named shop/address; process claims attributed to shop rather than independently verified |
| Clarity/editorial | 3,2 | 7.5,7.5 | 9.375 | Readable organization; forced fragments, repeated lists and generic assurances |
| Supporting information | 4,3 | 2.5,2.5 | 4.375 | Accurate descriptive title, service links and map; excessive duplicate destinations |

## Technical findings

Fresh HTTP evidence in 04-lolo-technical.json.

| Check | Result and limit |
|---|---|
| HTTP | Live/local200, no redirect observed |
| Crawl/snippet controls | No robots meta or X-Robots-Tag found; robots.txt permits route |
| Canonical | Self-canonical production URL; Google-selected canonical unknown |
| Discovery | Live/local sitemap includes URL; rendered breadcrumb and shared footer links present |
| Initial content | Main copy and FAQs in initial HTML |
| Metadata | Descriptive title and Missoula-explicit description present |
| Schema | JSON-LD parses; six FAQ answers use duplicate source arrays, currently matching by inspection. No fresh complete vocabulary or Google eligibility validation this turn |
| Mobile | Local390px check found no horizontal overflow. Image loading did not complete in sampled browser check, so current image rendering remains unverified; earlier local image repairs are not live proof |
| Em dashes | Zero in live/local extracted text |
| Live draft text | Live still exposes real-photo placeholder and suggested-alt editorial notes. Already removed locally, not released |
| Google status | Search Console inspection unavailable here; actual indexing and cause unknown |
| Performance | No fresh field-performance assessment |

## Top fixes

1. P1: Remove live draft photo notes through the already-prepared local fix at a separately authorized release. High confidence, low effort. A finished public page should not display editing instructions.
2. P1: Replace the unverified customer-volume/motive opening and local failure-pattern framing. “Common Vehicle Issues We See from Lolo Drivers” implies documented shop experience. Describe services and useful customer observations instead. High confidence, medium effort.
3. P1: Consolidate repeated symptoms and test-first explanations. The worth-driving, why-choose and clear-answers sections mostly repeat the same proposition. Keep one useful process section. High confidence, medium effort. No automatic consolidation of this URL is recommended without broader comparison.
4. P2: Correct appointment wording. The owner confirmed the form requests an appointment; it does not book a confirmed slot. Explain confirmation before drop-off. High confidence, low effort.
5. P2: Rebuild rhythm and vocabulary. Remove “No surprise repair path,” “drivability concerns,” and forced fragment strings. Vary sentence openings and lengths without a mechanical quota. High confidence, medium effort.

## Tone verdict, before proposed rewrite

TONE VERDICT: NEEDS REWRITE

What's working: Direct customer address, clear Missoula location and recognizable symptoms.
What's off: Repeated punchy fragments and three-part slogans sound staged. “No mystery. No guessing. No surprise repair path” is awkward. The page repeatedly promises clear answers instead of explaining the visit.
Overall: Use plain language and varied sentence structure. Let practical details carry the argument.

The companion proposed draft rebuilds the full main copy. It is a review draft, not an applied website change. No em dashes; contractions and sentence lengths vary. No fabricated experience or safety diagnosis.

## Claim ledger

| Claim/location | Status and evidence | Follow-up |
|---|---|---|
| Missoula shop/address | Attributed consistently to live Lolo, About and Contact pages, accessed October23 | Retain; no independent business-record check |
| Serves Lolo, drop-off | Shop-attributed; prior user confirmation supports existing drop-off policy | Retain availability; do not invent key-box/parking instructions |
| A lot of Lolo customers and their motives, hero | Unverified, no records/interviews inspected | Remove |
| Driving mix causes rapid wear, issues section | Unsupported local causal generalization | Remove |
| Diagnosis saves money/only reason to drive | Unsupported outcome/comparison | Replace with practical scheduling guidance |
| Highway93 connects Lolo/Missoula | MDT corridor material supports geography only | Does not establish wear, trip time or customer behavior |
| Approval-before-repair process | Site-attributed, not newly independently verified | Keep modest wording; owner review before release |
| Photo provenance/drop-off-area caption | Unverified by fresh image inspection | Confirm photo subject before claiming an exact drop-off area |

## Sources and interpretation

Accessed October23,2026:
- https://www.benchmarkmissoula.com/service-areas/lolo
- https://www.benchmarkmissoula.com/contact
- https://www.benchmarkmissoula.com/about
- https://ftp.mdt.mt.gov/pubinvolve/us93missoulaflorence/updates.aspx
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse

Google guidance favors helpful, original information and accurate visible content/schema. AI features have no extra technical requirements. Doorway policy is relevant context for location pages with little independent value; this audit does not establish a violation. Awkward rhythm and em-dash preferences are editorial findings, not Google penalties or proof of AI authorship. The foundation's claims about separate2026 AI reporting were not assumed current; current opened AI guidance describes Web performance reporting.

## Measurement and approval

Record exact-URL Search Console index status, selected canonical, last crawl, impressions, clicks and qualified inquiries before a separately authorized release. Compare after recrawl and over four weeks. Do not attribute movement solely to copy. No rank baseline invented, indexing request made or publication authorized. Proposed draft and business claims await review. Nothing committed, pushed or published.

## Approved local implementation

Applied the approved rewrite using the connected Write Like Trevor skill (skill://user/6a510d523e74819193b6fc8f4d08f662/write-like-trevor/SKILL.md). Removed forced slogans, repeated service lists and unsupported local customer-pattern claims. The page uses contractions, plain words and varied sentence structures. Appointment requests are distinguished from confirmed bookings. FAQ text and JSON-LD share the same three-item array. Metadata updated, canonical unchanged.

Validation: targeted ESLint, TypeScript, build, service-link audit and diff whitespace checks passed. At390px, no horizontal overflow or em dashes in article text. Dev preview opened; mobile screenshot saved in ../rendering/lolo-rewrite-mobile.png. No new Google indexing or full schema eligibility claim. Nothing committed, pushed or published.
