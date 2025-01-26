import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/Hero/Hero";
import HowICode from "../../components/HowICode/HowICode";
import RecentWork from "../../components/RecentWork/RecentWork";
import Skills from "../../components/Skills/Skills";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <HowICode />
      <Skills />
      <RecentWork />
    </div>
  );
};

export default Homepage;
