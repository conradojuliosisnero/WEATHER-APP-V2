import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "../SideBar/SideBard";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  return (
    <header className="p-4 flex bg-transparent justify-between items-center relative text-white">
      <h1 className="text-2xl font-bold" onClick={() => router.push("/home")}>
        Clim
      </h1>
      <button
        className="p-2 z-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {!isMenuOpen && <Menu className="h-6 w-6" />}
      </button>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </header>
  );
}
