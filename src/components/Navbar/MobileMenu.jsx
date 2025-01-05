import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
const MobileMenu = ({ handleCloseMenu, getColorName, showMobileMenu }) => {
  return (
    <div
      className={`${
        showMobileMenu && "!translate-x-0"
      } transition-transform duration-200 translate-x-full fixed md:hidden top-0 right-0 w-full min-h-screen z-40 bg-black/50 flex justify-end`}
    >
      <div className="w-2/3 min-h-screen p-3 bg-white">
        {/* close menu button */}
        <div className="flex justify-end">
          <button type="button" onClick={handleCloseMenu}>
            <FaXmark className="hover:rotate-180 transition-transform duration-200 text-3xl text-red-500" />
          </button>
        </div>

        {/* menu links */}
        <div>
          <h3 className="text-base font-semibold">Menu</h3>

          {/* nav links */}
          <ul className="mt-4 space-y-2 text-center">
            <li className="group">
              <a
                className="group-hover:bg-primaryColor/10 text-lg block rounded-md"
                href="http://"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-primaryColor/10 text-lg block rounded-md"
                href="http://"
              >
                Services
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-primaryColor/10 text-lg block rounded-md"
                href="http://"
              >
                About Me
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-primaryColor/10 text-lg block rounded-md"
                href="http://"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:bg-primaryColor/10 text-lg block rounded-md"
                href="http://"
              >
                Contact Me
              </a>
            </li>
            <li>
              <button
                className="mt-5 w-full border-secondaryColor border bg-primaryColor/20 rounded-md px-4 py-2 text-lg font-semibold"
                type="button"
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>

        {/* themes control */}
        <div className="mt-10">
          <h3 className="text-base font-semibold">Themes</h3>

          <div className="flex justify-center items-center gap-3 mt-4">
            <h5 className="text-lg font-bold">Light</h5>
            <input type="checkbox" className="toggle toggle-lg" />
            <h5 className="text-lg font-bold">Dark</h5>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-base">Colors</h3>

            <div onClick={getColorName} className="mt-5 flex gap-5 flex-wrap">
              <button
                name="primary"
                className="bg-primaryColor w-6 h-6 rounded-full"
              ></button>
              <button
                name="pink"
                className="bg-pink-500 w-6 h-6 rounded-full"
              ></button>
              <button
                name="violet"
                className="bg-violet-500 w-6 h-6 rounded-full"
              ></button>
              <button
                name="green"
                className="bg-green-500 w-6 h-6 rounded-full"
              ></button>
              <button
                name="teal"
                className="bg-teal-600 w-6 h-6 rounded-full"
              ></button>
              <button
                name="blue"
                className="bg-blue-400 w-6 h-6 rounded-full"
              ></button>
              <button
                name="yellow"
                className="bg-yellow-500 w-6 h-6 rounded-full"
              ></button>
            </div>

            {/* social links */}

            <div className="mt-10">
              <h3 className="text-base font-semibold">Social</h3>
              <div className="mt-5 flex space-x-8 text-primaryAccent text-2xl ">
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
      </div>
    </div>
  );
};

export default MobileMenu;
