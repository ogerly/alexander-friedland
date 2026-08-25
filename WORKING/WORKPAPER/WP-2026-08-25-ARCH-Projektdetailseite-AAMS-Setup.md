# WP-2026-08-25-ARCH-Projektdetailseite + AAMS-Setup

## session_goal

- Projektdetailseite `projects.html` erstellen mit allen 100 GitHub-Repos (keine Forks)
- Style-Updates für Project Cards, Badges, Expertise-Blöcke
- Navigation in index.html erweitern ("Projekte"-Link)
- WHITEPAPER-Docs erstellen: GITHUB-Repos-Analyse, README-Leitfaden, projects-html-dokumentation
- AAMS klonen und auf alexander-friedland anwenden

## repository_inventory

### Geänderte Dateien
| Datei | Änderung | Grund |
|-------|----------|-------|
| `projects.html` | **Neu** (1739 Zeilen) | Projektdetailseite mit allen Repos, 8 Kategorien |
| `style.css` | +40 Zeilen | `.project-grid`, `.project-card`, `.project-badge`, `.expertise-level`, `.tag` |
| `index.html` | +3 Links | "Projekte" in Desktop-Navigation, Mobile-Menü, Footer |

### Neue WHITEPAPER-Dateien
| Datei | Zweck |
|-------|-------|
| `WORKING/WHITEPAPER/GITHUB-Repos-Analyse.md` | 100 Repos analysiert, 11 Bereiche sortiert |
| `WORKING/WHITEPAPER/README-GITHUB-Ogerly.md` | Originale README für GitHub (1:1 übernehmen) |
| `WORKING/WHITEPAPER/README-Leitfaden.md` | Strukturleitfaden für README (Website-First) |
| `WORKING/WHITEPAPER/projects-html-dokumentation.md` | Dokumentation der Projektdetailseite |

### Neue Verzeichnisse
| Pfad | Inhalt |
|------|--------|
| `AAMS/` | AAMS-Referenzrepo geklont (v2.4.0) |

## key_findings

1. **100 nicht-Fork Repos** gefunden und in 8 Kategorien sortiert
2. **Top-Repos nach Stars:** Datenbank-Deutschland (14⭐), AAMS (5⭐), xp-collector (4⭐)
3. **Erfahrungslevel aktualisiert:** Webdesign/HTML/CSS = Experte, KI-Tooling/Data Labeling = Fortgeschritten
4. **projects.html** folgt exakt dem Design-System von index.html (gleiche Navigation, Farben, Typografie)
5. **AAMS v2.0 → v2.4.0:** Lokale Version ist veraltet, Remote hat 2.4.0

## open_questions

1. Soll AAMS auf v2.4.0 upgedated werden? (lokale .agent.json hat noch 2.0)
2. projects.html sollte in die Navigation der Website aufgenommen werden → ✅ erledigt
3. Sollen weitere Whitepapers aus den Workpapers migriert werden?

## file_protocol

### Geändert
- `projects.html` — erstellt, alle 100 Repos mit Links, Beschreibungen, Badges
- `style.css` — Project Card Styles hinzugefügt (Zeilen ~925-1010)
- `index.html` — "Projekte"-Link in Nav, Mobile Nav und Footer

### Neu erstellt
- `WORKING/WHITEPAPER/GITHUB-Repos-Analyse.md` — Repository-Analyse mit 11 Bereichen
- `WORKING/WHITEPAPER/README-GITHUB-Ogerly.md` — Originale README für GitHub
- `WORKING/WHITEPAPER/README-Leitfaden.md` — Strukturleitfaden README
- `WORKING/WHITEPAPER/projects-html-dokumentation.md` — projects.html Dokumentation

### Geklont
- `AAMS/` — AAMS v2.4.0 Referenzrepo von https://github.com/ogerly/AAMS

## decisions

1. **projects.html als externe Seite** — Nicht in index.html eingebettet, sondern eigene HTML-Seite mit eigenem Nav
2. **8 Kategorien statt 11** — Für Außenstehende besser verständlich (KI, Frontend, Dezentral, Visualisierung, Audio, Webdesign, Tools, Zusammenfassung)
3. **Featured-Badges** — Wichtige Projekte hervorgehoben (AAMS = "⭐ Wichtigstes Projekt", Datenbank-Deutschland = "Beliebtestes Repo")
4. **Erfahrungslevel korrigiert** — Webdesign/HTML/CSS auf Experte gehoben, KI-Tooling auf Fortgeschritten

## next_steps

1. AAMS v2.0 → v2.4.0 updaten (VERSION-CHECK + on_update)
2. projects.html auf GitHub Pages deployen (bereits Teil des Commits)
3. WHITEPAPER-INDEX.md erstellen für neue Whitepapers
4. ltm-index.md mit diesem Workpaper aktualisieren
