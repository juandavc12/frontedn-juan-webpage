"use client";
import { useWeather } from "@/context/WeatherContext";
import "../styles/components/stats.scss";

export default function QuickStats() {
  const { weather } = useWeather();
  if (!weather?.stats) return null;

  const s = weather.stats;
  return (
    <aside className="quick-stats">
      <h4>Datos Rápidos</h4>
      <div className="stats-grid">
        <div><span>Humedad</span><strong>{s.humidity}%</strong></div>
        <div><span>Viento</span><strong>{s.wind_speed} km/h</strong></div>
        <div><span>Presión</span><strong>{s.pressure} hPa</strong></div>
        <div><span>Sensación</span><strong>{s.feels_like}°C</strong></div>
      </div>
      <div className="stats-actions">
        <button>Actualizar</button>
        <button className="outline">Cambiar</button>
      </div>
    </aside>
  );
}
