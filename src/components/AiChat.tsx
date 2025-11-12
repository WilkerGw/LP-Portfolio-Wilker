"use client";

// src/components/AiChat.tsx
import React, { useState, useRef, useEffect } from "react";
// REMOVEMOS: import { useChat } from "ai/react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import Image from "next/image";

// Definimos um tipo para as mensagens
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content:
        "Olá! Eu sou o assistente de IA do Wilker. Como posso ajudar? Está à procura de um freelancer ou a recrutar?",
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Faz o scroll automático para a última mensagem
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Nossa própria função para lidar com o envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    setIsLoading(true);

    // 1. Adiciona a mensagem do utilizador ao estado
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput(""); // Limpa o input

    try {
      // 2. Chama a nossa API (que não é mais stream)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }), // Envia o histórico atualizado
      });

      if (!response.ok) {
        throw new Error("Falha ao obter resposta da IA");
      }

      const data = await response.json(); // Espera a resposta JSON

      // 3. Adiciona a resposta da IA ao estado
      const assistantMessage: Message = {
        id: Date.now().toString() + "-ai",
        role: "assistant",
        content: data.content,
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error(error);
      // Adiciona uma mensagem de erro ao chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString() + "-err",
          role: "assistant",
          content: "Desculpe, algo correu mal. Tente novamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão Flutuante (sem alterações) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 lg:bottom-28 right-8 z-50 bg-gradient-to-r from-green-600 to-green-800 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        aria-label="Abrir chat com assistente IA"
      >
        <FaRobot className="w-6 h-6 text-white" />
      </button>

      {/* Janela do Chat (sem alterações visuais) */}
      <div
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full bg-black/90 backdrop-blur-md rounded-2xl shadow-2xl border border-green-500/30 overflow-hidden">
          {/* Cabeçalho do Chat (sem alterações) */}
          <header className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Wilker Martins Logo"
                  layout="fill"
                  className="rounded-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold">Assistente IA</h3>
                <p className="text-green-400 text-sm">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white"
              aria-label="Fechar chat"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </header>

          {/* Corpo das Mensagens (lendo do nosso 'useState') */}
          <div
            ref={chatContainerRef}
            className="flex-1 p-4 space-y-4 overflow-y-auto"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRobot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-xs ${
                    m.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-white/10 text-white/90"
                  }`}
                  style={{ wordWrap: "break-word" }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start gap-3">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRobot className="w-4 h-4 text-white" />
                </div>
                <div className="p-3 rounded-xl bg-white/10 text-white/90">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input de Mensagem (ligado ao nosso 'useState' e 'handleSubmit') */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-white/20"
          >
            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Ligado ao 'useState'
                placeholder="Pergunte sobre projetos..."
                className="flex-1 p-3 bg-transparent text-white placeholder-white/50 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-3 text-white disabled:text-gray-500 hover:text-green-400 transition-colors"
                disabled={isLoading || !input}
                aria-label="Enviar mensagem"
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AiChat;