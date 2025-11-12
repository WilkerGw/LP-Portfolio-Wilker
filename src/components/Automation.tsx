// src/components/Automation.tsx
import React from "react";
// Importamos ícones relevantes do react-icons
import { FaSitemap, FaBolt, FaSyncAlt } from "react-icons/fa";

const Automation = () => {
  return (
    <section
      id="automation" // ID importante para o link do menu
      className="relative py-20 bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 overflow-hidden"
    >
      {/* Elementos de Fundo (mesmo estilo da secção 'Skills') */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-black via-green-600 to-green-800 bg-clip-text text-transparent animate-slide-up">
            Automação & N8N
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up delay-200">
            {/* Texto Provisório (podes alterar) */}
            Otimizando processos e conectando ferramentas para poupar tempo e
            aumentar a eficiência.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Grelha de Conteúdo */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 animate-slide-up delay-300">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                O que é N8N?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {/* Texto Provisório (podes alterar) */}
                {/* CORREÇÃO AQUI: 'low-code' está agora entre chavetas {} 
                */}
                O N8N é uma ferramenta {'low-code'} de automação de fluxos de
                trabalho. Permite-me conectar diferentes aplicações e serviços
                (APIs, bancos de dados, e-mails) para criar processos
                automáticos de forma visual e eficiente.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Como eu ajudo?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {/* Texto Provisório (podes alterar) */}
                Utilizo o N8N para construir automações personalizadas que
                resolvem problemas de negócio, desde simples notificações até
                integrações complexas que sincronizam dados entre múltiplas
                plataformas.
              </p>
            </div>
          </div>

          {/* Coluna de "Cards" */}
          <div className="space-y-6 animate-slide-up delay-400">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <FaSitemap className="text-4xl text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Fluxos de Trabalho
              </h4>
              <p className="text-gray-600">
                {/* Texto Provisório (podes alterar) */}
                Desenho e implemento fluxos lógicos para automatizar tarefas
                repetitivas.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <FaSyncAlt className="text-4xl text-green-700 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Integração de APIs
              </h4>
              <p className="text-gray-600">
                {/* Texto Provisório (podes alterar) */}
                {/* CORREÇÃO AQUI: 'conversem' está agora entre chavetas {} 
                */}
                Conecto APIs de serviços distintos (Google, CRMs, E-mail) para
                que {'conversem'} entre si.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <FaBolt className="text-4xl text-green-800 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Otimização de Tempo
              </h4>
              <p className="text-gray-600">
                {/* Texto Provisório (podes alterar) */}
                Reduzo o trabalho manual da tua equipa, economizando tempo e
                minimizando erros humanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;