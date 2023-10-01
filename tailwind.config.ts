import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "cm-icons": "1.50rem",
      },
      colors: {
        "cm-white": "#ffffff",
        "cm-black": "#101010",
      },
    },
  },
  plugins: [],
};
export default config;
