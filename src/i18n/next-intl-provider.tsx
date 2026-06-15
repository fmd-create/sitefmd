"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./routing";

type Messages = Record<string, unknown>;

const I18nContext = createContext<{
  locale: Locale;
  messages: Messages;
} | null>(null);

export function NextIntlProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within NextIntlProvider");
  return ctx.locale;
}

export function useMessages() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useMessages must be used within NextIntlProvider");
  return ctx.messages;
}

export function useTranslations(namespace?: string) {
  const { messages } = useMessages();

  function t(key: string, ns?: string): string {
    const nsKey = ns || namespace;
    let value: unknown = messages;

    const path = nsKey ? `${nsKey}.${key}` : key;
    for (const segment of path.split(".")) {
      if (value && typeof value === "object") {
        value = (value as Record<string, unknown>)[segment];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }

  return { t };
}
