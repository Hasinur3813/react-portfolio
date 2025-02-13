import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full space-y-6 ">
      <h3 className="text-2xl text-primaryColor font-semibold">Contact Info</h3>
      <div className="space-y-2">
        <div className="flex space-x-4 group items-center dark:text-lightGray">
          <div className="p-2 bg-darkGray  dark:bg-white shadow-sm rounded-full">
            <FaPhone className="text-primaryColor group-hover:-rotate-45 transition-transform duration-200 text-xl" />
          </div>
          <a href="tel:+8801773061332" className="hover:text-primaryColor">
            +8801773061332
          </a>
        </div>

        <div className="flex space-x-4 group items-center dark:text-lightGray">
          <div className="p-2 bg-darkGray dark:bg-white shadow-sm rounded-full">
            <FaEnvelope className="text-primaryColor  text-xl group-hover:-rotate-45 transition-transform duration-200 " />
          </div>
          <a
            href="mailto:hasinur.rahman1332@gmail.com"
            className="hover:text-primaryColor"
          >
            hasinur.rahman1332@gmail.com
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-primaryColor">Follow Me</h4>
        <div className="flex space-x-4 items-center">
          <a
            href="https://www.linkedin.com/in/hasinur3813"
            className="text-blue-600 text-3xl "
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Hasinur3813"
            className="text-gray-800 dark:text-gray-400 text-3xl "
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
