# UI/UX Redesign Plan (No Core Functionality Changes)

## Step 1 — Global design system

- [x] Update `src/styles/global.css` with stronger dark-theme tokens, glass utilities, focus states, and consistent spacing/typography helpers.

## Step 2 — Layout polish (site-wide)

- [x] Refine `src/layouts/Layout.astro` to ensure consistent entrance/reveal behavior and maintain existing background + cursor spotlight.

## Step 3 — Header (premium agency feel)

- [ ] Redesign `src/components/Header.astro`: glassmorphism navbar, icon nav items, hover/active states, better mobile handling without breaking routes.

## Step 4 — Footer redesign

- [ ] Redesign `src/components/Footer.astro`: multi-column glass/gradient footer with social icons, quick links, and contact info.

## Step 5 — Projects UI

- [ ] Update `src/pages/projects/index.astro` for premium glass project cards (tags, improved hover, spacing).
- [ ] Update `src/pages/projects/[id].astro` for improved visual hierarchy + polished hero media chrome.

## Step 6 — Journal / Blog UI

- [ ] Update `src/pages/journal/index.astro` with Medium-like preview cards (image fallback, tags, date, metadata).
- [ ] Update `src/pages/journal/[id].astro` for more premium article header/typography and media styling.

## Step 7 — 404 + Contact consistency

- [ ] Update `src/pages/404.astro` and `src/pages/contact.astro` to match new design system (containers, buttons, glass cards).

## Step 8 — Micro-interactions

- [ ] Ensure subtle hover/focus/entrance animations are consistent and respect `prefers-reduced-motion`.

## Step 9 — Verification

- [ ] Run `npm run build` (and/or `npm run dev`) to ensure no broken functionality.
- [ ] Manual responsive checks for mobile/tablet/desktop + contrast verification.
