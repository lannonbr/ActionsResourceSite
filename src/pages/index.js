/** @jsx h */
import Helmet from "react-helmet"
import Circuit from "../images/circuit.js"
import ColoredLink from "../components/ColoredLink.js"
import { h, Fragment } from "preact"

export default () => (
  <Fragment>
    <Helmet title={"Home | GARS"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Helmet>
    <div className="flex flex-col items-center mx-auto max-w-5xl my-12 md:mt-16 md:mb-0 md:pt-12 md:flex-row">
      <h1 className="text-4xl text-center max-w-3xl md:max-w-4xl mb-8 md:mb-0 md:text-5xl xl:text-6xl">
        Bring Intelligence to your Repos with GitHub Actions
      </h1>
      {/* <img
        className="max-w-sm md:max-w-lg"
        src={circuit}
        alt={"circuit illustration"}
      /> */}
      <Circuit />
    </div>

    <section className="w-screen max-w-3xl md:max-w-5xl mx-auto">
      <h1 className="text-4xl mb-16 xl:pl-2">What is Actions</h1>
      <div className="grid grid-cols-1 row-gap-4 mb-16 md:gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-xl">Workflows at your fingertips</h2>
          <p>
            Be able to trigger workflows using GitHub Actions based upon dozens
            of triggers like a git push, PR opened, issue created, scheduled
            task, and many more.
          </p>
        </div>
        <div>
          <h2 className="text-xl">Your platforms, your tools</h2>
          <p>
            With support for hosted runners with MacOS, Ubuntu, Windows, and
            Docker, you can work the way you want to work. If it doesn't fit
            your use case, on-prem runners are also avaiable for no cost.
          </p>
        </div>
        <div>
          <h2 className="text-xl">Native CI/CD</h2>
          <p>
            Be able to have clairity when PRs are opened that your software will
            still work and when they're merged or a release is versioned, GitHub
            Actions can tackle all of the automations around such.
          </p>
        </div>
        <div>
          <h2 className="text-xl">Over 1000 Community Integrations</h2>
          <p>
            With over 1000 actions in the GitHub Marketplace, you have a
            whirlwind of tools at your disposal.
          </p>
        </div>
      </div>
    </section>
    <div className="text-white bg-gray-900">
      <section className="mx-auto px-2 py-8 md:max-w-5xl">
        <h1 className="text-4xl mb-16 xl:pl-2">What is GARS</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-24">
          <div>
            <h2 className="text-xl">Deep Dive Resources</h2>
            <p>
              From intro tutorials, reference guides, and API references, learn
              the Breadth of GitHub Actions
            </p>
          </div>

          <div>
            <h2 className="text-xl">Ideas to enhance your Repos</h2>
            <p>
              From notifications on PRs, to scheduled tasks, deploy workflows,
              and many others, you can come away with ideas to build up tools
              around your repos
            </p>
          </div>
          <div>
            <h2 className="text-xl">Curated Actions & Workflows</h2>
            <p>
              A look into some top workflows and community developed actions
              that can power up your toolchain
            </p>
            <p>
              <span
                style={{
                  border: "1px solid white",
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                }}
              >
                Coming Soon
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
    <section className="mx-auto px-2 py-8 md:max-w-5xl">
      <h1 className="text-4xl mb-16 xl:pl-2">Getting Started</h1>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-24">
        <div>
          <h2 className="text-xl">Intro Tutorials</h2>
          <p>
            Learn how to setup a simple CI pipeline with GitHub Actions or build
            your first Action with JS
          </p>
          <p>
            <ColoredLink href={"/tutorial/"}>Go To Tutorials</ColoredLink>
          </p>
        </div>
        <div>
          <h2 className="text-xl">Documentation</h2>
          <p>
            Learn through guides and references all of the features of Actions.
            Workflows, Secrets, runners, and many more
          </p>
          <p>
            <ColoredLink href={"/docs/"}>Go To Docs</ColoredLink>
          </p>
        </div>
      </div>
    </section>
  </Fragment>
)
