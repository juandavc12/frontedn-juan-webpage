"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getWeather } from "@/data/weather";
import { WeatherApiResponse, WeatherContextType } from "@/types/weather";

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: true,
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
