import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList = storedTheme;
      return;
    }
    setTheme("light");
  }, [theme]);

  // change theme by toggling
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // change theme by choosing color
  const getThemeName = (e) => {
    const themeName = e.target.name;
    if (themeName) {
      setColorName(themeName);
    }
  };

  const controller = {
    theme,
    colorName,
    setTheme,
    getThemeName,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={controller}>{children}</ThemeContext.Provider>
  );
};

export default ThemesProvider;
