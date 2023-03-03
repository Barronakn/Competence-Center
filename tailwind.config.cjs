/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Thasadith",
      },
      colors: {
        primary: "#2dd4a4",
      },
    },
  },
  plugins: [],
};
