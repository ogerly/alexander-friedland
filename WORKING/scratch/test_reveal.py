import sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<div class="identity-layers reveal">', '<div class="identity-layers">')
html = html.replace('<div class="stat-row reveal reveal-delay-1">', '<div class="stat-row">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Removed reveal class from identity-layers and stat-row")
