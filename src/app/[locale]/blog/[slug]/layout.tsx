import type { ReactNode } from "react";
import type { Metadata } from "next";

const postMetadata: Record<string, { pt: string; en: string }> = {
  "engenharia-decision-intelligence": {
    pt: "O que é Decision Intelligence e por que sua empresa precisa",
  en: "What is Decision Intelligence and why your company needs it"
  },
  "automacao-comercial-com-ia": {
    pt: "Automação comercial com IA: o novo padrão de competitividade",
  en: "AI-Powered Sales Automation: the new competitive standard"
  },
  "arquitetura-limpa-escalavel": {
    pt: "Arquitetura limpa e escalável: princípios para sistemas que evoluem",
  en: "Clean and scalable architecture: principles for evolving systems"
  },
  "dados-moedas-estrategicas": {
    pt: "Dados como moeda estratégica na era dos agentes de IA",
  en: "Data as strategic currency in the age of AI agents"
  },
  "engenharia-de-prompts-vs-fine-tuning": {
    pt: "Engenharia de prompts vs. Fine-tuning: quando usar cada abordagem",
  en: "Prompt engineering vs Fine-tuning: when to use each approach"
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = postMetadata[slug];
  const title = post?.[locale as "pt" | "en"] || slug;
  return {
    title,
    description: `${title} — Artigo sobre engenharia de software, IA, dados e automação.`,
  };
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
