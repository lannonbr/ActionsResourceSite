import React from "react"
import ColoredLink from "./ColoredLink"

export default ({ items }) => (
  <React.Fragment>
    <h2>Subpages</h2>
    <ul style={{ marginTop: 10, marginBottom: 10 }}>
      {items.map(item => (
        <li style={{ lineHeight: 1.6 }} key={"guidelist-item:" + item.title}>
          <ColoredLink to={item.link}>
            {item.title.replace(/\*$/, "")}
          </ColoredLink>
        </li>
      ))}
    </ul>
  </React.Fragment>
)
