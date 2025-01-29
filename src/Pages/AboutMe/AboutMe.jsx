import myPhoto from "../../assets/myPhoto.jpg";

const AboutMe = () => {
  return (
    <section className="py-16 mt-5">
      {/* heading */}
      <div className="py-20 bg-gradient-to-tr from-primaryColor to-secondaryColor text-center">
        <h2 className="font-semibold text-xl mb-2 text-lightGray">About Me</h2>
        <p className="tracking-wider font-bold text-4xl text-lightGray">
          Let&apos;s build something together
        </p>
      </div>

      {/* content */}
      <div className="container mx-auto px-4">
        {/* top content */}
        <div className="flex justify-between gap-10 py-10 mt-5">
          <div className="w-1/2 flex justify-center h-fit relative">
            {/* blob */}
            <div className="absolute w-[600px] h-[600px] -top-40 -z-10">
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
              className="w-64 rounded-t-full ring-2 ring-primaryColor ring-offset-4"
            />
          </div>

          {/* content */}
          <div className="w-1/2 ms-auto">
            <h2 className="text-3xl font-bold mb-4 text-primaryColor">
              Who I Am?
            </h2>
            <p className="text-muted">
              I am <strong>Hasinur Rahman</strong> who has over 2 years of
              hands-on experience in creating visually appealing and interactive
              web applications.
            </p>
            <p className="text-muted mt-4">
              I specialize in front-end development using modern technologies
              like <strong>React</strong>,<strong> Tailwind CSS</strong>,{" "}
              <strong>Ant Design</strong>,<strong> DaisyUI</strong>, and{" "}
              <strong>Framer Motion</strong>. My passion for coding and design
              drives me to continuously learn and improve my skills.
            </p>
            <p className="text-muted mt-4">
              In my free time, I enjoy contributing to open-source projects,
              exploring new web development trends, and sharing my knowledge
              with the developer community.
            </p>
          </div>
        </div>

        {/* bottom content */}
        <div className="mt-32">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            My Journey
          </h2>
          <p className="text-gray-600">
            My journey into web development started with curiosity and a passion
            for technology. Over the years, I honed my skills in front-end
            development, mastering technologies like React, Tailwind, and Framer
            Motion.
          </p>
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
//         <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
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
//             <p className="text-gray-600">
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
//             <p className="text-gray-600">Technologies I work with:</p>
//             <ul className="list-disc list-inside mt-3 text-gray-600">
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
//             <p className="text-gray-600">
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
//             <p className="text-gray-600 mb-4">
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
