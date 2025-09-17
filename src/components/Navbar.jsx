import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount] = useState(2);
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("services"), path: "/services" },
    { name: t("about"), path: "/about" },
    { name: t("blog"), path: "/blog" },
    { name: t("contact"), path: "/contact" },
  ];

  // Change language and save in localStorage
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  // Update <html dir="ltr/rtl"> when language changes
  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);

  return (
    <nav
      className={`flex items-center justify-between px-6 py-3 shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">Tamadon</div>

      {/* Nav Items */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="flex items-center gap-1">
          <FaGlobe />
          <span>{i18n.language.toUpperCase()}</span>
        </button>

        {/* Shopping Cart */}
        <div className="relative">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Clerk Auth */}
        <SignedOut>
          <SignInButton>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              {t("login")}
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
