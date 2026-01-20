"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#automation", label: "Automação" },
    { href: "#whatsapp-automation", label: "WhatsApp" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl transition-all duration-500 rounded-2xl px-6 py-3 flex justify-between items-center bg-dark/80 backdrop-blur-xl border border-white/5 shadow-2xl shadow-primary/5">
          {/* Logo */}
          <Link href="#" className="flex items-center group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Wilker Martins Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
              </Link>
            ))}
            <Link
              href="https://wa.me/5534993210534"
              target="_blank"
              className="ml-4 px-5 py-2 bg-white/5 hover:bg-white/10 text-white font-medium text-sm rounded-xl border border-white/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Vamos Conversar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 px-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-2" : "opacity-0 translate-y-[-10px] pointer-events-none"
            }`}
        >
          <div className="mx-auto max-w-5xl bg-dark-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/5561992592289"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors font-bold text-center mt-2"
              >
                Vamos Conversar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;