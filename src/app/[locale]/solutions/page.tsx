"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { Brain, Cpu, Database, Cog, ArrowRight, CheckCircle } from "lucide-react";

const solutionMeta = [
  { key: "ai", icon: Brain, color: "#0a5cff" },
  { key: "software", icon: Cpu, color: "#00c2ff" },
  { key: "data", icon: Database, color: "#10b981" },
  { key: "automation", icon: Cog, color: "#8b5cf6" },
];

export default function SolutionsPage() {
  const messages = useMessages();
  const locale = useLocale();
  const ms = messages?.solutions as Record<string, unknown> | undefined;

  return (
    <>
      <Header />
      <main>
        {/* ============ HEADER ============ */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 relative z-10 w-full pt-32 pb-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#f5f7fa] leading-[1.05]">
                {ms?.title as string}
              </h1>
              <p className="mt-6 text-lg text-[#8b92a5] max-w-2xl leading-relaxed">
                {ms?.subtitle as string}
              </p>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION SECTIONS ============ */}
        {solutionMeta.map((sol, si) => {
          const Icon = sol.icon;
          const color = sol.color;
          const title = ms?.[sol.key] as string;
          const desc = ms?.[`${sol.key}_desc`] as string;
          const problem = ms?.[`${sol.key}_problem`] as string | undefined;
          const approach = ms?.[`${sol.key}_approach`] as string | undefined;
          const tech = ms?.[`${sol.key}_tech`] as string | undefined;
          const results = ms?.[`${sol.key}_results`] as string | undefined;

          return (
            <section
              key={sol.key}
              className="relative py-28 md:py-36 overflow-hidden"
            >
              <div className="absolute inset-0 forge-grid opacity-20" />
              <div
                className="absolute bottom-0 w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{
                  background: `${color}06`,
                  [si % 2 === 0 ? "right" : "left"]: "-100px",
                }}
              />

              <div className="mx-auto max-w-7xl px-6 relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f5f7fa]"
                    >
                      {title}
                    </h2>
                  </div>
                </div>

                {desc && (
                  <p className="text-sm text-[#8b92a5] leading-relaxed mb-12 max-w-2xl">
                    {desc}
                  </p>
                )}

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  {/* Problem */}
                  {problem && (
                    <div>
                      <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-3">
                        {locale === "pt" ? "Problema" : "Problem"}
                      </div>
                      <p className="text-sm text-[#8b92a5] leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  )}
                  {/* Approach */}
                  {approach && (
                    <div>
                      <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-3">
                        {locale === "pt" ? "Abordagem" : "Approach"}
                      </div>
                      <p className="text-sm text-[#f5f7fa] leading-relaxed font-medium">
                        {approach}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                {tech && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Tecnologias" : "Technologies"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.split(" | ").map((t: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-md"
                          style={{
                            background: `${color}08`,
                            border: `1px solid ${color}20`,
                            color: "#8b92a5",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {results && (
                  <div className="p-6 rounded-lg border border-[#2a2f3b]/30 bg-[#0a0f1e]/40">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Resultados" : "Results"}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {results.split(" | ").map((r: string, i: number) => (
                        <span key={i} className="text-sm text-[#f5f7fa] font-medium">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Divider */}
                {si < solutionMeta.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2f3b] to-transparent" />
                )}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
