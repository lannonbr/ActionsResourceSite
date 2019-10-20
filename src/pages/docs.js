import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { DocsSidebar } from "../utils/sidebar-list"
import SidebarPageContainer from "../components/SidebarPageContainer"

export default () => {
  return (
    <Layout>
      <SidebarPageContainer>
        <Sidebar itemList={DocsSidebar} />
        <div>
          <h1>Docs!!!</h1>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
