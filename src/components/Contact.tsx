"use client";

// src/components/Contact.tsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Contato</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Vamos <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8fce34] via-[#0a6435] to-[#003424]">Conversar?</span>
          </h2>

        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-dark-surface border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
              Informações de Contato
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 relative z-10">
              Estou sempre aberto a novas oportunidades, parcerias e desafios. Entre em contato através dos canais abaixo.
            </p>

            <div className="flex gap-6 relative z-10">
              <a href="mailto:wil.dev@hotmail.com" className="flex items-center gap-6 group/item">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <p className="text-lg lg:text-sm text-white font-medium group-hover/item:text-primary transition-colors">wil.dev@hotmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/5534993210534" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/item">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">WhatsApp</p>
                  <p className="text-lg lg:text-sm text-white font-medium group-hover/item:text-primary transition-colors">(34) 99321-0534</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group/item">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Localização</p>
                  <p className="text-lg lg:text-sm text-white font-medium group-hover/item:text-primary transition-colors">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
