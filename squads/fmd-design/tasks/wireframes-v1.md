# FMD Website — Wireframes v1.0

## Estrutura de Páginas

```
├── Home (/)                          # Hero + produtos + diferenciais + CTA
├── Sobre (/about)                    # História, missão, visão, valores, equipe
├── Produtos (/produtos)              # Grid dos 4 produtos
│   ├── Nyra (/produtos/nyra)         # Página dedicada Nyra
│   ├── InMora (/produtos/inmora)     # Página dedicada InMora
│   ├── Opportunity Engine (/produtos/opportunity-engine)
│   └── Intelligent Squads (/produtos/intelligent-squads)
├── Soluções (/solucoes)              # Áreas de atuação
│   ├── IA (/solucoes/ia)
│   ├── Engenharia (/solucoes/engenharia)
│   ├── Dados (/solucoes/dados)
│   └── Automação (/solucoes/automacao)
├── Blog (/blog)                      # Listagem + artigos
└── Contato (/contato)                # Formulário + canais
```

---

## 1. Home Page

```
┌─────────────────────────────────────────────────────┐
│ [Logo FMD]  Produtos  Soluções  Sobre  Blog  [EN]  │ ← Nav escura
├─────────────────────────────────────────────────────┤
│                                                     │
│   ┌───────────────────────────────────────────┐     │
│   │                                           │     │
│   │   Dados • Automação • Inteligência        │     │
│   │                                           │     │
│   │   [Headline principal impactante]          │     │
│   │                                           │     │
│   │   [Subtítulo explicativo 2 linhas]        │     │
│   │                                           │     │
│   │   [CTA Principal]  [CTA Secundário]       │     │
│   │                                           │     │
│   └───────────────────────────────────────────┘     │
│              ↑ Hero section (gradiente #0A5CFF→#00C2FF)
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│   │  IA      │  │ Eng.     │  │ Dados    │         │ ← 3 cards
│   │          │  │ Software │  │          │           │   soluções
│   │ [ícone]  │  │ [ícone]  │  │ [ícone]  │         │
│   └──────────┘  └──────────┘  └──────────┘         │
│   ┌──────────┐  ┌──────────┐                         │
│   │ Automação│  │ SaaS     │                         │
│   │          │  │          │                         │
│   │ [ícone]  │  │ [ícone]  │                         │
│   └──────────┘  └──────────┘                         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   [Produtos em destaque — grid 2x2]                 │
│   ┌─────────────┐  ┌─────────────┐                  │
│   │  Nyra       │  │  InMora     │                  │
│   │  IA + CRM   │  │  Imobiliário│                  │
│   └─────────────┘  └─────────────┘                  │
│   ┌─────────────┐  ┌─────────────┐                  │
│   │ Opportunity │  │ Intelligent │                  │
│   │ Engine      │  │ Squads      │                  │
│   └─────────────┘  └─────────────┘                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   [Seção diferenciais — 3 ícones + texto]           │
│   Engenharia │ Dados │ Resultados                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   [CTA Final — "Construa sua solução inteligente"]  │
│   [Botão: Falar com especialista]                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [Logo]  Produtos  Soluções  Sobre  Blog  Contato    │ ← Footer
│ © FMD Soluções Inteligentes                         │
│ Dados • Automação • Inteligência                    │
│ LinkedIn  GitHub  E-mail                            │
└─────────────────────────────────────────────────────┘
```

---

## 2. Página de Produto (ex: Nyra)

```
┌─────────────────────────────────────────────────────┐
│ [Logo]  Produtos  Soluções  Sobre  Blog  [EN]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ← Voltar para Produtos                            │
│                                                     │
│   Nyra                                              │
│   Plataforma inteligente de automação comercial     │
│                                                     │
│   [Descrição completa 3-4 linhas]                   │
│                                                     │
│   [CTA: Solicitar demonstração]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│   Funcionalidades principais:                       │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│   │ Captação │ │ CRM     │ │ WhatsApp │           │
│   │ de Leads │ │ Intelig.│ │ Automação│           │
│   └──────────┘ └──────────┘ └──────────┘           │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│   │ IA      │ │ Relat.   │ │ Follow-up│           │
│   │ Agents  │ │ Intelig. │ │ Autom.   │           │
│   └──────────┘ └──────────┘ └──────────┘           │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Screenshots do produto — carrossel]              │
│   ┌───────────────────────────────────────────┐     │
│   │                                           │     │
│   │         (dashboard Nyra)                   │     │
│   │                                           │     │
│   └───────────────────────────────────────────┘     │
│   ● ● ○ ○ ○                                        │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Seção: Para quem é?]                             │
│   • Equipes comerciais                              │
│   • PMEs e médias empresas                          │
│   • Operações B2B                                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [CTA Final — Agende uma demonstração]             │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Footer                                              │
└─────────────────────────────────────────────────────┘
```

---

## 3. Página Sobre

```
┌─────────────────────────────────────────────────────┐
│ [Logo]  Produtos  Soluções  Sobre  Blog  [EN]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Sobre a FMD                                       │
│   Engenharia de Software • IA • Dados • Automação   │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Missão]                                          │
│   Transformar desafios complexos em soluções        │
│   inteligentes, escaláveis e orientadas por dados.  │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Visão + Valores — grid]                          │
│   ┌────────────────┐  ┌────────────────┐            │
│   │ Engenharia     │  │ Dados         │            │
│   │ 1º lugar       │  │ Orientados    │            │
│   └────────────────┘  └────────────────┘            │
│   ┌────────────────┐  ┌────────────────┐            │
│   │ Inovação com   │  │ Transparência │            │
│   │ Propósito      │  │               │            │
│   └────────────────┘  └────────────────┘            │
│   ┌────────────────┐  ┌────────────────┐            │
│   │ Evolução       │  │ Compromisso   │            │
│   │ Contínua       │  │ c/ Resultados │            │
│   └────────────────┘  └────────────────┘            │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Tecnologias — logos em grid]                     │
│   Python  TS  React  FastAPI  Docker  K8s           │
│   PostgreSQL  Redis  TensorFlow  PyTorch            │
│                                                     │
├─────────────────────────────────────────────────────┤
│   [Contato / CTA]                                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Footer                                              │
└─────────────────────────────────────────────────────┘
```

---

## 4. Página de Contato

```
┌─────────────────────────────────────────────────────┐
│ [Logo]  Produtos  Soluções  Sobre  Blog  [EN]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Entre em Contato                                  │
│                                                     │
│   ┌─────────────────────┐  ┌────────────────────┐   │
│   │                     │  │                    │   │
│   │   [Formulário]      │  │  E-mail:           │   │
│   │   Nome              │  │  flavia@fmd...     │   │
│   │   E-mail            │  │                    │   │
│   │   Empresa           │  │  LinkedIn          │   │
│   │   Mensagem          │  │  [link]            │   │
│   │                     │  │                    │   │
│   │   [Enviar]          │  │  GitHub            │   │
│   │                     │  │  [link]            │   │
│   └─────────────────────┘  └────────────────────┘   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Footer                                              │
└─────────────────────────────────────────────────────┘
```

---

## Princípios de Design dos Wireframes

- **Grid:** 12 colunas, gutter 24px
- **Breakpoints:** 1440px (desktop), 768px (tablet), 375px (mobile)
- **Dark theme:** Fundo `#050816`, texto `#F5F7FA`
- **Hierarquia visual:** Headline → Subtitle → CTA → Conteúdo
- **Espaçamento generoso** entre seções (120px+)
- **Nav fixa** com fundo transparente → sólido ao scroll

---

## Fluxo de Navegação

```
Home
├── Produtos
│   ├── Nyra
│   ├── InMora
│   ├── Opportunity Engine
│   └── Intelligent Squads
├── Soluções
│   ├── Inteligência Artificial
│   ├── Engenharia de Software
│   ├── Engenharia de Dados
│   └── Automação Empresarial
├── Sobre
├── Blog
└── Contato
```

---

## Responsividade

**Desktop (>1024px):** Layout completo, grid 12 colunas
**Tablet (768-1024px):** Grid 8 colunas, nav em hambúrguer
**Mobile (<768px):** Grid 4 colunas, seções empilhadas, CTAs full-width
