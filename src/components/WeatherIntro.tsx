"use client";

import { formatLocationLabel } from "@/data/location";
import { useWeather } from "@/context/WeatherContext";

export default function WeatherIntro() {
  const { location, loading } = useWeather();

  const subtitle = loading
    ? "Obteniendo tu ubicación..."
    : location
      ? `Consulta el clima actual en ${formatLocationLabel(location)}`
      : "Consulta el clima actual en tu ubicación";

  return (
    <header className="weather-page__intro">
      <h1>Clima Actual</h1>
      <p>{subtitle}</p>
    </header>
  );
}
