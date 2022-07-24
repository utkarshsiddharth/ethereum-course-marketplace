import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const ActiveLink = ({ children, activeLinkClassName, ...props }) => {
  const { pathname } = useRouter()

  let className = children.props.className || ""
  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClassName ? activeLinkClassName : "text-indigo-600"
    }`
  }
  return <Link {...props}>{React.cloneElement(children, { className })}</Link>
}

export default ActiveLink
