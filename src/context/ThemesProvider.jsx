import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

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
  const getColorName = (e) => {
    // TODO: change theme color by clicking the color
    const color = e.target.name;
    console.log(color);
  };

  const controller = {
    theme,
    setTheme,
    getColorName,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={controller}>{children}</ThemeContext.Provider>
  );
};

export default ThemesProvider;
