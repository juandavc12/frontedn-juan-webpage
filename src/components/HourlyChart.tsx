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
  const { weather, loading } = useWeather();

  if (loading || !weather?.hourly?.length) {
    return (
      <section className="hourly-chart">
        <h3>Pronóstico por Hora</h3>
        <p>Cargando gráfico...</p>
      </section>
    );
  }

  const hourly = weather.hourly.filter((h) => {
    const hour = parseInt(h.time.slice(11, 13), 10);
    return hour >= 7 && hour <= 19;
  });

  const points = hourly.length > 0 ? hourly : weather.hourly.slice(0, 13);
  const temps = points.map((h) => h.temperature);
  const yMin = Math.floor(Math.min(...temps)) - 1;
  const yMax = Math.ceil(Math.max(...temps)) + 1;

  const data = {
    labels: points.map((h) => h.time.slice(11, 16)),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: temps,
        borderColor: "#a855f7",
        backgroundColor: "rgba(168, 85, 247, 0.12)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#ece3f4",
        pointBorderColor: "#a855f7",
        pointBorderWidth: 2,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(20, 0, 40, 0.92)",
        borderColor: "rgba(168, 85, 247, 0.5)",
        borderWidth: 1,
        titleColor: "#ece3f4",
        bodyColor: "#a855f7",
      },
    },
    scales: {
      y: {
        min: yMin,
        max: yMax,
        grid: {
          color: "rgba(168, 85, 247, 0.12)",
        },
        ticks: {
          color: "rgba(236, 227, 244, 0.65)",
          padding: 8,
          font: { size: 11 },
        },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: "rgba(236, 227, 244, 0.55)",
          maxRotation: 0,
          font: { size: 11 },
        },
        border: { display: false },
      },
    },
  };

  return (
    <section className="hourly-chart">
      <h3>Pronóstico por Hora</h3>
      <div className="hourly-chart__canvas-wrap">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}
