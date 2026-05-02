import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix nav
broken_nav = '''  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding-inline: 1.5rem;
  }
  @media (min-width: 901px) {
    nav { padding-inline: 2.5rem; }
  }
    block-size: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(7,9,15,0.85);
    backdrop-filter: blur(12px);
    border-block-end: 1px solid var(--border);
    transition: background 0.3s, border-color 0.3s;
  }'''

fixed_nav = '''  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding-inline: 1.5rem;
    block-size: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(7,9,15,0.85);
    backdrop-filter: blur(12px);
    border-block-end: 1px solid var(--border);
    transition: background 0.3s, border-color 0.3s;
  }
  @media (min-width: 901px) {
    nav { padding-inline: 2.5rem; }
  }'''

css = css.replace(broken_nav, fixed_nav)

css = css.replace('.nav-links-hidden {', '.nav-links {')
css = css.replace('.hamburger-hidden {', '.hamburger {')
css = css.replace('.hero-compass-desktop {', '.hero-compass {')
css = css.replace('.hero-scroll-desktop {', '.hero-scroll {')
css = css.replace('.identity-layers-desktop {', '.identity-layers {')
css = css.replace('.stat-row-desktop {', '.stat-row {')
css = css.replace('.logbuch-entry-desktop {', '.logbuch-entry {')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed CSS syntax errors and orphaned classes.")
