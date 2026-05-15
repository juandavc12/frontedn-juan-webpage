export interface CurrentWeather {
  temperature_2m: number;
  time: string;
  condition?: string;
}

export interface HourlyPoint {
  time: string;
  temperature: number;
}

export interface DailyPoint {
  date: string;
  min: number;
  max: number;
  condition?: string;
}

export interface QuickStats {
  humidity: number;
  wind_speed: number;
  pressure: number;
  feels_like: number;
  precipitation: number;
}

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current: CurrentWeather;
  hourly: HourlyPoint[];
  daily: DailyPoint[];
  stats: QuickStats;
}

export interface LocationInfo {
  city: string;
  countryCode: string;
}

export interface WeatherContextType {
  weather: WeatherApiResponse | null;
  location: LocationInfo | null;
  loading: boolean;
  refresh: () => Promise<void>;
}
