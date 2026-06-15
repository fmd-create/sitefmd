import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Sobre",
  en: "About",
};

const descriptions: Record<string, string> = {
  pt: "Conheça a história, missão, visão e valores da FMD Soluções Inteligentes. Engenharia de Software, IA, Dados e Automação.",
  en: "Learn about FMD Soluções Inteligentes' history, mission, vision and values. Software Engineering, AI, Data and Automation.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
