import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { useMemo } from "react"
import { CONNECT_METAMASK, SET_PROVIDER } from "./types"
import { setupHooks } from "@components/Providers/Web3/hooks/setupHooks"

export const loadProvider = (data, id) => async (dispatch, state) => {
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

  const connect = provider
    ? async () => {
        try {
          await provider.request({ method: "eth_requestAccounts" })
        } catch (err) {
          window.location.reload()
        }
      }
    : () =>
        console.error(
          `cannot connect to MetaMask, please try to reload your browser.`
        )

  dispatch({
    type: CONNECT_METAMASK,
    payload: {
      connect,
      isWeb3Loaded: web3 != null,
      getHooks: () => setupHooks(web3),
    },
  })
}
