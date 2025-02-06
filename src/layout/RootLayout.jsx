import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ActionButtons from "../components/Shared/ActionButtons";
import useTheme from "../hooks/useTheme";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";

const RootLayout = () => {
  const { colorName } = useTheme();
  return (
    <div className={`${colorName} font-poppins `}>
      <ActionButtons />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
