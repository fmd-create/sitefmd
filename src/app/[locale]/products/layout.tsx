import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Produtos",
  en: "Products",
};

const descriptions: Record<string, string> = {
  pt: "Conheça as plataformas de inteligência comercial da FMD: Nyra e Nyra Connect. Revenue Operations, Sales Intelligence e automação de atendimento com IA.",
  en: "Discover FMD's commercial intelligence platforms: Nyra and Nyra Connect. Revenue Operations, Sales Intelligence and AI-powered service automation.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}