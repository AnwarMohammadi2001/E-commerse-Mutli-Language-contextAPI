import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaShoppingCart } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const defaultLang = "en";

  const navItems = [
    { name: i18n.t("home"), path: "home" },
    { name: i18n.t("services"), path: "services" },
    { name: i18n.t("about"), path: "about" },
    { name: i18n.t("blog"), path: "blog" },
  ];

  const getPath = (path) => {
    if (!lang || lang === defaultLang) return `/${path}`;
    return `/${lang}/${path}`;
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="text-2xl font-bold">Tamadon</div>

      <ul className="hidden md:flex gap-6">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={getPath(item.path)}
              className="hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <div className="relative">
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </div>
        <SignedOut>
          <SignInButton>
            <button className="px-3 py-1 border rounded">
              {i18n.t("login")}
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
