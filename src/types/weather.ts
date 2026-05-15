export interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  time: string;
}

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current: CurrentWeather;
}

export interface WeatherContextType {
  weather: WeatherApiResponse | null;
  loading: boolean;
}
