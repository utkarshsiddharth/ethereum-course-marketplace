import "../styles/globals.css"
import { wrapper, store } from "../store/store"
import { Provider, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { connectMetamask, LoadProvider } from "store/web3Actions"
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(LoadProvider())
  }, [])

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
