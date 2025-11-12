// src/app/api/chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { trainingContext } from "@/lib/context"; // A nossa "memória"
import { NextResponse } from "next/server";

// Inicializa o cliente do Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export const runtime = "edge";

// A "Personalidade" da nossa IA (sem alterações)
const systemPrompt = `
Você é o "WilkerBot", um assistente de IA profissional e prestativo para Wilker Martins, um Desenvolvedor Web.
Sua principal função é responder a potenciais clientes ou recrutadores com base, ESTREITA E ESTRITAMENTE, no contexto fornecido.

CONTEXTO:
${trainingContext}
---

REGRAS:
1.  **SEMPRE** baseie suas respostas **APENAS** nas informações do CONTEXTO.
2.  **NUNCA** invente informações que não estejam no CONTEXTO (como habilidades, projetos ou experiências que não estão listados).
3.  Se a pergunta for sobre algo fora do contexto (ex: "Qual a previsão do tempo?"), responda educadamente que você só pode fornecer informações sobre o Wilker Martins.
4.  Seja amigável, profissional e direto ao ponto.
5.  Ao responder a clientes, foque nos projetos relevantes (Landing Pages, E-commerce, ERP).
6.  Ao responder a recrutadores, foque nas habilidades (React, Next.js, TypeScript, Python) e na experiência profissional.
7.  Mantenha as respostas concisas (2-3 frases curtas).
`;

export async function POST(req: Request) {
  try {
    // @ts-ignore
    const { messages } = await req.json();

    // Prepara o modelo Gemini
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt,
    });

    // Pega a última mensagem do utilizador (a que vamos responder)
    const lastUserMessage = messages[messages.length - 1];

    // Pega o histórico (todas as mensagens ANTES da última)
    const historyFromClient = messages.slice(0, -1);

    // Converte para o formato do Google
    let history = historyFromClient.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // --- INÍCIO DA CORREÇÃO ---
    // A API do Gemini exige que o histórico comece com 'user'.
    // A nossa primeira mensagem é o "Olá!" do assistente ('model').
    // Vamos simplesmente remover a primeira mensagem se ela for do 'model'.
    if (history.length > 0 && history[0].role === "model") {
      history.shift(); // .shift() remove o primeiro item do array
    }
    // --- FIM DA CORREÇÃO ---

    // Inicia o chat com o histórico (agora corrigido)
    const chat = model.startChat({
      history: history,
    });

    // Envia a última mensagem e AGUARDA a resposta completa
    // @ts-ignore
    const result = await chat.sendMessage(lastUserMessage.content);
    const response = result.response;
    const text = response.text();

    // Retorna a resposta completa como JSON
    return NextResponse.json({ role: "assistant", content: text });
  } catch (error) {
    console.error("ERRO NA API DE CHAT:", error); // Isto aparecerá no terminal
    return NextResponse.json(
      // @ts-ignore
      { error: "Ocorreu um erro no servidor.", details: error?.message || error },
      { status: 500 }
    );
  }
}