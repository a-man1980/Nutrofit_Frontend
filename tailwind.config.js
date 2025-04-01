/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#A31D1D",
        "secondary":"#E5D0AC"
      },
      gridTemplateColumns:{
        "auto":"repeat(auto-fill,minmax(200px,1fr))"
      }
    },
  },
  plugins: [],
}