import { Tooltip } from "antd";

const ThemesColor = ({ themeName, title, colorName }) => {
  return (
    <Tooltip title={title}>
      <button
        name={themeName}
        className={`${colorName} w-6 h-6 rounded-full`}
      ></button>
    </Tooltip>
  );
};

export default ThemesColor;
