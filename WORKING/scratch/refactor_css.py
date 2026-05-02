import re
import os

html_path = 'index.html'
css_path = 'style.css'

# 1. Clean up index.html
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Extract <style> block from <head> to be removed
html = re.sub(r'<style>.*?</style>\s*', '', html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Refactor style.css
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Instead of piecemeal replace, let's remove the @media (max-width: 900px) block entirely
# and the @media (max-width: 600px) block.
# We will construct a completely mobile-first CSS!

# Find the RESPONSIVE section
resp_start = css.find('/* ═══════════════════════════════════════\n   RESPONSIVE')
if resp_start != -1:
    css = css[:resp_start]

# Now we adjust the base styles to be mobile-first

# nav
css = css.replace('padding-inline: 2.5rem;', 'padding-inline: 1.5rem;\n  }\n  @media (min-width: 901px) {\n    nav { padding-inline: 2.5rem; }\n  }', 1)

# nav-links
css = css.replace('.nav-links {\n    display: flex;', '.nav-links {\n    display: none;\n  }\n  @media (min-width: 901px) {\n    .nav-links { display: flex; }\n  }\n  .nav-links-hidden {', 1)

# nav-cta
css = css.replace('.nav-cta {\n    font-family', '.nav-cta {\n    display: none;\n  }\n  @media (min-width: 901px) {\n    .nav-cta { display: inline-block; }\n  }\n  .nav-cta {\n    font-family', 1)

# hamburger
css = css.replace('.hamburger {\n    display: none;', '.hamburger {\n    display: flex;\n  }\n  @media (min-width: 901px) {\n    .hamburger { display: none; }\n  }\n  .hamburger-hidden {')

# container
css = css.replace('.container {\n    inline-size: min(var(--container), 100% - var(--space-8) * 2);\n    margin-inline: auto;\n    padding-inline: 2.5rem;\n  }', '.container {\n    inline-size: min(var(--container), 100% - var(--space-8) * 2);\n    margin-inline: auto;\n    padding-inline: 1rem;\n  }\n  @media (min-width: 601px) {\n    .container { padding-inline: 1.5rem; }\n  }\n  @media (min-width: 901px) {\n    .container { padding-inline: 2.5rem; }\n  }')

# section-pad
css = css.replace('.section-pad { padding-block: 7rem 0; }', '.section-pad { padding-block: 3rem 0; }\n  @media (min-width: 601px) {\n    .section-pad { padding-block: 4rem 0; }\n  }\n  @media (min-width: 901px) {\n    .section-pad { padding-block: 7rem 0; }\n  }')

# identity-layers
css = css.replace('.identity-layers {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);', '.identity-layers {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  @media (min-width: 901px) {\n    .identity-layers { grid-template-columns: repeat(3, 1fr); }\n  }\n  .identity-layers-desktop {')

# stat-row
css = css.replace('.stat-row {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);', '.stat-row {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: 901px) {\n    .stat-row { grid-template-columns: repeat(4, 1fr); }\n  }\n  .stat-row-desktop {')

# about-grid
css = css.replace('.about-grid {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    gap: 5rem;\n    align-items: start;\n  }', '.about-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n    align-items: start;\n  }\n  @media (min-width: 901px) {\n    .about-grid {\n      grid-template-columns: 2fr 1fr;\n      gap: 5rem;\n    }\n  }')

# logbuch-entry
css = css.replace('.logbuch-entry {\n    border-block-start: 1px solid var(--border);\n    padding-block: 2rem;\n    display: grid;\n    grid-template-columns: 140px 1fr;\n    gap: 2rem;\n    align-items: start;', '.logbuch-entry {\n    border-block-start: 1px solid var(--border);\n    padding-block: 2rem;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n    align-items: start;\n  }\n  @media (min-width: 601px) {\n    .logbuch-entry { grid-template-columns: 140px 1fr; gap: 2rem; }\n  }\n  .logbuch-entry-desktop {')

# hero
css = css.replace('.hero {\n    position: relative;\n    min-block-size: 100vh;\n    display: flex;\n    align-items: center;\n    padding-block: 6rem 4rem;\n    padding-inline: 2.5rem;\n    overflow: hidden;\n  }', '.hero {\n    position: relative;\n    min-block-size: 100vh;\n    display: flex;\n    align-items: center;\n    padding-block: 4rem 2rem;\n    padding-inline: 1.5rem;\n    overflow: hidden;\n  }\n  @media (min-width: 601px) {\n    .hero { padding-block: 5rem 3rem; }\n  }\n  @media (min-width: 901px) {\n    .hero { padding-block: 6rem 4rem; padding-inline: 2.5rem; }\n  }')

css = css.replace('.hero-compass {\n    position: absolute;\n    inset-inline-end: 5%;', '.hero-compass {\n    display: none;\n    position: absolute;\n    inset-inline-end: 5%;\n  }\n  @media (min-width: 901px) {\n    .hero-compass { display: block; }\n  }\n  .hero-compass-desktop {')

# footer
css = css.replace('  footer {\n    position: relative;\n    z-index: 1;\n    background: var(--bg2);\n    border-block-start: 1px solid var(--border);\n    padding-block: 3rem;\n    padding-inline: 2.5rem;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    gap: 2rem;\n  }', '  footer {\n    position: relative;\n    z-index: 1;\n    background: var(--bg2);\n    border-block-start: 1px solid var(--border);\n    padding-block: 3rem;\n    padding-inline: 1.5rem;\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    gap: 2rem;\n  }\n  @media (min-width: 901px) {\n    footer { padding-inline: 2.5rem; grid-template-columns: 1fr auto; }\n  }')

css = css.replace('  .footer-links {\n    display: flex;\n    gap: 1.5rem;\n    list-style: none;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n  }', '  .footer-links {\n    display: flex;\n    gap: 1.5rem;\n    list-style: none;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  @media (min-width: 901px) {\n    .footer-links { justify-content: flex-end; }\n  }')

css = css.replace('.hero-scroll {\n    position: absolute;', '.hero-scroll {\n    display: none;\n    position: absolute;\n  }\n  @media (min-width: 601px) {\n    .hero-scroll { display: flex; }\n  }\n  .hero-scroll-desktop {')

# touch-friendly
css = css.replace('.contact-form-wrap {\n    background: var(--bg2);\n    border: 1px solid var(--border);\n    padding: 2.5rem;\n  }', '.contact-form-wrap {\n    background: var(--bg2);\n    border: 1px solid var(--border);\n    padding: 1.5rem;\n  }\n  @media (min-width: 601px) {\n    .contact-form-wrap { padding: 2.5rem; }\n  }')

css = css.replace('.form-group input,\n  .form-group textarea,\n  .form-group select {\n    inline-size: 100%;\n    background: var(--bg);\n    border: 1px solid var(--border);\n    color: var(--text);\n    font-family: var(--body);\n    font-size: 0.9rem;\n    padding-block: 0.75rem;\n    padding-inline: 1rem;\n    transition: border-color 0.2s;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n  }', '.form-group input,\n  .form-group textarea,\n  .form-group select {\n    inline-size: 100%;\n    background: var(--bg);\n    border: 1px solid var(--border);\n    color: var(--text);\n    font-family: var(--body);\n    font-size: 16px;\n    padding-block: 0.85rem;\n    padding-inline: 1rem;\n    transition: border-color 0.2s;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n  }\n  @media (min-width: 601px) {\n    .form-group input, .form-group textarea, .form-group select {\n      font-size: 0.9rem;\n      padding-block: 0.75rem;\n    }\n  }')

css = css.replace('.quote-block {\n    background: var(--bg2);\n    border-inline-start: 3px solid var(--gold);\n    padding-block: 2.5rem;\n    padding-inline: 3rem;\n    margin-block: 5rem;\n  }', '.quote-block {\n    background: var(--bg2);\n    border-inline-start: 3px solid var(--gold);\n    padding-block: 1.75rem;\n    padding-inline: 1.5rem;\n    margin-block: 3rem;\n  }\n  @media (min-width: 601px) {\n    .quote-block {\n      padding-block: 2.5rem;\n      padding-inline: 3rem;\n      margin-block: 5rem;\n    }\n  }')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

print("Refactored CSS to Mobile-First and removed duplicate HTML styles.")
