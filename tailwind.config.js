module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "sans-serif"],
        sans: ["Open Sans", "helvetica neue"],
        maven: ["Maven Pro", "sans-serif"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
