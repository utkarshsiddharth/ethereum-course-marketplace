import React from "react"

const Button = ({ onClick, children, classNames, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
  rounded-md shadow-md cursor-pointer py-2 
  px-4  bg-indigo-700 text-gray-100  hover:bg-indigo-800 ${classNames}`}
    >
      {children}
    </button>
  )
}

export default Button
