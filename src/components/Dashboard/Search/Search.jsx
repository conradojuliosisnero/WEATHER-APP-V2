import { Search } from "lucide-react";
import { useSubmint } from "@/hooks/useSubmint";
import { useState } from "react";

export default function SearchSection() {
  const [city, setCity] = useState("");

  const { data, error, loading, submintData } = useSubmint();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Buscando...");
    await submintData(`${process.env.WEATHER_URL}`, {
      city,
    });
  };

  return (
    <section className="relative flex gap-2">
      <div>
        <input
          type="text"
          placeholder="Buscar ciudad..."
          onChange={(e) => setCity(e.target.value)}
          name="city-search"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
      </div>
      <div className="flex justify-end mx-3">
        <button type="submit" onClick={handleSubmit} className="btn-uno">
          Buscar
        </button>
      </div>
    </section>
  );
}
