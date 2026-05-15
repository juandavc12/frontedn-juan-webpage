import WeatherIntro from "@/components/WeatherIntro";
import WeatherHero from "@/components/WeatherHero";
import HourlyChart from "@/components/HourlyChart";
import DailyForecast from "@/components/DailyForecast";
import QuickStats from "@/components/QuickStats";
import "@/styles/pages/weather.scss";

export default function WeatherPage() {
  return (
    <div className="weather-page">
      <WeatherIntro />

      <div className="weather-page__grid">
        <WeatherHero />
        <HourlyChart />
        <DailyForecast />
        <QuickStats />
      </div>
    </div>
  );
}
