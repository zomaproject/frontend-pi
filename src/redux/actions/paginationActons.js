import { RENDER_PAGE, SET_PAGE } from "../types"

export const setPage = (page) => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page
  })
}


export const renderPage =  (recipes) => (dispatch) => {
  dispatch({
    type: RENDER_PAGE,
    payload: recipes
  })
}
