/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(238, 27, 36, 1)",
        secondary: "rgba(15, 94, 221, 1)",
        secondarylight: "rgba(229, 238, 251, 1)",
        neutral2: "rgba(250, 250, 250, 1)",
        neutral3: "rgba(241, 241, 241, 1)",
        neutral4: "rgba(227, 227, 227, 1)",
        neutral5: "rgba(180, 180, 180, 1)",
        neutral6: "rgba(140, 140, 140, 1)",
        neutral7: "rgba(95, 95, 95, 1)",
        neutral8: "rgba(35, 35, 35, 1)",
      },
    },
  },
  plugins: [],
};
