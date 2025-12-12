import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import enTranslations from './en/translations';
import hiTranslations from './hi/translations';

export type Language = 'en' | 'hi';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'hi') return stored;
  return 'en';
}

const translations = {
  en: enTranslations,
  hi: hiTranslations,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => setLanguageState(lang), []);

  const t = useCallback((key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          // Fallback to English if key not found
          value = translations.en;
          for (const k2 of keys) {
            value = value?.[k2];
          }
          break;
        }
      }
      // If still undefined or same as key, return key (don't show undefined)
      if (value === undefined || value === null) {
        return key;
      }
      return value;
    } catch (error) {
      console.warn('Translation error for key:', key, error);
      return key;
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
