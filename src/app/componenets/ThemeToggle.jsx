"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-teal-500 dark:bg-slate-900 rounded-full p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      <div
        className={` bg-transparent w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? "translate-x-8" : ""}`}
      >
        {darkMode ? (
          <MoonIcon className='w-6 h-6 text-gray-800'/>
        ):(<SunIcon className='w-6 h-6 text-yellow-100'/>)}
      </div>
    </div>
  );
}
