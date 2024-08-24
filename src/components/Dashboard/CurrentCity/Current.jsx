import React from "react";
import {
  Cloud,
  Thermometer,
  Wind,
  Droplets,
  CloudRain,
  MapPin,
} from "lucide-react";

export default function CurrentCity() {
  return (
    <section className="bg-white text-lluvia-ligera rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 h-5 w-5" /> Ciudad Actual
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-5xl font-bold">22°C</p>
          <p className="text-lg">Parcialmente nublado</p>
        </div>
        <Cloud className="h-16 w-16" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Thermometer className="mr-2 h-4 w-4" /> Sensación: 24°C
        </div>
        <div className="flex items-center">
          <Wind className="mr-2 h-4 w-4" /> Viento: 10 km/h
        </div>
        <div className="flex items-center">
          <Droplets className="mr-2 h-4 w-4" /> Humedad: 65%
        </div>
        <div className="flex items-center">
          <CloudRain className="mr-2 h-4 w-4" /> Lluvia: 0%
        </div>
      </div>
    </section>
  );
}
