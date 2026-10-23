# Benchmark Automotive website

## October 23, 2026 handoff

Repository: https://github.com/triggsmt67-cmd/Benchmark, branch `main`. App directory: `auto-repair-site`. Local checkout: `/Users/trevorriggs/Desktop/Benchmark/auto-repair-site`. Use this checkout, not the ChatGPT project mirror. Today's user authorized committing and pushing the accumulated changes at end of day. Git push and live deployment are separate verification steps; check production before requesting indexing.

### Completed today

- Twelve of the 23 handoff pages audited and approved revisions applied: Contact, Services, Electrical Diagnostics, Lolo, AC/Heating, Car Making Noise, Engine Overheating, Fluid Services, General Maintenance, Oil Change, Our Diagnostic Approach and Pothole Damage Inspection.
- Applied Write Like Trevor; removed em dashes, unsupported technical certainty and generic local experience claims. Added owner-confirmed process and real experience. Internal grades in audit files are PRE-rewrite baselines, not Google's scores or revised scores.
- Restored missing tracked images; fixed Lolo image URL/optimizer, home electrical link, Engine & Performance category, invalid service/city routes returning200, sitemap title and initial-motion visibility.
- Mobile email wrapping, native no-JavaScript menu, no-JavaScript directory links/filter explanation, directory filters/category handling and contact request wording repaired.
- Sitewide schema corrections: wrong city Wikidata references removed; visible/schema FAQ alignment; Article review metadata relocated; unsupported offer properties/claims removed. Rewritten service pages suppress automatic technician-review badges/schema and historical review dates because web research is not actual technician signoff.
- Oil-service coupon has an asterisk and clear vehicle/oil/filter/quantity exclusions, pricing confirmed before service. Shared coupon affects Oil Change, General Maintenance and cold-weather guide.

### Resume here

Next page: `/services/pre-purchase-inspection` (#13). Run Google AI Search Audit and Write Like Trevor. Check technical/safety statements and ask for actual Benchmark details. Present audit, get rewrite authorization, apply, check mobile and open preview. Continue one page at a time. Eleven page-specific audits remain:

1. Pre-purchase Inspection
2. Suspension & Steering
3. Vehicle Inspection
4. Bonner
5. East Missoula
6. Frenchtown
7. Milltown
8. Missoula (already received shared/schema fixes, full editorial audit still pending)
9. Orchard Homes
10. Guides index
11. Site Map

See [complete audit queue](docs/indexing/page-audits/README.md), individual reports and source limitations there. The original supplied handoff is `/Users/trevorriggs/Downloads/benchmark-indexing-codex-handoff.txt`; it lists23 reported exclusions, not independently confirmed current exclusions. Google index status/canonical selection and exclusion cause remain unverified. Do not infer Google's reason from editorial grades. Bing/ChatGPT rankings were user-reported, not measured.

### Owner-confirmed details to preserve

- Form requests appointment; shop confirms availability. After-hours drop-off available, receipt next business day; do not invent key-box/parking specifics.
- Diagnostic fee credited toward repairs. More diagnostic work: explain findings, proposed investigation and additional cost, get approval before continuing. If fault cannot be duplicated, explain checks, request safe notes about conditions/timing and arrange return. Do not promise every fault conclusively resolved in one visit.
- Overheating: ask about safe coolant checks, visible drips and heater output. Real customer feared head gasket after overheating/cold heater; stuck thermostat was the repair. This is owner-reported, not independently documented; no model/price invented. Heater output is a clue, not diagnosis or permission to drive.
- Fluids: levels, estimated miles in use and condition; burnt fluid/metal debris can call for investigation. Brake bleed machine used when hydraulic work admits air, e.g. master cylinder/caliper. Do not infer transmission exchange method from this clarification.
- Written findings with Fix Now / Plan and Budget / Monitor and Recheck. Category depends on actual inspection, not generic symptom alone.
- Oil changes usually45–60 minutes, some European/high-end vehicles need longer. Oil/filter selected by manual specifications; check costs and explain products outside specials before work. Final visual check for oil leaks/obvious issues, not guarantee no hidden faults.
- Pothole checks: tire sidewalls, inner/outer wheel edges, pressure. Alignment/balancing in-house but NOT included in initial inspection. No blanket safe-driving reassurance.

### Verification and follow-up

Build includes TypeScript; run `npm run lint`, `npm run audit:links`, `npm run build`. Production response check: `node scripts/check-indexing-responses.mjs http://127.0.0.1:3001`. Schema audit: `python3 scripts/audit-page-schema.py http://127.0.0.1:3001`. Start temporary production server with `npm run start -- --hostname 127.0.0.1 --port 3001`. Shared template QA should include invalid city404, menu/no-JavaScript, FAQs, filters, images and canonical checks. Screenshots/evidence are in `docs/indexing/rendering/`.

Before Search Console follow-up, verify deployed content, offer disclaimer, mobile behavior, images and production status. No Search Console requests submitted by this agent. [Prioritized resubmission URLs](docs/indexing/search-console-resubmission-urls.md). Recheck reviewer/credential evidence before restoring review badges. Retained consequential advice has not received independently verified technician signoff.

### Start local preview

Node24 required. From this app directory run `npm run dev -- --hostname 127.0.0.1`, then open http://127.0.0.1:3000. Environment values are local and must not be committed.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
