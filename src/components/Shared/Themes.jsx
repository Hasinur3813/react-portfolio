import useAnimation from "../../hooks/useAnimation";
import useTheme from "../../hooks/useTheme";

import ThemesColor from "./ThemesColor";
import { motion } from "framer-motion";

const themes = [
  {
    title: "Default",
    colorName: "bg-[#00d2d3]",
    themeName: "theme-default",
  },
  {
    title: "Pink",
    colorName: "bg-pink-500",
    themeName: "theme-pink",
  },
  {
    title: "Violet",
    colorName: "bg-violet-500",
    themeName: "theme-violet",
  },
  {
    title: "Green",
    colorName: "bg-green-500",
    themeName: "theme-green",
  },
  {
    title: "Teal",
    colorName: "bg-teal-600",
    themeName: "theme-teal",
  },
  {
    title: "Blue",
    colorName: "bg-blue-500",
    themeName: "theme-blue",
  },
  {
    title: "Yellow",
    colorName: "bg-yellow-500",
    themeName: "theme-yellow",
  },
];

const Themes = ({ className }) => {
  const { fadeUp, zoomIn } = useAnimation();
  const { theme, getThemeName, handleThemeChange } = useTheme();

  return (
    <div className={`${className}`}>
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        className="text-base font-semibold"
      >
        Themes
      </motion.h3>

      {/* toggle theme between dark and light */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        className="flex justify-center items-center gap-3 mt-4"
      >
        <h5 className="text-lg font-bold">Light</h5>

        <input
          onChange={handleThemeChange}
          value={theme}
          type="checkbox"
          checked={theme === "dark"}
          className="toggle toggle-lg"
        />
        <h5 className="text-lg font-bold">Dark</h5>
      </motion.div>

      {/* set color theme to the website */}

      <div className="mt-10">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          className="font-semibold text-base"
        >
          Colors
        </motion.h3>

        {/* get the theme name by clicking on the theme color and set it to the entire website */}
        <div onClick={getThemeName} className="mt-5 flex gap-5 flex-wrap">
          {themes.map((theme, idx) => {
            return (
              <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                custom={idx * 0.1}
                key={idx}
              >
                <ThemesColor
                  title={theme.title}
                  colorName={theme.colorName}
                  themeName={theme.themeName}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Themes;
