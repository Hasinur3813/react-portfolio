import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ActionButtons from "../components/Shared/ActionButtons";
import useTheme from "../hooks/useTheme";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";

const RootLayout = () => {
  const { colorName } = useTheme();
  return (
    <div className={`${colorName} font-poppins overflow-x-hidden`}>
      <p className="w-full">
        <span className="w-full text-center z-[2000] mb-20 fixed font-semibold border top-0 py-3 bg-white text-primaryColor">
          Under Development
        </span>
      </p>
      <ActionButtons />
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
