import clienteAxios from '../../config/clienteAxios'
import { SEARCH_RECIPE, ALERTA_SEARCH } from '../types'

const searchRecipe = (recipe_result) => {
  return {
    type: SEARCH_RECIPE,
    payload: recipe_result
  }
}
export const searchRecipeAction = (recipe) => {
  return async (dispatch) => {
    try {
      const { data } = await clienteAxios.get(`/recipes?search=${recipe}`)
      dispatch(searchRecipe(data))
    } catch (error) {
      dispatch(setAlerta(error.response.data.msg))
    }

  }
}


const  setAlerta = (alerta) => {
  return {
    type: ALERTA_SEARCH,
    payload: alerta
  }
}