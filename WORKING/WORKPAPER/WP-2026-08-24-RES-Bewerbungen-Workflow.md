# WP-2026-08-24-RES-Bewerbungen-Workflow

## session_goal
Bewerbungsprozess strukturieren, dokumentieren und automatisieren.
Jede Bewerbung wird als separates Dokument verwaltet.
Überblick über alle Bewerbungen (wann, wo, mit welchem Text).
Daten nicht nach GitHub.

## repository_inventory

### Neue Ordner
- `WORKING/WORKPAPER/Bewerbungen/` — Bewerbungsdokumente + index.md
- `WORKING/WHITEPAPER/alexander-friedland-profil.md` — Profil-Whitepaper

### Neue Dateien
- `WORKING/WORKPAPER/Bewerbungen/index.md` — Übersicht aller Bewerbungen
- `WORKING/WHITEPAPER/alexander-friedland-profil.md` — Alle Daten für Bewerbungen

## key_findings

1. Bewerbungen sind sensibel — nicht nach GitHub
2. Jede Bewerbung als separates File: `[Datum]-[stellenname]-[firma].md`
3. Profil-Whitepaper enthält alle Daten für Antworttexte
4. Zwei Bewerbungstypen: passt / passt nicht
5. Immer auf Webseite referenzieren
6. Antworttext als reiner Text (ohne Markdown) mit Betreff — einfach kopierbar

## decisions

1. **Ordner `Bewerbungen` in `.gitignore`** — keine sensiblen Daten in GitHub
2. **Profil-Whitepaper** — alle relevanten Daten lokal
3. **index.md** — Übersicht über alle Bewerbungen
4. **Dateinamen-Konvention** — `[Datum]-[stellenname]-[firma].md`
5. **Antworttexte als reiner Text** — ohne Markdown, mit Betreff, einfach kopierbar
6. **Webseite referenzieren** bei jeder Bewerbung

## open_questions

- Soll es ein Template für Antworttexte geben?
- Soll der Bewerbungsprozess weiter automatisiert werden?

## file_protocol

| Datei | Aktion | Grund |
|-------|--------|-------|
| `WORKING/WORKPAPER/Bewerbungen/` | erstellt | Neuer Ordner für Bewerbungen |
| `WORKING/WORKPAPER/Bewerbungen/index.md` | erstellt | Übersicht aller Bewerbungen |
| `WORKING/WHITEPAPER/alexander-friedland-profil.md` | erstellt | Profil-Whitepaper für Bewerbungen |
| `.gitignore` | erweitern | Bewerbungen-Ordner ignorieren |
| `.agent.json` | erweitern | Bewerbungen-Ordner hinzufügen |
| `READ-AGENT.md` | erweitern | Bewerbungen-Ordner dokumentieren |

## next_steps

1. Bewerbungen-Ordner in `.gitignore` aufnehmen
2. `.agent.json` erweitern
3. `READ-AGENT.md` erweitern
4. Erste Bewerbung dokumentieren (Telekom — Typ B)
5. Status tracking: Datum, Plattform, Mail nach Versand eintragen
