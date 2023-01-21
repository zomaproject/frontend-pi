import { CREATE_RECIPE_FAILURE, CREATE_RECIPE_SUCCESS } from "../types";
import axios from 'axios';
import clienteAxios from "../../config/clienteAxios";

export const createRecipe = (recipe) => {
  return (dispatch) => {
    // dispatch(createRecipeRequest());
    return clienteAxios.post('/recipes', recipe)
      .then(response => {
        dispatch(createRecipeSuccess(response.data));
      })
      .catch(error => {
        dispatch(createRecipeFailure(error.response.data.msg));
      });
  };
}



const createRecipeSuccess = (recipe) => {
  return {
    type: CREATE_RECIPE_SUCCESS,
    recipe
  };
}

const createRecipeFailure = (error) => {
  return {
    type: CREATE_RECIPE_FAILURE,
    error
  };
}
