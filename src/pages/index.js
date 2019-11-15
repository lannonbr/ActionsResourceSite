import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import circuit from "../images/circuit.svg"
import ColoredLink from "../components/ColoredLink"
import styled from "styled-components"

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columnCount}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.rowCount}, 200px)`};
  grid-column-gap: ${props => `${props.columnGap}px`};

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

const SectionHeading = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;

  @media (max-width: 80em) {
    padding-left: 10px;
  }
`

const CardHeading = styled.h2`
  font-size: 20px;
`

const Container = styled.section`
  width: 100vw;
  max-width: 80em;
  margin: 0 auto;
`

const HeroContainer = styled(Container)`
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

  @media (max-width: 80em) {
    h1 {
      font-size: 48px;
    }
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
`

export default () => (
  <Layout>
    <Helmet title={"Home | GARS"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
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

    <Container>
      <SectionHeading>What is Actions</SectionHeading>
      <CardGrid columnCount={2} rowCount={2} columnGap={120}>
        <div>
          <CardHeading>Workflows at your fingertips</CardHeading>
          <p>
            Be able to trigger workflows using GitHub Actions based upon dozens
            of triggers like a git push, PR opened, issue created, scheduled
            task, and many more.
          </p>
        </div>
        <div>
          <CardHeading>Your platforms, your tools</CardHeading>
          <p>
            With support for hosted runners with MacOS, Ubuntu, Windows, and
            Docker, you can work the way you want to work. If it doesn't fit
            your use case, on-prem runners are also avaiable for no cost.
          </p>
        </div>
        <div>
          <CardHeading>Native CI/CD</CardHeading>
          <p>
            Be able to have clairity when PRs are opened that your software will
            still work and when they're merged or a release is versioned, GitHub
            Actions can tackle all of the automations around such.
          </p>
        </div>
        <div>
          <CardHeading>Over 1000 Community Integrations</CardHeading>
          <p>
            With over 1000 actions in the GitHub Marketplace, you have a
            whirlwind of tools at your disposal.
          </p>
        </div>
      </CardGrid>
    </Container>
    <div
      style={{
        background: "#4D4D4D",
        color: "white",
      }}
    >
      <Container
        style={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <SectionHeading>What is GARS</SectionHeading>
        <CardGrid columnCount={3} rowCount={1} columnGap={80}>
          <div>
            <CardHeading>Deep Dive Resources</CardHeading>
            <p>
              From intro tutorials, reference guides, and API references, learn
              the Breadth of GitHub Actions
            </p>
          </div>

          <div>
            <CardHeading>Ideas to enhance your Repos</CardHeading>
            <p>
              From notifications on PRs, to scheduled tasks, deploy workflows,
              and many others, you can come away with ideas to build up tools
              around your repos
            </p>
          </div>
          <div>
            <CardHeading>Curated Actions & Workflows</CardHeading>
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
      </Container>
    </div>
    <Container
      style={{
        margin: "50px auto",
      }}
    >
      <SectionHeading>Getting Started</SectionHeading>
      <CardGrid columnCount={2} rowCount={1} columnGap={120}>
        <div>
          <CardHeading>Intro Tutorials</CardHeading>
          <p>
            Learn how to setup a simple CI pipeline with GitHub Actions or build
            your first Action with JS
          </p>
          <p>
            <ColoredLink to={"/tutorial/"}>Go To Tutorials</ColoredLink>
          </p>
        </div>
        <div>
          <CardHeading>Documentation</CardHeading>
          <p>
            Learn through guides and references all of the features of Actions.
            Workflows, Secrets, runners, and many more
          </p>
          <p>
            <ColoredLink to={"/docs/"}>Go To Docs</ColoredLink>
          </p>
        </div>
      </CardGrid>
    </Container>
  </Layout>
)
