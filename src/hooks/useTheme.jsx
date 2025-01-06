import { useContext } from "react";
import { ThemeContext } from "../context/ThemesProvider";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
