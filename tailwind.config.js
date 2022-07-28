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
        camaro: ["Camaro","sans-serif"],
      },
      colors: {
        gray: {
          100: "#A56A59",
          200:"#F3F3F3",
          300:"#FAFAFA"
        },
        red:{
          100:'#E42313'
        },
        black: {
          100: "#575756",
          200: "#000000",
        },
        green: {
          300: "#96C953",
          400: "#6DB247",
          500: "#499A3B",
        },
      },
    },
  },
  plugins: [],
};
