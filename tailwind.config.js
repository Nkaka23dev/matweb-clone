/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DINWebPro': ['DINWebPro']
      },
      colors: {
        'primary':'#c30a17'
      }
    },
  },
  plugins: [],
}