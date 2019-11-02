import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { TutorialSidebar } from "../utils/sidebar-list"
import SidebarPageContainer from "../components/SidebarPageContainer"
import Helmet from "react-helmet"

export default () => {
  return (
    <Layout>
      <Helmet title={"Tutorials | GARS"} />
      <SidebarPageContainer>
        <Sidebar itemList={TutorialSidebar} />
        <div
          style={{
            lineHeight: 1.6,
          }}
        >
          <h1>Tutorials</h1>
          <p>Stub</p>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
