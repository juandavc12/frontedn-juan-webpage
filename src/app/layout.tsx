import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";     // Tailwind v4 base
import "../styles/global.scss";     // Sass personalizado

import Header from "../components/Header";
import Footer from "../components/Footer";
import { WeatherProvider } from "@/context/WeatherContext";

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
      <body className="flex flex-col min-h-screen bg-dark text-white font-sans tracking-wide">
        <WeatherProvider>
          <Header />
          <main className="grow px-6 py-10">{children}</main>
          <Footer />
        </WeatherProvider>
      </body>
    </html>
  );
}