'use client';
import { useWeather } from '@/context/WeatherContext';
import "../styles/components/hero.scss";

export default function WeatherHero() {
    const { weather, loading } = useWeather();
    if (loading || !weather) return <p>Loading weather...</p>;

    const { current } = weather;
    const date = new Date(current.time);
    const formattedHour = date.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    const formattedDay = date.toLocaleDateString("es-CO", { day: "2-digit", month: "numeric" });

    return (
        <section className="weather-hero">
            <div className='herp-left'>
                <img src='/icons/sun.svg' alt='Weather' className='hero-icon' />
                <div>
                    <h2>Current Weather</h2>
                    <p>City, Country</p>
                    <h3 className='temp'>{Math.round(current.temperature_2m)}°C</h3>
                    <p className='time'>{formattedHour} | {formattedDay}</p>
                    <p className='conditions'>{current.condition ?? "Despejado"}</p>
                </div>
            </div>
        </section>
    )






}