import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || "contato@fmdsoluccoesinteligentes.com.br";

    const emailContent = `
Nome: ${name}
Email: ${email}
Empresa: ${company || "Não informada"}

Mensagem:
${message}
    `.trim();

    console.log("--- NOVO CONTATO ---");
    console.log(emailContent);
    console.log("--- FIM ---");

    return NextResponse.json({
      success: true,
      message: "Mensagem recebida com sucesso. Entraremos em contato em breve.",
    });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
