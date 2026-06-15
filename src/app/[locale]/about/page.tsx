"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { ArrowRight, Database, Cpu, Cloud, Bot, Workflow, Code2, Network } from "lucide-react";

export default function AboutPage() {
  const messages = useMessages();
  const locale = useLocale();
  const ma = messages?.about as Record<string, unknown> | undefined;
  const mh = messages?.home as Record<string, unknown> | undefined;
  const engineeringItems = (ma?.engineering_principles as string[]) || [];
  const flowSteps = (ma?.flow_steps as string[]) || [];
  const diffsItems = (ma?.diffs_items as { title: string; desc: string }[]) || [];

  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00c2ff]/5 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6 relative z-10 w-full pt-32 pb-20">
            <div className="max-w-3xl">
              <div className="forge-badge mb-8">
                {ma?.hero_headline ? String((ma?.hero_headline as string).split(" ")[0]) : "Sobre"}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#f5f7fa] leading-[1.05]">
                {ma?.hero_headline as string}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#8b92a5] max-w-2xl leading-relaxed">
                {ma?.hero_text as string}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 md:mt-20 grid grid-cols-3 gap-px bg-[#2a2f3b]/30 rounded-xl overflow-hidden border border-[#2a2f3b]/30">
              {[
                { value: "4", label: ma?.stat_platforms as string },
                { value: "+20", label: ma?.stat_techs as string },
                { value: "100%", label: ma?.stat_engineering as string },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0a0f1e]/60 p-8">
                  <div className="forge-stat">{stat.value}</div>
                  <div className="mt-2 text-xs text-[#5a6275] uppercase tracking-[0.12em] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FORGE PHILOSOPHY ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a5cff]/[0.015] to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0a5cff]/20 to-transparent ml-8 md:ml-16" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-xl mb-16">
              <div className="forge-badge mb-6">
                {ma?.philosophy_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                {ma?.philosophy_headline as string}
              </h2>
              <p className="mt-4 text-[#8b92a5] leading-relaxed">
                {ma?.philosophy_text as string}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  num: "01",
                  principle: "philosophy_build_title" as const,
                  desc: "philosophy_build_desc" as const,
                  icon: Code2,
                },
                {
                  num: "02",
                  principle: "philosophy_refine_title" as const,
                  desc: "philosophy_refine_desc" as const,
                  icon: Workflow,
                },
                {
                  num: "03",
                  principle: "philosophy_precision_title" as const,
                  desc: "philosophy_precision_desc" as const,
                  icon: Network,
                },
                {
                  num: "04",
                  principle: "philosophy_evolve_title" as const,
                  desc: "philosophy_evolve_desc" as const,
                  icon: Database,
                },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="forge-principle pl-6 py-4 group">
                    <div className="flex items-start gap-4">
                      <div className="forge-principle-number mt-[-4px]">{p.num}</div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Icon size={16} className="text-[#0a5cff]" />
                          <h3 className="text-lg font-semibold text-[#f5f7fa]">
                            {ma?.[p.principle] as string}
                          </h3>
                        </div>
                        <p className="text-sm text-[#8b92a5] leading-relaxed">
                          {ma?.[p.desc] as string}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ OUR STORY ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-[#0a5cff]/5 rounded-full blur-[80px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-xl mb-16">
              <div className="forge-badge mb-6">
                {ma?.story_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                {ma?.story_headline as string}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: locale === "pt" ? "O Problema" : "The Problem",
                  text: ma?.story_problem as string,
                  year: "2020",
                  active: false,
                },
                {
                  title: locale === "pt" ? "A Visão" : "The Vision",
                  text: ma?.story_vision as string,
                  year: "2020-2023",
                  active: true,
                },
                {
                  title: locale === "pt" ? "A Evolução" : "The Evolution",
                  text: ma?.story_evolution as string,
                  year: "2024+",
                  active: true,
                },
              ].map((phase, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="forge-timeline-dot active" />
                    <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                      {phase.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#f5f7fa] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-[#8b92a5] leading-relaxed">
                    {phase.text}
                  </p>
                  {i < 2 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2">
                      <ArrowRight size={16} className="text-[#2a2f3b]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ENGINEERING ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a5cff]/[0.02] to-transparent" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00c2ff]/5 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-xl mb-16">
              <div className="forge-badge mb-6">
                {ma?.engineering_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                {ma?.engineering_headline as string}
              </h2>
              <p className="mt-4 text-[#8b92a5] leading-relaxed">
                {ma?.engineering_text as string}
              </p>
            </div>

            <div className="relative">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
                <defs>
                  <linearGradient id="forge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a5cff" />
                    <stop offset="100%" stopColor="#00c2ff" />
                  </linearGradient>
                </defs>
                {engineeringItems.map((_, i) => (
                  i < engineeringItems.length - 1 && (
                    <line
                      key={i}
                      x1="10%"
                      y1={`${15 + i * 14}%`}
                      x2="90%"
                      y2={`${15 + i * 14}%`}
                      className="forge-svg-line"
                    />
                  )
                ))}
              </svg>

              <div className="grid gap-6">
                {engineeringItems.map((item: string, i: number) => (
                  <div key={i} className="group relative flex items-center gap-4 md:gap-6 px-6 py-5 rounded-lg border border-[#2a2f3b]/50 bg-[#0a0f1e]/40 hover:border-[#0a5cff]/20 transition-all duration-300">
                    <div className="flex-none w-8 h-8 rounded-full border border-[#2a2f3b] flex items-center justify-center">
                      <span className="text-xs font-mono text-[#5a6275] group-hover:text-[#0a5cff] transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm text-[#f5f7fa] font-medium group-hover:text-white transition-colors">
                      {item}
                    </p>
                    <div className="ml-auto flex-none w-2 h-2 rounded-full bg-[#2a2f3b] group-hover:bg-[#0a5cff] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FLOW ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-xl mb-16">
              <div className="forge-badge mb-6">
                {ma?.flow_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                {ma?.flow_headline as string}
              </h2>
            </div>

            {/* Flow diagram */}
            <div className="relative overflow-x-auto pb-4">
              <div className="flex items-center gap-0 min-w-max">
                {flowSteps.map((step: string, i: number) => (
                  <div key={i} className="flex items-center">
                    <div className="forge-node active group cursor-default whitespace-nowrap">
                      <span className="text-[10px] font-mono text-[#5a6275] mr-2 group-hover:text-[#0a5cff] transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="w-6 h-px bg-gradient-to-r from-[#0a5cff]/40 to-[#00c2ff]/10 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-[#5a6275] font-mono tracking-wider">
                {locale === "pt" ? "// Cada fase é um ciclo de qualidade" : "// Each phase is a quality cycle"}
              </p>
            </div>
          </div>
        </section>

        {/* ============ VISION ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a5cff]/[0.015] to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="forge-badge mb-6 justify-center">
                {ma?.vision_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f5f7fa] leading-tight">
                {ma?.vision_headline as string}
              </h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-[#0a5cff] to-[#00c2ff] mx-auto" />
              <p className="mt-8 text-base md:text-lg text-[#8b92a5] leading-relaxed max-w-3xl mx-auto">
                {ma?.vision_text as string}
              </p>
            </div>
          </div>
        </section>

        {/* ============ DIFFERENTIATORS ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00c2ff]/5 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-xl mb-16">
              <div className="forge-badge mb-6">
                {ma?.diffs_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                {ma?.diffs_headline as string}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2f3b]/20 rounded-xl overflow-hidden border border-[#2a2f3b]/20">
              {diffsItems.map((item: { title: string; desc: string }, i: number) => (
                <div key={i} className="bg-[#0a0f1e]/60 p-8 hover:bg-[#0a0f1e]/80 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-lg border border-[#2a2f3b] flex items-center justify-center mb-5 group-hover:border-[#0a5cff]/30 transition-colors">
                    <span className="text-sm font-mono text-[#5a6275] group-hover:text-[#0a5cff] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#f5f7fa] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8b92a5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CLOSING ============ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a5cff]/[0.02] to-transparent" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="max-w-3xl">
              <div className="forge-badge mb-8">
                {ma?.closing_badge as string}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa] mb-8">
                {ma?.closing_headline as string}
              </h2>
              <div className="forge-closing-quote mb-10">
                {ma?.closing_text as string}
              </div>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0a5cff] text-white text-sm font-medium hover:bg-[#0045cc] transition-colors"
              >
                {locale === "pt" ? "Iniciar conversa" : "Start a conversation"}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
