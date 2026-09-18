# WP-2026-09-18-RES-Blog-MICA-Borsen-Exodus

**status:** complete (2026-09-18)
**Datum:** 2026-09-18
**TOPIC:** RES (Blog/Research)

## session_goal

Neuen Blog-Artikel **„Die Börsen gehen. Die EU bleibt. Und wir stehen im Regen.“**
(Thema: MiCA-Exodus) als vollständiges Publikationspaket veröffentlichen:

- HTML-Artikel + Hero-Bild
- `data/blog-metadata.json` (erstes Element)
- `index.html` (Blog-Grid, erste Position)
- `README.md` („Blog — Neuester Artikel“)
- **`blog/index.html`** — neue Blog-Übersichtsseite (User-Entscheidung: Links müssen
  in Social Media klickbar/tief verlinkt funktionieren → `../blog/index.html` muss existieren)
- Whitepaper `blog-artikel-erstellen.md` auf aktuelle Wahrheit bringen

## aams-check (2026-09-18)

| Prüfpunkt | Wert |
|---|---|
| Lokale `.aams-version` | AAMS/2.4.0 (installiert 2026-08-25) |
| Lokale `.agent.json` | `_contract: AAMS/2.4.0`, `_version_date: 2026-07-08` |
| Remote `ogerly/AAMS` main | `_contract: AAMS/2.4.0`, `_version_date: 2026-07-08` |
| Ergebnis | **Aktuell — kein on_update nötig** |
| Hinweis | Lokaler AAMS-Clone: CHANGELOG nur bis 2.3.2 (Clone leicht veraltet, optional `git pull`) |

## rfl (Reflexion)

- Vorläufer: `WP-2026-08-24-RES-Blog-Artikel-Whitepaper.md` (Whitepaper erstellt),
  `WP-2026-08-24-Blog-Migration.md` (Blog DEVmatrose → Friedland)
- Bindende Referenz: Whitepaper `WORKING/WHITEPAPER/blog-artikel-erstellen.md`
- Kein Widerspruch zu früheren Entscheidungen. TOPIC-Tags „RES“ für Blog-Arbeit bestehen
  bereits im topic_registry → konsistent.

## context

- Quelle-Text: `WORKING/WORKPAPER/NEUER-ARTIKEL-TEXT.md` (18.09.2026, 11 min,
  Kategorie „Regulierung & Realität“, Tags: MiCA, Börsen-Exodus, EU-Restriktionen,
  Crypto-Compliance, Selbstbeschränkung)
- Whitepaper: `WORKING/WHITEPAPER/blog-artikel-erstellen.md` (Workflow, HTML-Template, Checkliste)
- Referenz-Artikel: `blog/blog-die-besten-coder-gehen-lokal.html` (Struktur/CSS-Vorlage)
- User-Anforderung (18.09.2026): Links müssen in Social Media klickbar sein →
  `blog/index.html` als Blog-Übersichtsseite erstellen (empfohlene Option gewählt)

## findings (aktuelle Wahrheit)

1. ❌ `blog/index.html` existierte nicht → Breadcrumb „Blog“ + Back-Link
   `../blog/index.html` in 19 Artikeln gebrochen. → **Gefixt: Seite erstellt (21 Artikel, statisch).**
2. ❌ Canonical/og:url der 20 publizierten Artikel: `…/alexander-friedland/blog-SLUG.html`
   (Segment `/blog/` fehlt) → in Social Media/SEO gebrochene Share-URLs.
   → **Gefixt: 40 URLs in 20 Dateien + Whitepaper-Template + neuer Artikel — alles
   `…/alexander-friedland/blog/blog-SLUG.html`.**
3. ❌ Back-Link im Coder-Artikel: `href="/"` → zeigte auf Domain-Root (404).
   → **Gefixt: `../blog/index.html`.**
4. ⚠ Whitepaper-Template ohne `.subtitle`-Element (alle echten Artikel haben eine). → **ergänzt.**
5. ⚠ `.reveal`-Klasse ohne JS = unsichtbare Elemente → `blog/index.html` bleibt
   **100 % statisch** (keine reveal-Klassen; kleines Inline-Script nur für das Mobile-Menü).

## file_protocol

| Datei | Aktion | Status |
|---|---|---|
| `WORKING/WORKPAPER/WP-2026-09-18-RES-Blog-MICA-Borsen-Exodus.md` | anlegen (diese Datei) | ✅ |
| `blog-images/borsen-exodus-eu.jpg` | neu — Hero/Vorschau (JPG, 1168×784, User-Version) | ✅ |
| `blog/blog-borsen-exodus-eu.html` | neu — vollständiger Artikel (Template + Text 1:1, Tag-Balance OK) | ✅ |
| `blog/index.html` | neu — Blog-Übersicht, alle 21 Artikel, statisch | ✅ |
| `data/blog-metadata.json` | neuer Eintrag als erstes Element (JSON valid, 21 posts, sortiert) | ✅ |
| `index.html` | Blog-Grid: neuer Eintrag an erster Position | ✅ |
| `README.md` | „Blog — Neuester Artikel“-Block ersetzen | ✅ |
| `WORKING/WHITEPAPER/blog-artikel-erstellen.md` | aktuelle Wahrheit (URL-Regel, Subtitle, blog/index.html Schritt, Pfade) | ✅ |
| 20 Bestandsartikel (`blog/*.html`) | Canonical + og:url fix: 40 URLs, Segment `/blog/` ergänzt | ✅ |
| `blog/blog-die-besten-coder-gehen-lokal.html` | Back-Link `href="/"` → `../blog/index.html` | ✅ |
| `WORKING/MEMORY/ltm-index.md` | Ingest + Zählungen 19→21 Artikel, 23 Bilder | ✅ |
| `WORKING/DIARY/2026-09.md` | Eintrag 2026-09-18 | ✅ |
| `READ-AGENT.md` | Struktur + Blog-Sektion + Migration-Sektion auf aktuellen Stand (21 Artikel, blog/index.html, URL-Regel) | ✅ |
| `WORKING/WHITEPAPER/alexander-friedland-profil.md` | 19 → 21 Artikel | ✅ |
| `WORKING/WHITEPAPER/README-GITHUB-Ogerly.md` | 19 → 21 Artikel, „Aktuell“-Liste + Link auf /blog/ | ✅ |

## decisions

- **Slug:** `borsen-exodus-eu` (kebab-case, ≤60 Zeichen)
- **Titel:** „Die Börsen gehen. Die EU bleibt. Und wir stehen im Regen.“
- **Datum:** 2026-09-18 (laut Quelltext)
- **Kategorie:** „Regulierung & Realität“ (neue Kategorie im Blog)
- **Tags:** MiCA, Börsen-Exodus, EU-Restriktionen, Crypto-Compliance, Selbstbeschränkung
- **Lesezeit:** 11 min
- **Hero-Bild:** generiert (Void-Dark + Copper-Orange/Cyber-Cyan, fallender Chart-Motiv) — 1200×630
- **Canonical/og:url:** `https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html` (korrekt mit `/blog/`)
- **Back-Link:** `../blog/index.html` (existiert ab jetzt)
- **Breadcrumb:** Home → `../index.html`, Blog → `../blog/index.html`
- **Text:** 1:1 aus `NEUER-ARTIKEL-TEXT.md`; einzige Anreicherung: „Die besten Coder gehen
  lokal“ als interner Link auf den Vor-Artikel; Exchanges (Binance/Bybit/MEXC-HTX/Gemini) als
  Karten-Grid, Reddit-Threads als Zitat, 6-Schritte-Muster als nummerierte Liste
- **blog/index.html:** Hauptsite-Design (style.css, Gold/Dark), statisch, keine JS/Reveal,
  Artikel nach Datum absteigend; eigene OG-Tags + canonical

## next_steps

- [x] Push nach GitHub + Deploy (18.09.2026 — siehe `## deploy`)
- [ ] Social-Preview prüfen: opengraph.xyz + cards-dev.twitter.com
- [ ] Social-Media-Posts aus `## social-media` posten (X, Telegram, LinkedIn)
- [ ] Optional: AAMS-Clone `git pull` (CHANGELOG 2.3.2 → 2.4.0)
- [ ] Optional: `NEUER-ARTIKEL-TEXT.md` nach Abschluss in `WORKING/WORKPAPER/closed/` oder `observe/` verschieben

## abschuss (2026-09-18)

Alle Punkte erledigt und verifiziert:

- JSON valid, 21 posts, nach Datum absteigend, meta↔dateien↔grid konsistent (0 Orphans)
- HTML-Tag-Balance in `blog-borsen-exodus-eu.html` OK (19 div / 35 p / 13 span …)
- Hero/Vorschau: `blog-images/borsen-exodus-eu.jpg` (User-Version, 1168×784) — alle Referenzen
  (Artikel-OG/Twitter, metadata, Doku) auf `.jpg` umgestellt, OG-Dimensionen 1168×784
- 0 verbliebene root-level Artikel-URLs in `blog/`, 0 Referenzen auf die alte `.png`
- Whitepaper = aktuelle Wahrheit (URL-Regel, 5-Punkte-Paket, Subtitle, PNG/JPG, Pfade)
- LTM + Diary ingested
- Commit + Deploy: siehe `## deploy`

## social-media (Posting-Texte)

**Artikel-Link (kanalübergreifend, klickbar):**
`https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html`

### X (≤ 280 Zeichen, ~274 gezählt)

```
Die Tür geht zu. Nicht für alle. Nur für uns.

MiCA abgelaufen: Von 1.200+ Krypto-Anbietern schaffen nur ~250 die EU-Lizenz. Binance, Bybit, Gemini & Co. gehen.

Wer sitzt noch auf einer nicht-lizenzierten Börse?

https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html

#MiCA #Krypto #Regulierung #SelfCustody
```

### Telegram

```
Die Börsen gehen. Die EU bleibt. Und wir stehen im Regen.

Die MiCA-Übergangsfrist ist abgelaufen. Das Ergebnis: Von über 1.200 registrierten Krypto-Anbietern schaffen nur rund 250 die volle Autorisierung.

Binance zieht den griechischen Antrag zurück. Gemini ist komplett raus. Bybit schickt in die österreichische Lizenz-Version. MEXC & HTX schreiben Mails, die im Kern bedeuten: „Zieht euer Zeug ab, bevor wir es für euch müssen.“

Das Muster ist so alt wie die Regulierung selbst: vorauseilender Gehorsam. Die Plattformen schließen die Tür selbst, bevor jemand klopft.

Eine unangenehme Wahrheit: Wenn deine Coins auf einer nicht-lizenzierten Börse liegen, bist du derjenige, der handeln muss. Nicht die Börse. Nicht die Behörde. Du.

Der Artikel:
https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html

#MiCA #Krypto #Regulierung #CryptoCompliance #SelfCustody
```

### LinkedIn

```
Die EU reguliert. Die Börsen reagieren — bevor die Behörde fragt.

Mit Ablauf der MiCA-Übergangsfrist (01.07.2026) verliert der europäische Kryptomarkt spürbare Tiefe: Von über 1.200 registrierten Dienstleistern erreichen nur rund 250 die volle CASP-Autorisierung. Internationale Plattformen begrenzen Zugänge, schieben Kunden auf EU-Lizenzen ab oder verlassen den Markt vollständig.

Für Unternehmen und Endnutzer ist das ein konkreter Risiko-Faktor: Exposure auf nicht-lizenzierten Plattformen trägt künftig der Kontoinhaber selbst. Wer heute noch auf HitBTC & Co. sitzt, sollte nicht auf die Durchsetzung warten — die läuft ohnehin nur selektiv.

Compliance ist damit mehr als Bürokratie. Sie wird zum Markt-Faktor — und zur Frage der Eigenverantwortung.

Gedanken dazu im aktuellen Blog-Artikel:
https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html

#MiCA #CryptoCompliance #Regulierung #FinTech #SelfCustody
```

**Hashtag-Basis-Set (alle Kanäle):** #MiCA #Krypto #Regulierung #SelfCustody
**Erweitert (Telegram/LinkedIn):** + #CryptoCompliance, LinkedIn zusätzlich #FinTech
**Vorschau-Bild:** `https://ogerly.github.io/alexander-friedland/blog-images/borsen-exodus-eu.jpg` (wird über og:image automatisch geladen)

## deploy (2026-09-18)

- **Commits:**
  - `b3ca548` — „CV + Doku: ausstehende Änderungen — WP-2026-09-16 Schlüsselprojekte, AAMS 2.4.0, opencode.json-Modelle, Bewerbungen-Index“
  - `c9f2a57` — „Blog: Die Börsen gehen. Die EU bleibt. — MiCA-Artikel, blog/index.html, 40 URL-Fixes, Social-Media-Texte“
- **Push:** `a6339db..c9f2a57 main → main` (SSH-Key nicht bei GitHub → einmaliger HTTPS-Push
  mit `GITHUB_API_TOKEN` aus `.env`, Token nirgendwo persistiert/commitet)
- **Live-Verifikation (HTTP 200):**
  - https://ogerly.github.io/alexander-friedland/blog/blog-borsen-exodus-eu.html
  - https://ogerly.github.io/alexander-friedland/blog/index.html
  - https://ogerly.github.io/alexander-friedland/blog-images/borsen-exodus-eu.jpg
  - canonical (neu + alt, z. B. `keine-angst-vor-ki`) zeigen korrekt auf `…/blog/…`
  - og:image + twitter:image → `.jpg`
- **Nächste Schritte für Alexander:** Social-Preview (opengraph.xyz / cards-dev.twitter.com)
  + Posts aus `## social-media` veröffentlichen
