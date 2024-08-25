import React from "react";
import { Sun, ChevronRight } from "lucide-react";

export default function FavoriteCities() {
  return (
    <section className="rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 p-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-full">Ciudades Favoritas</h2>
      <div className="space-y-4">
        {["Nueva York", "Londres", "Tokio", "Sídney"]
          .slice(0, 3)
          .map((city) => (
            <div
              key={city}
              className="flex items-center justify-between cursor-pointer bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 hover:scale-110 transition-sizes duration-200" 
            >
              <div>
                <h3 className="font-semibold">{city}</h3>
                <span className="text-2xl font-bold">18°C</span>
              </div>
              <div className="flex items-center">
                <Sun className="h-8 w-8 mr-2" />
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
