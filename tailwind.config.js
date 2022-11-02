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
        "header-bg": "#070707",
        "user-bg": "#535353",
        "card-hovered": "#232323",
      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
      },
      screens: {
        lg: "1280px",
        lgxl: "1366px",
        lgxxl: "1920px",
      },
      spacing: {
        "card-w": "11.375rem",
        "card-h": "16.125rem",
        "card-p": "0.938rem",
        "card-img-h": "9.313rem",
        "category-card-w": "11.25rem",
        "category-card-h": "11.25rem",
      },
    },
  },
  plugins: [],
};
