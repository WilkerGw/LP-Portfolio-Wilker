"use client";

// src/components/Contact.tsx
import React from "react";

// Ícones SVG personalizados (outline style) para harmonizar com o design
const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const contactItems = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "wil.dev@hotmail.com",
    href: "mailto:wil.dev@hotmail.com",
    action: "Enviar email",
    isExternal: false,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "(34) 99321-0534",
    href: "https://wa.me/5534993210534",
    action: "Iniciar conversa",
    isExternal: true,
  },
  {
    icon: <LocationIcon />,
    label: "Localização",
    value: "São Paulo, SP",
    href: null,
    action: null,
    isExternal: false,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-base py-20 md:py-28"
    >
      {/* Background Elements */}
      <div className="section-grid" />
      <div className="section-glow-primary" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-xs font-medium">Disponível para projetos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Vamos <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Conversar?</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades, parcerias e desafios.
            Entre em contato e vamos transformar sua ideia em realidade.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto animate-slide-up delay-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="liquid-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Label */}
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  {item.label}
                </p>

                {/* Value */}
                <p className="text-white font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>

                {/* Action Button */}
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300 group/link"
                  >
                    <span>{item.action}</span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      <ArrowIcon />
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Brasil
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="liquid-glass rounded-2xl p-8 inline-block">
              <p className="text-gray-400 mb-4">
                Prefere uma conversa rápida?
              </p>
              <a
                href="https://wa.me/5534993210534?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid px-8 py-3 inline-flex items-center gap-3 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <WhatsAppIcon />
                  Chamar no WhatsApp
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
