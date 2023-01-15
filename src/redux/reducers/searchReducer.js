import { ALERTA_SEARCH, SEARCH_RECIPE } from '../types'

const initialState = {
  searchRecipe: [],
  alertSearch: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        searchRecipe: action.payload
      }
    case ALERTA_SEARCH:
      return {
        ...state,
        alertSearch: action.payload
      }
    default:
      return state
  }
}
