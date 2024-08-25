import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "../SideBar/SideBard";
import Nav from '@/components/Dashboard/Nav/Nav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  return (
    <header className="p-4 flex bg-transparent justify-between items-center relative text-white z-40">
      <Nav/>
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
