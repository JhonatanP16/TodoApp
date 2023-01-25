/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141E33",
        },
      },
      screens: {
        "2xl": "1736px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
