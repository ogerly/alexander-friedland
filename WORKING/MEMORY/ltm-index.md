# LTM Index — Alexander Friedland

## Session History

### 2026-05-01

| Date | Workpaper | Topic | Description |
|------|-----------|-------|-------------|
| 2026-05-01 | WP-2026-05-01-BOOT-init-First-Session.md | BOOT | First session — repository scan, AAMS bootstrap |
| 2026-05-03 | WP-2026-05-03-ARCH-Content-Update-AAMS-OS-Arena.md | ARCH | AAMS/OS Arena as central projects, aside-block fix, Open Source philosophy |

### 2026-08-24

| Date | Workpaper | Topic | Description |
|------|-----------|-------|-------------|
| 2026-08-24 | blog-artikel-erstellen.md | RES | Whitepaper für neue Blog-Artikel erstellt |
| 2026-08-24 | WP-2026-08-24-RES-Dozent-Positionierung.md | RES | Dozent-Titel entfernt, SAP Uni Potsdam Erfahrung eingefügt |
| 2026-08-24 | WP-2026-08-24-ARCH-Animierter-Hero-Kompass.md | ARCH | Animierter SVG-Kompass mit Maus-Parallax |

### 2026-09-16 

| Date | Workpaper | Topic | Description |
|------|-----------|-------|-------------|
| 2026-09-16 | WP-2026-09-16-FLD-CV-Website-Update.md | RES | CV-Sektion `#cv` um Schlüsselprojekte 2024–2026 erweitert (AAMS, Aletheia, PAX, Lokale-KI-Stack, Mantis, Ocelot); style.css `.cv-subhead` + `.cv-link`; README-Leitfaden Regeln: keine privaten Daten auf der Website |

### 2026-09-18 

| Date | Workpaper | Topic | Description |
|------|-----------|-------|-------------|
| 2026-09-18 | WP-2026-09-18-RES-Blog-MICA-Borsen-Exodus.md | RES | Neuer Blog-Artikel „Die Börsen gehen. Die EU bleibt. Und wir stehen im Regen.“ (18.09.2026, 11 min, „Regulierung & Realität“) — volles Publikationspaket: HTML + Hero/Vorschau (`blog-images/borsen-exodus-eu.jpg`) + metadata (erstes Element) + index.html-Grid + README + **neue Seite `blog/index.html`** (Blog-Übersicht, alle 21 Artikel, statisch). Fixes: 40 Canonical/og:URLs in 20 Bestandsartikeln (Segment `/blog/` fehlte), Back-Link `"/"` → `../blog/index.html`. Whitepaper `blog-artikel-erstellen.md`: URL-Regel, Subtitle, blog/index.html-Schritt. AAMS-Check: 2.4.0 = Remote, aktuell. |

## Key Artifacts

- `index.html` — Portfolio-Seite (Hero, Blog, Videos, Über, CV, Kontakt)
- `style.css` — Styles (Reset, Base, Components, Utilities)
- `app.js` — Entry Point (nav, hero, reveal, contact, compass)
- `components/` — nav.js, hero.js, reveal.js, contact.js, compass.js
- `blog/` — 21 statische Blog-Artikel (HTML mit OG-Tags) + `blog/index.html` (Blog-Übersicht, statisch)
- `blog-images/` — 23 Blog-Bilder
- `data/blog-metadata.json` — Metadaten aller 21 Artikel
- `WORKING/WHITEPAPER/` — Stable architecture docs
- `WORKING/WORKPAPER/` — Session workpapers
- `.agent.json` — AAMS/2.0 manifest
- `READ-AGENT.md` — Repository entry point

## Architecture

### Markenarchitektur

1. **Alexander Friedland** — Hauptidentität, Person, Architekt
2. **@ogerly** — GitHub / Open Source / Experimente

**DEVmatrose existiert nicht mehr.** Firma gelöscht, keine Referenzen mehr auf der Seite.

### Positionierung

> Softwareentwickler seit 1999. Lokale KI-Modelle für Coding. Blog über KI, dezentrale Systeme und Coding. Videos zum Lernen. Technische Schulungen für Schulen und Unternehmen.

### Echter Wert: Lokales KI-Coding

```
Qwen3.6 35B A3B → LM Studio → opencode ↔ VS Code → AAMS
```

Dieser Stack funktioniert überall — für jedes Projekt. Keine Cloud, keine Abhängigkeit.

### Hauptplattformen

1. **AAMS** — Agent Manifest. Every Agent. One File. → github.com/ogerly/AAMS
2. **Blog** — 21 Artikel als statische HTML. Tailwind + DaisyUI per CDN. → ogerly.github.io/alexander-friedland/blog/
3. **YouTube** — @DEVmatrose (Videos über KI, Coding, dezentrale Systeme)
4. **GitHub** — @ogerly (Open Source, 12+ Jahre)

### Blog-Architektur

- Pro Artikel: `blog/blog-<slug>.html` mit OG-Tags, Tailwind CDN, DaisyUI CDN
- **Blog-Übersicht: `blog/index.html`** (statisch, Hauptsite-Design, alle Artikel nach Datum absteigend; seit 18.09.2026 — Back-Links `../blog/index.html` in allen Artikeln sind damit valide)
- Bilder: `blog-images/` (Hero 1200x630px)
- Metadaten: `data/blog-metadata.json`
- **URL-Regel:** Projektsite → absolute Artikel-URLs immer `https://ogerly.github.io/alexander-friedland/blog/blog-<slug>.html` (Segment `/blog/` Pflicht in canonical/og:url/Share-Links)
- Whitepaper: `WORKING/WHITEPAPER/blog-artikel-erstellen.md` (Workflow, Template, Checkliste)

### Dozent-Erfahrung

- SAP Uni Potsdam: Ein Jahr, Studenten im ersten Semester Fullstack-Entwicklung, einmal pro Woche
- Im Rahmen eines Kollegen, der dort als Dozent tätig war

### Philosophie

> Bevor ich baue, suche ich den Weg über Open Source. Strategisch kostengünstige Pfade finden, anderen Zugang zu Technik verschaffen abseits vom Mainstream. Technische Eigenverantwortung und Souveränität.

### Whitepapers

- `blog-artikel-erstellen.md` — Workflow für neue Blog-Artikel (HTML-Template, Checkliste, Farbschema)
- `Portfolio-Architecture.md` — Architektonische Prinzipien der Portfolio-Seite
- `alexander-friedland-profil.md` — Profil für Bewerbungen (lokal, nicht nach GitHub)

### Workpapers (Auswahl)

- `WP-2026-08-24-Blog-Migration.md` — Blog-Migration DEVmatrose → Alexander Friedland
- `WP-2026-08-24-RES-Dozent-Positionierung.md` — Dozent-Titel entfernt, ehrliche Formulierung
- `WP-2026-08-24-ARCH-Animierter-Hero-Kompass.md` — Animierter SVG-Kompass
- `WP-2026-08-24-Formular-Update` — Kontaktformular Formspree-URL aktualisiert
- `WP-2026-08-24-RES-Bewerbungen-Workflow.md` — Bewerbungsprozess strukturieren

### Deployment

- Nur `main` Branch — GitHub Pages dient direkt von `main` aus
- `deploy` Branch wurde entfernt (24.08.2026)

## Live-URL

https://ogerly.github.io/alexander-friedland/

### 2026-08-25
| WP: `WP-2026-08-25-ARCH-Projektdetailseite-AAMS-Setup` | projects.html — Projektdetailseite mit allen 100 GitHub-Repos (keine Forks), 8 Kategorien, Project Cards, Featured-Badges | AAMS v2.0 → v2.4.0 upgedatet (.agent.json merged mit bewerbungen-Sektionen, .aams-version aktualisiert, READ-AGENT.md erweitert) | Navigation in index.html ("Projekte"-Link), style.css +40 Zeilen (Project Grid, Cards, Badges, Expertise-Level) | WHITEPAPER: GITHUB-Repos-Analyse, README-Leitfaden, README-GITHUB-Ogerly, projects-html-dokumentation |
