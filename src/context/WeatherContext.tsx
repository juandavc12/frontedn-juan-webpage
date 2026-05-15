"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getWeather } from "@/data/weather";
import { WeatherApiResponse, WeatherContextType } from "@/types/weather";

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: true,
  refresh: async () => {},
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getWeather();
      setWeather(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <WeatherContext.Provider value={{ weather, loading, refresh }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
