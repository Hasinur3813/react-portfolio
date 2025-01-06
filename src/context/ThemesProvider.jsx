import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const getColorName = (e) => {
    // TODO: change theme color by clicking the color
    const color = e.target.name;
    console.log(color);
  };

  const handleThemeChange = (e) => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log(e.target.value);
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
