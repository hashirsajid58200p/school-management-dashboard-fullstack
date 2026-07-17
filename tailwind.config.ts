import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hsSky: "#C3EBFA",
        hsSkyLight: "#EDF9FD",
        hsPurple: "#CFCEFF",
        hsPurpleLight: "#F1F0FF",
        hsYellow: "#FAE27C",
        hsYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
