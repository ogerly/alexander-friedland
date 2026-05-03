# WP-2026-05-03-ARCH-Content-Update-AAMS-OS-Arena

## Session Goal

AAMS und OS Arena als zentrale Hauptprojekte prominent platzieren. Aside-block visibility bug fix. Open Source Philosophie unter 'Was ich baue' ergänzen.

## Changes

### index.html
- AAMS + OS Arena als featured cards ganz oben in projects-grid
- Dedicated AAMS section: Agent Manifest, .agent.json, 2-step start, multilingual (DE·EN·中文), universal compatible
- Dedicated OS Arena section: WebGPU browser lab, Arena Mode (Blind-Test), Einzel-Chat, Privacy First
- Projekt-Descriptions korrigiert: AAMS = Agent Manifest, OS Arena = WebGPU-Labor
- Navigation: AAMS + OS Arena als eigene Links (desktop + mobile)
- Aside-block .reveal-Klasse entfernt → sofort sichtbar + CSS staggered fallback
- Neuer Absatz in about: Mentor/Consultant, Souveränität, Menschen helfen

### style.css
- `.project-card-featured`: gold border + "Hauptplattform" Badge
- `.osarena-grid`: responsive grid (1/2/4 columns)
- `.osarena-feature`: cards mit hover border-glow
- Aside staggered animation: `asideFadeUp` keyframes + delay classes

### app.js
- `.osarena-grid` zu initGridReveal selector hinzugefügt

### components/reveal.js
- `.osarena-feature` zu card selector und visibility-observer hinzugefügt

## Decisions
- AAMS und OS Arena gleichwertig als Hauptplattformen positioniert
- Beide mit direkten GitHub-Links: DEVmatrose/AAMS und ogerly/os-arena
- Aside-blocks immer sichtbar — CSS-only animation als JS fallback

## File Protocol
| File | Action |
|------|--------|
| index.html | edited (4 sections + nav) |
| style.css | edited (featured cards + osarena grid + aside animation) |
| app.js | edited (grid reveal selector) |
| components/reveal.js | edited (osarena-feature observer) |

## Next Steps
- Workpaper ingest into LTM
- READ-AGENT.md update (repository contents + Markenarchitektur)
- Whitepaper update if needed
