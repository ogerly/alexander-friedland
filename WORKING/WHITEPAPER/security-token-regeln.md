# Security — Token- & Push-Regeln

**Lebende Referenz.** Repo-Sicherheit für GitHub-Zugänge. Bindend für alle
Sitzungen in diesem Repo (und als Muster für andere Repos).

Herkunft: D1 aus `WORKING/WORKPAPER/WP-2026-09-23-GOV-PUSH-Token-Block-Security-Cleanup.md`
(User-Decision, 23.09.2026, bindend).

---

## Regeln

1. **Token nur in der `.env`** (Root, gitignored). Nirgendwo sonst:
   keine Remote-URLs, keine `.git/config`, keine Workpapers/Whitepapers,
   keine Commits, keine Chat-Protokolle — **auch keine Token-Präfixe**.
2. **Push-Strategie:** ausschließlich als **einmalige URL**
   (`https://x-access-token:<aus .env>@github.com/...`), nie persistiert.
   Keine `insteadOf`-Regeln, kein `credential.helper=store` mit Token-Inhalt
   (`~/.git-credentials` muss leer bleiben).
3. **Token-Hygiene bei neuen Tokens:**
   - Scope minimal halten (für dieses Repo: Classic PAT mit `repo`
     oder Fine-grained mit **Contents: Read and write** auf dem Repo —
     nur Read reicht nicht: API-GET 200, aber Push 403 / API-PUT 404).
   - Expiry bewusst wählen; Ablauf in `WORKING/DIARY/` notieren.
   - Alter Token nach Wechsel **revokieren** (GitHub → Einstellungen → Tokens).
4. **Leak-Check bei jedem Push-Vorfall:**
   `grep -rl "ghp_\|github_pat_"` in Repo + `.git/config` + AAMS-Clone;
   False-Positives kennen: `.agent.json` enthält `ghp_*` als **mask_patterns**
   (Sicherheitsregel, kein Token), WP-2026-09-16 enthält einen maskierten
   Verweis (`ghp_…`).

## Hintergrund (23.09.2026)

- `.env`-Token (Fine-grained) funktionierte 07:40 + 13:00, wurde ab ~13:20
  mit 401/403/404 abgelehnt → Expiry bzw. fehlende Write-Berechtigung auf
  Repo-Ebene.
- Bereinigt: alter PAT aus AAMS-Clone-`origin` entfernt, Token-Präfix aus
  Workpaper entfernt, keine Token-Strings in tracked Dateien (Scan 23.09.2026).
- Lösung: frischer Classic PAT (`repo`) in `.env` → Pushes `865ac69`,
  `83c5d84`, `1d19ab3` erfolgreich.
