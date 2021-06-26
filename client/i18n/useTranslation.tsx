import { useContext } from "react";

import { LanguageContext, defaultLocale } from "./languageProvider";
import { Dictionary } from "./locales/dictionary";

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(key: string) {
    if (!Dictionary[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return Dictionary[locale][key] || Dictionary[defaultLocale][key] || key;
  }

  function checkIfCurrentLanguageIsRTL() {
    if (locale === "fa") {
      return true;
    }
    return false;
  }

  return { t, locale, setLocale, checkIfCurrentLanguageIsRTL };
}
