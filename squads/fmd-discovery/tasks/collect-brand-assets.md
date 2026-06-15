---
task: Coletar Assets da Marca
responsavel: "@fmd-discovery"
responsavel_type: squad
atomic_layer: task
elicit: true
Entrada: |
  - brief: Documento de briefing do projeto
Saida: |
  - assets: Lista de materiais coletados
  - missing: Lista de materiais pendentes
Checklist:
  - "[ ] Logotipo oficial em alta resolução"
  - "[ ] Versões da marca (clara, escura, SVG, PNG)"
  - "[ ] Manual de identidade visual (se existir)"
  - "[ ] Prints ou vídeos dos produtos (Nyra, InMora, Opportunity Engine)"
  - "[ ] Capturas de dashboards"
  - "[ ] Imagens institucionais"
  - "[ ] Ícones próprios"
  - "[ ] Tipografia utilizada pela empresa"
  - "[ ] Paleta de cores oficial"
  - "[ ] Domínio que será utilizado"
  - "[ ] Redes sociais"
  - "[ ] LinkedIn"
  - "[ ] GitHub"
  - "[ ] Missão, Visão e Valores"
  - "[ ] Diferenciais competitivos"
  - "[ ] Público-alvo"
  - "[ ] Objetivos estratégicos do website"
---
# collect-brand-assets

Coletar todos os assets de marca e identidade visual da FMD Soluções Inteligentes.

## Fluxo

1. Solicitar ao usuário cada item da checklist
2. Organizar assets coletados em `squads/fmd-discovery/data/`
3. Documentar itens pendentes
4. Validar que todos os itens críticos foram coletados antes de prosseguir

## Critérios de Aceitação

- [ ] Todos os itens obrigatórios coletados
- [ ] Assets organizados em diretório apropriado
- [ ] Itens pendentes documentados com prioridade
