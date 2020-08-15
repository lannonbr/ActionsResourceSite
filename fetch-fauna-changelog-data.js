const fetch = require("node-fetch")
require("dotenv").config()

exports.sourceData = async (options) => {
  const data = await fetch("https://graphql.fauna.com/graphql", {
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify({
      query: `
      query ChangelogQuery {
        getAllChangelogEntries {
          data {
            date
            href
            title
          }
        }
      }
    `,
    }),
  }).then((resp) => resp.json())

  return data.data
}
