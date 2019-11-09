import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import Sidebar from "../components/sidebar"
import { DocsSidebar, TutorialSidebar } from "../utils/sidebar-list"
import Layout from "../components/layout"
import SidebarPageContainer from "../components/SidebarPageContainer"

const getItemListBasedOnSlug = slug => {
  let key = slug.split("/")[1]

  const lookup = {
    docs: DocsSidebar,
    tutorial: TutorialSidebar,
  }

  return lookup[key]
}

const MDXTemplate = ({ pageContext, data }) => {
  let itemList = getItemListBasedOnSlug(pageContext.slug)

  let githubURL = `https://github.com/lannonbr/ActionsResourceSite/blob/master/docs/${data.mdx.parent.relativePath}`

  return (
    <Layout>
      <Helmet title={data.mdx.frontmatter.title + " | GARS"} />
      <SidebarPageContainer>
        <Sidebar itemList={itemList} />
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
