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
                    ? "Ao acessar ou utilizar a plataforma FMD Soluções Inteligentes (\"Plataforma\"), você confirma que leu, entendeu e concorda em estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar a Plataforma."
                    : "By accessing or using the FMD Soluções Inteligentes platform (\"Platform\"), you confirm that you have read, understood and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use the Platform."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "2. Definições" : "2. Definitions"}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {isPt ? (
                    <>
                      <li><strong>Plataforma:</strong> Conjunto de software, aplicações, APIs e serviços SaaS fornecidos pela FMD Soluções Inteligentes sob a marca FMD.</li>
                      <li><strong>Usuário:</strong> Pessoa física ou jurídica que utiliza a Plataforma mediante cadastro e assinatura.</li>
                      <li><strong>Assinante:</strong> Cliente que contratou um plano de assinatura da Plataforma.</li>
                      <li><strong>Dados:</strong> Informações inseridas, processadas ou armazenadas pelo Usuário na Plataforma.</li>
                      <li><strong>SaaS:</strong> Software como Serviço, modelo de distribuição de software sob assinatura.</li>
                    </>
                  ) : (
                    <>
                      <li><strong>Platform:</strong> The set of software, applications, APIs and SaaS services provided by FMD Soluções Inteligentes under the FMD brand.</li>
                      <li><strong>User:</strong> Individual or legal entity that uses the Platform through registration and subscription.</li>
                      <li><strong>Subscriber:</strong> Customer who has contracted a Platform subscription plan.</li>
                      <li><strong>Data:</strong> Information inserted, processed or stored by the User on the Platform.</li>
                      <li><strong>SaaS:</strong> Software as a Service, a subscription-based software distribution model.</li>
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
                    ? "Para utilizar a Plataforma, o Usuário deverá criar uma conta fornecendo informações precisas e completas. O Usuário é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorrerem em sua conta. A FMD reserva-se o direito de suspender ou encerrar contas que violem estes Termos."
                    : "To use the Platform, the User must create an account by providing accurate and complete information. The User is responsible for maintaining the confidentiality of their access credentials and for all activities that occur under their account. FMD reserves the right to suspend or terminate accounts that violate these Terms."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "4. Assinatura e Pagamento" : "4. Subscription and Payment"}
                </h2>
                <p>
                  {isPt
                    ? "O acesso a funcionalidades premium da Plataforma requer a contratação de uma assinatura. Os planos, preços e condições de pagamento estão disponíveis no momento da contratação. A FMD poderá alterar seus planos e preços mediante aviso prévio. O cancelamento da assinatura não garante reembolso de valores já pagos, exceto quando previsto em lei."
                    : "Access to premium Platform features requires a subscription. Plans, prices and payment conditions are available at the time of purchase. FMD may change its plans and prices upon prior notice. Subscription cancellation does not guarantee refund of amounts already paid, except as provided by law."}
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
                    ? "A coleta e o tratamento de dados pessoais são regidos pela nossa Política de Privacidade, que integra estes Termos. A FMD emprega medidas técnicas e organizacionais para proteger os dados dos Usuários, incluindo criptografia de ponta a ponta, controle de acesso e auditoria contínua."
                    : "The collection and processing of personal data are governed by our Privacy Policy, which is part of these Terms. FMD employs technical and organizational measures to protect User data, including end-to-end encryption, access control and continuous auditing."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "8. Disponibilidade e Suporte" : "8. Availability and Support"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD se esforça para manter a Plataforma disponível 24/7, mas não garante disponibilidade ininterrupta devido a manutenções programadas ou Eventos de Força Maior. O suporte técnico é fornecido conforme o plano contratado. O SLA (Acordo de Nível de Serviço) é definido no contrato de assinatura."
                    : "FMD strives to keep the Platform available 24/7, but does not guarantee uninterrupted availability due to scheduled maintenance or Force Majeure events. Technical support is provided according to the contracted plan. The SLA (Service Level Agreement) is defined in the subscription contract."}
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
