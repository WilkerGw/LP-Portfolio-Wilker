"use client";

// src/components/Contact.tsx
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Contato</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversar?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tem uma ideia inovadora ou quer transformar seu negócio? Estou pronto para ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-dark-surface border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                  Informações de Contato
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 relative z-10">
                  Estou sempre aberto a novas oportunidades, parcerias e desafios. Entre em contato através dos canais abaixo.
                </p>

                <div className="space-y-8 relative z-10">
                  <a href="mailto:wil.dev@hotmail.com" className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                      <p className="text-lg text-white font-medium group-hover/item:text-primary transition-colors">wil.dev@hotmail.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/5534993210534" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">WhatsApp</p>
                      <p className="text-lg text-white font-medium group-hover/item:text-primary transition-colors">+55 (34) 99321-0534</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover/item:bg-primary group-hover/item:text-dark transition-all duration-300">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Localização</p>
                      <p className="text-lg text-white font-medium group-hover/item:text-primary transition-colors">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                  <p className="text-gray-500 text-sm mb-6">Redes Sociais</p>
                  <div className="flex gap-4">
                    {[
                      { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/wilker-martins-22238a370/", label: "LinkedIn" },
                      { icon: <FaGithub />, href: "https://github.com/WilkerGw", label: "GitHub" },
                      { icon: <FaInstagram />, href: "https://www.instagram.com/dev.wilker", label: "Instagram" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 hover:bg-primary hover:text-dark text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-surface border border-white/5 rounded-3xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark-lighter border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Como devo te chamar?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark-lighter border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark-lighter border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-primary to-secondary text-dark font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
