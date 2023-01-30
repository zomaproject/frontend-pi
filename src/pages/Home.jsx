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
import { renderPage, setPage } from "../redux/actions/paginationActons";


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

	// const { recipe }  = useSelector(state => state.createRecipe)
	// useEffect(()=> {
	// 	dispatch(cleanRecipe())
	// },[recipe?.id])

	const toRender = searchRecipes.length  ? searchRecipes : allRecipes;

	const [orden, setOrden] = useState("");

	const [selectedDiets, setSelectedDiets] = useState([]);

	function cargaRecipes() {
		if (!(orden || selectedDiets.length > 0)) {
			dispatch(renderPage(toRender));
		}
	}
	function cargarOrden() {
		if (!selectedDiets.length > 0) {
			dispatch(loadOrderDiets(orden, [...toRender]));
		}
	}


	function cargFilterDiets() {
		if (!orden) {
			dispatch(loadFilterDiets(selectedDiets, [...toRender]));
		}
	}

	function renderOrden() {
		if (orden && !selectedDiets.length > 0) {
			dispatch(renderPage(recipesOrden));
		}
	}

	function renderFilterDiets() {
		if (selectedDiets.length > 0 && !orden) {
			dispatch(renderPage(recipesFiltered));
		}
	}

	function combineFilterAndOrden() {
		if (orden  && selectedDiets.length > 0) {
			dispatch(loadFilterDiets(selectedDiets, toRender));
			dispatch(loadOrderDiets(orden, [...recipesFiltered]));
			dispatch(renderPage(recipesOrden));
		}
	}



	useEffect(combineFilterAndOrden, [
		pageCurrent,
		orden,
		selectedDiets.length,
		recipesOrden[0]?.id,
		recipesOrden.length,
		recipesFiltered.length,
		searchRecipes.length,
	]);

	useEffect(cargaRecipes, [
		pageCurrent,
		allRecipes,
		recipesOrden.length,
		recipesFiltered.length,
		searchRecipes.length,
	]);


	useEffect(renderOrden, [orden, recipesFiltered[0]?.id, recipesOrden.length, pageCurrent,selectedDiets.length, recipesOrden[0]?.id], );

	useEffect(cargarOrden, [orden, recipesOrden[0]?.id, pageCurrent, selectedDiets.length]);
	useEffect(cargFilterDiets, [selectedDiets, pageCurrent,orden, recipesOrden[0]?.id, recipesFiltered[0]?.id]);

	useEffect(renderFilterDiets, [
		selectedDiets,
		recipesFiltered.length,
		recipesOrden[0]?.id,
		recipesFiltered[0]?.id,
		pageCurrent,
		orden,
		recipesFiltered.length,
		searchRecipes.length,
	]);

const { pagesTotal} = useSelector(state => state.pagination)
	useEffect(()=> {
		if(pageCurrent > pagesTotal){
			dispatch(setPage(1))
		}
	},[pagesTotal])

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
