import { WeatherApiResponse } from "@/types/weather";

export async function getWeather(): Promise<WeatherApiResponse> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=11.24&longitude=-74.2&current=temperature_2m,relative_humidity_2m";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener clima");

  const data = await res.json();

  // Current data
  const weather: WeatherApiResponse = {
    latitude: data.latitude,
    longitude: data.longitude,
    timezone: data.timezone,
    current: {
      temperature_2m: data.current.temperature_2m,
      relative_humidity_2m: data.current.relative_humidity_2m,
      time: data.current.time,
    },
  };

  return weather;
}
