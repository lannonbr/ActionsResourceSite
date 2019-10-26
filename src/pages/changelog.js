import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ChangelogPage = props => {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          maxWidth: "60em",
          paddingLeft: 10,
          paddingRight: 10,
          margin: "20px auto",
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
          {props.data.fauna.getAllChangelogEntries.data.map(entry => {
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
