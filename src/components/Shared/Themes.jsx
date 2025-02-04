import useTheme from "../../hooks/useTheme";

import ThemesColor from "./ThemesColor";

const Themes = ({ className }) => {
  const { theme, getThemeName, handleThemeChange } = useTheme();

  return (
    <div className={`${className}`}>
      <h3 className="text-base font-semibold">Themes</h3>

      {/* toggle theme between dark and light */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <h5 className="text-lg font-bold">Light</h5>

        <input
          onChange={handleThemeChange}
          value={theme}
          type="checkbox"
          checked={theme === "dark"}
          className="toggle toggle-lg"
        />
        <h5 className="text-lg font-bold">Dark</h5>
      </div>

      {/* set color theme to the website */}

      <div className="mt-10">
        <h3 className="font-semibold text-base">Colors</h3>

        {/* get the theme name by clicking on the theme color and set it to the entire website */}
        <div onClick={getThemeName} className="mt-5 flex gap-5 flex-wrap">
          <ThemesColor
            title="Default"
            colorName="bg-[#00d2d3]"
            themeName="theme-default"
          />
          <ThemesColor
            title="Pink"
            colorName="bg-pink-500"
            themeName="theme-pink"
          />
          <ThemesColor
            title="Violet"
            colorName="bg-violet-500"
            themeName="theme-violet"
          />
          <ThemesColor
            title="Green"
            colorName="bg-green-500"
            themeName="theme-green"
          />
          <ThemesColor
            title="Teal"
            colorName="bg-teal-600"
            themeName="theme-teal"
          />
          <ThemesColor
            title="Blue"
            colorName="bg-blue-500"
            themeName="theme-blue"
          />
          <ThemesColor
            title="Yellow"
            colorName="bg-yellow-500"
            themeName="theme-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Themes;
