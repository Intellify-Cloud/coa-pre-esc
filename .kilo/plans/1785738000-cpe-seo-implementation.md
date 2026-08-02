# CPE Website SEO Implementation Plan

## Goal
Apply SEO best practices from `docs/seo-guru.md` to the CPE website. Fix SEO gaps, improve structured data, add sitemap/robots, and ensure all pages have proper metadata.

## Affected Boundaries
- `public/robots.txt` (new)
- `public/sitemap.xml` (new)
- `index.html` (enhance structured data + hreflang)
- `src/composables/useSeoHead.ts` (add hreflang + improve)
- `src/router/index.ts` (fix metadata for all routes)
- `src/views/ContactView.vue` (fix CPE placeholder content)
- `src/views/PrivacyView.vue` (fix CPE placeholder content)
- `src/views/HomeView.vue` (ensure H1 heading)

## Changes Detail

### 1. Create `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://coastalprepaidescapes.co.za/sitemap.xml
```

### 2. Create `public/sitemap.xml`
Static XML sitemap with canonical URLs for all indexable pages:
- `/` (home)
- `/privacy-policy/`
- `/contact`

Uses production domain `https://coastalprepaidescapes.co.za`.

### 3. Enhance `index.html` structured data
Add `FAQPage` JSON-LD schema for the testimonials/testimonials section (FAQ data is in siteText.ts).
Add `WebSite` schema with search action.
Ensure Organization schema has correct `addressLocality: Amanzimtoti`.
Add `hreflang` link for `en_ZA`.

### 4. Improve `useSeoHead.ts`
- Add `hreflang` meta tag for `en_ZA` locale
- Add `application-name` meta
- Add `theme-color` meta
- Add `apple-mobile-web-app-title`

### 5. Fix router metadata
- `/` - already good, keep as-is
- `/coming-soon/` - uses `siteText.site.description`, fine
- `/portfolio/` - placeholder, add noindex (not relevant for CPE launch)
- `/contact` - has Intellify placeholder content in the view, fix meta description
- `/privacy-policy/` - fix meta description for CPE

### 6. Fix `ContactView.vue`
- Update `useHead` meta description to CPE-specific content
- The view itself is an Intellify template that needs CPE branding, but for SEO the meta description is the priority fix

### 7. Fix `PrivacyView.vue`
- Update `useHead` meta description to CPE-specific content
- Update privacy policy content to reference CPE Properties (Pty) Ltd

### 8. Verify heading hierarchy
- Check HomeView.vue has exactly one H1 (hero title uses h1 via data binding)
- Ensure section headings use proper h2/h3 hierarchy

## Validation
1. `npm run build` passes
2. `vue-tsc --noEmit` passes
3. `dist/robots.txt` exists and is valid
4. `dist/sitemap.xml` exists and is valid XML
5. `dist/index.html` contains valid JSON-LD
6. All pages have unique titles and descriptions
7. No localhost URLs in production output
8. Canonical URLs use production domain

## Rollback
Revert robots.txt, sitemap.xml, index.html, useSeoHead.ts, router/index.ts, ContactView.vue, and PrivacyView.vue to their pre-change state.

## Open Questions
- Should `/portfolio/` be `noindex` or removed? Recommend `noindex` for now as it could be useful later.
- The FAQ structured data needs the testimonials section to map to FAQ schema - the testimonials items have `quote` (answer) and `name` (question). This maps cleanly to FAQPage schema.