tiny-css
Installation

$ npx skills add https://github.com/mikemai2awesome/agent-skills --skill tiny-css
SKILL.md
Tiny CSS
For small, minimalist projects — personal sites, prototypes, simple landing pages. Write as little CSS as possible and let the browser do the rest. If the project is growing beyond a handful of files or needs a token system or naming conventions, use more-css instead.

Core Principles
Trust the browser — Don't reset what already works
Use modern features — Let CSS handle what JavaScript used to do
Respect user preferences — Honor system settings for motion, contrast, and color schemes
Write resilient styles — Use logical properties for internationalization
Guidelines
Don't Declare Base Font Size
Let the browser handle the base font size, which defaults to 100% (typically 16px). Users can adjust this in their browser settings for accessibility.

/* Don't do this */
:root {
  font-size: 16px;
}
html {
  font-size: 100%;
}
body {
  font-size: 1rem;
}

/* Do nothing — the browser already handles this */
Use System Font with Better Glyphs
Enable distinct characters for uppercase I, lowercase l, and slashed zero in San Francisco font.

:root {
  font-family: system-ui;
  font-feature-settings: "ss06";
}
Improve Text Wrapping
Prevent widows and improve line breaks.

:where(h1, h2, h3, h4, h5, h6) {
  text-wrap: balance;
}

:where(p) {
  text-wrap: pretty;
}
Don't Declare Default Colors
Skip declaring color and background-color on the root. Browser defaults work and respect user preferences.

/* Don't do this */
body {
  color: #000;
  background-color: #fff;
}

/* Do nothing — browser defaults are fine */
Enable Light and Dark Modes
Use color-scheme to automatically support light and dark modes based on user system preferences.

:root {
  color-scheme: light dark;
}
Customize Interactive Element Colors
Use accent-color to change the color of checkboxes, radio buttons, range sliders, and progress bars.

:root {
  accent-color: #0066cc; /* Replace with desired color */
}
Match SVG Icons with Text Color
Make SVG icons inherit the current text color automatically.

:where(svg) {
  fill: currentColor;
}
Use Logical Properties
Write CSS that works across all languages and writing directions. Use logical properties instead of physical ones.

/* Don't do this */
.card {
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 20rem;
  min-height: 20rem;
}

/* Do this */
.card {
  margin-inline: 1rem;
  padding-block: 2rem;
  inline-size: 20rem;
  min-block-size: 20rem;
}
Make Media Embeds Responsive
Ensure images, videos, and iframes scale proportionally.

:where(img, svg, video, iframe) {
  max-inline-size: 100%;
  block-size: auto;
}
Add Pointer Cursors to Interactive Elements
Provide a baseline hover affordance for all clickable elements.

:where(input:is([type="checkbox"], [type="radio"]), select, label, button) {
  cursor: pointer;
}
Support Forced Colors Mode
Ensure buttons remain visible in Windows High Contrast Mode by adding explicit borders.

@media (forced-colors: active) {
  :where(button) {
    border: 1px solid;
  }
}
Enable Smooth Scrolling Conditionally
Apply smooth scrolling only when the user hasn't requested reduced motion.

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}
Minimal Base Stylesheet
Here's a complete minimal base that incorporates all guidelines:

:root {
  color-scheme: light dark;
  accent-color: #0066cc;
  font-family: system-ui;
  font-feature-settings: "ss06";
}

:where(h1, h2, h3, h4, h5, h6) {
  text-wrap: balance;
}

:where(p) {
  text-wrap: pretty;
}

:where(img, svg, video, iframe) {
  max-inline-size: 100%;
  block-size: auto;
}

:where(svg) {
  fill: currentColor;
}

:where(input:is([type="checkbox"], [type="radio"]), select, label, button) {
  cursor: pointer;
}

@media (forced-colors: active) {
  :where(button) {
    border: 1px solid;
  }
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}