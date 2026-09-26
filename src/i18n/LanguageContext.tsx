import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from './translations';
import { soundFx } from '../utils/audio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.tr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('tylefnx_lang') as Language;
    if (saved === 'tr' || saved === 'en') return saved;
    return navigator.language.startsWith('tr') ? 'tr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('tylefnx_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    soundFx.playClick();
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    soundFx.playClick();
    setLanguageState((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
