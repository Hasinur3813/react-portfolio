import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-muted py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Hasinur Rahman</h1>
            <p className="text-sm text-muted dark:text-lightGray">
              Front-End Developer | Passionate about building user-friendly web
              experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-end">
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#about-me" className="hover:text-white">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-white">
                    Recent Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hasinur.rahman1332@gmail.com"
                    className="hover:text-white"
                  >
                    hasinur.rahman1332@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+8801773061332" className="hover:text-white">
                    +880 1773 06 1332
                  </a>
                </li>
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
            <a
              href="https://github.com/Hasinur3813"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hasinur3813"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:hasinur.rahman1332@gmail.com"
              className="hover:text-white text-xl"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Hasinur Rahman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
