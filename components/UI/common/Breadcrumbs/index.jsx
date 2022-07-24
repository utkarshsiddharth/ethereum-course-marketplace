import { ActiveLink } from "@components/UI/common"
import React from "react"

const Breadcrumbs = ({ links = [] }) => {
  return (
    <nav aria-label="breadcrumb" className="my-4 px-4 sm:px-6 lg:px-8">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400 items-center">
        {links.map((link, index) => (
          <li
            key={link.href}
            className={`${
              index === 0 ? "pr-4" : "px-4"
            } font-medium text-gray-500 hover:text-gray-900`}
          >
            <ActiveLink
              activeLinkClassName="font-bold text-indigo-600"
              href={link.href}
            >
              <a className="">{link.name}</a>
            </ActiveLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
