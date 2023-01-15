import { LOADING } from "../types"

const INITIAL_STATE = {
  loading: false,
}

export default function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload, 
      }
    default:
      return state
  }
}