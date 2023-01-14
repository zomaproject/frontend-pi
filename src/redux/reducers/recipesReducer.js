import { LOAD_DATA } from "../types"

const INITIAL_STATE = {
  recipes : [],
}

export default function recipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        recipes: action.payload,
      }
    default:
      return state
  }
}