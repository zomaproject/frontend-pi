import { GET_DETAILS } from "../types"

const initialState = {
  details: {}
}
export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    default:
      return state
  }
}
