"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLocale, useMessages } from "@/i18n/next-intl-provider";
import { ArrowRight, Database, Brain, Target, Workflow, BarChart3, Server, Lock, Zap, MessageCircle, BarChart, Shield, TrendingUp, Users, Layers, Code2, Cpu, Globe, Cloud, Smartphone, Bot, Network, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

function RevealOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

const products = [
  {
    key: "nyra",
    color: "#0A5CFF",
    icon: "/images/products/icons/nyra.svg",
    mockup: "/images/products/nyra/dashboard.png",
    demoVideo: "/images/products/nyra/demo.mp4",
  },
  {
    key: "nyra_connect",
    color: "#14a3a8",
    icon: "/images/products/icons/nyra-connect.svg",
    mockup: null,
  },
] as const;

export default function HomePage() {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <>
      <Header />
      <main>
        {/* ═══════════════════════════════════════════
            HERO
           ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
            <div className="pt-24 pb-16 max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 mb-8"
                style={{ animation: "slide-up 0.6s ease-out 0s forwards", opacity: 0 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-medium text-text-muted tracking-wider">
                  {(messages.home as any).hero.badge}
                </span>
              </div>

              <h1
                className="font-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
                style={{ animation: "slide-up 0.6s ease-out 0.1s forwards", opacity: 0 }}
              >
                <span className="text-white">{(messages.home as any).hero.headline_line1}</span>
                <br />
                <span className="gradient-text">{(messages.home as any).hero.headline_accent}</span>
              </h1>

              <p
                className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto"
                style={{ animation: "slide-up 0.6s ease-out 0.2s forwards", opacity: 0 }}
              >
                {(messages.home as any).hero.subtitle}
              </p>

              <div
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
                style={{ animation: "slide-up 0.6s ease-out 0.3s forwards", opacity: 0 }}
              >
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-glow-blue active:scale-[0.97]"
                >
                  {(messages.home as any).hero.cta_primary}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/${locale}/products`}
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-border-hover"
                >
                  {(messages.home as any).hero.cta_secondary}
                </Link>
              </div>

              <div
                className="mt-12 flex items-center gap-8 flex-wrap justify-center"
                style={{ animation: "slide-up 0.6s ease-out 0.4s forwards", opacity: 0 }}
              >
                <div>
                  <span className="font-primary text-2xl font-bold gradient-text">2</span>
                  <p className="text-xs text-text-subtle mt-0.5">{(messages.home as any).hero.metric_platforms_label}</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <span className="font-primary text-2xl font-bold gradient-text">+20</span>
                  <p className="text-xs text-text-subtle mt-0.5">{(messages.home as any).hero.metric_techs_label}</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <span className="font-primary text-2xl font-bold gradient-text">100%</span>
                  <p className="text-xs text-text-subtle mt-0.5">{(messages.home as any).hero.metric_engineering_label}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] text-text-subtle uppercase tracking-wider font-medium">
              {(messages.home as any).hero.scroll}
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent animate-pulse-slow" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            QUEM SOMOS
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-glow" />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="badge">{(messages.home as any).about.badge}</span>
                  <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-xl">
                    {(messages.home as any).about.headline}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-text-muted max-w-lg">
                    {(messages.home as any).about.paragraph1}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-subtle max-w-lg">
                    {(messages.home as any).about.paragraph2}
                  </p>
                  <div className="mt-8 flex items-center gap-4 p-4 rounded-lg bg-teal-muted border border-teal/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-teal-light">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{(messages.home as any).about.forge_label}</p>
                      <p className="text-xs text-teal-light mt-0.5">{(messages.home as any).about.forge_subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-teal/5 rounded-2xl blur-2xl" />
                  <div className="relative rounded-xl border border-border overflow-hidden bg-bg-elevated">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      <span className="w-2.5 h-2.5 rounded-full bg-warning" />
                      <span className="w-2.5 h-2.5 rounded-full bg-success" />
                      <span className="ml-3 text-xs text-text-subtle font-mono">FMD — Forge Philosophy</span>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Construção", desc: "Clean architecture", icon: Code2 },
                          { label: "Refinamento", desc: "Melhoria contínua", icon: Layers },
                          { label: "Precisão", desc: "Intenção cirúrgica", icon: Target },
                          { label: "Evolução", desc: "Adaptação constante", icon: TrendingUp },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.label} className="rounded-lg border border-border bg-bg-card p-4">
                              <Icon size={16} className="text-primary" />
                              <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                              <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PIPELINE
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-2xl mb-16">
                <span className="badge-teal">{(messages.home as any).pipeline.badge}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {(messages.home as any).pipeline.headline}
                </h2>
                <p className="mt-3 text-text-muted">
                  {(messages.home as any).pipeline.subtitle}
                </p>
              </div>
            </RevealOnScroll>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-teal/20 to-transparent hidden lg:block" />
              <div className="grid gap-6 md:grid-cols-5">
                {[
                  { icon: Database, key: "step1", color: "#0A5CFF" },
                  { icon: Brain, key: "step2", color: "#7c3aed" },
                  { icon: Target, key: "step3", color: "#14a3a8" },
                  { icon: Workflow, key: "step4", color: "#10b981" },
                  { icon: BarChart3, key: "step5", color: "#75fb4c" },
                ].map((step, i) => {
                  const Icon = step.icon;
                  const mp = (messages.home as any).pipeline;
                  return (
                    <RevealOnScroll key={step.key}>
                      <div className="card p-6 text-center h-full">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-card">
                          <Icon size={20} style={{ color: step.color }} />
                        </div>
                        <div className="mt-3 text-xs font-mono text-text-subtle">0{i + 1}</div>
                        <h3 className="mt-2 font-primary text-sm font-semibold text-white">
                          {mp[`${step.key}_title`]}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-text-muted">
                          {mp[`${step.key}_desc`]}
                        </p>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NOSSOS PRODUTOS
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                <span className="badge">{(messages.home as any).products.badge}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {(messages.home as any).products.headline}
                </h2>
                <p className="mt-3 text-text-muted">
                  {(messages.home as any).products.subtitle}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 md:grid-cols-2">
              {products.map((prod) => (
                <RevealOnScroll key={prod.key}>
                  <div className="card p-8 md:p-10 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <Image
                          src={prod.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="mb-4 opacity-80"
                        />
                        <h3 className="font-primary text-2xl font-semibold text-white tracking-tight">
                          {((messages.products as any)[prod.key] as any).name}
                        </h3>
                        <p className="mt-1 text-sm font-medium" style={{ color: prod.color }}>
                          {((messages.products as any)[prod.key] as any).tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-text-muted flex-1">
                      {((messages.products as any)[prod.key] as any).description}
                    </p>

                    {prod.key === "nyra" && prod.demoVideo && (
                      <div className="mt-8 rounded-lg border border-border overflow-hidden bg-bg-elevated">
                        <div className="relative" style={{ paddingBottom: "56.25%" }}>
                          <video
                            src={prod.demoVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {prod.key === "nyra_connect" && (
                      <div className="mt-8 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="rounded-lg border border-border overflow-hidden bg-bg-elevated aspect-[4/3]"
                          >
                            <Image
                              src={`/images/products/nyra-connect/photo_${n}_2026-09-15_17-01-00.jpg`}
                              alt={`Nyra Connect screenshot ${n}`}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-border">
                      <Link
                        href={`/${locale}/products#${prod.key}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
                        style={{ color: prod.color }}
                      >
                        {locale === "pt" ? "Detalhes do produto" : "Product details"}
                        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ARQUITETURA
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                <span className="badge-teal">{(messages.home as any).methodology.badge}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {(messages.home as any).methodology.headline}
                </h2>
                <p className="mt-3 text-text-muted">
                  {(messages.home as any).methodology.subtitle}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Server,
                  title: "Arquitetura Modular",
                  desc: "Sistemas projetados em camadas independentes que evoluem separadamente. Cada módulo escala sob demanda sem reescritas.",
                  tags: ["Microsserviços", "Clean Architecture", "Evolução contínua"]
                },
                {
                  icon: Lock,
                  title: "Segurança por Design",
                  desc: "Práticas de segurança incorporadas ao desenvolvimento. Proteção em trânsito e repouso, controle de acesso e conformidade com a LGPD.",
                  tags: ["SSL/TLS", "LGPD", "RBAC"]
                },
                {
                  icon: Zap,
                  title: "Escalabilidade",
                  desc: "Arquitetura preparada para crescimento. Cada módulo escala independentemente — sem interrupções, sem limites artificiais.",
                  tags: ["Microsserviços", "Elasticidade", "Alta performance"]
                }
              ].map((pillar) => (
                <RevealOnScroll key={pillar.title}>
                  <div className="card-teal p-8 md:p-10 text-center h-full">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-primary/10 border border-teal/10">
                      <pillar.icon size={24} className="text-teal-light" />
                    </div>
                    <h3 className="mt-5 font-primary text-xl font-semibold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {pillar.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {pillar.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ENGENHARIA
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-glow-teal" />
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="badge">{(messages.home as any).engineering.badge}</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    {(messages.home as any).engineering.headline}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-text-muted">
                    {(messages.home as any).engineering.paragraph}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {(messages.home as any).engineering.items.map((item: string) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-teal-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/8 via-transparent to-teal/5 rounded-2xl blur-2xl" />
                  <div className="relative rounded-xl border border-border overflow-hidden shadow-elevated bg-bg-elevated">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      <span className="w-2.5 h-2.5 rounded-full bg-warning" />
                      <span className="w-2.5 h-2.5 rounded-full bg-success" />
                      <span className="ml-3 text-xs text-text-subtle font-mono">Nyra — Intelligence</span>
                    </div>
                    <Image
                      src="/images/products/nyra/intelligence.png"
                      alt="Nyra Intelligence"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TECNOLOGIAS
           ═══════════════════════════════════════════ */}
        <section className="relative section-padding overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                  <span className="badge">{(messages.home as any).tech.badge}</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    {(messages.home as any).tech.headline}
                  </h2>
                  <p className="mt-3 text-text-muted">
                    {(messages.home as any).tech.subtitle}
                  </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "Next.js", slug: "nextdotjs" },
                  { name: "Python", slug: "python" },
                  { name: "OpenAI", slug: "openai", local: true },
                  { name: "Anthropic", slug: "anthropic" },
                  { name: "Supabase", slug: "supabase" },
                  { name: "Docker", slug: "docker" },
                  { name: "PostgreSQL", slug: "postgresql" },
                  { name: "Evolution API", slug: "evolution-api", local: true, ext: "png" },
                  { name: "LangChain", slug: "langchain" },
                  { name: "Qdrant", slug: "qdrant" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="card p-5 text-center"
                  >
                    <div className="mx-auto mb-2.5 h-10 w-10 flex items-center justify-center rounded-lg bg-bg-elevated border border-border p-2">
                      {tech.local ? (
                        <img
                          src={`/images/tech/${tech.slug}.${tech.ext || "svg"}`}
                          alt={tech.name}
                          className="h-full w-full object-contain transition-all duration-300 hover:scale-110"
                          style={{ filter: "brightness(0) invert(0.9)" }}
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).style.filter = "none"; }}
                        />
                      ) : (
                        <img
                          src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                          alt={tech.name}
                          className="h-full w-full object-contain transition-all duration-300 hover:scale-110"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="font-primary text-sm font-medium text-text-muted">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA FINAL
           ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden section-padding">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent" />
          <div className="absolute -right-24 top-1/2 w-80 h-80 bg-teal/5 rounded-full blur-[100px]" />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <RevealOnScroll>
                <span className="badge">{(messages.home as any).cta.badge}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {(messages.home as any).cta.headline}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-text-muted">
                  {(messages.home as any).cta.subtitle}
                </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-glow-blue active:scale-[0.97]"
                >
                  {(messages.home as any).cta.button}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:contato@fmdsoluccoesinteligentes.com.br"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-8 py-4 text-sm font-medium text-white transition-all duration-200 hover:border-border-hover"
                >
                  {(messages.home as any).cta.email}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />

      <Script id="schema-org" type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FMD Soluções Inteligentes",
          url: "https://fmdsoluccoesinteligentes.com.br",
          logo: "https://fmdsoluccoesinteligentes.com.br/favicon.ico",
          description:
            "Engenharia de Software, Inteligência Artificial, Dados e Automação. Soluções inteligentes para desafios reais.",
          foundingDate: "2020",
          founder: { "@type": "Person", name: "Flávia Dottori" },
          sameAs: [
            "https://www.linkedin.com/in/fmdottori/",
            "https://github.com/FMD-Intelligent-Solutions",
          ],
          knowsAbout: [
            "Software Engineering",
            "Artificial Intelligence",
            "Data Engineering",
            "Business Automation",
            "Machine Learning",
          ],
        })}
      </Script>
    </>
  );
}