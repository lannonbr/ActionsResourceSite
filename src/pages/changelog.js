import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"
import Helmet from "react-helmet"
import styled from "styled-components"

const ChangelogItem = styled.li`
  margin-bottom: 10px;

  p {
    padding-bottom: 0;
  }
`

const ChangelogContainer = styled.div`
  width: 100%;
  max-width: 60em;
  padding: 50px 10px 0 10px;
  margin: 20px auto;

  a {
    color: #3867d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const ChangelogPage = ({ data }) => {
  let changelogEntries = data.fauna.getAllChangelogEntries.data

  changelogEntries.forEach(entry => {
    entry.timestamp = moment(entry.date, "MMMM D, YYYY").unix()
  })

  changelogEntries.sort((a, b) => b.timestamp - a.timestamp)

  return (
    <Layout>
      <Helmet title={"Changelog | GARS"} />
      <ChangelogContainer>
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
              <ChangelogItem>
                <p>
                  <a href={href}>{title}</a>
                </p>
                <time>{date}</time>
              </ChangelogItem>
            )
          })}
        </ul>
      </ChangelogContainer>
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
