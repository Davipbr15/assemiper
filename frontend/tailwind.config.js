/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'assemiperBlack':'#0F0F0F',
        'assemiperRed':"#cc0001"
      },
    },
  },
  plugins: [],
}
