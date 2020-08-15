import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock"
import { preToCodeBlock } from "mdx-utils"
import { Link } from "gatsby"

const components = {
  inlineCode: ({ children }) => {
    return (
      <code
        style={{
          backgroundColor: "rgb(1, 22, 39)",
          padding: 3,
          margin: 3,
          color: "#f0f0f0",
        }}
      >
        {children}
      </code>
    )
  },
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <CodeBlock {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
  a: (props) => {
    if (props.href[0] === "/") {
      return (
        <Link to={props.href} {...props}>
          {props.children}
        </Link>
      )
    } else {
      return <a {...props}>{props.children}</a>
    }
  },
}

export default ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
