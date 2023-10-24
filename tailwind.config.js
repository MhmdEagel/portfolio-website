/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "'sans-serif'"],
      },
      colors: {
        textPrimary: "#222222",
        bgPrimary: "#E4D8DC",
        bgSecondary: "#C9CCD5",
      },
    },
  },
  plugins: [],
};

