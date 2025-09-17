import React, { useState, useEffect } from "react";
import { useDarkMode } from "../Context/DarkModeContext";
import { HiMiniSun } from "react-icons/hi2";
import { PiMoonStarsFill } from "react-icons/pi";

const DarkModeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center  w-16  justify-evenly h-8 rounded-full 
                 bg-gray-200 dark:bg-gray-800 transition duration-500 shadow-lg
                 "
    >
      {darkMode ? (
        <span className="text-yellow-600 text-base">
          <HiMiniSun size={24} />
        </span>
      ) : (
        <span className="text-blue-900 text-base">
          <PiMoonStarsFill size={24} />
        </span>
      )}
    </button>
  );
};

export default DarkModeToggler;
