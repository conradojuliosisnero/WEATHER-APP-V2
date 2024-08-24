"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        }
      },
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
          value: { min: 1, max: 4 }, // Tamaño de las gotas
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
