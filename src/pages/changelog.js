import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"

const ChangelogPage = ({ data }) => {
  let changelogEntries = data.fauna.getAllChangelogEntries.data

  changelogEntries.forEach(entry => {
    entry.timestamp = moment(entry.date, "MMMM D, YYYY").unix()
  })

  changelogEntries.sort((a, b) => b.timestamp - a.timestamp)

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          maxWidth: "60em",
          paddingLeft: 10,
          paddingRight: 10,
          margin: "20px auto",
          paddingTop: 50,
        }}
      >
        <h1>Changelog</h1>
        <p>
          This is a list of all GitHub Actions posts for awhile from{" "}
          <a href="https://github.blog/changelog">
            https://github.blog/changelog
          </a>
        </p>
        <ul>
          {changelogEntries.map(entry => {
            let { date, href, title } = entry

            return (
              <li
                style={{
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    paddingBottom: 0,
                  }}
                >
                  <a href={href}>{title}</a>
                </p>
                <time>{date}</time>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default ChangelogPage

export const query = graphql`
  query ChangelogQuery {
    fauna {
      getAllChangelogEntries {
        data {
          date
          href
          title
        }
      }
    }
  }
`
