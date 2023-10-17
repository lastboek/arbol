import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hookers: {
          100: "#e2e7e5",
          200: "#c6cfcc",
          300: "#a9b7b2",
          400: "#8d9f99",
          500: "#70877f",
          600: "#5a6c66",
          700: "#43514c",
          800: "#2d3633",
          900: "#161b19"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
