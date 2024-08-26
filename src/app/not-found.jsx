"use client";
import { CloudLightning, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cielo-despejado to-cielo-claro flex flex-col items-center justify-center text-white p-4">
      <CloudLightning className="w-24 h-24 mb-8 animate-pulse" />
      <h1 className="text-4xl font-bold mb-2 text-center">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        ¡Ups! Parece que te has perdido en la tormenta
      </h2>
      <p className="text-lg mb-8 text-center max-w-md">
        La página que buscas no existe o ha sido movida a otro lugar. ¿Quizás el
        viento se la llevó?
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/home"
          className="bg-white text-slate-800 hover:bg-blue-100 transition-colors duration-300 font-semibold py-2 px-4 rounded-full flex items-center justify-center"
        >
          <Home className="w-5 h-5 mr-2" />
          Volver al inicio
        </Link>
        <button
          onClick={() => router.back()}
          className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Página anterior
        </button>
      </div>
    </div>
  );
}
