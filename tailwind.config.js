const colors = require('tailwindcss/colors')
module.exports = {
  mode : 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : {
        gray : {
          900 : '#171838'
        },
        teal : {
          ...colors.teal,
          500 : '#3AA39F'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
