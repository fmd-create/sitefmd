---
task: Setup do Projeto Front-end
responsavel: "@fmd-dev"
responsavel_type: squad
atomic_layer: task
elicit: false
Entrada: |
  - stack: Next.js 15 + Tailwind CSS v4 + TypeScript
  - tokens: Design tokens do fmd-design
  - fonts: Geist, Inter, JetBrains Mono
Saida: |
  - projeto inicializado com Next.js + TypeScript + Tailwind
  - design tokens configurados
  - fontes configuradas
  - páginas base criadas
  - i18n configurado (PT/EN)
Checklist:
  - "[ ] Next.js + TypeScript instalado"
  - "[ ] Tailwind CSS v4 configurado"
  - "[ ] Design tokens como CSS vars"
  - "[ ] Fontes Geist + Inter + JetBrains Mono"
  - "[ ] Layout base (header + footer)"
  - "[ ] i18n configurado (next-intl)"
  - "[ ] Páginas em PT e EN"
  - "[ ] ESLint + Prettier"
---
# setup-project

Inicializar o projeto Next.js para o website FMD.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (i18n)
- Radix UI (componentes acessíveis)
- Lucide React (ícones)

## Estrutura Gerada

```
web/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx          # Home
│   │   │   ├── about/page.tsx    # Sobre
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── solutions/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   └── contact/page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/          # Atoms
│   │   ├── layout/      # Header, Footer
│   │   └── sections/    # Hero, Products, etc.
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── pt.json
│   │   │   └── en.json
│   │   └── routing.ts
│   └── styles/
│       └── globals.css  # Design tokens
├── public/
│   ├── fonts/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```
