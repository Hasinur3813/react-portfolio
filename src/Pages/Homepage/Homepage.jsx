import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/Hero/Hero";
import HowICode from "../../components/HowICode/HowICode";
import Skills from "../../components/Skills/Skills";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <HowICode />
      <Skills />
    </div>
  );
};

export default Homepage;
