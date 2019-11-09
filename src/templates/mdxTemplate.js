import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import Sidebar from "../components/sidebar"
import { DocsSidebar, TutorialSidebar } from "../utils/sidebar-list"
import Layout from "../components/layout"
import SidebarPageContainer from "../components/SidebarPageContainer"
import GuideList from "../components/GuideList"

const getItemListBasedOnSlug = slug => {
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
  let itemList = getItemListBasedOnSlug(pageContext.slug)

  let githubURL = `https://github.com/lannonbr/ActionsResourceSite/blob/master/docs/${data.mdx.parent.relativePath}`

  const guidelistItems = getSubItems(itemList, data.mdx.frontmatter.title)

  return (
    <Layout>
      <Helmet title={data.mdx.frontmatter.title + " | GARS"} />
      <SidebarPageContainer>
        <Sidebar itemList={itemList} />
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          {data.mdx.frontmatter.guidelist && guidelistItems && (
            <GuideList items={guidelistItems} />
          )}
          <a href={githubURL}>Edit this page on GitHub</a>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}

export default MDXTemplate

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
