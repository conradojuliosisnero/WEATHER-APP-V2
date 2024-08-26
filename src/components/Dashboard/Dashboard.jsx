"use client";
import SearchSection from "./Search/Search";
import CurrentCity from "./CurrentCity/Current";
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast";
import FavoriteCities from "./FavoriteCities/FavoriteCities";
import Climate from "../Climate/Climate";

export default function WeatherDashboard() {

  return (
    <div className={`text-white relative overflow-x-hidden`}>
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
