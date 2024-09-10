import daisyui from "daisyui";
/*@type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    screens: {
      sm: { max: "650px" },
      md: { max: "775px" },
      lg: { max: "1023px" },
      xl: "1023px",
    },
    colors: {
      "dark-blue": "#001f5b",
      "light-blue": "#009ca6",
      yellow: "#ede04b",
      grey: "#5b6770",
      white: "#fff",
      "blue-grey": "#abb8c3",
      "mid-grey": "#c1c6c8",
      "dot-color": "#66666660",
      red: "#ff0f0f",
    },
    width: { content: "max-content", 97: "97dvw", "95dvw": "95dvw" },
    height: { 400: "400px" },
    extend: {},
  },
  plugins: [daisyui, require("tailwindcss-bg-patterns")],
};
