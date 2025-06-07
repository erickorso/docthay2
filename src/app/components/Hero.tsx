// app/components/Hero.tsx
"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Erick Vargas
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Desarrollador Front-End | Apasionado por la Tecnología y el Diseño
      </motion.p>
      <motion.a 
        href="#projects" 
        className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Ver mis Proyectos
      </motion.a>
    </section>
  );
};

export default Hero;