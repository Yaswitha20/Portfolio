/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        bronze: "#8C6D4F",
        ink: "#0A0806",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
