import clienteAxios from '../../config/clienteAxios'
import { LOAD_DATA } from '../types'

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
