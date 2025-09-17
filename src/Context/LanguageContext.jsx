import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const defaultLang = "en";

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || defaultLang
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.setAttribute(
      "dir",
      language === "fa" ? "rtl" : "ltr"
    );
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
