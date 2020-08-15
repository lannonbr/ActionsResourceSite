import React from "react"
// import { Link } from "gatsby"

export default () => (
  <header className="flex fixed items-center justify-start px-5 w-full h-12 bg-black z-10">
    <h1 className="text-lg">
      <a className="no-underline text-white" href="/">
        <abbr title={`GitHub Actions Resource Site`}>GARS</abbr>
      </a>
    </h1>
    <ul className="pl-0 list-none flex">
      <li className="ml-5 text-lg">
        <a className="no-underline text-white" href="/docs.html">
          Docs
        </a>
      </li>
      <li className="ml-5 text-lg">
        <a className="no-underline text-white" href="/tutorial.html">
          Tutorials
        </a>
      </li>
      <li className="ml-5 text-lg">
        <a className="no-underline text-white" href="/changelog">
          Changelog
        </a>
      </li>
    </ul>
  </header>
)
