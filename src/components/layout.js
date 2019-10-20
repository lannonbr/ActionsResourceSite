import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../utils/globalStyles"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 20px;
      font-size: 24px;
      a {
        text-decoration: none;
      }
    }
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header>
      <h1>
        <Link to={"/"}>GitHub Actions Resource Site</Link>
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
    <footer>
      <p>
        Created by <a href="https://lannonbr.com">Benjamin Lannon</a>
      </p>
    </footer>
  </div>
)

export default Layout
