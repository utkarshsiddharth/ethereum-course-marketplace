import React from "react"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { connectMetamask } from "store/web3Actions"
import { useAccount } from "@components/hooks"
import { useRouter } from "next/router"

const Navbar = () => {
  const { requireInstall, isLoading, web3, provider } = useSelector((state) => {
    return state.web3Api
  })
  const { pathname } = useRouter()
  const {
    accountData: { data: account, isAdmin },
  } = useAccount(web3, provider)

  const dispatch = useDispatch()

  const connect = () => {
    dispatch(connectMetamask())
  }

  return (
    <section className="mb-4">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/marketplace">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Company
                </a>
              </Link>

              {isLoading && (
                <button
                  onClick={connect}
                  disabled
                  className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
                           rounded-md shadow-md cursor-pointer py-2 
                           px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  loading
                </button>
              )}
              {requireInstall && (
                <button
                  onClick={() => {
                    window.open("https://metamask.io/download", "_blank")
                  }}
                  className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
                rounded-md shadow-md cursor-pointer py-2 
                px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  Install MetaMask
                </button>
              )}
              {!account && !requireInstall && (
                <button
                  onClick={connect}
                  className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
                          rounded-md shadow-md cursor-pointer py-2 
                          px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  Connect
                </button>
              )}
              {account && !requireInstall && (
                <button
                  disabled
                  onClick={connect}
                  className={`disabled:opacity-75 disabled:cursor-not-allowed font-medium mr-8 
                          rounded-md shadow-md cursor-pointer py-2 
                          px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  Hi there {isAdmin && "Admin"}
                </button>
              )}
            </div>
          </div>
          {account && !pathname.includes("/marketplace") && (
            <div className="flex justify-end pr-8 mt-2">
              <div
                className={`px-4 py-[2px] rounded-sm shadow-md ${
                  isAdmin ? "bg-indigo-600" : "bg-gray-700"
                } text-white`}
              >
                {account}
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  )
}

export default Navbar
