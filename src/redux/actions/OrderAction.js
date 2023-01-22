import { SET_ORDEN, ORDER, CLEAN_ORDER } from "../types";

export const setOrdenState = (orden) => {
	return {
		type: SET_ORDEN,
		payload: orden,
	};
};

const recipesToOrder = (recipes) => {
	return {
		type: ORDER,
		payload: recipes,
	};
};

export const cleanOrden = () => {
	return {
		type: CLEAN_ORDER,
	};
};

export const loadOrderDiets = (orden, recipes) => {
	return (dispatch) => {
		dispatch(setOrdenState(orden));
		dispatch(recipesToOrder(recipes));
	};
};
