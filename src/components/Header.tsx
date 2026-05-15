"use client";
import Link from "next/link";
import "../styles/components/header.scss";
import { useWeather } from "@/context/WeatherContext";

export default function Header() {
  const { weather, loading } = useWeather();

  if (loading) return <span>Loading weather...</span>;
  if (!weather?.current.time) return null;

  const { temperature_2m: temp, time } = weather.current;
  const date = new Date(time);
  const formattedHour = date.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDay = date.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "numeric",
  });
  
  return (
    <header className="header px-6 py-4 bg-dark border-b border-violet">
      <div className="content">
      <div className="text-neonPurple font-bold text-xs flex flex-col items-center">
          <span>{formattedHour} {formattedDay}</span>
          <span>{temp}°C</span>
      </div>
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
