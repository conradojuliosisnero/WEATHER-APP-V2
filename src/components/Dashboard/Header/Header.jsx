import React from "react";
import { Menu, X } from "lucide-react";

export default function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="p-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">Clim</h1>
      <button
        className="p-2 z-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {!isMenuOpen && <Menu className="h-6 w-6" />}
      </button>
    </header>
  );
}
