import sys

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update .hero-name
css = css.replace('''  .hero-name {
    font-family: var(--serif);
    font-weight: 300;
    line-height: 1.0;
    letter-spacing: -0.01em;
    color: var(--text);
  }''', '''  .hero-name {
    font-family: var(--serif);
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 300;
    line-height: 1.0;
    letter-spacing: -0.01em;
    color: var(--text);
    opacity: 0;
    animation: fadeUp 0.7s 0.25s forwards;
  }''')

# 2. Update .hero-sub
css = css.replace('''  .hero-sub {
    margin-block-start: 1.5rem;
    font-family: var(--serif);
    font-weight: 300;
    font-style: italic;
    color: var(--muted);
    inline-size: min(680px, 100%);
  }''', '''  .hero-sub {
    margin-block-start: 1.5rem;
    font-family: var(--serif);
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 300;
    font-style: italic;
    color: var(--muted);
    inline-size: min(680px, 100%);
    opacity: 0;
    animation: fadeUp 0.7s 0.4s forwards;
  }''')

# 3. Update .hero-claim
css = css.replace('''  .hero-claim {
    margin-block-start: 2.5rem;
    font-family: var(--body);
    font-weight: 400;
    color: var(--text);
    inline-size: min(620px, 100%);
    line-height: 1.8;
  }''', '''  .hero-claim {
    margin-block-start: 2.5rem;
    font-family: var(--body);
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    font-weight: 400;
    color: var(--text);
    inline-size: min(620px, 100%);
    line-height: 1.8;
    opacity: 0;
    animation: fadeUp 0.7s 0.55s forwards;
  }''')

# 4. Update .hero-tag
css = css.replace('''  .hero-tag {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--gold);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-block-end: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }''', '''  .hero-tag {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--gold);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-block-end: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.1s forwards;
  }''')

# 5. Update .hero-actions
css = css.replace('''  .hero-actions {
    margin-block-start: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }''', '''  .hero-actions {
    margin-block-start: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.7s 0.7s forwards;
  }''')

# 6. Update .hero-scroll
# Note: hero-scroll has media queries now because of my fix
css = css.replace('.hero-scroll {\n    display: none;\n    position: absolute;\n  }', '.hero-scroll {\n    display: none;\n    position: absolute;\n    opacity: 0;\n    animation: fadeUp 0.7s 1s forwards;\n  }')

# 7. Add missing animations if any (scrollLine is there)
css = css.replace('.hero-scroll::after {\n    content: \'\';\n    display: block;\n    inline-size: 1px;\n    block-size: 48px;\n    background: linear-gradient(to bottom, var(--muted), transparent);\n  }', '.hero-scroll::after {\n    content: \'\';\n    display: block;\n    inline-size: 1px;\n    block-size: 48px;\n    background: linear-gradient(to bottom, var(--muted), transparent);\n    animation: scrollLine 2s 1.5s ease-in-out infinite;\n  }')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Add class="hero" to <section id="hero"> in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<section id="hero">', '<section id="hero" class="hero">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Restored hero styles and animations.")
