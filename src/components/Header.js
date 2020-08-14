import React from "react"
import { Link } from "gatsby"

export default () => (
  <header className="flex fixed items-center justify-start px-5 w-full h-12 bg-black z-10">
    <h1 className="text-lg">
      <Link className="no-underline text-white" to={"/"}>
        <abbr title={`GitHub Actions Resource Site`}>GARS</abbr>
      </Link>
    </h1>
    <ul className="pl-0 list-none flex">
      <li className="ml-5 text-lg">
        <Link className="no-underline text-white" to={"/docs/"}>
          Docs
        </Link>
      </li>
      <li className="ml-5 text-lg">
        <Link className="no-underline text-white" to={"/tutorial/"}>
          Tutorials
        </Link>
      </li>
      <li className="ml-5 text-lg">
        <Link className="no-underline text-white" to={"/changelog/"}>
          Changelog
        </Link>
      </li>
    </ul>
  </header>
)
