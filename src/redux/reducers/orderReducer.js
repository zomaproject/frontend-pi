import { CLEAN_ORDER, ORDER, SET_ORDEN } from "../types";

const INITIAL_STATE = {
	typeOrden: "",
	recipesOrder: [],
};

export default function orderReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ORDEN:
			return {
				...state,
				typeOrden: action.payload,
			};
		case ORDER:
			if (state.typeOrden === "A-Z") {
				return {
					...state,
					recipesOrder: action.payload.sort((a, b) => {
						if (a.title > b.title) {
							return 1;
						}
						if (a.title < b.title) {
							return -1;
						}
						return 0;
					}),
				};
			}
			if (state.typeOrden === "Z-A") {
				return {
					...state,
					recipesOrder: action.payload.sort((a, b) => {
						if (a.title < b.title) {
							return 1;
						}
						if (a.title > b.title) {
							return -1;
						}
						return 0;
					}),
				};
			}
      if(state.typeOrden === ""){
        return {
          typeOrden: "",
          recipesOrder: [],
        }
      }
		case CLEAN_ORDER:
			return {
				typeOrden: "",
				recipesOrder: [],
			};
		default:
			return state;
	}
}
