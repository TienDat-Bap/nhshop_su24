/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary2: "#17AF26",
          secondary: "#05422C",
          neutral: "#F4F4F4",
          tertiary: '#9D9EA2'
      },
      backgroundColor:{
        primary2: "#17AF26",
        secondary2: "#F3FBF4"
      },
      backgroundSize: {
          "50%": "50%",
      },
    },
  },
  plugins: [],
}