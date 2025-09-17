import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.json";
import fa from "./locales/en//fa.json";

const defaultLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fa: { translation: fa } },
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Set page direction
document.documentElement.setAttribute(
  "dir",
  defaultLang === "fa" ? "rtl" : "ltr"
);

export default i18n;
