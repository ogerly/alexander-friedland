# WP-2026-05-03-GitHub-Pages-Static-Check

## GitHub Pages Statische Site Check

### Skill: `skill-github-pages-static.md`

---

## 1. Repo-Struktur

**Skill Anforderung:** `index.html` im Repo-Root oder `/docs`-Ordner.

**Aktuell:** ✅ `index.html` liegt im Repo-Root.

```
alexander-friedland/
├── index.html          ← Root (✅)
├── style.css           ← direkt referenzierbar (✅)
├── app.js              ← ES Module (✅)
├── components/
│   ├── nav.js
│   ├── hero.js
│   ├── reveal.js
│   └── contact.js
├── utils/
│   ├── dom.js
│   ├── forms.js
│   └── store.js
├── README.md           ← GitHub Pages benötigt README (✅)
└── .gitignore
```

---

## 2. Branch & Source Konfiguration

**Skill Anforderung:** Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`.

**Aktuell:** ✅
- Branch `main` existiert
- GitHub Pages aktiviert
- README.md im Root vorhanden

---

## 3. HTML Referenzen

**Skill Anforderung:** CSS/JS Pfade müssen korrekt sein.

| Referenz | Pfad | Status |
|---|---|---|
| `<link rel="stylesheet" href="style.css">` | `style.css` | ✅ direkt im Root |
| `<script type="module" src="app.js">` | `app.js` | ✅ direkt im Root |
| `import { initNav } from './components/nav.js'` | `components/nav.js` | ✅ relativer Pfad |
| `import { $, on } from '../utils/dom.js'` | `utils/dom.js` | ✅ relativer Pfad |
| Google Fonts | `https://fonts.googleapis.com/...` | ✅ extern |

---

## 4. ES Module Support

**Skill Anforderung:** GitHub Pages unterstützt ES Modules (`<script type="module">`).

**Aktuell:** ✅
- `app.js` nutzt `type="module"`
- Alle Imports sind relative Pfade (`./components/...`, `../utils/...`)
- Keine CDN-Abhängigkeiten, keine Build-Tools nötig

---

## 5. Assets & externe Ressourcen

| Ressource | Typ | Status |
|---|---|---|
| SVG Compass | Inline SVG | ✅ kein externer Asset |
| Google Fonts | CDN | ✅ funktioniert ohne Build |
| Google Fonts fallback | `<noscript>` | ✅ Graceful degradation |
| SVG in select | Data URI | ✅ inline |

---

## 6. .gitignore

**Skill Anforderung:** Keine Build-Output-Dateien im Repo.

**Aktuell:** ✅
- `.env` ausgitignored
- Keine Build-Tools (npm, webpack, etc.) — pure Static Site

---

## 7. HTTPS

**Skill Anforderung:** HTTPS für `*.github.io` automatisch aktiv.

**Aktuell:** ✅ automatisch bei GitHub Pages

---

## 8. Cross-Origin / CSP

**Skill Anforderung:** Keine CORS-Probleme bei GitHub Pages.

**Aktuell:** ✅
- Alle JS-Dateien lokal im Repo
- Google Fonts erlaubt CORS (`crossorigin`)
- mailto: Links — keine API Calls

---

## 9. Fazit

**Status: ALLE CHECKS BESTANDEN ✅**

Die Website ist vollständig GitHub Pages ready. Keine weiteren Schritte nötig.

### Was funktioniert:
- `index.html` im Root → wird als `/` serviert
- `style.css` direkt referenzierbar
- ES Modules mit relativen Imports funktionieren
- Google Fonts via CDN
- Inline SVGs
- HTTPS automatisch
- README.md vorhanden

### Keine Actions nötig:
- Variante A (direkt aus Branch) ist ausreichend
- Variante B (GitHub Action) nicht erforderlich für diese Static Site
