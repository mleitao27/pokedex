/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012239",
        secondary: "#154551",
        pokered: "#e30011",
        pokegrey: "#f1f1f1",
        type: {
          normal: "#a9a878",
          fire: "#f07f2f",
          water: "#6890f0",
          electric: "#f9d030",
          grass: "#78c84f",
          flying: "#a890f0",
          rock: "#b8a038",
          steel: "#b8b8d0",
          ground: "#dec06f",
          bug: "#a8b821",
          poison: "#a040a1",
          ice: "#98d8d8",
          fighting: "#c03029",
          psychic: "#f85888",
          dark: "#6f5847",
          ghost: "#705798",
          dragon: "#6f39f9",
          fairy: "#f1b6bc",
        },
      },
    },
  },
  plugins: [],
};
