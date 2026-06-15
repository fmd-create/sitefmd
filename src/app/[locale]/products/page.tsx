"use client";

import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { ArrowRight, Zap, Globe, BarChart3, Layers, CheckCircle } from "lucide-react";

const productIcons: Record<string, typeof Zap> = {
  nyra: Zap,
  inmora: Globe,
  opportunity_engine: BarChart3,
  intelligent_squads: Layers,
};

const productColors: Record<string, string> = {
  nyra: "#0a5cff",
  inmora: "#10b981",
  opportunity_engine: "#8b5cf6",
  intelligent_squads: "#f59e0b",
};

const nyraScreenshots = [
  { file: "dashboard.png", alt: "Nyra Dashboard" },
  { file: "conversation.png", alt: "Nyra Conversas" },
  { file: "captacao.png", alt: "Nyra Captação" },
  { file: "intelligence.png", alt: "Nyra Intelligence" },
  { file: "panel control.png", alt: "Nyra Painel de Controle" },
  { file: "playground.png", alt: "Nyra Playground" },
];

const oeScreenshots = ["kpis.jpg", "ranking.jpg", "trends.jpg", "map.jpg"];

export default function ProductsPage() {
  const messages = useMessages();
  const locale = useLocale();
  const mp = messages?.products as Record<string, unknown> | undefined;

  const productKeys = ["nyra", "inmora", "opportunity_engine", "intelligent_squads"];

  return (
    <>
      <Header />
      <main>
        {/* ============ HEADER ============ */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 forge-grid" />
          <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 relative z-10 w-full pt-32 pb-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#f5f7fa] leading-[1.05]">
                {mp?.title as string}
              </h1>
              <p className="mt-6 text-lg text-[#8b92a5] max-w-2xl leading-relaxed">
                {mp?.subtitle as string}
              </p>
            </div>
          </div>
        </section>

        {/* ============ PRODUCT DETAIL SECTIONS ============ */}
        {productKeys.map((key, pi) => {
          const prod = mp?.[key] as Record<string, unknown> | undefined;
          const Icon = productIcons[key] || Zap;
          const color = productColors[key] || "#0a5cff";
          const isLeft = pi % 2 === 0;

          return (
            <section
              key={key}
              className="relative py-28 md:py-36 overflow-hidden"
            >
              <div className="absolute inset-0 forge-grid opacity-30" />
              <div
                className="absolute top-0 w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{
                  background: `${color}08`,
                  [isLeft ? "right" : "left"]: "-100px",
                }}
              />

              <div className="mx-auto max-w-7xl px-6 relative">
                {/* Product Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-semibold tracking-tight"
                      style={{ color: "#f5f7fa" }}
                    >
                      {prod?.name as string}
                    </h2>
                    <p className="text-sm font-medium" style={{ color }}>
                      {prod?.tagline as string}
                    </p>
                  </div>
                </div>

                {/* Problem / Solution */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-3">
                      {locale === "pt" ? "Problema" : "Problem"}
                    </div>
                    <p className="text-sm text-[#8b92a5] leading-relaxed">
                      {prod?.problem as string}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-3">
                      {locale === "pt" ? "Solução" : "Solution"}
                    </div>
                    <p className="text-sm text-[#f5f7fa] leading-relaxed font-medium">
                      {prod?.solution as string}
                    </p>
                  </div>
                </div>

                {/* Architecture / Modules */}
                {prod?.architecture && (
                  <div className="mb-16 p-6 rounded-lg border border-[#2a2f3b]/50 bg-[#0a0f1e]/40">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Arquitetura" : "Architecture"}
                    </div>
                    <p className="text-sm text-[#f5f7fa] font-mono leading-relaxed">
                      {prod?.architecture as string}
                    </p>
                  </div>
                )}

                {/* Nyra-specific: Squad Orchestration Flow */}
                {key === "nyra" && prod?.modules && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Squads em Orquestração" : "Squads in Orchestration"}
                    </div>
                    <div className="relative overflow-x-auto pb-4">
                      <div className="flex items-center gap-0 min-w-max">
                        {(prod.modules as string).split(" | ").map((mod: string, i: number) => (
                          <div key={i} className="flex items-center">
                            <div
                              className="forge-node whitespace-nowrap text-[10px] md:text-[11px]"
                              style={{
                                borderColor: i === 0 || i === 9 ? `${color}50` : `${color}25`,
                                background: i === 0 || i === 9 ? `${color}12` : `${color}06`,
                              }}
                            >
                              <span className="text-[8px] font-mono mr-1.5 opacity-40">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {mod}
                            </div>
                            {i < (prod.modules as string).split(" | ").length - 1 && (
                              <div className="w-4 md:w-6 h-px bg-gradient-to-r from-[#0a5cff]/40 to-[#00c2ff]/10 mx-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Modules or Features (non-Nyra) */}
                {key !== "nyra" && prod?.modules && (
                  <div className="mb-16">
                    <div className="flex flex-wrap gap-2">
                      {(prod.modules as string).split(" | ").map((mod: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full border"
                          style={{
                            borderColor: `${color}30`,
                            background: `${color}08`,
                            color: "#f5f7fa",
                          }}
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {prod?.features && (
                  <div className="mb-16">
                    <div className="flex flex-wrap gap-2">
                      {(prod.features as string).split(" | ").map((feat: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full border"
                          style={{
                            borderColor: `${color}30`,
                            background: `${color}08`,
                            color: "#f5f7fa",
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                {prod?.use_cases && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Casos de Uso" : "Use Cases"}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {(prod.use_cases as string).split(" | ").map((uc: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#8b92a5]">
                          <CheckCircle size={12} style={{ color }} />
                          {uc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {prod?.results && (
                  <div className="mb-16 p-6 rounded-lg border border-[#2a2f3b]/30 bg-[#0a0f1e]/30">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Resultados" : "Results"}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {(prod.results as string).split(" | ").map((r: string, i: number) => (
                        <span key={i} className="text-sm text-[#f5f7fa] font-medium">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specialties (IS) / Datasets (OE) / Integrations (Nyra) */}
                {prod?.specialties && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Especialidades" : "Specialties"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(prod.specialties as string).split(" | ").map((s: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-[#1a1f2b] text-[#8b92a5]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {prod?.datasets && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Fontes de Dados" : "Data Sources"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(prod.datasets as string).split(" | ").map((ds: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-[#1a1f2b] text-[#8b92a5]">
                          {ds}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Elasticity (IS specific) */}
                {prod?.elasticity && (
                  <div className="mb-16 p-6 rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/40">
                    <p className="text-sm text-[#8b92a5] leading-relaxed italic">
                      &ldquo;{prod?.elasticity as string}&rdquo;
                    </p>
                  </div>
                )}

                {/* Model / Flow for IS */}
                {prod?.model && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Fluxo do Squad" : "Squad Flow"}
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      {(prod.model as string).split(" → ").map((m: string, i: number) => (
                        <div key={i} className="flex items-center">
                          <span
                            className="text-xs px-2.5 py-1.5 rounded-md font-medium"
                            style={{
                              background: `${color}10`,
                              color: "#f5f7fa",
                              border: `1px solid ${color}25`,
                            }}
                          >
                            {m}
                          </span>
                          {i < (prod.model as string).split(" → ").length - 1 && (
                            <ArrowRight size={12} className="mx-1 text-[#2a2f3b]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integrations */}
                {prod?.integrations && (
                  <div className="mb-16">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Integrações" : "Integrations"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(prod.integrations as string).split(" | ").map((int: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-[#1a1f2b] text-[#8b92a5]">
                          {int}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots — Nyra */}
                {key === "nyra" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Interface" : "Interface"}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {nyraScreenshots.map((img) => (
                        <div
                          key={img.file}
                          className="group relative overflow-hidden rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/50"
                        >
                          <Image
                            src={`/images/products/nyra/${encodeURIComponent(img.file)}`}
                            alt={img.alt}
                            width={600}
                            height={380}
                            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                            <span className="text-xs font-medium text-white">{img.alt}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Opportunity Engine screenshots */}
                {key === "opportunity_engine" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Visualizações" : "Visualizations"}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {oeScreenshots.map((img) => (
                        <div
                          key={img}
                          className="rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/50 overflow-hidden group"
                        >
                          <Image
                            src={`/images/products/opportunity-engine/${encodeURIComponent(img)}`}
                            alt="Opportunity Engine"
                            width={600}
                            height={380}
                            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* IS Dashboard */}
                {key === "intelligent_squads" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Dashboard" : "Dashboard"}
                    </div>
                    <div className="rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/50 overflow-hidden">
                      <Image
                        src="/images/products/intelligent-squads/dashboard.png"
                        alt="Intelligent Squads"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* InMora video */}
                {key === "inmora" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Demonstração" : "Demo"}
                    </div>
                    <div className="rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/50 overflow-hidden">
                      <video
                        src="/images/products/inmora/demo.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                        style={{ opacity: 0.9 }}
                      />
                    </div>
                  </div>
                )}

                {/* Divider between products */}
                {pi < productKeys.length - 1 && (
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
