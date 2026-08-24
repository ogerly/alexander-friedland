import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { readdirSync } from 'fs'
import { resolve, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC_DIR = resolve(__dirname, 'alte webseite/Webseite - DEVmatrose/src/components/blog/article')
const OUT_DIR = resolve(__dirname, '../../blog')
const IMG_DIR = resolve(__dirname, '../../blog-images')

mkdirSync(OUT_DIR, { recursive: true })

// Map Vue filenames to slug and metadata
const articleMap = {
  '01-04-26-Agenten-Architektur-Jenseits-Des-Kindergartens.vue': {
    slug: 'agenten-architektur-jenseits-des-kindergartens',
    title: 'Agenten-Architektur jenseits des Kindergartens: Warum eine soul.md ohne Rückgrat wertlos ist',
    subtitle: 'Warum eine soul.md ohne Rückgrat wertlos ist.',
    date: '2026-04-01',
    readTime: '12 min',
    category: 'KI-Architektur & Praxis',
    image: 'social-md-aams.jpg',
    tags: ['AAMS', 'Agenten-Architektur', 'soul.md', 'Multi-Agent-Systeme', 'Dezentralisierung', 'Web of Trust']
  },
  '26-03-26-Du-Brauchst-Kein-Framework.vue': {
    slug: 'du-brauchst-kein-framework',
    title: 'Du brauchst kein Framework. Du brauchst eine Datei.',
    subtitle: 'Du brauchst eine Datei.',
    date: '2026-03-26',
    readTime: '10 min',
    category: 'KI-Architektur & Praxis',
    image: 'aams-einedatei.png',
    tags: ['AAMS', 'Kontextverlust', 'Tool Lock-in', 'Agent Memory', 'Open Source', 'Produktivität']
  },
  '01-03-26-Das-Agent-OS.vue': {
    slug: 'das-agent-os',
    title: 'Das Agent-OS – Wenn Governance selbst zum Betriebssystem wird',
    subtitle: 'Wenn Governance selbst zum Betriebssystem wird',
    date: '2026-03-01',
    readTime: '12 min',
    category: 'KI-Architektur & Governance',
    image: 'agentic-os.png',
    tags: ['Agent-OS', 'Governance', 'AAMS', 'ImprintGuard', 'Autonomie', 'Dezentralisierung']
  },
  '28-02-26-Blut-Am-Silizium.vue': {
    slug: 'blut-am-silizium',
    title: 'Blut am Silizium: Das schmutzige Geheimnis hinter deiner „sauberen" KI',
    subtitle: 'Das schmutzige Geheimnis hinter deiner „sauberen" KI',
    date: '2026-02-28',
    readTime: '10 min',
    category: 'Ethik & Gesellschaft',
    image: 'blutsilizium.png',
    tags: ['KI-Ethik', 'Ausbeutung', 'Datenlabel', 'Fair Trade', 'Digitaler Kolonialismus', 'Responsible AI']
  },
  '28-02-26-KI-Datenschutz-Schwindel-2026.vue': {
    slug: 'ki-datenschutz-schwindel-2026',
    title: 'Der große KI-Datenschutz-Schwindel 2026',
    subtitle: '„Kein Training mit Ihren Daten" – der dümmste Weihnachtsmann-Glaube der Dekade',
    date: '2026-02-28',
    readTime: '10 min',
    category: 'Datenschutz & Polemik',
    image: 'datenschutz-schwindel.png',
    tags: ['Datenschutz', 'DSGVO', 'KI-Sicherheit', 'Cloud', 'Polemik', 'Self-Hosting']
  },
  '27-02-26-Agentisches-Arbeiten-2026.vue': {
    slug: 'agentisches-arbeiten-2026',
    title: 'Agentisches Arbeiten 2026: Zwischen Plattform-Memory und souveräner Architektur',
    subtitle: 'Zwischen Plattform-Memory und souveräner Architektur',
    date: '2026-02-27',
    readTime: '14 min',
    category: 'KI-Architektur & Strategie',
    image: 'agentisches-arbeiten.png',
    tags: ['Agentisches Arbeiten', 'AAMS', 'Plattform-Memory', 'KI-Strategie', 'Governance', 'Souveränität']
  },
  '25-02-26-OpenClaw-Universum-2026.vue': {
    slug: 'openclaw-universum-2026',
    title: 'Das OpenClaw-Universum 2026: Original, Forks und Spezial-Varianten',
    subtitle: 'Die definitive Übersicht zu Original, Forks und Spezial-Varianten',
    date: '2026-02-25',
    readTime: '12 min',
    category: 'KI-Ökosystem & Open Source',
    image: 'openclaw_univer.png',
    tags: ['OpenClaw', 'KI-Assistenten', 'Open Source', 'Rust', 'Embedded AI', 'MCP']
  },
  '24-02-26-Epistemische-Krise-Der-Softwareentwicklung.vue': {
    slug: 'epistemische-krise-der-softwareentwicklung',
    title: 'Die epistemische Krise der Softwareentwicklung',
    subtitle: 'Chaos, History und die Zukunft autonomer Agenten',
    date: '2026-02-24',
    readTime: '10 min',
    category: 'Philosophie & Architektur',
    image: 'epistemische-kriese.png',
    tags: ['Epistemologie', 'KI-Architektur', 'Provenienz', 'Agenten-Systeme', 'Software-Philosophie', 'Memory-Architekturen']
  },
  '19-02-26-Autonomous-Agent-Manifest-Specification.vue': {
    slug: 'autonomous-agent-manifest-specification',
    title: 'Autonomous Agent Manifest Specification',
    subtitle: 'Ein Erfahrungsbericht aus einem Jahr KI-Architekturarbeit',
    date: '2026-02-19',
    readTime: '12 min',
    category: 'KI-Architektur',
    image: 'autonomous-agent-manifest-specification.png',
    tags: ['KI-Architektur', 'Agenten-Manifest', 'Whitepaper-Workpaper', 'Kontextmanagement', 'Multi-Agent-Systeme', 'Open Source']
  },
  '17-02-26-Von-Code-Zu-Kontext-Agenten-Navigation.vue': {
    slug: 'von-code-zu-kontext-agenten-navigation',
    title: 'Von Code zu Kontext: Wie ich Agenten-Teams das "Navigieren" in Repositories beibringe',
    subtitle: 'Wie ich Agenten-Teams das "Navigieren" in Repositories beibringe',
    date: '2026-02-17',
    readTime: '10 min',
    category: 'Multi-Agent-Systeme',
    image: 'agenten-im-repro.png',
    tags: ['Multi-Agent-Systeme', 'Repository-Navigation', 'Event-Sourcing', 'State-Machine', 'KI-Orchestration', 'Workpapers']
  },
  '14-02-26-Kontinente-Der-Intelligenz.vue': {
    slug: 'kontinente-der-intelligenz',
    title: 'Kontinente der Intelligenz: Wie sich die Welt in KI-Ökosysteme aufteilt',
    subtitle: 'Wie sich die Welt in KI-Ökosysteme aufteilt',
    date: '2026-02-14',
    readTime: '12 min',
    category: 'Geopolitik & KI',
    image: 'kontitent-der-intelligenz.png',
    tags: ['Geopolitik', 'KI-Ökosysteme', 'Open Source', 'Dezentralisierung', 'Europa', 'KI-Souveränität']
  },
  '13-02-26-Mesh-Netzwerk-Dezentrale-KI.vue': {
    slug: 'mesh-netzwerk-dezentrale-ki',
    title: 'Von Königen, Kutschen und KI: Warum die Zukunft ein Mesh-Netzwerk braucht',
    subtitle: 'Technischer Fortschritt führt zur Zentralisierung – aber wir können das ändern',
    date: '2026-02-13',
    readTime: '10 min',
    category: 'Architecture & Society',
    image: 'mesh-netzwerk.png',
    tags: ['Mesh-Netzwerk', 'Dezentralisierung', 'Multi-Agent-Systeme', 'CLAW-NETZWERK', 'Thermodynamik', 'KI-Souveränität']
  },
  '11-02-26-Ordo-Ab-Chao-Agenten-Mesh.vue': {
    slug: 'ordo-ab-chao-agenten-mesh-netzwerk',
    title: 'Ordo ab Chao: Warum deine Agenten-Netzwerke den Sturm brauchen',
    subtitle: 'Ordnung im Chaos – Wie Mesh-Netzwerke aus Unordnung emergente Intelligenz erzeugen',
    date: '2026-02-11',
    readTime: '12 min',
    category: 'Architecture & AI',
    image: 'ordo-ab-chao-mesh-hero.png',
    tags: ['Multi-Agent-Systeme', 'Mesh-Netzwerk', 'Schwarmintelligenz', 'Architektur', 'Dezentralisierung', 'Antifragilität']
  },
  '09-02-26-Biometrie-Sicherheit-TR-03166-A.vue': {
    slug: 'biometrie-sicherheit-tr-03166-a',
    title: 'Biometrie-Sicherheit: Wenn der KI-Agent an die Reling klopft (TR-03166-A)',
    subtitle: 'TR-03166-A: Warum klassische Biometrie gegen autonome KI-Angreifer neu gedacht werden muss',
    date: '2026-02-09',
    readTime: '10 min',
    category: 'Security & KI',
    image: 'biometrie-tr-03166-a-hero.png',
    tags: ['Biometrie', 'Security', 'KI-Sicherheit', 'TR-03166', 'BSI', 'Authentication', 'Deepfakes']
  },
  '08-02-26-Schwarm-vs-Grossrechner.vue': {
    slug: 'schwarm-vs-grossrechner-neue-machtfrage',
    title: 'Bits, Pilze und die neue Machtfrage: Warum der Großrechner stirbt und der Schwarm übernimmt',
    subtitle: 'Warum der Großrechner stirbt und der Schwarm übernimmt',
    date: '2026-02-08',
    readTime: '12 min',
    category: 'KI & Infrastruktur',
    image: 'schwarm-vs-grossrechner-preview.png',
    tags: ['KI-Infrastruktur', 'Dezentralisierung', 'Schwarmintelligenz', 'Edge Computing', 'Macht & Technologie', 'Verteilte Systeme']
  },
  '05-02-26-Keine-Angst-Vor-KI.vue': {
    slug: 'keine-angst-vor-ki',
    title: 'Warum ich keine Angst vor einer bösen KI habe',
    subtitle: 'Über Intelligenz, Moral und die falschen Dystopien unserer Zeit',
    date: '2026-02-05',
    readTime: '10 min',
    category: 'KI & Philosophie',
    image: null, // No image for this article
    tags: ['KI & Ethik', 'Philosophie', 'AGI', 'Superintelligenz', 'Moral', 'Technologie-Kritik']
  },
  '10-01-26-Pen-And-Paper-Rollenspiele.vue': {
    slug: 'pen-and-paper-rollenspiele',
    title: 'Der Algorithmus der Fantasie: Warum digitale Welten das Rollenspiel noch nicht gerettet haben',
    subtitle: 'Als Software-Entwickler und Pen & Paper Enthusiast analysiere ich die Lücke zwischen analoger Freiheit und digitaler Perfektion – und warum beide Welten noch nicht zusammengefunden haben.',
    date: '2026-01-10',
    readTime: '8 min',
    category: 'Game Design & Entwicklung',
    image: 'rollenspiel-hero.png',
    tags: ['Pen & Paper', 'Rollenspiel', 'Game Design', 'TTRPG', 'Digitalisierung', 'Software-Entwicklung']
  },
  '03-12-25-Smart-Editor-LLM-Tool.vue': {
    slug: 'smart-editor-llm-tool',
    title: 'Warum ich das Rad neu erfunden habe: Die Entstehung eines spezialisierten LLM-Tools',
    subtitle: 'Die Entstehung eines spezialisierten LLM-Tools',
    date: '2025-12-03',
    readTime: '12 min',
    category: 'KI & Tooling',
    image: 'aleteiha-layer.png',
    tags: ['KI-Tooling', 'Data Labeling', 'On-Premise', 'UX Design', 'Smart Editor', 'LLM-Training']
  },
  '02-12-25-Vom-Code-zum-Architekten.vue': {
    slug: 'vom-code-zum-architekten',
    title: 'Vom Coder zum Architekten: Warum KI meine Arbeit nicht ersetzt, sondern erweitert',
    subtitle: 'Warum KI meine Arbeit nicht ersetzt, sondern erweitert',
    date: '2025-12-02',
    readTime: '10 min',
    category: 'KI & Architektur',
    image: 'architekten-preview.png',
    tags: ['KI-Entwicklung', 'Software-Architektur', 'Vibe Coding', 'Claude AI', 'Best Practices', 'Whitepaper']
  }
}

function stripVueDirectives(html) {
  let result = html

  // Remove Vue template tags
  result = result.replace(/<\/?template>/g, '')
  result = result.replace(/<\/?script[^>]*>/g, '')
  result = result.replace(/<\/?style[^>]*>/g, '')

  // Remove Vue directives
  result = result.replace(/\s+v-if="[^"]*"/g, '')
  result = result.replace(/\s+v-for="[^"]*"/g, '')
  result = result.replace(/\s+:src="([^"]*)"/g, ' src="$1"')
  result = result.replace(/\s+:alt="([^"]*)"/g, ' alt="$1"')
  result = result.replace(/\s+:class="([^"]*)"/g, '')
  result = result.replace(/\s@click="[^"]*"/g, '')
  result = result.replace(/\s:href="([^"]*)"/g, ' href="$1"')
  result = result.replace(/\s:target="[^"]*"/g, '')
  result = result.replace(/\s:rel="[^"]*"/g, '')
  result = result.replace(/\s:fill="[^"]*"/g, '')
  result = result.replace(/\s:viewBox="[^"]*"/g, '')
  result = result.replace(/\s:stroke="[^"]*"/g, '')
  result = result.replace(/\s:stroke-width="[^"]*"/g, '')
  result = result.replace(/\s:stroke-linecap="[^"]*"/g, '')
  result = result.replace(/\s:stroke-linejoin="[^"]*"/g, '')
  result = result.replace(/\s:d="[^"]*"/g, '')
  result = result.replace(/\s:width="[^"]*"/g, '')
  result = result.replace(/\s:height="[^"]*"/g, '')
  result = result.replace(/\s:property="([^"]*)"/g, ' property="$1"')
  result = result.replace(/\s:name="([^"]*)"/g, ' name="$1"')
  result = result.replace(/\s:content="([^"]*)"/g, ' content="$1"')

  // Clean up empty lines from removed directives
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n')
  result = result.trim()

  return result
}

function generateBlogCSS() {
  return `
    /* Blog Article Styles */
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
    
    .hero {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }
    
    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
    }
    
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent, var(--void) 95%);
    }
    
    .hero-section {
      position: relative;
      margin-top: -200px;
      padding: 80px 20px 60px;
      max-width: 896px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .breadcrumb {
      font-size: 14px;
      color: rgba(0, 217, 255, 0.6);
      margin-bottom: 32px;
    }
    
    .breadcrumb a {
      color: var(--cyber-cyan);
      text-decoration: none;
    }
    
    .breadcrumb a:hover {
      text-decoration: underline;
    }
    
    .meta-info {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      font-size: 14px;
      color: rgba(224, 230, 237, 0.7);
    }
    
    .meta-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .tag {
      display: inline-block;
      padding: 4px 12px;
      border: 1px solid rgba(0, 217, 255, 0.5);
      border-radius: 9999px;
      color: var(--cyber-cyan);
      font-size: 13px;
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--copper-orange);
      margin-bottom: 24px;
      line-height: 1.2;
    }
    
    @media (min-width: 640px) {
      h1 { font-size: 3rem; }
    }
    
    @media (min-width: 1024px) {
      h1 { font-size: 3.75rem; }
    }
    
    .subtitle {
      font-size: 1.25rem;
      color: rgba(0, 217, 255, 0.9);
      margin-bottom: 32px;
      line-height: 1.6;
    }
    
    @media (min-width: 640px) {
      .subtitle { font-size: 1.5rem; }
    }
    
    .article-content {
      max-width: 896px;
      margin: 0 auto;
      padding: 48px 20px;
    }
    
    .article-content h2 {
      font-size: 1.875rem;
      font-weight: bold;
      color: var(--copper-orange);
      margin-top: 48px;
      margin-bottom: 24px;
    }
    
    @media (min-width: 640px) {
      .article-content h2 { font-size: 2.25rem; }
    }
    
    .article-content h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 32px;
      margin-bottom: 16px;
    }
    
    .article-content h3.cyan { color: var(--cyber-cyan); }
    .article-content h3.emerald { color: var(--emerald); }
    
    .article-content p {
      margin-bottom: 24px;
      line-height: 1.8;
    }
    
    .article-content p.text-xl {
      font-size: 1.25rem;
    }
    
    .article-content p.text-lg {
      font-size: 1.125rem;
    }
    
    .article-content strong {
      color: var(--copper-orange);
      font-weight: 600;
    }
    
    .article-content em {
      color: var(--cyber-cyan);
      font-style: italic;
    }
    
    .article-content a {
      color: var(--cyber-cyan);
      text-decoration: none;
    }
    
    .article-content a:hover {
      text-decoration: underline;
    }
    
    .article-content code {
      background: rgba(102, 217, 255, 0.1);
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      color: var(--cyber-cyan);
    }
    
    .article-content blockquote {
      margin-top: 32px;
      margin-bottom: 32px;
      padding: 24px;
      border-left: 4px solid var(--cyber-cyan);
      background: rgba(255, 255, 255, 0.03);
      border-radius: 0.5rem;
    }
    
    .article-content blockquote.cyan {
      border-left-color: var(--cyber-cyan);
      color: var(--cyber-cyan);
    }
    
    .article-content blockquote.orange {
      border-left-color: var(--copper-orange);
      color: var(--copper-orange);
    }
    
    .article-content ul {
      margin-top: 16px;
      margin-bottom: 24px;
      list-style: none;
      padding-left: 0;
    }
    
    .article-content ul.space-y-2 > li {
      margin-bottom: 8px;
    }
    
    .article-content ul.space-y-3 > li {
      margin-bottom: 12px;
    }
    
    .article-content ul.space-y-4 > li {
      margin-bottom: 16px;
    }
    
    .article-content ol {
      margin-top: 16px;
      margin-bottom: 24px;
      padding-left: 1.5rem;
    }
    
    .article-content ol > li {
      margin-bottom: 8px;
    }
    
    .article-content figure {
      margin-top: 48px;
      margin-bottom: 48px;
    }
    
    .article-content figure img {
      width: 100%;
      border-radius: 0.5rem;
      border: 1px solid rgba(0, 217, 255, 0.3);
    }
    
    .article-content figcaption {
      text-align: center;
      font-size: 14px;
      color: rgba(224, 230, 237, 0.6);
      margin-top: 16px;
    }
    
    /* Callout boxes */
    .callout {
      padding: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      border-radius: 0.5rem;
    }
    
    .callout.red {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      text-align: center;
    }
    
    .callout.red p {
      margin-bottom: 0;
    }
    
    .callout.cyan {
      background: rgba(0, 217, 255, 0.1);
      border: 1px solid rgba(0, 217, 255, 0.3);
      text-align: center;
    }
    
    .callout.cyan p {
      margin-bottom: 0;
    }
    
    .callout.orange {
      background: rgba(255, 140, 66, 0.1);
      border: 1px solid rgba(255, 140, 66, 0.3);
      text-align: center;
    }
    
    .callout.orange p {
      margin-bottom: 0;
    }
    
    .callout.emerald {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      text-align: center;
    }
    
    .callout.emerald p {
      margin-bottom: 0;
    }
    
    .callout-left-cyan {
      border-left: 4px solid var(--cyber-cyan);
      background: rgba(0, 217, 255, 0.05);
      padding: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      border-radius: 0 0.5rem 0.5rem 0;
    }
    
    .callout-left-orange {
      border-left: 4px solid var(--copper-orange);
      background: rgba(255, 140, 66, 0.05);
      padding: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      border-radius: 0 0.5rem 0.5rem 0;
    }
    
    .callout-left-red {
      border-left: 4px solid var(--red);
      background: rgba(239, 68, 68, 0.05);
      padding: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      border-radius: 0 0.5rem 0.5rem 0;
    }
    
    /* Grid layouts — Tailwind/DaisyUI grid-cols-* Klassen werden genutzt */
    
    .card {
      padding: 20px;
      border-radius: 0.5rem;
      border: 1px solid rgba(224, 230, 237, 0.15);
      background: rgba(224, 230, 237, 0.05);
    }
    
    .card.cyan {
      border-color: rgba(0, 217, 255, 0.3);
      background: rgba(0, 217, 255, 0.1);
    }
    
    .card.orange {
      border-color: rgba(255, 140, 66, 0.3);
      background: rgba(255, 140, 66, 0.1);
    }
    
    .card.emerald {
      border-color: rgba(16, 185, 129, 0.3);
      background: rgba(16, 185, 129, 0.1);
    }
    
    .card.amber {
      border-color: rgba(245, 158, 11, 0.3);
      background: rgba(245, 158, 11, 0.1);
    }
    
    .card.purple {
      border-color: rgba(139, 92, 246, 0.3);
      background: rgba(139, 92, 246, 0.1);
    }
    
    .card.red {
      border-color: rgba(239, 68, 68, 0.3);
      background: rgba(239, 68, 68, 0.1);
    }
    
    .card.void {
      border-color: rgba(224, 230, 237, 0.1);
      background: rgba(10, 15, 20, 0.5);
    }
    
    /* Gradient cards */
    .gradient-card {
      padding: 24px;
      border-radius: 0.5rem;
      border: 1px solid rgba(0, 217, 255, 0.3);
      background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(10, 15, 20, 0.5));
      margin-top: 32px;
      margin-bottom: 32px;
    }
    
    .gradient-card-orange {
      padding: 24px;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 140, 66, 0.3);
      background: linear-gradient(135deg, rgba(255, 140, 66, 0.1), rgba(10, 15, 20, 0.5));
      margin-top: 32px;
      margin-bottom: 32px;
    }
    
    /* Flex layouts */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-start { align-items: flex-start; }
    .items-center { align-items: center; }
    .gap-2 { gap: 8px; }
    .gap-3 { gap: 12px; }
    .gap-4 { gap: 16px; }
    .gap-6 { gap: 24px; }
    .gap-8 { gap: 32px; }
    .flex-wrap { flex-wrap: wrap; }
    .justify-between { justify-content: space-between; }
    
    @media (min-width: 768px) {
      .md\\:flex-row { flex-direction: row; }
    }
    
    /* Table */
    .table-container {
      overflow-x: auto;
      margin-top: 32px;
      margin-bottom: 32px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    
    th {
      padding: 12px;
      text-align: left;
      background: rgba(255, 140, 66, 0.2);
      color: var(--copper-orange);
      font-weight: bold;
      border: 1px solid rgba(224, 230, 237, 0.1);
    }
    
    td {
      padding: 12px;
      border: 1px solid rgba(224, 230, 237, 0.1);
      color: rgba(224, 230, 237, 0.8);
    }
    
    tr:nth-child(even) td {
      background: rgba(255, 255, 255, 0.05);
    }
    
    /* Code block */
    .code-block {
      background: rgba(10, 15, 20, 0.8);
      border: 1px solid rgba(0, 217, 255, 0.4);
      border-radius: 0.5rem;
      padding: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.6;
    }
    
    .code-block .comment { color: rgba(0, 217, 255, 0.6); }
    .code-block .code { color: var(--cyber-cyan); }
    
    /* Author section */
    .author-section {
      padding: 48px 20px;
      border-top: 1px solid rgba(255, 140, 66, 0.2);
      max-width: 896px;
      margin: 0 auto;
    }
    
    .author-info {
      font-size: 14px;
      color: rgba(224, 230, 237, 0.6);
      font-style: italic;
    }
    
    /* Back to blog */
    .back-link {
      display: inline-block;
      padding: 12px 24px;
      border: 1px solid rgba(0, 217, 255, 0.5);
      border-radius: 0.5rem;
      color: var(--cyber-cyan);
      text-decoration: none;
      font-weight: bold;
      margin-top: 32px;
      transition: all 0.3s;
    }
    
    .back-link:hover {
      background: rgba(0, 217, 255, 0.2);
      border-color: var(--cyber-cyan);
    }
    
    .section-spacer {
      height: 96px;
    }
    
    /* Utility classes used in articles */
    .text-cyber-cyan { color: var(--cyber-cyan); }
    .text-copper-orange { color: var(--copper-orange); }
    .text-emerald-400 { color: var(--emerald); }
    .text-amber-400 { color: var(--amber); }
    .text-red-400 { color: var(--red); }
    .text-purple-400 { color: var(--purple); }
    .text-off-white\\/60 { color: rgba(224, 230, 237, 0.6); }
    .text-off-white\\/70 { color: rgba(224, 230, 237, 0.7); }
    .text-off-white\\/80 { color: rgba(224, 230, 237, 0.8); }
    .text-off-white\\/90 { color: rgba(224, 230, 237, 0.9); }
    .text-off-white\\/50 { color: rgba(224, 230, 237, 0.5); }
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
    .mt-1 { margin-top: 4px; }
    .mt-2 { margin-top: 8px; }
    .mt-3 { margin-top: 12px; }
    .mt-4 { margin-top: 16px; }
    .mt-6 { margin-top: 24px; }
    .mt-8 { margin-top: 32px; }
    .mt-10 { margin-top: 40px; }
    .mt-12 { margin-top: 48px; }
    .mt-16 { margin-top: 64px; }
    .mb-1 { margin-bottom: 4px; }
    .mb-2 { margin-bottom: 8px; }
    .mb-3 { margin-bottom: 12px; }
    .mb-4 { margin-bottom: 16px; }
    .mb-6 { margin-bottom: 24px; }
    .mb-8 { margin-bottom: 32px; }
    .mb-12 { margin-bottom: 48px; }
    .mr-1 { margin-right: 4px; }
    .mr-3 { margin-right: 12px; }
    .w-full { width: 100%; }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-r { border-radius: 0 0.5rem 0.5rem 0; }
    .border-t { border-top: 1px solid rgba(224, 230, 237, 0.1); }
    .pt-6 { padding-top: 24px; }
    .pt-8 { padding-top: 32px; }
    .pb-16 { padding-bottom: 64px; }
    .pb-12 { padding-bottom: 48px; }
    .px-4 { padding-left: 16px; padding-right: 16px; }
    .py-12 { padding-top: 48px; padding-bottom: 48px; }
  `
}

const files = readdirSync(SRC_DIR).filter(f => f.endsWith('.vue') && f !== 'Neuer-Artikel.md')

for (const file of files) {
  const meta = articleMap[file]
  if (!meta) {
    console.log(`Skipping ${file} - no metadata`)
    continue
  }

  const vueContent = readFileSync(resolve(SRC_DIR, file), 'utf-8')
  
  // Extract template content
  const templateMatch = vueContent.match(/<template>\s*([\s\S]*?)\s*<\/template>/)
  if (!templateMatch) {
    console.log(`Skipping ${file} - no template`)
    continue
  }

  let template = templateMatch[1]
  
  // Strip Vue directives
  template = stripVueDirectives(template)
  
  // Replace DEVmatrose references
  template = template.replace(/DEVmatrose/g, 'Alexander Friedland')
  template = template.replace(/DEV<span>matrose<\/span>/g, 'Alexander Friedland')
  template = template.replace(/devmatrose\.github\.io\/devmatrose/g, 'ogerly.github.io/alexander-friedland')
  template = template.replace(/github\.com\/DEVmatrose/g, 'github.com/ogerly')
  template = template.replace(/https:\/\/github\.com\/DEVmatrose/g, 'https://github.com/ogerly')
  template = template.replace(/https:\/\/devmatrose\.github\.io\/devmatrose/g, 'https://ogerly.github.io/alexander-friedland')
  
  // Replace author references
  template = template.replace(/Ogerly – DEVmatrose/g, 'Alexander Friedland (@ogerly)')
  template = template.replace(/Ogerly \u2013 DEVmatrose/g, 'Alexander Friedland (@ogerly)')
  template = template.replace(/DEVmatrose[\n\s]*/g, 'Alexander Friedland')
  template = template.replace(/Alexander Friedland @ogerly/g, 'Alexander Friedland (@ogerly)')
  
  // Replace image paths
  if (meta.image) {
    template = template.replace(/images\/blog\/[a-zA-Z0-9_-]+\.png/g, (match) => {
      return `blog-images/${meta.image}`
    })
    template = template.replace(/images\/blog\/[a-zA-Z0-9_-]+\.jpg/g, (match) => {
      return `blog-images/${meta.image}`
    })
    template = template.replace(/images\/warum-ich-keine-angst-vor-ki-habe\.png/g, 'blog-images/placeholder.png')
  }
  
  // Replace og:image paths with full URLs
  template = template.replace(/og:image" content="[^"]*images\/blog\/[^"]*"/g, `og:image" content="https://ogerly.github.io/alexander-friedland/blog-images/${meta.image}"`)
  template = template.replace(/og:image" content="[^"]*"/g, `og:image" content="https://ogerly.github.io/alexander-friedland/blog-images/${meta.image}"`)
  template = template.replace(/twitter:image" content="[^"]*"/g, `twitter:image" content="https://ogerly.github.io/alexander-friedland/blog-images/${meta.image}"`)
  
  // Replace canonical URLs
  template = template.replace(/canonical" href="[^"]*devmatrose[^"]*"/g, `canonical" href="https://ogerly.github.io/alexander-friedland/blog-${meta.slug}.html"`)
  template = template.replace(/og:url" content="[^"]*devmatrose[^"]*"/g, `og:url" content="https://ogerly.github.io/alexander-friedland/blog-${meta.slug}.html"`)
  
  // Replace article:published_time
  template = template.replace(/article:published_time" content="[^"]*"/g, `article:published_time" content="${meta.date}T00:00:00Z"`)
  
  // Replace article:author
  template = template.replace(/article:author" content="[^"]*"/g, 'article:author" content="Alexander Friedland"')
  
  // Replace og:site_name
  template = template.replace(/og:site_name" content="[^"]*"/g, 'og:site_name" content="Alexander Friedland"')
  
  // Remove noscript redirect
  template = template.replace(/<noscript>[\s\S]*?<\/noscript>/g, '')
  
  // Replace devmatrose GitHub links
  template = template.replace(/href="https:\/\/github\.com\/DEVmatrose/g, 'href="https://github.com/ogerly')
  template = template.replace(/href="https:\/\/github\.com\/ogerly/g, 'href="https://github.com/ogerly')
  
  // Fix remaining DEVmatrose references in text
  template = template.replace(/DEVmatrose/g, 'Alexander Friedland')
  
  // Clean up empty paragraphs from removed directives
  template = template.replace(/<p>\s*<\/p>/g, '')
  template = template.replace(/\n{4,}/g, '\n\n\n')
  
  const ogImage = meta.image ? `https://ogerly.github.io/alexander-friedland/blog-images/${meta.image}` : ''
  const imageAlt = meta.image ? meta.image.replace(/-/g, ' ').replace(/\.(png|jpg)$/i, '') : ''
  
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} | Alexander Friedland</title>
  <meta name="description" content="Alexander Friedland – ${meta.category}">
  <link rel="canonical" href="https://ogerly.github.io/alexander-friedland/blog-${meta.slug}.html">
  
  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Alexander Friedland">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.subtitle}">
  ${meta.image ? `<meta property="og:image" content="${ogImage}">` : ''}
  ${meta.image ? '<meta property="og:image:width" content="1200">' : ''}
  ${meta.image ? '<meta property="og:image:height" content="630">' : ''}
  <meta property="og:url" content="https://ogerly.github.io/alexander-friedland/blog-${meta.slug}.html">
  <meta property="article:published_time" content="${meta.date}T00:00:00Z">
  <meta property="article:author" content="Alexander Friedland">
  <meta property="article:section" content="${meta.category}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.subtitle}">
  ${meta.image ? `<meta name="twitter:image" content="${ogImage}">` : ''}
  
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../daisyui@4_full.min.css">
  <style>${generateBlogCSS()}</style>
</head>
<body>
  ${meta.image ? `
  <div class="hero">
    <img src="../blog-images/${meta.image}" alt="${meta.title}">
    <div class="hero-overlay"></div>
  </div>
  ` : ''}
  <div class="hero-section">
    <nav class="breadcrumb">
      <a href="../index.html">Home</a>
      <span class="mx-2">/</span>
      <a href="../blog/index.html">Blog</a>
      <span class="mx-2">/</span>
      <span class="text-off-white/90">${meta.title.split(':')[0]}</span>
    </nav>
    <div class="meta-info">
      <div class="flex flex-wrap gap-4 items-center">
        <span>📅 ${meta.date.split('-').reverse().join('.')} </span>
        <span>•</span>
        <span>⏱️ ${meta.readTime} Lesezeit</span>
        <span>•</span>
        <span>📂 ${meta.category}</span>
      </div>
      <div class="meta-tags">
        ${meta.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
    <h1>${meta.title.split(':')[0]}</h1>
    ${meta.title.includes(':') ? `<p class="subtitle">${meta.title.split(':')[1].replace(/^\s*/, '')}</p>` : ''}
  </div>
  
  <article class="article-content px-4">
    ${template}
  </article>
  
  <div class="author-section px-4">
    <p class="author-info">Dieser Artikel wurde von Alexander Friedland (@ogerly) verfasst und erschien am ${meta.date.split('-').reverse().join('.')}. Er gehört zur Kategorie ${meta.category}.</p>
  </div>
  
  <div class="max-w-4xl mx-auto px-4 pb-16">
    <a href="../blog/index.html" class="back-link">← Zurück zum Blog</a>
  </div>
  
  <div class="section-spacer"></div>
</body>
</html>`

  const outFilename = `blog-${meta.slug}.html`
  writeFileSync(resolve(OUT_DIR, outFilename), html, 'utf-8')
  console.log(`✅ ${outFilename}`)
}

console.log('\nDone! Generated', files.filter(f => articleMap[f]).length, 'articles.')
