import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import es from '../../locales/es.json';
import en from '../../locales/en.json';

const translations = {
  es,
  en
};

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  return translations[lang] || translations.es;
};