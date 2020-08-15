import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import Sidebar from "../components/sidebar"
import { DocsSidebar, TutorialSidebar } from "../utils/sidebar-list"
import Layout from "../components/layout"
import GuideList from "../components/GuideList"

const getItemListBasedOnSlug = (slug) => {
  let key = slug.split("/")[1]

  const lookup = {
    docs: DocsSidebar,
    tutorial: TutorialSidebar,
  }

  return lookup[key]
}

const getSubItems = (list, title) => {
  for (let item of list) {
    let itemTitle = item.title.endsWith("*")
      ? item.title.slice(0, -1)
      : item.title

    if (itemTitle === title) {
      return item.items
    }
  }
}

const MDXTemplate = ({ pageContext, data }) => {
  let ogImageTitle = data.mdx.fields.title
  let itemList = getItemListBasedOnSlug(pageContext.slug)

  let githubURL = `https://github.com/lannonbr/ActionsResourceSite/blob/master/docs/${data.mdx.parent.relativePath}`

  const guidelistItems = getSubItems(itemList, data.mdx.frontmatter.title)

  return (
    <Layout>
      <Helmet
        title={data.mdx.frontmatter.title + " | GARS"}
        meta={[
          {
            name: `twitter:card`,
            content: "summary_large_image",
          },
          {
            name: `twitter:title`,
            content: data.mdx.frontmatter.title + " | GARS",
          },
          {
            name: `twitter:image`,
            content: `https://gars.dev/og-images/${ogImageTitle}.png`,
          },
          { name: `twitter:site`, content: `@lannonbr` },
        ]}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Helmet>
      <div className="flex mt-12">
        <Sidebar itemList={itemList} />
        <div className="prose w-full max-w-4xl pl-2 pr-2 my-5 mx-auto md:pl-80">
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          {data.mdx.frontmatter.guidelist && guidelistItems && (
            <GuideList items={guidelistItems} />
          )}
          <a
            className="inline-block text-blue-700 no-underline hover:underline py-5"
            href={githubURL}
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default MDXTemplate

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        title
      }
      frontmatter {
        title
        guidelist
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
