"use client";

import Link from "next/link";
import "../styles/components/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">
        © {new Date().getFullYear()} Juan – Experiencias Interactivas
      </p>
      <nav className="footer__nav">
        <Link href="https://github.com/tuusuario" target="_blank" rel="noreferrer">
          Github
        </Link>
        <Link href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
          Linkedin
        </Link>
        <Link href="https://twitter.com/tuusuario" target="_blank" rel="noreferrer">
          Twitter
        </Link>
      </nav>
    </footer>
  );
}
