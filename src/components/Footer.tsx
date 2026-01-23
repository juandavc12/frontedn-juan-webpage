"use client";
import Link from "next/link";
import "../styles/components/footer.scss";

export default function Footer() {
  return (
    <footer className="footer bg-dark border-t border-violet px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Juan – Experiencias Interactivas
      </p>
      <nav className="flex gap-4 mt-2 md:mt-0">
        <Link href="https://github.com/tuusuario" target="_blank" className="text-violet hover:text-neonPurple">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/tuusuario" target="_blank" className="text-violet hover:text-neonPurple">
          LinkedIn
        </Link>
        <Link href="https://twitter.com/tuusuario" target="_blank" className="text-violet hover:text-neonPurple">
          Twitter
        </Link>
      </nav>
    </footer>
  );
}