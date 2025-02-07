import { Card } from "antd";

import { FaGraduationCap } from "react-icons/fa";

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
  return (
    <section className="py-16 bg-offWhite dark:bg-darkGray">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-primaryColor dark:text-white">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          My academic journey and qualifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {educationData.map((edu, idx) => (
            <div key={idx}>
              <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-primaryColor text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300">
                      <span className="text-text">Major:</span> {edu.major}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.university} ({edu.year})
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
