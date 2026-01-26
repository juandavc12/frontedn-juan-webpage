"use client";
import Link from "next/link";
import "../styles/components/header.scss";

export default function Header() {
  return (
    <header className="header px-6 py-4 bg-dark border-b border-violet">
      <div className="content">
      <h1 className="text-neonPurple font-bold text-xl">
        <Link href="/">
          Juan
        </Link>
      </h1>
      <nav className="flex gap-6 text-violet">
        <Link href="/">Inicio</Link>
        <Link href="/gadgets">Gadgets</Link>
        <Link href="/sobre-mi">Sobre mí</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      </div>
    </header>
  );
}
