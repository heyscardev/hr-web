import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./emails/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hr-title": ["var(--font-hr-title)"],
      },
      colors: {
        primary: {
          100: "#FEA5B2",
          200: "#FD7C90",
          300: "#FD637B",
          400: "#FC4A66",
          500: "#FC3050",
          600: "#D9364F",
          700: "#D32641",
          800: "#B4243A",
          900: "#902133",
          950: "#781E2C",
        },
        secondary: {
          100: "#3939E7",
          200: "#1414DC",
          300: "#1212C4",
          400: "#1010AD",
          500: "#0E0E96",
          600: "#0B0B7E",
          700: "#090967",
          800: "#07074F",
          900: "#050538",
          950: "#030321",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
