const path = require("path")

require("dotenv").config()

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
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "Fauna",
        fieldName: "fauna",
        url: "https://graphql.fauna.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.FAUNADB_TOKEN}`,
        },
      },
    },
  ],
}
