"use client";
import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 bg-secondaryColor dark:bg-darkGray">
      <motion.h1
        className="text-4xl dark:text-primaryColor md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let&apos;s Build Something Amazing Together!
      </motion.h1>
      <motion.p
        className="text-lg dark:text-lightGray md:text-xl mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I’m a passionate front-end developer specializing in crafting beautiful
        and functional web experiences. Let&apos;s collaborate and bring your
        ideas to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/contact">
          <Button
            type="primary"
            size="large"
            className="bg-lightGray text-primaryColor mt-5 font-semibold hover:!bg-offWhite hover:!text-primaryColor"
          >
            Contact Me
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
