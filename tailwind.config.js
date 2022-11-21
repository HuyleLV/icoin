/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purleCommon: 'linear-gradient(140deg, #740ba3, #3d1662, #3d1662, #740ba3)'
      }
    },
  },
  plugins: [],
};
