import { LOAD_DATA, UPDATE_RECIPES } from "../types"

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
    case UPDATE_RECIPES:
        return {
          ...state,
          recipes: [action.payload, ...state.recipes] 
        }
    default:
      return state
  }
}