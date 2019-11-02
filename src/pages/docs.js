import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { DocsSidebar } from "../utils/sidebar-list"
import SidebarPageContainer from "../components/SidebarPageContainer"
import Helmet from "react-helmet"

export default () => {
  return (
    <Layout>
      <Helmet title={"Docs | GARS"} />
      <SidebarPageContainer>
        <Sidebar itemList={DocsSidebar} />
        <div>
          <h1>Docs</h1>
          <p>Stub</p>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
