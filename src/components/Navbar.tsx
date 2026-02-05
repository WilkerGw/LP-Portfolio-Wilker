"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Ícones SVG inline (outline style)
const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    submenu?: { label: string; href: string; icon?: React.ReactNode; desc?: string }[];
  }

  const navItems: NavItem[] = [
    {
      href: "#projects",
      label: "Projetos",
      icon: <CodeIcon />,
      submenu: [
        { label: "Galeria IA", href: "/ai-generativa", icon: <SparklesIcon />, desc: "Conteúdo gerado por IA" },
        { label: "Projetos Web", href: "/projetos", icon: <CodeIcon />, desc: "Aplicações modernas" },
      ],
    },
    { href: "#skills", label: "Skills", icon: <SparklesIcon /> },
    { href: "#automation", label: "Automação", icon: <BoltIcon /> },
    { href: "#contact", label: "Contato", icon: <ChatIcon /> },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === "/") {
      // Na página inicial, faz scroll suave para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Em outras páginas, navega para a home
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl transition-all duration-500 rounded-full px-6 py-3 flex justify-between items-center liquid-glass">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Wilker Martins Logo"
                fill
                className="object-contain"
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-500 group-hover:text-primary transition-colors">{item.icon}</span>
                  {item.label}
                  {item.submenu && (
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                  <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="liquid-glass rounded-xl overflow-hidden py-2 backdrop-blur-xl bg-dark/95 border border-white/10 shadow-2xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-start gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors group/item"
                        >
                          <span className="text-gray-500 group-hover/item:text-primary transition-colors mt-0.5">{subItem.icon}</span>
                          <div>
                            <span className="text-sm font-medium block">{subItem.label}</span>
                            {subItem.desc && <span className="text-xs text-gray-500">{subItem.desc}</span>}
                          </div>
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
              className="btn-liquid ml-4 px-5 py-2 group"
            >
              <span className="relative z-10 text-sm flex items-center gap-2">
                Vamos Conversar
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
              ? "bg-primary/20 border-primary/30 text-primary"
              : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
              } border`}
            aria-label="Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-center items-center">
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 px-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-2" : "opacity-0 translate-y-[-10px] pointer-events-none"
            }`}
        >
          <div className="mx-auto max-w-5xl liquid-glass rounded-2xl p-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => !item.submenu && setIsOpen(false)}
                    className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium flex items-center gap-3"
                  >
                    <span className="text-gray-500">{item.icon}</span>
                    {item.label}
                  </Link>
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="pl-4 border-l border-white/10 ml-6 space-y-1 my-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <span className="text-gray-500">{subItem.icon}</span>
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
                className="btn-liquid px-4 py-3 mt-2 group"
              >
                <span className="relative z-10 font-bold flex items-center justify-center gap-2">
                  Vamos Conversar
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;