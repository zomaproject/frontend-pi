import { ALERTA_SEARCH, CLEAR_SEARCH, SEARCH_RECIPE } from '../types'

const initialState = {
  searchRecipe: [],
  alertSearch: { error: false, msg: ''} 
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
        alertSearch: { error: true, msg: action.payload} 
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        searchRecipe: action.payload,
        alertSearch: { error: false, msg: ''}
      }
    default:
      return state
  }
}
