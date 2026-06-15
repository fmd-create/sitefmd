"use client";

import Image from "next/image";
import Link from "next/link";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { key: "products", href: "/products" },
  { key: "solutions", href: "/solutions" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
] as const;

export function Header() {
  const messages = useMessages();
  const locale = useLocale();
  const mn = messages?.nav as Record<string, unknown> | undefined;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const altLocale = locale === "pt" ? "en" : "pt";
  const altLabel = locale === "pt" ? "EN" : "PT";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-[#2a2f3b] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3 group shrink-0">
          <Image
            src="/images/fmd-logo.png"
            alt="FMD Soluções Inteligentes"
            width={64}
            height={64}
            className="rounded-xl"
          />
          <span className="hidden sm:block text-xl font-semibold text-[#f5f7fa] tracking-tight">
            FMD Soluções Inteligentes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="px-4 py-2 text-sm font-medium text-[#8b92a5] rounded-lg transition-all duration-200 hover:text-[#f5f7fa] hover:bg-white/[0.08] active:bg-white/[0.04]"
            >
              {mn?.[item.key] as string}
            </Link>
          ))}
          <div className="w-px h-5 bg-[#2a2f3b] mx-2" />
          <Link
            href={`/${altLocale}`}
            className="px-4 py-2 text-sm font-semibold text-[#0a5cff] rounded-lg transition-all duration-200 hover:bg-[#0a5cff]/10"
          >
            {altLabel}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a5cff] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0045cc] hover:shadow-glow active:scale-[0.97]"
          >
            {mn?.talk as string}
            <ArrowRight size={14} />
          </Link>
        </div>

        <button
          className="md:hidden text-[#f5f7fa] p-2 rounded-md hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#2a2f3b] glass">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="px-4 py-3 text-sm text-[#8b92a5] rounded-md hover:text-[#f5f7fa] hover:bg-white/[0.06] transition-colors"
                onClick={() => setOpen(false)}
              >
{mn?.[item.key] as string}
              </Link>
            ))}
            <div className="h-px bg-[#2a2f3b] my-2" />
            <Link
              href={`/${altLocale}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#2a2f3b] px-5 py-3 text-sm font-medium text-[#0a5cff]"
              onClick={() => setOpen(false)}
            >
              {altLabel}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0a5cff] px-5 py-3 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {mn?.talk as string}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
