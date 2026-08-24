# WP-2026-08-24-ARCH-Animierter-Hero-Kompass

**Datum:** 24.08.2026  
**Status:** Offen  
**TOPIC:** ARCH (Architecture)  
**SUBTOPIC:** Hero-Kompass-Animation

---

## Session-Ziel

Den statischen SVG-Kompass im Hero-Bereich durch eine Animation ersetzen — Radar-Sweep, gegenläufig rotierende Ringe, pulsierende Knoten, Atem-Glow, Maus-Parallax.

---

## Handoff-Datei

`WORKING/TOOLS/grafischer herobereich/handoff-hero-kompass.md`

Kontext: 4 Dateien (index.html, style.css, app.js, compass.js) enthalten den animierten Kompass als Ergänzungen — **keine vollständigen Ersetzungen**.

---

## Geplante Änderungen

### 1. index.html — SVG-Kompass ersetzen

**Aktuell:** Statischer SVG-Kompass im Hero-Bereich (Zeilen 71-83)

**Neu:** Animierter SVG-Kompass mit:
- `<defs>` Radial-Gradient (Glow), Linear-Gradient (Sweep), ClipPath
- Atemnder Glow-Kreis (`.compass-glow`)
- Rotierender Radar-Sweep-Sektor (`.compass-sweep`)
- Zwei gegenläufig rotierende Ringe (`.compass-ring--outer`, `.compass-ring--mid`)
- Umlaufender Leuchtpunkt (`.compass-orbit-dot`)
- 8 pulsierende Knotenpunkte (`.compass-node`) mit `style="--delay: …"`
- N/S-Marker (Nordpfeil mit `.compass-north`)

**Aufgabe:** SVG-Block 1:1 übernehmen (ersetzt alten Block an gleicher Stelle). Rest unverändert.

### 2. style.css — Kompass-Styles hinzufügen

**Neue Regeln:**
- `.hero` → `position: relative; overflow: hidden;`
- `.hero-content` → `position: relative; z-index: 1;`
- `.hero-compass` → Positionierung (absolut, rechts hinter Text, Masken-Fade)
- Alle `.compass-*`-Klassen
- `@keyframes`: compass-rotate, compass-rotate-reverse, compass-breathe, compass-pulse, compass-glow-pulse
- `@media (max-width: 900px)` für Mobile
- `@media (prefers-reduced-motion: reduce)` schaltet Animationen ab

**Aufgabe:** Kompletten neuen Block übernehmen. Keine Namenskollisionen.

### 3. app.js — Parallax-Import hinzufügen

**Neu:**
```js
import { initCompassParallax } from './components/compass.js';
```
und Aufruf `initCompassParallax();` nach `initHero();`

### 4. components/compass.js — Neue Datei

**Inhalt:** Maus-Parallax für `.hero-compass`
- Verschiebung in Cursor-Richtung mit Trägheit (Lerp)
- Schaltet ab bei `prefers-reduced-motion: reduce` und Touch-Geräten
- Max. Verschiebung: 18px

---

## Animationen

| Element | Animation | Dauer |
|---|---|---|
| Glow | compass-breathe | 6s |
| Radar-Sweep | compass-rotate | 7s |
| Äußerer Ring | compass-rotate | 90s |
| Mittlerer Ring | compass-rotate-reverse | 60s |
| Knoten | compass-pulse | 3s (versetzt) |
| Nordpfeil | compass-glow-pulse | 3s |

---

## Dateien im Handoff-Ordner

| Datei | Größe | Beschreibung |
|---|---|---|
| `index.html` | 723 Zeilen | Animierter SVG-Kompass (Hero-Bereich) |
| `style.css` | 887 Zeilen | Kompass-Styles + Keyframes |
| `app.js` | 16 Zeilen | Compass-Parallax-Import |
| `compass.js` | 54 Zeilen | Maus-Parallax-Logik |
| `handoff-hero-kompass.md` | 40 Zeilen | Diese Dokumentation |

---

## Umsetzungsschritte

1. **SVG-Kompass in index.html ersetzen** (Hero-Bereich, Zeilen 71-83)
2. **Kompass-Styles in style.css anhängen** (nach `.hero-content`, vor `.hero-tag`)
3. **app.js ergänzen** (Import + Aufruf von `initCompassParallax()`)
4. **components/compass.js erstellen** (neue Datei)
5. **Testen:** Mobile, Reduced-Motion, Touch-Geräte

---

## Wichtige Hinweise

- **Nur im Hero-Bereich** — alles andere bleibt unverändert
- **Keine Namenskollisionen** — bestehende Klassen nicht ändern
- **Reduced-Motion-Fallback** — alle Animationen abschaltbar
- **Mobile-First** — auf <900px: dezentere Darstellung (opacity 0.22)
- **Pointer-Events: none** — Kompass blockiert keine Interaktion

---

## Nächste Schritte

- [ ] SVG-Kompass in index.html ersetzen
- [ ] Kompass-Styles in style.css hinzufügen
- [ ] app.js ergänzen
- [ ] components/compass.js erstellen
- [ ] Testen (Desktop, Mobile, Reduced-Motion)
- [ ] Handoff-Ordner bereinigen (nur Handoff-Datei behalten)

---

**Status:** ✅ Handoff erstellt  
**Letzte Änderung:** 24.08.2026
