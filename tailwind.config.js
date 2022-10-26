/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#6868FF",
        "dark-gray": "#7F8B9C",
        "main-content-bg": "#F6F8F9",
      },
      screens: {
        lg: "1280px",
        lgxl: "1366px",
        lgxxl: "1920px",
      },
    },
  },
  plugins: [],
};
