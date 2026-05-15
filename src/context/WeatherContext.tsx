"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getWeather } from "@/data/weather";
import { getLocationFromCoords } from "@/data/location";
import {
  LocationInfo,
  WeatherApiResponse,
  WeatherContextType,
} from "@/types/weather";

const BOGOTA = { lat: 4.711, lon: -74.072 };

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  location: null,
  loading: true,
  refresh: async () => {},
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);
  const [location, setLocation] = useState<LocationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const coordsRef = useRef(BOGOTA);

  const loadForCoords = useCallback(async (lat: number, lon: number) => {
    coordsRef.current = { lat, lon };
    setLoading(true);
    try {
      const [weatherData, locationData] = await Promise.all([
        getWeather(lat, lon),
        getLocationFromCoords(lat, lon).catch(() => null),
      ]);
      setWeather(weatherData);
      setLocation(locationData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      void loadForCoords(BOGOTA.lat, BOGOTA.lon);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        void loadForCoords(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        void loadForCoords(BOGOTA.lat, BOGOTA.lon);
      }
    );
  }, [loadForCoords]);

  const refresh = useCallback(async () => {
    const { lat, lon } = coordsRef.current;
    await loadForCoords(lat, lon);
  }, [loadForCoords]);

  return (
    <WeatherContext.Provider value={{ weather, location, loading, refresh }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
