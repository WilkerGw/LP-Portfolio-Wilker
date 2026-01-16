
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Automation = () => {
  return (
    <section
      id="automation"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/10 mb-8 animate-float">
            <FaWhatsapp className="text-5xl text-green-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Automação de WhatsApp via n8n
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Crio fluxos de automação personalizados utilizando n8n para transformar seu WhatsApp em uma ferramenta poderosa de vendas e atendimento. Desde respostas automáticas inteligentes até integrações complexas com CRM e agendamentos, tudo para otimizar seu tempo e escalabilidade.
          </p>

          <a
            href="#contact"
            className="inline-block py-4 px-8 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
          >
            Falar sobre Automação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Automation;