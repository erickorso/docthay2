"use client";

import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState, AppDispatch } from '../../store/store';
import { setLanguage } from '../../store/languageSlice';
import { useTranslation } from '../hooks/useTranslation';
import Image from 'next/image';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);

  const t = useTranslation();

  const handleLanguageChange = (selectedLang: 'es' | 'en') => {
    if (lang === selectedLang) return;
    dispatch(setLanguage(selectedLang));
  };

  const navLinks = [
    { href: '#about', label: t.header.about },
    { href: '#projects', label: t.header.projects },
    { href: '#contact', label: t.header.contact },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 bg-gray-900 bg-opacity-50 backdrop-blur-lg border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#hero" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
        <Image
            src="/logo.webp" 
            alt="Logo Erick Vargas" 
            width={80} 
            height={30} 
            className="object-cover border-4"
        />
      </a>

      {/* Navegación Principal que SÍ usa 't' */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className="text-white hover:text-gray-300 transition-colors"
          >
            {link.label} {/* <-- ¡AQUÍ ESTAMOS USANDO 't' CORRECTAMENTE! */}
          </a>
        ))}
      </nav>

      {/* Selector de Idioma */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLanguageChange('es')}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-all duration-300 ${
            lang === 'es' 
              ? 'bg-white text-black shadow-lg' 
              : 'bg-transparent text-white hover:bg-white hover:bg-opacity-20'
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-all duration-300 ${
            lang === 'en' 
              ? 'bg-white text-black shadow-lg' 
              : 'bg-transparent text-white hover:bg-white hover:bg-opacity-20'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>

      {/* Aquí podrías añadir un menú hamburguesa para móviles */}
    </motion.header>
  );
};

export default Header;