import { FaFacebook, FaGithub, FaLinkedin, FaXmark } from "react-icons/fa6";
import Themes from "../Shared/Themes";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import useAnimation from "../../hooks/useAnimation";
import resume from "../../assets/hasinur_rahman.pdf";

const MobileMenu = ({ handleCloseMenu, showMobileMenu }) => {
  const { slideFromRight, fadeUp, zoomIn } = useAnimation();
  const menuRef = useRef(null);

  const handleCloseMobileMenu = (e) => {
    const menu = menuRef.current;
    if (e.target.contains(menu) || e.target.tagName === "A") {
      handleCloseMenu();
    }
  };

  return (
    // whole page container
    <div
      onClick={handleCloseMobileMenu}
      className={`${
        showMobileMenu && "!translate-x-0"
      }   translate-x-full fixed md:hidden top-0 right-0 w-full min-h-screen z-[1000] bg-black/50 flex justify-end`}
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
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="text-base font-semibold"
          >
            Menu
          </motion.h3>

          {/* nav links */}
          <ul className="mt-4 space-y-2 text-center font-semibold">
            <motion.li
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              custom={0}
              className="group"
            >
              <NavLink
                to={"/"}
                className="group-hover:text-primaryColor text-lg block rounded-md "
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              className="group"
            >
              <NavLink
                to={"/about-me"}
                className="group-hover:text-primaryColor text-lg block rounded-md "
              >
                About me
              </NavLink>
            </motion.li>
            <motion.li
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              className="group"
            >
              <NavLink
                to={"/projects"}
                className="group-hover:text-primaryColor text-lg block rounded-md "
              >
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              className="group"
            >
              <NavLink
                to={"/contact"}
                className="group-hover:text-primaryColor text-lg block rounded-md "
              >
                Contact
              </NavLink>
            </motion.li>

            <motion.li
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              custom={0}
            >
              <a href={resume} download="hasiur_rahman.pdf">
                <button
                  className="mt-5 w-full border-secondaryColor border text-lightGray bg-primaryColor hover:text-lightGray hover:bg-secondaryColor rounded-md px-4 py-2 text-lg font-semibold"
                  type="button"
                >
                  Get Resume
                </button>
              </a>
            </motion.li>
          </ul>
        </div>

        {/* themes control */}

        <Themes className="mt-10" />
        {/* social links */}

        <div className="mt-10">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="text-base font-semibold"
          >
            Social
          </motion.h3>
          <div className="mt-5 flex space-x-8 text-3xl ">
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              href="https://github.com/Hasinur3813"
              className="hover:text-primaryColor shadow-primaryColor"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              href="https://www.linkedin.com/in/hasinur3813/"
              className=" hover:text-primaryColor"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              href="https://www.facebook.com/ha3813"
              className="hover:text-primaryColor"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
