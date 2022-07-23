import React, { useEffect } from "react"
import useSWR from "swr"

const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
  137: "Polygon Test Network",
}
const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

const useNetwork = (web3, provider) => {
  const { data, error, mutate } = useSWR(web3 && "web/network", getData)

  async function getData() {
    const chainId = await web3.eth.getChainId()
    return NETWORKS[chainId]
  }
  useEffect(() => {
    // listen for chain(network) change
    provider &&
      provider.on(
        "chainChanged",
        (chainId) => NETWORKS[mutate(parseInt(chainId, 16))]
      )
  }, [web3])
  return {
    network: {
      chainId: data,
      mutate,
      isLoading: !data && !error,
      target: targetNetwork,
      isSupported: data === targetNetwork,
    },
  }
}

export default useNetwork
