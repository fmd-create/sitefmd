"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLocale, useMessages } from "@/i18n/next-intl-provider";
import { ArrowRight, Server, Lock, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { ParticleBackground } from "@/components/effects/particles";
import { ConnectingLines } from "@/components/effects/connecting-lines";
import dynamic from "next/dynamic";

const NeuralParticles = dynamic(
  () => import("@/components/effects/neural-particles").then((m) => m.NeuralParticles),
  { ssr: false, loading: () => <div className="aspect-[6/5] w-full bg-[#050816] rounded-xl" /> }
);

const products = [
  {
    key: "nyra",
    color: "#0A5CFF",
    bgGradient: "from-[#0A5CFF]/20 via-transparent to-transparent",
    icon: "/images/products/icons/nyra.svg",
    mockup: "/images/products/nyra/dashboard.png",
    screenshots: 9,
  },
  {
    key: "inmora",
    color: "#10B981",
    bgGradient: "from-[#10B981]/20 via-transparent to-transparent",
    icon: "/images/products/icons/inmora.svg",
    mockup: null,
  },
  {
    key: "opportunity_engine",
    color: "#8B5CF6",
    bgGradient: "from-[#8B5CF6]/20 via-transparent to-transparent",
    icon: "/images/products/icons/oe.svg",
    mockup: null,
  },
  {
    key: "intelligent_squads",
    color: "#F59E0B",
    bgGradient: "from-[#F59E0B]/20 via-transparent to-transparent",
    icon: "/images/products/icons/is.svg",
    mockup: null,
  },
] as const;

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
      style={{ opacity: 0, transform: "translateY(40px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const locale = useLocale();
  const messages = useMessages();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll("[data-parallax-speed]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * speed;
        (el as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ParticleBackground />
      <ConnectingLines />
      <Header />
      <main>
        {/* ═══════════════════════════════════════════
            HERO — SPLIT SCREEN
            Left:  message + CTA
            Right: Nyra dashboard mockup (real product)
           ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-dense opacity-40" />
          <div
            className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-[#0a5cff]/5 rounded-full blur-[140px] glow-pulse"
            data-parallax-speed="-0.08"
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00c2ff]/5 rounded-full blur-[120px] glow-pulse"
            data-parallax-speed="0.06"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
            <div className="pt-24 pb-16 max-w-3xl mx-auto text-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-[#2a2f3b] bg-[#1a1f2b]/50 px-4 py-1.5 backdrop-blur-sm mb-8"
                  style={{ animation: "slide-up 0.6s ease-out 0s forwards", opacity: 0 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a5cff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a5cff]" />
                  </span>
                  <span className="text-xs font-medium text-[#8b92a5] tracking-wider">
                    {(messages.home as any).hero.badge}
                  </span>
                </div>

                <h1
                  className="font-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
                  style={{ animation: "slide-up 0.6s ease-out 0.1s forwards", opacity: 0 }}
                >
                  <span className="text-[#f5f7fa]">{(messages.home as any).hero.headline_line1}</span>
                  <br />
                  <span className="gradient-text-glow">{(messages.home as any).hero.headline_accent}</span>
                  <br />
                  <span className="text-[#f5f7fa]">{(messages.home as any).hero.headline_line2}</span>
                </h1>

                <p
                  className="mt-6 text-base sm:text-lg text-[#8b92a5] leading-relaxed max-w-2xl mx-auto"
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
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#0a5cff] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0045cc] hover:shadow-glow active:scale-[0.97]"
                  >
                    {(messages.home as any).hero.cta_primary}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={`/${locale}/products`}
                    className="group inline-flex items-center gap-2 rounded-xl border border-[#2a2f3b] bg-[#1a1f2b]/80 px-7 py-3.5 text-sm font-medium text-[#f5f7fa] transition-all duration-200 hover:border-[#3a4a6b] hover:bg-[#1a1f2b]"
                  >
                    {(messages.home as any).hero.cta_secondary}
                  </Link>
                </div>

                <div
                  className="mt-12 flex items-center gap-8 flex-wrap justify-center"
                  style={{ animation: "slide-up 0.6s ease-out 0.4s forwards", opacity: 0 }}
                >
                  <div>
                    <span className="font-primary text-2xl font-bold gradient-text">4</span>
                    <p className="text-xs text-[#5a6275] mt-0.5">{(messages.home as any).hero.metric_platforms_label}</p>
                  </div>
                  <div className="w-px h-10 bg-[#2a2f3b]" />
                  <div>
                    <span className="font-primary text-2xl font-bold gradient-text">+20</span>
                    <p className="text-xs text-[#5a6275] mt-0.5">{(messages.home as any).hero.metric_techs_label}</p>
                  </div>
                  <div className="w-px h-10 bg-[#2a2f3b]" />
                  <div>
                    <span className="font-primary text-2xl font-bold gradient-text">100%</span>
                    <p className="text-xs text-[#5a6275] mt-0.5">{(messages.home as any).hero.metric_engineering_label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] text-[#5a6275] uppercase tracking-[0.2em] font-medium">
              {(messages.home as any).hero.scroll}
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-[#0a5cff] to-transparent animate-pulse-slow" />
            <div className="w-1 h-1 rounded-full bg-[#0a5cff] animate-ping absolute bottom-1" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            QUEM SOMOS — Manifesto + Forge Philosophy
           ═══════════════════════════════════════════ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-glow" />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                    {(messages.home as any).about.badge}
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa] max-w-xl">
                    {(messages.home as any).about.headline}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#8b92a5] max-w-lg">
                    {(messages.home as any).about.paragraph1}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5a6275] max-w-lg">
                    {(messages.home as any).about.paragraph2}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a5cff] to-[#00c2ff]">
                      <span className="text-sm font-bold text-white">F</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#f5f7fa]">{(messages.home as any).about.forge_label}</p>
                      <p className="text-xs text-[#5a6275]">{(messages.home as any).about.forge_subtitle}</p>
                      <p className="mt-3 text-xs leading-relaxed text-[#5a6275]/70 max-w-sm">
                        {(messages.home as any).about.forge_description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 relative">
                  <div className="relative rounded-xl border border-[#2a2f3b] overflow-hidden bg-[#050816] max-h-[400px]">
                    <NeuralParticles />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NOSSOS PRODUTOS — Identidade visual própria
           ═══════════════════════════════════════════ */}
        <section className="relative py-28 md:py-36">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                  {(messages.home as any).products.badge}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                  {(messages.home as any).products.headline}
                </h2>
                <p className="mt-3 text-[#8b92a5]">
                  {(messages.home as any).products.subtitle}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 md:grid-cols-2">
              {products.map((prod, i) => (
                <RevealOnScroll key={prod.key} className="group">
                  <div
                    className={`relative overflow-hidden rounded-xl border border-[#2a2f3b] bg-[#0a0f1e]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}
                    style={{ borderColor: "transparent", "--hover-border": prod.color } as React.CSSProperties}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br"
                      style={{ background: `linear-gradient(135deg, ${prod.color}08, transparent)` }}
                    />

                    <div className="relative z-10 p-8 md:p-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <Image
                            src={prod.icon}
                            alt=""
                            width={48}
                            height={48}
                            className="mb-4"
                          />
                          <h3 className="font-primary text-2xl font-semibold text-[#f5f7fa] tracking-tight">
                            {((messages.products as any)[prod.key] as any).name}
                          </h3>
                          <p className="mt-1 text-sm font-medium" style={{ color: prod.color }}>
                            {((messages.products as any)[prod.key] as any).tagline}
                          </p>
                          <p className="mt-4 text-sm leading-relaxed text-[#8b92a5] max-w-sm">
                            {((messages.products as any)[prod.key] as any).description}
                          </p>
                        </div>
                      </div>

                      {prod.key === "nyra" && (
                        <div className="mt-8 rounded-lg border border-[#2a2f3b] overflow-hidden bg-[#050816]/50 group-hover:border-[#0a5cff]/30 transition-colors duration-500">
                          <div className="relative" style={{ paddingBottom: "62.5%" }}>
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
                      )}

                      {prod.key === "inmora" && (
                        <div className="mt-8 rounded-lg border border-[#2a2f3b] overflow-hidden bg-[#050816]/50">
                          <video
                            src="/images/products/inmora/demo.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto"
                            style={{ opacity: 0.85 }}
                          />
                        </div>
                      )}
                      {prod.key === "opportunity_engine" && (
                        <div className="mt-8 rounded-lg border border-[#2a2f3b] overflow-hidden bg-[#050816]/50">
                          <Image
                            src="/images/products/opportunity-engine/kpis.jpg"
                            alt="Opportunity Engine KPIs"
                            width={600}
                            height={380}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      {prod.key === "intelligent_squads" && (
                        <div className="mt-8 rounded-lg border border-[#2a2f3b] overflow-hidden bg-[#050816]/50">
                          <Image
                            src="/images/products/intelligent-squads/dashboard.png"
                            alt="Intelligent Squads"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </div>

                    <div
                      className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, ${prod.color}00, ${prod.color}40, ${prod.color}00)` }}
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ARQUITETURA — Cloud-Native. Segura. Escalável.
           ═══════════════════════════════════════════ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                  {(messages.home as any).methodology.badge}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                  {(messages.home as any).methodology.headline}
                </h2>
                <p className="mt-3 text-[#8b92a5]">
                  {(messages.home as any).methodology.subtitle}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Server,
                  title: "Cloud-Native",
                  desc: "Infraestrutura 100% em nuvem com escalabilidade horizontal, deploys automatizados e alta disponibilidade. Sua plataforma opera com a mesma robustez das big techs.",
                  tags: ["AWS", "Azure", "Kubernetes", "Docker"]
                },
                {
                  icon: Lock,
                  title: "Criptografia de Ponta a Ponta",
                  desc: "Dados protegidos em trânsito e em repouso com criptografia AES-256. Certificação SSL/TLS, isolamento por inquilino e conformidade com as mais rigorosas normas de segurança.",
                  tags: ["AES-256", "SSL/TLS", "LGPD", "ISO 27001"]
                },
                {
                  icon: Zap,
                  title: "Pronta para Escalar",
                  desc: "Arquitetura modular baseada em microsserviços que cresce com seu negócio. Cada módulo escala independentemente — sem reescritas, sem interrupções, sem limites artificiais.",
                  tags: ["Microsserviços", "Elasticidade", "Alta performance"]
                }
              ].map((pillar) => (
                <RevealOnScroll key={pillar.title}>
                  <div className="group relative overflow-hidden rounded-xl border border-[#2a2f3b] bg-[#0a0f1e]/50 p-8 md:p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[#0a5cff]/30">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#0a5cff]/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a5cff]/20 to-[#00c2ff]/10 border border-[#2a2f3b] group-hover:border-[#0a5cff]/30 transition-colors">
                        <pillar.icon size={24} className="text-[#0a5cff]" />
                      </div>
                      <h3 className="mt-5 font-primary text-xl font-semibold text-[#f5f7fa] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#8b92a5]">
                        {pillar.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {pillar.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center rounded-full border border-[#2a2f3b] bg-[#1a1f2b]/50 px-3 py-1 text-xs text-[#5a6275] group-hover:text-[#8b92a5] transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#0a5cff]/40 to-transparent" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ENGENHARIA — Prova técnica visual
           ═══════════════════════════════════════════ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                    {(messages.home as any).engineering.badge}
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                    {(messages.home as any).engineering.headline}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#8b92a5]">
                    {(messages.home as any).engineering.paragraph}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {(messages.home as any).engineering.items.map((item: string) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#8b92a5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0a5cff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#0a5cff]/10 via-transparent to-[#00c2ff]/5 rounded-2xl blur-2xl" />
                  <div className="relative rounded-xl border border-[#2a2f3b] overflow-hidden shadow-2xl bg-[#0a0f1e]">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#2a2f3b]">
                      <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                      <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                      <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                      <span className="ml-3 text-xs text-[#5a6275] font-mono">Nyra — Intelligence</span>
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
            TECNOLOGIAS — Logos reais das marcas
           ═══════════════════════════════════════════ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-glow-right" />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="mx-auto max-w-7xl px-6 relative">
            <RevealOnScroll>
              <div className="max-w-xl mb-16">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                    {(messages.home as any).tech.badge}
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                    {(messages.home as any).tech.headline}
                  </h2>
                  <p className="mt-3 text-[#8b92a5]">
                    {(messages.home as any).tech.subtitle}
                  </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "Azure", slug: "azure", local: true },
                  { name: "Next.js", slug: "nextdotjs" },
                  { name: "Python", slug: "python" },
                  { name: "OpenAI", slug: "openai", local: true },
                  { name: "Anthropic", slug: "anthropic" },
                  { name: "Supabase", slug: "supabase" },
                  { name: "Docker", slug: "docker" },
                  { name: "PostgreSQL", slug: "postgresql" },
                  { name: "Evolution API", slug: "evolution-api", local: true, ext: "png" },
                  { name: "NVIDIA", slug: "nvidia" },
                  { name: "Nemotron", slug: "nemotron" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="group rounded-xl border border-[#2a2f3b] bg-[#1a1f2b] p-6 card-hover text-center"
                  >
                    <div className="mx-auto mb-3 h-10 w-10 flex items-center justify-center">
                      {tech.slug === "nemotron" ? (
                        <span className="text-xs font-bold text-[#76B900] font-mono tracking-tight">NEMO</span>
                      ) : tech.local ? (
                        <img
                          src={`/images/tech/${tech.slug}.${tech.ext || "svg"}`}
                          alt={tech.name}
                          className="h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:brightness-150"
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={`https://cdn.simpleicons.org/${tech.slug}`}
                          alt={tech.name}
                          className="h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:brightness-150"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="font-primary text-sm font-semibold text-[#f5f7fa] transition-colors group-hover:text-[#0a5cff]">
                      {tech.name}
                    </p>
                    <p className="text-xs text-[#5a6275] mt-1.5 text-[#5a6275]">&nbsp;</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA FINAL
           ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-28 md:py-36">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className="absolute -right-24 top-1/2 w-96 h-96 bg-[#0a5cff]/5 rounded-full blur-[120px]"
            data-parallax-speed="-0.04"
          />
          <div className="section-divider absolute top-0 left-0 right-0" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <RevealOnScroll>
                <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
                  {(messages.home as any).cta.badge}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
                  {(messages.home as any).cta.headline}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[#8b92a5]">
                  {(messages.home as any).cta.subtitle}
                </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0a5cff] px-8 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0045cc] hover:shadow-glow active:scale-[0.97]"
                >
                  {(messages.home as any).cta.button}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:contato@fmdsoluccoesinteligentes.com.br"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[#2a2f3b] px-8 py-4 text-sm font-medium text-[#f5f7fa] transition-all duration-200 hover:border-[#3a4a6b]"
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


