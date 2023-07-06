import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeButton = ({ className }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`${darkMode && "text-white"} mr-4 px-2 ${className}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default DarkModeButton;
