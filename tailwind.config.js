/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   xs: "320px",
      //   // => @media (min-width: 320px) { ... }
      //   sm: "420px",
      //   // => @media (min-width: 420px) { ... }
      //   md: "580px",
      // }
    },
  },
  plugins: [],
};
