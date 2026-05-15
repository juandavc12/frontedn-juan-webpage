"use client";

import Link from "next/link";
import "../styles/components/header.scss";
import { useWeather } from "@/context/WeatherContext";
import { useDeviceDateTime } from "@/hooks/useDeviceDateTime";
import { formatDeviceDateTime } from "@/utils/deviceDateTime";

export default function Header() {
  const { weather, loading } = useWeather();
  const now = useDeviceDateTime();

  const temp = weather?.current.temperature_2m;

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__time">
          <span className="header__clock" suppressHydrationWarning>
            {now ? formatDeviceDateTime(now, "header") : "\u00a0"}
          </span>
          {loading ? (
            <span className="header__loading">—</span>
          ) : (
            temp != null && (
              <span className="header__temp">{temp.toFixed(1)}°C</span>
            )
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
