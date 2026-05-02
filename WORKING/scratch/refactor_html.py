import sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace <div class="contact-form-wrap reveal"> with <form>
html = html.replace('<div class="contact-form-wrap reveal">', '<form id="contactForm" class="contact-form-wrap reveal" novalidate>')

# Replace the closing </div> for the form
html = html.replace('''        <button class="form-submit" id="formSubmit">Anfrage senden →</button>
        <div id="formStatus" style="margin-top: 1rem; font-family: var(--mono); font-size: 0.75rem; color: var(--gold); display: none;"></div>
      </div>''', '''        <button type="submit" class="form-submit" id="formSubmit">Anfrage senden →</button>
        <div id="formStatus" style="margin-top: 1rem; font-family: var(--mono); font-size: 0.75rem; color: var(--gold); display: none;"></div>
      </form>''')

# Add 'required' to Name, E-Mail, and Kurzbeschreibung
html = html.replace('<input type="text" placeholder="Dein Name" id="fieldName">', '<input type="text" placeholder="Dein Name" id="fieldName" required>')
html = html.replace('<input type="email" placeholder="deine@email.de" id="fieldEmail">', '<input type="email" placeholder="deine@email.de" id="fieldEmail" required>')
html = html.replace('<textarea placeholder="Was soll entstehen? Was ist das Problem?" id="fieldMsg"></textarea>', '<textarea placeholder="Was soll entstehen? Was ist das Problem?" id="fieldMsg" required></textarea>')

# Add 'for' attributes to labels
html = html.replace('<label>Name</label>', '<label for="fieldName">Name</label>')
html = html.replace('<label>E-Mail</label>', '<label for="fieldEmail">E-Mail</label>')
html = html.replace('<label>Projekttyp</label>', '<label for="fieldType">Projekttyp</label>')
html = html.replace('<label>Kurzbeschreibung</label>', '<label for="fieldMsg">Kurzbeschreibung</label>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
