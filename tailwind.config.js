/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F3CF0",
        secondary: {
          100: "#F0F0F0",
          200: "#E0E0E0",
        },
        fontFamily: {
          heading: ["Source serif 4", "serif"],
          paragraph: ["Roboto, sans-serif"],
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/images/hero-image.png')",
        },
      },
    },
  },
  plugins: [],
};
