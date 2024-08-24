"use client";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/SideBard";
import SearchSection from "./Search/Search";
import CurrentCity from "./CurrentCity/Current";
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast";
import FavoriteCities from "./FavoriteCities/FavoriteCities";
import Footer from "./Footer/Foooter";
import { getHour } from "@/lib/utils";
import { gradients } from "@/data/data";

export default function WeatherDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const setHour = () => {
      const hour = getHour();
      setCurrentHour(hour);
    };
    setHour();
  }, [currentHour]);

  // Efecto para actualizar el fondo según la hora
  useEffect(() => {
    const setGradientWithHour = (hour) => {
      return gradients[hour];
    };


    // Actualiza el fondo del body
    const body = document.querySelector('body')
    body.className = setGradientWithHour(currentHour);

    // Limpieza al desmontar (opcional)
    return () => {
      document.body.style.background = ""; // Resetea el fondo al desmontar
    };
  }, [currentHour]);

  return (
    <div className={`min-h-screen text-white relative`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <main className="p-4 space-y-6">
        <SearchSection />
        <div className="w-full bg-white bg-opacity-10 backdrop-blur h-[300px] rounded-redondeado-grande overflow-hidden border-1">
          nubes en caso de averlas
        </div>
        <CurrentCity />
        <WeeklyForecast />
        <FavoriteCities />
      </main>
      <Footer />
    </div>
  );
}
