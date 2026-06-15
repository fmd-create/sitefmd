# FMD Website — Direção Visual v1.0

Baseada no Brand Guide v1.0 e nos wireframes aprovados.

---

## 1. Conceito Visual

**"Arquitetura de Dados"** — O conceito visual traduz a essência da FMD: construir soluções inteligentes sobre bases sólidas de engenharia e dados.

**Metáfora visual:** Estruturas arquiteturais que se conectam através de fluxos de dados. Grids precisos, linhas que se entrelaçam como circuitos, elementos que constroem algo maior.

---

## 2. Paleta de Cores Aplicada

| Elemento | Cor | HEX |
|----------|-----|-----|
| Fundo do site | Escuro principal | `#050816` |
| Cards/superfícies | Grafite | `#1A1F2B` |
| Texto principal | Branco | `#F5F7FA` |
| Texto secundário | Grafite claro | `#8B92A5` |
| Links e CTAs | Azul primário | `#0A5CFF` |
| Hover/destaque | Azul secundário | `#00C2FF` |
| Gradiente hero | Azul primário → secundário | `#0A5CFF` → `#00C2FF` |
| Bordas/linhas | Grafite +20% | `#2A2F3B` |

---

## 3. Tipografia Aplicada

| Nível | Fonte | Peso | Tamanho (desktop) | Altura de linha |
|-------|-------|------|-------------------|-----------------|
| H1 (hero) | Geist | Bold (700) | 64px | 1.1 |
| H2 (seção) | Geist | Bold (700) | 42px | 1.15 |
| H3 (card) | Geist | Semibold (600) | 26px | 1.2 |
| H4 (sub) | Geist | Medium (500) | 20px | 1.25 |
| Body | Inter | Regular (400) | 16px | 1.6 |
| Body small | Inter | Regular (400) | 14px | 1.5 |
| CTA | Geist | Medium (500) | 16px | 1 |
| Código | JetBrains Mono | Regular (400) | 14px | 1.4 |
| Meta/caption | Inter | Regular (400) | 12px | 1.4 |

---

## 4. Sistema de Espaçamento

Base exponencial (Geist-inspired):

| Token | px | Uso |
|-------|----|-----|
| `space-1` | 4px | Micro-ajustes |
| `space-2` | 8px | Ícones, gaps |
| `space-3` | 12px | Botões |
| `space-4` | 16px | Cards |
| `space-5` | 24px | Seções |
| `space-6` | 32px | Componentes |
| `space-7` | 48px | Seções maiores |
| `space-8` | 64px | Hero |
| `space-9` | 96px | Entre seções |
| `space-10` | 128px | Seções hero |

---

## 5. Botões

| Estado | Fundo | Texto | Borda | Sombra |
|--------|-------|-------|-------|--------|
| Primary default | `#0A5CFF` | `#F5F7FA` | — | — |
| Primary hover | `#0050E0` | `#F5F7FA` | — | `0 0 20px rgba(10,92,255,0.3)` |
| Secondary default | Transparente | `#0A5CFF` | `1px solid #0A5CFF` | — |
| Secondary hover | `#0A5CFF` | `#F5F7FA` | — | — |
| Ghost | Transparente | `#F5F7FA` | — | — |
| Ghost hover | `rgba(245,247,250,0.08)` | `#F5F7FA` | — | — |

**Border-radius:** 8px (botões), 12px (cards), 0 (elementos técnicos)

---

## 6. Navegação

- **Header:** Fixo no topo, altura 72px
- **Background:** Transparente no topo → `rgba(5,8,22,0.95)` + blur(12px) ao scroll
- **Logo:** Versão horizontal (lado esquerdo)
- **Links:** Centralizados com hover underline gradiente
- **Botão CT:** "Falar conosco" à direita
- **Mobile:** Hambúrguer com menu em overlay

---

## 7. Cards

```
┌──────────────────────────┐
│                          │
│   [Ícone/Ilustração]     │
│                          │
│   Título (Geist 20px)    │
│                          │
│   Descrição (Inter 14px) │
│   em 2-3 linhas          │
│                          │
│   → Saiba mais           │
│                          │
└──────────────────────────┘

Borda: 1px solid #2A2F3B
Fundo: #1A1F2B
Border-radius: 12px
Padding: 24px
Hover: border-color #0A5CFF, translateY(-2px)
```

---

## 8. Seção Hero

```html
Background: Gradiente #0A5CFF → #00C2FF (opacidade 8%)
           + Grid pattern geométrico (opacidade 4%)
           + Fundo #050816

Headline: Geist Bold 64px, #F5F7FA
Subtítulo: Inter Regular 20px, #8B92A5
CTAs: Primary + Ghost lado a lado

Altura: 80vh (min 600px, max 900px)
```

---

## 9. Grid Pattern

Background sutil com grid geométrico:
- Linhas finas (1px), cor `rgba(10,92,255,0.06)`
- Espaçamento 80px entre linhas
- Rotação opcional de 30deg em algumas seções

---

## 10. Elementos Gráficos Permitidos

- **Linhas conectoras** entre seções (flow de dados)
- **Círculos concêntricos** discretos (precisão)
- **Grid patterns** sobrepostos (arquitetura)
- **Partículas** sutis no hero (dados)
- **Bordas esquerdas** coloridas em cards ativos
- **Divisores** com gradiente sutil

---

## 11. Micro-Interações

- **Links:** Underline animado (expande da esquerda)
- **Cards:** Elevação sutil no hover (+translateY -2px, shadow)
- **Botões:** Transição suave 200ms ease
- **Scroll reveal:** Fade-in + translateY 20px
- **Nav:** Background sólido aparece ao scroll (threshold 100px)
- **Mobile menu:** Overlay com blur backdrop
