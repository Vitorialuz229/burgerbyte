/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
    },
    extend: {
      backgroundImage: { 
        "home": "url('/src/assets/bg.png')",
      }
    },
  },
  plugins: [],
}