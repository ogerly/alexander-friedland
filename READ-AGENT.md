# Alexander Friedland — Repository

## Status

AAMS/2.0 bootstrap completed. WORKING-Struktur aktiv.

## Repository-Contents

| File | Purpose |
|------|---------|
| `index.html` | Persönliche Landing Page (Blog-Fokus, Video-Blog, Dozent) |
| `style.css` | Styles (Blog, Video-Sektion, CV) |
| `app.js` | Entry Point |
| `alexander-friedland.md` | Alte Markenarchitektur-Einschätzung (veraltet) |
| `opencode.json` | LM Studio provider config |
| `.agent.json` | AAMS/2.0 manifest |

## Struktur der Website

```
Alexander Friedland
├── Hero: "Lokal · Autonom · Souverän"
├── Blog (Hauptfokus): 19 Artikel
├── Video-Blog: YouTube, Dozent-Werkkasten
├── Über mich: Coder, Bastler, Dozent
├── Lebenslauf (öffentlich)
└── Kontakt: E-Mail, GitHub, YouTube, LinkedIn
```

## Blog

- **19 fertige Blog-Artikel** in `blog-metadata.json`
- Alle als statische HTML-Dateien in `blog/` (noch zu migrieren)
- OG-Tags für Social Media pro Artikel
- RSS-Feed geplant (Workpaper existiert)
- Alle URLs zeigen auf `ogerly.github.io/alexander-friedland/blog/`

## Video-Blog

- YouTube Kanal: @DEVmatrose
- Videos über KI, Coding, dezentrale Systeme
- Dozent-Werkkasten für Schulen und Unternehmen
- Bildungs-Inhalte als Werkzeugkasten

## Branding

- **Alexander Friedland** — Person / Hauptidentität / Dozent
- **@ogerly** — GitHub / Open Source / Experimente
- **@DEVmatrose** — YouTube Kanal (Video-Blog)
- Motto: "Digitales Arbeiten Lokal, Autonom, Souverän"
- **DEVmatrose Firma** — EXISTIERT NICHT MEHR

## Kontakt

- Email: devmatrose@proton.me
- GitHub: @ogerly
- YouTube: @DEVmatrose
- Website: ogerly.github.io/alexander-friedland/

## Migration von DEVmatrose

- Blog-Artikel müssen nach `blog/` konvertiert werden (Vue → statisch HTML)
- OG-Tags müssen auf neue Domain zeigen
- Autoren-Namen: "Alexander Friedland (@ogerly)"
- Blog-Workflow: Pro Artikel eine HTML-Datei mit OG-Tags
