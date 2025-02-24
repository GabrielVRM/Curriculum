/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      sm: { max: "510px" },
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
      backgroundImage: {
        monalisa: "url('./src/assets/monalisa.png')",
      },

      animation: {
        spin: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        "spin-slow": "spin 3s linear infinite",
      },

      fontFamily: {
        sans: "Open Sans, sans-serif",
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },

        cloud: {
          100: "#e0f6ff",
          200: "#87ceeb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
