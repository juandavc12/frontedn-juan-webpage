"use client";

import Link from "next/link";
import "../styles/components/header.scss";
import { useWeather } from "@/context/WeatherContext";

function formatHeaderTime(isoTime: string) {
  const date = new Date(isoTime);
  const clock = date
    .toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
  const dayMonth = `${date.getDate()}/${date.getMonth() + 1}`;
  return `${clock}, ${dayMonth}`;
}

export default function Header() {
  const { weather, loading } = useWeather();

  const temp = weather?.current.temperature_2m;
  const time = weather?.current.time;

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__time">
          {loading ? (
            <span className="header__loading">...</span>
          ) : (
            <>
              {time && (
                <span className="header__clock">{formatHeaderTime(time)}</span>
              )}
              {temp != null && (
                <span className="header__temp">{temp.toFixed(1)}°C</span>
              )}
            </>
          )}
        </div>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/gadgets">Gadgets</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
