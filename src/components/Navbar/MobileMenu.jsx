import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Themes from "../Shared/Themes";
const MobileMenu = ({ handleCloseMenu, showMobileMenu }) => {
  return (
    <div
      className={`${
        showMobileMenu && "!translate-x-0"
      }   translate-x-full fixed md:hidden top-0 right-0 w-full min-h-screen z-40 bg-black/50 flex justify-end`}
    >
      <div
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
              <a
                className="group-hover:bg-accent-hover text-lg block rounded-md"
                href="http://"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-accent-hover text-lg block rounded-md"
                href="http://"
              >
                Services
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-accent-hover text-lg block rounded-md"
                href="http://"
              >
                About Me
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-accent-hover text-lg block rounded-md"
                href="http://"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-accent-hover text-lg block rounded-md"
                href="http://"
              >
                Contact Me
              </a>
            </li>
            <li>
              <button
                className="mt-5 w-full border-secondaryColor border hover:bg-primaryColor hover:text-lightGray rounded-md px-4 py-2 text-lg font-semibold"
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
