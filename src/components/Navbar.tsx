"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  interface NavItem {
    label: string;
    href: string;
    submenu?: { label: string; href: string }[];
  }

  const navItems: NavItem[] = [
    {
      href: "#projects",
      label: "Projetos",
      submenu: [
        { label: "Galeria IA", href: "/ai-generativa" },
        { label: "Projetos Web", href: "/projetos" },
      ],
    },
    { href: "#skills", label: "Skills" },
    { href: "#automation", label: "Automação" },
    { href: "#whatsapp-automation", label: "WhatsApp" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl transition-all duration-500 rounded-full px-6 py-3 flex justify-between items-center liquid-glass">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
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
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                  <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="liquid-glass rounded-xl overflow-hidden py-2 backdrop-blur-xl bg-dark/95 border border-white/10 shadow-2xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="https://wa.me/5534993210534"
              target="_blank"
              className="btn-liquid ml-4 px-5 py-2"
            >
              <span className="relative z-10 text-sm">Vamos Conversar</span>
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
          <div className="mx-auto max-w-5xl liquid-glass rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => !item.submenu && setIsOpen(false)}
                    className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium flex justify-between items-center"
                  >
                    {item.label}
                  </Link>
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="pl-4 border-l border-white/10 ml-4 space-y-1 my-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="https://wa.me/5534993210534"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="btn-liquid px-4 py-3 mt-2"
              >
                <span className="relative z-10 font-bold">Vamos Conversar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;