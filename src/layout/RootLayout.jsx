import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ActionButtons from "../components/Shared/ActionButtons";
import useTheme from "../hooks/useTheme";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";
import Chatbot from "../components/Chatbot/Chatbot";

const RootLayout = () => {
  const { colorName } = useTheme();

  return (
    <div className={`${colorName} font-poppins overflow-x-hidden`}>
      <ActionButtons />
      <Chatbot />
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
