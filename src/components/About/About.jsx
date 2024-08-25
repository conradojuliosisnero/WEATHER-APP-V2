export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900 text-white flex flex-col items-center px-4 py-8">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Sobre Nuestra App del Clima</h1>
        <p className="text-lg mt-2">
          Tu fuente confiable para el clima en cualquier lugar, en cualquier
          momento.
        </p>
      </header>

      {/* Content Section */}
      <section className="flex flex-col items-center space-y-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">¿Qué es esta App?</h2>
          <p className="text-base">
            Nuestra aplicación del clima te brinda pronósticos precisos y
            actualizaciones en tiempo real para cualquier ciudad en el mundo.
            Con una interfaz intuitiva, te mantenemos informado sin
            complicaciones.
          </p>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Características</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Pronósticos detallados por hora y día.</li>
            <li>Alertas meteorológicas en tiempo real.</li>
            <li>Soporte para múltiples ciudades favoritas.</li>
            <li>Animaciones personalizadas de climas.</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-base">
            Nuestro objetivo es proporcionarte la información más precisa y
            fácil de entender para que puedas planificar tu día con confianza,
            sin importar el clima.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Nuestra App del Clima. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
