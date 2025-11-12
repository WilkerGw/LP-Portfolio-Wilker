"use client";

// src/components/ChatLoader.tsx
import dynamic from "next/dynamic";

// Carregamos o AiChat dinamicamente e desativamos a renderização no servidor (ssr: false)
// Isto é permitido porque este é um Client Component
const DynamicAiChat = dynamic(() => import("@/components/AiChat"), {
  ssr: false,
});

const ChatLoader = () => {
  return <DynamicAiChat />;
};

export default ChatLoader;