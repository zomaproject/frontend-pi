import {
	CLEAN_CREATE,
	CREATE_RECIPE_FAILURE,
	CREATE_RECIPE_SUCCESS,
} from "../types";
import clienteAxios from "../../config/clienteAxios";

export const createRecipe = (recipe) => {
	return async (dispatch) => {
		try {
			const response = await clienteAxios.post("/recipes", recipe, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			dispatch(createRecipeSuccess(response.data));
		} catch (e) {
			dispatch(createRecipeFailure(e.response.data.msg));
		}
	};
};

const createRecipeSuccess = (recipe) => {
	return {
		type: CREATE_RECIPE_SUCCESS,
		payload: recipe,
	};
};

export const createRecipeFailure = (msg) => {
	return {
		type: CREATE_RECIPE_FAILURE,
		payload: msg,
	};
};

export const cleanRecipe = () => {
	return {
		type: CLEAN_CREATE,
	};
};
