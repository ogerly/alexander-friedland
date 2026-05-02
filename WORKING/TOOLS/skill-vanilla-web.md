---
name: vanilla-web
description: >
  Build modern, production-grade websites and web components using pure HTML, CSS, and JavaScript — zero frameworks, zero build tools, zero dependencies. Use this skill whenever the user wants to build a website, webpage, web component, UI component, landing page, interactive tool, or any frontend without React, Vue, Angular, or other frameworks. Trigger on phrases like "vanilla JS", "plain HTML/CSS", "no framework", "kein Framework", "without React", "pure web", "native web", "klassisches Web", or when the user explicitly wants clean, dependency-free web code. Also trigger when the user asks to build something that runs directly in the browser without a build step.
---

# Vanilla Web Development Skill

Zero frameworks. Zero build tools. Maximum control.

This skill produces modern, production-grade HTML/CSS/JavaScript that runs directly in any browser — no Node.js, no npm, no bundler required. Just files.

---

## STEP 0: Project Assessment (Always Run First)

**Before writing a single line of code**, assess the project. This is not optional.

A wrong technology choice costs more than the time saved by skipping this step.

### 1. Scope Classification

| Question | Signal für Vanilla | Signal für Framework |
|---|---|---|
| Wie viele Views / Seiten? | 1–5 | 10+ mit komplexem Routing |
| State über viele Komponenten geteilt? | Minimal / lokal | Ja, tief verschachtelt |
| Pflege durch Team von 3+ Entwicklern? | Nein | Ja |
| SEO-kritisches Rendering nötig? | Statisch oder server-gerendert | Komplexe Hydration |
| Echtzeit (WebSockets, kollaborativ)? | Einfache Updates OK | Komplexer Multi-User-State |
| Solo oder kleines Team? | Ja → Vanilla passt | Große Org mit Standards |
| Muss ohne Build-Step im Browser laufen? | Ja → Vanilla gewinnt | Kein Constraint |
| Generiert ein KI-Agent den Code? | **Ja → Vanilla stark empfohlen** | Nur wenn Framework bereits im Einsatz |

### 2. Complexity Score

Bewerte das Projekt 1–5 pro Achse:

```
Views/Seiten:         1=Einzelseite   5=10+ Views mit Deep-Routing
State-Komplexität:    1=kein State    5=Global, Realtime, kollaborativ
Komponenten-Reuse:    1=Unique Pages  5=Design System, 50+ Komponenten
Teamgröße:            1=Solo          5=Großes Team, mehrere Workstreams
Zeitdruck:            1=entspannt     5=in Tagen liefern (Vanilla schneller)
```

**Score 5–10** → Vanilla ist ideal. Weiter mit diesem Skill.
**Score 11–17** → Hybrid-Ansatz empfohlen. Vanilla Core + leichter Enhancer (siehe Mode C).
**Score 18–25** → Framework empfehlen. Klar kommunizieren bevor fortgefahren wird.

> Besteht der User trotz hohem Score auf Vanilla: Respektieren — aber Tradeoffs als Kommentar im Code dokumentieren.

### 3. Architecture Decision: Mode wählen

#### Mode A: Pure Vanilla
*Einzeldatei oder kleines Projekt, kein oder minimaler Server-Kontakt.*
- Eine `.html`-Datei (inline `<style>` + `<script type="module">`)
- Kein Routing nötig
- State in Modul-Variablen oder `createStore()`
- **Für**: Landing Pages, Komponenten, Tools, Prototypen, Artifacts

#### Mode B: Vanilla App (Multi-View)
*Multi-View-Projekt, API-Calls, Auth, echte Nutzerdaten.*
- Dateistruktur mit `components/`, `utils/`, `pages/`
- Client-seitiges Routing via History API
- Zentraler Store + API Client
- **Für**: Dashboards, Portale, interne Tools, SPAs bis mittlerer Komplexität

#### Mode C: Vanilla + Lightweight Enhancer
*Server-zentrischer Ansatz oder hohe Interaktivität ohne Full-SPA.*
- **htmx**: `<button hx-get="/data" hx-swap="outerHTML">` — AJAX ohne JS, ideal für server-getriebene UIs und KI-generierte Backends
- **Alpine.js**: `x-data`, `x-bind`, `x-on` — reaktive UI über HTML-Attribute, kein Build-Step
- **Web Components only**: isolierte, wiederverwendbare Komponenten, framework-agnostisch
- **Für**: Server-gerenderte Apps mit Progressive Enhancement, CMS-Integrationen

> Mode C bleibt in diesem Skill — htmx und Alpine.js sind CDN-ladbar, kein Build-Tooling nötig.

### 4. Pre-Code Architecture Plan

Plan als Kommentar im Code oder im Chat vor dem Coding festhalten:

```
/*
 * Project: [Name]
 * Mode: [A / B / C]
 * Views: [Auflistung]
 * State: [Was gespeichert wird und wo]
 * API: [Endpoints, Auth-Methode]
 * Components: [Wiederverwendbare Teile]
 * Constraints: [Browser-Support, Performance-Budget, a11y]
 * Estimated Complexity: [Low / Medium / High]
 */
```

**Erst nach diesem Plan: Code schreiben.**

---

## Core Philosophy

**Modern vanilla web ist nicht "altmodisch" — es ist Engineering-Disziplin.**

Was früher React brauchte, gibt es heute nativ:
- Components → Web Components / `<template>`
- Scoped Styles → CSS Custom Properties + `@layer` + `:scope`
- Reaktivität → `Proxy`, `MutationObserver`, `EventTarget`
- Routing → History API + `popstate`
- Module → Native ES Modules (`type="module"`)
- Animation → CSS `@keyframes`, Web Animations API
- Layout → CSS Grid, Flexbox, Container Queries

Schreibe als ob die Plattform das Framework ist — denn das ist sie.

---

## HTML: Semantic First

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>Seitentitel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav aria-label="Hauptnavigation">
      <ul role="list">
        <li><a href="/">Start</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h1>Überschrift</h1>
      <p>Inhalt.</p>
    </article>
  </main>
  <footer>...</footer>
  <script type="module" src="app.js"></script>
</body>
</html>
```

**Semantische Elemente prüfen:**
`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`,
`<figure>`, `<figcaption>`, `<time>`, `<address>`, `<dialog>`, `<details>`, `<summary>`,
`<mark>`, `<output>`, `<progress>`, `<meter>`, `<template>`, `<slot>`

**Accessibility Defaults:**
- Jedes `<img>` bekommt `alt` (leer `alt=""` für dekorative Bilder)
- Formulare: immer `<label for="id">` + passendes `id`
- Interaktive Elemente: `aria-label` wenn Text nicht genug
- Keyboard-navigierbar: logische Tab-Reihenfolge, Fokus-Styles nie entfernen ohne Ersatz
- Farbkontrast: min. 4.5:1 für Fließtext, 3:1 für große Texte

---

## CSS: Modern, Powerful, Scoped

### Architektur-Pattern

```css
@layer reset, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  img, video, svg { display: block; max-width: 100%; }
  ul[role="list"], ol[role="list"] { list-style: none; }
  :focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
}

@layer base {
  :root {
    /* Colors */
    --color-bg: #0a0a0a;
    --color-surface: #141414;
    --color-text: #e8e8e8;
    --color-text-muted: #888;
    --color-accent: #f0f0f0;
    --color-border: rgba(255,255,255,0.08);

    /* Advanced Theming */
    --brand-hue: 220;
    --color-primary: hsl(var(--brand-hue) 100% 50%);
    --color-primary-muted: color-mix(in srgb, var(--color-primary), transparent 80%);
    --color-primary-strong: color-mix(in srgb, var(--color-primary), black 20%);

    /* Typography */
    --font-sans: 'Inter Variable', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    --font-display: 'Cabinet Grotesk', 'Clash Display', sans-serif;
    --text-xs: clamp(0.75rem, 1.5vw, 0.875rem);
    --text-sm: clamp(0.875rem, 2vw, 1rem);
    --text-base: clamp(1rem, 2.5vw, 1.125rem);
    --text-lg: clamp(1.125rem, 3vw, 1.5rem);
    --text-xl: clamp(1.5rem, 4vw, 2rem);
    --text-2xl: clamp(2rem, 6vw, 3.5rem);
    --text-hero: clamp(3rem, 10vw, 7rem);

    /* Spacing */
    --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
    --space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
    --space-12: 3rem;    --space-16: 4rem;    --space-24: 6rem;

    /* Layout */
    --container: 1200px;
    --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 9999px;

    /* Motion */
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --duration-fast: 150ms; --duration-base: 250ms;
    --duration-slow: 400ms; --duration-xslow: 700ms;
  }

  /* CSS-native UI-Logik — kein JS nötig */
  body:has(dialog[open]) { overflow: hidden; }

  /* Scoped Theming: Komponenten überschreiben Tokens lokal */
  .card-featured {
    --color-surface: var(--color-primary-muted);
    --color-border: var(--color-primary);
  }

  /* Dark/Light ohne JS */
  @media (prefers-color-scheme: light) {
    :root { --color-bg: #ffffff; --color-text: #0a0a0a; }
  }
}
```

### Layout

```css
/* Full-bleed layout mit Content-Rail */
.layout {
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [content-start] min(var(--container), 100% - var(--space-8) * 2)
    [content-end] 1fr [full-end];
}
.layout > * { grid-column: content; }
.layout > .full-bleed { grid-column: full; }

/* Auto-responsive Grid */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: var(--space-6);
}

/* Container Queries statt Media Queries für Komponenten */
.card-wrapper { container-type: inline-size; }
@container (min-width: 400px) { .card { flex-direction: row; } }
```

### Animationen

```css
/* Scroll-driven — kein JS */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-on-scroll {
  animation: fade-up 0.6s var(--ease-out) both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

/* GPU-beschleunigte Hover-Effekte */
.card {
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
```

---

## Responsive & Mobile-First

**Grundregel: Mobile styles first — dann per `min-width` erweitern.**

### Breakpoint-Tokens

```css
:root {
  --bp-sm:  640px;   /* Tablet */
  --bp-md:  768px;   /* Tablet landscape */
  --bp-lg:  1024px;  /* Desktop */
  --bp-xl:  1280px;  /* Wide */
}
```

### Breakpoint-Pattern

```css
/* Base: Mobile (320px+) — ohne Media Query */
.container { padding: var(--space-4); }

@media (min-width: 640px) {
  .container { padding: var(--space-8); max-width: 640px; margin-inline: auto; }
}
@media (min-width: 1024px) {
  .container { max-width: var(--container); }
}
```

### Responsive Grid

```css
/* Auto-responsive: kein Breakpoint nötig */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: var(--space-6);
}

/* Explizite Stufen wenn Kontrolle nötig */
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}
@media (min-width: 640px)  { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
```

### Responsive Images

```css
img { max-width: 100%; height: auto; }

.hero-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

```html
<!-- srcset für unterschiedliche Auflösungen -->
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1600.jpg 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  width="800" height="450"
  loading="lazy"
  alt="Beschreibung">
```

### Flexbox Navigation

```css
.nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
@media (min-width: 768px) {
  .nav { flex-direction: row; justify-content: space-between; align-items: center; }
}
```

### Mobile-First Checkliste

- Touch-Targets: **min. 44×44px** (`min-height: 44px; min-width: 44px`)
- Lesbare Zeilenlänge: **45–75 Zeichen** (`max-width: 65ch`)
- Kein `hover`-only Interaktion — immer auch `focus` / `active`
- Landscape-Orientierung testen (besonders bei fixen Heights)
- Safe Areas: `padding: env(safe-area-inset-top) env(safe-area-inset-right) ...`

---

## Design Aesthetic Guidelines

**Der technisch perfekte Code bringt nichts, wenn das Ergebnis generisch aussieht.**

### Vor dem Coding: Ästhetische Richtung festlegen

Wähle eine klare Richtung und commit dazu. Nicht "irgendwie modern" — sondern konkret:

| Richtung | Beispiel-Charakteristika |
|---|---|
| Brutalist/Raw | Harte Kanten, Systemfonts as statement, maximaler Kontrast |
| Editorial/Magazin | Starke Typographie-Hierarchie, asymmetrisches Layout, Weißraum |
| Retro-Futuristisch | Scanlines, Monospace, CRT-Grün, Pixel-Details |
| Organisch/Natural | Warme Erdtöne, Textur, runde Formen, handgemacht wirkend |
| Industrial/Utilitarian | Technische Schriften, Grid-betont, klar, werkzeugähnlich |
| Maximalist | Überlagernde Elemente, Farbexplosion, kontrolliertes Chaos |
| Luxury/Refined | Viel Raum, Gold/Creme, Serifenschriften, zurückhaltende Bewegung |

**CRITICAL: Keine Richtung ist falsch — fehlende Entscheidung ist falsch.**

### Typographie

```css
/* VERMEIDEN: Inter, Roboto, Arial, system-ui als Standardwahl */
/* NUTZEN: Charakterstarke Fonts von Google Fonts oder system-native Alternativen */

/* Beispiele je nach Richtung */
--font-display: 'Playfair Display', Georgia, serif;      /* Editorial */
--font-display: 'Space Mono', 'Courier New', monospace;  /* Tech/Retro */
--font-display: 'DM Serif Display', serif;               /* Luxury */
--font-display: 'Bebas Neue', Impact, sans-serif;        /* Brutalist */
--font-display: 'Cormorant Garamond', serif;             /* Refined */

/* Display + Body immer als Paar denken */
--font-body: 'Lora', Georgia, serif;        /* zu Playfair Display */
--font-body: 'IBM Plex Mono', monospace;    /* zu Space Mono */
```

```html
<!-- Google Fonts: display=swap + preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora&display=swap" rel="stylesheet">
```

### Farbe & Atmosphäre

```css
/* Dominante Farbe + scharfer Akzent schlägt gleichverteilte Palette */
:root {
  --color-bg:      #0d0d0d;      /* Dominant: 70% der Fläche */
  --color-surface: #161616;      /* Sekundär: Karten, Panels */
  --color-text:    #f0ede6;      /* Haupttext */
  --color-muted:   #666;         /* Metainfo */
  --color-accent:  #e8c547;      /* Akzent: sparsam, aber scharf */
}

/* Hintergrund: nie einfach solid — Atmosphäre schaffen */
body {
  background-color: var(--color-bg);
  background-image:
    radial-gradient(ellipse at 20% 50%, hsl(45 60% 20% / 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, hsl(200 60% 15% / 0.1) 0%, transparent 50%);
}

/* Noise-Textur für organische Tiefe (SVG-basiert, kein Bild nötig) */
body::before {
  content: '';
  position: fixed; inset: 0; pointer-events: none; z-index: 999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}
```

### Motion & Micro-Interactions

```css
/* Ein orchestrierter Page-Load schlägt viele kleine Animations */
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-title  { animation: reveal 0.8s var(--ease-out) 0.1s both; }
.hero-sub    { animation: reveal 0.8s var(--ease-out) 0.25s both; }
.hero-cta    { animation: reveal 0.8s var(--ease-out) 0.4s both; }

/* Hover: Kontext-sensitiv, nicht generisch */
/* Schlecht: scale(1.05) auf allem */
/* Gut: passend zur Richtung */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute; bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--color-accent);
  transition: width var(--duration-base) var(--ease-out);
}
.nav-link:hover::after { width: 100%; }
```

### Layout & Komposition

```css
/* Asymmetrie und unerwartete Proportionen > gleichmäßiges Grid */

/* Diagonaler Clip */
.hero {
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
  padding-bottom: 8vw;
}

/* Überlappende Elemente */
.feature-image {
  margin-top: -4rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 40px 80px rgba(0,0,0,0.4);
}

/* Großzügiger Negativraum als Designelement */
.section { padding-block: clamp(4rem, 12vw, 10rem); }
```

### Anti-Patterns — nie verwenden

```
❌ Inter / Roboto / Arial als "Default"
❌ Lila Gradient auf weißem Hintergrund
❌ Gleichmäßige Farbpalette ohne dominante Farbe  
❌ box-shadow: 0 2px 4px rgba(0,0,0,0.1) überall
❌ border-radius: 8px auf jedem Element
❌ Scale-Hover (transform: scale(1.05)) als einzige Interaktion
❌ Space Grotesk als "kreativer" Font-Wahl
❌ Drei gleichwertige Pastellfarben (#f0f0f0, #e0e0e0, #d0d0d0)
```

---

## JavaScript: Modern ES, No Framework

### Module Entry Point

```javascript
// app.js
import { initNav } from './components/nav.js';
document.addEventListener('DOMContentLoaded', () => { initNav(); });
```

### DOM Utilities

```javascript
// utils/dom.js
export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
export const on = (el, ev, fn, opts) => el.addEventListener(ev, fn, opts);
export function createElement(tag, attrs = {}, ...children) {
  const el = Object.assign(document.createElement(tag), attrs);
  el.append(...children);
  return el;
}
```

### State Management (~30 Zeilen, ersetzt Redux)

```javascript
// utils/store.js
function createStore(initialState) {
  let state = { ...initialState };
  const listeners = new Set();
  return {
    get: () => ({ ...state }),
    set(partial) {
      state = { ...state, ...partial };
      listeners.forEach(fn => fn(state));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
}
export const store = createStore({ auth_token: null, theme: 'dark' });
```

### Form Validation: Constraint Validation API

*Ersetzt Formik, Yup — nutzt was der Browser bereits hat.*

```javascript
// utils/forms.js
export function setupValidation(formEl, onSuccess) {
  formEl.setAttribute('novalidate', '');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formEl.checkValidity()) {
      onSuccess(Object.fromEntries(new FormData(formEl)));
    } else {
      formEl.querySelector(':invalid').focus();
    }
  });

  formEl.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      input.classList.toggle('is-invalid', !input.checkValidity());
      const msg = input.validity.valueMissing
        ? input.dataset.errorRequired
        : input.dataset.errorInvalid;
      input.setCustomValidity(msg ?? '');
    });
  });
}
```

```html
<input type="email" name="email" required
  data-error-required="E-Mail ist Pflichtfeld"
  data-error-invalid="Bitte gültige E-Mail eingeben">
```

### API Client: Centralized Fetch mit Interceptors

*Ersetzt Axios — gleiche Features, null Overhead.*

```javascript
// utils/api.js
const BASE_URL = 'https://api.example.com';

async function request(endpoint, options = {}) {
  const { store } = await import('./store.js');
  const token = store.get().auth_token;

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    signal: options.signal ?? AbortSignal.timeout(8000),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (response.status === 401) {
    store.set({ auth_token: null });
    window.dispatchEvent(new CustomEvent('auth:expired'));
    throw new Error('Unauthorized');
  }

  if (!response.ok) throw new Error(`API Error: ${response.status}`);

  const ct = response.headers.get('content-type');
  return ct?.includes('application/json') ? response.json() : response.text();
}

export const api = {
  get:    (url, opts)       => request(url, { method: 'GET', ...opts }),
  post:   (url, data, opts) => request(url, { method: 'POST',  body: JSON.stringify(data), ...opts }),
  put:    (url, data, opts) => request(url, { method: 'PUT',   body: JSON.stringify(data), ...opts }),
  patch:  (url, data, opts) => request(url, { method: 'PATCH', body: JSON.stringify(data), ...opts }),
  delete: (url, opts)       => request(url, { method: 'DELETE', ...opts }),
};
```

### Auth Flow: PKCE / OAuth2 ohne SDK

```javascript
// utils/auth.js
export const isAuthorized = () => !!sessionStorage.getItem('token');

export async function handleAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');

  if (!code || state !== sessionStorage.getItem('oauth_state')) {
    throw new Error('Invalid OAuth callback');
  }

  const res = await api.post('/auth/exchange', {
    code,
    code_verifier: sessionStorage.getItem('pkce_verifier'),
  });

  sessionStorage.setItem('token', res.token);
  sessionStorage.removeItem('oauth_state');
  sessionStorage.removeItem('pkce_verifier');
  window.history.replaceState({}, document.title, '/dashboard');
}

window.addEventListener('auth:expired', () => {
  sessionStorage.removeItem('token');
  window.location.href = '/login';
});
```

### Web Components

```javascript
class MyCard extends HTMLElement {
  static observedAttributes = ['title', 'variant'];
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        :host([variant="featured"]) .card { border: 2px solid var(--color-accent, #fff); }
        .card { padding: 1.5rem; border-radius: 8px; background: var(--card-bg, #1a1a1a); }
      </style>
      <div class="card"><h2>${this.getAttribute('title') ?? ''}</h2><slot></slot></div>
    `;
  }
}
customElements.define('my-card', MyCard);
```

### Intersection Observer

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
```

---

## File Structure

**Mode A** (Single File): `index.html` ← alles inline

**Mode B** (App):
```
project/
├── index.html
├── style.css
├── app.js
├── components/  (nav.js, my-card.js)
├── pages/       (home.js, dashboard.js)
└── utils/       (dom.js, store.js, api.js, auth.js, forms.js)
```

**Mode C** (htmx):
```html
<button hx-get="/api/items" hx-target="#list" hx-swap="outerHTML">Laden</button>
<script src="https://unpkg.com/htmx.org@2/dist/htmx.min.js"></script>
```

---

## Performance Rules

1. `type="module"` ist immer deferred — kein render-blocking
2. Critical CSS inline in `<head>`, Rest extern
3. Images: `loading="lazy"` + `width`/`height` + `srcset`
4. Fonts: `font-display: swap` + `<link rel="preload">`
5. Animationen: nur `transform` und `opacity` (kein Layout-Reflow)
6. Event Delegation statt per-element-Listener für dynamische Listen

---

## Native APIs statt Bibliotheken

| Statt... | Nativ |
|---|---|
| Axios | `api.js` (dieser Skill) |
| Formik / Yup | Constraint Validation API |
| moment.js | `Intl.DateTimeFormat` |
| Lodash debounce | `setTimeout` + Closure |
| animate.css | `@keyframes` + `animation` |
| Swiper (simpel) | CSS `scroll-snap` |
| Auth0 SDK | PKCE via fetch (dieser Skill) |
| Redux | `createStore()` (dieser Skill) |
| mitt / EventEmitter | `EventTarget` subclass |

---

## Output Checklist

**Architektur**
- [ ] Assessment durchgeführt — Mode A/B/C explizit gewählt
- [ ] Architektur-Plan dokumentiert

**HTML / Accessibility**
- [ ] Valides semantisches HTML5, `lang` gesetzt
- [ ] Keyboard-zugänglich, Fokus-Styles vorhanden
- [ ] Alle `<img>` haben `alt`, Formulare haben `<label>`

**CSS / Responsive**
- [ ] CSS Custom Properties für alle Design Tokens
- [ ] Mobile-First: Base-Styles ohne Media Query, Erweiterung via `min-width`
- [ ] Touch-Targets ≥ 44×44px
- [ ] Responsive Images: `srcset`, `sizes`, `aspect-ratio`, `loading="lazy"`
- [ ] Responsiv via `clamp()`, `auto-fill`, Container Queries

**JavaScript**
- [ ] `type="module"` auf Script-Tags
- [ ] Kein `var` — nur `const`/`let`
- [ ] Error-Handling auf allen async-Operationen

**Ästhetik**
- [ ] Klare Designrichtung festgelegt (nicht "irgendwie modern")
- [ ] Charakterstarker Font gewählt (kein Inter/Roboto als Default)
- [ ] Dominante Farbe + scharfer Akzent (keine gleichverteilte Palette)
- [ ] Hintergrund hat Tiefe (Gradient, Textur — kein reines Solid)
- [ ] Motion: orchestrierter Page-Load statt generischer hover-Scale
- [ ] Kein Anti-Pattern aus der verbotenen Liste

**Kompatibilität**
- [ ] Läuft ohne Polyfills in aktuellem Chrome, Firefox, Safari