import { Alert } from "antd";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../utils/projects";
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
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* message */}
        <div className="mt-10 max-w-md mx-auto">
          {" "}
          <Alert message="More Projects to be Added" type="info" showIcon />
        </div>
      </div>
    </section>
  );
};

export default Projects;
