import WeatherHero from "@/components/WeatherHero";
import HourlyChart from "@/components/HourlyChart";
import DailyForecast from "@/components/DailyForecast";
import QuickStats from "@/components/QuickStats";

export default function WeatherPage() {
  return (
    <main className="weather-page">
      <WeatherHero />
      <div className="content-grid">
        <section className="main-section">
          <HourlyChart />
          <DailyForecast />
        </section>
        <aside className="side-section">
          <QuickStats />
        </aside>
      </div>
    </main>
  );
}
