import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Aside = styled.aside`
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
  return (
    <Aside>
      <ul>{genLinks(props.itemList)}</ul>
    </Aside>
  )
}

export default Sidebar
