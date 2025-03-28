import { FaArrowRight } from "react-icons/fa";
import myPhoto from "../../assets/myPhoto.jpg";
import Section from "../../layout/Section";
import { Link } from "react-router-dom";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { fadeDown, slideFromLeft, fadeUp, zoomIn, zoomOut } = useAnimation();
  return (
    <Section className="py-16 dark:bg-darkGray">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-24 lg:gap-10">
        {/* left content */}

        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          className="lg:flex-1 relative flex justify-center"
        >
          {/* Blob Background */}
          <div className="absolute w-60 h-60 bg-primaryColor rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-bg-secondary rounded-full blur-2xl "></div>

          {/* Profile Photo */}
          <img
            src={myPhoto}
            alt="Profile"
            className="w-64 -rotate-2 h-64 object-cover rounded-full border-4 ring-primaryColor ring"
          />
        </motion.div>

        {/* right Content */}
        <div className="lg:flex-1 space-y-6 ">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl sm:text-4xl  font-bold text-primaryColor"
          >
            Designing Digital Experiences That Inspire
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            className="text-lg dark:text-lightGray text-gray-800 leading-relaxed"
          >
            I’m a passionate{" "}
            <span className="font-semibold text-primaryColor">
              Front-End Developer
            </span>{" "}
            who specializes in creating visually stunning and interactive web
            experiences. Whether it&apos;s crafting responsive designs,
            implementing smooth animations, or ensuring seamless user
            interactions, I bring ideas to life with precision and creativity.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            className="text-sm text-muted dark:text-gray-400 space-y-1"
          >
            <li>✨ Expert in React, Tailwind CSS, and JavaScript ES6+</li>
            <li>✨ Strong focus on UI/UX principles and design systems</li>
            <li>✨ Skilled at creating accessible and responsive layouts</li>
            <li>
              ✨ Experienced in integrating animations with React Awesome
              Reveal, Magic UI and Framer Motion
            </li>
          </motion.ul>
          {/* CTA Button */}
          <Link to={"/about-me"} className="inline-block">
            <motion.button
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              className="group flex items-center gap-2 px-6 py-3 bg-primaryColor text-lightGray text-lg font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-secondaryColor transition-all duration-200"
            >
              Know More
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
