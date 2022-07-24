import useSWR from "swr"
const URL = `https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`

const COURSE_PRICE = 15

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  const price = data?.market_data?.current_price?.usd ?? null
  return price
}

const useEthPrice = () => {
  const { data, ...rest } = useSWR(URL, fetcher, { refreshInterval: 10000 })
  const priceItem = data && ((COURSE_PRICE / Number(data)).toFixed(6) ?? null)
  return {
    eth: { data, priceItem, ...rest },
  }
}

export default useEthPrice
