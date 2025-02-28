"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Build Something Amazing Together!
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I’m a passionate front-end developer specializing in crafting beautiful
        and functional web experiences. Let's collaborate and bring your ideas
        to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-primaryColor text-white rounded-lg text-lg font-semibold hover:bg-opacity-80 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
