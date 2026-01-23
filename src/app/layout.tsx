import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";     // Tailwind v4 base
import "../styles/global.scss";     // Sass personalizado

import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan – Experiencias Interactivas",
  description: "Portafolio de gadgets, diseño y APIs personales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-dark text-white font-sans tracking-wide">

        <Header />
        <main className="flex-grow px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}