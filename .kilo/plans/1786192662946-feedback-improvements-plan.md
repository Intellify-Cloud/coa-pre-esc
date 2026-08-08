# Feedback Implementation Plan — 8 Aug 2026

## Goal
Implement the actionable improvements from `docs/feedback-8-aug-2026.md` to strengthen clarity, transparency, and conversion on the CPE site.

## Current State Assessment
- **"How It Works"** — `StepsSection.vue` exists but copy focuses on wallet mechanics rather than clarifying the membership-vs-timeshare question.
- **Unit photos** — `MapSection.vue` already surfaces unit/beach photos via cycling tiles; no separate gallery needed unless reviewer insists.
- **Seasonal pricing table** — Missing entirely. Only membership joining fees + monthly contributions are shown.
- **Founding Member Offer** — `FoundingFamilySection.vue` exists but copy is thin; needs stronger detail on the 3-night bonus and limitations.
- **Trust footer** — `SiteFooter.vue` already renders company reg, address, and management note.
- **Location accuracy** — Vue codebase already uses "Athlone Park, Amanzimtoti"; only `1st-scaffold.md` has stale "Warner Beach" references.

## Planned Changes

### 1. Revise "How It Works" steps
**File:** `src/content/siteText.ts` — `siteText.steps`
- Update eyebrow to `- How It Works -`
- Update title to something like: "A flexible holiday membership, not a timeshare."
- Replace 5 steps with a clearer sequence that answers the reviewer's core question:
  1. **Choose Your Season** — Pick Value, Preferred, or Peak access.
  2. **Select Your Dates** — Book available Cabana Mio weeks that suit your family.
  3. **Build Your Holiday Wallet** — Interest-free monthly contributions build usable value.
  4. **Book Flexibly** — Choose dates within your season instead of one fixed week.
  5. **Pause When Needed** — Life happens; pause protection keeps membership manageable.
- **Component change:** None needed; `StepsSection.vue` renders generically from `data.items`.

### 2. Add seasonal pricing table section
**New file:** `src/components/sections/PricingTableSection.vue`
- Renders a responsive table/card grid with 4 seasons and daily rates.
- Uses a clean striped or card layout matching existing design tokens.
- Columns: Season, Daily Rate, Notes.

**New type in `siteText.ts`:**
```ts
export type PricingSeason = {
  name: string
  rate: string
  description?: string
}
```

**New section key:** `'seasonal-rates'`
```ts
'seasonal-rates': {
  eyebrow: '- Seasonal Rates -',
  title: 'Transparent pricing for every season',
  body: 'Clear daily rates so you can plan your beach holiday with confidence.',
  seasons: [
    { name: 'Value', rate: 'R1,250 / day', description: '...' },
    { name: 'Preferred', rate: 'R1,500 / day', description: '...' },
    { name: 'Peak 2', rate: 'R1,800 / day', description: '...' },
    { name: 'Peak 1', rate: 'R2,500 / day', description: '...' },
  ],
  cta: { label: 'Request Details', href: '/contact' },
}
```

**Update `HomeView.vue`:**
- Import `PricingTableSection`
- Add to `componentMap`
- Add `'seasonal-rates'` to `siteText.sections` array (after `team`, before `founding-family` or after `steps` — recommend after `team` so pricing is seen before the Founding Family CTA)

### 3. Strengthen Founding Family offer copy
**File:** `src/content/siteText.ts` — `siteText['founding-family']`
- Update `body` to: "Limited Founding Family memberships are available. Join before 28 February 2027 and secure your family's annual beach holiday with an exclusive bonus stay."
- Update `bonusStay` to include:
  - `nights: 3`
  - `periods: 'Value and Preferred periods'`
  - `availability: 'Subject to availability'`
  - `excludedWeeks: 'Excludes Weeks 50–53 and Weeks 1–2'`
- Consider adding a `limit: 'Limited to 50 members'` field if the component supports it, otherwise weave into body copy.
- **Component change:** `FoundingFamilySection.vue` may need minor template updates to render additional bonus stay details if they don't fit the current layout.

### 4. Verify photo gallery sufficiency
- **No code change required.** `MapSection.vue` already displays unit, beach, and dining photos via cycling tiles.
- If reviewer later insists on a dedicated homepage gallery, extract a `GallerySection.vue` from `MapSection.vue` image logic.

### 5. Trust footer
- **No code change required.** `SiteFooter.vue` already renders `trust.company`, `trust.registration`, `trust.area`, and `trust.note`.

### 6. Location references
- **No code change required in Vue app.** All location text in `siteText.ts` and components already reads "Athlone Park, Amanzimtoti".
- Optional: delete or annotate stale references in `1st-scaffold.md` to avoid future confusion.

## Sequence
1. Update `siteText.ts` types and data (steps, seasonal-rates, founding-family).
2. Create `PricingTableSection.vue`.
3. Update `HomeView.vue` to register the new section.
4. Adjust `FoundingFamilySection.vue` template if new fields require it.
5. Run lint/typecheck.

## Validation
- `npm run lint` and `npm run typecheck` pass.
- Visually inspect homepage: How It Works → Membership → Seasonal Rates → Founding Family → Cabana Mio → Footer.
- Confirm no "Warner Beach" strings remain in `src/`.

## Out of Scope
- Section-by-section homepage copy polish (reviewer offered; not requested as part of this plan).
- Adding new unit photos (assumes existing `public/cabana-mio/` images are sufficient).
