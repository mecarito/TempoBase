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
        "album-details-bg-t": "#C7031B",
        "album-details-bg-c": "#9A0215",
        "album-details-bg-b": "#65020E",
      },
      fontFamily: {
        Lato: "'Lato', sans-serif;",
      },
      screens: {
        lg: "1280px",
        lgxl: "1366px",
        lgxxl: "1920px",
      },
      spacing: {
        "player-h": "5.625rem",
        "card-w": "11.375rem",
        "card-h": "16.125rem",
        "card-p": "0.938rem",
        "card-img-h": "9.313rem",
        "category-card-w": "11.25rem",
        "category-card-h": "11.25rem",
        "category-img-h": "5.625rem",
        "album-container-h": "21.25rem",
        "artist-container-h": "23.75rem",
        "album-img-w": "14.5rem",
        "album-img-h": "14.5rem",
        "album-space-x": "1.313rem",
      },
      rotate: {
        20: "20deg",
      },
    },
  },
  plugins: [],
};
