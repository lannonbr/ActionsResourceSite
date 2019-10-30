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
        <div
          style={{
            paddingTop: 50,
          }}
        >
          <h1>Docs</h1>
          <p>Stub</p>
        </div>
      </SidebarPageContainer>
    </Layout>
  )
}
