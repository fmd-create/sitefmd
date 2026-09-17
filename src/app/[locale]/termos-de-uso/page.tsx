"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLocale } from "@/i18n/next-intl-provider";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
  const locale = useLocale();
  const isPt = locale === "pt";
  const lastUpdate = "15 de junho de 2026";

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen py-32">
          <div className="absolute inset-0 bg-grid-dense opacity-20" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0a5cff]/5 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-3xl px-6 relative z-10">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-sm text-[#8b92a5] hover:text-[#f5f7fa] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {isPt ? "Voltar para o início" : "Back to home"}
            </Link>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#f5f7fa]">
              {isPt ? "Termos de Uso" : "Terms of Use"}
            </h1>
            <p className="mt-2 text-sm text-[#5a6275]">
              {isPt ? `Última atualização: ${lastUpdate}` : `Last updated: June 15, 2026`}
            </p>

            <div className="mt-12 space-y-8 text-sm leading-relaxed text-[#8b92a5]">
              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "1. Aceitação dos Termos" : "1. Acceptance of Terms"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD Soluções Inteligentes apresenta produtos e soluções de inteligência comercial e automação. Este site destina-se a informações sobre nossos produtos Nyra e Nyra Connect. Para mais detalhes, acesse /pt/products ou entre em contato pelo e-mail: contato@fmdsoluccoesinteligentes.com.br."
                    : "FMD Soluções Inteligentes presents commercial intelligence and automation products. This site is intended for information about our Nyra and Nyra Connect products. For more details, visit /pt/products or contact us at: contato@fmdsoluccoesinteligentes.com.br."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "2. Definições" : "2. Definitions"}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {isPt ? (
                    <>
                      <li><strong>Plataforma:</strong> Apresentação institucional de produtos e soluções FMD. Acesso gratuito a informações sobre Nyra e Nyra Connect.</li>
                      <li><strong>Usuário:</strong> Pessoa física ou jurídica interessada em produtos Nyra/Nyra Connect.</li>
                      <li><strong>Assinante:</strong> Não aplica - produtos em estágio MVP, acesso mediante cadastro.</li>
                      <li><strong>Dados:</strong> Informações inseridas, processadas ou armazenadas pelo Usuário em cadastro próprio.</li>
                    </>
                  ) : (
                    <>
<li><strong>Platform:</strong> Institutional presentation of FMD products and solutions. Free access to information about Nyra and Nyra Connect.</li>
                      <li><strong>User:</strong> Individual or legal entity interested in Nyra/Nyra Connect products.</li>
                      <li><strong>Subscriber:</strong> Not applicable - MVP stage products, access upon registration.</li>
                      <li><strong>Data:</strong> Information inserted, processed or stored by the User in their own registration.</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "3. Cadastro e Conta" : "3. Registration and Account"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD Soluções Inteligentes desenvolve produtos próprios de inteligência comercial e automação. A NYRA e a NYRA Connect são plataformas em estágio MVP, projetadas para apoiar a descoberta, qualificação e gestão de oportunidades comerciais, bem como atendimento e relacionamento via WhatsApp. O acesso a estas soluções ocorre mediante cadastro prévio e autorização, conforme interesse do usuário."
                    : "FMD Soluções Inteligentes develops own commercial intelligence and automation products. Nyra and Nyra Connect are MVP-stage platforms designed to support commercial opportunity discovery, qualification and management, as well as WhatsApp-based service and relationship. Access to these solutions occurs upon prior registration and user authorization, as per interest."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "4. Assinatura e Pagamento" : "4. Subscription and Payment"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD Soluções Inteligentes disponibiliza informações sobre seus produtos Nyra e Nyra Connect neste site institucional. Não há cobrança de assinatura ou plano de assinatura para acesso ao conteúdo apresentado. Para aquisição das plataformas ou agendamento de demonstração, entre em contato pelo e-mail: contato@fmdsoluccoesinteligentes.com.br."
                    : "FMD Soluções Inteligentes makes information about its Nyra and Nyra Connect products available on this institutional site. There is no subscription fee or subscription plan for accessing the presented content. To purchase the platforms or schedule a demo, contact us at: contato@fmdsoluccoesinteligentes.com.br."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "5. Uso da Plataforma" : "5. Platform Usage"}
                </h2>
                <p>
                  {isPt
                    ? "O Usuário concorda em utilizar a Plataforma apenas para fins legítimos e em conformidade com todas as leis aplicáveis. É proibido: (a) utilizar a Plataforma para atividades ilegais; (b) tentar acessar áreas restritas sem autorização; (c) introduzir malware ou código malicioso; (d) realizar engenharia reversa da Plataforma; (e) compartilhar credenciais de acesso com terceiros não autorizados."
                    : "The User agrees to use the Platform only for legitimate purposes and in compliance with all applicable laws. It is prohibited to: (a) use the Platform for illegal activities; (b) attempt to access restricted areas without authorization; (c) introduce malware or malicious code; (d) reverse engineer the Platform; (e) share access credentials with unauthorized third parties."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "6. Propriedade Intelectual" : "6. Intellectual Property"}
                </h2>
                <p>
                  {isPt
                    ? "A Plataforma, incluindo seu código-fonte, design, logotipos, marcas, nome comercial e conteúdo original, é de propriedade exclusiva da FMD Soluções Inteligentes e protegida por leis de propriedade intelectual. Nenhuma parte da Plataforma pode ser copiada, reproduzida, distribuída ou modificada sem autorização expressa por escrito."
                    : "The Platform, including its source code, design, logos, trademarks, trade name and original content, is the exclusive property of FMD Soluções Inteligentes and protected by intellectual property laws. No part of the Platform may be copied, reproduced, distributed or modified without express written authorization."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "7. Privacidade e Dados" : "7. Privacy and Data"}
                </h2>
                <p>
                  {isPt
                    ? "A coleta e o tratamento de dados pessoais são regidos pela nossa Política de Privacidade, que integra estes Termos. A FMD emprega medidas técnicas e organizacionais para proteger os dados dos Usuários, incluindo controle de acesso e auditoria contínua."
                    : "The collection and processing of personal data are governed by our Privacy Policy, which is part of these Terms. FMD employs technical and organizational measures to protect User data, including access control and continuous auditing."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "8. Disponibilidade e Suporte" : "8. Availability and Support"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD Soluções Inteligentes desenvolve produtos de inteligência comercial em estágio inicial (MVP). A arquitetura dos produtos está em evolução contínua com migração gradual para serviços de nuvem. O suporte ao usuário está disponível pelos canais de contato oficiais."
                    : "FMD Soluções Inteligentes develops commercial intelligence products in initial MVP stage. The product architecture is under continuous evolution with gradual migration to cloud services. User support is available through official contact channels."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "9. Limitação de Responsabilidade" : "9. Limitation of Liability"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso da Plataforma. A responsabilidade total da FMD em relação à Plataforma está limitada ao valor pago pelo Usuário nos 12 meses anteriores ao evento que deu origem à reclamação."
                    : "FMD shall not be liable for indirect, incidental, special or consequential damages arising from the use or inability to use the Platform. FMD's total liability regarding the Platform is limited to the amount paid by the User in the 12 months prior to the event giving rise to the claim."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "10. Alterações nos Termos" : "10. Changes to Terms"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD reserva-se o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor 30 dias após a publicação na Plataforma. O uso continuado da Plataforma após esse período constitui aceitação dos novos Termos."
                    : "FMD reserves the right to modify these Terms at any time. Changes will take effect 30 days after publication on the Platform. Continued use of the Platform after this period constitutes acceptance of the new Terms."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "11. Lei Aplicável" : "11. Applicable Law"}
                </h2>
                <p>
                  {isPt
                    ? "Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da Comarca de São Paulo, SP, com exclusão de qualquer outro."
                    : "These Terms are governed by Brazilian laws. Any dispute shall be resolved in the courts of São Paulo, SP, Brazil, to the exclusion of any other."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "12. Contato" : "12. Contact"}
                </h2>
                <p>
                  {isPt
                    ? "Para dúvidas sobre estes Termos, entre em contato conosco pelo e-mail: contato@fmdsoluccoesinteligentes.com.br"
                    : "For questions about these Terms, contact us at: contato@fmdsoluccoesinteligentes.com.br"}
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-[#2a2f3b]">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 text-sm text-[#0a5cff] hover:text-[#0045cc] transition-colors"
              >
                <ArrowLeft size={14} />
                {isPt ? "Voltar para o início" : "Back to home"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
