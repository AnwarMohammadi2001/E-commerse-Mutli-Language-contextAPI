import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ImLeaf } from "react-icons/im";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { FiUser } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "../Context/LanguageContext";
import Drawer from "./Drawer";
import Drawer_First from "./Drawer_First";
import DarkModeToggler from "./DarkModeToggler";
const Navbar = () => {
  const { i18n } = useTranslation();
  const { language } = useContext(LanguageContext); // get current language
  const defaultLang = "en";
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: i18n.t("home"), path: "/" },
    { name: i18n.t("services"), path: "services" },
    { name: i18n.t("about"), path: "about" },
    { name: i18n.t("blog"), path: "blog" },
  ];

  // Determine path based on current language
  const getPath = (path) => {
    // Default language: do not prefix
    if (language === defaultLang) return `/${path}`;
    // Other languages: could optionally prefix (if you want)
    return `/${path}`; // keep it simple, no prefix in URL
  };

  return (
    <nav className="grid fixed z-40 left-0 right-0 top-0 grid-cols-3 px-6 py-3 shadow-md bg-white/10 backdrop-blur-2xl transition-colors duration-500 text-gray-800 dark:text-white">
      {/* Logo */}
      <div className="text-2xl font-bold  flex items-center text-gray-200 gap-x-2">
        <ImLeaf className="text-green-500 " /> E-Shop
      </div>

      {/* Navigation Items */}
      <ul className="hidden md:flex justify-center items-center gap-6">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={getPath(item.path)}
              className="hover:text-blue-500 text-gray-200 font-semibold transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center  justify-end gap-x-4">
        {/* Language Switcher */}
        <SignedIn>
          <Link
            to="/dashboard"
            className="hover:text-blue-500 text-green-500 font-semibold flex items-center gap-x-2 transition-colors"
          >
            <MdOutlineDashboardCustomize />
            {i18n.t("userDashboard")}
          </Link>
        </SignedIn>
        <DarkModeToggler />
        <LanguageSwitcher />

        {/* Shopping Cart */}
        <div onClick={() => setIsOpen(true)} className="relative">
          <BsHandbag className="text-2xl cursor-pointer text-gray-200" />
          {/* Example badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* Clerk Auth */}
        <SignedOut>
          <SignInButton>
            <button className="p-1 border border-gray-500 rounded-full hover:bg-gray-200 transition-colors duration-300 dark:hover:bg-gray-700">
              <FiUser className="text-gray-500" size={24}  />
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      {isOpen && <Drawer_First isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
