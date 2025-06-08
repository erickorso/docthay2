"use client"; // Debe ser un componente de cliente para usar hooks

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'; // Ajusta la ruta

const Hero = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const t = useTranslation();

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        // Usamos una key para forzar el re-renderizado con animación al cambiar de idioma
        key={`h1-${lang}`}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.hero.title} {/* Usamos el texto del archivo de traducción */}
      </motion.h1>
      <motion.p 
        key={`p-${lang}`}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.hero.subtitle} {/* Usamos el texto del archivo de traducción */}
      </motion.p>
      <motion.a 
        href="#projects" 
        className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t.hero.button} {/* Usamos el texto del archivo de traducción */}
      </motion.a>
    </section>
  );
};

export default Hero;