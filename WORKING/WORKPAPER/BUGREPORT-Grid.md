# Bugreport: Projekte & Services Grid (Missing Grid Class)

**Status:** Gefixt.
**Problem:**
Die einzelnen Arbeiten (Projekte) und Leistungen (Services) wurden nicht sauber als Kacheln aufgelistet. Sie stapelten sich ohne Abstände, ohne Hintergrundfarben und ohne das definierte Grid-Layout ineinander.

**Ursache:**
In der `style.css` wurde für die Projekt- und Service-Kacheln ein generisches CSS-Grid namens `.grid-auto` (inklusive dynamischem `repeat(auto-fit...)` und `1px` Gap) definiert. 
Die Container in der `index.html` besaßen jedoch nur die Klassen `.services-grid` bzw. `.projects-grid`, welchen im CSS **keinerlei** Layout-Eigenschaften zugewiesen waren. 

Da die `.grid-auto` Klasse im HTML schlichtweg fehlte, griffen weder die Grid-Spalten (`grid-template-columns`), noch der Gap (`gap: 1px`), noch die Hintergründe und Hover-Effekte (`background: var(--bg3)`), weshalb die Elemente wie einfache Textblöcke auf dem schwarzen Hintergrund unsichtbar verschmolzen.

**Lösung:**
Die fehlende Utility-Klasse `grid-auto` wurde in der `index.html` bei beiden betroffenen Containern ergänzt:
* Vorher: `<div class="projects-grid reveal">`
* Nachher: `<div class="projects-grid grid-auto reveal">`
* Vorher: `<div class="services-grid reveal">`
* Nachher: `<div class="services-grid grid-auto reveal">`

Die Grids skalieren nun wie vorgesehen auf allen Displaygrößen ("Mobile-First") und offenbaren die einzelnen Projekt-Karten mit dem korrekten Hover-Verhalten.
