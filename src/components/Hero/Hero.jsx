import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaFacebook,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../../assets/myPhoto.jpg";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { Button } from "antd";
import Section from "../../layout/Section";

const Hero = () => {
  return (
    <Section>
      <div className=" flex flex-col md:flex-row gap-y-20 items-center container mx-auto px-3  pt-10 sm:pt-20">
        {/* Left Content */}
        <div className=" flex-1 space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            <span className="animate-greeting inline-block">👋</span> Hi, I am a{" "}
            <span className="text-primaryColor">
              <Typewriter
                words={[
                  "Web Designer",
                  "Web Developer",
                  "Creative Thinker",
                  "Web Researcher",
                ]}
                loop={false}
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
                cursor={true}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            A passionate MERN stack developer specializing in creating
            user-friendly web applications. I love crafting elegant solutions to
            complex problems.
          </p>
          {/* CTA */}
          <div className="space-y-4">
            <Button
              type="primary"
              className="group flex gap-2 items-center px-6 py-6 bg-primaryColor text-white font-semibold text-lg rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200 hover:!bg-secondaryColor"
            >
              <FaDownload className="group-hover:animate-bounce" />{" "}
              <span>Get Resume</span>
            </Button>
          </div>
          {/* Social Links */}
          <div className="flex space-x-8 text-primaryAccent text-3xl ">
            <a href="#" className="hover:text-primaryColor">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-primaryColor">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-primaryColor">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primaryColor">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className=" relative flex-1 flex justify-center">
          {/*setting  technology icon */}
          <div className="absolute">
            <span className="relative -top-10 -left-32 lg:-left-64">
              <FaReact className="text-[#61DAFB] text-3xl animate-pulse" />
            </span>
            <span className="relative -right-32 sm:-right-40">
              <FaNodeJs className="text-[#68A063] text-3xl animate-pulse" />
            </span>
            <span className="relative top-44 -left-32 md:-left-44">
              <FaJs className="text-[#F7DF1E] text-3xl animate-pulse" />
            </span>
          </div>

          {/* Blob Effect */}
          <div className="absolute w-72 h-72 bg-primaryColor/50 rounded-full animate-pulse blur-lg -z-10"></div>
          {/* Profile Photo */}
          <img
            src={myPhoto}
            alt="Profile"
            className="w-64 -rotate-2 h-64 object-cover rounded-full border-4 ring-primaryColor ring"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
