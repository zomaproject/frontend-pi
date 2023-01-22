import { FILTER_DIETS, SET_DIETS } from '../types'

const initialState = {
  arrFilters: [],
  recipesFiltered: []
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIETS:
      return {
        ...state,
        arrFilters: action.payload
      }
    case FILTER_DIETS:
      if(state.arrFilters.length === 0) return {...state, recipesFiltered: []}
      return {
        ...state,
        recipesFiltered: action.payload.filter( recipe => {
        return recipe.Diets.some( diet => state.arrFilters.includes(diet.name))
    })

      }
    default:
      return state
  }
}

export default filterReducer
