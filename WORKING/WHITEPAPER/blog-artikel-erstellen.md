# Alexander Friedland — Blog-Artikel erstellen

**Lebende Referenz.** Immer aktuell. Whitepaper, wie ein neuer Blog-Artikel erstellt wird.

---

## Workflow

Ich (Alexander Friedland) liefere:

- Titel
- Text (beliebig — Markdown, roher Text, HTML)
- Hero-Bild (optional, 1200x630px PNG)

Ich (der Agent) ermittele:

- Datum (Erstellungsdatum)
- Slug (aus dem Titel abgeleitet)
- Kategorie (1 passende aus dem Text)
- Tags (3-6, aus dem Text)
- Lesezeit (in Minuten, aus dem Text)

Daraus entsteht:

```
blog/blog-SLUG.html
blog-images/SLUG.png (optional)
Eintrag in data/blog-metadata.json
```

---

## Dateinamen

| Element | Muster | Beispiel |
|---|---|---|
| HTML | `blog/blog-SLUG.html` | `blog/blog-ki-architektur.html` |
| Hero | `blog-images/SLUG.png` | `blog-images/ki-architektur.png` |
| Slug | kebab-case, max 60 Zeichen | `ki-architektur` |

---

## HTML-Struktur

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TITEL | Alexander Friedland</title>
  <meta name="description" content="Beschreibung (max 160 Zeichen)">
  <link rel="canonical" href="https://ogerly.github.io/alexander-friedland/blog-SLUG.html">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Alexander Friedland">
  <meta property="og:title" content="TITEL">
  <meta property="og:description" content="Ausführliche Beschreibung (max 200 Zeichen)">
  <meta property="og:image" content="https://ogerly.github.io/alexander-friedland/blog-images/SLUG.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://ogerly.github.io/alexander-friedland/blog-SLUG.html">
  <meta property="article:published_time" content="YYYY-MM-DDT00:00:00Z">
  <meta property="article:author" content="Alexander Friedland">
  <meta property="article:section" content="KATEGORIE">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="TITEL">
  <meta name="twitter:description" content="Beschreibung">
  <meta name="twitter:image" content="https://ogerly.github.io/alexander-friedland/blog-images/SLUG.png">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../style.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.css" rel="stylesheet" type="text/css" />

  <!-- Artikel-Styles -->
  <style>
    :root {
      --void: #0a0f14;
      --void-light: #111927;
      --off-white: #e0e6ed;
      --cyber-cyan: #00D9FF;
      --copper-orange: #FF8C42;
      --emerald: #10B981;
      --amber: #F59E0B;
      --red: #EF4444;
      --purple: #8B5CF6;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--void);
      color: var(--off-white);
      line-height: 1.7;
    }
    .hero { position: relative; width: 100%; height: 400px; overflow: hidden; }
    .hero img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, var(--void) 95%); }
    .hero-section { position: relative; margin-top: -200px; padding: 80px 20px 60px; max-width: 896px; margin-left: auto; margin-right: auto; }
    .breadcrumb { font-size: 14px; color: rgba(0, 217, 255, 0.6); margin-bottom: 32px; }
    .breadcrumb a { color: var(--cyber-cyan); text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; }
    .meta-info { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; margin-bottom: 24px; font-size: 14px; color: rgba(224, 230, 237, 0.7); }
    .meta-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag { display: inline-block; padding: 4px 12px; border: 1px solid rgba(0, 217, 255, 0.5); border-radius: 9999px; color: var(--cyber-cyan); font-size: 13px; }
    h1 { font-size: 2.5rem; font-weight: bold; color: var(--copper-orange); margin-bottom: 24px; line-height: 1.2; }
    @media (min-width: 640px) { h1 { font-size: 3rem; } }
    @media (min-width: 1024px) { h1 { font-size: 3.75rem; } }
    .subtitle { font-size: 1.25rem; color: rgba(0, 217, 255, 0.9); margin-bottom: 32px; line-height: 1.6; }
    @media (min-width: 640px) { .subtitle { font-size: 1.5rem; } }
    .article-content { max-width: 896px; margin: 0 auto; padding: 48px 20px; }
    .article-content h2 { font-size: 1.875rem; font-weight: bold; color: var(--copper-orange); margin-top: 48px; margin-bottom: 24px; }
    .article-content h3 { font-size: 1.5rem; font-weight: bold; margin-top: 32px; margin-bottom: 16px; }
    .article-content h3.cyan { color: var(--cyber-cyan); }
    .article-content h3.emerald { color: var(--emerald); }
    .article-content p { margin-bottom: 24px; line-height: 1.8; }
    .article-content strong { color: var(--copper-orange); font-weight: 600; }
    .article-content em { color: var(--cyber-cyan); font-style: italic; }
    .article-content a { color: var(--cyber-cyan); text-decoration: none; }
    .article-content a:hover { text-decoration: underline; }
    .article-content code { background: rgba(102, 217, 255, 0.1); padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.9em; color: var(--cyber-cyan); }
    .article-content blockquote { margin: 32px 0; padding: 24px; border-left: 4px solid var(--cyber-cyan); background: rgba(255, 255, 255, 0.03); border-radius: 0.5rem; }
    .article-content blockquote.cyan { border-left-color: var(--cyber-cyan); color: var(--cyber-cyan); }
    .article-content blockquote.orange { border-left-color: var(--copper-orange); color: var(--copper-orange); }
    .article-content ul { margin: 16px 0 24px; list-style: none; padding-left: 0; }
    .article-content ol { margin: 16px 0 24px; padding-left: 1.5rem; }
    .article-content ol > li { margin-bottom: 8px; }
    .article-content figure { margin: 48px 0; }
    .article-content figure img { width: 100%; border-radius: 0.5rem; border: 1px solid rgba(0, 217, 255, 0.3); }
    .article-content figcaption { text-align: center; font-size: 14px; color: rgba(224, 230, 237, 0.6); margin-top: 16px; }
    .callout { padding: 24px; margin: 32px 0; border-radius: 0.5rem; }
    .callout.cyan { background: rgba(0, 217, 255, 0.1); border: 1px solid rgba(0, 217, 255, 0.3); }
    .callout.orange { background: rgba(255, 140, 66, 0.1); border: 1px solid rgba(255, 140, 66, 0.3); }
    .callout.red { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); }
    .callout.emerald { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); }
    .callout-left-cyan { border-left: 4px solid var(--cyber-cyan); background: rgba(0, 217, 255, 0.05); padding: 24px; margin: 32px 0; border-radius: 0 0.5rem 0.5rem 0; }
    .callout-left-orange { border-left: 4px solid var(--copper-orange); background: rgba(255, 140, 66, 0.05); padding: 24px; margin: 32px 0; border-radius: 0 0.5rem 0.5rem 0; }
    .callout-left-red { border-left: 4px solid var(--red); background: rgba(239, 68, 68, 0.05); padding: 24px; margin: 32px 0; border-radius: 0 0.5rem 0.5rem 0; }
    .card { padding: 20px; border-radius: 0.5rem; border: 1px solid rgba(224, 230, 237, 0.15); background: rgba(224, 230, 237, 0.05); }
    .card.cyan { border-color: rgba(0, 217, 255, 0.3); background: rgba(0, 217, 255, 0.1); }
    .card.orange { border-color: rgba(255, 140, 66, 0.3); background: rgba(255, 140, 66, 0.1); }
    .card.emerald { border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.1); }
    .card.amber { border-color: rgba(245, 158, 11, 0.3); background: rgba(245, 158, 11, 0.1); }
    .card.purple { border-color: rgba(139, 92, 246, 0.3); background: rgba(139, 92, 246, 0.1); }
    .card.red { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.1); }
    .gradient-card { padding: 24px; border-radius: 0.5rem; border: 1px solid rgba(0, 217, 255, 0.3); background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(10, 15, 20, 0.5)); margin: 32px 0; }
    .gradient-card-orange { padding: 24px; border-radius: 0.5rem; border: 1px solid rgba(255, 140, 66, 0.3); background: linear-gradient(135deg, rgba(255, 140, 66, 0.1), rgba(10, 15, 20, 0.5)); margin: 32px 0; }
    .table-container { overflow-x: auto; margin: 32px 0; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th { padding: 12px; text-align: left; background: rgba(255, 140, 66, 0.2); color: var(--copper-orange); font-weight: bold; border: 1px solid rgba(224, 230, 237, 0.1); }
    td { padding: 12px; border: 1px solid rgba(224, 230, 237, 0.1); color: rgba(224, 230, 237, 0.8); }
    tr:nth-child(even) td { background: rgba(255, 255, 255, 0.05); }
    .code-block { background: rgba(10, 15, 20, 0.8); border: 1px solid rgba(0, 217, 255, 0.4); border-radius: 0.5rem; padding: 24px; margin: 32px 0; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6; }
    .code-block .comment { color: rgba(0, 217, 255, 0.6); }
    .code-block .code { color: var(--cyber-cyan); }
    .author-section { padding: 48px 20px; border-top: 1px solid rgba(255, 140, 66, 0.2); max-width: 896px; margin: 0 auto; }
    .author-info { font-size: 14px; color: rgba(224, 230, 237, 0.6); font-style: italic; }
    .back-link { display: inline-block; padding: 12px 24px; border: 1px solid rgba(0, 217, 255, 0.5); border-radius: 0.5rem; color: var(--cyber-cyan); text-decoration: none; font-weight: bold; margin-top: 32px; transition: all 0.3s; }
    .back-link:hover { background: rgba(0, 217, 255, 0.2); border-color: var(--cyber-cyan); }
    .section-spacer { height: 96px; }
    .text-cyber-cyan { color: var(--cyber-cyan); }
    .text-copper-orange { color: var(--copper-orange); }
    .text-emerald-400 { color: var(--emerald); }
    .text-amber-400 { color: var(--amber); }
    .text-red-400 { color: var(--red); }
    .text-purple-400 { color: var(--purple); }
    .text-off-white\/60 { color: rgba(224, 230, 237, 0.6); }
    .text-off-white\/70 { color: rgba(224, 230, 237, 0.7); }
    .text-off-white\/80 { color: rgba(224, 230, 237, 0.8); }
    .text-off-white\/90 { color: rgba(224, 230, 237, 0.9); }
    .font-bold { font-weight: bold; }
    .font-semibold { font-weight: 600; }
    .italic { font-style: italic; }
    .text-center { text-align: center; }
    .text-sm { font-size: 14px; }
    .text-xs { font-size: 12px; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .mt-1 { margin-top: 4px; } .mt-2 { margin-top: 8px; } .mt-3 { margin-top: 12px; } .mt-4 { margin-top: 16px; }
    .mt-6 { margin-top: 24px; } .mt-8 { margin-top: 32px; } .mt-10 { margin-top: 40px; } .mt-12 { margin-top: 48px; } .mt-16 { margin-top: 64px; }
    .mb-1 { margin-bottom: 4px; } .mb-2 { margin-bottom: 8px; } .mb-3 { margin-bottom: 12px; } .mb-4 { margin-bottom: 16px; }
    .mb-6 { margin-bottom: 24px; } .mb-8 { margin-bottom: 32px; } .mb-12 { margin-bottom: 48px; }
    .mr-1 { margin-right: 4px; } .mr-3 { margin-right: 12px; }
    .w-full { width: 100%; } .rounded-lg { border-radius: 0.5rem; } .rounded-r { border-radius: 0 0.5rem 0.5rem 0; }
    .border-t { border-top: 1px solid rgba(224, 230, 237, 0.1); }
    .pt-6 { padding-top: 24px; } .pt-8 { padding-top: 32px; }
    .pb-16 { padding-bottom: 64px; } .pb-12 { padding-bottom: 48px; }
    .px-4 { padding-left: 16px; padding-right: 16px; }
    .py-12 { padding-top: 48px; padding-bottom: 48px; }
  </style>
</head>
<body>

  <!-- Hero -->
  <div class="hero">
    <img src="../blog-images/SLUG.png" alt="TITEL">
    <div class="hero-overlay"></div>
  </div>

  <!-- Hero Content -->
  <div class="hero-section">
    <nav class="breadcrumb">
      <a href="../index.html">Home</a>
      <span class="mx-2">/</span>
      <a href="../blog/index.html">Blog</a>
      <span class="mx-2">/</span>
      <span class="text-off-white/90">TITEL</span>
    </nav>
    <div class="meta-info">
      <div class="flex flex-wrap gap-4 items-center">
        <span>📅 DD.MM.YYYY </span>
        <span>•</span>
        <span>⏱️ X min Lesezeit</span>
        <span>•</span>
        <span>📂 KATEGORIE</span>
      </div>
      <div class="meta-tags">
        <span class="tag">TAG1</span><span class="tag">TAG2</span><span class="tag">TAG3</span>
      </div>
    </div>
    <h1>TITEL</h1>
  </div>

  <!-- Article Content -->
  <article class="article-content px-4">
    <div class="min-h-screen bg-void text-off-white">
      <!-- TEXT VON ALEXANDER -->
    </div>
  </article>

  <!-- Author -->
  <div class="author-section px-4">
    <p class="author-info">Dieser Artikel wurde von Alexander Friedland (@ogerly) verfasst und erschien am DD.MM.YYYY. Er gehört zur Kategorie KATEGORIE.</p>
  </div>

  <!-- Back -->
  <div class="max-w-4xl mx-auto px-4 pb-16">
    <a href="../blog/index.html" class="back-link">← Zurück zum Blog</a>
  </div>

  <div class="section-spacer"></div>
</body>
</html>
```

---

## Article Content — Elemente

Du lieferst den Text in beliebiger Form. Ich konvertiere:

| Element | HTML |
|---|---|
| **Hook/Lead** | `<div class="callout orange">` mit italic p |
| **Absatz** | `<p class="text-lg text-off-white/90 leading-relaxed mb-6">` |
| **Überschrift H2** | `<h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">` |
| **Überschrift H3** | `<h3 class="text-2xl font-bold text-cyber-cyan mt-8 mb-4">` |
| **Fett** | `<strong>Text</strong>` (automatisch orange) |
| **Kursiv** | `<em>Text</em>` (automatisch cyan) |
| **Link** | `<a href="URL">Text</a>` (automatisch cyan) |
| **Code inline** | `<code>code</code>` (automatisch cyan + BG) |
| **Code-Block** | `<pre class="code-block">` |
| **Zitat** | `<blockquote class="cyan">` oder `orange` |
| **Liste unnummeriert** | `<ul class="space-y-4">` |
| **Liste nummeriert** | `<ol>` |
| **Bild** | `<figure><img src="..."><figcaption>...</figcaption></figure>` |
| **Tabelle** | `<div class="table-container"><table>...</table></div>` |
| **Grid** | `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">` |
| **Karten** | `<div class="card cyan/orange/emerald">` |
| **Callout** | `<div class="callout red/cyan/orange/emerald">` |

### Grid-Layouts

```html
<!-- 2-spaltig -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<!-- 3-spaltig -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">

<!-- 4-spaltig -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">

<!-- Responsive 1→2 -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
```

### Farbschema

| Farbe | Einsatz |
|---|---|
| `--copper-orange` (#FF8C42) | H2, Hervorhebungen, Warnungen |
| `--cyber-cyan` (#00D9FF) | H3, Links, Info-Boxen |
| `--emerald` (#10B981) | Positive Elemente, Best Practices |
| `--amber` (#F59E0B) | Hinweise, Tips |
| `--red` (#EF4444) | Warnungen, Fehler |
| `--purple` (#8B5CF6) | Spezialfälle, Architektur |
| `--off-white` (#e0e6ed) | Fließtext |

### Kartengrid-Beispiel

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
  <div class="card cyan">
    <h4 class="text-lg font-bold text-cyber-cyan mb-2">Prinzip 1</h4>
    <p class="text-sm text-off-white/80">Beschreibung...</p>
  </div>
  <div class="card orange">
    <h4 class="text-lg font-bold text-copper-orange mb-2">Prinzip 2</h4>
    <p class="text-sm text-off-white/80">Beschreibung...</p>
  </div>
  <div class="card emerald">
    <h4 class="text-lg font-bold text-emerald-400 mb-2">Prinzip 3</h4>
    <p class="text-sm text-off-white/80">Beschreibung...</p>
  </div>
</div>
```

### Code-Block-Beispiel

```html
<pre class="code-block">
<span class="comment">// Kommentar</span>
<span class="code">const x = 42;</span>
</pre>
```

### Tabellen-Beispiel

```html
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Spalte 1</th>
        <th>Spalte 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wert 1</td>
        <td>Wert 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Bilder

| Typ | Datei | Größe | Format |
|---|---|---|---|
| **Hero** | `blog-images/SLUG.png` | 1200x630px | PNG |
| **Zusätzlich** | `blog-images/SLUG-BESCHREIBUNG.png` | max 1920px Breite | PNG oder JPG |

---

## blog-metadata.json

**Erstes Element** in `data/blog-metadata.json` einfügen:

```json
{
  "posts": [
    {
      "id": "SLUG",
      "title": "VOLLSTÄNDIGER TITEL",
      "slug": "SLUG",
      "date": "YYYY-MM-DD",
      "author": "Alexander Friedland (@ogerly)",
      "excerpt": "Kurze Beschreibung (max 160 Zeichen)",
      "category": "KATEGORIE",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "readTime": "X min",
      "featured": true,
      "image": "/blog-images/SLUG.png",
      "imageAlt": "ALT-TEXT",
      "metaDescription": "Ausführliche Meta-Beschreibung (max 160 Zeichen)",
      "url": "/blog/blog-SLUG.html"
    },
    ...
  ]
}
```

---

## Checkliste

- [ ] Titel, Slug, Datum, Kategorie, Tags, Lesezeit festgelegt
- [ ] Hero-Bild erstellt (1200x630px PNG) — optional
- [ ] Text geliefert
- [ ] HTML-Datei: `blog/blog-SLUG.html`
- [ ] OG-Tags vollständig (Titel, Beschreibung, Bild, URL)
- [ ] Twitter Card Tags vorhanden
- [ ] Canonical URL korrekt
- [ ] Author: "Alexander Friedland (@ogerly)"
- [ ] Bild in `blog-images/` hochgeladen
- [ ] OG-Image-URL als absolute URL
- [ ] `blog-metadata.json` aktualisiert (erstes Element!)
- [ ] Social-Media-Preview geprüft: https://www.opengraph.xyz/

---

## Testing nach Deploy

| Test | URL / Tool |
|---|---|
| HTML direkt | `https://ogerly.github.io/alexander-friedland/blog-SLUG.html` |
| OG-Preview | https://www.opengraph.xyz/ |
| Twitter Card | https://cards-dev.twitter.com/validator |
| Facebook | https://developers.facebook.com/tools/debug/ |

---

## Pfade

| Element | Pfad |
|---|---|
| HTML-Artikel | `blog/blog-SLUG.html` |
| Hero-Bild | `blog-images/SLUG.png` |
| Metadaten | `data/blog-metadata.json` |
| Hauptseite | `index.html` |
| Haupt-CSS | `style.css` |
| Tailwind CDN | `https://cdn.tailwindcss.com` |
| DaisyUI CDN | `https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.css` |

---

## Text an mich übergeben

```
Titel:
Slug:
Datum:
Kategorie:
Tags:
Lesezeit:
Hero-Bild:
Text:

Die Struktur übernehme ich. Du lieferst nur den Inhalt.
```
