import { GET_DIETS } from "../types"

const initialState = {
  diets: []
}
export default function typesDietsReducer (state = initialState, action) {
  switch (action.type) {
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload
      }
    default:
      return state
  }
}