import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { DocsSidebar } from "../utils/sidebar-list"
import SidebarPageContainer from "../components/SidebarPageContainer"
import Helmet from "react-helmet"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <Helmet title={"Docs | GARS"} />
      <SidebarPageContainer>
        <Sidebar itemList={DocsSidebar} />
        <div>
          <h1>Docs</h1>
          <p>
            GitHub Actions provides APIs and tools to create automation
            workflows around your GitHub projects. These docs will provide
            resources to learn the tools and features to get around the
            platform.
          </p>
          <h2 style={{ marginTop: 16 }}>Reference Guides</h2>
          <p>
            These are a collection of guides on plenty of features of GitHub
            Actions. From finding actions, learning how to interact with
            GitHub's API, using environment variables and secrets and many more.
          </p>
          <Link to={"/docs/guides/"}>Go to Reference Guides</Link>
          <h2 style={{ marginTop: 16 }}>Internals</h2>
          <p>
            This section of docs will dive into the deeper workings of how
            GitHub Actions works. From learning about the various yaml files
            that are used to create actions and workflows, to learning about the
            expression syntax and even the runners your workflows run on.
          </p>
          <Link to={"/docs/guides/"}>Go to Internals</Link>
          <h2 style={{ marginTop: 16 }}>External Resources</h2>
          <p>
            Alongside all the content here, I have curated content about Actions
            from the greater community.
          </p>
          <Link to={"/docs/external-resources/"}>Go to External Resources</Link>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
