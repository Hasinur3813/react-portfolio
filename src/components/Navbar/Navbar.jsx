import { RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <MobileMenu
        handleCloseMenu={handleCloseMenu}
        showMobileMenu={showMobileMenu}
      />

      <div className="shadow-md bg-offWhite">
        <div className="container mx-auto px-3">
          <div className="flex py-5 justify-between items-center">
            {/* navbar start */}
            <div className="">
              <a className="text-3xl font-semibold " href="#">
                Hasinur <span className="text-primaryColor">.</span>
              </a>
            </div>
            {/* navbar end */}
            <div className="flex items-center">
              <ul className=" space-x-4 text-base items-center hidden md:flex">
                <Navlink path="home" text="Home" />
                <Navlink path="services" text="Services" />
                <Navlink path="projects" text="Project" />
                <Navlink path="about" text="About Me" />
                <Navlink path="contact" text="Contact" />
                <li>
                  <button
                    className="ms-4 border-secondaryColor border hover:bg-primaryColor rounded-md px-4 py-2 text-lg font-semibold"
                    type="button"
                  >
                    Hire me
                  </button>
                </li>
              </ul>

              {/* hamburger menu */}
              <div className="md:hidden">
                <button type="button" onClick={() => setShowMobileMenu(true)}>
                  <RiMenu2Line className="text-3xl bg-primaryColor text-lightGray rounded p-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
