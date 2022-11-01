/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "spotify-primary-dark": "#181818",
        "spotify-secondary-dark": "#121212",
        "spotify-green": "#1DB954",
        "spotify-gray": "#B3B3B3",
        "scroll-bar": "#5A5A5A",
        "bg-border": "#2B2B2B",
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
