# WP-2026-05-02: Vanilla Web Audit & Perfektionierungs-Workflow

## 1. Befund (Audit Results)
Die aktuelle Code-Basis im Ordner `components/` und `app.js` zeigt eine sehr saubere Grundlage für eine moderne Vanilla-JS-Architektur (entsprechend "Mode B" der `skill-vanilla-web.md` Guidelines). 

Während des Audits wurden jedoch zwei funktionale JavaScript-Bugs identifiziert und direkt behoben:

*   **Bug in `hero.js` (DOM Selection):** 
    *   *Problem:* Es wurde versucht, mit `$('.hero-scroll::after')` ein CSS-Pseudo-Element abzufragen. JS-Selektoren können keine Pseudo-Elemente zurückgeben (`null`).
    *   *Fix:* Die Klasse `.animate-scroll-line` wird nun dem Parent-Element (`.hero-scroll`) zugewiesen. Die Animation muss via CSS über `.animate-scroll-line::after` getriggert werden.
*   **Bug in `reveal.js` (Transition Override):**
    *   *Problem:* Die Eigenschaft `transitionDelay` wurde durch den direkt danach zugewiesenen `transition`-Shorthand überschrieben (Default: `0s`). Der gewünschte Stagger-Effekt im Grid blieb dadurch aus.
    *   *Fix:* Die Reihenfolge wurde korrigiert: Erst `transition` (Shorthand) zuweisen, danach spezifisch `transitionDelay` überschreiben.

Insgesamt ist die Struktur (Trennung von `nav.js`, `hero.js`, `reveal.js`, `contact.js`) exzellent und verzichtet lobenswerterweise auf unnötige Framework-Abhängigkeiten.

---

## 2. Zielsetzung
Gemäß der `skill-vanilla-web.md` und `retro-css-architecture.md` (oder `modern-css.md`) Tools soll das Projekt nun wie folgt perfektioniert werden:
1.  **Konsequentes Mobile-First-Design**
2.  **Architektonische Perfektion der Vanilla-App** (Performance, A11y, Native APIs)
3.  **Beibehaltung und Schärfung des bestehenden Stils** (Ästhetik bewahren, Interaktionen verfeinern)

---

## 3. Workflow zur Perfektionierung (Schritt-für-Schritt)

### Phase 1: CSS-Architektur & Mobile-First erzwingen
**Ziel:** Die Stylesheets robust für alle Geräte machen, beginnend beim kleinsten Viewport.
*   **CSS-Reset & Custom Properties prüfen:** Sicherstellen, dass Design-Tokens (Farben, Typografie, Breakpoints wie `--bp-sm`, `--bp-md`) zentral in `:root` deklariert sind.
*   **Base-Styles = Mobile-Styles:** Die Standard-CSS-Regeln **ohne** Media Queries müssen exakt für Mobile (ab 320px Breite) optimiert sein. 
*   **Progressive Enhancement via Media Queries:** Größere Layouts (z. B. Side-by-Side Grids) werden strikt mit `min-width` aufgebaut.
    ```css
    /* Mobile First (Base) */
    .grid { display: flex; flex-direction: column; }
    /* Desktop (Enhanced) */
    @media (min-width: 768px) { .grid { display: grid; grid-template-columns: repeat(2, 1fr); } }
    ```
*   **Touch-Targets:** Bei Mobile sicherstellen, dass alle interaktiven Elemente (Buttons, Links) mindestens `44x44px` groß sind.

### Phase 2: JavaScript- & DOM-Optimierung
**Ziel:** Skripte absolut ausfallsicher, performant und im Einklang mit den Vanilla-Regeln machen.
*   **Event Delegation:** Anstatt an 10 Buttons jeweils ein Event zu hängen, Events an den Parent hängen (z.B. Container für `project-card`).
*   **Performance (`requestAnimationFrame`):** In `hero.js` wird für den Custom-Cursor `mousemove` verwendet. Dies sollte zur Vermeidung von Rucklern über ein `requestAnimationFrame` (rAF) Loop abgekoppelt werden.
*   **Native Form Validation:** Die Formular-Checks in `contact.js` (aktuell manuell mit `if (!name)`) sollten auf die native **Constraint Validation API** (`formEl.checkValidity()`) umgebaut werden, wie in `skill-vanilla-web.md` unter *Form Validation* dokumentiert.

### Phase 3: Accessibility (Barrierefreiheit) & User Experience
**Ziel:** Die Seite nutzbar für alle machen, ohne den ästhetischen Stil zu kompromittieren.
*   **Keyboard Navigation:** Fokus-Styles (`:focus-visible`) implementieren, die visuell zum Design passen. Darf bei Tastatur-Bedienung nie unsichtbar sein!
*   **ARIA-Attribute:** Das Mobile-Nav (`nav.js`) sollte beim Togglen `aria-expanded="true/false"` am Hamburger-Button setzen.
*   **Scroll-Lock für Mobile Nav:** Wenn das Menü auf dem Smartphone geöffnet wird, muss der Hintergrund un-scrollbar werden (`body { overflow: hidden; }`).

### Phase 4: Ästhetik & Motion Polish
**Ziel:** Das Design durch Orchestrierung "teuer" wirken lassen.
*   **Animationen optimieren:** Keine Animationen auf Layout-verändernde Eigenschaften (`width`, `margin`). Ausnahmslos `transform` und `opacity` nutzen, um GPU-Beschleunigung (60 FPS) zu garantieren.
*   **Micro-Interactions (Hover):** Weg von generischen `transform: scale(1.05)` Hover-Effekten. Stattdessen kontextbezogene Animationen (z. B. ein Unterstreichungs-Effekt via `::after`, asymmetrischer Schattenwurf).
*   **Scroll-Driven Elements:** Den IntersectionObserver (bereits gut in `reveal.js` implementiert) noch feiner abstimmen (z.B. längere `duration` mit starkem `ease-out` für eine weichere "Refined" Ästhetik).

---

## 4. Nächste Schritte zur Umsetzung
Wenn dieser Workflow freigegeben ist, können wir schrittweise vorgehen:
1. **[x]** CSS/HTML Mobile-First und Design-Tokens auditieren.
2. **[x]** Die `contact.js` auf Native Constraint Validation umbauen.
3. **[x]** Die Performance in `hero.js` (Custom Cursor mit rAF) und Accessibility in `nav.js` (Scroll-Lock) updaten.

Bitte bestätigen, ob wir mit **Phase 1** oder spezifisch mit dem Refactoring der JS-Module starten sollen!


---

## 5. Umsetzung & Abschluss (Erfolgreich abgeschlossen)
Alle Phasen wurden erfolgreich und nach der "Zügel in der Hand halten"-Philosophie umgesetzt:
* **Mobile-First Architektur:** Redundante Inline-Styles wurden restlos in `style.css` überführt. Die App lädt nun ein solides Mobile-Fundament und skaliert via `min-width` hoch.
* **Architektur-Säuberung & Hero-Fix:** Dynamische Entry-Animations (`fadeUp`, `scrollLine`) und Typography-Clamps wurden sauber in das externe Stylesheet übertragen und an `class="hero"` gekoppelt.
* **Native API Excellence:** Formulare nutzen nun die native HTML5 Constraint Validation API (`checkValidity()`), der Cursor verwendet `requestAnimationFrame` für 60fps Performance, und interaktive UI-Elemente wie das Mobile-Menü integrieren ARIA-Tags und Scroll-Locks.
Das Portfolio verkörpert jetzt pure, wartbare und hoch-performante Vanilla-Web-Engineering-Kunst.
