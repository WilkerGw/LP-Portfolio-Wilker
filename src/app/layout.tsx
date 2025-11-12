// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
// 1. Importação do ChatLoader (REMOVIDA)
// import ChatLoader from "@/components/ChatLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilker Martins",
  description: "Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-gradient-to-br from-black via-green-900 to-black text-gray-800`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        {/* 2. Componente ChatLoader (REMOVIDO) */}
        {/* <ChatLoader /> */}

        {/* Tags do Google (sem alterações) */}
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