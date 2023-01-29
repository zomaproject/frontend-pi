import clienteAxios from '../../config/clienteAxios'
import { LOAD_DATA, MENSAJE_STATE_RECIPES, SET_RECIPE_TO_EDIT, UPDATE_DELETE, UPDATE_RECIPES } from '../types'

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

const updateRecipeAfterDelete = (id) => {
  return {
    type: UPDATE_DELETE,
    payload: id
  }
}



const deleteRecipeDB = async (id) => {
   const { data } = await  clienteAxios.delete(`/recipes/${id}`) 
   return data
}

const setMesajeRecipes = (msg) => {
  return {
    type: MENSAJE_STATE_RECIPES,
    payload: msg
  }
}

export const deleteRecipe = (id) => {
  return async dispatch => {
    try {
      dispatch(setMesajeRecipes(await deleteRecipeDB(id)))
      dispatch(updateRecipeAfterDelete(id))
    }catch (e){
      setMesajeRecipes(e.reponse.data.msg)
    } 
  }
}


export const setEdit = (recipeToEdit) => {
  return {
    type: SET_RECIPE_TO_EDIT,
    payload: recipeToEdit
  }
}