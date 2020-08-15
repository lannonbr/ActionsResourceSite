import React from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => (
  <div className="grid min-h-screen max-w-full">
    <Header />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <main className="max-w-full">{children}</main>
  </div>
)

export default Layout
