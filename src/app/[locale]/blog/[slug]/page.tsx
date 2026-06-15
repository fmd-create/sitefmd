"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLocale } from "@/i18n/next-intl-provider";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, { title: string; content: string[]; tags: string[] }> = {
  "engenharia-decision-intelligence": {
    title: "O que é Decision Intelligence e por que sua empresa precisa",
    content: [
      "Decision Intelligence é uma disciplina emergente que combina ciência de dados, inteligência artificial e ciência da decisão. Seu objetivo é transformar dados brutos em ações de negócio com precisão cirúrgica.",
      "Diferente de abordagens tradicionais de BI (Business Intelligence), que apenas reportam o que aconteceu, Decision Intelligence utiliza modelos preditivos e prescritivos para recomendar o melhor curso de ação em cada cenário.",
      "Para empresas que operam em ambientes de alta complexidade — como automação comercial, inteligência econômica e engenharia de dados — a Decision Intelligence não é um luxo, é uma necessidade competitiva.",
      "Na FMD, aplicamos Decision Intelligence em cada plataforma que construímos. A Nyra, por exemplo, utiliza DI para priorizar leads, recomendar estratégias de abordagem e otimizar o ciclo de vendas em tempo real.",
    ],
    tags: ["IA", "Decision Intelligence", "Estratégia"],
  },
  "automacao-comercial-com-ia": {
    title: "Automação comercial com IA: o novo padrão de competitividade",
    content: [
      "Empresas que automatizam seus processos comerciais com inteligência artificial reduzem custos operacionais em até 40% e aumentam a taxa de conversão em mais de 60%.",
      "A automação comercial com IA vai muito além de disparar e-mails ou gerenciar leads. Trata-se de orquestrar todo o ciclo de vendas — desde a prospecção até o pós-venda — com agentes inteligentes que aprendem e se adaptam.",
      "Com técnicas de machine learning, NLP e análise preditiva, é possível qualificar leads automaticamente, prever churn, recomendar produtos e personalizar a comunicação em escala.",
      "A Nyra, nossa plataforma de automação comercial, foi projetada exatamente para isso: unificar vendas, marketing e pós-venda em uma única inteligência operacional.",
    ],
    tags: ["Automação", "IA", "Vendas"],
  },
  "arquitetura-limpa-escalavel": {
    title: "Arquitetura limpa e escalável: princípios para sistemas que evoluem",
    content: [
      "Clean Architecture não é sobre frameworks ou bibliotecas — é sobre organizar o código de forma que o domínio do negócio seja o centro do sistema, independente de tecnologia.",
      "Os princípios fundamentais incluem: independência de frameworks, testabilidade, independência de UI, independência de banco de dados e independência de agentes externos.",
      "Sistemas construídos com arquitetura limpa são mais fáceis de manter, evoluir e escalar. Mudanças em detalhes tecnológicos (como trocar um banco de dados ou um framework web) não afetam as regras de negócio.",
      "Na FMD, todos os nossos produtos seguem Clean Architecture combinada com Domain-Driven Design e Event-Driven Architecture — garantindo que cada sistema seja tão resiliente quanto flexível.",
    ],
    tags: ["Arquitetura", "Clean Code", "Engenharia"],
  },
  "dados-moedas-estrategicas": {
    title: "Dados como moeda estratégica na era dos agentes de IA",
    content: [
      "Com a ascensão dos agentes autônomos de IA, a qualidade e a governança dos dados corporativos se tornaram o principal diferencial competitivo entre organizações.",
      "Empresas que tratam dados como ativo estratégico — e não como subproduto operacional — conseguem treinar modelos mais precisos, automatizar processos complexos e tomar decisões em tempo real com muito mais confiança.",
      "A governança de dados deixou de ser uma preocupação de compliance para se tornar uma vantagem competitiva direta. Dados limpos, bem estruturados e auditáveis são o combustível dos agentes de IA modernos.",
      "Na FMD, construímos pipelines de dados com qualidade enterprise desde a origem. Cada plataforma que entregamos já nasce com governança embarcada — porque dados de qualidade geram decisões de qualidade.",
    ],
    tags: ["Dados", "IA", "Agentes", "Estratégia"],
  },
  "engenharia-de-prompts-vs-fine-tuning": {
    title: "Engenharia de prompts vs. Fine-tuning: quando usar cada abordagem",
    content: [
      "Nem todo problema de IA precisa de fine-tuning. Entender as diferenças entre engenharia de prompts e fine-tuning é essencial para escolher a abordagem certa para cada cenário.",
      "Engenharia de prompts é a arte de projetar instruções precisas para modelos pré-treinados. É rápida, não requer dados rotulados e funciona bem para tarefas bem definidas com pouca variação.",
      "Fine-tuning, por outro lado, envolve treinar um modelo base com dados específicos do seu domínio. É mais custoso e demorado, mas produz resultados superiores para tarefas especializadas que exigem conhecimento de domínio profundo.",
      "Na FMD, usamos ambas as abordagens de forma complementar: engenharia de prompts para prototipagem rápida e fine-tuning para soluções em produção que exigem precisão máxima e aderência ao domínio do cliente.",
    ],
    tags: ["IA", "LLM", "Prompts", "Fine-tuning"],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const locale = useLocale();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main>
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <h1 className="text-5xl font-semibold text-[#f5f7fa] tracking-tight">404</h1>
              <p className="mt-4 text-[#8b92a5]">
                {locale === "pt" ? "Post não encontrado" : "Post not found"}
              </p>
              <Link
                href={`/${locale}/blog`}
                className="mt-8 inline-flex items-center gap-2 text-sm text-[#0a5cff] hover:underline"
              >
                <ArrowLeft size={14} />
                {locale === "pt" ? "Voltar ao blog" : "Back to blog"}
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dense opacity-40" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[100px]" />
          <div className="mx-auto max-w-3xl px-6 relative">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm text-[#5a6275] hover:text-[#f5f7fa] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {locale === "pt" ? "Voltar ao blog" : "Back to blog"}
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f5f7fa]">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#5a6275] bg-[#1a1f2b] px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="section-divider absolute left-0 right-0" />
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-invert max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-[#8b92a5] mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
