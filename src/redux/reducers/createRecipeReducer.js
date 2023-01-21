import { CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE } from "../types";


const INITIAL_STATE = {
  recipe: {},
  error: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.recipe,
      };
    case CREATE_RECIPE_FAILURE:
      return {
        ...state,
        error: {error: true, msg: action.error}
      };
    default:
      return state;
  }
}