import { RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MenuLink from "./Navlink";
import { Link } from "react-router-dom";
import resume from "../../assets/hasinur_rahman.pdf";

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

      <div className="shadow-md bg-transparent dark:bg-bg-dark fixed top-0 w-full z-50 backdrop-blur-lg">
        <div className="container mx-auto px-3">
          <div className="flex py-5 justify-between items-center">
            {/* navbar start */}
            <div className="">
              <Link
                to={"/"}
                className="text-3xl dark:text-lightGray font-semibold "
              >
                Hasinur <span className="text-primaryColor">.</span>
              </Link>
            </div>
            {/* navbar end */}
            <div className="flex items-center">
              <ul className=" space-x-4 text-base items-center hidden md:flex dark:text-lightGray">
                <MenuLink path="/" text="Home" />
                <MenuLink path="/projects" text="Projects" />
                <MenuLink path="/about-me" text="About Me" />
                <MenuLink path="/contact" text="Contact" />
                <li>
                  <a href={resume} download="hasinur_rahman_resume.pdf">
                    <button
                      className="ms-4 border-secondaryColor border 
                    bg-primaryColor text-lightGray hover:bg-secondaryColor rounded-md px-4 py-2 text-lg font-semibold"
                      type="button"
                    >
                      Get Resume
                    </button>
                  </a>
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
