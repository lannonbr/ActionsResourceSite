import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock"
import { preToCodeBlock } from "mdx-utils"

const components = {
  inlineCode: ({ children }) => {
    return (
      <code
        style={{
          backgroundColor: "rgb(1, 22, 39)",
          padding: 3,
          margin: 3,
          borderRadius: 5,
          color: "#f0f0f0",
        }}
      >
        {children}
      </code>
    )
  },
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <CodeBlock {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

export default ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
