# Membership Grid Redesign

## Goal
Modernize the membership grid: solid header color, borderless cards, and white grid gutters.

## Decisions
- **Header background:** solid `var(--shell-color-lagoon)` (`#0e6b6e`)
- **Gridlines:** remove card borders; grid gaps serve as visual separators
- **Card background:** keep white (`var(--shell-color-surface)`)
- **Depth:** add subtle shadow to cards since borders are removed
- **Text contrast:** header text stays white; body text stays ink

## Changes

### `src/assets/theme.css`
1. `.membership-card`
   - Remove `border`
   - Add `box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.1);` (same shadow used elsewhere for consistency)
2. `.membership-card__header`
   - Remove gradient backgrounds for silver/gold/platinum variants
   - Set `background: var(--shell-color-lagoon); color: white;` on the base header
   - Remove the three `.membership-card--* .membership-card__header` gradient rules

### `src/views/MembershipView.vue` (if needed)
- Verify no inline border styles override the CSS changes

## Validation
- Run `npm run build` and ensure no compilation errors
- Visually confirm:
  - Compact (0–599px): single-column cards, solid header, no borders
  - Medium (600–839px): single-column cards, solid header, no borders
  - Landscape (840–1199px): single-column cards, solid header, no borders
  - Standard desktop (1200–1599px): three-column grid, solid headers, white gutters
  - Extra Large (1600px+): three-column grid, solid headers, white gutters

## Out of Scope
- Changing card content, pricing, or tier colors beyond the header
- Modifying the membership section background gradient
