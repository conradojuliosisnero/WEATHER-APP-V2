"use client";
import { useEffect, useState } from "react";
import SearchSection from "./Search/Search";
import CurrentCity from "./CurrentCity/Current";
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast";
import FavoriteCities from "./FavoriteCities/FavoriteCities";
import { getHour } from "@/lib/utils";
import { gradients } from "@/data/data";
import Climate from "../Climate/Climate";

export default function WeatherDashboard() {
  const [currentHour, setCurrentHour] = useState(0);

  // Efecto para actualizar la hora
  useEffect(() => {
    const setHour = () => {
      const hour = getHour();
      setCurrentHour(hour);
    };
    setHour();
  }, []);

  // Efecto para actualizar el fondo según la hora
  useEffect(() => {
    const setGradientWithHour = (hour) => {
      return gradients[hour];
    };

    // Actualiza el fondo del body
    const body = document.querySelector("body");
    body.className = setGradientWithHour(currentHour);
  }, [currentHour]);

  return (
    <div className={`min-h-screen text-white relative overflow-x-hidden`}>
      <main className="p-4 space-y-6 border-b-1 mx-3">
        <SearchSection />
        <Climate />
        <div className="sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-3">
          <CurrentCity />
          <WeeklyForecast />
          <FavoriteCities />
        </div>
      </main>
    </div>
  );
}
