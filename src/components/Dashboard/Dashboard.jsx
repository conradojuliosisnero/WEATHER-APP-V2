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

  function getGradientWithHour(hour) {
    return gradients[hour];
  }

  useEffect(() => {
    const hour = getHour();
    setCurrentHour(hour);
  }, [currentHour]);

  return (
    <div
      className={`min-h-screen ${getGradientWithHour(
        currentHour
      )} text-white relative`}
    >
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="p-4 space-y-6">
        <SearchSection />
        {/* <div className="w-full bg-white h-[300px] rounded-redondeado-grande"></div> */}
        <CurrentCity />
        <WeeklyForecast />
        <FavoriteCities />
      </main>
      <Footer />
    </div>
  );
}
