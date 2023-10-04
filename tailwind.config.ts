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
        "cm-white": "#FAFAFA" /* #FAFAFA */,
        "cm-black": "#111111" /* #101010 */,
        "cm-primary": "#3291ff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
