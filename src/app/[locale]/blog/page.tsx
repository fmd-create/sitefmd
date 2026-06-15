"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useTranslations, useLocale } from "@/i18n/next-intl-provider";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "engenharia-decision-intelligence",
    title: "O que é Decision Intelligence e por que sua empresa precisa",
    excerpt:
      "Decision Intelligence é a disciplina que combina ciência de dados, inteligência artificial e ciência da decisão para transformar dados brutos em ações de negócio com precisão cirúrgica.",
    date: "2025-12-10",
    readTime: "8 min",
    tags: ["IA", "Decision Intelligence", "Estratégia"],
  },
  {
    slug: "automacao-comercial-com-ia",
    title: "Automação comercial com IA: o novo padrão de competitividade",
    excerpt:
      "Empresas que automatizam seus processos comerciais com inteligência artificial reduzem custos operacionais em até 40% e aumentam a taxa de conversão em mais de 60%.",
    date: "2025-11-28",
    readTime: "6 min",
    tags: ["Automação", "IA", "Vendas"],
  },
  {
    slug: "arquitetura-limpa-escalavel",
    title: "Arquitetura limpa e escalável: princípios para sistemas que evoluem",
    excerpt:
      "Clean Architecture não é sobre frameworks ou bibliotecas — é sobre organizar o código de forma que o domínio do negócio seja o centro do sistema, independente de tecnologia.",
    date: "2025-11-15",
    readTime: "10 min",
    tags: ["Arquitetura", "Clean Code", "Engenharia"],
  },
  {
    slug: "dados-moedas-estrategicas",
    title: "Dados como moeda estratégica na era dos agentes de IA",
    excerpt:
      "Com a ascensão dos agentes autônomos de IA, a qualidade e a governança dos dados corporativos se tornaram o principal diferencial competitivo entre organizações.",
    date: "2025-10-30",
    readTime: "7 min",
    tags: ["Dados", "IA", "Agentes", "Estratégia"],
  },
  {
    slug: "engenharia-de-prompts-vs-fine-tuning",
    title: "Engenharia de prompts vs. Fine-tuning: quando usar cada abordagem",
    excerpt:
      "Nem todo problema de IA precisa de fine-tuning. Entenda as diferenças entre engenharia de prompts e fine-tuning e saiba qual abordagem faz sentido para cada cenário.",
    date: "2025-10-12",
    readTime: "9 min",
    tags: ["IA", "LLM", "Prompts", "Fine-tuning"],
  },
];

export default function BlogPage() {
  const locale = useLocale();

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dense opacity-40" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
              FMD Soluções Inteligentes
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#f5f7fa] max-w-3xl">
              {locale === "pt" ? "Blog" : "Blog"}
            </h1>
            <p className="mt-4 text-[#8b92a5] max-w-lg">
              {locale === "pt"
                ? "Engenharia, inteligência artificial, dados e automação — na prática."
                : "Engineering, AI, data, and automation — in practice."}
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 md:py-20">
          <div className="section-divider absolute left-0 right-0" />
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-8">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className="group rounded-xl border border-[#2a2f3b] bg-[#0a0f1e]/50 p-6 md:p-8 card-hover"
                  style={{
                    animation: `slide-up 0.6s ease-out ${0.2 + i * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="flex items-center gap-4 text-xs text-[#5a6275] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <h2 className="font-primary text-xl md:text-2xl font-semibold tracking-tight text-[#f5f7fa] group-hover:text-[#0a5cff] transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-sm leading-relaxed text-[#8b92a5]">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag size={12} className="text-[#5a6275]" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[#5a6275] bg-[#1a1f2b] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-medium text-[#0a5cff] opacity-0 group-hover:opacity-100 transition-all"
                    >
                      {locale === "pt" ? "Ler" : "Read"}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
