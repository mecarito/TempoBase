/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "spotify-black": "#191414",
        "spotify-green": "#1DB954",
      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
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
