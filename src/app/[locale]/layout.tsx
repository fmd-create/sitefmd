import type { ReactNode } from "react";
import type { Locale } from "@/i18n/routing";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { getMessages } from "@/i18n/server";
import { NextIntlProvider } from "@/i18n";

import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#050816] text-[#f5f7fa] antialiased">
        <NextIntlProvider locale={locale as Locale} messages={messages}>
          {children}
        </NextIntlProvider>
      </body>
    </html>
  );
}
