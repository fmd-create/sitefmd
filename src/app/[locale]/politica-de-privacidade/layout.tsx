import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Política de Privacidade",
  en: "Privacy Policy",
};

const descriptions: Record<string, string> = {
  pt: "Política de Privacidade da plataforma FMD Soluções Inteligentes. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
  en: "Privacy Policy for the FMD Soluções Inteligentes platform. Learn how we collect, use and protect your personal data.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
