"use client";
import Image from "next/image";
import "../styles/components/hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <Image
          src="/juan.PNG"
          alt="Juan"
          width={400}
          height={400}
          className="hero-img"
          priority
        />
      </div>
      <div className="hero-right">
        <h1>Hola, soy Juan</h1>
        <h2>Gadgets Interactivos</h2>
        <button>Explora funcional dades</button>
      </div>
    </section>
  );
}
