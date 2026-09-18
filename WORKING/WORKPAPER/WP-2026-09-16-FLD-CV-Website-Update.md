# WP-2026-09-16-FLD-CV-Website-Update

## session_goal
Aktuellen Lebenslauf (Stand 2026) in die Website einbauen: `#cv`-Sektion in `index.html` um den Block "Schlüsselprojekte 2024 — 2026" erweitern, passende Styles ergänzen, Doku (README-Leitfaden) aktualisieren.

## context
- Quelle: Bewerbung-2026-Repo — `Lebenslauf-kurz-Alexander-Friedland.html/.md`, `Lebenslauf-lang-Alexander-Friedland.html/.md`, WH-001-Profil
- Website-Regel (READ-AGENT.md): öffentlicher Lebenslauf = nur berufliche Infos, keine privaten Daten (Adresse, Geburtsdatum, Insolvenz)

## changes
- `index.html` — `#cv`-Sektion: neuer Block "Schlüsselprojekte 2024 — 2026" zwischen Timeline und `.cv-note`:
  - AAMS (Flaggschiff, v2.4.0, Link github.com/ogerly/AAMS)
  - Aletheia Labeling Studio (Link github.com/DEVmatrose/Aletheia-Labeling-Studio)
  - PAX Weltfriedensfestival 2026 (Link pax.family)
  - Lokale KI-Stack für Coding (Qwen → LM Studio → opencode → AAMS)
  - Mantis-Agenten-Stack (Claw/Nostr/OS)
  - Ocelot (2020 — heute)
- `style.css` — neue Klassen `.cv-subhead` (Mono-Subheading, Gold) und `.cv-link` (Mono-Link, Gold, Hover) nach `.cv-tags .tag`
- `WORKING/WHITEPAPER/README-Leitfaden.md` — Abschnitt 5 (Lebenslauf): Schlüsselprojekte-Block + Regeln ergänzt (keine privaten Daten auf der Website)

## decisions
- DreamMall wird NICHT auf die Website — kein öffentlicher Repo-Link, Investor-Kontext
- druid wird NICHT auf die Website — zu klein, projects.html reicht
- Bestehende Timeline (2024—heute … 1999—2005) bleibt unverändert
- "Privater Lebenslauf auf Anfrage"-Notiz bleibt bestehen

## open_questions
- Telefon-Nummer fehlt noch im Bewerbung-2026-Repo (Platzhalter "[bitte ergänzen]")
- Sprachen: Deutsch (Muttersprache) + Englisch (Geschäftssprache) — noch nicht vom User final bestätigt

## korrektur_devmatrose (2026-09-16)
- github.com/DEVmatrose existiert nicht mehr (Unternehmen seit Mai 2026 aufgelöst)
- Aletheia- + Mantis-CV-Link entfernt, Rollen auf "Alexander Friedland" (ohne "Open Source")
- Bleiben: youtube.com/@DEVmatrose (Kanal), devmatrose@proton.me (E-Mail)

## security (2026-09-16)
- **PAT-Token aus der Remote-URL entfernt** (war `https://ghp_…@github.com/…`)
- Remote jetzt: `git@github.com:ogerly/alexander-friedland.git` (SSH)
- `.env` (GITHUB_API_TOKEN) bleibt lokal + gitignored — kein Leak
- Keine Secrets getrackt (verifiziert), `~/.git-credentials` leer
- **Offen:** SSH-Pub-Key noch nicht bei GitHub → Push schlägt aktuell fehl

## next_steps
- [ ] **SSH-Pub-Key bei GitHub eintragen** (sonst kein Push):
  `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAbT5TSAF2tUDXu/ES57OkCGMD59od0YcrIVPMC8uKb4 devmatrose@proton.me`
- [ ] Push nach GitHub (User-Entscheidung, erst nach SSH-Setup) — dann live auf ogerly.github.io/alexander-friedland/#cv
- [ ] Im Bewerbung-2026-Repo: Lebenslauf als PDF erzeugen (Browser-Print)
- [ ] Bewerbungsstrategie + Tracker (WH-001 Offene Aufgaben)
