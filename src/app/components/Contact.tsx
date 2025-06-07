// app/components/Contact.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
// Importamos los iconos que usaremos
import { FiSend, FiMail, FiUser, FiMessageSquare, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// Tipos para el estado del formulario, una buena práctica con TypeScript
type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
};

const Contact = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para el manejo del envío
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: null });
  
  // Estado para los errores de validación
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del correo no es válido.";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState({ status: 'loading', message: null });

    try {
      const response = await fetch("https://formspree.io/f/TU_ID_DE_FORMSPREE", { // <-- ¡RECUERDA CAMBIAR ESTO!
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({ status: 'success', message: '¡Mensaje enviado! Gracias por contactarme.' });
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
      } else {
        throw new Error('Algo salió mal en el servidor.');
      }
    } catch (error) {
        console.log('handleSubmit', error);
        
      setFormState({ status: 'error', message: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.' });
    }
  };

  // Función para renderizar el contenido del botón
  const renderButtonContent = () => {
    switch (formState.status) {
      case 'loading':
        return (
          <>
            <FiLoader className="animate-spin mr-2" />
            Enviando...
          </>
        );
      case 'success':
        return (
          <>
            <FiCheckCircle className="mr-2" />
            Enviado
          </>
        );
      default:
        return (
          <>
            <FiSend className="mr-2" />
            Enviar Mensaje
          </>
        );
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Hablemos</h2>
        <p className="text-lg text-gray-300 mb-12">
          ¿Tienes un proyecto, una pregunta o simplemente quieres saludar? Rellena el formulario y me pondré en contacto contigo lo antes posible.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
          {/* Campo Nombre */}
          <div className="relative">
            <label htmlFor="name" className="sr-only">Nombre</label>
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full p-4 pl-12 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.name ? 'border-red-500 ring-red-500' : 'border-gray-700'}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Campo Email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Tu Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full p-4 pl-12 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-700'}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Campo Mensaje */}
          <div className="relative">
            <label htmlFor="message" className="sr-only">Mensaje</label>
            <FiMessageSquare className="absolute left-4 top-6 -translate-y-1/2 text-gray-400" />
            <textarea
              id="message"
              name="message"
              placeholder="Tu Mensaje"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              required
              className={`w-full p-4 pl-12 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.message ? 'border-red-500 ring-red-500' : 'border-gray-700'}`}
              aria-invalid={!!errors.message}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          {/* Botón de envío dinámico */}
          <motion.button
            type="submit"
            disabled={formState.status === 'loading' || formState.status === 'success'}
            className="w-full flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: formState.status === 'idle' ? 1.05 : 1, backgroundColor: formState.status === 'idle' ? "#d1d5db" : "#ffffff" }}
            whileTap={{ scale: formState.status === 'idle' ? 0.95 : 1 }}
          >
            {renderButtonContent()}
          </motion.button>
          
          {/* Mensajes de feedback del formulario */}
          {formState.status === 'success' && (
            <div className="flex items-center text-green-400">
              <FiCheckCircle className="mr-2" /> {formState.message}
            </div>
          )}
          {formState.status === 'error' && (
            <div className="flex items-center text-red-500">
              <FiAlertCircle className="mr-2" /> {formState.message}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;