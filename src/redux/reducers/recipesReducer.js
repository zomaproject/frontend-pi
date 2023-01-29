import { LOAD_DATA, MENSAJE_STATE_RECIPES, SET_RECIPE_TO_EDIT, UPDATE_DELETE, UPDATE_RECIPES } from "../types";

const INITIAL_STATE = {
	recipes: [],
	msg: {},
	recipeToEdit : {}
};

export default function recipesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				recipes: action.payload,
			};
		case UPDATE_RECIPES:
			return {
				...state,
				recipes: [action.payload, ...state.recipes],
			};
		case UPDATE_DELETE:
			return {
				...state,
				recipes: state.recipes.filter((e) => e.id !== action.payload),
			};
		case MENSAJE_STATE_RECIPES:
			return {
				...state,
				msg: action.payload,
			};
		case SET_RECIPE_TO_EDIT:
			return {
				...state,
				recipeToEdit: action.payload
			}
		default:
			return { ...state };
	}
}
