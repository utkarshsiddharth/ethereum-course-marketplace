import "../styles/globals.css"
import { wrapper, store } from "../store/store"
import { Provider, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { connectMetamask, loadProvider } from "store/web3Actions"
function MyApp({ Component, pageProps }) {
  const { isLoading, web3 } = useSelector((state) => state.web3Api)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProvider())
  }, [])
  useEffect(() => {
    dispatch(connectMetamask())
  }, [web3])
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
