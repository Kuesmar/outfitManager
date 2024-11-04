import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus archivos de traducción
import translationEn from '../public/locales/en/translation.json';
import translationEs from '../public/locales/es/translation.json';
import translationPt from '../public/locales/pt/translation.json';

i18n
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Configura react-i18next
  .init({
    resources: {
      en: { translation: translationEn },
      es: { translation: translationEs },
      pt: { translation: translationPt }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;