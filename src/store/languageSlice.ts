import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definimos el tipo del estado
export interface LanguageState {
  lang: 'es' | 'en';
}

// El estado inicial, por defecto en español
const initialState: LanguageState = {
  lang: 'es',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    // Nuestro "reducer" que cambia el estado
    // PayloadAction<tipo> es para tipar el payload de la acción
    setLanguage: (state, action: PayloadAction<'es' | 'en'>) => {
      state.lang = action.payload;
    },
  },
});

// Exportamos la acción para poder usarla en los componentes
export const { setLanguage } = languageSlice.actions;

// Exportamos el reducer para añadirlo al store
export default languageSlice.reducer;