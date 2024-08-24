import { Home, User, Settings, HelpCircle, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isMenuOpen, setIsMenuOpen }) {

  return (
    <div
      className={`fixed inset-0 z-40 bg-slate-200 bg-opacity-20 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-y-0 z-20" : "-translate-y-full"
      }`}
    >
      <div>
        <button onClick={() => setIsMenuOpen(false)}>
          <X className="w-6 h-6 absolute top-4 right-4" />
        </button>
      </div>
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
