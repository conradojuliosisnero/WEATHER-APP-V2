import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Sidebar from "../SideBar/SideBard";
import Nav from "@/components/Dashboard/Nav/Nav";
import { getHour } from "@/lib/utils";
import { gradients } from "@/data/data";
import { useFetch } from "@/hooks/useFetch";
import { getUserLocation } from "@/lib/utils";
import useUserStore from "@/store/store";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);

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

  const { data, error, loading, getData } = useFetch();

  // update the store
  const { setLocation } = useUserStore();

  useEffect(() => {
    if (data) {
      setLocation(data);
    } else {
      setLocation(null);
    }
  }, [data, setLocation]);

  useEffect(() => {
    const getCurrentCity = async () => {
      const { lat, long } = await getUserLocation();
      await getData(`/api/location?lat=${lat}&lon=${long}`);
    };
    getCurrentCity();
  }, []);

  return (
    <header className="p-4 flex bg-transparent justify-between items-center relative text-white z-40">
      <Nav />
      <div className="sm:flex md:flex lg:hidden">
        <button
          className="p-2 z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {!isMenuOpen && <Menu className="h-6 w-6" />}
        </button>
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
