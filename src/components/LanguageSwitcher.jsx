import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const defaultLang = "en";

  const toggleLanguage = () => {
    let newLang = !lang || lang === defaultLang ? "fa" : defaultLang;

    // Build new URL path
    const pathSegments = location.pathname.split("/").filter(Boolean);

    if (newLang === defaultLang) {
      if (pathSegments[0] === "fa") pathSegments.shift();
    } else {
      if (pathSegments[0] !== newLang) pathSegments.unshift(newLang);
    }

    const newPath = "/" + pathSegments.join("/");
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.setAttribute(
      "dir",
      newLang === "fa" ? "rtl" : "ltr"
    );
    navigate(newPath || "/");
  };

  return (
    <button onClick={toggleLanguage} className="px-3 py-1 border rounded">
      {lang === "fa" || (!lang && i18n.language === "fa") ? "EN" : "FA"}
    </button>
  );
};

export default LanguageSwitcher;
