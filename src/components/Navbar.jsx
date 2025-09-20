import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import { FiUser } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "../Context/LanguageContext";
import Drawer_First from "./Drawer_First";
import DarkModeToggler from "./DarkModeToggler";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { language } = useContext(LanguageContext);
  const defaultLang = "en";
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems = [] } = useContext(AppContext) || {}; // default empty

  const navItems = [
    { name: i18n.t("home"), path: "/" },
    { name: i18n.t("services"), path: "services" },
    { name: i18n.t("about"), path: "about" },
    { name: i18n.t("blog"), path: "blog" },
  ];

  // ✅ Handle paths correctly
  const getPath = (path) => {
    if (path === "/") return "/";
    return `/${path}`;
  };

  return (
    <nav className="grid fixed z-40 left-0 right-0 top-0 grid-cols-3 px-6 py-3 shadow-md bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl transition-colors duration-500 text-gray-800 dark:text-gray-200">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-x-2 text-2xl font-bold">
        <ImLeaf className="text-green-500" /> E-Shop
      </Link>

      {/* Navigation Items */}
      <ul className="hidden md:flex justify-center items-center gap-6">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={getPath(item.path)}
              className="hover:text-blue-500 font-semibold transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center justify-end gap-x-4">
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
        <div
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer"
        >
          <BsHandbag className="text-2xl" aria-label="Shopping Cart" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>

        {/* Clerk Auth */}
        <SignedOut>
          <SignInButton>
            <button
              className="p-1 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Sign in"
            >
              <FiUser size={24} />
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Drawer */}
      {isOpen && <Drawer_First isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
