"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { ArrowRight, Zap, MessageCircle, CheckCircle, ExternalLink } from "lucide-react";

const productIcons: Record<string, typeof Zap> = {
  nyra: Zap,
  nyra_connect: MessageCircle,
};

const productColors: Record<string, string> = {
  nyra: "#0a5cff",
  nyra_connect: "#00c2ff",
};

const nyraScreenshots = [
  { file: "dashboard.png", alt: "Nyra Dashboard" },
  { file: "conversation.png", alt: "Nyra Conversas" },
  { file: "captacao.png", alt: "Nyra Captação" },
  { file: "intelligence.png", alt: "Nyra Intelligence" },
  { file: "panel control.png", alt: "Nyra Painel de Controle" },
  { file: "playground.png", alt: "Nyra Playground" },
];

const nyraConnectScreenshots = [
  "photo_1_2026-09-15_17-00-58.jpg",
  "photo_2_2026-09-15_17-01-00.jpg",
  "photo_3_2026-09-15_17-01-00.jpg",
  "photo_4_2026-09-15_17-01-00.jpg",
  "photo_5_2026-09-15_17-01-00.jpg",
  "photo_6_2026-09-15_17-01-00.jpg",
  "photo_7_2026-09-15_17-01-00.jpg",
  "photo_8_2026-09-15_17-01-00.jpg",
  "photo_9_2026-09-15_17-01-00.jpg",
];

export default function ProductsPage() {
  const messages = useMessages();
  const locale = useLocale();
  const mp = messages?.products as any;

  const productKeys = ["nyra", "nyra_connect"];

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
          const prod = mp?.[key] as any;
          const Icon = productIcons[key] || Zap;
          const color = productColors[key] || "#0a5cff";
          const isLeft = pi % 2 === 0;

          return (
            <section
              key={key}
              id={key}
              className="relative py-20 md:py-24 overflow-hidden"
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
                <div className="grid lg:grid-cols-2 gap-10 mb-12">
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

                {/* Architecture / Modules (Nyra only) */}
                {key === "nyra" && prod?.architecture && (
                  <div className="mb-10 p-6 rounded-lg border border-[#2a2f3b]/50 bg-[#0a0f1e]/40">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Arquitetura" : "Architecture"}
                    </div>
                    <p className="text-sm text-[#f5f7fa] font-mono leading-relaxed">
                      {prod?.architecture as string}
                    </p>
                  </div>
                )}

                {/* Features (Nyra Connect) */}
                {key === "nyra_connect" && prod?.features && (
                  <div className="mb-10">
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-4">
                      {locale === "pt" ? "Funcionalidades" : "Features"}
                    </div>
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

                {/* Nyra-specific: Squad Orchestration Flow */}
                {key === "nyra" && prod?.modules && (
                  <div className="mb-10">
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

                {/* Nyra-specific: Playground */}
                {key === "nyra" && prod?.playground && (
                  <div className="mb-10 p-6 rounded-lg border border-[#0a5cff]/20 bg-[#0a5cff]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a5cff]/10 shrink-0">
                        <span className="text-sm font-bold text-[#0a5cff]">P</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase mb-2">
                          {locale === "pt" ? "Playground" : "Playground"}
                        </div>
                        <p className="text-sm text-[#8b92a5] leading-relaxed">
                          {prod?.playground as string}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Integrations (Nyra only) */}
                {key === "nyra" && prod?.integrations && (
                  <div className="mb-10">
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

                {/* Use Cases */}
                {prod?.use_cases && (
                  <div className="mb-10">
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
                  <div className="mb-10 p-6 rounded-lg border border-[#2a2f3b]/30 bg-[#0a0f1e]/30">
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

                {/* Nyra Connect access button */}
                {key === "nyra_connect" && (
                  <div className="mb-10">
                    <a
                      href="https://app.fmdsoluccoesinteligentes.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-glow active:scale-[0.97]"
                      style={{ backgroundColor: color }}
                    >
                      {locale === "pt" ? "Acessar Nyra Connect" : "Access Nyra Connect"}
                      <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                )}

                {/* Screenshots — Nyra */}
                {key === "nyra" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Demonstração" : "Demo"}
                    </div>
                    <div className="rounded-xl border border-[#2a2f3b]/40 bg-[#0a0f1e]/50 overflow-hidden shadow-2xl">
                      <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <video
                          src="/images/products/nyra/demo.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full"
                          style={{ objectFit: "cover", marginTop: "-4%" }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 text-xs text-[#5a6275]">
                      {mp?.screenshots_subtitle as string}
                    </div>
                  </div>
                )}

                {/* Screenshots — Nyra Connect */}
                {key === "nyra_connect" && (
                  <div>
                    <div className="text-xs font-semibold tracking-[0.15em] text-[#5a6275] uppercase mb-6">
                      {locale === "pt" ? "Capturas de Tela" : "Screenshots"}
                    </div>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                      {nyraConnectScreenshots.map((img) => (
                        <div
                          key={img}
                          className="rounded-lg border border-[#2a2f3b]/40 bg-[#0a0f1e]/50 overflow-hidden group"
                        >
                          <Image
                            src={`/images/products/nyra-connect/${encodeURIComponent(img)}`}
                            alt="Nyra Connect"
                            width={400}
                            height={300}
                            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Divider between products */}
                {pi < productKeys.length - 1 && (
                  <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#2a2f3b] to-transparent" />
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