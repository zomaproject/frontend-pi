import clienteAxios from '../../config/clienteAxios'
import { LOAD_DATA, UPDATE_RECIPES } from '../types'

const setRecipes = (recipes) => {
  return {
    type: LOAD_DATA,
    payload: recipes
  }
}

export const dowloadData = () => {
  return async (dispatch) => {
    try {
      const { data } = await clienteAxios('/recipes')
      dispatch(setRecipes(data))
    } catch (error) {
      console.log(error.message)
    }
  }
}



export const updateRecipes = (recipe) => {
  return {
    type: UPDATE_RECIPES,
    payload: recipe
  }
} 