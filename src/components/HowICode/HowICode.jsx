import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Section from "../../layout/Section";
import useAnimation from "../../hooks/useAnimation";
import { motion } from "framer-motion";
const codeExample = `
// Define a function to reverse a string
function reverseString(str) {
  if (!str) return "";
  return str.split("").reverse().join("");
}

// Example usage
const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed); // Output: "!dlroW ,olleH"
`;

const HowICode = () => {
  const { fadeUp, zoomIn } = useAnimation();
  return (
    <Section className="bg-white dark:bg-darkGray">
      <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="text-4xl font-bold text-primaryColor"
          >
            My Coding Style
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            className="text-lg dark:text-lightGray text-muted leading-relaxed"
          >
            My approach to coding is simple yet effective: focus on clarity,
            scalability, and performance. I prioritize writing clean,
            maintainable code while leveraging modern technologies like
            <span className="text-primaryColor font-semibold"> React</span>,
            <span className="text-primaryColor font-semibold"> Node.js</span>,
            and{" "}
            <span className="text-primaryColor font-semibold"> MongoDB</span>.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.5}
            className="text-lg dark:text-lightGray text-muted leading-relaxed"
          >
            From crafting reusable components to implementing efficient
            algorithms, I aim to deliver robust and scalable solutions.
            Here&apos;s a glimpse of my coding style:
          </motion.p>
        </div>

        {/* Right Code Snippet */}
        <div className="p-4 bg-darkGray rounded-lg shadow-lg">
          <motion.div variants={zoomIn} initial="hidden" whileInView="visible">
            <SyntaxHighlighter language="javascript" className="rounded-lg">
              {codeExample}
            </SyntaxHighlighter>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default HowICode;
