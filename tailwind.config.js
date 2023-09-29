/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3CF0",
          darker: "#091a80",
          lighter: "#4b69ff",
        },
        secondary: {
          DEFAULT: "#B10B3A",
          darker: "#80072c",
          lighter: "#e1155a",
        },
        tertiary: {
          DEFAULT: "#0CBB86",
          darker: "#096d53",
          lighter: "#15eaae",
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
