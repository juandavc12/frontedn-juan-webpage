"use client";

import { useWeather } from "@/context/WeatherContext";
import "../styles/components/stats.scss";

export default function QuickStats() {
  const { weather, loading, refresh } = useWeather();

  if (loading || !weather?.stats) {
    return (
      <aside className="quick-stats">
        <h4>Datos Rápidos</h4>
        <p>Cargando...</p>
      </aside>
    );
  }

  const s = weather.stats;

  return (
    <aside className="quick-stats">
      <h4>Datos Rápidos</h4>
      <ul className="stats-list">
        <li>
          <span className="stat-label">
            <span className="stat-icon stat-icon--humidity" aria-hidden>
              💧
            </span>
            Humedad
          </span>
          <strong>{s.humidity}%</strong>
        </li>
        <li>
          <span className="stat-label">
            <span className="stat-icon" aria-hidden>
              🌬
            </span>
            Viento
          </span>
          <strong>{s.wind_speed} km/h</strong>
        </li>
        <li>
          <span className="stat-label">
            <span className="stat-icon" aria-hidden>
              📊
            </span>
            Presión
          </span>
          <strong>{s.pressure} hPa</strong>
        </li>
      </ul>
      <div className="stats-actions">
        <button type="button" className="primary" onClick={() => void refresh()}>
          Actualizar
        </button>
        <button type="button" className="outline">
          Cambiar
        </button>
      </div>
    </aside>
  );
}
