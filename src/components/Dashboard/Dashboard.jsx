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
import Flash from "../Flash/Flash";

export default function WeatherDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // Efecto para actualizar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize para inicializar el estado con el tamaño actual de la ventana
    handleResize();

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array de dependencias vacío

  return (
    <div className={`min-h-screen text-white relative`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="p-4 space-y-6">
        <Flash />
        <SearchSection />
        {/* <div className="w-full bg-white bg-opacity-10 backdrop-blur h-[300px] rounded-redondeado-grande overflow-hidden ">
          nubes en caso de averlas
        </div> */}
        <CurrentCity />
        <WeeklyForecast />
        <FavoriteCities />
      </main>
      <Footer />
    </div>
  );
}
