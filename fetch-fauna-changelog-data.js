import fetch from "node-fetch"
import dotenv from "dotenv"
dotenv.config()

export const sourceData = async (options) => {
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
