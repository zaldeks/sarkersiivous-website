'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as translationData } from '../i18n/translations';

type Language = 'fi' | 'en';
type TranslationType = typeof translationData.fi | typeof translationData.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');
  const [translations, setTranslations] = useState<TranslationType>(translationData.fi);

  useEffect(() => {
    setTranslations(language === 'fi' ? translationData.fi : translationData.en);
  }, [language]);

  const value = {
    language,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
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
