import { FaSearch, FaRegLightbulb, FaCode } from "react-icons/fa";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "Before starting any project, I dive deep into understanding the requirements, studying the target audience, and analyzing competitors.",
    icon: <FaSearch className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Plan",
    description:
      "I structure the entire project workflow, design wireframes, and outline the best technologies to use for an efficient solution.",
    icon: <FaRegLightbulb className="text-4xl text-yellow-500" />,
  },
  {
    id: 3,
    title: "Code",
    description:
      "Turning ideas into reality by writing clean, scalable, and optimized code while ensuring a great user experience.",
    icon: <FaCode className="text-4xl text-green-500" />,
  },
];

const HowIWork = () => {
  const { fadeUp } = useAnimation();

  return (
    <section className="bg-lightGray dark:bg-darkGray py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="text-3xl font-bold text-primaryColor"
          >
            How I Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            className="text-muted dark:text-lightGray"
          >
            My process ensures efficient delivery of high-quality projects.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.5}
              key={step.id}
              className="bg-white border border-primaryColor shadow-md rounded-lg p-6 text-center hover:shadow-lg hover:shadow-primaryColor transition-shadow duration-200 dark:bg-muted"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">{step.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-darkGray dark:text-lightGray">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-muted dark:text-gray-400 mt-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
