import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Termos de Uso",
  en: "Terms of Use",
};

const descriptions: Record<string, string> = {
  pt: "Termos de Uso da FMD Soluções Inteligentes. Condições gerais para utilização do site e produtos Nyra/Nyra Connect.",
  en: "Terms of Use for FMD Soluções Inteligentes. General conditions for using the website and Nyra/Nyra Connect products.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function TermosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
