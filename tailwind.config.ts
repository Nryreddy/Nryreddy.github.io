import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E24",
        card: "#28282F",
        primary: "#2E50C1",
        accentGreen: "#48BB95",
        accentYellow: "#FBC02D",
        accentYellowHover: "#FFE57F",
      },
      backgroundImage: {
        'grain-pattern': "url('/grain.png')",
        'locked-stripes': 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 10px, transparent 10px, transparent 20px)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
