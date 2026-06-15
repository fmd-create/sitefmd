"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMessages, useLocale } from "@/i18n/next-intl-provider";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const messages = useMessages();
  const locale = useLocale();
  const mc = messages?.contact as Record<string, unknown> | undefined;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMsg(json.message);
        form.reset();
      } else {
        setStatus("error");
        setStatusMsg(json.error || (locale === "pt" ? "Erro ao enviar mensagem." : "Error sending message."));
      }
    } catch {
      setStatus("error");
      setStatusMsg(locale === "pt" ? "Erro de conexão. Tente novamente." : "Connection error. Please try again.");
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dense opacity-40" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0a5cff]/5 rounded-full blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0a5cff] uppercase">
              FMD Soluções Inteligentes
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#f5f7fa]">
              {mc?.title as string}
            </h1>
            <p className="mt-4 text-[#8b92a5] max-w-xl">
              {mc?.subtitle as string}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3 rounded-xl border border-[#2a2f3b] bg-[#1a1f2b] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-[#8b92a5] uppercase tracking-wider">
                      {mc?.form_name as string}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-[#2a2f3b] bg-[#050816] px-4 py-3 text-sm text-[#f5f7fa] placeholder-[#5a6275] outline-none transition-all duration-200 focus:border-[#0a5cff] focus:ring-1 focus:ring-[#0a5cff]/20"
                      placeholder={(mc?.form_name as string) || "Nome"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-[#8b92a5] uppercase tracking-wider">
                      {locale === "pt" ? "E-mail" : mc?.form_email as string}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-[#2a2f3b] bg-[#050816] px-4 py-3 text-sm text-[#f5f7fa] placeholder-[#5a6275] outline-none transition-all duration-200 focus:border-[#0a5cff] focus:ring-1 focus:ring-[#0a5cff]/20"
                      placeholder={(mc?.form_email as string) || "Email"}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-xs font-medium text-[#8b92a5] uppercase tracking-wider">
                    {mc?.form_company as string}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-[#2a2f3b] bg-[#050816] px-4 py-3 text-sm text-[#f5f7fa] placeholder-[#5a6275] outline-none transition-all duration-200 focus:border-[#0a5cff] focus:ring-1 focus:ring-[#0a5cff]/20"
                    placeholder={(mc?.form_company as string) || "Empresa"}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-[#8b92a5] uppercase tracking-wider">
                    {mc?.form_message as string}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-[#2a2f3b] bg-[#050816] px-4 py-3 text-sm text-[#f5f7fa] placeholder-[#5a6275] outline-none transition-all duration-200 focus:border-[#0a5cff] focus:ring-1 focus:ring-[#0a5cff]/20"
                    placeholder={(mc?.form_message as string) || "Mensagem"}
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 px-4 py-3">
                    <CheckCircle size={16} className="text-[#10b981]" />
                    <span className="text-sm text-[#10b981]">{statusMsg}</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 px-4 py-3">
                    <AlertCircle size={16} className="text-[#ef4444]" />
                    <span className="text-sm text-[#ef4444]">{statusMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a5cff] px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0045cc] hover:shadow-glow active:scale-[0.97] mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} className={status === "loading" ? "animate-pulse" : ""} />
                  {status === "loading"
                    ? (locale === "pt" ? "Enviando..." : "Sending...")
                    : (mc?.form_send as string)}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-center gap-8">
              <div className="group rounded-xl border border-[#2a2f3b] bg-[#1a1f2b] p-6 transition-all duration-300 hover:border-[#0a5cff]/30 hover:shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a5cff]/10">
                  <Mail size={18} className="text-[#0a5cff]" />
                </div>
                <h3 className="font-primary text-sm font-semibold text-[#f5f7fa] mb-1">
                  {mc?.email_label as string}
                </h3>
                <a
                  href="mailto:contato@fmdsoluccoesinteligentes.com.br"
                  className="text-sm text-[#8b92a5] transition-colors hover:text-[#0a5cff]"
                >
                  contato@fmdsoluccoesinteligentes.com.br
                </a>
              </div>
              <div className="group rounded-xl border border-[#2a2f3b] bg-[#1a1f2b] p-6 transition-all duration-300 hover:border-[#0a5cff]/30 hover:shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a5cff]/10">
                  <Linkedin size={18} className="text-[#0a5cff]" />
                </div>
                <h3 className="font-primary text-sm font-semibold text-[#f5f7fa] mb-1">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/fmdottori/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-[#8b92a5] transition-colors hover:text-[#0a5cff]"
                >
                  Flávia Dottori
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="group rounded-xl border border-[#2a2f3b] bg-[#1a1f2b] p-6 transition-all duration-300 hover:border-[#0a5cff]/30 hover:shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a5cff]/10">
                  <Github size={18} className="text-[#0a5cff]" />
                </div>
                <h3 className="font-primary text-sm font-semibold text-[#f5f7fa] mb-1">
                  GitHub
                </h3>
                <a
                  href="https://github.com/fmd-create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-[#8b92a5] transition-colors hover:text-[#0a5cff]"
                >
                  fmd-create
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
