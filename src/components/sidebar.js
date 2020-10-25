import { h, Fragment } from "preact"
import { useState } from "preact/hooks"

const genLinks = (itemList) => {
  return (
    <Fragment>
      {itemList.map((item) => {
        const isStub = item.title.endsWith("*")

        return (
          <li className="w-80 pl-2" key={"sidebar-item:" + item.title}>
            <a
              className={
                isStub
                  ? "text-gray-700 no-underline flex items-center h-12 pl-5 hover:bg-gray-200"
                  : "no-underline flex items-center h-12 pl-5 hover:bg-gray-200"
              }
              href={item.link}
            >
              {item.title.replace(/\*$/, "")}
              &nbsp;
              {isStub ? <sub>(stub)</sub> : ""}
            </a>
            {/* add a new unordered list nested in a item if it has sub-pages */}
            {item.items && (
              <ul className="list-none pl-0 h-full">{genLinks(item.items)}</ul>
            )}
          </li>
        )
      })}
    </Fragment>
  )
}

const ToggleButton = (props) => {
  return (
    <button
      className="inline-flex items-center justify-center fixed text-2xl w-16 h-16 text-white bg-gray-700 border-none rounded-full z-10 md:hidden"
      style={{
        bottom: 10,
        right: 10,
        boxShadow: "0 4px 8px rgba(0,0,0,0.42)",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

const Sidebar = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <ToggleButton onClick={() => toggleSidebar()}>
        {isSidebarOpen ? "x" : "+"}
      </ToggleButton>
      <nav
        className={
          (isSidebarOpen ? "block mb-16" : "hidden") +
          " md:block overflow-x-hidden fixed left-0 overflow-y-auto z-10 bg-white"
        }
        style={{
          top: isSidebarOpen ? 50 : "unset",
          borderRight: "1px solid lightgray",
          height: "calc(100% - 50px)",
        }}
      >
        <ul className="list-none pl-0 h-full">{genLinks(props.itemList)}</ul>
      </nav>
    </div>
  )
}

export default Sidebar
