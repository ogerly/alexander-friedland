# README.md — Strukturleitfaden (angepasst an Website)

## Zweck

Die `README.md` auf GitHub soll den gleichen Aufbau und die gleiche Struktur haben wie die Website unter https://ogerly.github.io/alexander-friedland/. Sie dient als kompakte, auf GitHub optimierte Version der Website.

**Originale README:** Die fertige Datei liegt in `WORKING/WHITEPAPER/README-GITHUB-Ogerly.md` und soll 1:1 als `README.md` im Root des Repositories [ogerly/ogerly](https://github.com/ogerly/ogerly) übernommen werden.

---

## Grundsätze

1. **Website-First**: Die README folgt exakt der Sektionen-Reihenfolge der Website
2. **GitHub-optimiert**: Markdown statt HTML, keine externen Stylesheets, alles funktioniert in der GitHub-Vorschau
3. **Korrekte Blog-Links**: Alle Blog-Verweise nutzen die vollständige URL zum Live-Blog
4. **Kein Overengineering**: Die README ist eine Übersicht, kein Ersatz für die Website

**Verwandte Seiten:**
- `projects.html` — Detaillierte Projektübersicht (externe Seite)
- `WORKING/WHITEPAPER/projects-html-dokumentation.md` — Dokumentation der Projektdetailseite

---

## Sektionen (in dieser Reihenfolge)

### 1. Banner + Hero

```markdown
![Banner](https://private-user-images.githubusercontent.com/1324583/520525292-5697565d-3e8e-4459-9b11-e49f314aeb9a.png)

# Hallo, ich bin Alexander Friedland

Softwareentwickler seit 1999 · Dresden

Digitales Arbeiten — Lokal, Autonom, Souverän.
```

**Regeln:**
- Banner-Bild: gleiche URL wie auf der Website
- Name + kurzer Tagline
- Kein langer Fließtext — das kommt in Sektion 2

---

### 2. Über mich (→ `#about` auf der Website)

Kurzprofil, analog zur "Über mich"-Sektion der Website:

```markdown
## Über mich

Ich bin Alexander Friedland, Softwareentwickler seit 1999. Mein Fokus liegt heute auf **lokalen KI-Modellen**, **Coding-Tools** und **dezentralen Systemen**.

Ich arbeite mit WebGPU-beschleunigten Modellen direkt im Browser, baue RAG-Architekturen und Agenten-Systeme — alles ohne Cloud-Zwang.

### Kernkompetenzen
- Lokale KI-Modelle & WebGPU
- Software-Architektur & Systemdesign
- Vue.js / TypeScript / Frontend
- KI-Workflows, RAG, Agenten
- Dezentrale Protokolle (Nostr, IPFS)
- Python, Docker, Datenpipelines

### Mein Stack
Qwen3.6 35B A3B → LM Studio → opencode ↔ VS Code → AAMS
```

**Regeln:**
- Kernkompetenzen als Bullet-Liste
- Stack als eine Zeile (Pfeil-Syntax)
- Verweis auf GitHub: `[GitHub @ogerly](https://github.com/ogerly)`

---

### 3. Blog (→ `#blog` auf der Website)

**WICHTIG — Blog-URLs:**

Alle Blog-Links haben dieses Format:

```
https://ogerly.github.io/alexander-friedland/blog/<slug>.html
```

Der `<slug>` entspricht dem Dateinamen im `/blog/` Ordner (ohne `.html`).

**Beispiele:**

| Datei | URL |
|-------|-----|
| `blog/blog-du-brauchst-kein-framework.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-du-brauchst-kein-framework.html` |
| `blog/blog-agenten-architektur-jenseits-des-kindergartens.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-agenten-architektur-jenseits-des-kindergartens.html` |
| `blog/blog-das-agent-os.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-das-agent-os.html` |

**Aktuelle Blog-Posts (vollständige Liste):**

1. [Du brauchst kein Framework](https://ogerly.github.io/alexander-friedland/blog/blog-du-brauchst-kein-framework.html) — 26.03.2026
2. [Agenten-Architektur jenseits des Kindergartens](https://ogerly.github.io/alexander-friedland/blog/blog-agenten-architektur-jenseits-des-kindergartens.html) — 01.04.2026
3. [Das Agent-OS](https://ogerly.github.io/alexander-friedland/blog/blog-das-agent-os.html) — 01.03.2026
4. [Blut am Silizium](https://ogerly.github.io/alexander-friedland/blog/blog-blut-am-silizium.html) — 28.02.2026
5. [Der große KI-Datenschutz-Schwindel 2026](https://ogerly.github.io/alexander-friedland/blog/blog-ki-datenschutz-schwindel-2026.html) — 28.02.2026
6. [Agentisches Arbeiten 2026](https://ogerly.github.io/alexander-friedland/blog/blog-agentisches-arbeiten-2026.html) — 27.02.2026
7. [Das OpenClaw-Universum 2026](https://ogerly.github.io/alexander-friedland/blog/blog-openclaw-universum-2026.html) — 25.02.2026
8. [Die epistemische Krise der Softwareentwicklung](https://ogerly.github.io/alexander-friedland/blog/blog-epistemische-krise-der-softwareentwicklung.html) — 24.02.2026
9. [Autonomous Agent Manifest Specification](https://ogerly.github.io/alexander-friedland/blog/blog-autonomous-agent-manifest-specification.html) — 19.02.2026
10. [Von Code zu Kontext](https://ogerly.github.io/alexander-friedland/blog/blog-von-code-zu-kontext-agenten-navigation.html) — 17.02.2026
11. [Kontinente der Intelligenz](https://ogerly.github.io/alexander-friedland/blog/blog-kontinente-der-intelligenz.html) — 14.02.2026
12. [Von Königen, Kutschen und KI](https://ogerly.github.io/alexander-friedland/blog/blog-mesh-netzwerk-dezentrale-ki.html) — 13.02.2026
13. [Ordo ab Chao](https://ogerly.github.io/alexander-friedland/blog/blog-ordo-ab-chao-agenten-mesh-netzwerk.html) — 11.02.2026
14. [Biometrie-Sicherheit (TR-03166-A)](https://ogerly.github.io/alexander-friedland/blog/blog-biometrie-sicherheit-tr-03166-a.html) — 09.02.2026
15. [Bits, Pilze und die neue Machtfrage](https://ogerly.github.io/alexander-friedland/blog/blog-schwarm-vs-grossrechner-neue-machtfrage.html) — 08.02.2026
16. [Warum ich keine Angst vor einer bösen KI habe](https://ogerly.github.io/alexander-friedland/blog/blog-keine-angst-vor-ki.html) — 05.02.2026
17. [Der Algorithmus der Fantasie](https://ogerly.github.io/alexander-friedland/blog/blog-pen-and-paper-rollenspiele.html) — 10.01.2026
18. [Warum ich das Rad neu erfunden habe](https://ogerly.github.io/alexander-friedland/blog/blog-smart-editor-llm-tool.html) — 03.12.2025
19. [Vom Coder zum Architekten](https://ogerly.github.io/alexander-friedland/blog/blog-vom-code-zum-architekten.html) — 02.12.2025

**Darstellungsformat in der README:**

Nicht alle 19 Posts auflisten! Stattdessen:
- Die **3 neuesten** Posts als kurze Links mit Titel + Datum
- Ein Verweis auf die Website für die vollständige Liste

```markdown
## Blog — Schreibwerk & Logbuch

Technische Überlegungen, Architekturentscheidungen und Beobachtungen. Keine Marketingparolen — echte Gedanken.

[Alle Artikel →](https://ogerly.github.io/alexander-friedland/#blog)

**Aktuell:**
- [Agenten-Architektur jenseits des Kindergartens](https://ogerly.github.io/alexander-friedland/blog/blog-agenten-architektur-jenseits-des-kindergartens.html) — 01.04.2026
- [Du brauchst kein Framework](https://ogerly.github.io/alexander-friedland/blog/blog-du-brauchst-kein-framework.html) — 26.03.2026
- [Das Agent-OS](https://ogerly.github.io/alexander-friedland/blog/blog-das-agent-os.html) — 01.03.2026
```

**Regeln für Blog-Links:**
- IMMER vollständige URL: `https://ogerly.github.io/alexander-friedland/blog/<slug>.html`
- Niemals relative URLs wie `/blog/foo.html` oder `blog/foo.html`
- Der Slug beginnt immer mit `blog-` (entspricht dem Dateinamen)
- Neue Posts werden am Ende der Liste ergänzt, die ältesten fallen raus wenn mehr als 3 angezeigt werden

---

### 4. Videos (→ `#videos` auf der Website)

```markdown
## Videos — Videos zum Lernen

Technik erklären. In Videos zeige ich, wie KI, dezentrale Systeme und Coding funktionieren.

[▶ YouTube @DEVmatrose](https://youtube.com/@DEVmatrose)
```

**Regeln:**
- Link zum YouTube-Kanal
- Keine einzelnen Video-Links in der README (zu viel Wartungsaufwand)
- Auf der Website können einzelne Videos verlinkt sein

---

### 5. Lebenslauf / Timeline (→ `#cv` auf der Website)

```markdown
## Lebenslauf — Öffentlicher Lebenslauf

**2024 — Heute** · Lokale KI-Systeme & Agenten-Architektur
Entwicklung lokaler KI-Workflows mit WebGPU-beschleunigten Modellen. AAMS, RAG, WhisperX-Pipelines. Fokus auf technische Souveränität.

**2024** · Lehre — SAP Uni Potsdam
Gastdozent Fullstack-Entwicklung im ersten Semester.

**2020 — 2024** · Dezentrale Systeme & Sovereign Tech
Nostr, IPFS, Zero-Persistence-Messaging, BigBlueButton-Integration.

**2015 — 2020** · Web-Entwicklung & Software-Architektur
Vue.js-Frontends, Datenvisualisierung, API-Design, Systemarchitektur.

**2005 — 2015** · Web-Entwicklung & Systemintegration
Statische Seiten bis dynamische Web-Applikationen.

**1999 — 2005** · Start als Softwareentwickler
Einstieg mit HTML und Web-Technologien.

[Full CV auf der Website →](https://ogerly.github.io/alexander-friedland/#cv)
```

**Regeln:**
- Zeitstrahl umgekehrt (neueste zuerst), wie auf der Website
- Kurze Beschreibungen, max. 1-2 Sätze pro Periode
- Link zur Website für den vollständigen Lebenslauf

---

### 6. Kontakt (→ `#contact` auf der Website)

```markdown
## Kontakt — Verbinde dich

| Plattform | Link |
|-----------|------|
| E-Mail | [devmatrose@proton.me](mailto:devmatrose@proton.me) |
| GitHub | [@ogerly](https://github.com/ogerly) |
| YouTube | [@DEVmatrose](https://youtube.com/@DEVmatrose) |
| LinkedIn | [Alexander Friedland](https://linkedin.com/in/alexander-friedland) |
```

**Regeln:**
- Tabelle mit allen Plattformen
- E-Mail als `mailto:` Link
- Keine Kontaktformular-Links (funktioniert auf GitHub nicht)

---

### 7. Footer / Badges (optional)

```markdown
---

Softwareentwickler seit 1999 · Lokal · Autonom · Souverän

[GitHub](https://github.com/ogerly) · [YouTube](https://youtube.com/@DEVmatrose) · [Blog](https://ogerly.github.io/alexander-friedland/#blog)
```

---

## Checkliste vor jedem Update

Bevor die README.md committet wird:

- [ ] Sektionen in richtiger Reihenfolge (Hero → Über → Blog → Videos → CV → Kontakt)
- [ ] Alle Blog-Links sind vollständige URLs (`https://ogerly.github.io/alexander-friedland/blog/...`)
- [ ] Blog-Slugs entsprechen den Dateinamen im `/blog/` Ordner
- [ ] Max. 3 neueste Blog-Posts in der README
- [ ] Banner-Bild URL ist aktuell
- [ ] Keine toten Links (alle URLs geprüft)
- [ ] GitHub-Vorschau sieht gut aus (keine kaputten Formatierungen)

---

## Häufige Fehler bei Blog-Links

| Falsch | Richtig |
|--------|---------|
| `/blog/blog-du-brauchst-kein-framework.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-du-brauchst-kein-framework.html` |
| `blog/blog-agenten-architektur-jenseits-des-kindergartens.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-agenten-architektur-jenseits-des-kindergartens.html` |
| `https://ogerly.github.io/blog/blog-blut-am-silizium.html` | `https://ogerly.github.io/alexander-friedland/blog/blog-blut-am-silizium.html` |

**Merksatz:** Die URL beginnt immer mit `https://ogerly.github.io/alexander-friedland/blog/`, gefolgt vom Dateinamen (inkl. `blog-` Präfix und `.html`).
