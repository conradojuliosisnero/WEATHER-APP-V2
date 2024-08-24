import React from "react";
import { Menu, X } from "lucide-react";

export default function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="p-4 flex justify-between items-center relative z-20">
      <h1 className="text-2xl font-bold">WeaterApp</h1>
      <button
        className="p-2 z-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <X className="h-6 w-6 z-50" /> : <Menu className="h-6 w-6" />}
      </button>
    </header>
  );
}
