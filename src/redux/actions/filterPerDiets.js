import { FILTER_DIETS, SET_DIETS } from "../types"

function setDiets(arrDiets) {
  return {
    type: SET_DIETS,
    payload: arrDiets
  }
}

function filterDiets(arrDiets) {
  return {
    type: FILTER_DIETS,
    payload: arrDiets
  }
}


export function loadFilterDiets(arrDiets, arrRecipes) {
  return (dispatch) => {
    dispatch(setDiets(arrDiets))
    dispatch(filterDiets(arrRecipes))
  }
}
