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
        <h1>Juan</h1>
        <h2>Interactive Gadgets</h2>
        <button>Explore features</button>
      </div>
    </section>
  );
}
