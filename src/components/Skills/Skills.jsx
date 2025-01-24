import { Divider } from "antd";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "html5",
      "css3",
      "bootstrap",
      "tailwindcss",
      "javascript",
      "react",
      "daisy UI",
      "ant design",
      "react awesome reveal",
      "swiper.js",
    ],
  },
  {
    category: "Backend",
    technologies: ["node.js", "express.js", "mongodb", "JWT", "firebase"],
  },
  {
    category: "Tools",
    technologies: ["git", "gitHub", "VS Code", "postman"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            My Technical Skills
          </h2>
          <p className="text-gray-600 mt-2">
            A comprehensive breakdown of my technical expertise.
          </p>
        </div>

        {/* Skills Cards */}
        <dizv className="flex flex-col  gap-y-20">
          {skills.map((skill, index) => (
            <div key={index}>
              <Divider
                orientation={skill.category === "Backend" ? "right" : "left"}
              >
                <h3 className="text-2xl font-bold text-darkGray">
                  {skill.category}
                </h3>
              </Divider>

              <div className="flex flex-wrap justify-center items-center gap-5">
                {skill.technologies.map((tech, idx) => (
                  <p
                    key={idx}
                    className="flex flex-col items-center justify-center gap-y-2 font-semibold  bg-gradient-to-r from-primaryColor to-secondaryColor px-3 py-2 rounded-md text-white shadow-primaryColor "
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </dizv>
      </div>
    </section>
  );
};

export default Skills;
