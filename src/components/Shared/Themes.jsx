import useTheme from "../../hooks/useTheme";

const Themes = ({ className }) => {
  const { theme, getColorName, handleThemeChange } = useTheme();

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

        <div onClick={getColorName} className="mt-5 flex gap-5 flex-wrap">
          <button
            name="#ec4899"
            className="bg-pink-500 w-6 h-6 rounded-full"
          ></button>
          <button
            name="#8b5cf6"
            className="bg-violet-500 w-6 h-6 rounded-full"
          ></button>
          <button
            name="#22c55e"
            className="bg-green-500 w-6 h-6 rounded-full"
          ></button>
          <button
            name="#0d9488 "
            className="bg-teal-600 w-6 h-6 rounded-full"
          ></button>
          <button
            name="#2563eb"
            className="bg-blue-600 w-6 h-6 rounded-full"
          ></button>
          <button
            name="#eab308"
            className="bg-yellow-500 w-6 h-6 rounded-full"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Themes;
