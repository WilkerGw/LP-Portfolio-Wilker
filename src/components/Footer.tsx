"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Ícones SVG (outline style)
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.092-.646.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.547 1.376.203 2.394.1 2.646.64.699 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const socialLinks = [
  { icon: <GithubIcon />, href: "https://github.com/WilkerGw", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/wilker-martins-22238a370/", label: "LinkedIn" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/dev.wilker", label: "Instagram" },
];

const navLinks = [
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Automação", href: "#automation" },
  { label: "Contato", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/images/logo.png"
                    alt="Wilker Martins Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-white block">Wilker Martins</span>
                  <span className="text-xs text-gray-500">Desenvolvedor Web</span>
                </div>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Criando experiências digitais modernas com React, Next.js e IA Generativa.
                Focado em soluções inovadoras e de alta performance.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-xs font-medium">Disponível para projetos</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Navegação
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & CTA */}
            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Conecte-se
              </h4>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <ArrowUpIcon />
                </span>
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wilker Martins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
