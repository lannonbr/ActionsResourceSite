import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid lightgray;
  height: 50px;
  width: 100%;
  background: black;
  z-index: 1;

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    li {
      margin-left: 20px;
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`

export default () => (
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
      <li>
        <Link to={"/changelog/"}>Changelog</Link>
      </li>
    </ul>
  </Header>
)
