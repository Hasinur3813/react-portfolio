import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Section from "../layout/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <Section>
      <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primaryColor">How I Code</h2>
          <p className="text-lg text-muted leading-relaxed">
            My approach to coding is simple yet effective: focus on clarity,
            scalability, and performance. I prioritize writing clean,
            maintainable code while leveraging modern technologies like
            <span className="text-primaryColor font-semibold"> React</span>,
            <span className="text-primaryColor font-semibold"> Node.js</span>,
            and{" "}
            <span className="text-primaryColor font-semibold"> MongoDB</span>.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            From crafting reusable components to implementing efficient
            algorithms, I aim to deliver robust and scalable solutions. Here's a
            glimpse of my coding style:
          </p>
          <button className="px-6 py-3 bg-primaryColor text-lightGray rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
            See More Projects
          </button>
        </div>

        {/* Right Code Snippet */}
        <div className="p-4 bg-darkGray text-white  rounded-lg shadow-lg">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              {" "}
              <SyntaxHighlighter language="javascript" className="rounded-lg">
                {codeExample}
              </SyntaxHighlighter>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <SyntaxHighlighter language="javascript" className="rounded-lg">
                {codeExample}
              </SyntaxHighlighter>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <SyntaxHighlighter language="javascript" className="rounded-lg">
                {codeExample}
              </SyntaxHighlighter>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default HowICode;
