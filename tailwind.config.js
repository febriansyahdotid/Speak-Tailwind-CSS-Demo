const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sekai: "#E4002B",
        ...defaultTheme.colors,
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: false,
    content: [
      "./src/**/*.js",
      "./src/**/*.ts",
      "./src/**/*.jsx",
      "./src/**/*.tsx",
    ],
    options: {},
  },
}
