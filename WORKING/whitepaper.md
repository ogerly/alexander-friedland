# Whitepaper: DEVmatrose Website — Technische Spezifikation

## 1. Projektübersicht

**Projekt**: Personal Brand Website für Alexander Friedland / DEVmatrose
**Ziel**: Öffentliche Aufstellung mit klarer Markenarchitektur — Person, Labor, Firma
**Technologie**: Reines HTML, CSS, JavaScript — kein Framework, kein Build-Tool
**Deploy**: GitHub Pages (static hosting)

---

## 2. Architektur-Entscheidungen

### 2.1 Mode: Vanilla App (Multi-View) — aber single-page

Die Website ist eine **Single-Page Application im klassischen Sinn**:
Eine HTML-Datei mit anchor-based navigation (`#hero`, `#identity`, etc.).

**Warum keine Multi-Page?**
- SEO-kritisch: alle content in einem document → schnell renderbar
- GitHub Pages static: kein server-side routing nötig
- Performance: kein page reload, smooth transitions
- Pflege: eine Datei statt mehrere

**Dateistruktur**:
```
index.html          — Semantic HTML, inline critical CSS
style.css           — Full stylesheet mit @layer architecture
app.js              — ES Module entry point
components/         — Modular JS (nav, hero, services, etc.)
utils/              — Shared utilities (dom, store, forms)
assets/             — SVGs, images, fonts
```

### 2.2 CSS Architecture: @layer

```css
@layer reset, base, components, utilities;
```

**reset**: Box-sizing, margin/padding reset, focus-visible, img/video rules
**base**: Design tokens (:root), typography, layout, dark/light scheme
**components**: Alle UI-Komponenten (nav, cards, sections, forms)
**utilities**: Helper classes (reveal, grid, spacing)

**Warum @layer?**
- Cascade control ohne specificity wars
- Clear priority: reset < base < components < utilities
- Future-proof: easy to extend without breaking existing rules

### 2.3 Design Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg` | `#07090f` | Primary background |
| `--bg2` | `#0c1018` | Section background |
| `--bg3` | `#111620` | Hover / elevated surface |
| `--gold` | `#c9a227` | Primary accent (brand) |
| `--gold2` | `#e8c96a` | Hover accent |
| `--blue` | `#4a7fb5` | Secondary accent |
| `--text` | `#ddd8cc` | Body text |
| `--muted` | `#6b7591` | Muted / secondary text |
| `--border` | `rgba(201,162,39,0.15)` | Light border |
| `--border2` | `rgba(201,162,39,0.30)` | Strong border |

**Fonts**:
- Display: `Cormorant Garamond` (serif, elegant)
- Body: `Lora` (serif, readable)
- Mono: `JetBrains Mono` (code, labels, tags)

### 2.4 JavaScript Architecture

**Module system**: Native ES Modules (`type="module"`)
**Entry point**: `app.js` → imports components → init on DOMContentLoaded

**Utilities**:
- `dom.js`: `$`, `$$`, `on`, `createElement` — DOM helpers
- `store.js`: `createStore()` — lightweight state management (Proxy-based)
- `forms.js`: `setupValidation()` — Constraint Validation API wrapper

**Components**:
- `nav.js`: Fixed nav, scroll effect, mobile hamburger
- `hero.js`: Compass animation, fade-up sequence
- `services.js`: Grid reveal, stagger animations
- `projects.js`: Grid reveal, hover effects
- `about.js`: Sticky aside, reveal animations
- `logbuch.js`: Blog entries rendering (static or dynamic)
- `contact.js`: Form validation, mailto submit

**State**: Minimal — theme, nav-open, form-status
**No global state needed**: Sections are independent, anchor-based navigation

---

## 3. Performance-Spezifikation

### 3.1 Critical Path

```
HTML → inline critical CSS → render hero → load external CSS → load app.js
```

**Critical CSS inline** (first 200 lines):
- Nav styles
- Hero styles
- First viewport content
- Animation keyframes

**External CSS**:
- All section styles below first viewport
- Loaded async via `<link rel="stylesheet">`

### 3.2 Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="..." rel="stylesheet" media="print" onload="this.media='all'">
```

**font-display: swap** — Google Fonts CDN default
**No self-hosting needed** — 3 fonts, reasonable file sizes

### 3.3 Images / SVGs

- Compass SVG: inline in HTML or separate file
- No raster images in MVP
- Lazy loading: `loading="lazy"` for any future images
- srcset: for any future responsive images

### 3.4 JS Loading

```html
<script type="module" src="app.js"></script>
```

`type="module"` = deferred by default — no render-blocking

**Bundle size target**: < 15KB gzipped total JS

---

## 4. Accessibility-Spezifikation

### 4.1 Semantic HTML

- `<nav>` with `aria-label="Hauptnavigation"`
- `<main>` for primary content
- `<section>` with `id` for anchor targets
- `<article>` for blog entries (future)
- `<footer>` for footer
- `<header>` for nav

### 4.2 Focus Management

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

- All interactive elements keyboard-navigable
- Logical tab order
- No outline removal without replacement
- Focus trap in mobile nav overlay

### 4.3 Color Contrast

| Element | Color | Background | Ratio | Pass? |
|---------|-------|------------|-------|-------|
| Body text | `#ddd8cc` | `#07090f` | ~12:1 | ✅ |
| Muted text | `#6b7591` | `#07090f` | ~5.5:1 | ✅ |
| Gold accent | `#c9a227` | `#07090f` | ~8:1 | ✅ |
| Border | `rgba(201,162,39,0.15)` | `#07090f` | decorative | N/A |

**Min. 4.5:1 for body text, 3:1 for large text** — WCAG AA

### 4.4 Screen Reader

- `alt` on all images
- `aria-label` on icon-only buttons (hamburger)
- `aria-expanded` on nav toggle (future)
- Form labels with `for` attribute
- Skip nav link (future enhancement)

---

## 5. Responsive-Spezifikation

### 5.1 Breakpoints

| Breakpoint | Target | Changes |
|------------|--------|---------|
| > 900px | Desktop | Full layout, all columns |
| 601–900px | Tablet | Nav collapse, grid 2-col |
| ≤ 600px | Mobile | Single column, hamburger menu |

### 5.2 Layout Strategy

**Content rail**:
```css
.grid-template-columns:
  [full-start] 1fr
  [content-start] min(var(--container), 100% - var(--space-8) * 2)
  [content-end] 1fr [full-end];
```

**Container**: `--container: 1200px`
**Full-bleed**: Backgrounds span full width, content constrained

### 5.3 Typography

**clamp() for all font sizes**:
```css
--text-hero: clamp(3rem, 10vw, 7rem);
--text-xl: clamp(2rem, 6vw, 3.5rem);
--text-base: clamp(1rem, 2.5vw, 1.125rem);
```

No fixed font sizes — fluid scaling across all breakpoints

### 5.4 Grid Strategy

**Auto-fill grids**:
```css
grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
```

No hardcoded column counts — adapts to container width

---

## 6. Animation-Spezifikation

### 6.1 Hero Sequence

```
t+0.1s: hero-tag fades up
t+0.25s: hero-name fades up
t+0.4s: hero-sub fades up
t+0.55s: hero-claim fades up
t+0.7s: hero-actions fades up
t+1.0s: hero-scroll fades up + scroll line animation
```

**All**: `fadeUp` keyframe (opacity 0→1, translateY 20px→0)
**Duration**: 0.6–0.7s, ease-out
**GPU-accelerated**: only opacity + transform

### 6.2 Reveal Animations

**Intersection Observer**:
- Threshold: 0.12
- Root margin: `0px 0px -40px 0px`
- Trigger: element enters viewport
- Action: add `.visible` class → opacity 0→1, translateY 24px→0
- Unobserve after trigger → no re-trigger

**Stagger for grids**:
- Delay per card: `i * 0.07s`
- Grid observer triggers all cards in container

### 6.3 Motion Principles

- Only `transform` and `opacity` (no layout-triggering properties)
- Duration: 150ms–700ms (fast to slow)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out)
- Subtle, not flashy — elegant, not playful
- Reduced motion: `@media (prefers-reduced-motion)` — disable animations

---

## 7. SEO-Spezifikation

### 7.1 Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="DEVmatrose — Alexander Friedland, Software-Architekt für KI-native Websysteme, dezentrale Protokolle und produktionsnahe Prototypen. Softwareentwicklung seit 1999.">
<meta name="keywords" content="Software-Architekt, KI-Workflows, dezentrale Systeme, Vue, Nostr, IPFS, Prototyping, DEVmatrose">
<meta name="author" content="Alexander Friedland">
```

### 7.2 Open Graph

```html
<meta property="og:title" content="DEVmatrose — Alexander Friedland">
<meta property="og:description" content="Software-Architekt für KI-native Websysteme, dezentrale Protokolle und produktionsnahe Prototypen.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://devmatrose.github.io/devmatrose/">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:locale" content="de_DE">
```

### 7.3 Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Friedland",
  "url": "https://devmatrose.github.io/devmatrose/",
  "sameAs": [
    "https://github.com/ogerly",
    "https://github.com/DEVmatrose",
    "https://linkedin.com/in/alexander-friedland"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "DEVmatrose",
    "url": "https://devmatrose.github.io/devmatrose/"
  }
}
```

### 7.4 Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://devmatrose.github.io/devmatrose/</loc>
    <lastmod>2026-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 8. Security-Spezifikation

### 8.1 No Secrets in Client Code

- No API keys
- No credentials
- No private emails in JS (only in HTML mailto links)

### 8.2 External Links

- All external links: `target="_blank" rel="noopener noreferrer"`
- GitHub, blog, social media — all verified URLs

### 8.3 Form Handling

- MVP: `mailto:` link — no server processing
- Future: Formspree or similar — no self-hosted form backend
- No file uploads in MVP

### 8.4 CSP (Future)

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.googleapis.com fonts.gstatic.com; img-src * data:;
```

---

## 9. Browser-Support-Spezifikation

### 9.1 Target Browsers

| Browser | Min Version | Notes |
|---------|-------------|-------|
| Chrome | 110+ | Full support |
| Firefox | 115+ | Full support |
| Safari | 16+ | Full support |
| Edge | 110+ | Chromium-based, same as Chrome |

### 9.2 Feature Requirements

| Feature | API | Fallback |
|---------|-----|----------|
| ES Modules | `<script type="module">` | None needed (all target browsers support) |
| CSS @layer | `@layer` | None needed (Chrome 110+, FF 125+, Safari 16+) |
| Intersection Observer | `IntersectionObserver` | Static display (no animation) |
| CSS clamp() | `clamp()` | None needed |
| CSS container queries | `@container` | Grid fallback |
| backdrop-filter | `backdrop-filter` | Solid background fallback |
| color-mix() | `color-mix()` | Hardcoded fallback values |
| view() timeline | `animation-timeline: view()` | Intersection Observer fallback |

### 9.3 Polyfills

**No polyfills needed** for target browser range.

If older browser support required:
- Intersection Observer: `intersection-observer` polyfill (~3KB)
- CSS @layer: no JS polyfill — use cascade ordering instead
- CSS clamp(): no polyfill needed (calc() fallback)

---

## 10. Maintenance-Spezifikation

### 10.1 File Organization

- `index.html`: Content structure + inline critical CSS
- `style.css`: All styles — organized by @layer
- `app.js`: Entry point + component imports
- `components/`: One file per section/component
- `utils/`: Shared utilities
- `assets/`: SVGs, images, media

### 10.2 Content Updates

- Section content in HTML → direct edit
- Service cards → add/remove `.service-card` divs
- Project cards → add/remove `.project-card` divs
- Blog entries → add/remove `.logbuch-entry` links (or dynamic fetch)
- Design tokens → edit `:root` in style.css

### 10.3 Version Control

- Commit per section/component
- Message format: `feat: add [section] / refactor [component]`
- No build artifacts in repo

### 10.4 Deploy

```bash
# GitHub Pages
git add .
git commit -m "chore: deploy to GitHub Pages"
git push
# Pages builds automatically from main branch
```

---

## 11. Tradeoffs & Entscheidungen

### 11.1 Single Page vs Multi Page

**Decision**: Single page (anchor-based)

**Why**:
- SEO: all content in one document → fast crawl
- Performance: no page reload, smooth transitions
- GitHub Pages: static only, no server routing
- Maintenance: one file to manage

**Tradeoff**:
- No true "page" feel for blog/references
- Deep linking via anchors works but not ideal for bookmarking
- Future: consider separate blog page if content grows

### 11.2 mailto Form vs Backend

**Decision**: mailto (MVP)

**Why**:
- GitHub Pages static only — no server-side processing
- Simple, no dependency on external service
- Works immediately, no config needed

**Tradeoff**:
- No form submission tracking
- User must have mail client configured
- No spam protection

**Future options**: Formspree, Netlify Forms, Nostr-based contact

### 11.3 Static Blog vs Dynamic

**Decision**: Static entries (MVP)

**Why**:
- No API to fetch from (devmatrose.github.io/blog is also static)
- Simple, no fetch errors
- Content controlled directly

**Tradeoff**:
- Manual updates needed
- No automatic sync with blog
- Pagination not implemented

**Future**: RSS fetch or API integration if blog structure supports it

### 11.4 No Framework vs Framework

**Decision**: Pure vanilla

**Why**:
- Skill-vanilla-web mandates it
- Solo developer → no team standards needed
- GitHub Pages static → no build tooling
- AI-generated code → vanilla is more reliable
- Full control over every line

**Tradeoff**:
- No component reusability framework
- Manual state management
- No hot reload / dev server
- More boilerplate for complex interactions

**Mitigation**:
- Web Components for reusable elements
- `createStore()` for state
- Utility functions for common patterns
- Clear file structure and naming conventions

---

## 12. Glossary

| Term | Definition |
|------|------------|
| **DEVmatrose** | Kommerzielle Hauptmarke — Architekturschmiede |
| **@ogerly** | Entwickler-Persona — öffentliches Labor |
| **Alexander Friedland** | Person — Erfahrung, Vertrauen, Biografie |
| **Logbuch** | Blog — Architekturjournal, Deep Dives |
| **Workpaper** | Implementierungsplan — Schritte, Prioritäten, Timeline |
| **Whitepaper** | Technische Spezifikation — Architektur, Constraints, Tradeoffs |
| **AAMS** | Ökosystem mit BBB, Matching, KI-Protokollen |
| **A2T** | Audio-zu-Text Pipeline (WhisperX) |
| **ZPMS** | Zero Persistence Messaging |
| **RAG** | Retrieval-Augmented Generation |
| **Sovereign Tech** | Dezentrale, selbstbestimmte Technologie |
