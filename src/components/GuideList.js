import React from "react"
import ColoredLink from "./ColoredLink.js"

export default ({ items }) => (
  <React.Fragment>
    <h2>Subpages</h2>
    <ul className="my-3">
      {items.map((item) => (
        <li style={{ lineHeight: 1.6 }} key={"guidelist-item:" + item.title}>
          <ColoredLink href={item.link}>
            {item.title.replace(/\*$/, "")}
          </ColoredLink>
        </li>
      ))}
    </ul>
  </React.Fragment>
)
