import { Thermometer, Wind, Droplets, CloudRain, MapPin } from "lucide-react";
import { kelvinToCelsius } from "@/lib/utils";
import useUserStore from "@/store/store";

export default function CurrentCity() {
  const { location, currenTimeSearch } = useUserStore();
  console.log(currenTimeSearch);
  const cityName = currenTimeSearch?.location?.name
    ? currenTimeSearch.location.name
    : location && location[0]
    ? location[0].name
    : "Sin datos de ubicación";

  return (
    <section className="rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 h-5 w-5" /> {cityName}
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-8xl font-bold lg:text-[10rem]">
            {currenTimeSearch?.temperature?.current !== undefined
              ? `${Math.floor(
                  kelvinToCelsius(currenTimeSearch.temperature.current)
                )}°`
              : "Sin datos"}
          </p>
          <p className="text-md font-bold">Despejado</p>
        </div>
        {/* <Cloud className="h-16 w-16" /> */}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center font-bold bg-white bg-opacity-10 rounded-full p-2">
          <Thermometer className="mr-2 h-4 w-4" />{" "}
          {currenTimeSearch?.temperature?.feels_like !== undefined
            ? `${Math.floor(
                kelvinToCelsius(currenTimeSearch.temperature.feels_like)
              )}°`
            : "Sin datos"}
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
