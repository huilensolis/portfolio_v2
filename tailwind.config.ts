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
        "cm-white": "#F1F1EF" /* #FAFAFA */,
        "cm-black": "#000000" /* #101010 */,
        "cm-gray": "#101010",
        "cm-primary": "#A594FD",
        "cm-secondary": "#5940D4",
        "cm-orange": "#f36c5f",
        "light-green": "#31b970",
        "dark-green": "#53c14f",
        "cm-yellow": "#f8bd4d",
        "cm-blue": "#409fd4",
      },
      backgroundImage: {
        "cm-square":
          "linear-gradient(#cc00ff 1.4000000000000001px, transparent 1.4000000000000001px), linear-gradient(to right, #cc00ff 1.4000000000000001px, #000000 1.4000000000000001px);",
        // opacity: 1;
        // background-size: 28px 28px;'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
