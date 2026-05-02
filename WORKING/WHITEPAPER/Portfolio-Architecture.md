# Technical Whitepaper: DEVmatrose Portfolio
**Stand:** Mai 2026
**Architektur:** Pure Vanilla Web (HTML5, CSS3, ES6 Modules)
**Philosophie:** "Halte die Zügel deines Projektes immer in der Hand!"

---

## 1. Executive Summary
Dieses Whitepaper dokumentiert die architektonischen Prinzipien und technischen Entscheidungen der persönlichen Portfolio-Seite `alexander-friedland` (DEVmatrose). Entgegen dem Branchen-Trend zu überladenen Frameworks (React, Next.js) für statische Präsenzen, demonstriert dieses Projekt, wie mit nativer Web-Technologie (Vanilla JS) eine wartbare, performante und ästhetisch anspruchsvolle Anwendung ("Refined Look") aufgebaut wird. Es folgt den gleichen "Ownership"-Prinzipien, die auch bei AAMS und OS-Arena angewendet werden: Keine unötige Magie, keine Blackbox-Abstraktionen.

## 2. Core Principles (Die "Vanilla"-Doktrin)

### 2.1 Zero-Framework Policy
Das Projekt kommt komplett ohne Build-Step (Webpack, Vite) oder UI-Framework aus. 
* **Native ES-Module:** Skripte werden per `<script type="module">` nativ im Browser geladen.
* **Component-Architektur ohne JS-Overhead:** Die UI-Logik ist in Domänen-Module (`hero.js`, `nav.js`, `reveal.js`) gekapselt.
* **Kein Virtual DOM:** Direkte, minimale DOM-Manipulation über `utils/dom.js`.

### 2.2 Konsequentes Mobile-First
Die Stylesheets sind strikt nach dem Mobile-First-Paradigma aufgebaut:
* Die Base-Styles einer Klasse definieren immer das Layout für den kleinsten Viewport (Smartphones).
* Layout-Brüche (Grid-Columns, vergrößerte Paddings) werden ausschließlich über **Progressive Enhancement** (`@media (min-width: ...)`) abgewickelt. Desktop-First (`max-width`) ist ein Anti-Pattern in dieser Architektur.

### 2.3 Native APIs statt Drittbibliotheken
Was früher externe Bibliotheken erforderte, löst die Web-Plattform heute selbst:
* **Formular-Validierung:** Anstelle von JS-basierten Regex-Checks wird die native `Constraint Validation API` (`formEl.checkValidity()`, `:invalid`) genutzt.
* **Scroll-Animationen:** Der `IntersectionObserver` in `reveal.js` steuert das weiche Einblenden von UI-Komponenten (Staggering), ganz ohne Scroll-Magic-Libraries.
* **Performance-Loops:** Dauerhafte Events (wie der Custom Cursor im `mousemove`) werden über `requestAnimationFrame` vom Main-Thread entkoppelt.

## 3. Dateistruktur & Komponenten

Die Architektur spiegelt "Mode B" (Modular Vanilla App) wider:

```text
/
├── index.html         # Single Source of Truth für Struktur
├── style.css          # Globales Stylesheet (Mobile-First, CSS Layers)
├── app.js             # Entry Point (Bootstrapping)
├── components/        # UI-Logik Module
│   ├── contact.js     # Formular & Native Validation
│   ├── hero.js        # Cursor & Scroll-Hint
│   ├── nav.js         # Mobile-Menu, Scroll-Lock & Sticky State
│   └── reveal.js      # IntersectionObserver Logic
└── utils/
    └── dom.js         # Mini-Utility für Query-Selektoren ($)
```

## 4. CSS Architektur

Das CSS ist in native `@layer` unterteilt (`reset`, `base`, `components`, `utilities`), um Spezifitätskonflikte systemseitig auszuschließen.

* **Design Tokens:** Zentral in `:root` als CSS Custom Properties (Farben, Typography-Stacks, Spacing, Motion-Curves).
* **Fluid Typography:** Schriften skalieren dynamisch mit dem Viewport über `clamp()` (z.B. `font-size: clamp(3rem, 8vw, 7rem)`), wodurch exzessive Media-Queries für Schriftgrößen obsolet werden.
* **Performance:** Animationen triggern niemals Reflows. Es werden exklusiv `transform` und `opacity` animiert, um volle GPU-Beschleunigung und butterweiche 60fps zu garantieren.

## 5. Accessibility & UX
Trotz des Fokus auf minimale Dateigrößen und "Raw Engineering" werden Accessibility-Standards streng beachtet:
* Mobile-Menü Toggles triggern `aria-expanded`.
* Der Body erhält einen dynamischen `overflow: hidden` Scroll-Lock, solange Überlagerungen aktiv sind.
* Pflichtfelder sind semantisch mit `required` ausgezeichnet und werden vom Browser als Fokus-Trap bei fehlerhaften Submits angesteuert.

## 6. Datenfluss & Backend (Zero Persistence)
Analog zur ZPMS-Philosophie (Zero Persistence Messaging) wird auf ein dediziertes Datenbank-Backend für simple Kontaktanfragen verzichtet. Das System nutzt den `mailto:`-Standard (mit URL-encodierten Parametern) als Fallback, der die Souveränität und Sicherheit komplett auf das Mail-Ökosystem des Users auslagert.
