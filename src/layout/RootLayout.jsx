import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
