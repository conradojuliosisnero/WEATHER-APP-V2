import React from "react";
import { Sun } from "lucide-react";

export default function WeeklyForecast() {
  return (
    <section className="bg-white text-lluvia-ligera rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Pronóstico Semanal</h2>
      <div className="space-y-4">
        {["Hoy", "Mañana", "Miércoles", "Jueves", "Viernes"].map((day) => (
          <div key={day} className="flex items-center justify-between">
            <span>{day}</span>
            <div className="flex items-center">
              <Sun className="h-5 w-5 mr-2" />
              <span>25°C / 18°C</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
