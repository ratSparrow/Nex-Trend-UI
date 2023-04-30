/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        purple: "#DB2777",
      },
    },
  },
  plugins: [require("daisyui")],
};
