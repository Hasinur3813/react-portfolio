import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaFacebook,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { Button } from "antd";
import Section from "../../layout/Section";
import Lottie from "lottie-react";
import developer from "../../assets/developer.json";

import resume from "../../assets/hasinur_rahman.pdf";

const Hero = () => {
  return (
    <Section className="py-16 dark:bg-darkGray mt-12 relative overflow-hidden">
      <div className="absolute  w-[300px] h-[300px] bg-primaryColor rounded-full z-10 blur-3xl top-20 -right-40 opacity-45  "></div>

      <div className=" flex flex-col md:flex-row gap-y-20 items-center container mx-auto px-3  pt-10 sm:pt-20">
        {/* Left Content */}
        <div className=" flex-1 space-y-6">
          <h1 className="dark:text-lightGray text-3xl leading-relaxed md:text-3xl lg:text-4xl font-bold text-darkGray">
            <span className="animate-greeting inline-block ">👋</span> Hi, I am
            a <br />{" "}
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

          <p className="text-lg text-muted leading-relaxed dark:text-lightGray">
            A passionate MERN stack developer specializing in creating
            user-friendly web applications. I love crafting elegant solutions to
            complex problems.
          </p>
          {/* CTA */}
          <div className="space-y-4">
            <a href={resume} download="hasinur_rahman.pdf">
              <Button
                type="primary"
                className="group flex gap-2 items-center px-6 py-6 hover:!bg-primaryColor border-primaryColor font-semibold text-lg rounded-md shadow-md hover:shadow-xl transition-shadow duration-200 bg-offWhite text-primaryColor"
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Get Resume</span>
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8 text-primaryColor text-3xl ">
            <a
              href="https://github.com/Hasinur3813"
              className="hover:text-primaryColor shadow-primaryColor"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hasinur3813/"
              className=" hover:text-primaryColor"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/ha3813"
              className="hover:text-primaryColor"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className=" relative flex-1 flex justify-center">
          <Lottie animationData={developer} loop={true} className="w-1/2" />
          {/*setting  technology icon */}
          <div className="absolute">
            <span className="relative -top-10 -left-20 lg:-left-32">
              <FaReact className="text-[#61DAFB] text-3xl animate-pulse" />
            </span>
            <span className="relative -right-32 sm:-right-40">
              <FaNodeJs className="text-[#68A063] text-3xl animate-pulse" />
            </span>
            <span className="relative  -left-32 md:-left-44">
              <FaJs className="text-[#F7DF1E] text-3xl animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
