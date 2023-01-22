import { useSelector } from "react-redux";

export default function useReduxStates()  {
	const searchRecipes = useSelector((state) => state.search.searchRecipe);
	const allRecipes = useSelector((state) => state.recipes.recipes);
	const stateOrder = useSelector((state) => state.orden.typeOrden);
	const recipesRender = useSelector((state) => state.pagination.recipesRender);
	const recipesOrden = useSelector((state) => state.orden.recipesOrder);
	const recipesFiltered = useSelector((state) => state.filter.recipesFiltered);
	const arrFilters = useSelector((state) => state.filter.arrFilters);
	const pageCurrent = useSelector((state) => state.pagination.pageCurrent);
	const alertSearch = useSelector((state) => state.search.alertSearch);
  return { 
    pageCurrent,
    searchRecipes,
    allRecipes,
    stateOrder,
    recipesRender,
    recipesOrden,
    recipesFiltered,
    arrFilters,
    alertSearch
  } 
}
