module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(249, 10%, 26%)",
          DEFAULT: "hsl(248, 32%, 49%)",
          grayish: "hsl(246, 25%, 77%)",
        },
        red: `hsl(0, 100%, 74%)`,
        green: `hsl(154, 59%, 51%)`,
      },
      boxShadow: {
        DEFAULT: "0px 8px 0px 0px #00000025",
        solid: "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
