/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        personal: "#3f3cbb",
        phone: "#75CE91",
        shopping: "#9686FF",
        other: "#121063",
        marionBerry: "#3D0693",
        white: "#ffffff",
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
