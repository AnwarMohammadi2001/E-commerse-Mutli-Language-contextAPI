import React, { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { LuLanguages } from "react-icons/lu";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-500"
      >
        <LuLanguages className="text-lg" />
        <span className="font-medium">{language.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2  left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {["English", "Dari"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                if (language !== lang) toggleLanguage(lang);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                language === lang
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
