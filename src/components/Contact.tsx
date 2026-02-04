"use client";

// src/components/Contact.tsx
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full liquid-glass mb-6">
            <span className="text-gray-300 text-sm font-bold tracking-wider uppercase">Contato</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Vamos <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8fce34] via-[#0a6435] to-[#003424]">Conversar?</span>
          </h2>

        </div>

        <div className="max-w-4xl mx-auto animate-slide-up delay-200">
          {/* Contact Info */}
          <div className="liquid-glass rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" />

            <div className="text-center mb-10 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Informações de Contato
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Estou sempre aberto a novas oportunidades, parcerias e desafios. Entre em contato através dos canais abaixo.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 relative z-10">
              <a href="mailto:wil.dev@hotmail.com" className="flex items-center gap-4 group/item w-full md:w-auto p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <p className="text-lg md:text-base text-white font-medium group-hover/item:text-primary transition-colors">wil.dev@hotmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/5534993210534" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item w-full md:w-auto p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">WhatsApp</p>
                  <p className="text-lg md:text-base text-white font-medium group-hover/item:text-primary transition-colors">(34) 99321-0534</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group/item w-full md:w-auto p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Localização</p>
                  <p className="text-lg md:text-base text-white font-medium group-hover/item:text-primary transition-colors">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </section >
  );
};

export default Contact;
