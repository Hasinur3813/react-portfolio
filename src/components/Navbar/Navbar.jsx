import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-primaryColor/5">
      <div className="container mx-auto px-3">
        <div className="flex py-5 justify-between items-center">
          {/* navbar start */}
          <div className="">
            <a className="text-3xl font-semibold text-primaryColor" href="#">
              Hasinur .
            </a>
          </div>
          {/* navbar end */}
          <div className="flex items-center">
            <ul className=" space-x-4 text-base items-center hidden sm:flex">
              <li className="relative">
                <a
                  className="hover:text-secondaryColor transition-color duration-200 before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:text-secondaryColor transition-color duration-200 before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
                  href=""
                >
                  Services
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:text-secondaryColor before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
                  href=""
                >
                  Projects
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:text-secondaryColor transition-color duration-200 before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
                  href=""
                >
                  About me
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:text-secondaryColor transition-color duration-200 before:content-[''] before:absolute before:-bottom-1 before:rounded-sm before:left-1/2 before:right:1/2 hover:before:left-0 hover:before:right-0 before:w-0 before:hover:w-full before:text-center before:h-1 before:transition-all before:duration-200 before:bg-primaryColor"
                  href=""
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  className="ms-10 border-secondaryColor border bg-primaryColor/20 rounded-md px-4 py-2 text-lg font-semibold"
                  type="button"
                >
                  Hire me
                </button>
              </li>
            </ul>

            {/* hamburger menu */}
            <div>
              <button type="button">
                <RiMenu2Line className="text-xl bg-primaryColor text-white rounded p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
