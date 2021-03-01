module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        'primary' : ['Open Sans'],
        'secondary': ['Montserrat']
      },
      colors: {
        'primary' : '#5D5C61',
        'secondary' : '#938E94',
        'tertiary' : '#7395AE',
        'quaternary' : '#557A95',
        'quinary' : '#B1A296',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
