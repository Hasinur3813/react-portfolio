import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00d2d3",
        secondaryColor: "#00D3C4",
        darkGray: "#0F172A",
        lightGray: "#F4FDFC",
      },
      fontFamily: {
        poppins: ["poppins", "serif"],
      },
      keyframes: {
        greeting: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        greeting: "greeting 1s linear infinite",
      },
    },
  },
  plugins: [daisyui],
};
