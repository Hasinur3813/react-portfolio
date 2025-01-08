const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "🌐" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎭" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "🖥️" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", icon: "🔧" },
      { name: "VS Code", icon: "📘" },
      { name: "Postman", icon: "📨" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 hover:text-primaryColor transition-colors"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
