import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Shared/Button";
import web from "../../assets/pet.png";
import ProjectModal from "../ProjectModal/ProjectModal";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handleOpenModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <>
      <div
        key={project.id}
        className="bg-white rounded-2xl shadow-md group hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
      >
        {/* Animated Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={web}
            alt={project.title}
            className="h-auto w-full object-cover transform group-hover:translate-y-[-90%] transition-transform duration-[10s] ease"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="font-semibold text-xl text-darkGray mb-2 group-hover:text-primaryColor transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="inline-block bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full text-xs px-3 py-1 shadow-sm text-white font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-between gap-x-2 md:gap-x-0 items-end flex-grow  mt-4">
            {/* Details Button */}
            <Link to={`/project/${project.title}`}>
              <Button
                className={
                  "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
                }
              >
                Details
              </Button>
            </Link>

            {/* Source Button */}
            <Button
              onClick={handleOpenModal}
              className={
                "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
              }
            >
              Source
            </Button>
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
