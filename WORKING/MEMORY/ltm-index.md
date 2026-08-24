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

## Key Artifacts

- `index.html` — Portfolio-Seite (Hero, Blog, Videos, Über, CV, Kontakt)
- `style.css` — Styles (Reset, Base, Components, Utilities)
- `app.js` — Entry Point (nav, hero, reveal, contact, compass)
- `components/` — nav.js, hero.js, reveal.js, contact.js, compass.js
- `blog/` — 19 statische Blog-Artikel (HTML mit OG-Tags)
- `blog-images/` — 21 Blog-Bilder
- `data/blog-metadata.json` — Metadaten aller 19 Artikel
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
2. **Blog** — 19 Artikel als statische HTML. Tailwind + DaisyUI per CDN. → ogerly.github.io/alexander-friedland/blog/
3. **YouTube** — @DEVmatrose (Videos über KI, Coding, dezentrale Systeme)
4. **GitHub** — @ogerly (Open Source, 12+ Jahre)

### Blog-Architektur

- Pro Artikel: `blog/blog-<slug>.html` mit OG-Tags, Tailwind CDN, DaisyUI CDN
- Bilder: `blog-images/` (Hero 1200x630px)
- Metadaten: `data/blog-metadata.json`
- Whitepaper: `WORKING/WHITEPAPER/blog-artikel-erstellen.md` (Workflow, Template, Checkliste)

### Dozent-Erfahrung

- SAP Uni Potsdam: Ein Jahr, Studenten im ersten Semester Fullstack-Entwicklung, einmal pro Woche
- Im Rahmen eines Kollegen, der dort als Dozent tätig war

### Philosophie

> Bevor ich baue, suche ich den Weg über Open Source. Strategisch kostengünstige Pfade finden, anderen Zugang zu Technik verschaffen abseits vom Mainstream. Technische Eigenverantwortung und Souveränität.

### Whitepapers

- `blog-artikel-erstellen.md` — Workflow für neue Blog-Artikel (HTML-Template, Checkliste, Farbschema)
- `Portfolio-Architecture.md` — Architektonische Prinzipien der Portfolio-Seite

### Workpapers (Auswahl)

- `WP-2026-08-24-Blog-Migration.md` — Blog-Migration DEVmatrose → Alexander Friedland
- `WP-2026-08-24-RES-Dozent-Positionierung.md` — Dozent-Titel entfernt, ehrliche Formulierung
- `WP-2026-08-24-ARCH-Animierter-Hero-Kompass.md` — Animierter SVG-Kompass

## Live-URL

https://ogerly.github.io/alexander-friedland/
