import { WeatherApiResponse } from "@/types/weather";

export async function getWeather(): Promise<WeatherApiResponse> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=11.24&longitude=-74.2" +
    "&current=temperature_2m,relative_humidity_2m" +
    "&hourly=temperature_2m" +
    "&daily=temperature_2m_max,temperature_2m_min";

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
      time: data.current.time,
      condition: "Despejado",
    },
    hourly:
      data.hourly?.time?.map((t: string, i: number) => ({
        time: t,
        temperature: data.hourly.temperature_2m[i],
      })) ?? [],
    daily:
      data.daily?.time?.map((t: string, i: number) => ({
      date: t,
      min: data.daily.temperature_2m_min[i],
      max: data.daily.temperature_2m_max[i],
      condition: "Soleado",
    })) ?? [],
    stats: {
      humidity: data.current.relative_humidity_2m ?? 65,
      wind_speed: 18,
      pressure: 1012,
      feels_like: data.current.temperature_2m + 1,
    },
  };

  return weather;
}