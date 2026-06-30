"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLocale } from "@/i18n/next-intl-provider";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadePage() {
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
              {isPt ? "Política de Privacidade" : "Privacy Policy"}
            </h1>
            <p className="mt-2 text-sm text-[#5a6275]">
              {isPt ? `Última atualização: ${lastUpdate}` : `Last updated: June 15, 2026`}
            </p>

            <div className="mt-12 space-y-8 text-sm leading-relaxed text-[#8b92a5]">
              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "1. Introdução" : "1. Introduction"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD Soluções Inteligentes (\"FMD\", \"nós\", \"nosso\") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais dos Usuários da nossa Plataforma SaaS, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)."
                    : "FMD Soluções Inteligentes (\"FMD\", \"we\", \"our\") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store and protect the personal information of Users of our SaaS Platform, in compliance with the Brazilian General Data Protection Law (LGPD - Law No. 13,709/2018)."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "2. Dados que Coletamos" : "2. Data We Collect"}
                </h2>
                <p className="mb-3">
                  {isPt ? "Podemos coletar as seguintes categorias de dados pessoais:" : "We may collect the following categories of personal data:"}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {isPt ? (
                    <>
                      <li><strong>Dados de identificação:</strong> Nome completo, CPF/CNPJ, cargo, empresa.</li>
                      <li><strong>Dados de contato:</strong> E-mail, telefone, endereço profissional.</li>
                      <li><strong>Dados de acesso:</strong> Endereço IP, agente do usuário, logs de acesso, páginas visitadas.</li>
                      <li><strong>Dados de uso:</strong> Funcionalidades utilizadas, tempo de sessão, interações com a Plataforma.</li>
                      <li><strong>Dados de pagamento:</strong> Informações de faturamento (processadas por provedor de pagamento terceirizado).</li>
                    </>
                  ) : (
                    <>
                      <li><strong>Identification data:</strong> Full name, CPF/CNPJ (Brazilian ID), position, company.</li>
                      <li><strong>Contact data:</strong> Email, phone, professional address.</li>
                      <li><strong>Access data:</strong> IP address, user agent, access logs, visited pages.</li>
                      <li><strong>Usage data:</strong> Features used, session time, Platform interactions.</li>
                      <li><strong>Payment data:</strong> Billing information (processed by third-party payment provider).</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "3. Base Legal para o Tratamento" : "3. Legal Basis for Processing"}
                </h2>
                <p>
                  {isPt
                    ? "Tratamos seus dados pessoais com base nas seguintes hipóteses legais previstas na LGPD: (a) execução de contrato — para fornecer os serviços contratados; (b) consentimento — quando você autoriza o tratamento para finalidades específicas; (c) legítimo interesse — para melhorar nossos serviços e garantir a segurança da Plataforma; (d) obrigação legal — quando exigido por lei."
                    : "We process your personal data based on the following legal bases under the LGPD: (a) contract performance — to provide the contracted services; (b) consent — when you authorize processing for specific purposes; (c) legitimate interest — to improve our services and ensure Platform security; (d) legal obligation — when required by law."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "4. Como Usamos seus Dados" : "4. How We Use Your Data"}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {isPt ? (
                    <>
                      <li>Fornecer, manter e melhorar a Plataforma e seus serviços.</li>
                      <li>Processar transações e gerenciar assinaturas.</li>
                      <li>Comunicar atualizações, novidades e informações relevantes sobre a Plataforma.</li>
                      <li>Garantir a segurança e integridade da Plataforma.</li>
                      <li>Cumprir obrigações legais e regulatórias.</li>
                    </>
                  ) : (
                    <>
                      <li>Provide, maintain and improve the Platform and its services.</li>
                      <li>Process transactions and manage subscriptions.</li>
                      <li>Communicate updates, news and relevant information about the Platform.</li>
                      <li>Ensure the security and integrity of the Platform.</li>
                      <li>Comply with legal and regulatory obligations.</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "5. Compartilhamento de Dados" : "5. Data Sharing"}
                </h2>
                <p>
                  {isPt
                    ? "A FMD não vende dados pessoais dos Usuários. Podemos compartilhar dados com: (a) provedores de infraestrutura em nuvem (Azure); (b) processadores de pagamento; (c) autoridades competentes quando exigido por lei. Todos os terceiros com quem compartilhamos dados são obrigados a manter padrões de segurança compatíveis com esta Política."
                    : "FMD does not sell Users' personal data. We may share data with: (a) cloud infrastructure providers (Azure); (b) payment processors; (c) competent authorities when required by law. All third parties with whom we share data are required to maintain security standards compatible with this Policy."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "6. Segurança dos Dados" : "6. Data Security"}
                </h2>
                <p>
                  {isPt
                    ? "Empregamos medidas técnicas e organizacionais para proteger seus dados pessoais, incluindo: criptografia AES-256 em repouso e TLS 1.3 em trânsito, controle de acesso baseado em papéis (RBAC), monitoramento contínuo de segurança, backups criptografados e testes regulares de penetração. Nossa infraestrutura está hospedada em data centers certificados da Microsoft Azure."
                    : "We employ technical and organizational measures to protect your personal data, including: AES-256 encryption at rest and TLS 1.3 in transit, role-based access control (RBAC), continuous security monitoring, encrypted backups and regular penetration testing. Our infrastructure is hosted in Microsoft Azure certified data centers."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "7. Retenção e Eliminação" : "7. Retention and Deletion"}
                </h2>
                <p>
                  {isPt
                    ? "Mantemos seus dados pessoais pelo período necessário para cumprir as finalidades descritas nesta Política, ou conforme exigido por lei. Após o término da relação contratual, os dados serão eliminados em até 90 dias, salvo se houver obrigação legal de retenção."
                    : "We retain your personal data for the period necessary to fulfill the purposes described in this Policy, or as required by law. After the end of the contractual relationship, data will be deleted within 90 days, unless there is a legal obligation to retain it."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "8. Seus Direitos (LGPD)" : "8. Your Rights (LGPD)"}
                </h2>
                <p className="mb-3">
                  {isPt ? "Nos termos da LGPD, você tem direito a:" : "Under the LGPD, you have the right to:"}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {isPt ? (
                    <>
                      <li>Confirmação da existência de tratamento de seus dados.</li>
                      <li>Acesso aos seus dados pessoais.</li>
                      <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                      <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
                      <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                      <li>Eliminação dos dados tratados com seu consentimento.</li>
                      <li>Revogação do consentimento a qualquer momento.</li>
                    </>
                  ) : (
                    <>
                      <li>Confirmation of the existence of data processing.</li>
                      <li>Access to your personal data.</li>
                      <li>Correction of incomplete, inaccurate or outdated data.</li>
                      <li>Anonymization, blocking or deletion of unnecessary or non-compliant data.</li>
                      <li>Data portability to another service provider.</li>
                      <li>Deletion of data processed with your consent.</li>
                      <li>Revocation of consent at any time.</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "9. Cookies e Tecnologias Similares" : "9. Cookies and Similar Technologies"}
                </h2>
                <p>
                  {isPt
                    ? "Utilizamos cookies e tecnologias similares para melhorar a experiência do Usuário, analisar o uso da Plataforma e garantir sua segurança. Você pode gerenciar as preferências de cookies através das configurações do seu navegador. Cookies essenciais para o funcionamento da Plataforma não podem ser desativados."
                    : "We use cookies and similar technologies to improve the User experience, analyze Platform usage and ensure its security. You can manage cookie preferences through your browser settings. Essential cookies for Platform operation cannot be disabled."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "10. Dados de Menores" : "10. Children's Data"}
                </h2>
                <p>
                  {isPt
                    ? "A Plataforma não é destinada a menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores. Se tomarmos conhecimento de que dados de um menor foram coletados sem consentimento parental, adotaremos medidas para eliminar tais informações."
                    : "The Platform is not intended for individuals under 18 years of age. We do not intentionally collect personal data from minors. If we become aware that data from a minor has been collected without parental consent, we will take steps to delete such information."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "11. Alterações nesta Política" : "11. Changes to this Policy"}
                </h2>
                <p>
                  {isPt
                    ? "Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos os Usuários sobre alterações significativas através da Plataforma ou por e-mail. Recomendamos que você revise esta Política regularmente."
                    : "This Privacy Policy may be updated periodically. We will notify Users of significant changes through the Platform or by email. We recommend that you review this Policy regularly."}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#f5f7fa] mb-3">
                  {isPt ? "12. Encarregado de Proteção de Dados (DPO)" : "12. Data Protection Officer (DPO)"}
                </h2>
                <p>
                  {isPt
                    ? "Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato com nosso Encarregado de Proteção de Dados:"
                    : "To exercise your rights or clarify questions about this Policy, contact our Data Protection Officer:"}
                </p>
                <p className="mt-2">
                  <strong>E-mail:</strong> contato@fmdsoluccoesinteligentes.com.br<br />
                  <strong>{isPt ? "Endereço:" : "Address:"}</strong> {isPt ? "São Paulo, SP, Brasil" : "São Paulo, SP, Brazil"}
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
