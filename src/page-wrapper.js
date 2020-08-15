/** @jsx h */
import { h } from "preact"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/preact"
import Header from "./components/Header.js"
import { DocsSidebar, TutorialSidebar } from "./utils/sidebar-list.js"
import GuideList from "./components/GuideList.js"
import Sidebar from "./components/sidebar.js"

const getItemListBasedOnSlug = (slug) => {
  let key = slug.split("/")[0]

  const lookup = {
    docs: DocsSidebar,
    tutorial: TutorialSidebar,
  }

  return lookup[key]
}

const getSubItems = (list, title) => {
  for (let item of list) {
    let itemTitle = item.title.endsWith("*")
      ? item.title.slice(0, -1)
      : item.title

    if (itemTitle === title) {
      return item.items
    }
  }
}

const Layout = ({ children, ...props }) => {
  let { title, slug } = props

  let type
  let filename

  let githubURL
  let guidelistItems
  let itemList

  if (slug) {
    ;[type, filename] = slug.split("/")

    githubURL = `https://github.com/lannonbr/ActionsResourceSite/blob/master/docs/${slug}.mdx`
    itemList = getItemListBasedOnSlug(slug)
    guidelistItems = getSubItems(itemList, title)
  }

  return (
    <div id="pageWrapper" className="grid min-h-screen max-w-full">
      <Header />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {title && <title>{title + " | GARS"}</title>}
        {slug && <meta name="twitter:card" content="summary_large_image" />}
        {slug && <meta name="twitter:title" content={title + " | GARS"} />}
        {slug && <meta name="twitter:site" content="@lannonbr" />}
        {slug && (
          <meta
            name="twitter:image"
            content={`https://gars.dev/og-images/${filename}.jpg`}
          />
        )}
      </Helmet>
      <main className="max-w-full">
        <MDXProvider
          components={{
            inlineCode: ({ children }) => {
              return (
                <code
                  style={{
                    backgroundColor: "rgb(1, 22, 39)",
                    padding: 3,
                    margin: 3,
                    color: "#f0f0f0",
                  }}
                >
                  {children}
                </code>
              )
            },
            pre: (props) => {
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.children.props.children,
                  }}
                />
              )
            },
          }}
        >
          {slug ? (
            <div className="flex mt-12">
              <Sidebar itemList={itemList} />
              <div className="prose w-full max-w-4xl pl-2 pr-2 my-5 mx-auto md:pl-80">
                <h1>{title}</h1>
                {children}
                {props.guidelist && guidelistItems && (
                  <GuideList items={guidelistItems} />
                )}
                <a
                  className="inline-block text-blue-700 no-underline hover:underline py-5"
                  href={githubURL}
                >
                  Edit this page on GitHub
                </a>
              </div>
            </div>
          ) : (
            children
          )}
        </MDXProvider>
      </main>
    </div>
  )
}

export default Layout
