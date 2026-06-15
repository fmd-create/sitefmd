import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Produtos",
  en: "Products",
};

const descriptions: Record<string, string> = {
  pt: "Conheça o ecossistema de produtos inteligentes da FMD: Nyra, InMora, Opportunity Engine e Intelligent Squads.",
  en: "Discover FMD's ecosystem of intelligent products: Nyra, InMora, Opportunity Engine and Intelligent Squads.",
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
