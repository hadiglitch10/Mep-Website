# CLAUDE.md — MEP Engineering Solutions Website

## Project Type
**React SPA** — NOT a static HTML/CSS/JS site.  
Built with **Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui**.  
Routing via **react-router-dom v6** (BrowserRouter, no hash routing).

---

## Tech Stack
| Tool | Version | Role |
|------|---------|------|
| Vite | ^5.4 | Build tool / dev server |
| React | ^18.3 | UI framework |
| TypeScript | ^5.8 | Type safety |
| Tailwind CSS | ^3.4 | Styling (utility-first) |
| shadcn/ui | — | UI primitives (Radix-based) |
| react-router-dom | ^6.30 | Client-side routing |
| next-themes | ^0.3 | Dark/light theme toggle |
| lucide-react | ^0.462 | Icons |
| @tanstack/react-query | ^5.83 | (installed, not actively used) |
| framer-motion | ^12.34 | (installed, not used in current components) |

**Package manager:** Bun (primary) + npm lockfile also present.  
**Run dev server:** `bun run dev` or `npm run dev`  
**Build:** `bun run build` or `npm run build`

---

## File Structure

```
src/
├── assets/              # Static images (jpg) — imported directly in components
│   ├── about-bg.jpg
│   ├── hero-bg.jpg
│   ├── service-hvac.jpg
│   ├── service-lowcurrent.jpg
│   ├── service-network.jpg
│   └── service-ups.jpg
├── components/
│   ├── ui/              # ~40 shadcn/ui primitives (do not edit these)
│   ├── AboutSection.tsx
│   ├── AnimatedBackground.tsx
│   ├── ClientsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   ├── ProjectDetailDialog.tsx
│   ├── ProjectsSection.tsx  # Homepage preview (3 projects)
│   └── ServicesSection.tsx
├── contexts/
│   └── LanguageContext.tsx  # AR/EN toggle — provides useLanguage() hook
├── lib/
│   ├── translations.ts      # All EN + AR strings keyed by identifier
│   └── utils.ts             # cn() helper
├── pages/
│   ├── About.tsx
│   ├── Index.tsx            # Home page
│   ├── NotFound.tsx
│   ├── Projects.tsx
│   └── Services.tsx
├── App.tsx                  # Routes + ThemeProvider + LanguageProvider
├── index.css                # Tailwind + CSS custom properties (dark & light themes)
└── main.tsx
```

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `pages/Index.tsx` | Home: Hero → About → Services → Projects → Clients → Contact |
| `/about` | `pages/About.tsx` | Story, values, why choose us |
| `/services` | `pages/Services.tsx` | All 6 service cards (also handles `/services/:slug` via `#id`) |
| `/projects` | `pages/Projects.tsx` | Full project grid with detail dialog |
| `*` | `pages/NotFound.tsx` | 404 fallback |

**No `/contact` route exists** — contact form lives at `/#contact` (hash scroll on home page).

---

## Navbar Structure

Desktop nav items (left to right):
1. **Home** → `/`
2. **About** → `/about`
3. **Services** → `/services` (with mega-dropdown: IT & Network, Low Current, HVAC, UPS, Firefighting, Electrical)
4. **Projects** → `/projects`
5. **Contact** → `/#contact`

CTA button: **Request a Quote** → `/#contact`

Logo: Text-based placeholder — "M" icon box + "MEP / ENGINEERING" text.  
**No logo image file exists in `/public` or `/src/assets`.**

---

## Existing Features

- Animated background (floating blobs + grid shimmer)
- Scroll-reveal animations (IntersectionObserver)
- Mega-dropdown in navbar for Services submenu
- Project detail dialog (click project card → full modal with gallery, case study)
- Auto-scrolling client logo ticker (2 rows, opposite directions)
- Contact form with Name/Email/Phone/Message fields (no backend — alert on submit)
- Responsive mobile hamburger menu
- **Dark/Light theme toggle** (next-themes, `class` strategy, saved to localStorage)
- **Arabic/English language toggle** (LanguageContext, `data-lang` on html element, RTL support, saved to localStorage)

---

## Language System

All UI text lives in `src/lib/translations.ts` as a typed object:
```ts
translations.en.hero.headline  // English
translations.ar.hero.headline  // Arabic
```

Components access text via the `useLanguage()` hook:
```tsx
const { t, lang } = useLanguage();
// t('hero.headline') returns the string in the current language
```

When Arabic is active:
- `document.documentElement.dir = 'rtl'`
- `document.documentElement.lang = 'ar'`
- Preference saved to `localStorage` key `mep-lang`

---

## Theme System

Uses `next-themes` with `attribute="class"` strategy.  
- Dark class: `.dark` on `<html>`
- Light: default (no class)
- `index.css` defines `:root` (light) and `.dark` (dark) CSS custom properties
- Saved to `localStorage` key `theme`

---

## Known Issues / Notes

- **No logo image**: The navbar and footer use a styled text box as the logo. To add a real logo, place the file in `public/` and reference it as `/logo.png` (no import needed).
- **Clearbit logos in ClientsSection**: fetched from `logo.clearbit.com` at runtime — will fail if the domain is unreachable or if Clearbit deprecates the API. Each card has an `onError` fallback.
- **No backend for contact form**: `handleSubmit` fires an `alert()`. Replace with a `fetch()` to an API endpoint or a form service like Formspree.
- **`/services/:slug` routing**: The Services page renders all services regardless of slug; the slug is used as an `id` anchor on the page. Deep links like `/services/hvac` scroll to `#hvac`.

---

## Instructions for Future Claude Code Sessions

1. **Read this file first**, then read the specific component you need to change.
2. **Do not use `find`, `grep`, or `cat` via Bash** — use the Read/Glob/Grep tools.
3. **Routing is React Router v6** — use `<Link to="...">`, not `<a href="...">` for internal nav.
4. **All styles are Tailwind utility classes** + the CSS custom properties in `index.css`. Avoid inline styles except for animation delays.
5. **CSS variables** follow HSL format without `hsl()` wrapper: `--primary: 211 100% 50%` used as `hsl(var(--primary))` in Tailwind via `tailwind.config.ts`.
6. **Images** are imported as ES modules (e.g., `import heroBg from "@/assets/hero-bg.jpg"`). Vite handles asset hashing at build time.
7. **Adding a new page**: create `src/pages/NewPage.tsx`, add `<Route path="/new-page" element={<NewPage />} />` in `App.tsx`.
8. **Do not edit `src/components/ui/`** — these are auto-generated shadcn/ui primitives.
9. **Translation keys** are dot-notated (e.g., `t('navbar.home')`). Add new keys to both `en` and `ar` objects in `translations.ts`.

---

## Changelog

### 2026-04-01 — Initial audit & implementation session

**Audit findings:**
- Project is React + TypeScript + Vite SPA (not static HTML as initially assumed)
- Logo: text-based placeholder only; no image file exists
- "Sectors" and "Quality & HSE" existed as navbar items and homepage sections
- Broken link: `ProjectDetailDialog.tsx` had `<Link to="/contact">` — no `/contact` route exists
- No language toggle
- No dark/light theme toggle (dark-only CSS)
- No placeholder/Lorem ipsum content — all content is professional and complete

**Changes applied:**

| # | Change | Files affected |
|---|--------|----------------|
| 2.1 | Logo is text-based placeholder — documented; no image to fix | CLAUDE.md |
| 2.2 | Removed "Sectors" and "Quality & HSE" nav items; removed SectorsSection + QualitySection from Index.tsx; deleted both component files | Navbar.tsx, Index.tsx, ~~SectorsSection.tsx~~, ~~QualitySection.tsx~~ |
| 2.3 | Added AR/EN language toggle with RTL support, `localStorage` persistence, `dir`/`lang` on `<html>` | src/lib/translations.ts (new), src/contexts/LanguageContext.tsx (new), App.tsx, Navbar.tsx, all section components, all pages |
| 2.4 | Added dark/light theme toggle using `next-themes` (already in package.json); restructured `index.css` so `:root` = light theme and `.dark` = dark theme | src/index.css, App.tsx, Navbar.tsx |
| 2.5 | Fixed broken `<Link to="/contact">` → `<Link to="/#contact">` in ProjectDetailDialog (no `/contact` route exists) | src/components/ProjectDetailDialog.tsx |

**Files created:**
- `CLAUDE.md`
- `src/lib/translations.ts` — all EN + AR strings
- `src/contexts/LanguageContext.tsx` — `LanguageProvider` + `useLanguage()` hook

**Files deleted:**
- `src/components/SectorsSection.tsx`
- `src/components/QualitySection.tsx`

**Files modified:**
- `src/App.tsx` — added ThemeProvider + LanguageProvider wrappers
- `src/index.css` — restructured to light (`:root`) and dark (`.dark`) themes
- `src/components/Navbar.tsx` — removed Sectors/Quality items, added AR/EN + sun/moon toggles
- `src/pages/Index.tsx` — removed SectorsSection + QualitySection
- `src/components/HeroSection.tsx` — all text via `t()`
- `src/components/AboutSection.tsx` — all text via `t()`
- `src/components/ServicesSection.tsx` — all text via `t()`, bilingual descriptions
- `src/components/ProjectsSection.tsx` — section headings via `t()`
- `src/components/ClientsSection.tsx` — section headings via `t()`
- `src/components/ContactSection.tsx` — all text + form labels via `t()`
- `src/components/Footer.tsx` — all text via `t()`
- `src/components/ProjectDetailDialog.tsx` — dialog labels via `t()`, fixed `/contact` link
- `src/pages/About.tsx` — all text via `t()`
- `src/pages/Services.tsx` — all text via `t()`, bilingual descriptions + details
- `src/pages/Projects.tsx` — section headings via `t()`
- `src/pages/NotFound.tsx` — text via `t()`, fixed bg-muted → bg-background
