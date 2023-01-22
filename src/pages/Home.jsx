import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import CarsRecipe from "../components/CarsRecipe";
import FiltersBar from "../components/FiltersBar";
import Pagination from "../components/Pagination";
import useReduxStates from "../hooks/useReduxStates";
import { loadFilterDiets } from "../redux/actions/filterPerDiets";
import {
	cleanOrden,
	loadOrderDiets,
	setOrdenState,
} from "../redux/actions/OrderAction";
import { renderPage } from "../redux/actions/paginationActons";
export default function Home() {
	const dispatch = useDispatch();

	const {
		pageCurrent,
		alertSearch,
		allRecipes,
		arrFilters,
		recipesFiltered,
		recipesOrden,
		recipesRender,
		searchRecipes,
		stateOrder,
	} = useReduxStates();

	const toRender = searchRecipes.length > 0 ? searchRecipes : allRecipes;

	const [orden, setOrden] = useState("");

	const [selectedDiets, setSelectedDiets] = useState([]);

	function cargaRecipes() {
		if (!(orden || selectedDiets.length > 0)) {
			dispatch(renderPage(toRender));
		}
	}
	function cargarOrden() {
		if (orden && !selectedDiets.length > 0) {
			dispatch(loadOrderDiets(orden, [...toRender]));
		}else {
			dispatch(cleanOrden())
		}
	}

	function renderOrden() {
		if (orden && !selectedDiets.length > 0) {
			dispatch(renderPage(recipesOrden));
		}
	}

	function cargFilterDiets() {
		if (selectedDiets.length > 0 && !orden) {
			dispatch(loadFilterDiets(selectedDiets, toRender));
		}else{
			dispatch(loadFilterDiets([],toRender))
		}
	}

	function renderFilterDiets() {
		if (selectedDiets.length > 0 && !orden) {
			dispatch(renderPage(recipesFiltered));
		}
	}

	useEffect(cargaRecipes, [pageCurrent,allRecipes, recipesOrden.length, recipesFiltered.length]);

	useEffect(cargarOrden, [orden]);

	useEffect(renderOrden, [orden,recipesOrden.length, pageCurrent]);

	useEffect(cargFilterDiets, [selectedDiets, pageCurrent]);

	useEffect(renderFilterDiets, [selectedDiets,recipesFiltered.length, pageCurrent]);
	return (
		<>
			<div className={"container"}>
				<FiltersBar
					selectedDiets={selectedDiets}
					setSelectedDiets={setSelectedDiets}
					orden={orden}
					setOrden={setOrden}
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
