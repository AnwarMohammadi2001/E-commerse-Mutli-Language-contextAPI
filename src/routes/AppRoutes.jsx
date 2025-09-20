import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ProductDetails from "../components/Product/ProductDetails";
import WishList from "../components/WishList";

const LanguageWrapper = ({ children, lang }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
      document.documentElement.setAttribute(
        "dir",
        lang === "fa" ? "rtl" : "ltr"
      );
    }
  }, [lang, i18n]);

  return <PageWrapper>{children}</PageWrapper>;
};

const AppRoutes = () => {
  const savedLang = localStorage.getItem("language") || "en"; // default English

  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap everything with LanguageWrapper */}
        <Route
          path="/"
          element={
            <LanguageWrapper lang={savedLang}>
              <MainLayout />
            </LanguageWrapper>
          }
        >
          <Route index element={<Home />} />
          <Route path="/product/:id/:title" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
