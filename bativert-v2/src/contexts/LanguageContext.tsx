"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/translations';

type Language = 'en' | 'fr';

type TranslationsType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage for saved language
    const saved = localStorage.getItem('bativert-lang') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bativert-lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = translations[language];

  // Prevent hydration mismatch by rendering default until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'fr', setLanguage, toggleLanguage, t: translations.fr }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
