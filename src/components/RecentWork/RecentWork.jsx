import Button from "../Shared/Button";

import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../utils/projects";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section className="py-16 bg-lightGray dark:bg-darkGray">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-primaryColor">
            My Recent Work
          </h2>
          <p className="text-darkGray dark:text-lightGray mt-2 max-w-lg mx-auto">
            Here are some of the projects I&apos;ve been working on recently,
            showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to={"/projects"}>
            <Button>View All Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
