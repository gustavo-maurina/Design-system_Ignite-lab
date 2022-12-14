/** @type {import('tailwindcss').Config} */
module.exports = { // eslint-disable-line
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      sm:14,
      md:16,
      lg:20,
      xl:24,
      '2xl':32
    },

    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
      },

      cyan: {
        '500': '#81D8F7',
        '300': '#9BE1FB'
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
