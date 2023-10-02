const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "line-gray": "#979797",
        black: "#222",
        footer: "#424242",
        red: {
          500: "#FF5C5C",
        },
        gray: {
          400: "#B0B0B0",
        },
      },
    },
    fontFamily: {
      sans: ["DINPro Regular", '"Helvetica Neue"', "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
