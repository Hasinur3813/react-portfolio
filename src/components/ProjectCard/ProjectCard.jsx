import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Shared/Button";

import ProjectModal from "../ProjectModal/ProjectModal";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  // const handleOpenModal = () => {
  //   document.getElementById("my_modal_2").showModal();
  // };
  return (
    <>
      <div
        key={project.id}
        className="bg-lightGray dark:bg-bg-dark rounded-2xl shadow-md group hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
      >
        {/* Animated Image */}
        <div className="relative overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full object-cover transform group-hover:scale-105 transition-transform duration-200 ease"
          />
        </div>

        {/* Project Content */}
        <div className="p-6  flex-grow flex flex-col">
          {/* Title */}
          <h3 className="font-semibold text-xl text-darkGray mb-2 group-hover:text-primaryColor transition-colors dark:text-lightGray">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted dark:text-lightGray text-sm mb-4">
            {project.description.slice(0, 100)}...
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project["main-technologies"].map((technology) => (
              <span
                key={technology}
                className="inline-block bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full text-xs px-3 py-1 shadow-sm text-white font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between md:justify-between gap-x-2 md:gap-x-0 items-end flex-grow  mt-4">
            {/* Details Button */}
            <Link to={`/project/${project.id}`}>
              <Button
                className={
                  "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
                }
              >
                Details
              </Button>
            </Link>

            {/* Source Button */}
            <a href={project?.github?.client} target="_blank">
              <Button
                className={
                  "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
                }
              >
                Source
              </Button>
            </a>
            {/* Live Button */}
            <a href={project.liveLink} target="_blank">
              <Button className={"flex gap-2 items-center"}>
                Live <FaExternalLinkAlt />
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Modal for source links */}
      <ProjectModal selectedProject={project} />
    </>
  );
};

export default ProjectCard;
