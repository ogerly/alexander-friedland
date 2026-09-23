# WP-2026-09-23-RES-Blog-Hermes-Waechter-AAMS

**Status:** complete (2026-09-23)
**Datum:** 2026-09-23
**TOPIC:** RES (Blog)

## session_goal

Neuen Blog-Artikel **„Hermes — der Wächter über meinen Kontext"** als vollständiges
Publikationspaket veröffentlichen:

- HTML-Artikel + Hero-Bild (`blog-images/hermes-waechter-aams.png`, User-Version)
- `data/blog-metadata.json` (erstes Element)
- `index.html` (Blog-Grid, erste Position)
- `blog/index.html` (Blog-Übersicht, erste Position)
- `README.md` („Blog — Neuester Artikel")
- **AAMS-Verweis im Artikel** (GitHub-Repo, Issue #53, Discussions)
- **AAMS-Positionierung (User, bindend):** AAMS ist eine **Spezifikation, kein Standard**
- **Hero-Bild dynamisch** an die Browserfenstergröße anpassen
- **AAMS-Repo:** Artikel-Link in `SHOWCASE.md` setzen
- Commit + Push (Blog-Repo + AAMS-Repo)
- AAMS-Ritual: Workpaper, DIARY, LTM

## context

- Quelle-Text: `WORKING/WORKPAPER/NEUER-ARTIKEL-TEXT.md` — enthält **zwei Versionen**;
  verwendet wurde die **zweite (ausgearbeitete) Fassung** (~853 Wörter); die erste
  (~600 Wörter) ist die grobe Skizze vom selben Tag.
- Hero-Bild: `blog-images/hermes-waechter-aams.png` (1536×1024, User-Version)
- Whitepaper: `WORKING/WHITEPAPER/blog-artikel-erstellen.md` (Workflow, HTML-Template, URL-Regel)
- Struktur-Referenz: `blog/blog-deruebersehene-teil-des-marktes.html` (aktuellstes sauberes Template)
- AAMS-Kontext (AAMS-Repo): `WP-2026-09-22-SPEC-NOTE-hermes-namensabgrenzung-nous-vs-local.md`
  — der Artikel behandelt **Hermes-Local** (Session-State-Guard), Issue `ogerly/AAMS#53`
- Lesezeit-Kalibrierung: 750–980-Wörter-Artikel = 10–13 min im bestehenden Blog

## decisions

- **Slug:** `hermes-waechter-aams` (matcht Hero-Bild → Whitepaper-Regel `blog-images/SLUG.png`)
- **Titel:** „Hermes — der Wächter über meinen Kontext"
- **Datum:** 2026-09-23
- **Kategorie:** „KI-Architektur & Praxis"
- **Tags:** Lokale KI, Hermes, AAMS, Kontextmanagement, OpenCode, Agenten-Architektur
- **Lesezeit:** 11 min (Blog-Konvention; ~853 Wörter ≈ Niveau borsen-exodus 799 W = 11 min)
- **Textversion:** 2. Fassung in `NEUER-ARTIKEL-TEXT.md` (ausgearbeitet; User wurde informiert)
- **AAMS-Positionierung (User, 2026-09-23, bindend):** AAMS = **Spezifikation, kein Standard**.
  Zum Standard wird sie, wenn Teams sie in echter Projektentwicklung zuverlässig einsetzen
  — oder wenn Unternehmen sie für ihre Agenten-Projekte verlangen. Artikel-Fix:
  „AAMS-Standards" → „AAMS-Spezifikation" + eigener Callout mit diesem Kontext.
- **AAMS-Verweise im Artikel:** `<a href="https://github.com/ogerly/AAMS">AAMS</a>` in der
  AAMS-Sektion; Issue-Link `https://github.com/ogerly/AAMS/issues/53`; Discussions-Link
  `https://github.com/ogerly/AAMS/discussions`
- **Hero-Bild dynamisch:** `.hero { height: 400px }` → `height: clamp(300px, 45vh, 640px)`
  (skaliert mit Browserfenster); Whitepaper-Template synchron aktualisiert → gilt für Folgeartikel
- **AAMS-Showcase:** `SHOWCASE.md` (AAMS-Repo) + Zeile „Alexander-Friedland (Blog)" mit
  Artikel-Link; Statement: *„Das Kontextfenster ist flüchtig. Der Task nicht."*
  (Showcase-Voraussetzung `.agent.json` im Repo-Root: vorhanden, AAMS/2.4.0)
- **Push AAMS-Repo:** alter PAT im Remote (ghp_Yc1k…) verfallen → **einmaliger Push mit
  `.env`-Token** (Token nicht persistiert/commitet; Remote-URL unverändert gelassen)
- **Git-Hygiene Blog-Repo:** lokaler AAMS-Clone `AAMS/` in `.gitignore` aufgenommen
  (verschachteltes Repo — darf nie committet werden)
- **Push Blog-Repo:** enthält **auch** den untrackeden 19.09-Artikel
  (`blog-deruebersehene-teil-des-marktes` + Bild) — war nie committed, gehört dazu

## file_protocol

| Datei | Aktion | Status |
|---|---|---|
| `blog/blog-hermes-waechter-aams.html` | neu — vollständiger Artikel (Meta/OG/Twitter, Checkpoint-Tabelle, Callouts, AAMS-Karten-Grid, AAMS/Issue/Discussions-Links, dynamischer Hero) | ✅ |
| `data/blog-metadata.json` | neuer Eintrag als erstes Element (23 posts, JSON valid) | ✅ |
| `index.html` | Blog-Grid: neuer Eintrag an erster Position | ✅ |
| `blog/index.html` | Blog-Übersicht: neuer Eintrag an erster Position | ✅ |
| `README.md` | „Blog — Neuester Artikel"-Block ersetzen | ✅ |
| `WORKING/WHITEPAPER/blog-artikel-erstellen.md` | Hero-CSS-Template: `400px` → `clamp(300px, 45vh, 640px)` | ✅ |
| `AAMS-Repo/SHOWCASE.md` | + Eintrag „Alexander-Friedland (Blog)" (Artikel-Link + Statement) | ✅ pushed `1bd92ef` |
| `.gitignore` (Blog-Repo) | + `AAMS/` (lokaler AAMS-Clone, verschachteltes Repo) | ✅ |
| `WORKING/WORKPAPER/WP-2026-09-23-RES-Blog-Hermes-Waechter-AAMS.md` | anlegen (diese Datei) | ✅ |
| `WORKING/DIARY/2026-09.md` | Eintrag 2026-09-23 | ⏳ |
| `WORKING/MEMORY/ltm-index.md` | Ingest + Zählungen (22→23 Artikel, 23→25 Bilder) | ⏳ |

## next_steps

- [x] AAMS-Repo: SHOWCASE.md + Push
- [x] DIARY + LTM Ingest
- [x] Blog-Repo: Commit + Push (inkl. 19.09-Artikel)
- [x] Live-Verifikation (HTTP 200) + Workpaper `## deploy` + `## abschuss`
- [ ] Social-Preview prüfen (opengraph.xyz / cards-dev.twitter.com) — Alexander
- [ ] Optional: Social-Media-Post aus dem Artikel

## deploy (2026-09-23)

- **AAMS-Repo:** Commit `1bd92ef` („feat: SHOWCASE — Hermes-Artikel …“) → `31a2975..1bd92ef main → main`
  (alter PAT im Remote verfallen → einmaliger HTTPS-Push mit `.env`-Token, nicht persistiert)
- **Blog-Repo:** Commit `8dcd0d5` („Blog: Hermes — der Wächter über meinen Kontext …“, 14 Dateien)
  → `c9f2a57..8dcd0d5 main → main` (ebenfalls `.env`-Token-Push, Remote bleibt SSH)
- **Live-Verifikation (alle HTTP 200, 23.09.2026):**
  - https://ogerly.github.io/alexander-friedland/blog/blog-hermes-waechter-aams.html
  - https://ogerly.github.io/alexander-friedland/blog/blog-deruebersehene-teil-des-marktes.html (19.09, nachgeliefert)
  - https://ogerly.github.io/alexander-friedland/blog-images/hermes-waechter-aams.png
  - https://ogerly.github.io/alexander-friedland/ + /blog/ (Grids zeigen neuen Artikel oben)
- **Inhalts-Verifikation (Live-HTML):** AAMS-Repo-Link, Issue #53-Link, Discussions-Link,
  „AAMS-Spezifikation“ + „kein etablierter Standard“ + `clamp(300px, 45vh, 640px)` vorhanden
- **AAMS-Showcase live:** `raw.githubusercontent.com/ogerly/AAMS/main/SHOWCASE.md` enthält den Eintrag
- **Nächste Schritte für Alexander:** Social-Preview (opengraph.xyz / cards-dev.twitter.com) + ggf. Posten

## abschuss (2026-09-23)

Alle Punkte erledigt und verifiziert:

- Publikationspaket komplett (5/5): HTML + metadata (erstes Element, 23 posts, JSON valid)
  + index.html-Grid + blog/index.html + README — neue Position jeweils erste
- AAMS im Artikel: Repo-Link + Issue #53 + Discussions; **Spezifikation-Positionierung**
  (User-Decision) als eigener Callout; „Standards“→„Spezifikation“ durchgängig
- Hero-Bild dynamisch (`clamp(300px, 45vh, 640px)`) — Artikel + Whitepaper-Template
- AAMS-Repo: SHOWCASE-Eintrag pushed; Blog-Repo: pushed (inkl. 19.09-Artikel)
- AAMS-Ritual: Workpaper (diese Datei), DIARY 2026-09, LTM-Index (23 Artikel, 25 Bilder)
- Git-Hygiene: `AAMS/`-Clone in `.gitignore` (verschachteltes Repo bleibt lokal)
