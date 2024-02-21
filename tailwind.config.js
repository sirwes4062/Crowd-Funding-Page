/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "978px",
      xl: "1440",
    },
    extend: {
      colors: {
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
};
