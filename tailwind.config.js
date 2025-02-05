/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: { 
        "home": "url('/src/assets/bg.png')",
      },
      colors: {
        'custom-green': '#54CC0A',
      },
    },
  },
  plugins: [],
}