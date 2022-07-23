import { useEffect } from "react"
import useSWR from "swr"
const adminAccounts = {
  "0xad6a47c862bb6ae00c44c90fe3e287472da54e2ddaa64e24eb523e5a8764edd7": true,
}

const useAccount = (web3, provider) => {
  const { data, mutate, ...rest } = useSWR(web3 && "web3/accounts", getAccounts)
  async function getAccounts() {
    const accounts = await web3.eth.getAccounts()
    return web3.utils.keccak256(accounts[0])
  }
  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null))
  }, [provider])
  return {
    accountData: {
      data,
      isAdmin: (data && adminAccounts[data]) ?? false,
      ...rest,
    },
  }
}

export default useAccount
