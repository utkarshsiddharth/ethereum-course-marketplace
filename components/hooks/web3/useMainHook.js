import React from "react"
import { useSelector } from "react-redux"
import useAccount from "./useAccount"
import useNetwork from "./useNetwork"
const useMainHook = () => {
  const { web3, provider, contract } = useSelector((state) => state.web3Api)
  const {
    accountData: { encodedAccount, account },
  } = useAccount(web3, provider)
  const { network } = useNetwork(web3, provider)
  return {
    account,
    encodedAccount,
    canPurchase: !!(account && network.isSupported),
    ...network,
    web3,
    provider,
    contract,
  }
}

export default useMainHook
