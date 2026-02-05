import React from "react";

// Ícones SVG personalizados (outline style)
const WhatsAppIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const features = [
  {
    icon: <ChatBubbleIcon />,
    title: "Respostas Automáticas",
    description: "Atendimento 24/7 com mensagens inteligentes e personalizadas.",
  },
  {
    icon: <CalendarIcon />,
    title: "Agendamentos",
    description: "Integração com calendários para marcar reuniões automaticamente.",
  },
  {
    icon: <BoltIcon />,
    title: "Fluxos Personalizados",
    description: "Automações sob medida para as necessidades do seu negócio.",
  },
];

const Automation = () => {
  return (
    <section
      id="automation"
      className="section-base py-20 md:py-28"
    >
      {/* Background Elements */}
      <div className="section-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-medium">Powered by n8n</span>
          </div>

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 mb-8 text-green-400 animate-float">
            <WhatsAppIcon />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Automação de <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">WhatsApp</span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Transforme seu WhatsApp em uma ferramenta poderosa de vendas e atendimento com fluxos inteligentes e automatizados.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="liquid-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="liquid-glass rounded-2xl p-8 inline-block">
            <p className="text-gray-400 mb-4">
              Quer automatizar seu atendimento?
            </p>
            <a
              href="https://wa.me/5534993210534?text=Olá! Gostaria de saber mais sobre automação de WhatsApp com n8n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-3 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group"
            >
              <WhatsAppIcon />
              Falar sobre Automação
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;