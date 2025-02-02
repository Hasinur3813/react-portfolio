import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
const project = {
  id: 1,
  title: "E-Commerce Platform",
  image: "https://via.placeholder.com/400x800",
  description:
    "A fully responsive e-commerce platform with payment integration.",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "tailwindcss",
    "css3",
    "antd",
  ],
  github: {
    client: "https://github.io/hasinur3813",
    server: "https://github.io/hasinur3813",
  },
  detailsLink: "#",
  liveLink: "https://github.com",
};

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-16 mt-3 md:mt-5 bg-offWhite dark:bg-darkGray">
      <PageHeader
        heading={"My Work & Creations"}
        title={
          "Explore some of my recent projects that highlight my skills in front-end development, UI/UX design, and seamless user experiences."
        }
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-36">
          {Array(6)
            .fill("h")
            .map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
