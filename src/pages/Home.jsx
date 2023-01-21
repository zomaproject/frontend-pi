import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import CarsRecipe from "../components/CarsRecipe";
import FiltersBar from "../components/FiltersBar";
import Pagination from "../components/Pagination";
import { loadFilterDiets } from "../redux/actions/filterPerDiets";
import { loadDiets } from "../redux/actions/getTypeDietsAction";
import { loadOrder } from "../redux/actions/OrderAction";
import { renderPage } from "../redux/actions/paginationActons";
// import styles from "../styles/FilterBar.js";
export default function Home() {
	const searchRecipes = useSelector((state) => state.search.searchRecipe);
	const allRecipes = useSelector((state) => state.recipes.recipes);
	const toRender = searchRecipes.length > 0? searchRecipes : allRecipes;

	const pageCurrent = useSelector((state) => state.pagination.pageCurrent);

	const dispatch = useDispatch();

	const [orden, setOrden] = useState({});
	// const [diets, setDiets] = useState([]);

	const optionsOrden = [
		{ label: "A-Z (Title)", value: "A-Z" },
		{ label: "Z-A (Title)", value: "Z-A" },
		{ label: "0-9 (score)", value: "0-9" },
		{ label: "9-0 (score)", value: "9-0" },
	];
	const stateOrder = useSelector((state) => state.orden.typeOrden);
	const recipesRender = useSelector((state) => state.pagination.recipesRender);
	const recipesOrden = useSelector((state) => state.orden.recipesOrder);
	const recipesFiltered = useSelector((state) => state.filter.recipesFiltered);
	const arrFilters = useSelector((state) => state.filter.arrFilters);
	const alertSearch = useSelector((state) => state.search.alertSearch);

	const typesOfDiets = useSelector((state) => state.typesDiets.diets);
	const optionsDiets = typesOfDiets.map((diet) => ({
		label: diet.name,
		value: diet.name,
	}));

	useEffect(() => {
		if (stateOrder) {
			dispatch(loadOrder(toRender));
		} else {
			dispatch(renderPage(toRender));
		}
	}, [stateOrder, pageCurrent, toRender]);

	useEffect(() => {
		if (recipesOrden.length > 0) {
			dispatch(renderPage(recipesOrden));
		}
	}, [stateOrder, pageCurrent, recipesOrden]);


	// useEffect(() => {
	// 	dispatch(loadFilterDiets(diets, toRender));
	// }, [diets]);

	// useEffect(() => {
	// 	if (arrFilters.length > 0) {
	// 		dispatch(renderPage(recipesFiltered));
	// 	} else {
	// 		dispatch(renderPage(toRender));
	// 	}
	// }, [recipesFiltered, pageCurrent, diets]);
	return (
		<>
			<div className={'container'}>
				<FiltersBar
					// diets={diets}
					// setDiets={setDiets}
					// optionsDiets={optionsDiets}
					orden={orden}
					setOrden={setOrden}
					optionsOrden={optionsOrden}
				/>
				{alertSearch.msg ? (
					<Alert error={alertSearch.error}>{alertSearch.msg}</Alert>	
				) : (
					<CarsRecipe recipes={recipesRender} />
				)}
			</div>

			<Pagination />
		</>
	);
}
