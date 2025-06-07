// app/components/About.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image'; // ¡Usa el componente optimizado de Next.js!

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'PostgreSQL'
];

// Variantes para la animación escalonada de los skills
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Hace que los hijos aparezcan uno tras otro
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-12">Sobre Mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Columna de la Imagen */}
          <motion.div 
            className="md:col-span-1 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Reemplaza con tu foto. ¡Asegúrate de ponerla en la carpeta /public! */}
            <Image 
              src="/erick.jpeg" 
              alt="Foto de perfil de Erick Vargas" 
              width={250} 
              height={250} 
              className="rounded-full object-cover border-4 border-gray-700"
            />
          </motion.div>

          {/* Columna de Texto y Habilidades */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              ¡Hola! Soy Erick Vargas, un desarrollador de software con una profunda pasión por crear soluciones digitales intuitivas y de alto rendimiento. Mi viaje en el mundo de la programación comenzó con [cuenta una breve historia de tu inicio], y desde entonces, no he dejado de aprender y explorar nuevas tecnologías.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Me especializo en el ecosistema de JavaScript, construyendo aplicaciones web modernas tanto en el frontend como en el backend. Aquí hay algunas de las tecnologías con las que he estado trabajando recientemente:
            </p>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.span 
                  key={skill} 
                  className="bg-gray-700 text-white px-3 py-1 text-sm font-semibold rounded-full"
                  variants={itemVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;