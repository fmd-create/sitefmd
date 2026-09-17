import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

const title = "FMD Soluções Inteligentes — IA para Revenue Operations e Inteligência Comercial";
const description =
  "A FMD desenvolve plataformas de inteligência comercial com IA: Revenue Operations, Sales Intelligence, AI Agents e automação de workflows. Tecnologia brasileira para transformar sua operação comercial.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | FMD Soluções Inteligentes",
  },
  description,
  keywords: [
    "engenharia de software",
    "inteligência artificial",
    "revenue operations",
    "sales intelligence",
    "inteligência comercial",
    "IA",
    "AI agents",
    "multi-agent systems",
    "automação comercial",
    "dados",
    "machine learning",
    "FMD",
    "soluções inteligentes",
    "software engineering",
    "workflow automation",
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
    icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/favicon.svg", type: "image/svg+xml" }],
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
