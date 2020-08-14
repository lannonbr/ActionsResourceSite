import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import Helmet from "react-helmet"

const ChangelogPage = () => {
  const data = useStaticQuery(graphql`
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
  `)
  if (data.fauna) {
    let changelogEntries = data.fauna.getAllChangelogEntries.data

    changelogEntries.forEach((entry) => {
      entry.timestamp = moment(entry.date, "MMMM D, YYYY").unix()
    })

    changelogEntries.sort((a, b) => b.timestamp - a.timestamp)

    return (
      <Layout>
        <Helmet title={"Changelog | GARS"}>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Helmet>
        <div className="w-full max-w-4xl my-5 mx-auto pt-16 px-2">
          <h1>Changelog</h1>
          <p>
            This is a list of all GitHub Actions posts for awhile from{" "}
            <a
              className="text-blue-700 no-underline hover:underline"
              href="https://github.blog/changelog"
            >
              https://github.blog/changelog
            </a>
          </p>
          <ul className="pl-4">
            {changelogEntries.map((entry) => {
              let { date, href, title } = entry

              return (
                <li className="mb-2 list-disc" key={"changelog-item-title"}>
                  <p className="pb-0">
                    <a
                      className="text-blue-700 no-underline hover:underline"
                      href={href}
                    >
                      {title}
                    </a>
                  </p>
                  <time>{date}</time>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="w-full max-w-4xl my-5 mx-auto pt-16 px-2">
          <h1>Changelog</h1>
          <p>
            Given you do not have fauna set up, this page will be left blank
            intentionally. At a later point in time, I will add some fake data
            so if you wish to work on this page, you will be able to without
            needing to setup Fauna.
          </p>
        </div>
      </Layout>
    )
  }
}

export default ChangelogPage
