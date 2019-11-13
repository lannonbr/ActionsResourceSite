import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock"
import { preToCodeBlock } from "mdx-utils"
import styled from "styled-components"
import ColoredLink from "./src/components/ColoredLink"

const StyledTable = styled.table`
  margin: 20px 0;
  border: 1px solid #aaa;
  border-collapse: collapse;
  th,
  td {
    padding: 6px 10px;
    border: 1px solid #aaa;
  }
`

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
  table: props => {
    return <StyledTable>{props.children}</StyledTable>
  },
  h2: ({ children, ...otherProps }) => {
    return (
      <h2 style={{ paddingTop: 10 }} {...otherProps}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...otherProps }) => {
    return (
      <h3 style={{ paddingTop: 10 }} {...otherProps}>
        {children}
      </h3>
    )
  },
}

export default ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
