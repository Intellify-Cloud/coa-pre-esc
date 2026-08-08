# Plan — Feedback 8 Aug 2026

**Aligned with:** `docs/code-plan-8-aug-2026.md`  
**Status:** Implementation-ready. Previous user changes verified against `src/`.  
**Scope:** Remaining homepage clarity, pricing, gallery, and a duplicate-section fix.

---

## Verified Current State

The user has completed some items. Confirmed in `src/`:

| Task | Status | Evidence |
|---|---|---|
| T1 — Footer trust block | **Done** | `siteText.footer.trust` (company, reg, area, note) + `SiteFooter.vue` `.site-footer__trust` |
| T2 — Banking clarification | **Done** | `siteText.contact.banking.note` explains Cabana Mio management account |
| T3 — How It Works 3-step | **Done** | New `how-it-works` section + `HowItWorksSection.vue` (3 cards) |
| T4 — Terminology | **Partial** | New section uses `membership`; `team` still says "membership wallet"; FAQ uses "Holiday Wallet" (acceptable — mechanism explanation) |

---

## Remaining Tasks

### T0 — Remove duplicate "How It Works" section (blocking)

**Bug:** `siteText.sections` contains BOTH `'how-it-works'` (new 3-step) and `'steps'` (old 5-step "Holiday Wallet"). The homepage now renders two "How It Works" blocks.

**Fix:**
- Remove `'steps'` from `siteText.sections` array (line 102).
- Optionally delete `StepsSection.vue` and its `componentMap` entry in `HomeView.vue`, or leave the file unused. Recommended: remove from `sections` and `componentMap`; delete file if no other view uses it.
- This also resolves the leftover "Holiday Wallet" terminology in the old `steps` copy.

### T5 — Add clarification line under membership cards (Priority 2.3)

- Add `siteText.team.clarification`: *"You are purchasing flexible membership access, not a fixed timeshare week."*
- Render in `TeamSection.vue` beneath the tier grid.

### T6 — Rework Founding Family → Founding Member Offer (Priority 3)

- Expand `siteText.founding-family`:
  - Eyebrow: `Founding Member Offer — Limited to 50 Members`
  - Keep deadline `28 February 2027`
  - Add: one complimentary 3-night stay, valid during Value + Preferred periods, subject to availability, excludes Weeks 50–53 and Weeks 1–2
  - Add accommodation detail: 3-bedroom duplex, ~50 m from beach, free unlimited Wi-Fi
- Update `FoundingFamilySection.vue` to render the new fields (currently only shows 3 spans + CTA).

### T7 — Add seasonal pricing table (Priority 4)

- Add `siteText.seasonalRates`: Value R1,250, Preferred R1,500, Peak 2 R1,800, Peak 1 R2,500.
- Create `SeasonalPricingSection.vue` (responsive table or card grid).
- Add notes: per day, 6-sleeper unit, availability and season rules apply.
- Register in `HomeView.vue` after `team` (membership), before `founding-family`.

### T8 — Add homepage gallery preview (Priority 5)

- Create `GalleryPreviewSection.vue` showing 4–6 images (1 col mobile → 2 col tablet → 3 col desktop).
- Source from `siteText.map.images` (interior/beach shots already present in `public/cabana-mio/`).
- CTA linking to `/#cabana-mio`.
- Register in `HomeView.vue` after `SeasonalPricingSection`, before `founding-family`.

### T9 — Terminology sweep (close out T4)

- In `siteText.team`, replace "membership wallet" with "membership" (per confirmed decision).
- Leave FAQ "Holiday Wallet" (explains the mechanism).
- Verify no `credits` term remains anywhere in `src/`.

### T10 — Homepage copy polish (Priority 6)

- Review hero, USP, membership, why-families-join, Cabana Mio, Founding Member Offer, contact.
- Keep core messages: Cabana Mio Beach Holiday Membership, Athlone Park Amanzimtoti, 3-bedroom duplex, free Wi-Fi, flexible membership, real contacts (Neil, Jolene, Cally).

### T11 — Responsive QA and validation (Priority 7)

- Test at 390, 560, 768, 1200 px.
- Confirm only ONE "How It Works" block renders after T0.
- Run `npm run build`, `npm run type-check`, `npm run format`.

---

## Files To Change

| File | Change |
|---|---|
| `src/content/siteText.ts` | Remove `steps` from sections; add `team.clarification`, `seasonalRates`; expand `founding-family`; "membership wallet" → "membership" |
| `src/views/HomeView.vue` | Remove `steps` from `componentMap`; register `SeasonalPricingSection`, `GalleryPreviewSection` |
| `src/components/sections/StepsSection.vue` | Delete or leave unused after T0 |
| `src/components/sections/TeamSection.vue` | Render `team.clarification` |
| `src/components/sections/FoundingFamilySection.vue` | Rework to Founding Member Offer block |
| `src/components/sections/SeasonalPricingSection.vue` | **New** — seasonal rates |
| `src/components/sections/GalleryPreviewSection.vue` | **New** — homepage gallery |

---

## Validation

- `npm run dev` → confirm single How It Works block, footer trust, banking note, seasonal table, gallery, Founding Member Offer.
- `npm run type-check` and `npm run format` clean.
- No "Warner Beach" or stray "Holiday Wallet" in public homepage copy (FAQ excepted).
