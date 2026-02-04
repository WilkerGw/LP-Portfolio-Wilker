import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-white/5 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Wilker Martins Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Wilker Martins</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Desenvolvedor Full Stack focado em criar soluções digitais inovadoras e de alta performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre Mim", href: "#about" },
                { label: "Projetos", href: "#projects" },
                { label: "Habilidades", href: "#skills" },
                { label: "Contato", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
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
                  className="w-10 h-10 liquid-glass hover:bg-primary hover:text-dark text-gray-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wilker Martins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
