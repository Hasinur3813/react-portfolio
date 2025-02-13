import { useEffect, useState } from "react";
import { Card, Button, Tag, Modal } from "antd";

import Section from "../../layout/Section";
import projects from "../../utils/projects";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const project = projects.find((proj) => proj.id === parseInt(id));
    if (project) {
      setProject(project);
      setLoading(false);
    } else {
      setProject({});
      setLoading(false);
    }
  }, [id, project]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Section className="py-16 mt-14 bg-offWhite dark:bg-darkGray ">
      <div className="max-w-4xl mx-auto px-3">
        {/* Project Image - Click to View Fullscreen */}
        <div
          className="mb-6 relative cursor-pointer rounded-lg max-h-[500px] overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={project.image}
            alt={project?.title}
            className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          />
          <p className="absolute bottom-2 right-2 bg-primaryColor text-white px-3 py-1 text-sm rounded-lg">
            Click to View
          </p>
        </div>

        {/* Project Details */}
        <Card className="dark:bg-bg-dark dark:text-lightGray border-none">
          <h1 className="text-2xl font-bold mb-4">{project?.title}</h1>
          <p className="text-muted text-base leading-relaxed mb-4 dark:text-lightGray">
            {project?.description}
          </p>

          {/* key features */}
          <div>
            <h3 className="font-semibold text-primaryColor text-lg">
              Key Features:
            </h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature, i) => (
                <li key={i} className="capitalize">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="my-4">
            <h3 className="font-semibold text-lg text-primaryColor">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project?.technologies.map((tech) => (
                <Tag key={tech} color="blue" className="text-base">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 flex-wrap mt-20 lg:mt-16">
            <Button
              className="bg-primaryColor hover:!bg-secondaryColor"
              type="primary"
              href={project?.liveLink}
              target="_blank"
            >
              Live Preview
            </Button>

            <Button href={project?.github.client} target="_blank">
              GitHub Client
            </Button>
            <Button
              className="!bg-lightGray"
              href={project?.github.server}
              target="_blank"
              disabled={!project?.github?.server}
            >
              GitHub Server
            </Button>
          </div>
        </Card>

        {/* Modal for Full Image View */}
        <Modal
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
          centered
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </Modal>
      </div>
    </Section>
  );
};

export default ProjectDetails;
