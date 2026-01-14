/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTheme: "#11001f",
        darkHover: "#2a004a",
        lightHover: "#fcf4ff",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns:{
        "auto":"repeat(auto-fit, minmax(200px,1fr))"
      }
    },
  },
  darkMode:'selector',
  plugins: [],
};
