import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Section from "../../layout/Section";

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
  return (
    <Section className="bg-white dark:bg-darkGray">
      <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primaryColor">
            My Coding Style
          </h2>
          <p className="text-lg dark:text-lightGray text-muted leading-relaxed">
            My approach to coding is simple yet effective: focus on clarity,
            scalability, and performance. I prioritize writing clean,
            maintainable code while leveraging modern technologies like
            <span className="text-primaryColor font-semibold"> React</span>,
            <span className="text-primaryColor font-semibold"> Node.js</span>,
            and{" "}
            <span className="text-primaryColor font-semibold"> MongoDB</span>.
          </p>
          <p className="text-lg dark:text-lightGray text-muted leading-relaxed">
            From crafting reusable components to implementing efficient
            algorithms, I aim to deliver robust and scalable solutions.
            Here&apos;s a glimpse of my coding style:
          </p>
        </div>

        {/* Right Code Snippet */}
        <div className="p-4 bg-darkGray rounded-lg shadow-lg">
          <SyntaxHighlighter language="javascript" className="rounded-lg">
            {codeExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </Section>
  );
};

export default HowICode;
