import sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('class="services-grid reveal"', 'class="services-grid grid-auto reveal"')
html = html.replace('class="projects-grid reveal"', 'class="projects-grid grid-auto reveal"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Added grid-auto class to service and project grids in HTML.")
