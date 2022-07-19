import React from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import useAccount from "@components/Providers/Web3/hooks/useAccount"

const Navbar = () => {
  const { connect, isWeb3Loaded, isLoading, web3, hooks } = useSelector(
    (state) => {
      return state.web3Api
    }
  )

  const { account } = hooks?.useAccount()
  console.log({ account })

  const router = useRouter()
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/">
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

              {isLoading ? (
                <button
                  onClick={connect}
                  disabled
                  className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
                           rounded-md shadow-md cursor-pointer py-2 
                           px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  loading
                </button>
              ) : isWeb3Loaded ? (
                <button
                  onClick={connect}
                  className={`disabled:opacity-50 disabled:cursor-not-allowed font-medium mr-8 
                        rounded-md shadow-md cursor-pointer py-2 
                        px-4 hover:text-gray-200 bg-indigo-700 text-gray-100  hover:bg-indigo-800`}
                >
                  Connect
                </button>
              ) : (
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
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
