// nav data

export const NAVDATA = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    name: "Config",
    path: "/config",
  },
];

// footer data
export const FOOTERDATA = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Config",
    path: "/config",
  },
];

// config data
export const CONFIGDATA = [
  {
    name: "theme",
    path: "/config/theme",
  },
  {
    name: "colors",
    path: "/config/colors",
  },
  {
    name: "Unit",
    path: "/config/unit",
  },
];

// SEO
export const SEO = {
  title: "Weather App",
  description: "Weather App",
  keywords: "Weather App",
};

// description

export const DESCRIPTION = {
  description:
    "la aplicación web que proporciona información meteorológica en tiempo real para cualquier ubicación en el mundo.",
};

export const gradients = {
  0: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",
  1: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",
  2: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",
  3: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",
  4: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",
  5: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",

  6: "bg-gradient-to-b from-sky-400 via-cielo-medio to-niebla",
  7: "bg-gradient-to-b from-sky-400 via-cielo-medio to-niebla",
  8: "bg-gradient-to-b from-sky-400 via-cielo-medio to-niebla",
  9: "bg-gradient-to-b from-sky-400 via-cielo-medio to-niebla",
  10: "bg-gradient-to-b from-sky-400 via-cielo-medio to-niebla",
  11: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-niebla",

  12: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-claro",
  13: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-despejado",
  14: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-claro",
  15: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-claro",
  16: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-claro",
  17: "bg-gradient-to-b from-cielo-claro via-cielo-medio to-cielo-claro",
  
  18: "bg-gradient-to-b from-cielo-claro via-atardecer-suave to-atardecer",
  19: "bg-gradient-to-b from-cielo-claro via-atardecer-suave to-atardecer",
  20: "bg-gradient-to-b from-cielo-claro via-atardecer-suave to-atardecer",
  21: "bg-gradient-to-b from-cielo-claro via-atardecer-suave to-atardecer",
  22: "bg-gradient-to-b from-cielo-claro via-nubes-claras to-niebla",
  23: "bg-gradient-to-b from-cielo-claro via-nubes-claras to-niebla",
};

export const options = {
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const rainOptions = {
  fpsLimit: 90,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffff", // Color de las gotas de lluvia
    },
    links: {
      enable: false, // Desactiva los enlaces entre partículas
    },
    move: {
      direction: "bottom", // Movimiento hacia abajo
      enable: true,
      outModes: {
        default: "out", // Las gotas saldrán del área visible
      },
      speed: 45, // Velocidad de las gotas
      straight: true, // Movimiento en línea recta
    },
    number: {
      density: {
        enable: true,
        area: 700, // Ajusta el área para la densidad
      },
      value: 250, // Número de gotas
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle", // Usa círculos para las gotas
    },
    size: {
      value: { min: 1, max: 1 }, // Tamaño de las gotas
    },
  },
  detectRetina: true,
};

const weatherGradients = {
  sunny: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
  cloudy: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500",
  rainy: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
  stormy: "bg-gradient-to-r from-gray-700 via-gray-800 to-black",
  snowy: "bg-gradient-to-r from-blue-100 via-blue-200 to-white",
  misty: "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400",
  foggy: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600",
  windy: "bg-gradient-to-r from-green-300 via-blue-300 to-blue-500",
  clearNight: "bg-gradient-to-r from-indigo-900 via-purple-900 to-black",
  sunset: "bg-gradient-to-r from-pink-500 via-red-500 to-orange-500",
  dawn: "bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300",
  drizzly: "bg-gradient-to-r from-blue-400 via-blue-500 to-gray-500",
};

export default weatherGradients;


