module.exports = {
  purge: ["src/**/*.js"],
  theme: {
    extend: {
      padding: {
        "80": "20rem",
      },
      width: {
        "80": "20rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
