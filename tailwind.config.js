/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cielo-claro": "#87CEEB",
        "nubes-grises": "#A0A4A8",
        "lluvia-ligera": "#6E7F80",
        "sol-brillante": "#FFD700",
        "tormenta-fuerte": "#4F4F4F",
        "lluvia-intensa": "#1F3A93",
        "nieve": "#FFFFFF",
        "atardecer": "#FF6347",
        "niebla": "#B0C4DE",
      },
      fontSize: {
        titulo: "2.25rem", // 36px
        subtitulo: "1.5rem", // 24px
        "texto-normal": "1rem", // 16px
        "texto-pequeno": "0.875rem", // 14px
        "texto-mini": "0.75rem", // 12px
      },
      spacing: {
        "borde-1": "0.25rem", // 4px
        "borde-2": "0.5rem", // 8px
        "borde-3": "0.75rem", // 12px
        "borde-4": "1rem", // 16px
        "borde-5": "1.25rem", // 20px
        "borde-6": "1.5rem", // 24px
        "borde-grande": "2rem", // 32px
        "borde-extra-grande": "2.5rem", // 40px
      },
      //   // Aquí defines tu paleta de colores personalizada, por ejemplo:
      //   "fondo-claro": "#F3F4F6", // Gris claro
      //   "fondo-oscuro": "#1F2937", // Gris oscuro
      //   "texto-primario": "#111827", // Negro
      //   "texto-secundario": "#6B7280", // Gris medio
      //   // Define más colores según tus necesidades
      // },
      borderRadius: {
        "redondeado-pequeno": "0.25rem", // 4px
        "redondeado-medio": "0.5rem", // 8px
        "redondeado-grande": "1rem", // 16px
      },
      boxShadow: {
        "sombra-ligera": "0 1px 3px rgba(0, 0, 0, 0.1)", // Sombra suave
        "sombra-moderada": "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra moderada
        "sombra-fuerte": "0 10px 15px rgba(0, 0, 0, 0.2)", // Sombra fuerte
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
