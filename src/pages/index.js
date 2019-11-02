import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"

export default () => (
  <Layout>
    <Helmet title={"Home | GARS"} />
    <div
      style={{
        maxWidth: "60em",
        margin: `20px auto`,
        paddingTop: 50,
      }}
    >
      <h1>Frontpage</h1>
      <p>This is gonna be a resource site for GitHub Actions.</p>
    </div>
  </Layout>
)
