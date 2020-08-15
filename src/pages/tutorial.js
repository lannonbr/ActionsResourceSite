import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { TutorialSidebar } from "../utils/sidebar-list"
import Helmet from "react-helmet"
import ColoredLink from "../components/ColoredLink"

export default () => {
  return (
    <Layout>
      <Helmet title={"Tutorials | GARS"}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Helmet>
      <div className="flex mt-12">
        <Sidebar itemList={TutorialSidebar} />
        <div
          className="w-full max-w-4xl pl-2 pr-2 my-5 mx-auto md:pl-80"
          style={{
            lineHeight: 1.6,
          }}
        >
          <h1>Tutorials</h1>
          <p>
            If you are new to Actions, these guides will walk you through some
            introductory content on how to be able to use the GitHub Actions
            platform
          </p>
          <div className="flex flex-col md:flex-row">
            <section className="mb-5 flex-1 md:mb-0">
              <h2>Setting up CI</h2>
              <p>
                A good intro to GH Actions is setting up a Continuous
                Integration workflow so as people contribute to your project,
                you can have some safety that the project will continue to do
                what is expected of it.
              </p>
              <ColoredLink to={"/tutorial/ci-pipeline/"}>
                Learn More
              </ColoredLink>
            </section>
            <section style={{ flex: 1 }}>
              <h2>Building your first Action</h2>
              <p>
                On top of using other people's actions, building Actions allows
                for packagable programs that you can add to any of your
                workflows. This will go through creating a new Action with
                Javascript.
              </p>
              <ColoredLink to={"/tutorial/build-first-action/"}>
                Learn More
              </ColoredLink>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
