const path = require("path")

require("dotenv").config()

const extraPlugins = []

// Only source Fauna if an access token is available
if (process.env.FAUNADB_TOKEN) {
  extraPlugins.push({
    resolve: `gatsby-source-graphql`,
    options: {
      typeName: "Fauna",
      fieldName: "fauna",
      url: "https://graphql.fauna.com/graphql",
      headers: {
        Authorization: `Bearer ${process.env.FAUNADB_TOKEN}`,
      },
    },
  })
}

module.exports = {
  plugins: [
    ...extraPlugins,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
  ],
}
