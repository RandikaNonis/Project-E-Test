import { IntlProvider } from "react-intl";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import es from "./lang/es.json";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "en" | "fr" | "es";
const messages = { en, fr, es };

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const storedLang = (sessionStorage.getItem("language") as Locale) || "";
  const [locale, setLocale] = useState<Locale>(storedLang);

  useEffect(() => {
    sessionStorage.setItem("language", locale);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}
