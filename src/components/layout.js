import React from "react"
import styled from "styled-components"

import GlobalStyles from "../utils/globalStyles"
import Header from "./Header"

const LayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
  </LayoutContainer>
)

export default Layout
