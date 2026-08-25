# projects.html — Projektdokumentation

**Erstellt:** 2026-08-25  
**Datei:** `/projects.html` (Root des Repositories)

---

## Zweck

Die `projects.html` ist eine externe Projektübersichtsseite für die Website https://ogerly.github.io/alexander-friedland/. Sie zeigt alle eigenen GitHub-Repos (keine Forks) in einer strukturierten, kategorisierten Übersicht — optimiert für Außenstehende (Rekrutierer, Kunden, Partner).

---

## Struktur

Die Seite folgt dem gleichen Design-System wie `index.html`:
- Gleiche Navigation (mit "Projekte"-Link)
- Gleiche Farben, Typografie, Abstände
- Gleicher Footer

### Sektionen (in dieser Reihenfolge):

| # | Sektion | Inhalt |
|---|---------|--------|
| 01 | KI & Agenten-Architektur | AAMS, MantisClaw, Voice Agent, ImprintGuard, agent-sapiens, LTX-2, All-Assistant, CofifoAIWO, DataRefiner, skizzenOCR |
| 02 | Frontend & Webentwicklung | alexander-friedland, devmatrose, webgpu-arena, os-arena, xp-collector, nuxt-vuetify-storybook, global-future-compass, druid, alpine-nuxt-studio, livepeer-api-example-vue, ai-project-navigator, ogerly-website |
| 03 | Dezentrale Systeme | ZPMS, nostr-client-console, p2p-chat, nostrnews, PetalSwarm, datadler-gateway, dezentral-link-list, mesh-net-bluetooth |
| 04 | Datenvisualisierung & Interaktive UI | cluster-galaxy, ClusterGalaxyVisualizer, ClusterVisualizer, zufaellige-strichzeichnungen, parallax-starry-sky, MBB-ParallaxStepper, interactive-map, Datenbank-Deutschland |
| 05 | Audio & Transkription | audio-optimization-pipeline, pyannote-whisper-integration, whisper_audio_transcripter, video-to-ascii-converter |
| 06 | Webdesign & HTML/CSS | Distelkind, nodebb-plugins (4), ratsinfobot, dsnippet, dm-custom-css, Shu, aventura, d20, ddgram, airtime-sendeplan, humagramm, funky-prints-store, decay-calculator, sd-commandline-arguments, GPTAssistent |
| 07 | DevTools & Utilities | vue-find-unused, podigee-downloader, playstuff, hc-install-docker, HC_postman_collection, trading-simulation, MarketWave_Analyzer, chartanalysen, BotPrivateer, entropy-zero, awesom-claw, lucide, leonleon, diestelkind_datenbank, minX, BasisConsilium, hc_neo4j_commands, ocelot-nuxt-apollo-starter, ogerly.github.io, nostr-mania, ogerly |
| 08 | Zusammenfassung | Technologien-Tags + Erfahrungslevel |

---

## Design-Elemente

### Project Cards
- **Standard:** Dunkle Karte mit Border, Hover → Gold-Border + hellerer Hintergrund
- **Featured:** Gold-Border + goldener Gradient-Hintergrund + Badge ("⭐ Wichtigstes Projekt", "Eigene Website", etc.)
- **Layout:** 2-spaltiges Grid ab 601px, Single-Column auf Mobile

### Badges
Kleine goldene Labels in der oberen Ecke:
- `⭐ Wichtigstes Projekt` — AAMS
- `Eigene Website` — alexander-friedland
- `Portfolio` — devmatrose
- `Sovereign Tech` — ZPMS
- `Beliebtestes Repo (14⭐)` — Datenbank-Deutschland
- `README` — ogerly

### Tags
Globale `.tag`-Klasse für die Zusammenfassungs-Sektion:
- Monospace Font, kleine Größe
- Border in muted Farbe
- Flex-wrap Layout

### Expertise-Level
Zwei Blöcke mit linkem Border-Akzent:
- **Experte** (gold): KI & Agenten, Frontend, Dezentrale Systeme, Webdesign/HTML/CSS
- **Fortgeschritten** (text-secondary): Datenvisualisierung, Audio/Transkription, KI-Tooling

---

## Navigation

Die Seite ist in die Hauptnavigation der Website eingebunden:

| Ort | Link |
|-----|------|
| Desktop Nav | `Projekte` nach "Lebenslauf" |
| Mobile Nav | `Projekte` nach "Lebenslauf" |
| Footer | `Projekte` vor "E-Mail" |
| Hero CTA | "KI & Agenten", "Webentwicklung" (Spring-Links zu Sektionen) |

---

## Dateien

| Datei | Änderung |
|-------|----------|
| `projects.html` | **Neu** — Vollständige Projektdetailseite |
| `style.css` | **+40 Zeilen** — `.project-grid`, `.project-card`, `.project-badge`, `.expertise-level`, `.tag` |
| `index.html` | **+3 Links** — Projekte in Nav, Mobile Nav, Footer |

---

## Deployment

1. `projects.html` ins Root des `alexander-friedland` Repos kopieren
2. `style.css` Updates mergen
3. `index.html` Updates mergen
4. Auf GitHub Pages deployed unter: https://ogerly.github.io/alexander-friedland/projects.html

---

## Wartung

Bei neuen Projekten:
1. Repo in die passende Sektion einfügen (alphabetisch sortiert)
2. Link zu GitHub hinzufügen (`https://github.com/ogerly/<repo-name>`)
3. Beschreibung kurz halten (max. 1-2 Sätze)
4. Bei ⭐ Sternen: `X⭐` im `.project-meta` ergänzen
5. Bei wichtigem Projekt: `featured` Klasse + Badge hinzufügen
