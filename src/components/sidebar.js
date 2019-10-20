import React from "react"
import { Link } from "gatsby"

const genLinks = itemList => {
  return (
    <React.Fragment>
      {itemList.map(item => {
        return (
          <li>
            <Link to={item.link}>{item.title}</Link>
            {item.items && <ul>{genLinks(item.items)}</ul>}
          </li>
        )
      })}
    </React.Fragment>
  )
}

const Sidebar = props => {
  return (
    <aside>
      <p style={{ textAlign: "center" }}>Sidebar</p>
      <ul>{genLinks(props.itemList)}</ul>
    </aside>
  )
}

export default Sidebar
