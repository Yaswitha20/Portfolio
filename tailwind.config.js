/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#2563EB",
        bronze: "#0EA5E9",
        ink: "#F8FAFC",
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
