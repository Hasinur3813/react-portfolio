import { FaArrowRight } from "react-icons/fa";
import myPhoto from "../../assets/myPhoto.jpg";
import Section from "../../layout/Section";

const AboutMe = () => {
  return (
    <Section className="py-16 dark:bg-darkGray">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-24 lg:gap-10">
        {/* left content */}
        <div className="lg:flex-1 relative flex justify-center">
          {/* Blob Background */}
          <div className="absolute w-60 h-60 bg-primaryColor rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-bg-secondary rounded-full blur-2xl "></div>

          {/* Profile Photo */}
          <img
            src={myPhoto}
            alt="Profile"
            className="w-64 -rotate-2 h-64 object-cover rounded-full border-4 ring-primaryColor ring"
          />
        </div>

        {/* right Content */}
        <div className="lg:flex-1 space-y-6 ">
          <h2 className="text-3xl sm:text-4xl  font-bold text-primaryColor">
            Designing Digital Experiences That Inspire
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-primaryColor">
              Front-End Developer
            </span>{" "}
            who specializes in creating visually stunning and interactive web
            experiences. Whether it's crafting responsive designs, implementing
            smooth animations, or ensuring seamless user interactions, I bring
            ideas to life with precision and creativity.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>✨ Expert in React, Tailwind CSS, and JavaScript ES6+</li>
            <li>✨ Strong focus on UI/UX principles and design systems</li>
            <li>✨ Skilled at creating accessible and responsive layouts</li>
            <li>
              ✨ Experienced in integrating animations with React Awesome
              Reveal, Magic UI and Framer Motion
            </li>
          </ul>
          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "/about")}
            className="group flex items-center gap-2 px-6 py-3 bg-primaryColor text-lightGray text-lg font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-secondaryColor transition-all duration-200"
          >
            Know More{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
