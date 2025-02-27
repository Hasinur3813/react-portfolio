import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";
const Footer = () => {
  const { fadeUp, slideFromRight, fadeDown } = useAnimation();

  return (
    <footer className="bg-muted text-muted py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              className="text-2xl font-bold text-white"
            >
              Hasinur Rahman
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              className="text-sm text-lightGray"
            >
              Front-End Developer | Passionate about building user-friendly web
              experiences.
            </motion.p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-end">
            <div>
              <motion.h4
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold text-sm mb-2"
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  custom={0}
                >
                  <a href="#about-me" className="hover:text-white">
                    About Me
                  </a>
                </motion.li>
                <motion.li
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.2}
                >
                  <a href="#skills" className="hover:text-white">
                    Skills
                  </a>
                </motion.li>
                <motion.li
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.3}
                >
                  <a href="#work" className="hover:text-white">
                    Recent Work
                  </a>
                </motion.li>
                <motion.li
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.5}
                >
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </motion.li>
              </ul>
            </div>

            <div>
              <motion.h4
                variants={fadeDown}
                initial="hidden"
                whileInView="visible"
                custom={0}
                className="text-white font-semibold text-sm mb-2"
              >
                Contact
              </motion.h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={0}
                >
                  Email:{" "}
                  <a
                    href="mailto:hasinur.rahman1332@gmail.com"
                    className="hover:text-white"
                  >
                    hasinur.rahman1332@gmail.com
                  </a>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.3}
                >
                  Phone:{" "}
                  <a href="tel:+8801773061332" className="hover:text-white">
                    +880 1773 06 1332
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              href="https://github.com/Hasinur3813"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              href="https://www.linkedin.com/in/hasinur3813"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.5}
              href="mailto:hasinur.rahman1332@gmail.com"
              className="hover:text-white text-xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="mt-4 md:mt-0"
          >
            &copy; {new Date().getFullYear()} Hasinur Rahman. All rights
            reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
