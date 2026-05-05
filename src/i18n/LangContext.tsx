import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, t, TranslationKey } from './translations';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: TranslationKey) => string;
  trArr: (key: TranslationKey) => any[];
}

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  setLang: () => {},
  tr: (key) => t.fr[key] as string,
  trArr: (key) => t.fr[key] as any[],
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr');

  const tr = (key: TranslationKey): string => {
    const val = t[lang][key];
    return typeof val === 'string' ? val : '';
  };

  const trArr = (key: TranslationKey): any[] => {
    const val = t[lang][key];
    return Array.isArray(val) ? val : [];
  };

  return (
    <LangContext.Provider value={{ lang, setLang, tr, trArr }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
