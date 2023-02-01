import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/actions/loadingAction";
import { clearSearch, searchRecipeAction } from "../redux/actions/searchAction";
import "../styles/Search.module.css";
import styles from "../styles/Filter.module.css";
import MultiSelect from "./MultiSelect";
import useDiets from "../hooks/useDiets";
import Orden from "./Orden";

export default function FiltersBar({
	orden,
	setOrden,
	selectedDiets,
	setSelectedDiets,
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
		setOrden('')
		setSelectedDiets([])
		dispatch(searchRecipeAction(search)).then(() => dispatch(loading(false)));
	};

	const clear = () => {
		setSearch("");
		setOrden('')
		setSelectedDiets([])
		dispatch(clearSearch());
	};

	const optionsDiets = useDiets()
	
	return (
		<>
			<div className={styles.flex}>
				<div>
						<MultiSelect  optionsLabel={optionsDiets} options = {selectedDiets} setOptions={setSelectedDiets} />
				</div>

				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Search...  Ctrl-K"
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
								<Orden orden={orden } setOrden={setOrden}/>	
							</div>
			</div>
		</>
	);
}
