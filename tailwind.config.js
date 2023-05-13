/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink:{
          50:"#fdf2f8"
        }
      }
    },
  },
  plugins: [],
}

