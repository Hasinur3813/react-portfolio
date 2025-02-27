import { Divider } from "antd";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "react",
      "tailwind css",
      "bootstrap",
      "framer-motion",
      "react-awesome-reveal",
      "aos",
      "daisy UI",
      "ant design",
      "swiper js",
      "slick slider",
    ],
  },
  {
    category: "Backend",
    technologies: ["node.js", "express.js", "mongodb", "JWT", "firebase"],
  },
  {
    category: "Tools",
    technologies: ["git", "gitHub", "VS Code", "postman", "netlify", "vercel"],
  },
];

const Skills = () => {
  const { fadeUp } = useAnimation();
  return (
    <section className="py-16 bg-white dark:bg-bg-dark ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="text-3xl font-bold text-text dark:text-lightGray"
          >
            My Technical Skills
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            className="text-text dark:text-lightGray mt-2"
          >
            A comprehensive breakdown of my technical expertise.
          </motion.p>
        </div>

        {/* Skills Cards */}
        <div className="flex flex-col  gap-y-2">
          {skills.map((skill, index) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.3}
              key={index}
            >
              <Divider
                orientation={skill.category === "Backend" ? "right" : "left"}
              >
                <h3 className="text-2xl font-bold text-darkGray dark:text-lightGray">
                  {skill.category}
                </h3>
              </Divider>

              <div
                className={`flex flex-wrap justify-center max-w-lg ${
                  skill.category === "Backend" && "ml-auto"
                } bg-offWhite p-6 rounded-lg items-center gap-5 border dark:bg-muted border-primaryColor`}
              >
                {skill.technologies.map((tech, idx) => (
                  <p
                    key={idx}
                    className="flex flex-col items-center justify-center gap-y-2 font-semibold  bg-gradient-to-r from-primaryColor to-secondaryColor px-3 py-2 rounded-md text-white shadow-primaryColor capitalize "
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
