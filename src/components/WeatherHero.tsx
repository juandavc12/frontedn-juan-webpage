"use client";

import { useWeather } from "@/context/WeatherContext";
import "../styles/components/hero.scss";

function formatHeroDatetime(isoTime: string) {
  const date = new Date(isoTime);
  const time = date
    .toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
  const dayMonth = `${date.getDate()}/${date.getMonth() + 1}`;
  return `${time} | ${dayMonth}`;
}

export default function WeatherHero() {
  const { weather, loading } = useWeather();

  if (loading || !weather) {
    return (
      <section className="weather-hero weather-hero--loading">
        <p>Cargando clima...</p>
      </section>
    );
  }

  const { current, stats } = weather;
  const temp = current.temperature_2m.toFixed(1);

  return (
    <section className="weather-hero">
      <p className="weather-hero__datetime">
        {formatHeroDatetime(current.time)}
      </p>

      <div className="weather-hero__main">
        <span className="weather-hero__temp">{temp}°C</span>
        <img
          src="/icons/sun-cloud.svg"
          alt={current.condition ?? "Clima"}
          className="weather-hero__icon"
        />
      </div>

      <p className="weather-hero__condition">
        {current.condition ?? "Despejado"}
      </p>

      <ul className="weather-hero__metrics">
        <li>
          <span>Humedad</span>
          <strong>{stats.humidity}%</strong>
        </li>
        <li>
          <span>Viento</span>
          <strong>{stats.wind_speed} km/h</strong>
        </li>
        <li>
          <span>Precipitación</span>
          <strong>{stats.precipitation} mm</strong>
        </li>
      </ul>
    </section>
  );
}
