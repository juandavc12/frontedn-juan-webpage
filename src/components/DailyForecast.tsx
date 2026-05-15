"use client";
import { useWeather } from "@/context/WeatherContext";
import "../styles/components/forecast.scss";

export default function DailyForecast() {
  const { weather } = useWeather();
  if (!weather?.daily) return null;

  return (
    <section className="daily-forecast">
      <h3 className="text-neonPurple font-semibold mb-3">Pronóstico de 5 Días</h3>
      <div className="forecast-grid">
        {weather.daily.slice(0, 5).map((d) => (
          <div key={d.date} className="forecast-card">
            <p className="date">{new Date(d.date).toLocaleDateString("es-CO", { weekday: "long" })}</p>
            <img src="/icons/sun-cloud.svg" alt={d.condition} className="icon" />
            <p className="temp">{d.max}° / {d.min}°</p>
          </div>
        ))}
      </div>
    </section>
  );
}
