"use client";
import { useState } from "react";
import { useSubmint } from "@/hooks/useSubmint";
import Link from "next/link";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // hook for login and register
  const { data, error, loading, submintData } = useSubmint();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await submintData(
      isLogin ? `${process.env.LOGIN_URL}` : `${process.env.REGISTER_URL}`,
      {
        email,
        password,
        name,
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cielo-claro to-atardecer p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-titulo font-bold text-center text-tormenta-fuerte mb-8">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h2>
        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-texto-normal font-medium text-nubes-grises"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-niebla rounded-md text-sm shadow-sm placeholder-nubes-grises
                          focus:outline-none focus:border-cielo-claro focus:ring-1 focus:ring-cielo-claro"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-texto-normal font-medium text-nubes-grises"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-niebla rounded-md text-sm shadow-sm placeholder-nubes-grises
                        focus:outline-none focus:border-cielo-claro focus:ring-1 focus:ring-cielo-claro"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password input */}
          <div>
            <label
              htmlFor="password"
              className="block text-texto-normal font-medium text-nubes-grises"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-niebla rounded-md text-sm shadow-sm placeholder-nubes-grises
                        focus:outline-none focus:border-cielo-claro focus:ring-1 focus:ring-cielo-claro"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-start text-texto-normal text-nubes-grises hover:text-atardecer">
            <Link href="/forgot-password">Olvidaste tu contraseña?</Link>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lluvia-intensa hover:bg-tormenta-fuerte focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lluvia-intensa"
            >
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </button>
          </div>
        </form>
        {/* button  */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            type="button"
            className="text-sm text-cielo-claro hover:text-atardecer"
          >
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}
