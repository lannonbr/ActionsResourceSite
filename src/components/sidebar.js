import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SidebarContainer = styled.div`
  nav {
    border-right: 1px solid lightgray;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    overflow-y: auto;
    height: calc(100% - 50px);
    z-index: 1;
    background: white;

    ul {
      list-style: none;
      padding-left: 0;
      height: 100%;

      li {
        width: 300px;
        padding-left: 10px;

        a {
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          height: 50px;
          padding-left: 20px;

          &:hover {
            background: rgba(0, 0, 0, 0.1);
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
        }

        &.stub > a {
          color: gray;
        }
      }
    }

    & > ul > li:first-child {
      text-transform: uppercase;
      font-family: var(--headerFont);
    }
  }

  button {
    display: none;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 24px;
    background: slateblue;
    border: none;
    border-radius: 50px;
    z-index: 1;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.42);
  }

  @media (max-width: 768px) {
    width: 0;

    nav {
      display: none;
    }

    nav.mobileOpen {
      display: block;
      position: fixed;
      left: 0;
      top: 50px;
      margin-bottom: 60px;
    }

    button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const genLinks = itemList => {
  return (
    <React.Fragment>
      {itemList.map(item => {
        const isStub = item.title.endsWith("*")

        return (
          <li
            className={item.title.endsWith("*") ? "stub" : ""}
            key={"sidebar-item:" + item.title}
          >
            <Link to={item.link}>
              {item.title.replace(/\*$/, "")}
              &nbsp;
              {isStub ? <sub>(stub)</sub> : ""}
            </Link>
            {/* add a new unordered list nested in a item if it has sub-pages */}
            {item.items && <ul>{genLinks(item.items)}</ul>}
          </li>
        )
      })}
    </React.Fragment>
  )
}

const Sidebar = props => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarContainer>
      <button onClick={() => toggleSidebar()}>
        {isSidebarOpen ? "x" : "+"}
      </button>
      <nav className={isSidebarOpen ? "mobileOpen" : ""}>
        <ul>{genLinks(props.itemList)}</ul>
      </nav>
    </SidebarContainer>
  )
}

export default Sidebar
