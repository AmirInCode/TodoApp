import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme
      ? JSON.parse(storedTheme)
      : true;
  });

  // Apply theme to body
  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      !isDarkMode
    );

    localStorage.setItem(
      "theme",
      JSON.stringify(isDarkMode)
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return {
    isDarkMode,
    toggleTheme,
  };
};

export default useTheme;