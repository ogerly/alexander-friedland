# WP-2026-09-23-GOV-PUSH-Token-Block-Security-Cleanup

**Status:** complete (2026-09-23) — Push durch, Cleanup done
**Datum:** 2026-09-23
**TOPIC:** GOV (Security/Push)

## session_goal

1. Push-Blockade analysieren (Blog-Push `865ac69` schlägt fehl, Token „Bad credentials").
2. Token-Security aufräumen: **keine Token-Strings außerhalb der `.env`** (User-Regel, bindend).
3. Vorfall + Befunde + Next-Steps dokumentieren (AAMS-Ritual).

## context

- 23.09.2026 ~07:40 + ~13:00: Pushes mit `GITHUB_API_TOKEN` aus `.env` erfolgreich
  (Blog `8dcd0d5`, `9fed3ac`, `1f316b3` + AAMS-Showcase `1bd92ef`).
- ~13:20: Push des Märchen-Artikels (`865ac69`) schlägt fehl:
  `remote: Invalid username or token` / API `GET /user` → **401 „Bad credentials"**.
- `.env` unverändert seit 16.09.2026 (gleiche Datei, gleicher Token wie bei den
  erfolgreichen Pushes).

## findings

1. **Token selbst wird von GitHub abgelehnt** (API 401), nicht unser Setup:
   gleicher Token, gleicher Befehl, gleiche `.env`. Der Token war ~30 min vorher
   noch gültig → **Ungültigkeitszeitpunkt liegt heute zwischen ~13:00 und ~13:20**.
2. Plausibelste Erklärungen: **Ablaufdatum des PATs ist heute erreicht**
   (z. B. 1-Jahres-Expiry) **oder** GitHub hat den Token automatisch
   revoked (Security-Sweep/Leak-Verdacht).
3. **Token-Reste gefunden & bereinigt:**
   - `AAMS`-Clone (Autonomous Agent Manifest Specification): **alter PAT direkt in
     Remote-URL** (`origin`) → entfernt, Remote jetzt `https://github.com/ogerly/AAMS.git`
     (`.git/config` verifiziert: 0 Treffer).
   - `WP-2026-09-23-RES-Blog-Hermes-Waechter-AAMS.md`: Token-Präfix-Referenz im
     decisions-Block → entfernt (jetzt nur noch „alter PAT im Remote verfallen").
4. **False-Positives (keine Aktion nötig):**
   - `.agent.json`: `"ghp_*"` ist ein **mask_patterns**-Eintrag (Sicherheitsregel,
     kein Token).
   - `WP-2026-09-16-FLD-CV-Website-Update.md`: `https://ghp_…@github.com/…` —
     bereits maskierter Verweis.
5. AAMS-Clone: keine Token-Strings in tracked Dateien (Scan 23.09.2026).

## decisions

- **D1 (User-Regel, bindend):** Es darf **kein Token direkt irgendwo sichtbar sein —
  nur die `.env`**. Kein Token (auch kein Präfix) in Remotes, Configs, Workpapers,
  Commits, Chats. Push-Strategie: ausschließlich einmalige URL mit `.env`-Token,
  nie persistiert.
- **D2:** Alter AAMS-Remote-PAT gilt als **kompromittiert/veraltet** → aus
  `origin` entfernt (war zwar tot, aber: Token-String in Datei = Regelbruch).
- **D3:** Blog-Push `865ac69` bleibt lokal committed, bis ein neuer Token vorliegt.

## next_steps

- [x] **Neuen PAT anlegen** → in `.env` (ausgegeben: Classic PAT, 40 Zeichen;
      davor Fine-grained nur mit Read → 403/404, Classic PAT push-tauglich)
- [x] Push `865ac69` + `83c5d84` → `1f316b3..83c5d84 main → main` (~17:00)
- [x] Live-Verifikation Märchen-Artikel (HTTP 200) + `## deploy`/`## abschuss`
      im Märchen-WP
- [ ] AAMS-Repo-Diary-Zeile (2026-09-23) mit der 09-22-Sitzung dort committen
      (Session-Close gehört dort hin)
- [ ] Optional: GitHub-Token-Expiry im Blick behalten (github.com/settings/tokens)

## resolution (2026-09-23)

- Fine-grained-Token: Repo-Read ja, Repo-Write nein (API: GET 200 / PUT 404, Push 403)
  → Permissions-Änderung hatte nicht gegriffen (Repo-Ebene „Contents" nicht auf
  Read+Write).
- **Lösung:** frischer **Classic-PAT** in `.env` (Scope `repo`) → API-/user OK,
  Push OK. Token-Regel (D1) bleibt unverändert: Token nur in `.env`, Pushes als
  einmalige URL, nichts persistiert.
- Alle Token-Reste aus Remotes/Configs/Workpapers bereinigt (siehe file_protocol).

## file_protocol

| Datei | Aktion | Status |
|---|---|---|
| `WORKING/WHITEPAPER/security-token-regeln.md` | **neu — Decision-Promotion D1** (Token nur in `.env`, Push-Strategie, Token-Hygiene, Leak-Check) | ✅ |
| `WORKING/WORKPAPER/WP-2026-09-23-GOV-PUSH-Token-Block-Security-Cleanup.md` | anlegen (diese Datei) | ✅ |
| AAMS-Clone `.git/config` | alter PAT aus `origin` entfernt (`git remote set-url`) | ✅ |
| `WORKING/WORKPAPER/WP-2026-09-23-RES-Blog-Hermes-Waechter-AAMS.md` | Token-Präfix-Referenz entfernt | ✅ |
| `WORKING/DIARY/2026-09.md` | Security-Zeile 2026-09-23 | ✅ |
| `WORKING/MEMORY/ltm-index.md` | Token-Vorfall + D1-Regel | ✅ |
| AAMS-Clone `WORKING/DIARY/2026-09.md` | Zeile 2026-09-23 (uncommitted — gehört zur 09-22-Sitzung dort) | ✅ lokal |
