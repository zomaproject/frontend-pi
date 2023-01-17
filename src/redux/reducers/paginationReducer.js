import { RENDER_PAGE, SET_PAGE } from '../types'

const INITIAL_STATE = {
  pageCurrent: 1,
  pagesTotal: 0,
  recipesRender: [],
  recipesPerPage: 9
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        pageCurrent: action.payload
      }
    case RENDER_PAGE:
      return {
        ...state,
        recipesRender:  action.payload.slice( (state.pageCurrent - 1) * state.recipesPerPage, state.pageCurrent * state.recipesPerPage),
        pagesTotal: Math.ceil(action.payload.length / state.recipesPerPage)
      }
    default:
      return state
  }
}
