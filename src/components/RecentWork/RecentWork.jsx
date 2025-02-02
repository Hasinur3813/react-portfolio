import Button from "../Shared/Button";

import ProjectCard from "../ProjectCard/ProjectCard";

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
  return (
    <section className="py-16 bg-lightGray dark:bg-darkGray">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>View All Project</Button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
