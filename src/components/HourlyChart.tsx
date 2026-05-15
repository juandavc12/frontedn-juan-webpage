"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useWeather } from "@/context/WeatherContext";
import "../styles/components/chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function HourlyChart() {
  const { weather } = useWeather();
  if (!weather?.hourly) return null;

  const data = {
    labels: weather.hourly.map((h) => h.time.slice(11, 16)),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: weather.hourly.map((h) => h.temperature),
        borderColor: "#a855f7",
        backgroundColor: "rgba(168,85,247,0.3)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#a855f7",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: { ticks: { color: "#ece3f4" } },
      x: { ticks: { color: "#ece3f4" } },
    },
  };

  return (
    <section className="hourly-chart">
      <h3 className="text-neonPurple font-semibold mb-3">Pronóstico por Hora</h3>
      <Line data={data} options={options} />
    </section>
  );
}
