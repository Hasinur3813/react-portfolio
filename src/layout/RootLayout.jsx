import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ActionButtons from "../components/Shared/ActionButtons";

const RootLayout = () => {
  return (
    <div className="font-poppins">
      <ActionButtons />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
