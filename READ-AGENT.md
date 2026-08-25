# Alexander Friedland — Repository

## Status

AAMS/2.4.0 bootstrap completed (upgraded from 2.0 → 2.4.0 am 25.08.2026). WORKING-Struktur aktiv.

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

## Bewerbungen

> **WICHTIG: Bewerbungen hat nichts mit der Webseite, dem Blog oder der Website zu tun.**
> Bewerbungen sind ein interner Prozess — rein lokal, keine Verbindung zur öffentlichen Präsenz.

```
WORKING/WORKPAPER/Bewerbungen/
├── index.md          — Übersicht aller Bewerbungen
├── [Datum]-[stelle]-[firma].md — Bewerbungsdokument
└── ...
```

### Vorgehensweise

1. Stellenangebot erhalten → prüfen: passt es in den Bereich?
2. Bewerbungsdokument erstellen: `[Datum]-[stellenname]-[firma].md`
3. Antworttext im File verfassen (Typ A oder Typ B)
4. Nach OK vom User: Bewerbung versenden
5. **Status aktualisieren** im File: Datum, Plattform, Mail
6. In `index.md` eintragen (Datum, Firma, Position, Status, Versendet, Typ)
7. **Nicht nach GitHub** — steht in `.gitignore`

### Bewerbungstypen

- **Typ A** — Passt in den Bereich → maßgeschneiderter Text, Verweis auf relevante Blog-Artikel
- **Typ B** — Passt nicht → neutraler Text, "Position passt nicht, aber gerne für andere Rollen"

### Profil-Whitepaper

- `WORKING/WHITEPAPER/alexander-friedland-profil.md` — Alle Daten für Bewerbungen
- Persönliche Daten, Kernkompetenzen, Werdegang, Philosophie
- Wird als Grundlage für Antworttexte verwendet
- **Lokal — nicht nach GitHub**

### LTM-Speicherung

- Bewerbungen werden in LTM (`WORKING/MEMORY/ltm-index.md`) dokumentiert
- Einträge in `ltm-index.md` unter `### 2026-08-24` mit Workpaper-Referenz
- Diary-Eintrag in `WORKING/DIARY/2026-08.md`
- **Niemals** Bewerbungsdokumente nach GitHub pushen

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

## AAMS 2.x — Tool Detection & Skills

### Passive Tool Detection (AAMS 2.3+)
AAMS erkennt das aufrufende Agent/Coding-Tool PASSIV zur Laufzeit:
- **opencode:** `OPCODE_SESSION_ID` vorhanden oder `.opencode/` Verzeichnis existiert
- **Cursor:** `.cursor/rules/` vorhanden + `CLAUDE.md`
- **Claude Code:** `CLAUDE.md` im Root
- **LM Studio:** Läuft auf localhost (Standardport 1234), OpenAI-kompatibles Endpoint
- **Ollama:** `ollama serve` läuft auf localhost (Standardport 11434)

Unser Setup: LM Studio + qwen/qwen3.6-35b-a3b → opencode ↔ VS Code → AAMS

### Skills (AAMS 2.3+)
Skills sind kristallisiertes Gemeinschaftswissen. Lokale Anpassungen in `WORKING/TOOLS/skills/<tool-name>/`.
Absolute Neutralität: AAMS beschreibt WAS ein Skill KANN, nicht WIE er implementiert wird.

## Migration von DEVmatrose

- Blog-Artikel müssen nach `blog/` konvertiert werden (Vue → statisch HTML)
- OG-Tags müssen auf neue Domain zeigen
- Autoren-Namen: "Alexander Friedland (@ogerly)"
- Blog-Workflow: Pro Artikel eine HTML-Datei mit OG-Tags
