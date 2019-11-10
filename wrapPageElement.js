import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock"
import { preToCodeBlock } from "mdx-utils"
import styled from "styled-components"
import ColoredLink from "./src/components/ColoredLink"

const ColoredA = styled.a`
  color: #3867d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

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
  a: props => {
    if (props.href[0] === "/") {
      return (
        <ColoredLink to={props.href} {...props}>
          {props.children}
        </ColoredLink>
      )
    } else {
      return <ColoredA {...props}>{props.children}</ColoredA>
    }
  },
}

export default ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
