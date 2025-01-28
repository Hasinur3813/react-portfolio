import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import HowICode from "../../components/HowICode/HowICode";
import HowIWork from "../../components/HowIWork/HowIWork";
import RecentWork from "../../components/RecentWork/RecentWork";
import Skills from "../../components/Skills/Skills";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <HowIWork />
      <HowICode />
      <RecentWork />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
