import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Sidebar from "../components/sidebar"
import { DocsSidebar, TutorialSidebar } from "../utils/sidebar-list"
import Layout from "../components/layout"
import SidebarPageContainer from "../components/SidebarPageContainer"

const f = location => {
  let key = location.split("/")[1]

  const lookup = {
    docs: DocsSidebar,
    tutorial: TutorialSidebar,
  }

  return lookup[key]
}

const MDXTemplate = ({ pageContext, data }) => {
  let itemList = f(pageContext.slug)

  return (
    <Layout>
      <SidebarPageContainer>
        <Sidebar itemList={itemList} />
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
    }
  }
`
