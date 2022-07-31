import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { useMemo } from "react"
import { CONNECT_METAMASK, SET_PROVIDER } from "./types"
import { loadContract } from "@utils/loadContract"

export const LoadProvider = (data, id) => async (dispatch, state) => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider()
    if (provider) {
      const web3 = new Web3(provider)
      const contract = await loadContract("CourseMarketplace", web3)
      console.log(contract)
      return {
        provider,
        web3,
        contract: contract,
        isLoading: false,
      }
    } else {
      console.error("Please, install Metamask.")
      return {
        ...state,
        isLoading: false,
        requireInstall: true,
      }
    }
  }
  const provider = await loadProvider()
  dispatch({
    type: SET_PROVIDER,
    payload: provider,
  })
}

export const connectMetamask = () => async (dispatch, getState) => {
  const {
    web3Api: { provider, web3, isLoading },
  } = getState()

  if (!provider) {
    console.error(
      `cannot connect to MetaMask, please try to reload your browser.`
    )
  }

  if (provider) {
    try {
      await provider.request({ method: "eth_requestAccounts" })
      dispatch({
        type: CONNECT_METAMASK,
      })
      // window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }
}
