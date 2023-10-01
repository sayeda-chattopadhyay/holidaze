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
        quaternary: {
          DEFAULT: "#D1E1FF",
          darker: "",
          lighter: "#CCDEFF",
        },
      },
      fontFamily: {
        heading: ["Inter", "serif"],
        paragraph: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
