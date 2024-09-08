import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "650px" },
      md: { max: "775px" },
      lg: { max: "1023px" },
      xl: "1023px",
    },
    extend: {},
  },
  plugins: [daisyui],
};
