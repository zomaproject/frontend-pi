import { CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE, CLEAN_CREATE } from "../types";


const INITIAL_STATE = {
  recipe: {},
  msg: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        msg: {error: false , msg: 'Receta creada correctamente'}
      };
    case CREATE_RECIPE_FAILURE:
      return {
        ...state,
        msg: {error: true, msg: action.payload}
      };
    case CLEAN_CREATE:
      return {
        recipe: {},
        msg: {},
      }

    default:
      return state;
  }
}
