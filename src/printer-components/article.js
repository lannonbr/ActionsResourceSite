import React from "react"

export default props => {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        color: "white",
        background: "linear-gradient(312deg, #2a30c7 15%, #5B8CC8 82%)",
        padding: 10,
        textTransform: "uppercase",
        boxSizing: "border-box",
        fontFamily: "Oswald, Arial, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 35,
      }}
    >
      <h1>{props.frontmatter.title}</h1>
      <h2>GARS</h2>
    </div>
  )
}
