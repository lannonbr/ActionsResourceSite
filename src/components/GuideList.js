import React from "react"
import ColoredLink from "./ColoredLink"

export default ({ items }) => (
  <React.Fragment>
    <h2>Subpages</h2>
    <ul>
      {items.map(item => (
        <li key={"guidelist-item:" + item.title}>
          <ColoredLink to={item.link}>
            {item.title.replace(/\*$/, "")}
          </ColoredLink>
        </li>
      ))}
    </ul>
  </React.Fragment>
)
