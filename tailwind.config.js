import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--color-primaryColor)",
        secondaryColor: "var(--color-secondaryColor)",
        offWhite: "var(--color-offWhite)",
        darkGray: "var(--color-darkGray)",
        lightGray: "var(--color-lightGray)",
        muted: "var(--color-muted)",
        text: "var(--color-text)",
        red: "var(--color-red)",
        "accent-hover": "var(--color-accent-hover)",
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
