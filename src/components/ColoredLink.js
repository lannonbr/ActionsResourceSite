import React from "react"
import { Link } from "gatsby"

export default (props) => {
  return (
    <Link className="text-blue-700 no-underline hover:underline" {...props} />
  )
}
