// app/components/Projects.tsx

// Paso 1: Marcar como Componente de Cliente. ¡Esto es lo más importante!
"use client"; 

// Paso 2: Importar motion aquí, donde sí se puede usar.
import { motion } from 'framer-motion';

// Datos de ejemplo para tus proyectos
const projectData = [
  {
    title: "Plataforma de E-commerce",
    description: "Una tienda online completa construida con Next.js, Stripe y Tailwind CSS.",
  },
  {
    title: "Dashboard de Análisis",
    description: "Visualización de datos interactiva usando React, D3.js y una API REST.",
  },
  {
    title: "Blog Personal con CMS",
    description: "Un blog dinámico conectado a un Headless CMS como Sanity o Strapi.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-12">Mis Proyectos</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Mapeamos los datos de los proyectos para crear las tarjetas dinámicamente */}
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card" // Estilo definido en globals.css
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animación escalonada
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;