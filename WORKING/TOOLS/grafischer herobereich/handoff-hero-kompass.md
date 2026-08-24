# Handoff: Animierter Hero-Kompass

Kontext für den Agenten: Ich habe 4 Dateien bekommen, um den bestehenden statischen SVG-Kompass im Hero-Bereich der Seite in eine Animation zu verwandeln — `index.html`, `style.css`, `app.js`, plus eine neue Datei `components/compass.js`. Diese Dateien sind **Ausschnitte/Ergänzungen**, keine vollständigen Ersetzungen des echten Projekts. Wichtig: die anderen Komponenten (`nav.js`, `hero.js`, `reveal.js`, `contact.js`) waren nicht Teil davon und wurden nicht gesehen — nicht anfassen, nicht überschreiben.

## Was pro Datei zu tun ist

### 1. `index.html`
Im Hero-Abschnitt (`<section id="hero">`) wurde der komplette `<svg class="hero-compass">...</svg>`-Block ersetzt. Neu enthält er:
- `<defs>` mit Radial-Gradient (Glow), Linear-Gradient (Sweep) und einem ClipPath
- einen atmenden Glow-Kreis (`.compass-glow`)
- einen rotierenden Radar-Sweep-Sektor (`.compass-sweep`), geclippt auf den äußeren Ring
- zwei gegenläufig rotierende, gestrichelte Ringe (`.compass-ring--outer`, `.compass-ring--mid`) — letzterer trägt einen umlaufenden Leuchtpunkt (`.compass-orbit-dot`)
- 8 pulsierende Knotenpunkte (`.compass-node`) an Kardinal-/Diagonalpunkten, mit `style="--delay: …"` für versetztes Timing
- die bestehenden N/S-Marker, der Nordpfeil hat jetzt die Klasse `.compass-north`

**Aufgabe:** Diesen `<svg>`-Block 1:1 in die echte `index.html` übernehmen (ersetzt den alten, unanimierten Kompass-Block an gleicher Stelle im Hero). Rest der Datei ist inhaltlich unverändert.

### 2. `style.css`
- `.hero` bekommt `position: relative; overflow: hidden;`
- `.hero-content` bekommt zusätzlich `position: relative; z-index: 1;` (max-width bleibt)
- Neuer Regelblock danach: Positionierung von `.hero-compass` (absolut, rechts hinter dem Text, mit Masken-Fade zum Rand), alle `.compass-*`-Klassen, die zugehörigen `@keyframes` (compass-rotate, compass-rotate-reverse, compass-breathe, compass-pulse, compass-glow-pulse), ein `@media (max-width: 900px)` für kleinere/dezentere Darstellung auf Mobile, und `@media (prefers-reduced-motion: reduce)` das alle Animationen abschaltet.

**Aufgabe:** Kompletten neuen Block übernehmen. Keine Namenskollisionen mit bestehenden Klassen — nichts an vorhandenen Farb-/Font-/Layout-Regeln ändern.

### 3. `app.js`
Nur 2 neue Zeilen gegenüber dem bekannten Original:
```js
import { initCompassParallax } from './components/compass.js';
```
und der Aufruf `initCompassParallax();` direkt nach `initHero();`.

**Aufgabe:** Falls die echte `app.js` mehr Imports/Logik enthält als die 4 bekannten (nav, hero, reveal, contact) — nur diese zwei Zeilen einfügen, sonst nichts verändern.

### 4. `components/compass.js` (komplett neu)
Realisiert eine dezente Maus-Parallax für `.hero-compass`: der Kompass verschiebt sich minimal in Richtung Cursor, mit Trägheit (Lerp). Bricht sauber ab bei `prefers-reduced-motion: reduce` und auf Touch-Geräten (`hover: none`).

**Aufgabe:** Datei unverändert in den echten `components`-Ordner legen.

## Kurz zusammengefasst
Der Kompass war vorher komplett unstyled (keine CSS-Regel existierte dafür) und dadurch vermutlich visuell kaputt/verschoben im Layout. Jetzt ist er als animiertes Hintergrundelement sauber positioniert: Radar-Sweep, gegenläufig rotierende Ringe, pulsierende Knoten, Atem-Glow, plus leichte Maus-Parallax — alles nur über `transform`/`opacity` (performant), mit Reduced-Motion-Fallback.
