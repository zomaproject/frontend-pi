import { CREATE_RECIPE_FAILURE, CREATE_RECIPE_SUCCESS } from "../types";
import clienteAxios from "../../config/clienteAxios";

export const createRecipe =  (recipe) => {
  return async (dispatch) => {
    try{
      const response =  await clienteAxios.post('/recipes', recipe);
      dispatch(createRecipeSuccess(response.data)) 
    }catch(e){
      console.log(e)
    }
}
}



const createRecipeSuccess = (recipe) => {
  return {
    type: CREATE_RECIPE_SUCCESS,
    payload: recipe
  };
}

const createRecipeFailure = (error) => {
  return {
    type: CREATE_RECIPE_FAILURE,
    payload: error
  };
}
