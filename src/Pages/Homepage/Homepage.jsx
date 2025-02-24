import AboutMe from "../../components/AboutMe/AboutMe";

import Education from "../../components/Education/Education";

import Hero from "../../components/Hero/Hero";
import HowICode from "../../components/HowICode/HowICode";
import HowIWork from "../../components/HowIWork/HowIWork";
import RecentWork from "../../components/RecentWork/RecentWork";
import Skills from "../../components/Skills/Skills";

const Homepage = () => {
  return (
    <div>
      <p className="font-semibold text-3xl py-3 bg-white text-primaryColor animate-pulse">
        Under Development
      </p>
      <Hero />
      <AboutMe />
      <Education />
      <HowIWork />
      <HowICode />
      <RecentWork />
      <Skills />
    </div>
  );
};

export default Homepage;
