# GitHub Pages — Statische HTML-Site

## Wann diese Datei?

Wenn der Nutzer **keine** JS-Framework-App hat, sondern einfache HTML/CSS/JS-Dateien
direkt deployen will.

---

## Variante A: Direkt aus dem Repo (kein Build-Schritt)

Ideal wenn: Die `index.html` liegt im Repo-Root oder im `/docs`-Ordner.

### Setup (nur Settings, keine Action nötig)

1. Repo → **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` (oder `master`), Folder: `/ (root)` oder `/docs`
4. Save

GitHub deployed automatisch bei jedem Push auf `main`. Fertig.

```
mein-repo/
├── index.html       ← wird als / serviert
├── about.html
├── style.css
└── script.js
```

> 💡 Für den `/docs`-Ordner: Dateien in `/docs/index.html` ablegen, dann
> in Settings `/docs` als Folder wählen.

---

## Variante B: Deploy via GitHub Action (empfohlen)

Besser wenn: Du Kontrolle über den Trigger willst, Pre-Processing brauchst
(z.B. HTML minifizieren), oder den Pages-API-Workflow nutzen möchtest.

### Schritt 1 — Settings → Pages → Source: `GitHub Actions`

### Schritt 2 — Workflow anlegen

Datei: `.github/workflows/deploy.yml`

```yaml
name: Deploy static site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:       # manueller Trigger möglich

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # Optional: HTML/CSS minifizieren, Assets verarbeiten usw.
      # - run: npm ci && npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .           # Root des Repos deployen
          # Wenn Dateien in /docs: path: ./docs

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Was passiert hier?

| Schritt | Was es tut |
|---|---|
| `checkout@v4` | Holt den Code aus dem Repo |
| `configure-pages@v4` | Initialisiert die GitHub Pages-Umgebung |
| `upload-pages-artifact@v3` | Packt den angegebenen Ordner als Artifact |
| `deploy-pages@v4` | Veröffentlicht das Artifact auf GitHub Pages |

### Output-URL

Die fertige URL wird als `${{ steps.deployment.outputs.page_url }}` ausgegeben
und in der Action-Oberfläche angezeigt.

---

## Beispiel-Repo-Struktur

```
mein-projekt/
├── .github/
│   └── workflows/
│       └── deploy.yml     ← Action
├── index.html
├── impressum.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── images/
    └── logo.png
```

---

## Häufige Fragen

**Q: Muss ich einen Branch `gh-pages` anlegen?**
Nein — bei der Pages-API-Methode (`deploy-pages`) ist kein separater Branch nötig.
GitHub verwaltet das intern.

**Q: Wie lange dauert ein Deploy?**
Meist 30–90 Sekunden. Bei der ersten Aktivierung kann es 5–10 Minuten dauern.

**Q: Kann ich mehrere HTML-Seiten haben?**
Ja. Jede `.html`-Datei ist direkt aufrufbar:
`index.html` → `/`, `about.html` → `/about.html`

**Q: Geht HTTPS automatisch?**
Ja, für `*.github.io`-Domains ist HTTPS immer aktiv. Bei Custom Domains:
Settings → Pages → "Enforce HTTPS" aktivieren.