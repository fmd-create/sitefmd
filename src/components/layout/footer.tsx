"use client";

import Image from "next/image";
import Link from "next/link";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const messages = useMessages();
  const locale = useLocale();
  const mf = messages?.footer as Record<string, unknown> | undefined;
  const mn = messages?.nav as Record<string, unknown> | undefined;

  return (
    <footer className="border-t border-[#2a2f3b]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/fmd-logo.png"
                alt="FMD Soluções Inteligentes"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm font-medium text-[#f5f7fa] tracking-tight">
                FMD
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8b92a5]">
              {mf?.description as string}
            </p>
            <p className="mt-4 text-xs font-medium tracking-[0.15em] text-[#0a5cff] uppercase">
              {mf?.signature as string}
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-[#f5f7fa] uppercase">
              {mf?.nav_title as string}
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { key: "products", href: "/products" },
                { key: "solutions", href: "/solutions" },
                { key: "about", href: "/about" },
                { key: "contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="group inline-flex items-center gap-1.5 text-sm text-[#8b92a5] transition-colors hover:text-[#f5f7fa] w-fit"
                >
                  {mn?.[item.key] as string || item.key}
                  <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-[#f5f7fa] uppercase">
              {mf?.social_title as string}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/fmdottori/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-[#8b92a5] transition-colors hover:text-[#f5f7fa] w-fit"
              >
                <Linkedin size={14} />
                {mf?.linkedin as string}
                <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="https://github.com/fmd-create"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-[#8b92a5] transition-colors hover:text-[#f5f7fa] w-fit"
              >
                <Github size={14} />
                {mf?.github as string}
                <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="mailto:contato@fmdsoluccoesinteligentes.com.br"
                className="group inline-flex items-center gap-2 text-sm text-[#8b92a5] transition-colors hover:text-[#f5f7fa] w-fit"
              >
                <Mail size={14} />
                {mf?.email as string}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2a2f3b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5a6275]">
            &copy; {new Date().getFullYear()} {mf?.copyright as string}.{" "}
            {mf?.rights as string}
          </p>
          <p className="text-xs text-[#5a6275]">
            {mf?.tagline as string}
          </p>
        </div>
      </div>
    </footer>
  );
}
