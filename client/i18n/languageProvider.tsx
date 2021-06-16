import { createContext, useEffect, useState } from "react";

export const defaultLocale = "fa";
export const locales = ["fa", "en"];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState("fa");

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem("lang") || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
