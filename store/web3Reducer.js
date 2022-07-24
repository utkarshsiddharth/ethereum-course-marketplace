import { CONNECT_METAMASK, SET_PROVIDER } from "./types"

const initialState = {
  provider: null,
  web3: null,
  contract: null,
  isLoading: true,
  requireInstall: false,
}

export const web3Reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PROVIDER:
      return {
        ...state,
        ...payload,
        isLoading: false,
      }
    case CONNECT_METAMASK:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
