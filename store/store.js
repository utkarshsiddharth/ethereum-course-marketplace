import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"

import { web3Reducer } from "./web3Reducer"
const reducer = combineReducers({
  web3Api: web3Reducer,
})

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
