# WORKPAPER — Blog-Artikel: „Die besten Coder gehen lokal"

> **Name-Historie:** Ursprünglich „Wenn die besten Coder die Cloud verlassen" (erster
> Arbeitstitel). Finaler Headliner am 08.09.2026 auf „Die besten Coder gehen lokal"
> geändert — Details siehe **Change-Log** am Ende dieses Workpapers.

**Status:** ✅ Abgeschlossen (inkl. Headliner-Änderung)
**Datum:** 08.09.2026
**Auftrag:** Neuer Blog-Artikel aus `WORKING/WORKPAPER/NEUER-ARTIKEL-TEXT.md`
**Whitepaper:** `WORKING/WHITEPAPER/blog-artikel-erstellen.md`
**Cover:** `blog-images/wenn-die-besten-coder-die-claude-verlassen.jpg` (existiert ✅, Name bleibt unverändert)

---

## 1. Analyse

### 1.1 Text

- Im Quelldokument stehen **zwei Fassungen**: „erster entwurf" und „Version ChatGPT" (ausgearbeitet).
- **Entscheidung:** Basis = „Version ChatGPT" (bessere Pausierung, konkrete Modell-Details
  `Qwen 3.6 35B` → `Qwen 3.8 27B`, Solar-Analogie, politischer Teil). Aus dem Entwurf
  übernommen: AAMS-Vollname (Autonomous Agent Manifest Specification) und
  „Ich programmiere seit 1999".
- **Kernthese:** Die besten Coding-Modelle wurden stark durch die Feedback-Schleifen der
  besten Entwickler. Wenn genau diese Early Adopter auf lokale KI wechseln, verliert die
  Cloud-Datenbasis langfristig genau die Erfahrung, die die Modelle groß gemacht hat.
  Lokal ≠ gegen KI. Lokal = souveräne KI.
- **Ton:** 1. Person, reflektierend, These–Antithese, bewusst ausbalanciert
  (keine Polemik gegen Cloud-Anbieter), rhetorische Fragen als Scharniere.

### 1.2 Stil der bestehenden Artikel

- Dark-Cyber-Design (void / cyber-cyan / copper-orange), H1+H2 copper, H3 cyan.
- Wiederverwendete Element-Sprache: Callouts (orange/cyan), Cards (cyan/orange/emerald/
  amber/purple/void), Grids (2/3/4-spaltig), Blockquotes (cyan/orange), `ul.space-y-2`.
- Meta-Block: Breadcrumb, 📅 Datum, ⏱️ Lesezeit, 📂 Kategorie, 5–6 Tags.
- Footer: Author-Section (`Alexander Friedland (@ogerly)`), Back-Link, Section-Spacer.
- **AAMS-Links:** in `blog-du-brauchst-kein-framework.html` bereits als
  `https://github.com/ogerly/AAMS` mit `target="_blank"` → dieses Muster übernehmen.

### 1.3 AAMS-Auftritt im Text

- Kommt **1× vor** (Setup-Abschnitt): „…meiner eigenen Agenten-Infrastruktur und meinem
  AAMS-System".
- → Wird verlinkt: `<a href="https://github.com/ogerly/AAMS" target="_blank"
  rel="noopener noreferrer">AAMS</a>`, mit Vollname in Klammer.

---

## 2. Metadata (Entscheidungen)

| Feld | Wert | Begründung |
|---|---|---|
| Titel (final) | **Die besten Coder gehen lokal** | Favorit aus der Headliner-Auswahl (08.09.2026) |
| Subtitle (final) | **Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir.** | Lead-Zeile zum Titel, ersetzt den alten Subtitle |
| Slug | `die-besten-coder-gehen-lokal` | kebab-case aus finalem Titel abgeleitet (Whitepaper-Regel), 28 Zeichen |
| Datum | 2026-09-08 | Erstellungsdatum (heute) |
| Kategorie | KI-Architektur & Strategie | Infrastruktur-Strategie, passt zu „agentisches-arbeiten-2026" |
| Tags (6) | Lokale KI · Souveräne KI · Dezentralisierung · Coding-Modelle · Open Source · KI-Strategie | Aus dem Text abgeleitet |
| Lesezeit | 13 min | ~2.610 Wörter (inkl. NVIDIA-Abschnitt), deutsche Lesegeschwindigkeit |
| Excerpt | „Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir. Die stille Wende zur lokalen KI." | < 160 Zeichen (105) |
| OG-Image | `https://ogerly.github.io/alexander-friedland/blog-images/wenn-die-besten-coder-die-claude-verlassen.jpg` | Cover, wie geliefert (Name bleibt „claude") |

---

## 3. Struktur (sauber, klar, cool)

| # | Kapitel | Element-Aufbau |
|---|---|---|
| 0 | Hook | Callout orange: „Ich höre nicht auf, KI zu verwenden. … Ich möchte sie nur selbst betreiben." |
| 1 | Intro (ohne H2) | Fließtext, „Das muss man erst einmal so stehen lassen." |
| 2 | Ich bin aus der Cloud gegangen | P + Blockquote orange (Frage) + P mit **AAMS-Link** + Callout cyan (Frontier-Frage) |
| 3 | Der KAIROS-Moment | P + Callout cyan (KAIROS-Kerngedanke) + 3-Cards-Grid (Richtung/Idee/Name) + Blockquote + Callout orange (Wissens-Frage) |
| 4 | Wem gehört eigentlich das Wissen? | P + `ul` (9 „wie man…" Punkte) + P (menschliche Denkwege) |
| 5 | Was passiert, wenn diese Leute gehen? | **Kausalkette als 4-Stufen-Visual** (cyan→orange→emerald→red) + `ul` Early Adopter |
| 6 | Der Hype könnte sich gerade drehen | P + Callout cyan („Zurück von der Cloud.") + P |
| 7 | Lokal bedeutet nicht gegen KI | Blockquote cyan + **3-Cards-Grid** (Ich kann nicht…) + P |
| 8 | Zentralisierung gegen Souveränität | **2-Cards-Grid** (Zentralisiert orange / Dezentralisiert emerald) + Callout-left-orange |
| 9 | Das Internet hätte auch zentral sein können | P (Solar-Analogie) + Callout cyan (Millionen Maschinen) |
| 10 | Das eigentliche Problem ist die Mensch-Komponente | P + Blockquote cyan (10 schlechte Lösungen) + `ul` (5 Fragen) |
| 11 | Vielleicht verlieren die großen Modelle genau das… | P + Blockquote orange („Ich brauche euch nicht mehr.") |
| 12 | Und dann wird es politisch | P + Callout orange (Produkt vs. Befähigung) + P (Konsument → Betreiber) |
| 13 | Vielleicht ist das der nächste Schritt | **4-Cards-Grid** (Entdecken → Cloud → Verteilen → Souverän) + P |
| 14 | Ich glaube, wir stehen an einem Wendepunkt | P + `ul` (5 Trends) + **Abo-Frage-Grid** (alt vs. neu) + Callout orange (souveräne KI) |
| 15 | **Und dann kommt NVIDIA** *(3. Durchgang angehängt)* | P + **3-Cards-Grid** (12,93 Mrd. $ / 18 Mio. + / 3 Mio. +) + **2-Cards-Grid** („NVIDIA sagt nicht") + Callout cyan („auf der Hardware.") + 3-Cards-Grid (Chips/Rechenleistung/Hardware) + `ul` (3 Wo-Sätze) + Callout-left-cyan („Nicht als Beweis…") + **3-Stufen-Visual** (Beibringen→Lokal→Sichern) + kurze Einzel-Absätze + Callout orange (Rechenzentren vs. Schreibtische) + Final-P (Kontroll-Frage) |
| 16 | Footer | Author-Section + Back-Link + Spacer |

---

## 4. Ausführung

- [x] Workpaper angelegt (Analyse + Planung)
- [x] HTML-Datei: `blog/blog-die-besten-coder-gehen-lokal.html` (ursprünglich `blog-wenn-die-besten-coder-die-cloud-verlassen.html`, nach Headliner-Entscheidung umbenannt)
- [x] OG-Tags vollständig (Titel, Beschreibung, Bild 1200x630, URL, published_time, author, section)
- [x] Twitter Card Tags (summary_large_image, Titel, Beschreibung, Bild)
- [x] Canonical URL korrekt (`https://ogerly.github.io/alexander-friedland/blog-die-besten-coder-gehen-lokal.html`)
- [x] Author: „Alexander Friedland (@ogerly)"
- [x] AAMS verlinkt (target="_blank" → https://github.com/ogerly/AAMS)
- [x] `data/blog-metadata.json` aktualisiert (erstes Element, featured: true)
- [x] `index.html` Blog-Grid: neuer Eintrag als erstes Element
- [x] Verifikation: JSON valide, Pfade/Links geprüft

**Bemerkung:** Die bestehenden Artikel enthalten in der Artikel-Körperregion ein doppelt
eingebettetes Hero-Fragment mit kaputten Template-Resten (`src="heroImage"`, `{{ tag }}`).
Dies ist ein Artefakt früherer Generierungen, kein beabsichtigter Stil. Der neue Artikel
folgt der sauberen Struktur des Whitepapers (identischer `<style>`-Block, identische
Element-Sprache) — ohne dieses Artefakt.

---

## 5. Testing nach Deploy (manuell)

| Test | URL / Tool |
|---|---|
| HTML direkt | `https://ogerly.github.io/alexander-friedland/blog-die-besten-coder-gehen-lokal.html` (bzw. mit `/blog/`-Prefix je nach Repo-Deployment) |
| OG-Preview | https://www.opengraph.xyz/ |
| Twitter Card | https://cards-dev.twitter.com/validator |

---

## 6. Change-Log

### 08.09.2026 — 3. Durchgang: NVIDIA-Abschnitt angehängt + Push zu GitHub

**Antrag:** Absatz aus `NEUER-ARTIKEL-TEXT.md` Zeilen 165–244 („Und dann kommt NVIDIA")
prüfen — nicht im Blog-Artikel vorhanden → als **letzter Abschnitt** anhängen, in der
Schriftform der Zeilen 253–307 (Kurzsatz-Style), angepasst an die Element-Sprache des
Blog-Artikels.

**Umsetzung:**

| Element | Umsetzung |
|---|---|
| H2 | „Und dann kommt NVIDIA" — nach Abschnitt 14 („Ich glaube, wir stehen an einem Wendepunkt"), vor Author-Section |
| Deal-Zahlen | 3-Cards-Grid: **12,93 Mrd. $** Übernahmesumme · **18 Mio. +** Entwickler/Forscher/Creators · **3 Mio. +** Modelle |
| „NVIDIA sagt nicht / auch nicht" | 2-Cards-Grid (void) mit den beiden Zitat-Zeilen |
| „auf der Hardware." | Callout cyan (zentriert, bold) |
| Chips/Rechenleistung/Hardware | 3-Cards-Grid (void) — wie „Ähnliche Richtung/Idee/Name" im KAIROS-Abschnitt |
| „Wo Open Weight …" | `ul.space-y-2` (3 Punkte) |
| „Nicht als Beweis für meine These." | Callout-left-cyan (Fett-Zeile + Normal-Zeile) |
| Verschiebungs-Kette | 3-Stufen-Visual (cyan→orange→purple): **1 · Beibringen** → **2 · Lokal** → **3 · Sichern** |
| „Vielleicht Zufall / Strategie / Phase / Ich weiß es nicht" | Einzel-Absätze (Schriftform Zeilen 253–307: ein Satz, ein Absatz) |
| Schlusstheze | Callout orange: „Die Zukunft der KI wird nicht nur in den Rechenzentren der großen Anbieter entschieden." + GPU-Schriftzug |
| Letzter Satz | Fließtext mit **Fett-Highlight**: „wer eigentlich die Kontrolle über das Wissen und die Werkzeuge besitzt …" |

**Texttreue:** Inhalt unverändert übernommen (Sätze wortgleich, nur Anführungszeichen
typografisch vereinheitlicht). Keine inhaltliche Zuspitzung, keine Ergänzungen.

**Folgewirkungen:**

- Lesezeit: 11 → **13 min** (2.610 Wörter, neu gezählt) — HTML-Meta + metadata.json
- Tags/Kategorie: unverändert (NVIDIA/HF passt in bestehende Tags: Open Source, Dezentralisierung, KI-Strategie)
- Excerpt/Meta: unverändert (bleiben zum Headliner)

**Push zu GitHub:**

- Gekommittet (nur Blog-Artikel-Arbeit): `blog/blog-die-besten-coder-gehen-lokal.html`,
  `blog-images/wenn-die-besten-coder-die-claude-verlassen.jpg`,
  `data/blog-metadata.json`, `index.html`,
  `WORKING/WORKPAPER/BLOG-ARTIKEL-*.md`, `WORKING/WORKPAPER/NEUER-ARTIKEL-TEXT.md`
- **Nicht** mitgekommen (bewusst ausgelassen): `.aams-version`, `opencode.json`,
  `WORKING/WORKPAPER/Bewerbungen/index.md` (sensible Bewerbungen), `AAMS/` (lokales
  Arbeitsverzeichnis)
- `.env` ist gitignored ✅ — Tokens nie im Repo

### 08.09.2026 — 2. Durchgang: Headliner finalisiert

**Antrag:** Headliner anpassen.
**Entscheidung (Favorit):**

> # Die besten Coder gehen lokal
> **Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir.**

**Alternativen, die zur Auswahl standen (verworfen, dokumentiert):**

1. Wenn die besten Coder die Cloud verlassen *(ursprünglicher Arbeitstitel)*
2. Wenn die Coder gehen: Die stille Wende zur lokalen KI
3. Die nächste KI-Revolution findet auf dem Schreibtisch statt

**Konsequenzen (umgesetzt):**

| Element | Vorher | Nachher |
|---|---|---|
| H1 | Wenn die besten Coder die Cloud verlassen | **Die besten Coder gehen lokal** |
| Subtitle | Ein Gedanke über lokale KI, Coding-Modelle, menschliches Wissen … | **Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir.** |
| `<title>`, og:title, twitter:title | alter Titel | neuer Titel |
| meta description / metaDescription | „Der Hype dreht sich: …" | „Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir. Lokale KI, souveräne Infrastruktur – und was das für große Modelle bedeutet." (148 Zeichen) |
| Excerpt | „Nicht zurück von KI – zurück von der Cloud. …" | „Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir. Die stille Wende zur lokalen KI." (105 Zeichen) |
| twitter:description | „Nicht zurück von KI – …" | „Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir." |
| og:description | „Nicht zurück von KI – …" | „Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir. Ein Gedanke über lokale KI, souveräne Infrastruktur und die stille Wende der Early Adopter." (≤ 200) |
| Slug / Dateiname | `blog-wenn-die-besten-coder-die-cloud-verlassen` | **`blog-die-besten-coder-gehen-lokal`** (Whitepaper: Slug aus Titel abgeleitet) |
| metadata.json: id, slug, url, imageAlt | alte Werte | neue Werte |
| index.html | Link + Entry-Titel alt | Link + Entry-Titel neu (Excerpt = Lead-Zeile) |
| Breadcrumb, Hero-Alt | alter Titel | neuer Titel |
| Artikeltext | — | **unverändert** (Kernthese und Tonalität bleiben, Headliner schärft nur den Claim) |
| Cover-Bild | `wenn-die-besten-coder-die-claude-verlassen.jpg` | **unverändert** (Name bleibt, wie geliefert) |

### 08.09.2026 — 1. Durchgang: Artikel erstellt

- Analyse, Strukturplan, HTML, Metadaten, Index-Eintrag (siehe obige Abschnitte).
- **Nebenfix:** `data/blog-metadata.json` enthielt 4× ungefluchtete Straight-Quotes
  („Blut am Silizium", „Kein Training mit Ihren Daten") → JSON war ungültig; escapes
  repariert, Datei seitdem valide.
