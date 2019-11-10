import React from "react"

export default props => {
  // props.frontmatter.title

  return (
    <div
      style={{
        width: 1280,
        height: 720,
        color: "white",
        background: "blue",
        padding: 10,
        border: "10px solid green",
        fontFamily: "Lato, Arial, Helvetica, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{props.frontmatter.title}</h1>
      <h2>GARS</h2>
    </div>
  )
}
