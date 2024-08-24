"use client";
import { useSubmint } from "@/hooks/useSubmint";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // router
  const router = useRouter();

  // hook for login and register
  const { data, error, loading, submintData } = useSubmint();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submintData(`${process.env.PASSWORD_RECOVERY_URL}`, {
      email,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cielo-claro to-atardecer p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-titulo font-bold text-center text-tormenta-fuerte mb-8">
          Recuperación de Contraseña
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lluvia-intensa hover:bg-tormenta-fuerte focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lluvia-intensa"
              >
                Enviar Instrucciones
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lluvia-intensa mb-4">
              Se han enviado las instrucciones de recuperación a tu correo
              electrónico.
            </p>
            <p className="text-nubes-grises">
              Por favor, revisa tu bandeja de entrada y sigue las instrucciones
              para restablecer tu contraseña.
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-cielo-claro hover:text-atardecer"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Volver al inicio de sesión
          </a>
        </div>
      </div>
    </div>
  );
}
