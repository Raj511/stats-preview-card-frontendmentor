module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:{
          100: "hsl(233, 47%, 7%)",
          200: "hsl(244, 38%, 16%)",
          300: "hsl(277, 64%, 61%)"
        },

        neutral:{
          100: "hsl(0, 0%, 100%)",
          200: "hsla(0, 0%, 100%, 0.75)",
          300: "hsla(0, 0%, 100%, 0.6)"
        }
      },
      fontFamily:{
        primary: ['Inter'],
        secondary: ['Lexend Deca']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
