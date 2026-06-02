import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e",
          light: "#0d9488",
        },
        accent: "#0d9488",
        beige: "#f0fdfa",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Noto Sans KR", "Malgun Gothic", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      zIndex: {
        "200": "200",
        "199": "199",
        "300": "300",
      },
    },
  },
  plugins: [],
};

export default config;
