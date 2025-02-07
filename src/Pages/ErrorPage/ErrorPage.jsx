import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-darkGray text-center px-6">
      <motion.h1
        className="text-7xl font-extrabold text-primaryColor"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! Page Not Found
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6"
      >
        <Link to="/">
          <Button
            type="primary"
            className="bg-primaryColor hover:bg-secondaryColor"
          >
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
