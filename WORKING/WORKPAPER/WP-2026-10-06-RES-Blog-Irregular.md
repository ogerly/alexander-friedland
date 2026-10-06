# WP-2026-10-06-RES-Blog-Irregular

**Status:** complete (2026-10-06)
**Datum:** 2026-10-06
**TOPIC:** RES (Blog)

## session_goal

Neuen Blog-Artikel **„Irregular: Das Labor, das die Tests kontrolliert – und der Hype, der die Bewertung treibt"** als vollständiges
Publikationspaket veröffentlichen:

- HTML-Artikel + Hero-Bild (`blog-images/Irregular.jpg`, User-Version)
- `data/blog-metadata.json` (erstes Element)
- `index.html` (Blog-Grid, erste Position)
- `blog/index.html` (Blog-Übersicht, erste Position)
- `README.md` („Blog — Neuester Artikel")
- AAMS-Ritual: Workpaper, DIARY, LTM

## context

- Quelltext: `WORKING/WORKPAPER/NEUER-ARTIKEL-TEXT.md` (~704 Wörter, eine Fassung, 1:1)
- Hero-Bild: `blog-images/Irregular.jpg` (1168×784, User-Version — Name bleibt)
- Whitepaper: `WORKING/WHITEPAPER/blog-artikel-erstellen.md` (Workflow, HTML-Template, URL-Regel)
- Struktur-Referenz: `blog/blog-maerchen-von-der-digitalen-souveraenitaet.html` (aktuellstes sauberes Template)
- Lesezeit-Kalibrierung: 761 Wörter (Märchen) = 10 min; 799 Wörter (Börsen-Exodus) = 11 min → 704 Wörter = **10 min**

## decisions

- **Slug:** `irregular-labor-kontrolliert-tests` (34 Zeichen, aus dem Titel abgeleitet)
- **Titel:** „Irregular: Das Labor, das die Tests kontrolliert – und der Hype, der die Bewertung treibt"
- **Datum:** 2026-10-06
- **Kategorie:** „Security & KI" (passend: AI-Security-Lab, Evaluierung, KI-Sicherheitsvorfälle; vorhanden seit Biometrie-Artikel)
- **Tags:** Irregular, AI-Security, Frontier AI, KI-Evaluierung, KI-Regulierung, AI-Safety
- **Lesezeit:** 10 min
- **Hero-Bild:** `blog-images/Irregular.jpg` **beibehalten** (User-Name; case-sensitiv auf GitHub Pages → exakt so referenziert).
  Präzedenz: Bild-Name weicht auch sonst vom Slug ab (z. B. `wenn-die-besten-coder-die-claude-verlassen.jpg`)
- **Subtitle:** „Wer die Tests kontrolliert, prägt die Standards. Wer die Standards prägt, steuert den Zugang." (90 Zeichen)
- **Excerpt/Meta (151 Zeichen):** „Fast alle dokumentierten KI-Sicherheitsvorfälle haben denselben Nenner: ein einziges Labor betrieb die Testumgebungen. Die Geschichte hinter Irregular."
- **Anreicherung:** Orange-Callout („Irregular. Früher Pattern Labs."), Muster-Kette als `ul` mit orange Pfeilen,
  roter Callout für Schluss-Punch — sonst Text 1:1 aus `NEUER-ARTIKEL-TEXT.md`

## file_protocol

| Datei | Aktion | Status |
|---|---|---|
| `blog/blog-irregular-labor-kontrolliert-tests.html` | neu — vollständiger Artikel (Meta/OG/Twitter, Hero, 3 H2-Sektionen, Callouts) | ✅ |
| `data/blog-metadata.json` | neuer Eintrag als erstes Element (25 posts, JSON valid) | ✅ |
| `index.html` | Blog-Grid: neuer Eintrag an erster Position | ✅ |
| `blog/index.html` | Blog-Übersicht: neuer Eintrag an erster Position | ✅ |
| `README.md` | „Blog — Neuester Artikel"-Block ersetzen (Märchen-Block) | ✅ |
| `WORKING/WORKPAPER/WP-2026-10-06-RES-Blog-Irregular.md` | anlegen (diese Datei) | ✅ |
| `WORKING/DIARY/2026-10.md` | anlegen + Eintrag 2026-10-06 | ✅ |
| `WORKING/MEMORY/ltm-index.md` | Session History 2026-10-06 + Zählungen (24→25 Artikel, 26→27 Bilder) | ✅ |

## next_steps

- [x] Publikationspaket 5/5 (HTML, metadata, index.html, blog/index.html, README)
- [x] DIARY + LTM Ingest
- [x] Workpaper abschließen (Status complete, ## abschuss, ## social-media)
- [x] Commit + Push (auf User-Anweisung; 2026-10-06)
- [ ] Social-Preview prüfen (opengraph.xyz / cards-dev.twitter.com) — Alexander
- [ ] Social-Media-Posts aus `## social-media` posten (X, Telegram, LinkedIn)

## deploy (2026-10-06)

- **Commit:** `18efea2` („Blog: Irregular — Das Labor, das die Tests kontrolliert — Artikel,
  Publikationspaket, Workpaper, AAMS-Ritual (DIARY/LTM)", 10 Dateien)
- **Push:** `c3ccd33..18efea2 main → main`
  - SSH fehlgeschlagen (`Permission denied` — Pub-Key nicht bei GitHub hinterlegt)
  - **Einmaliger Push mit `.env`-Token** (gemäß `security-token-regeln.md`, nicht persistiert)
  - **Haken:** `.env` ist CRLF → Token-Extraktion via `cut` produzierte trailing `\r`
    → `URL rejected: Malformed input` → Fix `tr -d '\r'` → Push OK
- **Security:** `~/.git-credentials` (`credential.helper=store`) enthielt github.com-Eintrag
  mit dem PAT (Rückstand aus 09-23-Pushes) → **entfernt** (Regel: keine Token im File);
  2 huggingface.co-Einträge verbleiben (andere Service — User-Entscheidung)
- **Leak-Check:** `.env` (erwartet, gitignored); `ghp_`-Treffer in Whitepaper/WP/AAMS-Clone
  = nur Präfix-Muster, keine echten Tokens; `.git/config` sauber
- **Live-Verifikation (alle HTTP 200, 06.10.2026):**
  - https://ogerly.github.io/alexander-friedland/blog/blog-irregular-labor-kontrolliert-tests.html
  - https://ogerly.github.io/alexander-friedland/blog-images/Irregular.jpg
  - https://ogerly.github.io/alexander-friedland/blog/ (neuer Artikel an erster Position)
  - https://ogerly.github.io/alexander-friedland/ (Grid zeigt neuen Artikel oben)
- **Nächste Schritte für Alexander:** Social-Preview (opengraph.xyz / cards-dev.twitter.com) + Posting

## abschuss (2026-10-06)

Alle Punkte erledigt und verifiziert:

- Publikationspaket komplett (5/5): HTML + metadata (erstes Element, 25 posts, JSON valid)
  + index.html-Grid + blog/index.html + README — neue Position jeweils erste
- HTML: Meta/OG/Twitter vollständig, canonical mit `/blog/`-Segment (URL-Regel), og:image als
  absolute URL (1168×784 = echte Bilddimension), Author „Alexander Friedland (@ogerly)",
  CSS 1:1 aus dem aktuellen Template (Märchen-Artikel)
- Text 1:1 aus `NEUER-ARTIKEL-TEXT.md` (~704 W); Anreicherung: Orange-Callout (Hook),
  Muster-Kette (ul + orange Pfeile), roter Callout (Schluss-Punch)
- Hero-Bild `blog-images/Irregular.jpg` (User-Version) unverändert, exakt case-sensitiv referenziert
- AAMS-Ritual: Workpaper (diese Datei), DIARY `2026-10.md` (neu), LTM-Index
  (Session History + Zählungen 25 Artikel / 27 Bilder)
- **Nächste Schritte für Alexander:** Commit + Push, Social-Preview, Posting

## social-media (Posting-Texte)

**Artikel-Link (kanalübergreifend, klickbar):**
`https://ogerly.github.io/alexander-friedland/blog/blog-irregular-labor-kontrolliert-tests.html`

### X (≤ 280 Zeichen, ~244 gezählt)

```
Fast alle dokumentierten „Rogue AI“-Vorfälle haben denselben Nenner. Ein und dasselbe Unternehmen betrieb die Testumgebungen.

Irregular.

https://ogerly.github.io/alexander-friedland/blog/blog-irregular-labor-kontrolliert-tests.html

#AISecurity
```

### Telegram

```
Irregular: Das Labor, das die Tests kontrolliert.

Die letzten Wochen liefen nach dem klassischen Drehbuch: „Rogue AI“, Modelle, die aus Testumgebungen ausbrechen, reale Systeme angreifen. OpenAI, Anthropic, Google, Meta – alle irgendwie betroffen. Die Panik war greifbar.

Was dabei systematisch unterging: Fast alle dokumentierten Vorfälle hatten denselben gemeinsamen Nenner. Ein und dasselbe Unternehmen betrieb die Simulationsumgebungen, in denen die Modelle „ausgebrochen“ sind.

Irregular. Früher Pattern Labs. Ein hochspezialisiertes „Frontier AI Security Lab“ — es liefert die Test- und Bewertungsprotokolle, anhand derer große Labs und Regierungen entscheiden, was als „sicher“ oder „gefährlich“ gilt.

Die Geschichte: 2023 gegründet in Tel Aviv, 6,8 Millionen Seed von Good Ventures (Stiftung Moskovitz/Tuna) 2024, Aufnahme in das Evaluierungsnetzwerk des britischen AI Safety Institute, 2025 Rebrand auf Irregular, September 2025 80 Millionen bei 450 Millionen Bewertung — und jetzt, mitten in den Vorfällen, Gespräche über mehr als 100 Millionen bei 1,5 Milliarden Bewertung.

Wer die Tests kontrolliert, prägt die Standards. Wer die Standards prägt, steuert den Zugang.

Der Artikel:
https://ogerly.github.io/alexander-friedland/blog/blog-irregular-labor-kontrolliert-tests.html

#AISecurity #FrontierAI #KI #KISicherheit #Regulierung
```

### LinkedIn

```
Wer die Tests kontrolliert, kontrolliert den Zugang.

Die „Rogue AI“-Panik ist real. Was dabei systematisch untergeht: Fast alle dokumentierten Vorfälle haben denselben Nenner — ein und dasselbe Unternehmen betrieb die Simulationsumgebungen, in denen die Modelle „ausgebrochen“ sind.

Irregular (früher Pattern Labs) ist kein zufälliges Cybersecurity-Startup. Es ist ein „Frontier AI Security Lab“, das die Test- und Bewertungsprotokolle liefert, anhand derer große Labs und Regierungen entscheiden, was als „sicher“ gilt. Die Historie: Seed aus der AI-Safety-Philanthropie (Good Ventures), Partnerschaft mit dem britischen AI Safety Institute, Rebrand 2025 — und nun, parallel zu den öffentlichen Vorfällen, Verhandlungen bei 1,5 Milliarden Bewertung.

Kein Beweis für eine Verschwörung. Aber die beobachtbare Struktur eines geschlossenen Kreislaufs: Tests, Ruf nach Standardisierung, Bewertungssprung der Akteure, die die Testinfrastruktur kontrollieren. Und die, die draußen bleiben: dezentrale Open-Weight-Modelle, lokale Installationen, Systeme auf eigener Hardware.

Gedanken zu AI-Security, Evaluierung und dem Hype, der die Bewertung treibt:
https://ogerly.github.io/alexander-friedland/blog/blog-irregular-labor-kontrolliert-tests.html

#AISecurity #FrontierAI #KI #KISicherheit #Regulierung
```

**Hashtag-Basis-Set (alle Kanäle):** #AISecurity #FrontierAI
**Erweitert:** Telegram/LinkedIn + #KI #KISicherheit #Regulierung
**Vorschau-Bild:** `https://ogerly.github.io/alexander-friedland/blog-images/Irregular.jpg` (wird über og:image automatisch geladen)
