import { useRef, useEffect } from "react";
import { Home, User, Settings, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-y-0 z-20" : "-translate-y-full"
      }`}
    >
      <nav className="h-full flex flex-col justify-center items-center text-2xl space-y-8">
        <Link
          href="/home"
          className="hover:text-blue-300 transition-colors duration-200 flex items-center"
        >
          <Home className="mr-2 h-6 w-6" /> Inicio
        </Link>
        <Link
          href="/profile"
          className="hover:text-blue-300 transition-colors duration-200 flex items-center"
        >
          <User className="mr-2 h-6 w-6" /> Perfil
        </Link>
        <Link
          href="/settings"
          className="hover:text-blue-300 transition-colors duration-200 flex items-center"
        >
          <Settings className="mr-2 h-6 w-6" /> Configuración
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-300 transition-colors duration-200 flex items-center"
        >
          <HelpCircle className="mr-2 h-6 w-6" /> Ayuda
        </Link>
      </nav>
    </div>
  );
}
