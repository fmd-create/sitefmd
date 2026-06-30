import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Termos de Uso",
  en: "Terms of Use",
};

const descriptions: Record<string, string> = {
  pt: "Termos de Uso da plataforma FMD Soluções Inteligentes. Condições gerais para utilização dos nossos serviços e produtos SaaS.",
  en: "Terms of Use for the FMD Soluções Inteligentes platform. General conditions for using our SaaS services and products.",
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
