# FMD Website — Identidade Gráfica Digital v1.0

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* ─── Colors ─── */
  --color-primary: #0A5CFF;
  --color-secondary: #00C2FF;
  --color-white: #F5F7FA;
  --color-graphite: #1A1F2B;
  --color-bg: #050816;
  --color-text: #F5F7FA;
  --color-text-muted: #8B92A5;
  --color-border: #2A2F3B;
  --color-gradient-start: #0A5CFF;
  --color-gradient-end: #00C2FF;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* ─── Typography ─── */
  --font-primary: 'Geist', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --font-code: 'JetBrains Mono', monospace;

  --text-hero: 64px;
  --text-h1: 42px;
  --text-h2: 32px;
  --text-h3: 26px;
  --text-h4: 20px;
  --text-body: 16px;
  --text-small: 14px;
  --text-caption: 12px;

  --weight-bold: 700;
  --weight-semibold: 600;
  --weight-medium: 500;
  --weight-regular: 400;

  --leading-tight: 1.1;
  --leading-normal: 1.6;

  /* ─── Spacing ─── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* ─── Layout ─── */
  --max-width: 1280px;
  --header-height: 72px;
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-full: 9999px;

  /* ─── Shadows ─── */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.5);
  --shadow-glow: 0 0 20px rgba(10,92,255,0.3);

  /* ─── Transitions ─── */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* ─── Z-index ─── */
  --z-header: 100;
  --z-overlay: 200;
  --z-modal: 300;
}
```

---

## Guia de Estilos — Componentes Base

### Tipografia no Site

```html
<!-- Headings -->
<h1 class="heading-1">Dados • Automação • Inteligência</h1>
<h2 class="heading-2">Nossos Produtos</h2>
<h3 class="heading-3">Nyra</h3>
<h4 class="heading-4">Captação de Leads</h4>

<!-- Body -->
<p class="body-text">Transformamos desafios complexos...</p>
<p class="body-small">Detalhes técnicos adicionais...</p>

<!-- CTA -->
<a class="cta-primary" href="/contato">Falar com especialista</a>
<a class="cta-secondary" href="/produtos">Ver produtos</a>

<!-- Code -->
<code class="code-block">npm install nyra-sdk</code>
```

### Gradiente Institucional

Aplicado em:
- Background do Hero
- Hover de links
- Borda inferior de seções ativas
- Loading indicators / spinners
- Divisores entre seções

### Grid System

```
Container max: 1280px
Gutter: 24px
Columns: 12 (desktop), 8 (tablet), 4 (mobile)
```

---

## Assets Gráficos a Produzir

| Asset | Formato | Uso | Squad responsável |
|-------|---------|-----|-------------------|
| Favicon | SVG | Aba do navegador | fmd-design |
| Logotipo horizontal | SVG | Header, footer | fmd-design (criar variações) |
| Logotipo quadrado | SVG | Favicon, avatar | fmd-design |
| Ícones de produtos (4) | SVG | Cards home | fmd-design |
| Ícones de soluções (4) | SVG | Seção home | fmd-design |
| Ícones sociais (3) | SVG | Footer | fmd-design |
| Ilustração hero | SVG/Lottie | Home page | fmd-design |
| Grid pattern | SVG | Background | fmd-design |
| Open Graph image | PNG 1200x630 | Compartilhamento | fmd-design |
| Screenshots Nyra (9) | PNG | Página Nyra | Já disponível |

---

## Estrutura de Diretórios para Assets do Site

```
public/
├── favicon/
│   ├── favicon.svg
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── images/
│   ├── logo/
│   │   ├── logo-horizontal.svg
│   │   ├── logo-horizontal-dark.svg
│   │   ├── logo-square.svg
│   │   └── logo-square-dark.svg
│   ├── icons/
│   │   ├── icon-nyra.svg
│   │   ├── icon-inmora.svg
│   │   ├── icon-opportunity-engine.svg
│   │   └── icon-intelligent-squads.svg
│   ├── illustrations/
│   │   └── hero-illustration.svg
│   ├── products/
│   │   └── nyra/
│   │       ├── dashboard.png
│   │       ├── captacao.png
│   │       └── ...
│   └── og-image.png
├── fonts/
│   ├── Geist-Bold.woff2
│   ├── Geist-Medium.woff2
│   ├── Inter-Regular.woff2
│   └── JetBrainsMono-Regular.woff2
```

---

## Recomendações Técnicas para o fmd-dev

- **Framework:** Next.js 15+ (App Router) — SSR, SEO, performance
- **Estilização:** Tailwind CSS v4 + design tokens como CSS vars
- **Fontes:** Self-hosted (Geist, Inter, JetBrains Mono via next/font)
- **Animações:** Framer Motion ou CSS nativas (preferir CSS)
- **Ícones:** Lucide React + ícones custom SVG
- **Idiomas:** next-intl para i18n (PT/EN)
- **Acessibilidade:** Componentes Radix UI (headless + acessíveis)

---

## Checklist de Qualidade Visual

- [ ] Todos os textos usam as fontes corretas (Geist/Inter/JetBrains Mono)
- [ ] Cores correspondem exatamente à paleta oficial
- [ ] Espaçamento consistente em todos os breakpoints
- [ ] Botões têm estados hover, focus, active, disabled
- [ ] Links têm hover com gradiente
- [ ] Cards têm hover effect (elevação)
- [ ] Header transition suave ao scroll
- [ ] Footer tem assinatura "Dados • Automação • Inteligência"
- [ ] Nenhum robô, cérebro ou holograma foi usado
- [ ] Imagens Nyra são autênticas (prints reais)
- [ ] Favicon configurado
- [ ] Open Graph tags configuradas
