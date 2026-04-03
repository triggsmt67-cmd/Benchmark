---
description: Check SEO and Linking for New Pages
---

When adding a new service, guide, or symptom page to Benchmark Automotive, follow these steps to ensure it is indexed and linked correctly:

### 1. Metadata Verification
- **Title**: Ensure the title doesn't double-mention "Missoula, MT". If the frontmatter title already includes "Missoula", the template will now skip adding the suffix.
- **Description**: Add a compelling description to the frontmatter. If missing, a professional default is provided, but custom is better.
- **Canonical**: Verify that `alternates.canonical` points to the absolute URL.

### 2. Structured Data (Schema)
- **JSON-LD**: Ensure the page template (Service, Guide, or Problem) includes the appropriate schema:
  - `Service` schema (for service pages)
  - `Article` + `BreadcrumbList` (for guides and problems)
  - `FAQPage` (if FAQs are present in markdown)

### 3. Internal Linking
- **Sitemap**: Verify the new page appears in `/sitemap.xml`. (Currently automated in `src/app/sitemap.ts`)
- **Related Slugs**: Add the new page's slug to the `related` frontmatter array of other relevant pages.
- **Problem Inter-linking**: If it's a service page, link to at least one related symptom page (`/problems/[slug]`) in the content or frontmatter.

### 4. Image Assets
- **SEO Image**: Ensure each `Service` schema has a valid `image` URL. The default is `diagnostic_hero_bg_v2.png`.

### 5. Deployment Check
- After pushing the new page, visit `https://www.benchmarkmissoula.com/sitemap.xml` to confirm it was captured.
- Submit the new URL for indexing in Google Search Console.
