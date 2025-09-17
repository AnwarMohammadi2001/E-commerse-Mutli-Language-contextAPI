import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";

const LanguageWrapper = ({ children, lang }) => {
  const { i18n } = useTranslation();
  if (lang && i18n.language !== lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  }
  return <PageWrapper>{children}</PageWrapper>;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default language */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <MainLayout>
                <Home />
              </MainLayout>
            </PageWrapper>
          }
        />

        {/* Other languages */}
        <Route
          path="/:lang/*"
          element={
            <LanguageWrapper lang={null}>
              <MainLayout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </MainLayout>
            </LanguageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
