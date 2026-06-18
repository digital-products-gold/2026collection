import { translations } from '../translations';

export const useTranslation = () => {
  // Determine language from query parameter, fallback to 'en'
  const queryParams = new URLSearchParams(window.location.search);
  const langParam = queryParams.get('lang');
  
  let currentLang = 'en';
  if (langParam) {
    if (langParam.startsWith('pt')) currentLang = 'pt';
    else if (langParam.startsWith('es')) currentLang = 'es';
  }

  const t = (key) => {
    // Return translation if exists, otherwise return the english key or empty string
    return translations[currentLang]?.[key] || translations['en']?.[key] || key;
  };

  return { t, lang: currentLang };
};
