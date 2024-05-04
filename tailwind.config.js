const colors = require('tailwindcss/colors')
// const { breakpoints } = require('./.codelab.js')

/**
 * This only works if `tailwind.config.js` & `postcss.config.js` are at the project root
 */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      minHeight: {
        '1/2': '50%',
        '1/3': '33%',
        '2/3': '66%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '70%',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '2/3': '66%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '70%',
      },
      colors: {
        primary: colors.violet['700'],
      },
      // colors: ({ theme }) => ({
      //   primary: theme('colors.violet')
      // }),
      screens: {
        laptop: '768px',
        tablet: '0px',
        desktop: '1200px',
      },
    },
    fontFamily: {
      body: ['Nunito'],
      display: ['Montserrat'],
    },
    container: {
      center: true,
    },
    screens: {
      xs: '0px',
      sm: '576px',
      // => @media (min-width: 576px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '992px',
      // => @media (min-width: 992px) { ... }
      xl: '1200px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
  },
  corePlugins: {
    // Reset adds `background:transparent`, which background-color can't override
    preflight: false,
  },
  variants: {},
}
