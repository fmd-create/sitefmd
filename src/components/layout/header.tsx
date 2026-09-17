"use client";

import Image from "next/image";
import Link from "next/link";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { Menu, X, ArrowRight } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3 group shrink-0">
          <Image
            src="/images/fmd-logo.png"
            alt="FMD Soluções Inteligentes"
            width={80}
            height={80}
            className="rounded-xl"
          />
          <span className="hidden sm:block text-lg font-semibold text-white tracking-tight">
            FMD Soluções Inteligentes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="px-3.5 py-1.5 text-sm font-medium text-text-muted rounded-md transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
            >
              {mn?.[item.key] as string}
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <Link
            href={`/${altLocale}`}
            className="px-3 py-1.5 text-xs font-semibold text-primary rounded-md transition-all duration-200 hover:bg-primary/10"
          >
            {altLabel}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-glow-blue active:scale-[0.97]"
          >
            {mn?.talk as string}
            <ArrowRight size={14} />
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border glass">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="px-4 py-2.5 text-sm text-text-muted rounded-md hover:text-white hover:bg-white/[0.06] transition-colors"
                onClick={() => setOpen(false)}
              >
                {mn?.[item.key] as string}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <Link
              href={`/${altLocale}`}
              className="flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-primary"
              onClick={() => setOpen(false)}
            >
              {altLabel}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
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