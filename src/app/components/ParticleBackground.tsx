// app/components/ParticleBackground.tsx (ACTUALIZADO CON LOGOS)
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d1117",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        // Los enlaces entre partículas pueden verse desordenados con logos. Los desactivamos.
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out", // Las partículas desaparecen al salir del lienzo
          },
          random: true, // Movimiento más aleatorio para un efecto de "lluvia"
          speed: 1.5,   // Un poco más de velocidad
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60, // Reducimos el número de partículas para no sobrecargar visualmente
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Opacidad variable
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          }
        },
        // --- ¡AQUÍ ESTÁ LA MAGIA! ---
        shape: {
          // Usamos 'images' (plural) para poder especificar un array de logos.
          type: "images",
          // La configuración para las imágenes
          options: {
            images: [
              {
                src: "/react.svg",
                width: 512,
                height: 512
              },
              {
                src: "/node.svg",
                width: 512,
                height: 512
              },
              {
                src: "/css.svg",
                width: 512,
                height: 512
              },
              {
                src: "/git.svg",
                width: 512,
                height: 512
              },
              {
                src: "/vercel.svg",
                width: 512,
                height: 512
              },
              {
                src: "/next.svg",
                width: 512,
                height: 512
              }
            ],
          },
        },
        size: {
          value: { min: 5, max: 30 }, // Ajustamos el tamaño de los logos
          animation: {
            enable: true,
            speed: 4,
            minimumValue: 15,
            sync: false,
          },
        },
        rotate: {
            // Activa la rotación
            enable: true,
            // La dirección de la rotación. Puede ser "clockwise", "counter-clockwise" o "random".
            direction: "random",
            // Activa la animación de rotación
            animation: {
            enable: true,
            // La velocidad de la rotación (grados por segundo)
            speed: 5,
            // Si la velocidad debe sincronizarse entre todas las partículas
            sync: false,
            },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;