import { useState } from "react";
import {
  Sun,
  Cloud,
  Search,
  Home,
  User,
  Settings,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchSection from "../Search/Search";

export default function Nav() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  const menuItems = [
    { id: "home", icon: Home, label: "Inicio", path: "/home" },
    { id: "profile", icon: User, label: "Perfil", path: "/profile" },
    {
      id: "settings",
      icon: Settings,
      label: "Configuración",
      path: "/settings",
    },
    { id: "help", icon: HelpCircle, label: "Ayuda", path: "/about" },
  ];

  return (
    <div className="text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8" />
            <Sun className="h-8 w-8" />
            <span
              className="text-2xl font-bold cursor-pointer"
              onClick={() => router.push("/")}
            >
              Clim
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeItem === item.id
                    ? "bg-white bg-opacity-40 backdrop-blur-md text-white"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
