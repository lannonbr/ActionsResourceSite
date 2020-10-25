/** @jsx h */
import { h, Fragment } from "preact"
import { Helmet } from "react-helmet"

import Sidebar from "../components/sidebar.js"
import { DocsSidebar } from "../sidebar-list.js"
import ColoredLink from "../components/ColoredLink.js"

export default () => {
  return (
    <Fragment>
      <Helmet title={"Docs | GARS"}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Helmet>
      <div className="flex mt-12">
        <Sidebar itemList={DocsSidebar} />
        <div className="w-full max-w-4xl pl-2 pr-2 my-5 mx-auto md:pl-80">
          <h1>Docs</h1>
          <p>
            GitHub Actions provides APIs and tools to create automation
            workflows around your GitHub projects. These docs will provide
            resources to learn the tools and features to get around the
            platform.
          </p>
          <h2 style={{ marginTop: 16 }}>Reference Guides</h2>
          <p>
            These are a collection of guides on plenty of features of GitHub
            Actions. From finding actions, learning how to interact with
            GitHub's API, using environment variables and secrets and many more.
          </p>
          <ColoredLink href={"/docs/guides/"}>
            Go to Reference Guides
          </ColoredLink>
          <h2 style={{ marginTop: 16 }}>Internals</h2>
          <p>
            This section of docs will dive into the deeper workings of how
            GitHub Actions works. From learning about the various yaml files
            that are used to create actions and workflows, to learning about the
            expression syntax and even the runners your workflows run on.
          </p>
          <ColoredLink href={"/docs/internals/"}>Go to Internals</ColoredLink>
          <h2 style={{ marginTop: 16 }}>External Resources</h2>
          <p>
            Alongside all the content here, I have curated content about Actions
            from the greater community.
          </p>
          <ColoredLink href={"/docs/external-resources/"}>
            Go to External Resources
          </ColoredLink>
        </div>
      </div>
    </Fragment>
  )
}
