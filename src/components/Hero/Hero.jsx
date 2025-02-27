import { FaGithub, FaLinkedin, FaDownload, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { Button } from "antd";
import Section from "../../layout/Section";
import Lottie from "lottie-react";
import developer from "../../assets/developer.json";
import { motion } from "framer-motion";
import resume from "../../assets/hasinur_rahman.pdf";
import useAnimation from "../../hooks/useAnimation";

const Hero = () => {
  const { fadeUp, fadeDown, slideFromLeft, zoomIn } = useAnimation();

  return (
    <Section className="py-16 dark:bg-darkGray mt-12 relative overflow-hidden">
      <div className="absolute  w-[300px] h-[200px] bg-primaryColor rounded-full z-10 blur-3xl top-48 right-20 opacity-30  "></div>

      <div className=" flex flex-col md:flex-row gap-y-20 items-center container mx-auto px-3  pt-10 sm:pt-20">
        {/* Left Content */}
        <div className=" flex-1 space-y-6">
          <motion.h1
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="dark:text-lightGray text-3xl leading-relaxed md:text-3xl lg:text-4xl font-bold text-darkGray"
          >
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
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-lg text-muted leading-relaxed dark:text-lightGray"
          >
            A passionate Frontend developer specializing in creating
            user-friendly web applications. I love crafting elegant solutions to
            complex problems.
          </motion.p>
          {/* CTA */}
          <div className="space-y-4">
            <motion.a
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              href={resume}
              download="hasinur_rahman.pdf"
              className="inline-block"
            >
              <Button
                type="primary"
                className="group flex gap-2 items-center px-6 py-6 hover:!bg-primaryColor border-primaryColor font-semibold text-lg rounded-md shadow-md hover:shadow-xl transition-shadow duration-200 bg-offWhite text-primaryColor"
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Get Resume</span>
              </Button>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8 text-primaryColor text-3xl ">
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
              href="https://www.linkedin.com/in/hasinur3813"
              className=" hover:text-primaryColor"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              href="https://www.facebook.com/ha3813"
              className="hover:text-primaryColor"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <div className=" relative flex-1 flex justify-center">
          <motion.span
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            className="w-full flex justify-center items-center"
          >
            <Lottie
              animationData={developer}
              loop={true}
              className="md:w-1/2 w-3/4"
            />
          </motion.span>
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
