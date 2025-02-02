import { useState } from "react";
import { Card, Button, Tag, Modal } from "antd";
import web from "../../assets/pet.png";
import thumb from "../../assets/edu.png";
import Section from "../../layout/Section";

const ProjectDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = {
    id: 1,
    title: "E-Commerce Platform",
    image: "https://via.placeholder.com/400x800",
    description:
      "A fully responsive e-commerce platform with payment integration. This project is designed to provide a seamless shopping experience for users. It includes features such as user authentication, product search, and filtering, shopping cart, and order management. The platform is built using modern web technologies to ensure high performance and scalability. The frontend is developed with React, providing a dynamic and responsive user interface. The backend is powered by Node.js and Express, offering a robust and scalable server-side solution. MongoDB is used as the database to store user and product information securely. The project also integrates with various payment gateways to facilitate smooth and secure transactions. TailwindCSS is used for styling, ensuring a clean and modern look. The project is fully responsive, making it accessible on both desktop and mobile devices. Additionally, the platform includes an admin panel for managing products, orders, and users. This project demonstrates the use of best practices in web development, including code modularity, reusable components, and efficient state management. It also showcases the integration of third-party APIs and services to enhance functionality. Overall, this e-commerce platform is a comprehensive solution for online retail businesses, providing all the necessary features to run a successful online store.A fully responsive e-commerce platform with payment integration. This project is designed to provide a seamless shopping experience for users. It includes features such as user authentication, product search, and filtering, shopping cart, and order management. The platform is built using modern web technologies to ensure high performance and scalability. The frontend is developed with React, providing a dynamic and responsive user interface. The backend is powered by Node.js and Express, offering a robust and scalable server-side solution. MongoDB is used as the database to store user and product information securely. The project also integrates with various payment gateways to facilitate smooth and secure transactions. TailwindCSS is used for styling, ensuring a clean and modern look. The project is fully responsive, making it accessible on both desktop and mobile devices. Additionally, the platform includes an admin panel for managing products, orders, and users. This project demonstrates the use of best practices in web development, including code modularity, reusable components, and efficient state management. It also showcases the integration of third-party APIs and services to enhance functionality. Overall, this e-commerce platform is a comprehensive solution for online retail businesses, providing all the necessary features to run a successful online store.A fully responsive e-commerce platform with payment integration. This project is designed to provide a seamless shopping experience for users. It includes features such as user authentication, product search, and filtering, shopping cart, and order management. The platform is built using modern web technologies to ensure high performance and scalability. The frontend is developed with React, providing a dynamic and responsive user interface. The backend is powered by Node.js and Express, offering a robust and scalable server-side solution. MongoDB is used as the database to store user and product information securely. The project also integrates with various payment gateways to facilitate smooth and secure transactions. TailwindCSS is used for styling, ensuring a clean and modern look. The project is fully responsive, making it accessible on both desktop and mobile devices. Additionally, the platform includes an admin panel for managing products, orders, and users. This project demonstrates the use of best practices in web development, including code modularity, reusable components, and efficient state management. It also showcases the integration of third-party APIs and services to enhance functionality. Overall, this e-commerce platform is a comprehensive solution for online retail businesses, providing all the necessary features to run a successful online store.A fully responsive e-commerce platform with payment integration. This project is designed to provide a seamless shopping experience for users. It includes features such as user authentication, product search, and filtering, shopping cart, and order management. The platform is built using modern web technologies to ensure high performance and scalability. The frontend is developed with React, providing a dynamic and responsive user interface. The backend is powered by Node.js and Express, offering a robust and scalable server-side solution. MongoDB is used as the database to store user and product information securely. The project also integrates with various payment gateways to facilitate smooth and secure transactions. TailwindCSS is used for styling, ensuring a clean and modern look. The project is fully responsive, making it accessible on both desktop and mobile devices. Additionally, the platform includes an admin panel for managing products, orders, and users. This project demonstrates the use of best practices in web development, including code modularity, reusable components, and efficient state management. It also showcases the integration of third-party APIs and services to enhance functionality. Overall, this e-commerce platform is a comprehensive solution for online retail businesses, providing all the necessary features to run a successful online store.",
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

  return (
    <Section className="py-16 mt-14 bg-offWhite dark:bg-darkGray">
      <div className="max-w-4xl mx-auto px-4">
        {/* Project Image - Click to View Fullscreen */}
        <div
          className="mb-6 relative cursor-pointer rounded-lg max-h-[500px] overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={thumb}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          />
          <p className="absolute bottom-2 right-2 bg-primaryColor text-white px-3 py-1 text-sm rounded-lg">
            Click to View
          </p>
        </div>

        {/* Project Details */}
        <Card className="">
          <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted text-base leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies Used */}
          <div className="my-4">
            <h3 className="font-semibold">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Tag key={tech} color="blue">
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
              href={project.liveLink}
              target="_blank"
            >
              Live Preview
            </Button>
            <Button href={project.github.client} target="_blank">
              GitHub Client
            </Button>
            <Button href={project.github.server} target="_blank">
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
            src={web}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </Modal>
      </div>
    </Section>
  );
};

export default ProjectDetails;
