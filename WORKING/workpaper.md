# Workpaper: DEVmatrose Website — Umsetzungsschritte

## Status: Work in Progress

## Phase 1: Refactoring der existing index.html

** Ausgangslage**: `index.html` existiert als Entwurf (1746 Zeilen, alles inline — HTML + CSS + JS)

### 1.1 Extraktion: CSS aus HTML herauslösen
- [ ] Critical CSS inline in `<head>` (nav + hero — first viewport)
- [ ] Rest → `style.css` mit `@layer` architecture
- [ ] `@layer reset, base, components, utilities` strukturieren
- [ ] Design Tokens in `:root` konsolidieren (bereits vorhanden, aber prüfen)
- [ ] Responsive breakpoints konsolidieren

### 1.2 Extraktion: JS aus HTML herauslösen
- [ ] Entry Point → `app.js`
- [ ] Components → `components/nav.js`, `components/hero.js`, etc.
- [ ] Utilities → `utils/dom.js`, `utils/store.js`, `utils/forms.js`
- [ ] `type="module"` auf alle Script-Tags
- [ ] Import-Struktur festlegen

### 1.3 HTML-Semantik prüfen
- [ ] Alle sections haben `id` für anchor navigation
- [ ] Nav: `<nav>` + `aria-label`
- [ ] Form: `<label for="id">` + korrekte `id`
- [ ] External links: `rel="noopener noreferrer"`
- [ ] SVG Compass: inline → assets/svg/compass.svg (oder inline lassen, small enough)

### 1.4 Content aus alexander-friedland.md validieren
- [ ] Claims/Positionierung stimmen mit whitepaper
- [ ] Links zu GitHub/Websites korrekt (devmatrose@proton.me Schreibweise prüfen!)
- [ ] Social links: Twitter/Instagram echte URLs?
- [ ] Stats: 25+ Jahre, 114 Repos, 1500 Nutzer — aktuell?

### 1.5 Struktur finalisieren
```
alexander-friedland/
├── index.html          (refactored — semantic HTML + inline critical CSS)
├── style.css           (extrahiert — @layer architecture)
├── app.js              (entry point — module imports)
├── components/
│   ├── nav.js
│   ├── hero.js
│   ├── services.js
│   ├── projects.js
│   ├── about.js
│   ├── logbuch.js
│   └── contact.js
├── utils/
│   ├── dom.js
│   ├── store.js
│   └── forms.js
└── assets/
    └── svg/
        └── compass.svg
```

---

## Phase 2: Interaktivität & Polish

### 2.1 Navigation
- [ ] Fixed nav mit backdrop-filter blur
- [ ] Scroll effect: background darker after 80px
- [ ] Mobile hamburger menu → full-screen overlay
- [ ] Smooth scroll to sections

### 2.2 Animations
- [ ] Intersection Observer für reveal classes
- [ ] Stagger delays für grid cards
- [ ] Cursor dot (gold, only on desktop)
- [ ] Scroll line animation in hero

### 2.3 Accessibility
- [ ] aria-labels auf nav, buttons, interactive elements
- [ ] focus-visible styles
- [ ] Keyboard navigation test
- [ ] Color contrast check (4.5:1 for body text)

### 2.4 Responsive
- [ ] Breakpoints: 900px, 600px
- [ ] Nav collapse on mobile
- [ ] Grid collapse to single column
- [ ] Aside unssticky on mobile
- [ ] Compass hidden on mobile

---

## Phase 3: Content & Expansion

### 3.1 Blog-Integration
- [ ] Decide: static entries or dynamic fetch?
- [ ] If dynamic: fetch from devmatrose.github.io/blog API or RSS
- [ ] Pagination or "load more"

### 3.2 Referenzen / Case Studies
- [ ] Section für konkrete Kundenprojekte (anonymisiert oder mit permission)
- [ ] Struktur: Problem → Lösung → Ergebnis

### 3.3 Bilder / Medien
- [ ] Hero: optional portrait oder abstract visual
- [ ] Projects: optional screenshots/thumbnails
- [ ] About: optional image

### 3.4 SEO
- [ ] Meta description, keywords
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD: Person, Organization)
- [ ] Sitemap.xml

### 3.5 Performance
- [ ] Critical CSS inline, rest external
- [ ] Font preload
- [ ] Lazy loading images
- [ ] Lighthouse audit

---

## Open Questions

1. **Form backend**: mailto ist MVP. Brauchen wir einen echten endpoint? (GitHub Pages = static only)
   - Option A: Formspree / Netlify Forms
   - Option B: mailto bleibt (einfach, funktioniert)
   - Option C: Nostr-based contact (ZPMS?)

2. **Blog entries**: Statisch oder dynamisch?
   - Statisch: einfacher, keine dependency
   - Dynamisch: RSS fetch oder API — aber devmatrose.github.io/blog ist auch static

3. **Deploy target**: GitHub Pages? Eigener Server?
   - GitHub Pages: kostenlos, simple, aber limitiert (static only)
   - Eigener Server: mehr kontrolle, aber mehr ops

4. **Domain**: devmatrose.com? friedland.dev? alexander-friedland.de?
   - Braucht domain purchase + DNS config

5. **Logo/Brand mark**: SVG needed? Compass is decorative — brauche ich ein favicon/brand icon?

6. **Social links**: Twitter/Instagram URLs sind placeholder. Brauchen die echten URLs?

7. **Language**: Nur Deutsch? Oder bilingual (DE + EN)?

---

## Timeline Estimate

| Phase | Estimate | Notes |
|-------|----------|-------|
| Phase 1 | 3-4 Tage | Basis mit allen sections |
| Phase 2 | 1-2 Tage | Interaktivität, responsive, a11y |
| Phase 3 | 2-3 Tage | Content, SEO, performance |
| **Total** | **6-9 Tage** | MVP → polished |
