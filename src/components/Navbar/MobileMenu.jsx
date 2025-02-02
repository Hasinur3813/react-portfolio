import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Themes from "../Shared/Themes";
import { Link } from "react-router-dom";
import { useRef } from "react";

const MobileMenu = ({ handleCloseMenu, showMobileMenu }) => {
  const menuRef = useRef(null);

  const handleCloseMobileMenu = (e) => {
    const menu = menuRef.current;
    if (
      e.target.contains(menu) ||
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON"
    ) {
      handleCloseMenu();
    }
  };

  return (
    // whole page container
    <div
      onClick={handleCloseMobileMenu}
      className={`${
        showMobileMenu && "!translate-x-0"
      }   translate-x-full fixed md:hidden top-0 right-0 w-full min-h-screen z-40 bg-black/50 flex justify-end`}
    >
      {/* mobile menu */}
      <div
        ref={menuRef}
        className={`${
          showMobileMenu && "!opacity-100  transition-all delay-75 duration-300"
        } opacity-0 w-2/3 min-h-screen p-4 bg-lightGray dark:bg-darkGray dark:text-lightGray`}
      >
        {/* close menu button */}
        <div className="flex justify-end">
          <button type="button" onClick={handleCloseMenu}>
            <FaXmark className="hover:rotate-180 transition-transform duration-200 text-3xl text-red" />
          </button>
        </div>

        {/* menu links */}
        <div>
          <h3 className="text-base font-semibold">Menu</h3>

          {/* nav links */}
          <ul className="mt-4 space-y-2 text-center">
            <li className="group">
              <Link
                to={"/"}
                className="group-hover:bg-accent-hover text-lg block rounded-md"
              >
                Home
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/about-me"}
                className="group-hover:bg-accent-hover text-lg block rounded-md"
              >
                About me
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/projects"}
                className="group-hover:bg-accent-hover text-lg block rounded-md"
              >
                Projects
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/contact"}
                className="group-hover:bg-accent-hover text-lg block rounded-md"
              >
                Contact
              </Link>
            </li>

            <li>
              <button
                className="mt-5 w-full border-secondaryColor border text-lightGray bg-primaryColor hover:text-lightGray hover:bg-secondaryColor rounded-md px-4 py-2 text-lg font-semibold"
                type="button"
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>

        {/* themes control */}

        <Themes className="mt-10" />
        {/* social links */}

        <div className="mt-10">
          <h3 className="text-base font-semibold">Social</h3>
          <div className="mt-5 flex space-x-8 text-3xl ">
            <a href="#" className="text-primaryColor">
              <FaGithub />
            </a>
            <a href="#" className="text-primaryColor">
              <FaLinkedin />
            </a>
            <a href="#" className="text-primaryColor">
              <FaTwitter />
            </a>
            <a href="#" className="text-primaryColor">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
