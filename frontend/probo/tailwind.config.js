/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '500' : '500px'
      },
      width: {
        '350':'350px',
        '450': '450px',
        '500' : '500px',
      },
      colors: {
        customOrange: '#f1f7ff',
        customBlue: '#FFFFFF',
        customBlood : '#FEF6F5',
        custBackground: '#F5F5F5',
        customText: '#545454',
        customRed: '#ff0000'
      },
    },
  },
  plugins: [],
}