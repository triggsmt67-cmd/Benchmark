# Indexing handoff reconciliation and rendering review

Checked October 23, 2026. No commit, push, deployment, Search Console change, or form submission performed.

## Rendering evidence

Tested the existing local production build on port 3001, rather than relying on Next development rendering. Six representative routes: /, /services, /services/electrical-diagnostics, /service-areas/lolo, /guides/how-to-choose-a-mechanic, /contact.

- Mobile viewport 390x844, JavaScript on and off: identical main innerText and main href lists per route. Main text lengths: 7121, 7047, 6250, 6609, 9652, 726 characters respectively. Zero content-motion wrappers at opacity zero. One H1 each.
- Additional 360x800 JavaScript-on layout checks: no document horizontal overflow on any of the six routes. Chromium reserves 15px for its scrollbar, so content/client widths are 375 and 345px respectively.
- Desktop 1440x900, JavaScript off: same main text lengths, no hidden content-motion wrappers, no document horizontal overflow.
- Captured full-page mobile screenshots for each route with scripts enabled and disabled; inspected homepage, services and contact full-page images plus readable viewport screenshots. Evidence and JSON are in rendering/.
- A service heading initially looked faint in an immediate screenshot because the independent CSS fade-in animation had only just started. A settled no-JavaScript check confirmed white text, opacity 1; refreshed electrical-mobile-nojs-viewport.png documents the settled result. CSS animations execute without JavaScript.
- Mobile navigation opens with JavaScript enabled. Without JavaScript the React toggle cannot open the menu; footer links and visible phone/hero links remain available. Directory category/search controls also depend on JavaScript, but all directory cards and their ordinary href links are present initially.
- Contact form renders with POST, an empty action (same-page POST), and React server-action hidden metadata even without JavaScript. Source uses useActionState and a server action. Do not classify it as JavaScript-only based on appearance. Delivery and actual no-JavaScript submission are untested; no mail was sent.
- Script execution and viewport overrides were restored after testing.

## Newly confirmed rendering issues to address

1. Contact email is clipped inside the card at phone widths. At 390px emulation the email extends to x=415 while the overflow-hidden card ends at x=359. Document width checks do not detect this internal clipping. Add min-width/wrapping to the email flex item; also make the contact-card phone a tel link.
2. Add a no-JavaScript mobile navigation fallback (native disclosure or visible fallback links), and explain or hide inactive directory filter controls when JavaScript is disabled. These are progressive-enhancement/usability repairs, not established indexing causes.
3. Lolo's Brake & Suspension Evaluation image raw file returns 200 locally and publicly. Local production /_next/image returns 400 at both 640 and 3840 widths; production optimized image returns 200. This is an environment-specific optimizer issue to diagnose, not a confirmed broken production image. Other images sampled loaded. Lolo also has invalid sizes strings `(max-w-1024px) 100vw, 40vw`; correct to valid CSS media syntax during the image pass. Initial broken-image collection before lazy loads settle must not be treated as a complete image audit.

No source edits were made during this rendering-review turn.

## Handoff checklist

| Item | Status | Evidence or remaining work |
| --- | --- | --- |
| Real repo and branch | Done | Desktop/Benchmark, origin triggsmt67-cmd/Benchmark, main, app under auto-repair-site. Local HEAD previously matched remote d3e9c48. |
| Actual production deployment/branch | Open | Vercel project listing shows benchmarkmissoula and benchmark tied to this repo. Detailed project read under discovered team returned 403; CLI is not installed. Need authorized access to determine domain binding, deployed SHA and branch. |
| Routes/layout/metadata/robots/sitemap/redirects | Inspected | Existing findings report and source audit. No middleware/proxy rule found. Root metadataBase is www HTTPS. |
| GET all 37 sitemap URLs | Done on live baseline | 200 HTML, canonical/H1/main text/noindex checks recorded in live-http.json. |
| Initial HTML vs rendered DOM | Sampled | Server response regression checks plus six rendered route comparisons above. Full 37-route hydrated comparison not performed. |
| Mobile client/crawler comparisons | Partial | Representative Googlebot-smartphone and InspectionTool UA GETs done; real browser mobile layout done. No verified Googlebot log analysis or full desktop/mobile UA matrix. |
| Preferred host/trailing slash/legacy paths | Done on live baseline | Four requested legacy URLs resolve via 308; host/scheme and /services/ normalize without loops. |
| Unknown URLs/status codes | Fixed locally | Base/service unknowns 404; discovered arbitrary-city 200 defect corrected locally. Valid brake-repair/missoula stays 200. |
| Bot metadata streaming/cache | Partial | Sampled UA metadata present; hosting cache/edge/firewall settings and verified bot logs unavailable. No claim of complete hosting audit. |
| Indexed/unindexed template comparison | Partial | Base services share same Markdown route, locations use different implementations. Controls included in live UA checks; six-route browser sample includes indexed guide. Full control/sibling body comparison remains open. |
| Meaningful sitemap lastmod | Done | Explicit content review dates only; no request/build freshness fabrication. |
| Confirmed Phase 2 defects | Fixed locally | Homepage electrical link, Lolo draft block/link, sitemap title, literal escape, directory category. |
| Focused regressions/build | Done for current patch | Prior lint/typecheck/build/link checks passed; eight production routes, four 404 probes, five images checked. Rendering review made no source changes. |
| Small measured cohort | Ready for content review | Contact, Services, Electrical Diagnostics, Lolo. Need owner-confirmed work examples, service scope and genuine supporting images before evidence-led additions. |
| Technician/claim review | Open | ASE, warranty, equipment, alignment/scope and absolute technical claims still require shop review. |
| Location consolidation | Deferred | No redirects/consolidation approved; need performance/backlinks/customer value evidence. |
| Deploy and verify | Deferred by user | Do not commit or publish yet. Recheck deployed responses/rendering only after an authorized release. |
| Google live tests/index requests | Deferred | After meaningful fixes are deployed; one request per changed cohort URL, retain sitemap. |
| Weekly four-week tracking | Not started | Need post-release baseline of indexing, impressions and qualified inquiries. No automation created. |

## Recommended order

1. Fix the clipped contact detail and no-JavaScript navigation/filter affordances; diagnose local image optimization and correct Lolo sizes.
2. Recheck affected mobile/no-JavaScript views and targeted response checks.
3. Review small-cohort content with actual shop evidence and obtain deployment/log visibility.
4. Review the local diff together before any commit or publication. After release, run live tests and measure indexing over time.

The technical improvements do not establish Google's selective-indexing cause or guarantee indexing.

## Subsequent repair update

The mobile email, native no-JavaScript menu, filter fallback and local Lolo optimizer issues above are now repaired and verified at both mobile widths. The schema audit also found and repaired additional defects. See `2026-10-23-mobile-and-schema-fixes.md` for the current result, evidence and remaining factual/hosting limits. Earlier findings are retained as before evidence. No commit or publication has occurred.
