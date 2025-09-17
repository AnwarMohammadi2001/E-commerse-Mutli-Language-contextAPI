import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold">{t("home")}</h1>;
};

export default Home;
