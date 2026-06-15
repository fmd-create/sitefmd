import type { ReactNode } from "react";
import type { Metadata } from "next";

const titles: Record<string, string> = {
  pt: "Blog",
  en: "Blog",
};

const descriptions: Record<string, string> = {
  pt: "Artigos sobre engenharia de software, inteligência artificial, dados e automação.",
  en: "Articles about software engineering, artificial intelligence, data and automation.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
