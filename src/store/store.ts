import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    // Aquí registramos nuestro slice de idioma
    language: languageReducer,
  },
});

// Tipos para usar con los hooks de useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;