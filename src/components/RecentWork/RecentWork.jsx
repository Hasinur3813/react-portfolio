import { FaExternalLinkAlt } from "react-icons/fa";
import web from "../../assets/pet.png";
import Button from "../Shared/Button";
import { useState } from "react";
import { Modal } from "antd";
const projects = [
  {
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
    liveLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x800",
    description: "A personal portfolio to showcase projects and skills.",
    technologies: ["Next.js", "Tailwind CSS"],
    github: {
      client: "https://github.io/hasinur38",
      server: "https://github.io/hasinur3813",
    },
    detailsLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    image: "https://via.placeholder.com/400x800",
    description: "A real-time social media app for connecting with friends.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: {
      client: "https://github.io/hasinur381",
      server: "https://github.io/hasinur3813",
    },
    detailsLink: "#",
    liveLink: "#",
  },
];

const RecentWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    document.getElementById("my_modal_2").showModal();
    setSelectedProject(project);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-primaryColor">
            My Recent Work
          </h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            Here are some of the projects I&apos;ve been working on recently,
            showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project) => (
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
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

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
                <div className="flex justify-between items-end flex-grow mt-4">
                  {/* Details Button */}
                  <Button
                    className={
                      "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
                    }
                  >
                    Details
                  </Button>

                  {/* Source Button */}
                  <Button
                    onClick={() => handleOpenModal(project)}
                    className={
                      "!bg-lightGray border border-primaryColor !text-primaryColor hover:!text-lightGray"
                    }
                  >
                    Source
                  </Button>
                  {/* Live Button */}
                  <Button className={"flex gap-2 items-center"}>
                    Live <FaExternalLinkAlt />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>View All Project</Button>
        </div>

        {/* modal for source code links */}

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            {/* modal title */}
            <h3 className="font-bold text-primaryColor text-lg mb-4">
              Choose a repository below
            </h3>

            {/* repository link */}
            {/* client */}
            <p className="py-2">
              <span className="font-semibold text-base inline-block">
                Client:{" "}
              </span>{" "}
              <a
                className="link text-blue-500"
                href={selectedProject?.github?.client}
                target="_blank"
              >
                {selectedProject?.github?.client}
              </a>
            </p>
            {/* server */}
            <p>
              <span className="font-semibold text-base inline-block">
                Server:{" "}
              </span>{" "}
              <a
                className="link text-blue-500"
                href={selectedProject?.github?.server}
                target="_blank"
              >
                {selectedProject?.github?.server}
              </a>
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedProject(null)}>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
};

export default RecentWork;
