import { IntlProvider } from "react-intl";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import es from "./lang/es.json";
import { ReactNode, useState } from "react";

type Locale = "en" | "fr" | "es";

const messages: Record<Locale, Record<string, string>> = {
  en,
  fr,
  es,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div style={{ marginBottom: 16 }}>
        <select
          onChange={(e) => setLocale(e.target.value as Locale)}
          value={locale}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
      {children}
    </IntlProvider>
  );
}
