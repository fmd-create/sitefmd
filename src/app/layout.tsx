import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

const title = "FMD Soluções Inteligentes — Engenharia de Software, IA e Automação";
const description =
  "Engenharia de software de alto nível. Projetamos sistemas inteligentes de automação comercial, inteligência econômica e engenharia de dados — do Brasil para o mundo.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | FMD Soluções Inteligentes",
  },
  description,
  keywords: [
    "engenharia de software",
    "inteligência artificial",
    "automação comercial",
    "dados",
    "IA",
    "machine learning",
    "FMD",
    "soluções inteligentes",
    "software engineering",
    "AI",
    "automation",
  ],
  authors: [{ name: "FMD Soluções Inteligentes" }],
  creator: "FMD Soluções Inteligentes",
  publisher: "FMD Soluções Inteligentes",
  metadataBase: new URL("https://fmdsoluccoesinteligentes.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "FMD Soluções Inteligentes",
    title,
    description,
    url: "https://fmdsoluccoesinteligentes.com.br",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FMD Soluções Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
