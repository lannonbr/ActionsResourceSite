import React from "react"
import Header from "./Header"

const Layout = ({ children }) => (
  <div className="grid min-h-screen max-w-full">
    <Header />
    <main>{children}</main>
  </div>
)

export default Layout
