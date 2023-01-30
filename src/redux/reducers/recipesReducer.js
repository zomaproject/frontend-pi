import {
	LOAD_DATA,
	CLEAN_MSG,
	MENSAJE_STATE_RECIPES,
	SET_RECIPE_TO_EDIT,
	UPDATE_DELETE,
	UPDATE_EDIT,
	UPDATE_RECIPES,
} from "../types";

const INITIAL_STATE = {
	recipes: [],
	msg: { error: null, msg: null },
	recipeToEdit: {},
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
		case UPDATE_EDIT:
			return {
				...state,
				recipes: state.recipes.map((e) =>
					e.id === action.payload.id ? action.payload : e,
				),
			};
		case MENSAJE_STATE_RECIPES:
			return {
				...state,
				msg: action.payload,
			};
		case SET_RECIPE_TO_EDIT:
			return {
				...state,
				recipeToEdit: action.payload,
			};
		case CLEAN_MSG:
			return {
				...state,
				msg: { error: null, msg: null },
			};
		default:
			return { ...state };
	}
}
