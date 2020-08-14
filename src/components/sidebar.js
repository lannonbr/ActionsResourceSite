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
  }
`

const genLinks = (itemList) => {
  return (
    <React.Fragment>
      {itemList.map((item) => {
        const isStub = item.title.endsWith("*")

        return (
          <li
            className={isStub ? "stub" : ""}
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

const Sidebar = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarContainer>
      <button
        className="inline-flex items-center justify-center fixed text-2xl w-16 h-16 text-white bg-gray-700 border-none rounded-full z-10 md:hidden"
        style={{
          bottom: 10,
          right: 10,
          boxShadow: "0 4px 8px rgba(0,0,0,0.42)",
        }}
        onClick={() => toggleSidebar()}
      >
        {isSidebarOpen ? "x" : "+"}
      </button>
      <nav className={isSidebarOpen ? "mobileOpen" : ""}>
        <ul>{genLinks(props.itemList)}</ul>
      </nav>
    </SidebarContainer>
  )
}

export default Sidebar
