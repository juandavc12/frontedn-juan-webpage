import WeatherHero from "@/components/WeatherHero";
import HourlyChart from "@/components/HourlyChart";
import DailyForecast from "@/components/DailyForecast";
import QuickStats from "@/components/QuickStats";
import "@/styles/pages/weather.scss";

export default function WeatherPage() {
  return (
    <div className="weather-page">
      <header className="weather-page__intro">
        <h1>Clima Actual</h1>
        <p>Consulta el clima actual en Santa Marta, CO</p>
      </header>

      <div className="weather-page__grid">
        <WeatherHero />
        <HourlyChart />
        <DailyForecast />
        <QuickStats />
      </div>
    </div>
  );
}
