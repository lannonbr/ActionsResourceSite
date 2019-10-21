import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../utils/globalStyles"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid lightgray;

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    li {
      margin-left: 20px;
      font-size: 18px;
      a {
        text-decoration: none;
      }
    }
  }
`

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header>
      <h1
        style={{
          fontSize: 20,
        }}
      >
        <Link to={"/"}>
          <abbr title={`GitHub Actions Resource Site`}>GARS</abbr>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/docs/"}>Docs</Link>
        </li>
        <li>
          <Link to={"/tutorial/"}>Tutorials</Link>
        </li>
      </ul>
    </Header>
    <main>{children}</main>
  </LayoutContainer>
)

export default Layout
