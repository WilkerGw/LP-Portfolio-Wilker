// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const sora = Sora({ subsets: ["latin"], variable: '--font-sora' });

export const metadata: Metadata = {
  title: "Wilker Martins | Desenvolvedor Web & Automação",
  description: "Portfólio de Wilker Martins - Especialista em Desenvolvimento Web e Automação com n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-dark text-gray-100 selection:bg-primary selection:text-white`}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-dark/20 via-dark to-dark pointer-events-none" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Tags do Google */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3VK34NTQYF"
        ></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3VK34NTQYF');
          `}
        </Script>
      </body>
    </html>
  );
}