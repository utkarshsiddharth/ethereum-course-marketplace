import React from "react"
import { useSelector } from "react-redux"
const WalletBar = ({
  address,
  network,
  isSupported,
  targetNetwork,
  isLoading,
}) => {
  const { requireInstall } = useSelector((state) => state.web3Api)
  return (
    <section className="text-white bg-indigo-600 mb-4 rounded-md drop-shadow-md">
      <div className="p-8">
        <h1 className="text-2xl">Hello, {address}</h1>
        <h2 className="subtitle mb-5 text-xl">
          I hope you are having a great day!
        </h2>
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                Learn how to purchase
              </a>
            </div>
          </div>
          <div>
            {/* target network supported and has been initialized */}
            {!isSupported && !isLoading && (
              <div className="bg-red-400 p-4 rounded-lg">
                <div>Connected to wrong network</div>
                Connect to:
                <strong className="text-2xl"> {targetNetwork}</strong>
              </div>
            )}
            {requireInstall && (
              <div className="px-4 py-2 bg-amber-500 rounded-sm shadow-sm">
                <h6>Cannot connect to network, please install MetaMask</h6>
              </div>
            )}
            <div>
              <span>Currently on </span>
              <strong className="text-2xl">{network || "xxxxxx"}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar
