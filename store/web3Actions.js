import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { useMemo } from "react"
import { CONNECT_METAMASK, SET_PROVIDER } from "./types"
import { setupHooks } from "@components/Providers/Web3/hooks/setupHooks"

export const LoadProvider = (data, id) => async (dispatch, state) => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider()
    if (provider) {
      const web3 = new Web3(provider)
      return {
        provider,
        web3,
        contract: null,
        isLoading: false,
      }
    } else {
      console.error("Please, install Metamask.")
      return {
        ...state,
        isLoading: false,
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
    web3Api: { provider, isLoading, web3 },
  } = getState()

  if (!provider) {
    console.error(
      `cannot connect to MetaMask, please try to reload your browser.`
    )
  }

  if (provider) {
    try {
      console.log({ provider })
      const account = await provider.request({ method: "eth_requestAccounts" })
      console.log({ account })
      dispatch({
        type: CONNECT_METAMASK,
        payload: {
          account,
          isWeb3Loaded: web3 != null,
          getHooks: () => setupHooks(web3),
        },
      })
    } catch (err) {
      window.location.reload()
    }
  }
}
