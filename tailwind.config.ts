import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#0d0d0d",
        primary: "#f3f4ee",
        primary2:"#e7e8e2",
        // primary: "#1f2125",
        // second: "#2ca4ab",
        second: "#0d0d0d",
        off_white:"#f9f9f9",
        g:"#a5ffb8",
        y:"#fbff62",
      bb:"#a9ebf9",
      of:"#feffd7",
      b:"#172987",
      d:"#232531",
      o:"#ff9a62",
      },
    borderRadius: {
      pixel: '28px',
    }
    },
  },
  plugins: [],
};
export default config;
