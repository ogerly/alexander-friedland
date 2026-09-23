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

### 2026-09-23 

| Date | Workpaper | Topic | Description |
|------|-----------|-------|-------------|
| 2026-09-23 | WP-2026-09-23-RES-Blog-Hermes-Waechter-AAMS.md | RES | Neuer Blog-Artikel „Hermes — der Wächter über meinen Kontext" (23.09.2026, 11 min, „KI-Architektur & Praxis", ~853 W — 2. Fassung aus NEUER-ARTIKEL-TEXT.md) — volles Publikationspaket: HTML + Hero (`blog-images/hermes-waechter-aams.png`, 1536×1024) + metadata (erstes Element, 23 posts) + index.html-Grid + blog/index.html + README. **AAMS-Positionierung (bindend): Spezifikation, kein Standard** (wird Standard durch zuverlässigen Einsatz/Firmen-Verlangen) — Artikel fixiert + Callout. AAMS-Verweise: github.com/ogerly/AAMS + Issue #53 + Discussions. Hero dynamisch: `clamp(300px, 45vh, 640px)` (Artikel + Whitepaper-Template). AAMS-Repo: SHOWCASE.md + Eintrag (pushed 1bd92ef; alter PAT verfallen → Push mit .env-Token). Git: `AAMS/`-Clone in .gitignore; Push enthält auch nie committeden 19.09-Artikel. |
| 2026-09-23 | WP-2026-09-23-RES-Blog-Maerchen-Digitale-Souveraenitaet.md | RES | Neuer Blog-Artikel „Das Märchen von der digitalen Souveränität: Wenn Corporate Cloud auf Kontrollwahn trifft" (23.09.2026, 10 min, „Datenschutz & Polemik", ~778 W) — Polemik gegen das Schönredewort „digitale Souveränität" (Monopol-Cloud, Hardware-Schranke, Know-how-Monopol). Volles Publikationspaket: HTML + Hero (`blog-images/maerchen-von-der-digitalen-souveraenitaet.jpg`, 1584×672) + metadata (erstes Element, 24 posts) + Grids + README (ersetzt Hermes-Block). Anreicherung: Callouts + 2-Karten-Grid + AAMS-Link (Spezifikation). Social-Media-Texte im WP. **Push blockiert (Token-Vorfall, siehe nächste Zeile).** |
| 2026-09-23 | WP-2026-09-23-GOV-PUSH-Token-Block-Security-Cleanup.md | GOV | **Token-Vorfall (RESOLVED):** `.env`-Token (Fine-grained) ab ~13:20 abgelehnt (401/403/404), war 07:40 + 13:00 noch OK → Expiry bzw. fehlende Write-Berechtigung auf Repo-Ebene. Lösung: frischer **Classic-PAT (Scope `repo`)** in `.env` → Pushes `865ac69` + `83c5d84` + `1d19ab3` erfolgreich, Märchen-Artikel live (HTTP 200). **User-Regel (bindend, D1): Token nur in `.env`** — AAMS-Clone origin-Remote bereinigt (alter PAT entfernt), Token-Präfix aus Workpaper entfernt; False-Positives: `.agent.json` = mask_patterns, WP-2026-09-16 = maskierter Verweis. **Decision-Promotion: D1 → Whitepaper `security-token-regeln.md`.** AAMS-Repo-Diary-Zeile liegt lokal (Session-Close dort = 09-22-Sitzung). |

## Key Artifacts

- `index.html` — Portfolio-Seite (Hero, Blog, Videos, Über, CV, Kontakt)
- `style.css` — Styles (Reset, Base, Components, Utilities)
- `app.js` — Entry Point (nav, hero, reveal, contact, compass)
- `components/` — nav.js, hero.js, reveal.js, contact.js, compass.js
- `blog/` — 24 statische Blog-Artikel (HTML mit OG-Tags) + `blog/index.html` (Blog-Übersicht, statisch)
- `blog-images/` — 26 Blog-Bilder
- `data/blog-metadata.json` — Metadaten aller 24 Artikel
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
2. **Blog** — 24 Artikel als statische HTML. Tailwind + DaisyUI per CDN. → ogerly.github.io/alexander-friedland/blog/
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
- `security-token-regeln.md` — **Token nur in `.env`** (bindend), Push-Strategie (einmalige URL), Token-Hygiene, Leak-Check (seit 23.09.2026, aus D1 GOV-WP)

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
