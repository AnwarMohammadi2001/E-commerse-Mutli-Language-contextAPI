import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define translations
const resources = {
  en: {
    translation: {
      home: "Home",
      services: "Services",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      login: "Login",
      logout: "Logout",
      userDashboard: "User Dashboard",
    },
  },
  fa: {
    translation: {
      home: "خانه",
      services: "خدمات",
      about: "درباره ما",
      blog: "بلاگ",
      contact: "تماس",
      login: "ورود",
      logout: "خروج",
      userDashboard: "داشبورد کاربر",
    },
  },
};

// Check saved language in localStorage, fallback "en"
const savedLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
