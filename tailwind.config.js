/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F3CF0",
        secondary: "#F2356B",
        TextColor: {
          100: "#F0F0F0",
          200: "#E0E0E0",
        },
      },
      fontFamily: {
        heading: ["Inter", "serif"],
        paragraph: ["Roboto, sans-serif"],
      },
      h1: {
        fontSize: "4.5rem",
        fontWeight: 700,
        color: "#333",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero-image.png')",
      },
      backgroundSize: {
        "hero-pattern": "cover",
      },
      backgroundPosition: {
        "hero-pattern": "center",
      },
      backgroundRepeat: {
        "hero-pattern": "no-repeat",
      },
      height: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
      },
      width: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
      },
    },
  },
  plugins: [],
};
