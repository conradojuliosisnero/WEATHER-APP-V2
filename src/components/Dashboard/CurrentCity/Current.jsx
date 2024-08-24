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
    <section className="backdrop-blur-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 h-5 w-5" /> Cartagena de Indias
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-8xl font-bold">22°</p>
          <p className="text-md font-bold">Despejado</p>
        </div>
        {/* <Cloud className="h-16 w-16" /> */}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center font-bold bg-white bg-opacity-10 rounded-full p-2">
          <Thermometer className="mr-2 h-4 w-4" /> 24°C
        </div>
        <div className="flex items-center font-bold bg-white bg-opacity-10 rounded-full p-2">
          <Wind className="mr-2 h-4 w-4" />
          10 km/h
        </div>
        <div className="flex items-center font-bold bg-white bg-opacity-10 rounded-full p-2">
          <Droplets className="mr-2 h-4 w-4" />
          65%
        </div>
        <div className="flex items-center font-bold bg-white bg-opacity-10 rounded-full p-2">
          <CloudRain className="mr-2 h-4 w-4" />
          0%
        </div>
      </div>
    </section>
  );
}
