const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Create some fake types when Fauna isn't available
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  if (!process.env.FAUNADB_TOKEN) {
    createTypes(`
      type Fauna {
        thing: String
      }
      type FaunaEntry {
        data: FaunaEntryData
      }
      type FaunaEntryData {
        date: String
        href: String
        title: String
      }
    `)
  }

  createTypes(`
    type MdxFrontmatter {
      title: String!
      guidelist: Boolean
    }
  `)
}

// Setup some fake resolvers when Fauna isn't available
exports.createResolvers = ({ createResolvers }) => {
  if (!process.env.FAUNADB_TOKEN) {
    createResolvers({
      Query: {
        fauna: {
          type: ["Fauna"],
          resolve() {
            return null
          },
        },
      },
      Fauna: {
        getAllChangelogEntries: {
          type: ["FaunaEntry"],
          resolve() {
            return null
          },
        },
      },
    })
  }
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({
      node,
      getNode,
    })

    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  const mdxTemplate = path.resolve("./src/templates/mdxTemplate.js")

  data.allMdx.edges.forEach(({ node }) => {
    actions.createPage({
      component: mdxTemplate,
      path: node.fields.slug,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
