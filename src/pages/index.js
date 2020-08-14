import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import circuit from "../images/circuit.svg"
import ColoredLink from "../components/ColoredLink"
import styled from "styled-components"

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columnCount}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rowCount}, 200px)`};
  grid-column-gap: ${(props) => `${props.columnGap}px`};

  @media (max-width: 80em) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: unset;

    div {
      margin-bottom: 30px;
    }
  }
`

const HeroContainer = styled.section`
  width: 100vw;
  max-width: 80em;
  margin: 0 auto;

  padding-top: 50px;
  margin-top: 75px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 56px;
  }

  img {
    max-width: 50vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 25px;

    h1 {
      font-size: 36px;
      max-width: 80vw;
      margin-bottom: 30px;
    }

    img {
      max-width: 70vw;
    }
  }

  @media (max-width: 80em) {
    h1 {
      font-size: 48px;
    }
  }
`

export default () => (
  <Layout>
    <Helmet title={"Home | GARS"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Helmet>
    <HeroContainer>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Bring Intelligence to your Repos with GitHub Actions
      </h1>
      <img src={circuit} alt={"circuit illustration"} />
    </HeroContainer>

    <section className="w-screen max-w-6xl mx-auto">
      <h1 className="text-4xl mb-16 xl:pl-2">What is Actions</h1>
      <CardGrid columnCount={2} rowCount={2} columnGap={120}>
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
      </CardGrid>
    </section>
    <div
      style={{
        background: "#4D4D4D",
        color: "white",
      }}
    >
      <section
        className="w-screen max-w-6xl mx-auto"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <h1 className="text-4xl mb-16 xl:pl-2">What is GARS</h1>
        <CardGrid columnCount={3} rowCount={1} columnGap={80}>
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
        </CardGrid>
      </section>
    </div>
    <section
      className="w-screen max-w-6xl mx-auto"
      style={{
        margin: "50px auto",
      }}
    >
      <h1 className="text-4xl mb-16 xl:pl-2">Getting Started</h1>
      <CardGrid columnCount={2} rowCount={1} columnGap={120}>
        <div>
          <h2 className="text-xl">Intro Tutorials</h2>
          <p>
            Learn how to setup a simple CI pipeline with GitHub Actions or build
            your first Action with JS
          </p>
          <p>
            <ColoredLink to={"/tutorial/"}>Go To Tutorials</ColoredLink>
          </p>
        </div>
        <div>
          <h2 className="text-xl">Documentation</h2>
          <p>
            Learn through guides and references all of the features of Actions.
            Workflows, Secrets, runners, and many more
          </p>
          <p>
            <ColoredLink to={"/docs/"}>Go To Docs</ColoredLink>
          </p>
        </div>
      </CardGrid>
    </section>
  </Layout>
)
