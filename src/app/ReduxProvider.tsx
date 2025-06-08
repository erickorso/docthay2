"use client"; // El Provider es un componente de cliente

import { Provider } from 'react-redux';
import { store } from '../store/store'; // Ajusta la ruta si es necesario

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}