import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { TutorialSidebar } from "../utils/sidebar-list"
import SidebarPageContainer from "../components/SidebarPageContainer"

export default () => {
  return (
    <Layout>
      <SidebarPageContainer>
        <Sidebar itemList={TutorialSidebar} />
        <div>
          <h1>Tutorials</h1>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
