# Workpaper: Blog-System Migration — DEVmatrose → Alexander Friedland

**Version:** 2.0  
**Status:** Analyse & Planung  
**Datum:** 24.08.2026  
**Autor:** Alexander Friedland (@ogerly)

---

## 0. Kontext & Änderung

### Warum dieses Workpaper?

Die Firma **DEVmatrose existiert nicht mehr**. Die Website wird von Alexander Friedland / @ogerly geführt. Alle Projekte, die unter DEVmatrose entstanden sind, sind jetzt von Alexander Friedland.

**Alte Struktur:**
- `ogerly.github.io/alexander-friedland/` — Persönliche Seite
- `devmatrose.github.io/devmatrose/` — Firma DEVmatrose (NICHT MEHR AKTIV)

**Neue Struktur:**
- `ogerly.github.io/alexander-friedland/` — Einzige Seite. Alexander Friedland, Coder, Bastler, Architekt.
- Alle Projekte von @ogerly. Alle Blog-Artikel von Alexander Friedland.

---

## 1. Analyse der alten Blog-Architektur

### 1.1 Was existiert (aus `WORKING/TOOLS/alte webseite/Webseite - DEVmatrose`)

| Komponente | Status | Beschreibung |
|---|---|---|
| Vue.js SPA | ✅ Implementiert | Vite + Vue 3 + Vue Router (Hash Mode) |
| BlogTab.vue | ✅ Implementiert | Dynamisches Laden von Artikel-Komponenten |
| BlogArticle.vue | ✅ Implementiert | Artikel-Detailansicht |
| BlogList.vue | ✅ Implementiert | Blog-Übersicht mit Filterung |
| BlogCard.vue | ✅ Implementiert | Einzelne Blog-Karte |
| ShareButtons.vue | ✅ Implementiert | Social Share (LinkedIn, X, Copy Link) |
| `blog-metadata.json` | ✅ 19 Artikel | Metadaten, OG-Tags, Social Media |
| Static HTML Landing Pages | ✅ ~19 Dateien | Pro Artikel eine HTML-Datei mit OG-Tags |
| Vue Article Components | ✅ ~19 Dateien | `src/components/blog/article/DD-MM-YY-Titel.vue` |
| Preview-Bilder | ✅ ~20 Bilder | `public/images/blog/` |
| RSS-Feed | ❌ Geplant | Workpaper existiert, nicht implementiert |

### 1.2 Static HTML Landing Page Pattern

Jeder Artikel hatte eine eigene HTML-Datei in `public/`:

```
public/blog-vom-code-zum-architekten.html
public/blog-ki-datenschutz-schwindel-2026.html
public/blog-agenten-architektur-jenseits-des-kindergartens.html
...
```

**Zweck:** Social-Media-Crawler (LinkedIn, Twitter, Facebook) brauchen statisches HTML mit OG-Tags. Vue SPA kann das nicht liefern.

**Flow:**
1. Crawler/User öffnet `blog-slug.html`
2. OG-Tags werden gelesen (perfekte Preview)
3. Redirect nach 1.5s zur Vue-App (`#/blog?article=slug`)

### 1.3 Herausforderung bei der Migration

Die alte Blog-Architektur war **tightly coupled** an die Vue SPA:
- `BlogTab.vue` importiert Vue-Komponenten direkt
- `blog-metadata.json` enthält `component`-Felder
- Static HTML Pages verlinken auf `devmatrose.github.io/devmatrose/`
- OG-Tags referenzieren `devmatrose.github.io/devmatrose/images/blog/`

**Was passiert jetzt?**
- Die Vue SPA existiert nicht mehr auf der neuen Seite
- Die OG-Tags müssen auf die neue Domain zeigen
- Die Blog-Artikel müssen in die neue Struktur migriert werden
- DEVmatrose-Branding muss durch Alexander Friedland ersetzt werden

---

## 2. Blog-Architektur für die neue Seite

### 2.1 Anforderung

Alexander Friedland nutzt **kein Framework**. Die Seite ist reines HTML + CSS + Vanilla JS.

**Aber:** Der Blog muss einfach zu pflegen sein. Jeden Artikel manuell als HTML zu schreiben ist nicht skalierbar.

### 2.2 Gewählter Ansatz: Statische HTML-Dateien pro Artikel

**Warum nicht Markdown → Build?**
- Ohne Build-Pipeline wäre es zu kompliziert
- Die alte Struktur zeigt: Pro Artikel eine HTML-Datei funktioniert gut
- GitHub Pages braucht nichts zu bauen — einfach Dateien pushen

**Warum nicht Vue/React?**
- Geht gegen die Philosophie "Lokal · Autonom · Souverän"
- Jeder Framework-Entscheiding ist eine Abhängigkeit
- Die alte Seite beweist: Man braucht es nicht

### 2.3 Neue Struktur

```
alexander-friedland/
├── index.html                    # Hauptseite (bereits erstellt)
├── style.css                     # Styles (bereits erstellt)
├── app.js                        # Entry Point
├── components/
│   ├── nav.js
│   ├── hero.js
│   ├── reveal.js
│   └── contact.js
├── utils/
│   ├── dom.js
│   ├── forms.js
│   └── store.js
├── blog/                         # ← NEU: Blog-Artikel
│   ├── blog-vom-code-zum-architekten.html
│   ├── blog-ki-datenschutz-schwindel-2026.html
│   ├── blog-agenten-architektur-jenseits-des-kindergartens.html
│   └── ... (weitere Artikel)
├── blog-images/                  # ← NEU: Blog-Bilder
│   ├── architekten-preview.png
│   ├── datenschutz-schwindel.png
│   └── ...
└── data/                         # ← NEU: Blog-Metadaten
    └── blog-metadata.json
```

### 2.4 Blog-Metadaten (blog-metadata.json)

```json
{
  "posts": [
    {
      "id": "du-brauchst-kein-framework",
      "title": "Du brauchst kein Framework. Du brauchst eine Datei.",
      "slug": "du-brauchst-kein-framework",
      "date": "2026-03-26",
      "author": "Alexander Friedland (@ogerly)",
      "excerpt": "Kontextverlust bei KI-gestützter Entwicklung ist unsichtbar – bis er zuschlägt.",
      "category": "KI-Architektur & Praxis",
      "tags": ["AAMS", "Kontextverlust", "Tool Lock-in", "Agent Memory", "Open Source"],
      "readTime": "10 min",
      "image": "/blog-images/aams-einedatei.png",
      "url": "/blog-du-brauchst-kein-framework.html"
    }
  ]
}
```

### 2.5 Blog-Artikel HTML-Template

Jeder Artikel bekommt ein eigenes HTML mit OG-Tags:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARTIKEL-TITEL | Alexander Friedland</title>
  <meta name="description" content="ARTIKEL-BESCHREIBUNG">
  <link rel="canonical" href="https://ogerly.github.io/alexander-friedland/blog-SLUG.html">
  
  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Alexander Friedland">
  <meta property="og:title" content="ARTIKEL-TITEL">
  <meta property="og:description" content="BESCHREIBUNG">
  <meta property="og:image" content="https://ogerly.github.io/alexander-friedland/blog-images/BILD.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://ogerly.github.io/alexander-friedland/blog-SLUG.html">
  <meta property="article:published_time" content="YYYY-MM-DDT00:00:00Z">
  <meta property="article:author" content="Alexander Friedland">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="ARTIKEL-TITEL">
  <meta name="twitter:description" content="BESCHREIBUNG">
  <meta name="twitter:image" content="https://ogerly.github.io/alexander-friedland/blog-images/BILD.png">
  
  <!-- Redirect zur Hauptseite -->
  <meta http-equiv="refresh" content="0;url=https://ogerly.github.io/alexander-friedland/#blog">
  
  <!-- Blog-Artikel Inhalt -->
  <style>...</style>
</head>
<body>
  <article class="blog-article">
    <!-- Vollständiger Artikelinhalt als HTML -->
  </article>
  <noscript>
    <meta http-equiv="refresh" content="0;url=https://ogerly.github.io/alexander-friedland/">
  </noscript>
</body>
</html>
```

---

## 3. Migration der bestehenden Inhalte

### 3.1 Blog-Artikel (19 vorhanden)

| # | Titel | Datum | Kategorie | Bild vorhanden |
|---|---|---|---|---|
| 1 | Agenten-Architektur jenseits des Kindergartens | 2026-04-01 | KI-Architektur & Praxis | ✅ |
| 2 | Du brauchst kein Framework | 2026-03-26 | KI-Architektur & Praxis | ✅ |
| 3 | Das Agent-OS | 2026-03-01 | KI-Architektur & Governance | ✅ |
| 4 | Blut am Silizium | 2026-02-28 | Ethik & Gesellschaft | ✅ |
| 5 | Der große KI-Datenschutz-Schwindel 2026 | 2026-02-28 | Datenschutz & Polemik | ✅ |
| 6 | Agentisches Arbeiten 2026 | 2026-02-27 | KI-Architektur & Strategie | ✅ |
| 7 | Das OpenClaw-Universum 2026 | 2026-02-25 | KI-Ökosystem & Open Source | ✅ |
| 8 | Die epistemische Krise der Softwareentwicklung | 2026-02-24 | Philosophie & Architektur | ✅ |
| 9 | Autonomous Agent Manifest Specification | 2026-02-19 | KI-Architektur | ✅ |
| 10 | Von Code zu Kontext | 2026-02-17 | Multi-Agent-Systeme | ✅ |
| 11 | Kontinente der Intelligenz | 2026-02-14 | Geopolitik & KI | ✅ |
| 12 | Von Königen, Kutschen und KI | 2026-02-13 | Architecture & Society | ✅ |
| 13 | Ordo ab Chao | 2026-02-11 | Architecture & AI | ✅ |
| 14 | Biometrie-Sicherheit TR-03166-A | 2026-02-09 | Security & KI | ✅ |
| 15 | Bits, Pilze und die neue Machtfrage | 2026-02-08 | KI & Infrastruktur | ✅ |
| 16 | Warum ich keine Angst vor böser KI habe | 2026-02-05 | KI & Philosophie | ❌ |
| 17 | Der Algorithmus der Fantasie | 2026-01-10 | Game Design | ✅ |
| 18 | Smart Editor für LLM-Training | 2025-12-03 | KI & Tooling | ✅ |
| 19 | Vom Coder zum Architekten | 2025-12-02 | KI & Architektur | ✅ |

### 3.2 Migrationsschritte

1. **Alle 19 Artikel konvertieren** von Vue-Komponenten zu statischen HTML-Dateien
2. **Autor-Änderung**: "Ogerly – DEVmatrose" → "Alexander Friedland (@ogerly)"
3. **URL-Update**: Alle OG-URLs auf `ogerly.github.io/alexander-friedland/`
4. **Bilder kopieren**: `public/images/blog/` → `blog-images/`
5. **blog-metadata.json erstellen** aus der alten Datei
6. **Blog-Übersicht auf Hauptseite aktualisieren**

### 3.3 Autor-Änderung

Alte Autoren-Namen in den Metadaten:
- `Ogerly – DEVmatrose` → `Alexander Friedland (@ogerly)`
- `DEVmatrose` → `Alexander Friedland`
- `Alexander Friedland (@ogerly)` → bleibt

---

## 4. Blog-Workflow für zukünftige Artikel

### 4.1 Neuen Artikel erstellen

```
1. Neue HTML-Datei in blog/ anlegen:
   blog-neuer-artikel-slug.html

2. OG-Tags anpassen:
   - Titel, Beschreibung, Bild-URL
   - Datum im ISO-Format

3. Bild erstellen (optional):
   - Preview: 1200x630px → blog-images/
   - Hero: beliebig → blog-images/

4. blog-metadata.json updaten:
   - Neues Post-Objekt als erstes Element

5. Git Commit & Push
```

### 4.2 Blog-Artikel Checkliste

- [ ] HTML-Datei in `blog/` erstellt
- [ ] OG-Tags vollständig (Title, Description, Image, URL)
- [ ] Twitter Card Tags vorhanden
- [ ] Canonical URL korrekt
- [ ] Author: "Alexander Friedland (@ogerly)"
- [ ] Bild in `blog-images/` hochgeladen
- [ ] OG-Image-URL als absolute URL
- [ ] `blog-metadata.json` aktualisiert
- [ ] Datum im ISO-Format
- [ ] Social-Media-Preview mit https://www.opengraph.xyz/ geprüft

---

## 5. RSS-Feed (Nachtrag)

### 5.1 Ansatz

Da die neue Seite statisch ist: Einfaches Node.js Script das `blog-metadata.json` einliest und RSS XML generiert.

### 5.2 Feed-URL

```
https://ogerly.github.io/alexander-friedland/feed.xml
```

### 5.3 Implementierung

```javascript
// scripts/generate-feed.mjs
import { readFileSync, writeFileSync } from 'fs'

const meta = JSON.parse(readFileSync('data/blog-metadata.json'))
const base = 'https://ogerly.github.io/alexander-friedland'

const items = meta.posts.map(p => `
  <item>
    <title>${p.title}</title>
    <link>${base}${p.url}</link>
    <description><![CDATA[${p.excerpt}]]></description>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <guid isPermaLink="true">${base}${p.url}</guid>
    <dc:creator>Alexander Friedland</dc:creator>
    <category>${p.category}</category>
    <enclosure url="${base}${p.image}" type="image/png"/>
  </item>
`).join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Alexander Friedland — Blog</title>
    <link>${base}</link>
    <description>Lokal · Autonom · Souverän. Technische Überlegungen, Architekturentscheidungen.</description>
    <language>de-de</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

writeFileSync('feed.xml', xml)
```

### 5.4 In index.html verlinken

```html
<link rel="alternate" type="application/rss+xml" 
      href="https://ogerly.github.io/alexander-friedland/feed.xml" 
      title="Alexander Friedland Blog RSS">
```

---

## 6. Migration von der alten DEVmatrose-Seite

### 6.1 Was übernommen wird

| Quelle | Ziel |
|---|---|
| `public/data/blog-metadata.json` | `data/blog-metadata.json` (angepasst) |
| `public/blog-*.html` | `blog/blog-*.html` (OG-Tags aktualisiert) |
| `public/images/blog/*.png` | `blog-images/*.png` |
| Vue-Artikel-Komponenten | ❌ Nicht übernommen (nur als Referenz) |

### 6.2 Was NICHT übernommen wird

| Element | Grund |
|---|---|
| DEVmatrose Branding | Firma existiert nicht mehr |
| Vue.js SPA Architektur | Keine Framework-Abhängigkeit |
| `blog-metadata.json` Autoren-Felder | Alle auf Alexander Friedland |
| `socialMedia` Felder | Behalten für Referenz, aber nicht zwingend nötig |
| Static HTML Landing Pages (alte Domain) | Neue Domain, neue URLs |

### 6.3 Was neu erstellt wird

| Element | Beschreibung |
|---|---|
| `blog/` Verzeichnis | Alle Blog-Artikel als statische HTML |
| `blog-images/` Verzeichnis | Alle Blog-Bilder |
| `data/blog-metadata.json` | Neue Metadaten mit Alexander Friedland |
| `feed.xml` | RSS-Feed Generator |
| Blog-Übersicht auf Hauptseite | Bereits in index.html vorhanden |

---

## 7. Offene Fragen

### 7.1 Blog-Artikelinhalt

Die alten Blog-Artikel sind als **Vue-Komponenten** in `src/components/blog/article/` gespeichert. Der **volle HTML-Inhalt** der Artikel steht in den Vue-Dateien.

**Option A:** Vue-Komponenten als HTML exportieren (manuell oder mit Tool)
**Option B:** Artikel aus der live deployed alten Seite extrahieren
**Option C:** Artikel neu schreiben (langsamste Option)

### 7.2 Bild-URLs in OG-Tags

Alle OG-Image-URLs müssen von:
```
https://devmatrose.github.io/devmatrose/images/blog/
```
auf:
```
https://ogerly.github.io/alexander-friedland/blog-images/
```

geändert werden.

### 7.3 Legacy-URLs

Die alten Blog-URLs von `devmatrose.github.io/devmatrose/blog-*.html` funktionieren weiter, solange die alte Seite deployed bleibt.

**Empfehlung:** Alte Seite als Redirect auf die neue Seite umstellen.

---

## 8. Zusammenfassung

### Gegeben
- **19 fertige Blog-Artikel** in Vue-Komponenten + Static HTML
- **~20 Blog-Bilder** in `public/images/blog/`
- **blog-metadata.json** mit allen Metadaten
- **RSS-Feed Workpaper** existiert

### Zu tun
1. Alle 19 Artikel nach `blog/` konvertieren (Vue → statisch HTML)
2. Alle OG-Tags auf neue Domain umstellen
3. Autoren-Namen auf "Alexander Friedland (@ogerly)" ändern
4. Bilder nach `blog-images/` kopieren
5. Neue `blog-metadata.json` erstellen
6. RSS-Feed implementieren
7. Blog-Übersicht auf Hauptseite verlinken

### Nicht übernommen
- DEVmatrose Branding
- Vue.js SPA
- Framework-Abhängigkeiten

---

## 9. Umsetzung — 24.08.2026

### 9.1 Erledigte Aufgaben

#### Verzeichnisstruktur erstellt
```
alexander-friedland/
├── blog/                          ← 19 statische HTML-Artikel
├── blog-images/                   ← 21 Blog-Bilder
└── data/
    └── blog-metadata.json         ← Metadaten aller 19 Artikel
```

#### Bilder migriert (21 Dateien)
Kopiert aus `alte webseite/Webseite - DEVmatrose/public/images/blog/`:

| Datei | Beschreibung |
|---|---|
| `social-md-aams.jpg` | Agenten-Architektur (Featured) |
| `aams-einedatei.png` | Du brauchst kein Framework |
| `agentic-os.png` | Das Agent-OS |
| `blutsilizium.png` | Blut am Silizium |
| `datenschutz-schwindel.png` | KI-Datenschutz-Schwindel |
| `agentisches-arbeiten.png` | Agentisches Arbeiten 2026 |
| `openclaw_univer.png` | OpenClaw-Universum |
| `epistemische-kriese.png` | Epistemische Krise |
| `autonomous-agent-manifest-specification.png` | AAMS |
| `agenten-im-repro.png` | Von Code zu Kontext |
| `kontitent-der-intelligenz.png` | Kontinente der Intelligenz |
| `mesh-netzwerk.png` | Mesh-Netzwerk |
| `ordo-ab-chao-mesh-hero.png` | Ordo ab Chao |
| `biometrie-tr-03166-a-hero.png` | Biometrie-Sicherheit |
| `schwarm-vs-grossrechner-preview.png` | Schwarm vs. Großrechner |
| `rollenspiel-hero.png` | Pen & Paper Rollenspiele |
| `aleteiha-layer.png` | Smart Editor LLM Tool |
| `aleteiha-hero.png` | Smart Editor Hero |
| `architekten-preview.png` | Vom Coder zum Architekten |
| `architekten-hero.png` | Vom Coder zum Architekten Hero |
| `placeholder.png` | Fallback für "Keine Angst vor KI" |

**Hinweis:** "Keine Angst vor bösen KI" hat kein Preview-Bild — bleibt ohne Hero-Bild.

#### Artikel konvertiert (19 Dateien)
Alle Vue-Komponenten aus `src/components/blog/article/` → statische HTML in `blog/`:

| # | Datei | Slug | Datum | Kategorie |
|---|---|---|---|---|
| 1 | `blog-agenten-architektur-jenseits-des-kindergartens.html` | agenten-architektur-jenseits-des-kindergartens | 2026-04-01 | KI-Architektur & Praxis |
| 2 | `blog-du-brauchst-kein-framework.html` | du-brauchst-kein-framework | 2026-03-26 | KI-Architektur & Praxis |
| 3 | `blog-das-agent-os.html` | das-agent-os | 2026-03-01 | KI-Architektur & Governance |
| 4 | `blog-blut-am-silizium.html` | blut-am-silizium | 2026-02-28 | Ethik & Gesellschaft |
| 5 | `blog-ki-datenschutz-schwindel-2026.html` | ki-datenschutz-schwindel-2026 | 2026-02-28 | Datenschutz & Polemik |
| 6 | `blog-agentisches-arbeiten-2026.html` | agentisches-arbeiten-2026 | 2026-02-27 | KI-Architektur & Strategie |
| 7 | `blog-openclaw-universum-2026.html` | openclaw-universum-2026 | 2026-02-25 | KI-Ökosystem & Open Source |
| 8 | `blog-epistemische-krise-der-softwareentwicklung.html` | epistemische-krise-der-softwareentwicklung | 2026-02-24 | Philosophie & Architektur |
| 9 | `blog-autonomous-agent-manifest-specification.html` | autonomous-agent-manifest-specification | 2026-02-19 | KI-Architektur |
| 10 | `blog-von-code-zu-kontext-agenten-navigation.html` | von-code-zu-kontext-agenten-navigation | 2026-02-17 | Multi-Agent-Systeme |
| 11 | `blog-kontinente-der-intelligenz.html` | kontinente-der-intelligenz | 2026-02-14 | Geopolitik & KI |
| 12 | `blog-mesh-netzwerk-dezentrale-ki.html` | mesh-netzwerk-dezentrale-ki | 2026-02-13 | Architecture & Society |
| 13 | `blog-ordo-ab-chao-agenten-mesh-netzwerk.html` | ordo-ab-chao-agenten-mesh-netzwerk | 2026-02-11 | Architecture & AI |
| 14 | `blog-biometrie-sicherheit-tr-03166-a.html` | biometrie-sicherheit-tr-03166-a | 2026-02-09 | Security & KI |
| 15 | `blog-schwarm-vs-grossrechner-neue-machtfrage.html` | schwarm-vs-grossrechner-neue-machtfrage | 2026-02-08 | KI & Infrastruktur |
| 16 | `blog-keine-angst-vor-ki.html` | keine-angst-vor-ki | 2026-02-05 | KI & Philosophie |
| 17 | `blog-pen-and-paper-rollenspiele.html` | pen-and-paper-rollenspiele | 2026-01-10 | Game Design & Entwicklung |
| 18 | `blog-smart-editor-llm-tool.html` | smart-editor-llm-tool | 2025-12-03 | KI & Tooling |
| 19 | `blog-vom-code-zum-architekten.html` | vom-code-zum-architekten | 2025-12-02 | KI & Architektur |

#### Jede HTML-Datei enthält
- Vollständiger Artikelinhalt aus Vue-Komponente (template → HTML)
- OG-Tags mit `https://ogerly.github.io/alexander-friedland/blog-images/`
- Twitter Card Tags
- Canonical URL: `https://ogerly.github.io/alexander-friedland/blog-<slug>.html`
- Published Time als ISO-8601 (`YYYY-MM-DDT00:00:00Z`)
- Author: `Alexander Friedland`
- DaisyUI CSS (`../daisyui@4_full.min.css`) für Button/Badge/Card/Prose-Styling
- Inline-Blog-CSS für Artikel-spezifische Styles
- Back-to-Blog Link: `../blog/index.html`

#### Metadaten aktualisiert
- `data/blog-metadata.json` — Alle 19 Artikel mit:
  - Autor: `Alexander Friedland (@ogerly)` (statt `Ogerly – DEVmatrose`)
  - OG-Image-URLs: `https://ogerly.github.io/alexander-friedland/blog-images/`
  - URLs: `/blog/blog-<slug>.html`
  - `socialMedia`-Felder entfernt (nicht mehr benötigt)

#### index.html aktualisiert
- Alle 19 Blog-Links angepasst: `blog/<slug>.html` → `blog/blog-<slug>.html`
- Korrektur: Dateinamen haben `blog-` Prefix, Links mussten entsprechend angepasst werden

#### Branding-Änderungen (alle Artikel)
- `DEVmatrose` → `Alexander Friedland`
- `DEV<span>matrose</span>` → `Alexander Friedland`
- `Ogerly – DEVmatrose` → `Alexander Friedland (@ogerly)`
- `devmatrose.github.io/devmatrose` → `ogerly.github.io/alexander-friedland`
- `github.com/DEVmatrose` → `github.com/ogerly`

### 9.2 Konvertierungspipeline

Ein Node.js-Script (`WORKING/TOOLS/convert-blog.mjs`) hat die Migration automatisiert:

1. Liest alle `.vue`-Dateien aus `src/components/blog/article/`
2. Extrahiert den `<template>`-Inhalt
3. Strippt Vue-Direktiven (`v-if`, `v-for`, `:src`, `:class`, etc.)
4. Führt alle Branding-URL-Ersetzungen durch
5. Generiert vollständige HTML-Dateien mit Head, OG-Tags, DaisyUI-Referenz
6. Schreibt in `blog/blog-<slug>.html`

### 9.3 Bekannte Einschränkungen

- "Keine Angst vor bösen KI" hat kein Hero-Bild (keins vorhanden)
- Artikel sind vollständig statisch — keine dynamischen Features (Share-Button, etc.)
- `blog-metadata.json` URLs verwenden `/blog/blog-<slug>.html` (doppeltes `blog/`)
- DaisyUI als letztes CSS geladen (nach `style.css`) — Grid-Layouts nutzen Tailwind-Klassen

### 9.4 Nächste Schritte
1. RSS-Feed (`feed.xml`) generieren (siehe Workpaper 5)
2. Blog-Übersicht auf Hauptseite final prüfen
3. Alte DEVmatrose-Seite auf Redirect umstellen
4. OG-Previews mit https://www.opengraph.xyz/ testen

---

**Status:** ✅ Migration abgeschlossen  
**Alle 19 Artikel:** Konvertiert, Bilder kopiert, OG-Tags aktualisiert  
**Letzte Aktualisierung:** 24.08.2026
