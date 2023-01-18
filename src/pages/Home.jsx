import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsRecipe from "../components/CarsRecipe";
import FiltersBar from "../components/FiltersBar";
import Pagination from "../components/Pagination";
import { loadFilterDiets } from "../redux/actions/filterPerDiets";
import { loadDiets } from "../redux/actions/getTypeDietsAction";
import { loadOrder } from "../redux/actions/OrderAction";
import { renderPage } from "../redux/actions/paginationActons";
import styles from "../styles/displayHome.module.css";
export default function Home() {
	const allRecipes = useSelector((state) => state.recipes.recipes);

	const searchRecipe = useSelector((state) => state.search.searchRecipe);

	const pageCurrent = useSelector((state) => state.pagination.pageCurrent);

	const dispatch = useDispatch();

	const [orden, setOrden] = useState({});
	const [diets, setDiets] = useState([]);

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
	const typesOfDiets = useSelector((state) => state.typesDiets.diets);
	const arrFilters = useSelector((state) => state.filter.arrFilters);
	const optionsDiets = typesOfDiets.map((diet) => ({
		label: diet.name,
		value: diet.name,
	}));

	useEffect(() => {
		if (stateOrder) {
			dispatch(loadOrder(allRecipes));
		} else {
			dispatch(renderPage(allRecipes));
		}
	}, [stateOrder, pageCurrent, allRecipes]);

	useEffect(() => {
		if (recipesOrden.length > 0) {
			dispatch(renderPage(recipesOrden));
		}
	}, [stateOrder, pageCurrent, recipesOrden]);

	useEffect(() => {
		dispatch(loadDiets());
	}, []);

	useEffect(() => {
		dispatch(loadFilterDiets(diets, allRecipes));
	}, [diets]);

	useEffect(() => {
		if (arrFilters.length > 0) {
			dispatch(renderPage(recipesFiltered));
		}else{
      dispatch(renderPage(allRecipes));
    }
	}, [recipesFiltered, pageCurrent, diets]);
	return (
		<>
			<div className={`container ${styles.layout}`}>
				<FiltersBar
					diets={diets}
					setDiets={setDiets}
					optionsDiets={optionsDiets}
					orden={orden}
					setOrden={setOrden}
					optionsOrden={optionsOrden}
				/>
				<CarsRecipe recipes={recipesRender} />
			</div>

			<Pagination />
		</>
	);
}
