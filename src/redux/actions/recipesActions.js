import clienteAxios from "../../config/clienteAxios";
import {
	LOAD_DATA,
	CLEAN_MSG,
	CLEAN_CREATE,
	SET_RECIPE_TO_EDIT,
	UPDATE_DELETE,
	UPDATE_RECIPES,
	UPDATE_EDIT,
	MESSAGE_STATE_RECIPES,
} from "../types";

const setRecipes = (recipes) => {
	return {
		type: LOAD_DATA,
		payload: recipes,
	};
};

export const dowloadData = () => {
	return async (dispatch) => {
		try {
			const { data } = await clienteAxios("/recipes");
			dispatch(setRecipes(data));
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const updateRecipesAfterCreate = (recipe) => {
	return {
		type: UPDATE_RECIPES,
		payload: recipe,
	};
};

const updateRecipeAfterDelete = (id) => {
	return {
		type: UPDATE_DELETE,
		payload: id,
	};
};

export const setMsg = (msg) => {
	return {
		type: MESSAGE_STATE_RECIPES,
		payload: msg,
	};
};

export const cleanMsg = () => {
	return {
		type: CLEAN_MSG,
	};
};

export const setEdit = (recipeToEdit) => {
	return {
		type: SET_RECIPE_TO_EDIT,
		payload: recipeToEdit,
	};
};

const updateStateRecipeAfterEdit = (recipe) => {
	return {
		type: UPDATE_EDIT,
		payload: recipe,
	};
};

//delete recipe
const deleteRecipeDB = async (id) => {
	const { data } = await clienteAxios.delete(`/recipes/${id}`);
	return data;
};

export const deleteRecipe = (id) => {
	return async (dispatch) => {
		try {
			const data = await deleteRecipeDB(id);
			dispatch(updateRecipeAfterDelete(id));
			dispatch(setMsg({ msg: data.msg, error: false }));
			setTimeout(() => {
				dispatch(cleanMsg());
			}, 3000);
		} catch (e) {
			dispatch(setMsg(e.reponse.data.msg));
			setTimeout(() => {
				dispatch(cleanMsg());
			}, 3000);
		}
	};
};

// update recipe
export const updateRecipe = (recipe, id) => {
	return async (dispatch) => {
		try {
			const { data } = await clienteAxios.put(`/recipes/${id}`, recipe, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			dispatch(updateStateRecipeAfterEdit(data));
			dispatch(setMsg({ msg: "Recipe updated", error: false }));
			setTimeout(() => {
				dispatch(cleanMsg());
			}
			, 3000);
		} catch (error) {
			dispatch(setMsg({ msg: error.response.data.msg, error: true }));
		}
	};
};

// create recipe
export const createRecipe = (recipe) => {
	return async (dispatch) => {
		try {
			const { data } = await clienteAxios.post("/recipes", recipe, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			dispatch(setMsg({ msg: "Recipe created", error: false }));
			setTimeout(() => {
				dispatch(cleanMsg());
			}, 3000);
			dispatch(updateRecipesAfterCreate(data));
		} catch (e) {
			dispatch(setMsg({ msg: e.response.data.msg, error: true }));
			setTimeout(() => {
				dispatch(cleanMsg());
			}
			, 3000);
		}
	};
};

export const cleanRecipe = () => {
	return {
		type: CLEAN_CREATE,
	};
};
