import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Soluções",
  en: "Solutions",
};

const descriptions: Record<string, string> = {
  pt: "Soluções em IA, Engenharia de Software, Dados e Automação para transformar seu negócio.",
  en: "AI, Software Engineering, Data and Automation solutions to transform your business.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
