/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        segoe: ["Segoe"],
        camaro: ["Camaro", "sans-serif"],
      },
      colors: {
        red: {
          100: "#E42313",
        },
        black: {
          100: "#575756",
          200: "#000000",
        },
      },
    },
  },
  plugins: [],
};
