module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1C1850",
        "primary-light": "#3BA4CF",
      },
    },
    fontFamily: {
      Montserrat: ['"Montserrat"', "sans-serif"],
      Open: ['"Open Sans"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
