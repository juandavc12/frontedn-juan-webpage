"use client";

import { useWeather } from "@/context/WeatherContext";
import "../styles/components/forecast.scss";

function formatWeekday(dateStr: string) {
  const day = new Date(dateStr + "T12:00:00").toLocaleDateString("es-CO", {
    weekday: "long",
  });
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export default function DailyForecast() {
  const { weather, loading } = useWeather();

  if (loading || !weather?.daily?.length) {
    return (
      <section className="daily-forecast">
        <h3>Pronóstico de 5 Días</h3>
        <p>Cargando pronóstico...</p>
      </section>
    );
  }

  return (
    <section className="daily-forecast">
      <h3>Pronóstico de 5 Días</h3>
      <div className="forecast-grid">
        {weather.daily.slice(0, 5).map((d) => (
          <article key={d.date} className="forecast-card">
            <p className="date">{formatWeekday(d.date)}</p>
            <img
              src="/icons/sun-cloud.svg"
              alt={d.condition ?? "Clima"}
              className="icon"
            />
            <p className="temps">
              <span className="max">{Math.round(d.max)}°</span>{" "}
              <span className="min">{Math.round(d.min)}°</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
