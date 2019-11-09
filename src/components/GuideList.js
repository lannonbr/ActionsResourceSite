import React from "react"
import { Link } from "gatsby"

export default ({ items }) => (
  <React.Fragment>
    <h2>Subpages</h2>
    <ul>
      {items.map(item => (
        <li key={"guidelist-item:" + item.title}>
          <Link to={item.link}>{item.title.replace(/\*$/, "")}</Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
)
