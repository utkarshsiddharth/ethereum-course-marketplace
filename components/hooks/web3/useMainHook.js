import React from "react"
import { useSelector } from "react-redux"
import useAccount from "./useAccount"
import useNetwork from "./useNetwork"
const useMainHook = () => {
  const { web3, provider } = useSelector((state) => state.web3Api)
  const {
    accountData: { data: account },
  } = useAccount(web3, provider)
  const { network } = useNetwork(web3, provider)
  return {
    account,
    ...network,
  }
}

export default useMainHook
