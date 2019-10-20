const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: path.resolve(__dirname, "docs"),
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Oswald", "Lato"],
        },
      },
    },
  ],
}
