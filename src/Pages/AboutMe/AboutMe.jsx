import { Link } from "react-router-dom";
import myPhoto from "../../assets/myPhoto.jpg";
import PageHeader from "../../components/PageHeader/PageHeader";

const AboutMe = () => {
  return (
    <section className="py-16 md:mt-5 bg-lightGray dark:bg-darkGray">
      {/* heading */}
      <PageHeader
        heading={"About Me"}
        title={"Let's build something together"}
      />

      {/* content */}
      <div className="container mx-auto px-4 overflow-hidden">
        {/* top content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10 mt-14 lg:mt-20">
          <div className="md:w-1/2 w-full flex justify-center h-fit relative">
            {/* blob */}
            <div className="absolute w-[500px] h-[500px] -top-32 z-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FF0066"
                  d="M34.7,-63.3C40.2,-56.9,36.6,-38,43.8,-25.4C50.9,-12.7,68.7,-6.4,73.7,2.9C78.8,12.1,70.9,24.3,60.4,31.1C49.9,37.9,36.7,39.4,26.2,49.2C15.7,59,7.9,77.2,0.1,77.1C-7.7,77,-15.5,58.6,-24,47.6C-32.5,36.6,-41.7,33,-51.3,26.3C-60.9,19.6,-70.8,9.8,-76.6,-3.3C-82.4,-16.5,-84,-32.9,-75.2,-41.1C-66.5,-49.4,-47.5,-49.3,-33.2,-50.6C-19,-51.9,-9.5,-54.5,2.6,-58.9C14.6,-63.3,29.2,-69.6,34.7,-63.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <img
              src={myPhoto}
              alt="Hasinu Rahman"
              className="w-64 rounded-full ring-2 ring-primaryColor ring-offset-4 relative z-20"
            />
          </div>

          {/* content */}
          <div className="md:w-1/2 mt-20 md:mt-0 w-full ms-auto ">
            <h2 className="text-3xl font-bold mb-4 text-primaryColor">
              Who I Am?
            </h2>
            <p className="text-muted dark:text-lightGray">
              I am <strong>Hasinur Rahman</strong> who has over 2 years of
              hands-on experience in creating visually appealing and interactive
              web applications.
            </p>

            <p className="text-muted mt-4 dark:text-lightGray">
              I specialize in front-end development using modern technologies
              like <strong>React</strong>,<strong> Tailwind CSS</strong>,{" "}
              <strong>Ant Design</strong>,<strong> DaisyUI</strong>, and{" "}
              <strong>Framer Motion</strong>. My passion for coding and design
              drives me to continuously learn and improve my skills.
            </p>
            <p className="text-muted mt-4 dark:text-lightGray">
              In my free time, I enjoy contributing to open-source projects,
              exploring new web development trends, and sharing my knowledge
              with the developer community.
            </p>
          </div>
        </div>

        {/* bottom content */}
        <div className="mt-32">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ec4899"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <h2 className="text-2xl font-bold mb-4 text-primaryColor">
                  My Journey
                </h2>
                <p className="text-muted dark:text-lightGray">
                  My journey into web development started with curiosity and a
                  passion for technology. Over the years, I honed my skills in
                  front-end development with basic backend knowledge, mastering
                  technologies like <strong>React</strong>,{" "}
                  <strong>Tailwind</strong>, <strong>Node</strong>,{" "}
                  <strong>Express</strong>, <strong>Mongodb</strong> etc.
                </p>
                <p className="text-muted mt-4 dark:text-lightGray">
                  My attraction to technology began when I was in school. I
                  learned the basics of HTML and CSS during my college years,
                  but I professionally started coding after my graduation.
                </p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ec4899"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <h2 className="text-2xl font-bold mb-4 text-primaryColor">
                  My Tech Stack
                </h2>
                <p className="text-muted dark:text-lightGray">
                  Technologies I work with:
                </p>
                <ul className="list-disc list-inside mt-3 text-muted dark:text-lightGray">
                  <li>React.js & Next.js</li>
                  <li>Tailwind CSS & Ant Design</li>
                  <li>
                    Framer Motion, AOS, React Awesome Reveal for animations
                  </li>
                  <li>Node.js & Express.js for backend</li>
                  <li>Mongodb for database</li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ec4899"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end md:mb-10">
                <h2 className="text-2xl font-bold mb-4 text-primaryColor">
                  How I Work
                </h2>
                <p className="text-muted dark:text-lightGray">
                  My workflow involves deep research, planning, coding, and
                  optimization. I believe in writing clean, scalable, and
                  maintainable code to build high-quality web applications.
                </p>
                <p className="text-muted mt-4 dark:text-lightGray">
                  I start by understanding the project requirements and
                  conducting thorough research. Then, I create a detailed plan
                  and break down the tasks into manageable chunks. During the
                  coding phase, I focus on writing clean and efficient code,
                  following best practices and design patterns. Finally, I
                  perform rigorous testing and optimization to ensure the
                  application runs smoothly and efficiently.
                </p>
                <p className="text-muted mt-4 dark:text-lightGray">
                  I also believe in continuous learning and improvement. I
                  regularly review my code and seek feedback from peers to
                  identify areas for improvement. This iterative process helps
                  me stay updated with the latest trends and technologies in web
                  development.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ec4899"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <h2 className="text-2xl font-bold mb-4 text-primaryColor">
                  Let&apos;s Connect!
                </h2>
                <p className="text-muted mb-4 dark:text-lightGray">
                  Looking to collaborate or hire me? Let&apos;s build something
                  amazing together!
                </p>
                <Link to={"/#contact"}>
                  <button className="px-6 py-3 bg-primaryColor text-white rounded-md shadow-md hover:bg-secondaryColor transition">
                    Contact Me
                  </button>
                </Link>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// import { Card } from "antd";
// import { motion } from "framer-motion";

// const AboutMe = () => {
//   return (
//     <div className="container mx-auto px-6 py-16">
//       {/* Introduction */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold text-gray-800">
//           Hi, I'm [Your Name] 👋
//         </h1>
//         <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
//           A passionate front-end developer with a keen eye for design and a love
//           for crafting interactive web experiences.
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* My Journey */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card className="p-6 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-primary">
//               My Journey
//             </h2>
//             <p className="text-muted">
//               My journey into web development started with curiosity and a
//               passion for technology. Over the years, I honed my skills in
//               front-end development, mastering technologies like React,
//               Tailwind, and Framer Motion.
//             </p>
//           </Card>
//         </motion.div>

//         {/* Skills & Expertise */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <Card className="p-6 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-primary">
//               My Tech Stack
//             </h2>
//             <p className="text-muted">Technologies I work with:</p>
//             <ul className="list-disc list-inside mt-3 text-muted">
//               <li>React.js & Next.js</li>
//               <li>Tailwind CSS & Ant Design</li>
//               <li>Framer Motion for animations</li>
//               <li>Node.js & Express.js (Basic Backend Knowledge)</li>
//             </ul>
//           </Card>
//         </motion.div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mt-8">
//         {/* How I Work */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <Card className="p-6 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-primary">
//               How I Work
//             </h2>
//             <p className="text-muted">
//               My workflow involves deep research, planning, coding, and
//               optimization. I believe in writing clean, scalable, and
//               maintainable code to build high-quality web applications.
//             </p>
//           </Card>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <Card className="p-6 shadow-lg text-center">
//             <h2 className="text-2xl font-semibold mb-4 text-primary">
//               Let's Connect!
//             </h2>
//             <p className="text-muted mb-4">
//               Looking to collaborate or hire me? Let's build something amazing
//               together!
//             </p>
//             <button className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-secondary transition">
//               Contact Me
//             </button>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
