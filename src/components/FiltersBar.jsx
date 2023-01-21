import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/actions/loadingAction";
import { loadOrder, setOrdenState } from "../redux/actions/OrderAction";
import { clearSearch, searchRecipeAction } from "../redux/actions/searchAction";
import "../styles/Search.module.css";
import styles from "../styles/Filter.module.css";

export default function FiltersBar({
	orden,
	setOrden,
	optionsOrden,
	diets,
	setDiets,
	optionsDiets,
}) {
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setSearch(e.target.value);
		if (e.target.value === "") {
			dispatch(clearSearch());
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		dispatch(loading(true));
		dispatch(searchRecipeAction(search)).then(() => dispatch(loading(false)));
	};

	const clear = () => {
		setSearch("");
		dispatch(clearSearch());
	};

	return (
		<>
			<div className={styles.flex}>
				<div>
					<p>Tipo de Dieta</p>
					{/* <Select
						multiple
						onChange={(o) => setDiets(o)}
						options={optionsDiets}
						value={diets}
					/> */}
				</div>

				<div>
					<p>Busqueda </p>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Search..."
							value={search}
							onChange={handleChange}
						/>
						{search && (
							<button type="button" onClick={clear}>
								&times;
							</button>
						)}
						<button type="submit">Search</button>
					</form>
				</div>

				<div>
					<p>Tipo de orden</p>
					{/* <Select
						onChange={(o) => {
							setOrden(o);
							dispatch(setOrdenState(o.value));
						}}
						options={optionsOrden}
						value={orden}
					/> */}
				</div>
			</div>
		</>
	);
}
