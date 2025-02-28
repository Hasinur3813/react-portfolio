import { motion } from "framer-motion";
import useAnimation from "../../hooks/useAnimation";

const PageHeader = ({ title, heading }) => {
  const { fadeUp } = useAnimation();
  return (
    <div className="py-20 px-4 bg-gradient-to-tr from-primaryColor to-secondaryColor text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="font-semibold text-base md:text-xl mb-2 text-lightGray"
      >
        {heading}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        custom={0.3}
        className="tracking-wider font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-lightGray"
      >
        {title}
      </motion.p>
    </div>
  );
};

export default PageHeader;
