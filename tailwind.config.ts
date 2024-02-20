import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        masala: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#434343",
          900: "#3d3d3d",
          950: "#262626",
      },
      
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
