# WP-2026-05-03-Formular-Mail-von-GitHub-Pages

## Projektanfrage Formular — Mailversand ohne Backend

### Problem
Das Kontaktformular auf GitHub Pages (statische Site) kann keine E-Mails direkt versenden.
GitHub Pages bietet kein Backend/Server.

---

## Optionen

### 1. mailto: (aktuell implementiert)

**Status:** ✅ Bereits in `components/contact.js` implementiert.

```js
window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
```

**Vorteile:**
- Keine externen Dienste
- Keine API Keys
- Sofort funktioniert

**Nachteile:**
- Öffnet den E-Mail-Client des Nutzers
- Funktioniert nicht wenn kein Client installiert
- Nutzer muss manuell senden
- Keine Bestätigung dass Mail ankam

---

### 2. Formspree (empfohlen)

**URL:** https://formspree.io

**Setup:**
1. Account erstellen auf formspree.io
2. Neues Formular erstellen → erhält eindeutige ID (z.B. `xqkrvpng`)
3. Formular action ändern:

```html
<form action="https://formspree.io/f/xqkrvpng" method="POST">
```

**Vorteile:**
- E-Mails direkt an `devmatrose@proton.me`
- No backend nötig
- Spam-Schutz
- Bestätigungsseite
- Free tier: 50 submissions/Monat

**Nachteile:**
- Externer Dienst
- Rate-Limit im Free tier

---

### 3. FormSubmit

**URL:** https://formsubmit.co

**Setup:**
1. Formular action ändern:

```html
<form action="https://formsubmit.co/devmatrose@proton.me" method="POST">
```

2. Erste Submit → E-Mail zur Bestätigung kommt → aktivieren

**Vorteile:**
- Keine Registrierung nötig
- Direkt an beliebige E-Mail
- Free tier: unbegrenzt

**Nachteile:**
- Weniger Features als Formspree
- Weniger dokumentiert

---

### 4. EmailJS

**URL:** https://www.emailjs.com

**Setup:**
1. Account erstellen
2. Email Service verbinden (Proton Mail über SMTP?)
3. Email Template erstellen
4. JS SDK einbinden:

```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  emailjs.init('public_key');
  
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', e.target)
      .then(() => alert('Gesendet!'));
  });
</script>
```

**Vorteile:**
- Client-seitig, kein Backend
- Templates möglich
- Free tier: 200 submissions/Monat

**Nachteile:**
- Proton Mail SMTP Support prüfen
- Externer Dienst
- Public Key im Code sichtbar (aber unschädlich)

---

### 5. GitHub Actions + Webhook

**Setup:**
1. Formular → Webhook zu GitHub Action
2. Action → SMTP Mail versenden

**Vorteile:**
- Kein externer Form-Dienst
- Full control

**Nachteile:**
- Komplex
- SMTP Credentials in Secrets
- Overkill für simple Formulare

---

## Empfehlung

### Formspree (Option 2) — Beste Balance

- Einfachstes Setup
- Zuverlässig
- Spam-Schutz
- Free tier ausreichend

### Alternative: FormSubmit (Option 3) — Einfachstes Setup

- Keine Registrierung
- Direkt konfigurieren
- Free tier unbegrenzt

---

## Umsetzung (wenn Formspree gewählt)

### Schritt 1: Account & Formular erstellen
https://formspree.io → neues Formular → `devmatrose@proton.me`

### Schritt 2: `components/contact.js` anpassen

```js
// E-Mail-Client wird nicht mehr geöffnet, Formspree handle das
statusEl.style.color = 'var(--gold)';
statusEl.textContent = '→ Anfrage gesendet! Ich melde mich.';
statusEl.style.display = 'block';
```

### Schritt 3: `index.html` Formular action ändern

```html
<form id="contactForm" class="contact-form-wrap reveal"
      action="https://formspree.io/f/[DEINE_ID]" method="POST" novalidate>
```

### Schritt 4: `novalidate` entfernen (Formspree valider selbst)

---

## Proton Mail SMTP

Proton Mail unterstützt SMTP:
- Server: `smtp.protonmail.ch`
- Port: 587 (TLS) / 465 (SSL)
- Username: `devmatrose@proton.me`
- Password: App Password (in Proton Settings generieren)

**Aber:** SMTP Credentials dürfen nicht im Client-Code stehen.
EmailJS mit Proton SMTP möglich, oder GitHub Action mit Secrets.
