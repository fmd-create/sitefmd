import "server-only";
import { type Locale } from "./routing";

const messages = {
  pt: () => import("./messages/pt.json").then((m) => m.default),
  en: () => import("./messages/en.json").then((m) => m.default),
} as const;

export async function getMessages(locale: Locale) {
  return messages[locale]();
}
