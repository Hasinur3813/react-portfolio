import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ActionButtons from "../components/Shared/ActionButtons";
import useTheme from "../hooks/useTheme";

const RootLayout = () => {
  const { colorName } = useTheme();
  return (
    <div className={`${colorName} font-poppins bg-lightGray dark:bg-darkGray`}>
      <ActionButtons />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
