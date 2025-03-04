import Button from "../Shared/Button";

import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../utils/projects";
import { Link } from "react-router-dom";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";

const RecentWork = () => {
  const { fadeUp, zoomIn } = useAnimation();
  return (
    <section className="py-16 bg-lightGray dark:bg-darkGray">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="font-bold text-3xl text-primaryColor"
          >
            My Recent Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            className="text-darkGray dark:text-lightGray mt-2 max-w-lg mx-auto"
          >
            Here are some of the projects I&apos;ve been working on recently,
            showcasing my skills in web development and design.
          </motion.p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.2}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div variants={zoomIn} initial="hidden" whileInView="visible">
            <Link to={"/projects"}>
              <Button>View All Projects</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
