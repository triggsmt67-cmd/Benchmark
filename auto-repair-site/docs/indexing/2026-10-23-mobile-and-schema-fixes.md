# Mobile, no-JavaScript and structured-data fixes

Completed locally October 23, 2026. No commit, push, deployment, Search Console request or email submission.

## Mobile repairs and verification

- Contact email now wraps inside its card using min-w-0/break-all; the contact-card telephone is a tel link.
- Header uses native details/summary so navigation opens without JavaScript. With JavaScript enabled, following a menu link also closes it. The disclosure exposes its expanded state natively and uses a 44px control.
- Without JavaScript, the directory hides inert search/category controls and displays a short explanation. All 16 service destinations and six guide destinations remain in ordinary HTML links. With JavaScript enabled, Repairs filtering and electrical search were exercised successfully.
- Copied the existing brake/suspension WebP unchanged to a URL-safe filename, brake-suspension-evaluation.webp. Lolo uses this copy. Kept the old URL/file for compatibility. Corrected its three malformed sizes attributes to `(max-width: 1024px) 100vw, 40vw`.
- Original ampersand-named image returned 400 through the local optimizer; new path returns 200 through the same optimizer. This identifies the filename/path as a working remediation, not a claim about the precise Next.js internals causing it. All three Lolo images were observed loaded using 640px optimized variants on mobile.
- Production-mode browser checks covered Contact, Services and Lolo at 360px and 390px, JavaScript enabled and disabled: 12 combinations. No document overflow, no invisible content wrappers, contact email within card, filters visible only with scripts. Service-link counts remained identical with scripts disabled.
- Native mobile menu was opened and its Services link followed with script execution disabled. Screenshots show the expanded menu, fixed contact email and loaded Lolo image. Browser emulation was reset afterward.

Evidence: rendering/mobile-fixes-results.json and rendering/*fixed.png. The screenshot series from the previous review is retained as before evidence.

## Sitewide schema scope

Audited every current page route: 37 sitemap routes plus Privacy, Terms and the valid brake-repair/Missoula page, totaling 40. Thirty-seven emit JSON-LD. /guides, /privacy and /terms currently have no custom JSON-LD; that is not an error or a requirement to invent a rich-result type.

The local audit checks JSON parsing, known types/properties against the official Schema.org vocabulary, property domains, explicit nested value types, enumeration URLs, top-level duplicate entity IDs, local entity references, breadcrumb sequence/final destination, offer price/currency formatting, and FAQ question/answer text outside the JSON-LD scripts. It is not a substitute for Google's Rich Results Test, a complete RDF validator, or factual review by the business.

Before corrections, detected technical/content mismatch findings affected 11 page responses. After corrections, all 40 production-mode page responses pass these checks. All 113 remaining marked-up FAQ question/answer pairs occur in the initial page HTML; collapsed native details retain their answers in HTML. See schema-audit-before.json and schema-audit.json.

## Schema corrections

1. Removed incorrect geographic Wikidata sameAs links from all shared city/service/business graphs. Direct Wikidata entity-label lookup showed, among others, Q189508 = Glorious Revolution, Q2213768 = Saladin Schmitt, Q2574041 = Polotsk Offensive, Q2481636 = Cardiophorus gomerensis, Q2353139 = Assala, Q2212351 = Ron Rose, Q14704879 = Hyde Memorial Observatory, Q10825316 = Thorictus becharensis. Three other IDs returned no English label and were also removed rather than guessed. Existing location-specific Wikipedia links remain.
2. Removed five schema-only Missoula FAQ entries absent from its page. Did not publish that hidden content or its additional claims to repair the mismatch.
3. Made the existing service/city FAQs native details/summary so the two answers are in initial HTML and usable without JavaScript.
4. Moved guide reviewedBy from Article to an associated WebPage, the type on which Schema.org defines it. Linked the Article and WebPage by mainEntity/mainEntityOfPage.
5. Removed generic guide Article image claims for shop photos not shown as guide article images. No replacement image claims invented.
6. Removed termsOfService from Offer (it is defined for Service). Kept the exact displayed disclaimer in offer description. Removed the nonexistent schema.org/NewCustomer enumeration and unsupported hardcoded InStock claim.
7. Removed the incomplete Saturday opening-hours object, which gave no opening or closing time. The visible Saturday by-appointment policy stays; weekday machine-readable hours remain.
8. Preserve quotes in schema text through normal JSON escaping instead of converting every straight quote to an opening curly quote.
9. Existing lastReviewed data now uses WebPage.lastReviewed, rather than claiming it is an Article or WebPage modification date. No fresh dates invented; sitemap membership/timestamps unchanged during this pass.

## Remaining factual and hosting limits

- Schema business details still derive from existing site data. Credentials, reviewer status, service scope, offer prices/eligibility, hours, geographic coverage, coordinates and map destination were not independently confirmed with the owner. Existing unsupported claims require the planned shop review; technical validity is not factual verification.
- Service and guide content safety/accuracy review remains separate. No page-wide editorial rewrite performed.
- No Google Rich Results Test or post-release live inspection was run. Google has removed FAQ rich results as of May 2026; retaining accurate FAQPage semantics is not a promise of a special search appearance or indexing benefit.
- Production hosting binding/firewall/verified crawler logs remain unverified because detailed Vercel access was denied in the earlier review.
- Indexing cause remains unresolved. These repairs fix reproducible defects and improve consistency; do not claim they guarantee indexing.

## Validation

- npm run lint: pass, one pre-existing unused-variable warning in audit-service-links.mjs.
- npx tsc --noEmit: pass.
- npm run audit:links: pass.
- npm run build: pass (45 generated outputs including restored icon).
- node scripts/check-indexing-responses.mjs: pass against local production server, including native menu markup, no-JavaScript filter fallback, corrected image request, eight page checks and four 404 cases.
- python3 scripts/audit-page-schema.py http://127.0.0.1:3001: 40 pages, zero detected errors; three informational absent-schema notices.
- git diff --check: pass.

## Primary references

- https://schema.org/version/latest/schemaorg-current-https.jsonld
- https://schema.org/reviewedBy
- https://schema.org/termsOfService
- https://schema.org/Offer
- https://schema.org/FAQPage
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/updates (May 7 FAQ rich-result retirement and June documentation removal)
- https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q189508%7CQ2213768%7CQ2493393%7CQ2398418%7CQ2574041%7CQ6859871%7CQ2481636%7CQ2353139%7CQ2212351%7CQ14704879%7CQ10825316&props=labels&languages=en&format=json
