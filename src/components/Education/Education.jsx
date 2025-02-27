import { Card } from "antd";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import useAnimation from "../../hooks/useAnimation";
const educationData = [
  {
    degree: "Master of Social Science (MSS)",
    university: "National University",
    year: "2020 - 2021",
    major: "Economics",
    description:
      "Specialized in policy analysis and social research, deepening my expertise in data-driven decision-making.",
  },
  {
    degree: "Bachelor of Social Science (BSS)",
    university: "National University",
    year: "2016 - 2020",
    major: "Economics",
    description:
      "Focused on sociology, economics, and research methodologies. Gained strong analytical and communication skills.",
  },
];

const Education = () => {
  const { fadeUp } = useAnimation();
  return (
    <section className="py-16 bg-offWhite dark:bg-bg-dark">
      <div className="container mx-auto px-5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          className="text-3xl font-bold text-center text-primaryColor dark:text-white"
        >
          Education
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          className="text-center text-gray-600 dark:text-gray-300 mt-2"
        >
          My academic journey and qualifications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {educationData.map((edu, idx) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.5}
              key={idx}
            >
              <Card className="shadow-lg dark:bg-muted dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-primaryColor text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300">
                      <span className="text-text dark:text-lightGray">
                        Major:
                      </span>{" "}
                      {edu.major}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.university} ({edu.year})
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
